const STONE_AGE_SITES = [
    {
        id: "attirampakkam",
        name: "Attirampakkam",
        location: "Tamil Nadu",
        period: "Paleolithic",
        color: "var(--stone-accent)",
        top: "63%",
        left: "57%",
        description:
            "A major Paleolithic site with a long archaeological sequence including Acheulean and later stone-tool technologies."
    },
    {
        id: "hunsgi",
        name: "Hunsgi–Baichbal Valley",
        location: "Karnataka",
        period: "Paleolithic",
        color: "var(--stone-accent)",
        top: "57%",
        left: "47%",
        description:
            "A major cluster of Paleolithic localities associated with stone-tool manufacture and prehistoric occupation."
    },
    {
        id: "bhimbetka",
        name: "Bhimbetka",
        location: "Madhya Pradesh",
        period: "Paleolithic",
        color: "var(--stone-accent)",
        top: "39%",
        left: "47%",
        description:
            "Rock shelters preserving prehistoric occupation and a long sequence of prehistoric rock art."
    },
    {
        id: "bagor",
        name: "Bagor",
        location: "Rajasthan",
        period: "Mesolithic",
        color: "var(--stone-blue)",
        top: "31%",
        left: "32%",
        description:
            "A long-occupied riverside site with microlithic technology and evidence of changing subsistence practices."
    },
    {
        id: "sarai-nahar-rai",
        name: "Sarai Nahar Rai",
        location: "Uttar Pradesh",
        period: "Mesolithic",
        color: "var(--stone-blue)",
        top: "30%",
        left: "56%",
        description:
            "An important Mesolithic burial site providing evidence about prehistoric communities and mortuary practices."
    },
    {
        id: "langhnaj",
        name: "Langhnaj",
        location: "Gujarat",
        period: "Mesolithic",
        color: "var(--stone-blue)",
        top: "47%",
        left: "27%",
        description:
            "A western Indian Mesolithic site associated with microliths, human remains and animal remains."
    },
    {
        id: "burzahom",
        name: "Burzahom",
        location: "Kashmir",
        period: "Neolithic",
        color: "var(--stone-green)",
        top: "12%",
        left: "42%",
        description:
            "Known for pit dwellings, stone tools, pottery and evidence of changing settlement and subsistence patterns."
    },
    {
        id: "koldihwa",
        name: "Koldihwa",
        location: "Uttar Pradesh",
        period: "Neolithic",
        color: "var(--stone-green)",
        top: "36%",
        left: "55%",
        description:
            "A Belan Valley site associated with early farming and evidence relating to rice cultivation."
    },
    {
        id: "chirand",
        name: "Chirand",
        location: "Bihar",
        period: "Neolithic",
        color: "var(--stone-green)",
        top: "35%",
        left: "65%",
        description:
            "A major Neolithic settlement with pottery, bone tools, stone tools and evidence of food production."
    },
    {
        id: "daojali-hading",
        name: "Daojali Hading",
        location: "Assam",
        period: "Neolithic",
        color: "var(--stone-green)",
        top: "23%",
        left: "79%",
        description:
            "An important northeastern archaeological site associated with polished stone tools and early settled communities."
    }
];

function updateMapDetails(site) {
    const name = document.getElementById("map-site-name");
    const location = document.getElementById("map-site-location");
    const description = document.getElementById("map-site-description");
    const period = document.querySelector(".detail-period");

    if (!name || !location || !description || !period) {
        return;
    }

    name.textContent = site.name;
    location.textContent = site.location;
    description.textContent = site.description;
    period.textContent = site.period;
}

function renderStoneAgeMap() {
    const map = document.getElementById("stone-age-map");

    if (!map) {
        return;
    }

    STONE_AGE_SITES.forEach((site) => {
        const marker = document.createElement("button");

        marker.type = "button";
        marker.className = "map-marker";
        marker.dataset.site = site.id;
        marker.style.top = site.top;
        marker.style.left = site.left;
        marker.style.setProperty("--marker-color", site.color);
        marker.setAttribute(
            "aria-label",
            `${site.name}, ${site.location}, ${site.period}`
        );

        marker.addEventListener("click", () => {
            updateMapDetails(site);

            document.querySelectorAll(".map-marker").forEach((item) => {
                item.classList.remove("selected");
            });

            marker.classList.add("selected");
        });

        map.appendChild(marker);
    });
}

function setupThemeToggle() {
    const button = document.getElementById("theme-toggle");

    if (!button) {
        return;
    }

    const root = document.documentElement;

    function updateButton() {
        const isLight =
            root.getAttribute("data-theme") === "light";

        button.textContent = isLight ? "🌙" : "☀️";
        button.setAttribute(
            "aria-label",
            isLight
                ? "Switch to dark mode"
                : "Switch to light mode"
        );
    }

    updateButton();

    button.addEventListener("click", () => {
        const currentTheme =
            root.getAttribute("data-theme") || "dark";

        const nextTheme =
            currentTheme === "light" ? "dark" : "light";

        root.setAttribute("data-theme", nextTheme);
        localStorage.setItem("theme", nextTheme);

        updateButton();
    });
}

document.addEventListener("DOMContentLoaded", () => {
    setupThemeToggle();
    renderStoneAgeMap();
});

window.StoneAgeExplorer = {
    sites: STONE_AGE_SITES
};