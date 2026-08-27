/**
 * Landmark Identifier - Main Application Logic
 * Handles image hashing, recognition engine interaction, UI rendering, and local storage management.
 */

import { LandmarkRecognitionEngine } from "../../frontend/js-modules/landmark-recognition-engine.js";

// ==========================================================================
// 1. Configuration & Constants
// ==========================================================================
const CONFIG = {
  HASH_SIZE: 8, // 8x8 -> 64-bit hash, matches js-modules/landmark-data.js
  MAX_FILE_BYTES: 8 * 1024 * 1024, // 8 MB
  ACCEPTED_TYPES: ["image/jpeg", "image/png", "image/webp"],
  HISTORY_STORAGE_KEY: "landmarkIdentifier.history.v2", // Bumped version for clean slate if needed
  MIN_CONFIDENCE: 0.55,
  MAX_ALT_MATCHES: 4,
  MAX_NEARBY_ATTRACTIONS: 6
};

// ==========================================================================
// 2. State Management
// ==========================================================================
const state = {
  currentFile: null,
  currentObjectUrl: null,
  engine: null,
  landmarks: [],
  tripDestinations: []
};

// ==========================================================================
// 3. Utility Functions
// ==========================================================================

/**
 * Safely retrieves and parses history from localStorage.
 * @returns {Array} Array of history entries.
 */
function loadStoredHistory() {
  try {
    const raw = localStorage.getItem(CONFIG.HISTORY_STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch (err) {
    console.warn("Failed to load history from localStorage:", err);
    return [];
  }
}

/**
 * Persists the current engine history to localStorage.
 * @param {LandmarkRecognitionEngine} engineInstance 
 */
function persistHistory(engineInstance) {
  try {
    localStorage.setItem(CONFIG.HISTORY_STORAGE_KEY, JSON.stringify(engineInstance.getHistory()));
  } catch (err) {
    console.warn("Failed to save history to localStorage (quota exceeded or private mode):", err);
  }
}

/**
 * Computes a 64-bit average-hash (aHash) for an <img> element using a canvas.
 * Downscale to 8x8, convert to grayscale, threshold at the mean.
 * @param {HTMLImageElement} imgEl - The loaded image element.
 * @returns {string} 64-character binary string representing the image hash.
 */
function computeImageHash(imgEl) {
  const canvas = document.createElement("canvas");
  canvas.width = CONFIG.HASH_SIZE;
  canvas.height = CONFIG.HASH_SIZE;
  const ctx = canvas.getContext("2d", { willReadFrequently: true });
  
  // Draw image scaled down to 8x8
  ctx.drawImage(imgEl, 0, 0, CONFIG.HASH_SIZE, CONFIG.HASH_SIZE);

  const { data } = ctx.getImageData(0, 0, CONFIG.HASH_SIZE, CONFIG.HASH_SIZE);
  const grays = [];
  
  // Convert to grayscale using standard luma weights
  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    grays.push(0.299 * r + 0.587 * g + 0.114 * b);
  }

  const avg = grays.reduce((sum, v) => sum + v, 0) / grays.length;
  return grays.map((v) => (v >= avg ? "1" : "0")).join("");
}

/**
 * Converts a File object to an Image element via Object URL.
 * @param {File} file - The image file to process.
 * @returns {Promise<{img: HTMLImageElement, url: string}>}
 */
function fileToImage(file) {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file);
    const img = new Image();
    
    img.onload = () => resolve({ img, url });
    img.onerror = () => {
      URL.revokeObjectURL(url); // Prevent memory leak on error
      reject(new Error("Could not read or decode this image file. It may be corrupted."));
    };
    img.src = url;
  });
}

/**
 * Determines the CSS class for confidence level.
 * @param {number} confidence - Value between 0 and 1.
 * @returns {string} CSS class name.
 */
function getConfidenceClass(confidence) {
  if (confidence >= 0.75) return "confidence-high";
  if (confidence >= CONFIG.MIN_CONFIDENCE) return "confidence-medium";
  return "confidence-low";
}

/**
 * Updates the status message and aria-live region for accessibility.
 * @param {string} message - The status message to display.
 * @param {boolean} isError - Whether the message is an error.
 */
