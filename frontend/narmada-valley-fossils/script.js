```javascript
(function () {
    const places = {
        hathnora: {
            title: "Hathnora",
            desc: "Narmada Valley, Madhya Pradesh. Known for the important Pleistocene hominin cranium and associated fossil fauna.",
            lat: 22.83,
            lon: 78.53,
            bbox: [77.9, 22.35, 79.15, 23.25]
        },
        jabalpur: {
            title: "Jabalpur and Narmada basin",
            desc: "Madhya Pradesh. The broader Narmada basin preserves Late Cretaceous Lameta Formation dinosaur fossils and younger Quaternary deposits.",
            lat: 23.18,
            lon: 79.95,
            bbox: [79.35, 22.65, 80.55, 23.7]
        },
        balasinor: {
            title: "Balasinor region",
            desc: "Gujarat. The Narmada basin extends into Gujarat, where Late Cretaceous Lameta Formation dinosaur fossils include Rajasaurus and sauropod remains.",
            lat: 22.95,
            lon: 73.33,
            bbox: [72.65, 22.35, 74.05, 23.55]
        }
    };

    function mapSrc(place) {
        return "https://www.openstreetmap.org/export/embed.html?bbox=" +
            encodeURIComponent(place.bbox.join(",")) +
            "&layer=mapnik&marker=" +
            encodeURIComponent(place.lat + "," + place.lon);
    }

    function initThemeToggle() {
        const button = document.getElementById("theme-toggle");
        const root = document.documentElement;

        if (!button) return;

        function applyTheme(theme) {
            const light = theme === "light";

            root.classList.toggle("light-theme", light);
            document.body.classList.toggle("light-theme", light);

            button.textContent = light ? "🌙" : "☀️";
            button.setAttribute(
                "aria-label",
                light ? "Switch to dark theme" : "Switch to light theme"
            );
        }

        applyTheme(localStorage.getItem("theme") === "light" ? "light" : "dark");

        button.addEventListener("click", function () {
            const nextTheme = document.body.classList.contains("light-theme")
                ? "dark"
                : "light";

            localStorage.setItem("theme", nextTheme);
            applyTheme(nextTheme);
        });
    }

    function initMap() {
        const frame = document.getElementById("fossil-map");
        const title = document.getElementById("map-info-title");
        const description = document.getElementById("map-info-desc");
        const buttons = document.querySelectorAll(".map-btn");

        if (!frame || !title || !description || !buttons.length) return;

        function showPlace(key) {
            const place = places[key];

            if (!place) return;

            frame.src = mapSrc(place);
            title.textContent = place.title;
            description.textContent = place.desc;

            buttons.forEach(function (button) {
                const active = button.dataset.place === key;

                button.classList.toggle("is-active", active);
                button.setAttribute("aria-pressed", active ? "true" : "false");
            });
        }

        buttons.forEach(function (button) {
            button.setAttribute(
                "aria-pressed",
                button.classList.contains("is-active") ? "true" : "false"
            );

            button.addEventListener("click", function () {
                showPlace(button.dataset.place);
            });
        });
    }

    document.addEventListener("DOMContentLoaded", function () {
        initThemeToggle();
        initMap();
    });

    window.NarmadaFossilExplorer = {
        places: places
    };
})();
```
