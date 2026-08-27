/**
 * Language Diversity Map - Interactive Logic
 * Handles layer switching, dynamic card rendering, and tooltip interactions.
 */

document.addEventListener('DOMContentLoaded', () => {
  // State
  let currentLayer = 1;
  const totalLayers = 3;

  // Layer Data
  const layerData = {
    1: {
      title: "Layer 1: Top 5 National Languages",
      desc: "Covers the top 5 most spoken scheduled languages of India, accounting for over 65% of the total population.",
      count: 5,
      languages: [
        { name: "Hindi", speakers: "528M", family: "Indo-Aryan" },
        { name: "Bengali", speakers: "97M", family: "Indo-Aryan" },
        { name: "Marathi", speakers: "83M", family: "Indo-Aryan" },
        { name: "Telugu", speakers: "81M", family: "Dravidian" },
        { name: "Tamil", speakers: "69M", family: "Dravidian" }
      ]
    },
    2: {
      title: "Layer 2: Major Regional Languages",
      desc: "Reveals significant regional languages that dominate their respective states, adding another 20% to the linguistic coverage.",
      count: 11,
      languages: [
        { name: "Gujarati", speakers: "55M", family: "Indo-Aryan" },
        { name: "Kannada", speakers: "43M", family: "Dravidian" },
        { name: "Odia", speakers: "37M", family: "Indo-Aryan" },
        { name: "Malayalam", speakers: "34M", family: "Dravidian" },
        { name: "Punjabi", speakers: "33M", family: "Indo-Aryan" },
        { name: "Assamese", speakers: "15M", family: "Indo-Aryan" }
      ]
    },
    3: {
      title: "Layer 3: Diverse Linguistic Pockets",
      desc: "Highlights the rich tapestry of smaller, yet culturally vital language communities across the subcontinent.",
      count: 15,
      languages: [
        { name: "Kashmiri", speakers: "6.8M", family: "Dardic" },
        { name: "Santali", speakers: "7.3M", family: "Austroasiatic" },
        { name: "Konkani", speakers: "2.5M", family: "Indo-Aryan" },
        { name: "Manipuri", speakers: "1.8M", family: "Sino-Tibetan" }
      ]
    }
  };

  // DOM Elements
  const layerOverlays = document.querySelectorAll('.map-lang-overlay');
  const detailTitle = document.getElementById('detail-heading');
  const detailDesc = document.getElementById('active-layer-desc');
  const accumulatedCount = document.getElementById('accumulated-count');
  const cardsGrid = document.getElementById('language-cards-grid');
  const prevBtn = document.getElementById('prev-layer-btn');
  const nextBtn = document.getElementById('next-layer-btn');
  const stepperNav = document.getElementById('layer-stepper-nav');
  const progressDots = document.querySelectorAll('.progress-dot');
  const tooltip = document.getElementById('map-tooltip');
  const markers = document.querySelectorAll('.lang-marker');

  // Initialize Stepper Nav
  function initStepper() {
    stepperNav.innerHTML = '';
    for (let i = 1; i <= totalLayers; i++) {
      const btn = document.createElement('button');
      btn.className = `stepper-btn ${i === currentLayer ? 'active' : ''}`;
      btn.textContent = `Layer ${i}`;
      btn.setAttribute('aria-label', `Switch to Layer ${i}`);
      btn.setAttribute('aria-pressed', i === currentLayer);
      btn.addEventListener('click', () => setLayer(i));
      stepperNav.appendChild(btn);
    }
  }

  // Update UI for a specific layer
  function setLayer(layerNum) {
    currentLayer = layerNum;
    const data = layerData[currentLayer];

    // 1. Update Map Overlays
    layerOverlays.forEach(overlay => {
      const layer = parseInt(overlay.dataset.layer);
      if (layer <= currentLayer) {
        overlay.classList.remove('layer-hidden');
        overlay.classList.add('layer-active');
      } else {
        overlay.classList.remove('layer-active');
        overlay.classList.add('layer-hidden');
      }
    });

    // 2. Update Detail Card Text
    detailTitle.textContent = data.title;
    detailDesc.textContent = data.desc;
    accumulatedCount.textContent = `${data.count} Languages Revealed`;

    // 3. Update Buttons State
    prevBtn.disabled = currentLayer === 1;
    nextBtn.disabled = currentLayer === totalLayers;

    // 4. Update Stepper & Progress
    const stepperBtns = stepperNav.querySelectorAll('.stepper-btn');
    stepperBtns.forEach((btn, index) => {
      const isActive = index + 1 === currentLayer;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-pressed', isActive);
    });

    progressDots.forEach((dot, index) => {
      dot.classList.toggle('active', index + 1 === currentLayer);
    });

    // 5. Render Cards
    renderCards(data.languages);
  }

  // Render Language Cards
  function renderCards(languages) {
    // Show skeleton briefly for smooth transition effect
    cardsGrid.innerHTML = `
      <div class="skeleton-card" aria-hidden="true">
        <div class="skeleton-line short"></div>
        <div class="skeleton-line"></div>
        <div class="skeleton-line"></div>
      </div>
    `;

    setTimeout(() => {
      cardsGrid.innerHTML = '';
      languages.forEach(lang => {
        const card = document.createElement('div');
        card.className = 'lang-info-card';
        card.setAttribute('role', 'listitem');
        card.innerHTML = `
          <div>
            <div class="lang-name">${lang.name}</div>
            <div class="lang-family">${lang.family}</div>
          </div>
          <div class="lang-speakers">${lang.speakers}</div>
        `;
        cardsGrid.appendChild(card);
      });
    }, 150); // Short delay for skeleton effect
  }

  // Tooltip Logic for Map Markers
  markers.forEach(marker => {
    marker.addEventListener('mouseenter', (e) => {
      const lang = e.target.dataset.lang;
      const speakers = e.target.dataset.speakers;
      const family = e.target.dataset.family;
      
      tooltip.innerHTML = `<strong>${lang}</strong><br>${speakers} speakers<br><em>${family}</em>`;
      tooltip.hidden = false;
    });

    marker.addEventListener('mousemove', (e) => {
      const rect = document.querySelector('.map-container').getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      tooltip.style.left = `${x}px`;
      tooltip.style.top = `${y}px`;
    });

    marker.addEventListener('mouseleave', () => {
      tooltip.hidden = true;
    });

    // Keyboard accessibility
    marker.addEventListener('focus', (e) => {
      const lang = e.target.dataset.lang;
      const speakers = e.target.dataset.speakers;
      const family = e.target.dataset.family;
      tooltip.innerHTML = `<strong>${lang}</strong><br>${speakers} speakers<br><em>${family}</em>`;
      tooltip.hidden = false;
    });

    marker.addEventListener('blur', () => {
      tooltip.hidden = true;
    });
  });

  // Event Listeners for Controls
  prevBtn.addEventListener('click', () => {
    if (currentLayer > 1) setLayer(currentLayer - 1);
  });

  nextBtn.addEventListener('click', () => {
    if (currentLayer < totalLayers) setLayer(currentLayer + 1);
  });

  // Initialize
  initStepper();
  setLayer(1);
});