function updateStatus(message, isError = false) {
  const statusEl = document.getElementById("upload-status");
  if (!statusEl) return;
  
  statusEl.textContent = message;
  statusEl.classList.toggle("is-error", isError);
  statusEl.classList.toggle("is-success", !isError && message.length > 0);
  
  // Announce to screen readers
  statusEl.setAttribute("aria-live", "polite");
}

/**
 * Toggles a loading state on the identify button.
 * @param {boolean} isLoading 
 */
function setLoadingState(isLoading) {
  const btn = document.getElementById("identify-btn");
  if (!btn) return;
  
  btn.disabled = isLoading;
  btn.innerHTML = isLoading 
    ? '<span class="spinner"></span> Analyzing...' 
    : 'Identify Landmark';
}

// ==========================================================================
// 4. Rendering Functions
// ==========================================================================

/**
 * Renders the primary identification result.
 * @param {Object} match - The best match object { landmark, confidence }.
 * @param {boolean} isConfident - Whether the match meets the confidence threshold.
 */
function renderResult(match, isConfident) {
  const { landmark, confidence } = match;
  
  // Update Image
  const resultImg = document.getElementById("result-image");
  resultImg.src = landmark.image;
  resultImg.alt = `Identified landmark: ${landmark.name}`;
  
  // Update Text Content
  document.getElementById("result-name").textContent = landmark.name;
  document.getElementById("result-category").textContent = landmark.category || "Historical Landmark";
  document.getElementById("result-location").textContent = [landmark.city, landmark.state].filter(Boolean).join(", ") || "Location Unknown";
  document.getElementById("result-description").textContent = landmark.description || "No description available.";
  document.getElementById("result-built").textContent = landmark.built || "Unknown";
  document.getElementById("result-best-time").textContent = landmark.bestTimeToVisit || "Year-round";
  document.getElementById("result-significance").textContent = landmark.significance || "No specific significance recorded.";

  // Update Confidence Badge
  const badge = document.getElementById("confidence-badge");
  badge.textContent = `${Math.round(confidence * 100)}% Match`;
  badge.className = `confidence-badge ${getConfidenceClass(confidence)}`;

  // Update Nearby Attractions
  const related = LandmarkRecognitionEngine.getRelatedDestinations(landmark, state.tripDestinations);
  const nearbyNames = related.length
    ? related.flatMap((r) => (r.highlights && r.highlights.length ? r.highlights : [r.name]))
    : (landmark.nearbyAttractions || []);
    
  const nearbyList = document.getElementById("nearby-list");
  nearbyList.innerHTML = "";
  
  const displayNames = (nearbyNames.length ? nearbyNames : ["No nearby attractions on file yet"])
    .slice(0, CONFIG.MAX_NEARBY_ATTRACTIONS);
    
  displayNames.forEach((name) => {
    const li = document.createElement("li");
    li.textContent = name;
    nearbyList.appendChild(li);
  });

  // Toggle Visibility
  document.getElementById("best-match-card").hidden = false;
  document.getElementById("low-confidence-notice").hidden = isConfident;
}

/**
 * Renders alternative matches in a grid.
 * @param {Array} matches - Array of match objects.
 * @param {string} skipId - ID of the best match to exclude from alternatives.
 */
function renderAltMatches(matches, skipId) {
  const wrap = document.getElementById("alt-matches");
  const grid = document.getElementById("alt-match-grid");
  grid.innerHTML = "";

  const alts = matches.filter((m) => m.landmark.id !== skipId).slice(0, CONFIG.MAX_ALT_MATCHES);
  
  if (alts.length === 0) {
    wrap.hidden = true;
    return;
  }

  alts.forEach(({ landmark, confidence }) => {
    const card = document.createElement("div");
    card.className = "alt-match-card";
    card.setAttribute("tabindex", "0");
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", `View details for ${landmark.name}, ${Math.round(confidence * 100)}% match`);
    
    card.innerHTML = `
      <img src="${landmark.image}" alt="${landmark.name}" loading="lazy">
      <div class="alt-match-info">
        <strong>${landmark.name}</strong>
        <span>${Math.round(confidence * 100)}% match</span>
      </div>
    `;
    
    // Add click/keyboard handler to potentially expand or navigate (placeholder for future)
    card.addEventListener("click", () => {
      console.log(`Selected alternative: ${landmark.name}`);
      // Future: Could swap this into the main result card
    });
    
    grid.appendChild(card);
  });

  wrap.hidden = false;
}

