/**
 * River Confluences Explorer – Interactive Explorer
 * Explore India's sacred Sangams and Prayags where holy rivers merge.
 */
(function () {
    'use strict';

    /* ============================================
       DATA: All Confluences
       ============================================ */
    var CONFLUENCES = [
        {
            id: 'prayagraj', name: 'Prayagraj Sangam', icon: '🔱', category: 'prayagraj',
            tagline: 'Holiest Confluence in Hinduism',
            rivers: ['Ganga', 'Yamuna', 'Saraswati (mythical)'],
            riverColors: ['#3b82f6', '#6366f1', '#f59e0b'],
            location: 'Prayagraj, Uttar Pradesh', deity: 'Lord Brahma',
            festivals: ['Kumbh Mela', 'Magh Mela', 'Makar Sankranti'],
            description: 'The Triveni Sangam is the holiest confluence in Hinduism, where the Ganga, Yamuna, and the mythical Saraswati meet. Site of the Kumbh Mela, the largest peaceful gathering on Earth.',
            geography: 'Located at the meeting point of the Ganga (2,525 km) and Yamuna (1,376 km) rivers. The invisible Saraswati flows underground here. The site spans several square kilometers of riverbanks.',
            significance: 'Bathing at the Triveni Sangam during auspicious times washes away all sins and grants moksha. It is 100 times more meritorious than bathing at any other sacred river.',
            history: 'Mentioned in the Mahabharata and Markandeya Purana. Emperor Akbar built the fort at Prayagraj in 1583. The Magh Mela tradition dates back thousands of years, with the first Kumbh Mela recorded in the 7th century CE by Xuanzang.',
            mapX: 430, mapY: 340, pitch: 'Sangam'
        },
        {
            id: 'devprayag', name: 'Devprayag', icon: '🏔️', category: 'uttarakhand',
            tagline: 'Birth of the Ganga',
            rivers: ['Alaknanda', 'Bhagirathi'],
            riverColors: ['#3b82f6', '#14b8a6'],
            location: 'Tehri Garhwal, Uttarakhand', deity: 'Lord Raghunath (Rama)',
            festivals: ['Ganga Dussehra', 'Makar Sankranti'],
            description: 'Where the Alaknanda and Bhagirathi merge to form the sacred Ganga. The final Panch Prayag — the point where the river officially becomes the Ganga.',
            geography: 'At 618 m in the Garhwal Himalayas. The Bhagirathi originates from Gangotri (Gaumukh) while the Alaknanda comes from the Satopanth glacier near Badrinath.',
            significance: 'Considered the most sacred of the Panch Prayag as it marks the birth of the Ganga. Bathing here grants liberation from the cycle of rebirth.',
            history: 'Ancient texts describe Devprayag as the place where Sage Devasharma performed intense penance. The Raghunath Temple atop the confluence rocks has been a pilgrimage site for centuries.',
            mapX: 310, mapY: 200, pitch: 'Panch Prayag'
        },
        {
            id: 'rudraprayag', name: 'Rudraprayag', icon: '🔱', category: 'uttarakhand',
            tagline: 'Confluence of Rudra',
            rivers: ['Alaknanda', 'Mandakini'],
            riverColors: ['#3b82f6', '#10b981'],
            location: 'Rudraprayag, Uttarakhand', deity: 'Lord Shiva (as Rudra)',
            festivals: ['Nag Panchami', 'Shivratri'],
            description: 'Named after Lord Shiva in his fierce Rudra form, where the Alaknanda meets the Mandakini River from the Kedarnath glacier.',
            geography: 'At 694 m, the Mandakini flows from Chorabari Glacier near Kedarnath. The Alaknanda comes from the east. The town is built on terraced slopes above the confluence.',
            significance: 'Lord Shiva appeared here as Rudra to bless Narada Muni. The confluence is powerful for performing shraddha (ancestor) ceremonies.',
            history: 'The ancient Rudranath Temple, carved into rock near the confluence, is dedicated to Shiva. The area was part of the ancient Katyuri kingdom.',
            mapX: 305, mapY: 190, pitch: 'Panch Prayag'
        },
        {
            id: 'karnaprayag', name: 'Karnaprayag', icon: '⚔️', category: 'uttarakhand',
            tagline: 'Where Karna Worshipped',
            rivers: ['Alaknanda', 'Pindar'],
            riverColors: ['#3b82f6', '#f43f5e'],
            location: 'Chamoli, Uttarakhand', deity: 'Karna (Mahabharata hero)',
            festivals: ['Nanda Ashtami', 'Makar Sankranti'],
            description: 'Named after Karna of the Mahabharata, who worshipped Shiva here. The Pindar River from the Pindari Glacier merges with the Alaknanda.',
            geography: 'At 860 m, the Pindar River flows from the Pindari Glacier in the Kumaon Himalayas. The Alaknanda continues from upstream confluences.',
            significance: 'Karna performed penance here to obtain divine weapons. The confluence is powerful for meditation and spiritual practice.',
            history: 'Legends connect this to the Mahabharata era. The Narsingh Temple and Uma Devi Temple are ancient shrines near the confluence.',
            mapX: 310, mapY: 195, pitch: 'Panch Prayag'
        },
        {
            id: 'nandprayag', name: 'Nandprayag', icon: '🏔️', category: 'uttarakhand',
            tagline: "King Nanda's Legacy",
            rivers: ['Alaknanda', 'Nandakini'],
            riverColors: ['#3b82f6', '#8b5cf6'],
            location: 'Chamoli, Uttarakhand', deity: 'Lord Vishnu',
            festivals: ['Ganga Dussehra', 'Nanda Devi Raj Jat'],
            description: 'Named after King Nanda, father of Lord Krishna. The Nandakini River meets the Alaknanda at this sacred confluence.',
            geography: 'At 914 m, the Nandakini originates from the Nanda Ghunti peak area. Surrounded by terraced fields and deodar forests.',
            significance: 'King Nanda performed the Ashwamedha Yagna here. The confluence grants merit equivalent to visiting all pilgrimage sites.',
            history: 'Connected to King Nanda and Lord Krishna. The Chandika Devi Temple nearby dates to the ancient Katyuri period.',
            mapX: 305, mapY: 188, pitch: 'Panch Prayag'
        },
        {
            id: 'vishnuprayag', name: 'Vishnuprayag', icon: '🛐', category: 'uttarakhand',
            tagline: 'First of the Panch Prayag',
            rivers: ['Alaknanda', 'Dhauliganga'],
            riverColors: ['#3b82f6', '#06b6d4'],
            location: 'Joshimath, Chamoli, Uttarakhand', deity: 'Lord Vishnu',
            festivals: ['Basant Panchami', 'Makar Sankranti'],
            description: 'The first and northernmost Panch Prayag, where the Dhauliganga meets the Alaknanda near Joshimath, gateway to Badrinath.',
            geography: 'At 1,372 m, the Dhauliganga flows from the Niti Pass near the Tibet border. Joshimath is the winter seat of Lord Badrinath.',
            significance: 'Named after Lord Vishnu, who meditated here. The starting point of the sacred Panch Prayag circuit.',
            history: 'Adi Shankaracharya established one of four mathas at Joshimath. Ancient temples here predate the Gupta period.',
            mapX: 295, mapY: 175, pitch: 'Panch Prayag'
        },
        {
            id: 'hampi', name: 'Tungabhadra Sangam', icon: '🏛️', category: 'other',
            tagline: 'Heart of Vijayanagara',
            rivers: ['Tunga', 'Bhadra'],
            riverColors: ['#10b981', '#34d399'],
            location: 'Hampi, Karnataka', deity: 'Lord Virupaksha (Shiva)',
            festivals: ['Virupaksha Car Festival', 'Pongal'],
            description: 'The Tunga and Bhadra rivers merge to form the Tungabhadra, flowing through Hampi — the ancient Vijayanagara capital, a UNESCO World Heritage Site.',
            geography: 'Both rivers originate in the Western Ghats of Karnataka. They merge near Kudremukh to form the Tungabhadra flowing eastward through Hampi.',
            significance: 'The river was the lifeline of the Vijayanagara Empire (1336–1646 CE). Hampi ruins along its banks are among the most spectacular archaeological sites in India.',
            history: 'Krishnadevaraya, Vijayanagara\'s greatest king, built temples and monuments along the riverbanks.',
            mapX: 350, mapY: 490, pitch: 'Southern Sangam'
        },
        {
            id: 'srirangapatna', name: 'Srirangapatna Sangam', icon: '🏛️', category: 'other',
            tagline: 'Island Temple Town',
            rivers: ['Kaveri', 'Lokapavani'],
            riverColors: ['#f43f5e', '#ec4899'],
            location: 'Srirangapatna, Karnataka', deity: 'Lord Ranganatha (Vishnu)',
            festivals: ['Ranganathaswamy Temple Festival', 'Ugadi'],
            description: 'An island town formed by the Kaveri and Lokapavani rivers, housing one of the most revered Vishnu temples and the capital of Tipu Sultan.',
            geography: 'The Kaveri splits into channels around the island. The Lokapavani joins from the west, creating a natural fortress.',
            significance: 'The Sri Ranganathaswamy Temple is one of five pilgrimage centers of Ranganatha (Vishnu). The confluence is highly auspicious.',
            history: 'Home to Tipu Sultan (1751–1799) who built the Summer Palace. The Ranganathaswamy Temple dates to the 9th century Gangas.',
            mapX: 340, mapY: 495, pitch: 'Southern Sangam'
        },
        {
            id: 'nashik', name: 'Nashik Trimbakeshwar', icon: '🏺', category: 'other',
            tagline: 'Source of the Godavari',
            rivers: ['Godavari', 'Kodoli', 'Ahilya'],
            riverColors: ['#10b981', '#22c55e', '#a3e635'],
            location: 'Trimbakeshwar, Nashik, Maharashtra', deity: 'Lord Trimbakeshwar (Shiva Jyotirlinga)',
            festivals: ['Kumbh Mela (Nashik)', 'Godavari Pushkaram', 'Mahashivratri'],
            description: 'The Godavari originates at Brahmagiri near Trimbakeshwar. One of the 12 Jyotirlingas and four Kumbh Mela sites.',
            geography: 'The Godavari originates from Brahmagiri mountain in the Western Ghats. Trimbakeshwar is where the river collects before its 1,465 km eastward journey.',
            significance: 'Home to one of 12 Jyotirlingas and one of four Kumbh Mela sites. Godavari Pushkaram attracts millions every 12 years.',
            history: 'Trimbakeshwar was built by Peshwa Balaji Baji Rao in the 18th century. The Jyotirlinga temple has ancient origins in the Shiva Purana.',
            mapX: 290, mapY: 410, pitch: 'Southern Sangam'
        }
    ];

    var PANCH_PRAYAG = ['vishnuprayag', 'nandprayag', 'karnaprayag', 'rudraprayag', 'devprayag']
        .map(function (id) { return CONFLUENCES.find(function (c) { return c.id === id; }); });

    var FESTIVALS = [
        { name: 'Kumbh Mela', icon: '🏺', where: 'Prayagraj, Nashik, Haridwar, Ujjain', desc: 'The largest peaceful gathering on Earth, held every 12 years. Over 100 million pilgrims bathe at the confluences.' },
        { name: 'Magh Mela', icon: '🪔', where: 'Prayagraj Sangam', desc: 'Annual version of the Kumbh Mela during the month of Magh (January–February). Millions camp on the riverbanks.' },
        { name: 'Ganga Dussehra', icon: '🌊', where: 'Devprayag, Prayagraj', desc: 'Celebrates the descent of the Ganga from heaven. At Devprayag, it marks the birth of the Ganga at the confluence.' },
        { name: 'Nanda Devi Raj Jat', icon: '🏔️', where: 'Nandprayag', desc: 'A quadrennial pilgrimage from Nandprayag to the shrine of Nanda Devi, following the ancient trail of King Nanda.' },
        { name: 'Pushkaram', icon: '🙏', where: 'All sacred confluences', desc: 'Every 12 years, each sacred river hosts Pushkaram. At confluences, merit is multiplied many times.' },
        { name: 'Shivratri at Rudraprayag', icon: '🔱', where: 'Rudraprayag', desc: 'Maha Shivratri celebrated where Lord Shiva appeared as Rudra. Thousands bathe at the junction.' }
    ];

    var SCRIPTURES = [
        { source: 'Mahabharata, Vana Parva', title: 'Glory of the Prayag', quote: '"At Prayag, where the Ganga and Yamuna meet, the river that destroys all sins flows with triple current."', explain: 'The Mahabharata declares Prayagraj the holiest pilgrimage site — bathing at the triple confluence grants supreme spiritual merit.' },
        { source: 'Markandeya Purana', title: 'The Five Prayags', quote: '"Vishnuprayag, Nandprayag, Karnaprayag, Rudraprayag, and Devprayag — these five sacred confluences purify the soul."', explain: 'Lists the Panch Prayag as essential pilgrimage sites, establishing the sacred circuit pilgrims follow today.' },
        { source: 'Garuda Purana', title: 'Merit of Confluence Bathing', quote: '"A bath at a Prayag during an eclipse grants the merit of a thousand Ashwamedha sacrifices."', explain: 'Prescribes special significance for bathing at confluences during eclipses and auspicious planetary alignments.' },
        { source: 'Skanda Purana', title: 'Devprayag – Birth of Ganga', quote: '"Where the Bhagirathi and Alaknanda unite, there the Ganga is born, pure and divine."', explain: 'Identifies Devprayag as where the river becomes the Ganga, making it the most sacred river birthplace.' },
        { source: 'Padma Purana', title: 'Confluences as Holy as Gods', quote: '"A Prayag is as sacred as Varanasi. He who dies at a Prayag attains the highest heaven."', explain: 'Elevates confluences to the same status as Varanasi for spiritual liberation.' }
    ];

    var GEO = {
        prayagraj: { elev: '98 m', climate: 'Humid subtropical', temp: '8–45°C', rain: '1020 mm/yr', best: 'Oct–Mar' },
        devprayag: { elev: '618 m', climate: 'Subtropical highland', temp: '4–38°C', rain: '1800 mm/yr', best: 'Mar–Jun' },
        rudraprayag: { elev: '694 m', climate: 'Humid subtropical highland', temp: '3–36°C', rain: '1600 mm/yr', best: 'Apr–Jun' },
        karnaprayag: { elev: '860 m', climate: 'Subtropical highland', temp: '2–34°C', rain: '1500 mm/yr', best: 'Mar–May' },
        nandprayag: { elev: '914 m', climate: 'Subtropical highland', temp: '1–32°C', rain: '1400 mm/yr', best: 'Apr–Jun' },
        vishnuprayag: { elev: '1372 m', climate: 'Humid continental', temp: '-5–28°C', rain: '1200 mm/yr', best: 'May–Oct' },
        hampi: { elev: '467 m', climate: 'Semi-arid', temp: '18–42°C', rain: '650 mm/yr', best: 'Oct–Feb' },
        srirangapatna: { elev: '725 m', climate: 'Tropical savanna', temp: '16–38°C', rain: '780 mm/yr', best: 'Oct–Mar' },
        nashik: { elev: '565 m', climate: 'Tropical wet/dry', temp: '10–40°C', rain: '700 mm/yr', best: 'Oct–May' }
    };

    /* ============================================
       INIT
       ============================================ */
    document.addEventListener('DOMContentLoaded', function () {
        createParticles();
        renderCards();
        renderMap();
        renderTimeline();
        renderFestivals();
        renderScriptures();
        setupFilters();
        setupModal();
        setupMapInfo();
        animateOnScroll();
    });

    /* ============================================
       PARTICLES
       ============================================ */
    function createParticles() {
        var c = document.getElementById('waterParticles');
        if (!c) return;
        for (var i = 0; i < 20; i++) {
            var p = document.createElement('div');
            p.className = 'rce-particle';
            var s = Math.random() * 6 + 2;
            p.style.cssText = 'width:' + s + 'px;height:' + s + 'px;left:' + (Math.random() * 100) + '%;animation-duration:' + (Math.random() * 10 + 8) + 's;animation-delay:' + (Math.random() * 8) + 's';
            c.appendChild(p);
        }
    }

    /* ============================================
       CARDS
       ============================================ */
    function renderCards(filter) {
        var g = document.getElementById('confluenceGrid');
        if (!g) return;
        var list = filter && filter !== 'all' ? CONFLUENCES.filter(function (c) { return c.category === filter; }) : CONFLUENCES;
        g.innerHTML = list.map(function (c) {
            var tags = c.rivers.map(function (r, i) { return '<span class="rce-river-tag ' + (i % 2 === 0 ? 'ra' : 'rb') + '">' + r + '</span>'; }).join('');
            var pitch = c.pitch ? '<span class="rce-pitch">' + c.pitch + '</span>' : '';
            return '<div class="rce-card" data-id="' + c.id + '" data-cat="' + c.category + '">' + pitch +
                '<div class="rce-card-header"><div class="rce-card-icon">' + c.icon + '</div>' +
                '<div><div class="rce-card-name">' + c.name + '</div><div class="rce-card-tagline">' + c.tagline + '</div></div></div>' +
                '<div class="rce-card-rivers">' + tags + '</div>' +
                '<div class="rce-card-desc">' + c.description + '</div>' +
                '<div class="rce-card-meta"><strong>📍</strong> ' + c.location + '</div>' +
                '<div class="rce-card-cta">Explore Details →</div></div>';
        }).join('');
        g.querySelectorAll('.rce-card').forEach(function (card) {
            card.addEventListener('click', function () { openModal(this.getAttribute('data-id')); });
        });
        showVisible();
    }

    /* ============================================
       MAP
       ============================================ */
    function renderMap() {
        var g = document.getElementById('mapMarkers');
        if (!g) return;
        CONFLUENCES.forEach(function (c) {
            var color = c.category === 'prayagraj' ? '#f59e0b' : c.category === 'uttarakhand' ? '#3b82f6' : '#10b981';
            var ns = 'http://www.w3.org/2000/svg';
            var el = document.createElementNS(ns, 'g');
            el.setAttribute('class', 'rce-map-marker');
            el.setAttribute('data-id', c.id);
            var circle = document.createElementNS(ns, 'circle');
            circle.setAttribute('cx', c.mapX); circle.setAttribute('cy', c.mapY);
            circle.setAttribute('r', '7'); circle.setAttribute('fill', color);
            circle.setAttribute('stroke', '#fff'); circle.setAttribute('stroke-width', '2');
            el.appendChild(circle);
            var text = document.createElementNS(ns, 'text');
            text.setAttribute('x', c.mapX); text.setAttribute('y', c.mapY - 12);
            text.setAttribute('text-anchor', 'middle'); text.setAttribute('class', 'rce-map-marker-text');
            text.textContent = c.name.replace(' Sangam', '').replace(' Trimbakeshwar', '');
            el.appendChild(text);
            g.appendChild(el);
        });
    }

    function setupMapInfo() {
        document.querySelectorAll('.rce-map-marker').forEach(function (m) {
            m.addEventListener('click', function () { showInfo(this.getAttribute('data-id')); });
        });
        document.getElementById('infoClose').addEventListener('click', function () {
            document.getElementById('infoDefault').style.display = 'block';
            document.getElementById('infoContent').style.display = 'none';
        });
    }

    function showInfo(id) {
        var c = CONFLUENCES.find(function (x) { return x.id === id; });
        if (!c) return;
        document.getElementById('infoDefault').style.display = 'none';
        var ic = document.getElementById('infoContent');
        ic.style.display = 'block';
        document.getElementById('infoIcon').textContent = c.icon;
        document.getElementById('infoTag').textContent = c.tagline;
        document.getElementById('infoName').textContent = c.name;
        document.getElementById('infoDesc').textContent = c.description;
        document.getElementById('infoRivers').textContent = c.rivers.join(', ');
        document.getElementById('infoGeo').textContent = c.geography.substring(0, 200) + '...';
        document.getElementById('infoCulture').textContent = c.significance.substring(0, 200) + '...';
        document.getElementById('infoFestivals').innerHTML = c.festivals.map(function (f) {
            return '<span class="rce-river-tag ra">' + f + '</span>';
        }).join('');
    }

    /* ============================================
       TIMELINE
       ============================================ */
    function renderTimeline() {
        var el = document.getElementById('prayagTimeline');
        if (!el) return;
        var colors = ['#06b6d4', '#8b5cf6', '#f43f5e', '#10b981', '#f59e0b'];
        el.innerHTML = PANCH_PRAYAG.map(function (c, i) {
            return '<div class="rce-timeline-item rce-animate-in">' +
                '<div class="rce-timeline-dot" style="background:' + colors[i] + '"></div>' +
                '<div class="rce-timeline-card"><div class="rce-timeline-icon">' + c.icon + '</div>' +
                '<div class="rce-timeline-number">Prayag ' + (i + 1) + ' of 5</div>' +
                '<div class="rce-timeline-name">' + c.name + '</div>' +
                '<div class="rce-timeline-rivers">🌊 ' + c.rivers.join(' + ') + '</div>' +
                '<div class="rce-timeline-desc">' + c.significance + '</div></div></div>';
        }).join('');
        showVisible();
    }

    /* ============================================
       FESTIVALS
       ============================================ */
    function renderFestivals() {
        var el = document.getElementById('festivalGrid');
        if (!el) return;
        el.innerHTML = FESTIVALS.map(function (f) {
            return '<div class="rce-festival-card rce-animate-in"><div class="rce-festival-icon">' + f.icon + '</div>' +
                '<div class="rce-festival-name">' + f.name + '</div>' +
                '<div class="rce-festival-confluence">📍 ' + f.where + '</div>' +
                '<div class="rce-festival-desc">' + f.desc + '</div></div>';
        }).join('');
        showVisible();
    }

    /* ============================================
       SCRIPTURES
       ============================================ */
    function renderScriptures() {
        var el = document.getElementById('scriptureGrid');
        if (!el) return;
        el.innerHTML = SCRIPTURES.map(function (s) {
            return '<div class="rce-scripture-card rce-animate-in">' +
                '<div class="rce-scripture-source">' + s.source + '</div>' +
                '<div class="rce-scripture-title">' + s.title + '</div>' +
                '<div class="rce-scripture-quote">' + s.quote + '</div>' +
                '<div class="rce-scripture-explanation">' + s.explain + '</div></div>';
        }).join('');
        showVisible();
    }

    /* ============================================
       FILTERS
       ============================================ */
    function setupFilters() {
        var tabs = document.getElementById('filterTabs');
        if (!tabs) return;
        tabs.addEventListener('click', function (e) {
            var btn = e.target.closest('.rce-filter-btn');
            if (!btn) return;
            tabs.querySelectorAll('.rce-filter-btn').forEach(function (b) { b.classList.remove('active'); });
            btn.classList.add('active');
            renderCards(btn.getAttribute('data-filter'));
        });
    }

    /* ============================================
       MODAL
       ============================================ */
    function setupModal() {
        document.getElementById('modalClose').addEventListener('click', closeModal);
        document.getElementById('modalOverlay').addEventListener('click', function (e) { if (e.target === this) closeModal(); });
        document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeModal(); });
    }

    function openModal(id) {
        var c = CONFLUENCES.find(function (x) { return x.id === id; });
        if (!c) return;
        document.getElementById('modalIcon').textContent = c.icon;
        document.getElementById('modalTag').textContent = c.tagline;
        document.getElementById('modalTitle').textContent = c.name;
        document.getElementById('modalIntro').textContent = c.description;
        document.getElementById('modalRivers').textContent = c.rivers.join(', ');
        document.getElementById('modalLocation').textContent = c.location;
        document.getElementById('modalDeity').textContent = c.deity;
        document.getElementById('modalFestival').textContent = c.festivals.join(', ');
        document.getElementById('modalHistory').textContent = c.history;
        document.getElementById('modalCulture').textContent = c.significance;
        var g = GEO[id];
        document.getElementById('modalGeo').innerHTML = c.geography + (g ?
            '<br><br><strong>Elevation:</strong> ' + g.elev + ' | <strong>Climate:</strong> ' + g.climate +
            ' | <strong>Temp:</strong> ' + g.temp + ' | <strong>Rainfall:</strong> ' + g.rain +
            ' | <strong>Best Time:</strong> ' + g.best : '');
        document.getElementById('modalOverlay').classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        document.getElementById('modalOverlay').classList.remove('active');
        document.body.style.overflow = '';
    }

    /* ============================================
       SCROLL ANIMATIONS
       ============================================ */
    function animateOnScroll() {
        var obs = new IntersectionObserver(function (entries) {
            entries.forEach(function (e) { if (e.isIntersecting) e.target.classList.add('visible'); });
        }, { threshold: 0.1 });
        function scan() { document.querySelectorAll('.rce-animate-in:not(.visible)').forEach(function (el) { obs.observe(el); }); }
        scan();
        new MutationObserver(scan).observe(document.body, { childList: true, subtree: true });
    }

    function showVisible() {
        document.querySelectorAll('.rce-animate-in').forEach(function (el) {
            if (el.getBoundingClientRect().top < window.innerHeight + 100) el.classList.add('visible');
        });
    }

    /* ============================================
       RIVER FLOW DATA
       ============================================ */
    var RIVER_FLOWS = [
        { river: 'Alaknanda', source: 'Satopanth Glacier', length: '195 km', path: 'Badrinath → Vishnuprayag → Nandprayag → Karnaprayag → Rudraprayag → Devprayag' },
        { river: 'Bhagirathi', source: 'Gaumukh (Gangotri)', length: '205 km', path: 'Gangotri → Uttarkashi → Tehri → Devprayag' },
        { river: 'Mandakini', source: 'Chorabari Glacier (Kedarnath)', length: '72 km', path: 'Kedarnath → Sonprayag → Rudraprayag' },
        { river: 'Pindar', source: 'Pindari Glacier', length: '80 km', path: 'Pindari → Kapkot → Karnaprayag' },
        { river: 'Nandakini', source: 'Nanda Ghunti', length: '56 km', path: 'Nanda Ghunti → Ghat → Nandprayag' },
        { river: 'Dhauliganga', source: 'Niti Pass', length: '90 km', path: 'Niti Pass → Tapovan → Vishnuprayag' },
        { river: 'Ganga', source: 'Gangotri (Gaumukh)', length: '2525 km', path: 'Gangotri → Haridwar → Prayagraj → Varanasi → Kolkata → Bay of Bengal' },
        { river: 'Yamuna', source: 'Yamunotri', length: '1376 km', path: 'Yamunotri → Delhi → Agra → Prayagraj' },
        { river: 'Kaveri', source: 'Talakaveri, Coorg', length: '800 km', path: 'Coorg → Mysore → Srirangapatna → Thanjavur → Bay of Bengal' },
        { river: 'Tungabhadra', source: 'Western Ghats (Tunga + Bhadra)', length: '531 km', path: 'Kudremukh → Hampi → Kurnool → joins Krishna River' },
        { river: 'Godavari', source: 'Brahmagiri, Nashik', length: '1465 km', path: 'Nasik → Rajahmundry → joins Bay of Bengal' },
        { river: 'Mandakini', source: 'Chorabari Glacier', length: '72 km', path: 'Kedarnath → Sonprayag → Rudraprayag' }
    ];

    /* ============================================
       SEARCH FUNCTIONALITY
       ============================================ */
    function setupSearch() {
        var searchInput = document.getElementById('searchInput');
        if (!searchInput) return;
        searchInput.addEventListener('input', function () {
            var query = this.value.toLowerCase().trim();
            var cards = document.querySelectorAll('.rce-card');
            cards.forEach(function (card) {
                var text = card.textContent.toLowerCase();
                card.style.display = text.indexOf(query) !== -1 ? '' : 'none';
            });
        });
    }

    /* ============================================
       UTILITY: Find confluence by river name
       ============================================ */
    function findByRiver(name) {
        return CONFLUENCES.filter(function (c) {
            return c.rivers.some(function (r) {
                return r.toLowerCase().indexOf(name.toLowerCase()) !== -1;
            });
        });
    }

    /* ============================================
       UTILITY: Get all unique rivers
       ============================================ */
    function getAllRivers() {
        var seen = {};
        var result = [];
        CONFLUENCES.forEach(function (c) {
            c.rivers.forEach(function (r) {
                if (!seen[r]) { seen[r] = true; result.push(r); }
            });
        });
        return result;
    }

    /* ============================================
       UTILITY: Get Panch Prayag summary
       ============================================ */
    function prayagSummary() {
        return PANCH_PRAYAG.map(function (c, i) {
            return (i + 1) + '. ' + c.name + ' — ' + c.rivers.join(' + ');
        }).join('\n');
    }

    /* ============================================
       UTILITY: Get geographic info for modal
       ============================================ */
    function getGeoInfo(id) {
        var g = GEO[id];
        if (!g) return '';
        return '<div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-top:10px;font-size:.82rem;color:var(--rce-text-sec)">' +
            '<div><strong style="color:var(--rce-text)">⛰️</strong> ' + g.elev + '</div>' +
            '<div><strong style="color:var(--rce-text)">🌡️</strong> ' + g.temp + '</div>' +
            '<div><strong style="color:var(--rce-text)">🌧️</strong> ' + g.rain + '</div>' +
            '<div><strong style="color:var(--rce-text)">📅</strong> ' + g.best + '</div>' +
        '</div>';
    }

    /* ============================================
       UTILITY: Count total festivals
       ============================================ */
    function countFestivals() {
        var total = 0;
        CONFLUENCES.forEach(function (c) { total += c.festivals.length; });
        return total;
    }

    /* ============================================
       UTILITY: Get confluence with most festivals
       ============================================ */
    function mostFestivals() {
        var best = null;
        var max = 0;
        CONFLUENCES.forEach(function (c) {
            if (c.festivals.length > max) { max = c.festivals.length; best = c; }
        });
        return best ? best.name + ' (' + max + ' festivals)' : 'None';
    }

    /* ============================================
       UTILITY: Get all confluences in a region
       ============================================ */
    function getByRegion(region) {
        return CONFLUENCES.filter(function (c) { return c.category === region; });
    }

    /* ============================================
       UTILITY: Format river meeting description
       ============================================ */
    function describeConfluence(c) {
        if (c.rivers.length === 2) {
            return c.rivers[0] + ' meets ' + c.rivers[1] + ' at ' + c.name;
        }
        return c.rivers.join(', ') + ' converge at ' + c.name;
    }

})();
