const routePoints = [
    {
        stage: "START",
        title: "Tso Lhamo & High Himalaya",
        region: "North Sikkim",
        description:
            "The upper Teesta system begins in the high Himalayan landscape around Tso Lhamo and the Teesta Khangtse glacier.",
        coordinates: [28.05, 88.72]
    },
    {
        stage: "02",
        title: "Lachen & Upper Teesta",
        region: "North Sikkim",
        description:
            "High-altitude streams and glacial meltwater gather as the river descends through the northern Sikkim mountains.",
        coordinates: [27.72, 88.56]
    },
    {
        stage: "03",
        title: "Chungthang",
        region: "North Sikkim",
        description:
            "Lachan Chu and Lachung Chu meet here, after which the combined river is known as the Teesta.",
        coordinates: [27.61, 88.64]
    },
    {
        stage: "04",
        title: "Mangan & Dikchu",
        region: "North / East Sikkim",
        description:
            "The river continues through steep Himalayan valleys, receiving additional tributaries along its course.",
        coordinates: [27.46, 88.58]
    },
    {
        stage: "05",
        title: "Singtam & Rangpo",
        region: "East Sikkim",
        description:
            "The Teesta reaches lower elevations and receives tributaries including Rangpo Chu and other mountain streams.",
        coordinates: [27.25, 88.55]
    },
    {
        stage: "06",
        title: "Teesta–Rangit Region",
        region: "Sikkim",
        description:
            "The major Rangit system joins the Teesta, increasing the river's volume before it moves toward West Bengal.",
        coordinates: [27.07, 88.48]
    },
    {
        stage: "07",
        title: "Sevoke & Teesta Low Dams",
        region: "West Bengal",
        description:
            "The river enters the northern West Bengal landscape, where hydropower and irrigation infrastructure become prominent.",
        coordinates: [26.87, 88.59]
    },
    {
        stage: "END",
        title: "Gajoldoba & North Bengal Plains",
        region: "West Bengal",
        description:
            "The Teesta continues through the plains of northern West Bengal before crossing into Bangladesh and joining the Brahmaputra system.",
        coordinates: [26.53, 88.72]
    }
];

const map = L.map("teesta-map", {
    scrollWheelZoom: true
}).setView([27.35, 88.60], 8);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '&copy; OpenStreetMap contributors',
    maxZoom: 18
}).addTo(map);

const routeCoordinates = routePoints.map((point) => point.coordinates);

const routeLine = L.polyline(routeCoordinates, {
    color: "#38bdf8",
    weight: 5,
    opacity: 0.9
}).addTo(map);

const routeGlow = L.polyline(routeCoordinates, {
    color: "#7dd3fc",
    weight: 12,
    opacity: 0.15
}).addTo(map);

const markerLayer = L.layerGroup().addTo(map);

const routeStage = document.getElementById("route-stage");
const routeTitle = document.getElementById("route-title");
const routeDescription = document.getElementById("route-description");
const routeRegion = document.getElementById("route-region");
const routeNumber = document.getElementById("route-number");
const resetButton = document.getElementById("reset-route");

function updateRoutePanel(point, index) {
    routeStage.textContent = point.stage;
    routeTitle.textContent = point.title;
    routeDescription.textContent = point.description;
    routeRegion.textContent = point.region;
    routeNumber.textContent = `${index + 1} / ${routePoints.length}`;
}

routePoints.forEach((point, index) => {
    const marker = L.circleMarker(point.coordinates, {
        radius: 8,
        color: "#e0f2fe",
        weight: 2,
        fillColor: index === 0 ? "#4ade80" : "#38bdf8",
        fillOpacity: 1
    });

    marker.bindPopup(`
        <div class="popup-title">${point.title}</div>
        <div class="popup-region">${point.region}</div>
    `);

    marker.on("click", () => {
        updateRoutePanel(point, index);
    });

    markerLayer.addLayer(marker);
});

routeLine.on("click", (event) => {
    let closestIndex = 0;
    let closestDistance = Infinity;

    routePoints.forEach((point, index) => {
        const distance = event.latlng.distanceTo(L.latLng(point.coordinates));

        if (distance < closestDistance) {
            closestDistance = distance;
            closestIndex = index;
        }
    });

    const point = routePoints[closestIndex];

    updateRoutePanel(point, closestIndex);
    map.flyTo(point.coordinates, 10, {
        duration: 0.8
    });
});

function resetRouteView() {
    map.fitBounds(routeLine.getBounds(), {
        padding: [30, 30]
    });

    updateRoutePanel(routePoints[0], 0);
}

resetButton.addEventListener("click", resetRouteView);

resetRouteView();

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
        const isOpen = navMenu.classList.toggle("open");
        menuToggle.classList.toggle("open", isOpen);
        menuToggle.setAttribute("aria-expanded", String(isOpen));
    });

    navMenu.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("open");
            menuToggle.classList.remove("open");
            menuToggle.setAttribute("aria-expanded", "false");
        });
    });
}