/**
 * Renders the user's identification history.
 */
function renderHistory() {
  const list = document.getElementById("history-list");
  const empty = document.getElementById("history-empty");
  const history = state.engine.getHistory();

  list.innerHTML = "";
  
  if (history.length === 0) {
    empty.hidden = false;
    list.hidden = true;
    return;
  }

  empty.hidden = true;
  list.hidden = false;
  
  // Show most recent first
  [...history].reverse().forEach((entry) => {
    const li = document.createElement("li");
    const date = new Date(entry.timestamp);
    const confidenceText = typeof entry.confidence === "number" 
      ? `${Math.round(entry.confidence * 100)}%` 
      : "--";
      
    li.innerHTML = `
      <span class="history-name">${entry.landmarkName}</span>
      <div class="history-meta">
        <span class="history-confidence">${confidenceText}</span>
        <span class="history-date">${date.toLocaleDateString()}</span>
        <button class="history-delete" aria-label="Remove ${entry.landmarkName} from history" data-id="${entry.landmarkId}">&times;</button>
      </div>
    `;
    list.appendChild(li);
  });

  // Attach delete listeners
  list.querySelectorAll(".history-delete").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const id = e.target.dataset.id;
      state.engine.removeFromHistory(id);
      persistHistory(state.engine);
      renderHistory();
      updateStatus("Entry removed from history.", false);
    });
  });
}

/**
 * Renders the static library of all known landmarks.
 */
function renderLibrary() {
  const grid = document.getElementById("library-grid");
  if (!grid) return;
  
  grid.innerHTML = "";
  state.landmarks.forEach((landmark) => {
    const card = document.createElement("div");
    card.className = "library-card";
    card.setAttribute("tabindex", "0");
    card.innerHTML = `
      <img src="${landmark.image}" alt="${landmark.name}" loading="lazy">
      <div class="library-info">
        <strong>${landmark.name}</strong>
        <span>${landmark.state}</span>
      </div>
    `;
    grid.appendChild(card);
  });
}

// ==========================================================================
// 5. Validation & File Handling
// ==========================================================================

/**
 * Validates the uploaded file against size and type constraints.
 * @param {File} file 
 * @returns {string|null} Error message string, or null if valid.
 */
function validateFile(file) {
  if (!file) return "Please choose an image file.";
  if (!CONFIG.ACCEPTED_TYPES.includes(file.type)) {
    return "Unsupported format. Please upload a JPG, PNG, or WEBP image.";
  }
  if (file.size > CONFIG.MAX_FILE_BYTES) {
    return `That image is larger than ${CONFIG.MAX_FILE_BYTES / (1024 * 1024)} MB. Please choose a smaller file.`;
  }
  return null;
}

/**
 * Resets the upload UI to its initial state.
 */
function resetUpload() {
  if (state.currentObjectUrl) {
    URL.revokeObjectURL(state.currentObjectUrl);
    state.currentObjectUrl = null;
  }
  
  state.currentFile = null;
  
  const fileInput = document.getElementById("landmark-file");
  const previewImage = document.getElementById("preview-image");
  const dropZoneInner = document.getElementById("drop-zone-inner");
  const identifyBtn = document.getElementById("identify-btn");
  const clearBtn = document.getElementById("clear-btn");
  
  if (fileInput) fileInput.value = "";
  if (previewImage) {
    previewImage.hidden = true;
    previewImage.src = "";
  }
  if (dropZoneInner) dropZoneInner.hidden = false;
  if (identifyBtn) identifyBtn.disabled = true;
  if (clearBtn) clearBtn.hidden = true;
  
  updateStatus("");
}

// ==========================================================================
// 6. Initialization & Event Listeners
// ==========================================================================

function init() {
  // 1. Initialize Data
  state.landmarks = (window.landmarkData && window.landmarkData.landmarks) || [];
  state.tripDestinations = window.tripDestinations || [];
  
  if (state.landmarks.length === 0) {
    console.warn("No landmark data found. Ensure landmark-data.js is loaded before this script.");
  }

  // 2. Initialize Engine
  state.engine = new LandmarkRecognitionEngine({
    landmarks: state.landmarks,
    history: loadStoredHistory(),
    minConfidence: CONFIG.MIN_CONFIDENCE
  });

  // 3. Initial Renders
  renderLibrary();
  renderHistory();

  // 4. DOM Elements
  const fileInput = document.getElementById("landmark-file");
  const dropZone = document.getElementById("drop-zone");
  const dropZoneInner = document.getElementById("drop-zone-inner");
  const previewImage = document.getElementById("preview-image");
  const identifyBtn = document.getElementById("identify-btn");
  const clearBtn = document.getElementById("clear-btn");
  const form = document.getElementById("upload-form");
  const resultsSection = document.getElementById("results-section");

  if (!fileInput || !dropZone || !form) {
    console.error("Critical DOM elements missing for Landmark Identifier.");
    return;
  }

  // 5. File Handling Logic
  function handleFile(file) {
    const error = validateFile(file);
    if (error) {
      updateStatus(error, true);
      resetUpload();
      return;
    }
    
    state.currentFile = file;
    if (state.currentObjectUrl) URL.revokeObjectURL(state.currentObjectUrl);
    state.currentObjectUrl = URL.createObjectURL(file);
    
    previewImage.src = state.currentObjectUrl;
    previewImage.hidden = false;
    dropZoneInner.hidden = true;
    identifyBtn.disabled = false;
    clearBtn.hidden = false;
    
    updateStatus(`Ready to identify "${file.name}".`);
  }

  // File Input Change
  fileInput.addEventListener("change", (e) => {
    const file = e.target.files && e.target.files[0];
    if (file) handleFile(file);
  });

  // Drag & Drop Events
  ["dragenter", "dragover"].forEach((evt) => {
    dropZone.addEventListener(evt, (e) => {
      e.preventDefault();
      e.stopPropagation();
      dropZone.classList.add("drag-active");
    });
  });

  ["dragleave", "drop"].forEach((evt) => {
    dropZone.addEventListener(evt, (e) => {
      e.preventDefault();
      e.stopPropagation();
      dropZone.classList.remove("drag-active");
    });
  });

  dropZone.addEventListener("drop", (e) => {
    const file = e.dataTransfer.files && e.dataTransfer.files[0];
    if (file) handleFile(file);
  });

  // Clear Button
  clearBtn.addEventListener("click", resetUpload);

  // Form Submission (Identification)
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (!state.currentFile) return;

    setLoadingState(true);
    updateStatus("Analyzing image features...");
    resultsSection.hidden = true;

    try {
      const { img, url } = await fileToImage(state.currentFile);
      const hash = computeImageHash(img);
      
      // Clean up object URL immediately after hashing to free memory
      URL.revokeObjectURL(url);
      state.currentObjectUrl = null;

      const { matches, best, isConfident } = state.engine.identify(hash, { topN: 5 });

      if (!best) {
        updateStatus("No landmarks in our database closely match this image. Try a clearer photo.", true);
        resultsSection.hidden = true;
        return;
      }

      renderResult(best, isConfident);
      renderAltMatches(matches, best.landmark.id);

      // Save to history
      state.engine.addToHistory({
        landmarkId: best.landmark.id,
        landmarkName: best.landmark.name,
        confidence: best.confidence,
        timestamp: Date.now()
      });
      persistHistory(state.engine);
      renderHistory();

      resultsSection.hidden = false;
      
      // Smooth scroll to results
      setTimeout(() => {
        resultsSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
      
      updateStatus(isConfident ? "Match found successfully!" : "Best-effort match shown (low confidence).", !isConfident);
      
    } catch (err) {
      console.error("Identification error:", err);
      updateStatus(err.message || "Something went wrong while analyzing the image.", true);
    } finally {
      setLoadingState(false);
    }
  });

  // Clear History Button
  const clearHistoryBtn = document.getElementById("clear-history-btn");
  if (clearHistoryBtn) {
    clearHistoryBtn.addEventListener("click", () => {
      if (confirm("Are you sure you want to clear your entire identification history?")) {
        state.engine.clearHistory();
        persistHistory(state.engine);
        renderHistory();
        updateStatus("History cleared.", false);
      }
    });
  }
}

// ==========================================================================
// 7. Bootstrapping
// ==========================================================================
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}