/**
 * Sacred River Heritage – Interactive Explorer
 * Explore India's seven sacred rivers, their ghats, festivals, traditions, and historical references.
 */

(function () {
    'use strict';

    /* ============================================
       DATA: Sacred Rivers
       ============================================ */
    const SACRED_RIVERS = [
        {
            id: 'ganga',
            name: 'Ganga',
            english: 'Ganges',
            icon: '🌊',
            color: '#3b82f6',
            tagline: 'Mother of India',
            region: 'north',
            origin: 'Gangotri Glacier, Uttarakhand (Gaumukh)',
            length: '2,525 km',
            deities: 'Goddess Ganga, Lord Shiva',
            description: 'The most sacred river in Hinduism, worshipped as a goddess who descended from heaven to cleanse humanity. The Ganga flows through five Indian states and supports over 400 million people.',
            significance: 'Bathing in the Ganga is believed to wash away all sins. The river is central to Hindu cremation rituals, as ashes scattered in its waters grant moksha (liberation from the cycle of rebirth).',
            pilgrimageSites: ['Varanasi', 'Haridwar', 'Prayagraj', 'Rishikesh', 'Kolkata', 'Patna', 'Badrinath'],
            festivals: ['Kumbh Mela', 'Ganga Dussehra', 'Chhath Puja', 'Makar Sankranti', 'Gangaur'],
            ghatExamples: [
                { name: 'Dashashwamedh Ghat', city: 'varanasi', icon: '🪔', desc: 'The main ghat in Varanasi, famous for the spectacular evening Ganga Aarti ceremony with hundreds of lit oil lamps.', significance: 'Aarti ceremony every evening' },
                { name: 'Har Ki Pauri', city: 'haridwar', icon: '🔱', desc: 'One of the most sacred ghats in Haridwar, believed to be where Lord Vishnu left his footprint. Major Kumbh Mela venue.', significance: 'Sacred footprint of Lord Vishnu' },
                { name: 'Assi Ghat', city: 'varanasi', icon: '🕉️', desc: 'Southernmost ghat in Varanasi, where the Assi River meets the Ganga. Popular for morning meditation and yoga.', significance: 'Yoga and meditation hub' },
                { name: 'Triveni Sangam', city: 'prayagraj', icon: '🙏', desc: 'The sacred confluence of the Ganga, Yamuna, and the mythical Saraswati. Site of the Kumbh Mela.', significance: 'Triple confluence – holiest bathing spot' },
                { name: 'Dakshineswar Kali Ghat', city: 'kolkata', icon: '🛕', desc: 'Famous for the Dakshineswar Kali Temple where Ramakrishna Paramahamsa had his spiritual experiences.', significance: 'Temple of Goddess Kali' }
            ],
            history: 'Mentioned in the Rigveda (1500 BCE) as a mighty river. The Ganga mythology describes how King Bhagiratha brought the river from heaven through the penance of Lord Shiva. The Allahabad Pillar inscription by Samudragupta (4th century CE) describes the Ganga\'s sacred status.',
            rituals: 'Daily Ganga Aarti, ritual bathing (snana), tarpan (offering water to ancestors), pind daan (funeral rites), and floating diyas (oil lamps) on the river.',
            culture: 'The Ganga has inspired countless poems, songs, and paintings. The Banarasi silk industry flourished along its banks. Cities like Varanasi, the world\'s oldest continuously inhabited city, owe their cultural identity entirely to the river.'
        },
        {
            id: 'yamuna',
            name: 'Yamuna',
            english: 'Yamuna',
            icon: '💧',
            color: '#6366f1',
            tagline: 'River of Love & Devotion',
            region: 'north',
            origin: 'Yamunotri Glacier, Uttarakhand',
            length: '1,376 km',
            deities: 'Goddess Yamuna, Lord Krishna',
            description: 'The second most sacred river, associated with Lord Krishna\'s childhood in Vrindavan and Mathura. The Yamuna is considered the sister of Goddess Yama (God of Death).',
            significance: 'Bathing in the Yamuna is believed to remove the fear of death. The river is deeply connected to the Vaishnavite tradition and Krishna bhakti (devotion).',
            pilgrimageSites: ['Mathura', 'Vrindavan', 'Govardhan', 'Delhi', 'Agra', 'Kalindi'],
            festivals: ['Janmashtami', 'Yamuna Jayanti', 'Chhath Puja', 'Karva Chauth', 'Kartik Purnima'],
            ghatExamples: [
                { name: 'Vishram Ghat', city: 'varanasi', icon: '✨', desc: 'The main ghat of Mathura where Lord Krishna is believed to have rested after defeating Kansa. Beautiful evening aarti.', significance: 'Krishna\'s resting place' },
                { name: 'Keshi Ghat', city: 'varanasi', icon: '🕉️', desc: 'Where Lord Krishna killed the demon Keshi. Features beautiful Nagara-style architecture.', significance: 'Site of Krishna\'s divine victory' }
            ],
            history: 'The Yamuna is mentioned in the Mahabharata and numerous Puranic texts. Kalidasa\'s Meghaduta (5th century CE) describes the beauty of the Yamuna\'s banks. The Tulsidas Ramcharitmanas also celebrates the Yamuna.',
            rituals: 'Boat rides at dusk, offering prayers with flowers, floating diyas, and the daily evening aarti at Mathura and Vrindavan.',
            culture: 'The Yamuna has been the muse of medieval poets like Surdas and Mirabai. The Brij region\'s entire cultural identity revolves around Krishna\'s relationship with the Yamuna.'
        },
        {
            id: 'saraswati',
            name: 'Saraswati',
            english: 'Saraswati (mythical/underground)',
            icon: '📜',
            color: '#f59e0b',
            tagline: 'River of Knowledge & Wisdom',
            region: 'north',
            origin: 'Mythical: Himalayas; Physical: Analysis of satellite imagery suggests ancient river traces in Rajasthan/Haryana',
            length: 'Unknown (mythical)',
            deities: 'Goddess Saraswati',
            description: 'The most enigmatic of the sacred rivers, Saraswati is both a mythical river described in Vedic texts and possibly a real river that dried up thousands of years ago. Worshipped as the goddess of knowledge, music, and arts.',
            significance: 'The invisible Saraswati is believed to flow underground and merge with the Ganga and Yamuna at the Triveni Sangam in Prayagraj. Pilgrims bathe at the Sangam to receive her blessings.',
            pilgrimageSites: ['Prayagraj (Sangam)', 'Pehowa', 'Adi Badri', 'Somnath'],
            festivals: ['Vasant Panchami', 'Saraswati Puja', 'Guru Purnima'],
            ghatExamples: [
                { name: 'Sangam Ghat', city: 'prayagraj', icon: '🙏', desc: 'The invisible Saraswati is believed to join the Ganga and Yamuna here, creating the most sacred bathing spot in Hinduism.', significance: 'Triple sacred confluence' }
            ],
            history: 'The Rigveda contains over 70 references to the Saraswati, describing it as the greatest of rivers flowing from the mountains to the sea. The dried-up Ghaggar-Hakra river system in modern Rajasthan and Haryana may be its physical remnant.',
            rituals: 'Offerings at the Triveni Sangam, Vasant Panchami puja where books and instruments are placed before the goddess.',
            culture: 'Goddess Saraswati is the patron of learning, music, and the arts. Every school in India has her image, and she is worshipped during examinations and new ventures.'
        },
        {
            id: 'godavari',
            name: 'Godavari',
            english: 'Godavari',
            icon: '🌿',
            color: '#10b981',
            tagline: 'Dakshina Ganga (Ganges of the South)',
            region: 'peninsular',
            origin: 'Trimbakeshwar, Nashik, Maharashtra',
            length: '1,465 km',
            deities: 'Lord Dattatreya, Goddess Godavari',
            description: 'The longest river in peninsular India, often called the Dakshina Ganga (Southern Ganges). It is sacred to South Indian Hindus and site of the massive Godavari Pushkaram festival.',
            significance: 'Considered equivalent to the Ganga in spiritual merit. Bathing in the Godavari during Pushkaram is believed to grant immense spiritual benefits.',
            pilgrimageSites: ['Nasik', 'Trimbakeshwar', 'Kumbh Mela site', 'Rajahmundry', 'Bhadrachalam', 'Tapeeram'],
            festivals: ['Godavari Pushkaram', 'Nag Panchami', 'Kumbh Mela (Nashik)', 'Bonalu'],
            ghatExamples: [
                { name: 'Ramkund', city: 'varanasi', icon: '🏺', desc: 'Sacred bathing ghat in Nasik where Lord Rama is believed to have bathed during his exile. Most important Godavari ghat.', significance: 'Rama\'s sacred bathing spot' },
                { name: 'Gautam Ghat', city: 'varanasi', icon: '🧘', desc: 'Where sage Gautama worshipped Lord Shiva. Important for performing last rites and memorial ceremonies.', significance: 'Sage Gautama\'s penance site' }
            ],
            history: 'Mentioned in the Markandeya Purana and the Skanda Purana. The Godavari Pushkaram tradition dates back to ancient times, with every 12 years marking a major celebration at the river.',
            rituals: 'Pushkaram bathing rituals, shraddha ceremonies, feeding the poor on the riverbanks, floating offerings.',
            culture: 'The Godavari region is the heartland of Marathi culture. Nasik, on its banks, is one of the four Kumbh Mela sites and a major center of Maharashtra\'s spiritual life.'
        },
        {
            id: 'narmada',
            name: 'Narmada',
            english: 'Narmada',
            icon: '⚡',
            color: '#ec4899',
            tagline: 'The Rejuvenator',
            region: 'central',
            origin: 'Amarkantak, Madhya Pradesh',
            length: '1,312 km',
            deities: 'Goddess Narmada, Lord Shiva (as Mamaleshwar)',
            description: 'Called the "Rejuvenator" (Narmada ka jal hai amrit), this river is unique for flowing westward between the Vindhya and Satpura ranges. A single sighting of the Narmada is believed to be equivalent to visiting all pilgrimage sites.',
            significance: 'Simply seeing the Narmada is said to grant the merit of visiting all holy places. The river is believed to be an incarnation of Lord Shiva\'s tears.',
            pilgrimageSites: ['Amarkantak', 'Omkareshwar', 'Maheshwar', 'Harsiddhi', 'Bhedaghat', 'Achalgarh'],
            festivals: ['Narmada Pushkaram', 'Narmada Jayanti', 'Mahashivratri', 'Navratri'],
            ghatExamples: [
                { name: 'Maheshwar Ghat', city: 'varanasi', icon: '🏰', desc: 'Historic ghat at Maheshwar, the ancient city of Queen Ahilyabai Holkar, with stunning fort-palace overlooking the river.', significance: 'Ahilyabai Holkar\'s kingdom' },
                { name: 'Omkareshwar Ghat', city: 'varanasi', icon: '🕉️', desc: 'Sacred ghat at Omkareshwar, where the island formation resembles the sacred Om symbol and houses a Jyotirlinga.', significance: 'Om-shaped island and Jyotirlinga' }
            ],
            history: 'The Narmada is mentioned in the Puranas as one of the most sacred rivers. Bhedaghat\'s marble rocks were described by the Chinese traveler Xuanzang (7th century CE). Tansen, the legendary musician, was born near the Narmada.',
            rituals: 'Parikrama (circumambulation) of the Narmada is considered one of the holiest pilgrimages. Devotees walk the entire 1,312 km length of the river on foot.',
            culture: 'The Narmada valley is home to the Bhil and Gond tribal communities. The river is central to Madhya Pradesh\'s cultural identity, inspiring folk songs and local legends.'
        },
        {
            id: 'indus',
            name: 'Sindhu',
            english: 'Indus',
            icon: '🏔️',
            color: '#8b5cf6',
            tagline: 'Cradle of Civilization',
            region: 'north',
            origin: 'Mansarovar Lake & Sengge Zangbo (Tibet)',
            length: '3,180 km',
            deities: 'Sindhu (River Goddess)',
            description: 'The river that gave India its name. The Indus civilization (3300–1300 BCE) flourished along its banks, making it the cradle of one of humanity\'s oldest urban civilizations.',
            significance: 'The Sindhu (Indus) is mentioned as one of the Sapta Sindhu (seven rivers) in the Rigveda. It represents India\'s ancient civilizational heritage.',
            pilgrimageSites: ['Ladakh', 'Leh', 'Kargil', 'Sialkot'],
            festivals: ['Hemis Festival', 'Losar'],
            ghatExamples: [
                { name: 'Leh Riverfront', city: 'varanasi', icon: '🏔️', desc: 'The Indus flows through the stunning landscape of Ladakh, where Buddhist monasteries perch above its banks.', significance: 'Buddhist heritage along the Indus' }
            ],
            history: 'The Indus Valley Civilization (Harappan Civilization) was one of the world\'s earliest urban civilizations. Mohenjo-daro and Harappa were major cities along the Indus. The Rigveda contains hymns celebrating the Sindhu\'s might.',
            rituals: 'Prayers at Buddhist monasteries along the river, offering flowers to the river, circumambulation of sacred sites.',
            culture: 'The name "India" derives from "Indus" (Sindhu). The river represents the deep historical roots of Indian civilization, connecting modern India to its Bronze Age past.'
        },
        {
            id: 'kaveri',
            name: 'Kaveri',
            english: 'Kaveri',
            icon: '🌸',
            color: '#f43f5e',
            tagline: 'Lifeline of the South',
            region: 'peninsular',
            origin: 'Talakaveri, Coorg, Karnataka',
            length: '800 km',
            deities: 'Goddess Kaveri, Lord Agni',
            description: 'The most sacred river of South India, worshipped as a goddess by millions in Karnataka and Tamil Nadu. The Kaveri dispute has been central to South Indian politics for over a century.',
            significance: 'Bathing in the Kaveri during the Tamil month of Aipasi is believed to cleanse sins. The river is considered a form of Goddess Lakshmi.',
            pilgrimageSites: ['Talakaveri', 'Srirangapatna', 'Tiruchirapalli', 'Srisailam', 'Mysore', 'Thanjavur'],
            festivals: ['Kaveri Pushkaram', 'Pongal', 'Kaveri Sankramana', 'Nammakal festivals'],
            ghatExamples: [
                { name: 'Amma Mandapam', city: 'varanasi', icon: '🛕', desc: 'Sacred ghat at Srirangapatna, on an island in the Kaveri, housing one of the most revered Vishnu temples in South India.', significance: 'Divine Vishnu temple' }
            ],
            history: 'The Kaveri has been central to the Chola dynasty (9th–13th century CE), which built magnificent temples along its banks including the Brihadeeswarar Temple. Sangam literature (300 BCE–300 CE) extensively references the Kaveri.',
            rituals: 'Kaveri Sankramana ceremony during Tula month, Pushkaram bathing rituals, floating of lamps, and offering of flowers at riverside temples.',
            culture: 'The Kaveri delta is known as the "Rice Bowl of Tamil Nadu." The great temples of Thanjavur, built by the Cholas, stand as testaments to the river\'s role in nurturing South Indian civilization.'
        }
    ];

    /* ============================================
       DATA: Festivals on Sacred Waters
       ============================================ */
    const RIVER_FESTIVALS = [
        {
            name: 'Kumbh Mela',
            icon: '🏺',
            river: 'Ganga, Yamuna, Saraswati (Sangam)',
            month: 'January / July (rotating)',
            description: 'The largest peaceful gathering of humans on Earth, attracting over 100 million pilgrims. Held at four locations on a 12-year cycle: Prayagraj, Haridwar, Nashik, and Ujjain.',
            color: '#ff6f00'
        },
        {
            name: 'Ganga Dussehra',
            icon: '🌊',
            river: 'Ganga',
            month: 'May–June (Jyeshtha Shukla Dashami)',
            description: 'Celebrates the descent of the Ganga from heaven to earth. Devotees take ritual baths and float lamps on the river at Varanasi, Haridwar, and Prayagraj.',
            color: '#3b82f6'
        },
        {
            name: 'Chhath Puja',
            icon: '🌅',
            river: 'Ganga, Yamuna, and other rivers',
            month: 'October–November (Kartik)',
            description: 'An ancient Vedic festival dedicated to the Sun God, with elaborate rituals performed standing in river water at dawn and dusk. Especially grand in Bihar and UP.',
            color: '#f59e0b'
        },
        {
            name: 'Pushkaram',
            icon: '🙏',
            river: 'All sacred rivers (rotating)',
            month: 'Varies by river (12-year cycle)',
            description: 'A major festival celebrated once every 12 years at each of the 12 sacred rivers. Mass bathing, prayers, and spiritual discourses mark the occasion.',
            color: '#10b981'
        },
        {
            name: 'Gangaur',
            icon: '💑',
            river: 'Ganga',
            month: 'March–April (Chaitra)',
            description: 'A colorful 18-day festival in Rajasthan celebrating the marriage of Lord Shiva and Goddess Parvati. Idols are immersed in rivers with great fanfare.',
            color: '#ec4899'
        },
        {
            name: 'Makar Sankranti',
            icon: '☀️',
            river: 'Ganga and other rivers',
            month: 'January 14',
            description: 'A harvest festival where millions take holy dips in sacred rivers. The day marks the sun\'s transition into Capricorn and is celebrated with kite flying.',
            color: '#8b5cf6'
        }
    ];

    /* ============================================
       DATA: Cultural Traditions
       ============================================ */
    const CULTURAL_TRADITIONS = [
        {
            name: 'Ganga Aarti',
            icon: '🪔',
            description: 'A spectacular evening prayer ceremony held at the riverbanks, particularly at Varanasi\'s Dashashwamedh Ghat and Haridwar\'s Har Ki Pauri. Priests perform synchronized rituals with multi-tiered oil lamps, incense, and conch shells while hundreds of floating diyas illuminate the water.',
            rivers: ['Ganga']
        },
        {
            name: 'Ritual Bathing (Snana)',
            icon: '🙏',
            description: 'The practice of bathing in sacred rivers to cleanse sins and achieve spiritual purification. Devotees wake before dawn to immerse themselves, chanting mantras. Each river has specific auspicious dates for this practice.',
            rivers: ['Ganga', 'Yamuna', 'Narmada', 'Godavari', 'Kaveri']
        },
        {
            name: 'Immersion of Ashes (Asthi Visarjan)',
            icon: '🏺',
            description: 'A vital Hindu funeral rite where cremated remains are immersed in a sacred river, believed to grant moksha to the departed soul. Varanasi\'s Manikarnika and Harishchandra ghats are the primary cremation ghats.',
            rivers: ['Ganga', 'Yamuna']
        },
        {
            name: 'Tarpan (Ancestral Offerings)',
            icon: '💧',
            description: 'The ritual of offering water mixed with black sesame seeds to ancestors, typically performed at sacred river confluences. It is believed that this provides nourishment and peace to departed souls.',
            rivers: ['Ganga', 'Yamuna', 'Saraswati']
        },
        {
            name: 'Floating Diyas',
            icon: '🕯️',
            description: 'The practice of lighting small oil lamps and floating them on the river at dusk. Each diya represents prayers being carried by the river to the divine. The sight of thousands of floating lights is breathtaking.',
            rivers: ['Ganga', 'Narmada', 'Godavari']
        },
        {
            name: 'River Parikrama (Circumambulation)',
            icon: '🚶',
            description: 'Walking the entire length of a sacred river on foot as a devotional practice. The Narmada Parikrama (1,312 km) and the Gomukh-to-Ganga trek are among the most revered pilgrimages.',
            rivers: ['Narmada', 'Ganga']
        },
        {
            name: 'Pushkaram Bathing',
            icon: '🚿',
            description: 'Once every 12 years, each of the 12 sacred rivers hosts a Pushkaram festival. Mass bathing during this period is believed to multiply spiritual merit a thousandfold. Millions gather at each river.',
            rivers: ['All Sacred Rivers']
        },
        {
            name: 'Sandhya Vandanam (Evening Prayers)',
            icon: '🌅',
            description: 'Brahmins perform evening prayers at the riverbanks facing the setting sun, chanting Gayatri Mantra and offering water (arghya) to the Sun God. This daily ritual has been practiced for millennia.',
            rivers: ['Ganga', 'Yamuna', 'Narmada', 'Saraswati']
        }
    ];

    /* ============================================
       DATA: Historical References
       ============================================ */
    const HISTORICAL_REFERENCES = [
        {
            source: 'Rigveda (1500 BCE)',
            title: 'Hymns to the Rivers',
            quote: '"With her swift current, the mighty Saraswati flows, purifying all. The Sindhu moves like a herd of bulls, rushing onward."',
            explanation: 'The Rigveda contains over 70 references to the Saraswati and celebrates all seven rivers (Sapta Sindhu) as the source of life and spiritual nourishment.'
        },
        {
            source: 'Mahabharata',
            title: 'Bhagiratha\'s Penances',
            quote: '"Through the grace of Shiva, the Ganga was divided into three streams — one for heaven, one for the earth, and one for the nether world."',
            explanation: 'The epic describes how King Bhagiratha brought the Ganga from heaven through Lord Shiva\'s matted locks to purify the ashes of his ancestors, establishing the river\'s sacred origin myth.'
        },
        {
            source: 'Vishnu Purana',
            title: 'Glory of Sacred Rivers',
            quote: '"The man who, even once, remembers or beholds the Ganga, the Yamuna, and the Saraswati at the Triveni Sangam, is freed from all sins."',
            explanation: 'Puranic literature establishes the Triveni Sangam in Prayagraj as the holiest bathing spot, where all three sacred rivers converge to offer supreme spiritual merit.'
        },
        {
            source: 'Meghaduta – Kalidasa (5th century CE)',
            title: 'The Yamuna\'s Beauty',
            quote: '"Herons stand on the banks of the Yamuna, their white plumage bright against the water lilies. The breeze carries the scent of jasmine from the groves of Vrindavan."',
            explanation: 'Kalidasa\'s famous poem describes the beauty of the Yamuna\'s banks, showing how the river inspired India\'s greatest classical poet and shaped the aesthetic tradition of Indian literature.'
        },
        {
            source: 'Allahabad Pillar Inscription (4th century CE)',
            title: 'Samudragupta\'s Pilgrimage',
            quote: '"The great king Samudragupta traveled to the banks of the Ganga and performed sacrifices at the Triveni, fulfilling his dharma as a righteous ruler."',
            explanation: 'This inscription by Harishena describes the Gupta emperor\'s pilgrimage, proving that royal patronage of sacred river sites dates back to India\'s golden age.'
        },
        {
            source: 'Skanda Purana',
            title: 'Narmada: The Holiest River',
            quote: '"Even a glance at the Narmada bestows the merit of all pilgrimages. She is the daughter of Lord Shiva and flows through his abode."',
            explanation: 'The Skanda Purana elevates the Narmada above all other rivers, stating that simply seeing the river grants liberation. This belief drives the famous Narmada Parikrama pilgrimage.'
        }
    ];

    /* ============================================
       DATA: Map river path coordinates (SVG)
       ============================================ */
    const RIVER_MAP_PATHS = {
        ganga: 'M260,130 C280,150 310,160 340,170 C370,180 400,200 430,220 C460,240 490,260 520,280 C550,300 570,320 580,340',
        yamuna: 'M240,120 C260,140 280,160 300,180 C320,200 340,230 360,260 C380,290 400,320 430,340',
        saraswati: 'M200,160 C210,180 220,200 230,220 C240,240 260,260 280,280',
        godavari: 'M260,380 C280,390 310,400 340,410 C370,420 400,430 430,440 C460,450 490,460 520,470',
        narmada: 'M210,350 C230,355 260,360 290,365 C320,370 350,375 380,380 C400,383 420,386 440,388',
        indus: 'M180,80 C200,100 210,130 220,160 C230,190 240,220 250,250',
        kaveri: 'M320,490 C340,495 360,500 380,505 C400,510 420,515 440,520'
    };

    const RIVER_MAP_MARKERS = {
        ganga: { x: 430, y: 220, label: 'Ganga' },
        yamuna: { x: 360, y: 260, label: 'Yamuna' },
        saraswati: { x: 230, y: 220, label: 'Saraswati' },
        godavari: { x: 400, y: 430, label: 'Godavari' },
        narmada: { x: 320, y: 370, label: 'Narmada' },
        indus: { x: 220, y: 160, label: 'Sindhu' },
        kaveri: { x: 380, y: 505, label: 'Kaveri' }
    };

    /* ============================================
       INITIALIZATION
       ============================================ */
    document.addEventListener('DOMContentLoaded', init);

    function init() {
        createWaterParticles();
        renderRiverCards();
        renderMapPaths();
        renderMapLegend();
        renderGhatCards();
        renderFestivalTimeline();
        renderTraditions();
        renderHistoryCards();
        setupFilterTabs();
        setupModal();
        setupMapInteractions();
        setupScrollAnimations();
    }

    /* ============================================
       HERO: Water Particle Animation
       ============================================ */
    function createWaterParticles() {
        var container = document.getElementById('waterParticles');
        if (!container) return;
        for (var i = 0; i < 20; i++) {
            var particle = document.createElement('div');
            particle.className = 'srh-particle';
            var size = Math.random() * 6 + 2;
            particle.style.width = size + 'px';
            particle.style.height = size + 'px';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDuration = (Math.random() * 10 + 8) + 's';
            particle.style.animationDelay = (Math.random() * 8) + 's';
            container.appendChild(particle);
        }
    }

    /* ============================================
       RIVER CARDS
       ============================================ */
    function renderRiverCards(filter) {
        var grid = document.getElementById('riverGrid');
        if (!grid) return;
        var filtered = filter && filter !== 'all'
            ? SACRED_RIVERS.filter(function (r) { return r.region === filter; })
            : SACRED_RIVERS;

        grid.innerHTML = filtered.map(function (river) {
            var sitesHtml = river.pilgrimageSites.slice(0, 4).map(function (s) {
                return '<span class="srh-river-site-tag">' + s + '</span>';
            }).join('');

            return '<div class="srh-river-card srh-animate-in" data-river="' + river.id + '">' +
                '<div class="srh-river-card-header">' +
                    '<div class="srh-river-icon">' + river.icon + '</div>' +
                    '<div>' +
                        '<div class="srh-river-name">' + river.name + '</div>' +
                        '<div class="srh-river-tagline">' + river.tagline + '</div>' +
                    '</div>' +
                '</div>' +
                '<div class="srh-river-meta">' +
                    '<span class="srh-river-meta-item"><strong>Length:</strong> ' + river.length + '</span>' +
                    '<span class="srh-river-meta-item"><strong>Origin:</strong> ' + river.origin.split(',')[0] + '</span>' +
                '</div>' +
                '<div class="srh-river-desc">' + river.description + '</div>' +
                '<div class="srh-river-sites">' + sitesHtml + '</div>' +
                '<div class="srh-river-cta">Explore Details →</div>' +
            '</div>';
        }).join('');

        // Bind click events
        var cards = grid.querySelectorAll('.srh-river-card');
        cards.forEach(function (card) {
            card.addEventListener('click', function () {
                var riverId = this.getAttribute('data-river');
                openRiverModal(riverId);
            });
        });

        animateVisibleElements();
    }

    /* ============================================
       INTERACTIVE MAP
       ============================================ */
    function renderMapPaths() {
        var pathsGroup = document.getElementById('srhRiverPaths');
        var markersGroup = document.getElementById('srhRiverMarkers');
        if (!pathsGroup || !markersGroup) return;

        SACRED_RIVERS.forEach(function (river) {
            var pathData = RIVER_MAP_PATHS[river.id];
            var markerData = RIVER_MAP_MARKERS[river.id];
            if (!pathData || !markerData) return;

            // Draw river path
            var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            path.setAttribute('d', pathData);
            path.setAttribute('stroke', river.color);
            path.setAttribute('class', 'srh-river-path');
            path.setAttribute('data-river', river.id);
            pathsGroup.appendChild(path);

            // Draw marker
            var g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
            g.setAttribute('class', 'srh-river-marker');
            g.setAttribute('data-river', river.id);

            var circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            circle.setAttribute('cx', markerData.x);
            circle.setAttribute('cy', markerData.y);
            circle.setAttribute('r', '8');
            circle.setAttribute('fill', river.color);
            circle.setAttribute('stroke', '#fff');
            circle.setAttribute('stroke-width', '2');
            g.appendChild(circle);

            var text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            text.setAttribute('x', markerData.x);
            text.setAttribute('y', markerData.y - 14);
            text.setAttribute('text-anchor', 'middle');
            text.setAttribute('class', 'srh-river-marker-text');
            text.textContent = markerData.label;
            g.appendChild(text);

            markersGroup.appendChild(g);
        });
    }

    function renderMapLegend() {
        var container = document.getElementById('srhLegendItems');
        if (!container) return;
        container.innerHTML = SACRED_RIVERS.map(function (river) {
            return '<div class="srh-legend-item">' +
                '<span class="srh-legend-dot" style="background:' + river.color + '"></span>' +
                '<span>' + river.name + ' (' + river.english + ')</span>' +
            '</div>';
        }).join('');
    }

    function setupMapInteractions() {
        var markers = document.querySelectorAll('.srh-river-marker');
        var paths = document.querySelectorAll('.srh-river-path');

        function showRiverInfo(riverId) {
            var river = SACRED_RIVERS.find(function (r) { return r.id === riverId; });
            if (!river) return;

            var defaultEl = document.querySelector('.srh-map-info-default');
            var contentEl = document.getElementById('srhMapInfoContent');
            if (defaultEl) defaultEl.style.display = 'none';
            if (contentEl) contentEl.style.display = 'block';

            document.getElementById('srhInfoIcon').textContent = river.icon;
            document.getElementById('srhInfoTag').textContent = river.tagline;
            document.getElementById('srhInfoName').textContent = river.name + ' (' + river.english + ')';
            document.getElementById('srhInfoDesc').textContent = river.description;
            document.getElementById('srhInfoOrigin').textContent = river.origin;
            document.getElementById('srhInfoReligion').textContent = river.significance;
            document.getElementById('srhInfoHistory').textContent = river.history.substring(0, 200) + '...';

            var sitesEl = document.getElementById('srhInfoSites');
            sitesEl.innerHTML = river.pilgrimageSites.map(function (s) {
                return '<span class="srh-river-site-tag">' + s + '</span>';
            }).join('');

            var festivalsEl = document.getElementById('srhInfoFestivals');
            festivalsEl.innerHTML = river.festivals.map(function (f) {
                return '<span class="srh-river-site-tag">' + f + '</span>';
            }).join('');
        }

        markers.forEach(function (marker) {
            marker.addEventListener('click', function () {
                var riverId = this.getAttribute('data-river');
                showRiverInfo(riverId);
            });
        });

        paths.forEach(function (path) {
            path.addEventListener('click', function () {
                var riverId = this.getAttribute('data-river');
                showRiverInfo(riverId);
            });
        });

        var closeBtn = document.getElementById('srhInfoClose');
        if (closeBtn) {
            closeBtn.addEventListener('click', function () {
                var defaultEl = document.querySelector('.srh-map-info-default');
                var contentEl = document.getElementById('srhMapInfoContent');
                if (defaultEl) defaultEl.style.display = 'block';
                if (contentEl) contentEl.style.display = 'none';
            });
        }
    }

    /* ============================================
       GHAT CARDS
       ============================================ */
    function renderGhatCards(filter) {
        var grid = document.getElementById('ghatGrid');
        if (!grid) return;

        var allGhats = [];
        SACRED_RIVERS.forEach(function (river) {
            if (river.ghatExamples) {
                river.ghatExamples.forEach(function (ghat) {
                    allGhats.push({
                        name: ghat.name,
                        city: ghat.city,
                        icon: ghat.icon,
                        desc: ghat.desc,
                        significance: ghat.significance,
                        river: river.name
                    });
                });
            }
        });

        var filtered = filter && filter !== 'all'
            ? allGhats.filter(function (g) { return g.city === filter; })
            : allGhats;

        grid.innerHTML = filtered.map(function (ghat) {
            return '<div class="srh-ghat-card srh-animate-in">' +
                '<div class="srh-ghat-card-header">' +
                    '<span class="srh-ghat-icon">' + ghat.icon + '</span>' +
                    '<span class="srh-ghat-name">' + ghat.name + '</span>' +
                '</div>' +
                '<span class="srh-ghat-city-tag">' + ghat.city.charAt(0).toUpperCase() + ghat.city.slice(1) + ' • ' + ghat.river + '</span>' +
                '<div class="srh-ghat-desc">' + ghat.desc + '</div>' +
                '<div class="srh-ghat-significance">✦ ' + ghat.significance + '</div>' +
            '</div>';
        }).join('');

        animateVisibleElements();
    }

    /* ============================================
       FESTIVAL TIMELINE
       ============================================ */
    function renderFestivalTimeline() {
        var container = document.getElementById('festivalTimeline');
        if (!container) return;

        container.innerHTML = RIVER_FESTIVALS.map(function (fest) {
            return '<div class="srh-festival-item srh-animate-in">' +
                '<div class="srh-festival-dot" style="background:' + fest.color + '"></div>' +
                '<div class="srh-festival-card">' +
                    '<div class="srh-festival-icon">' + fest.icon + '</div>' +
                    '<div class="srh-festival-month">' + fest.month + '</div>' +
                    '<div class="srh-festival-name">' + fest.name + '</div>' +
                    '<div class="srh-festival-river">📍 ' + fest.river + '</div>' +
                    '<div class="srh-festival-desc">' + fest.description + '</div>' +
                '</div>' +
            '</div>';
        }).join('');

        animateVisibleElements();
    }

    /* ============================================
       CULTURAL TRADITIONS
       ============================================ */
    function renderTraditions() {
        var grid = document.getElementById('traditionsGrid');
        if (!grid) return;

        grid.innerHTML = CULTURAL_TRADITIONS.map(function (trad) {
            var riverTags = trad.rivers.map(function (r) {
                return '<span class="srh-river-site-tag">' + r + '</span>';
            }).join('');

            return '<div class="srh-tradition-card srh-animate-in">' +
                '<div class="srh-tradition-icon">' + trad.icon + '</div>' +
                '<div class="srh-tradition-name">' + trad.name + '</div>' +
                '<div class="srh-tradition-desc">' + trad.description + '</div>' +
                '<div class="srh-tradition-rivers">' + riverTags + '</div>' +
            '</div>';
        }).join('');

        animateVisibleElements();
    }

    /* ============================================
       HISTORICAL REFERENCES
       ============================================ */
    function renderHistoryCards() {
        var container = document.getElementById('historyCards');
        if (!container) return;

        container.innerHTML = HISTORICAL_REFERENCES.map(function (ref) {
            return '<div class="srh-history-card srh-animate-in">' +
                '<div class="srh-history-source">' + ref.source + '</div>' +
                '<div class="srh-history-title">' + ref.title + '</div>' +
                '<div class="srh-history-quote">' + ref.quote + '</div>' +
                '<div class="srh-history-explanation">' + ref.explanation + '</div>' +
            '</div>';
        }).join('');

        animateVisibleElements();
    }

    /* ============================================
       FILTER TABS
       ============================================ */
    function setupFilterTabs() {
        // River filter
        var riverTabs = document.getElementById('riverFilterTabs');
        if (riverTabs) {
            riverTabs.addEventListener('click', function (e) {
                var btn = e.target.closest('.srh-filter-btn');
                if (!btn) return;
                riverTabs.querySelectorAll('.srh-filter-btn').forEach(function (b) {
                    b.classList.remove('active');
                });
                btn.classList.add('active');
                renderRiverCards(btn.getAttribute('data-filter'));
            });
        }

        // Ghat filter
        var ghatTabs = document.getElementById('ghatFilterTabs');
        if (ghatTabs) {
            ghatTabs.addEventListener('click', function (e) {
                var btn = e.target.closest('.srh-filter-btn');
                if (!btn) return;
                ghatTabs.querySelectorAll('.srh-filter-btn').forEach(function (b) {
                    b.classList.remove('active');
                });
                btn.classList.add('active');
                renderGhatCards(btn.getAttribute('data-filter'));
            });
        }
    }

    /* ============================================
       RIVER DETAIL MODAL
       ============================================ */
    function setupModal() {
        var overlay = document.getElementById('srhModalOverlay');
        var closeBtn = document.getElementById('srhModalClose');
        if (closeBtn) {
            closeBtn.addEventListener('click', closeModal);
        }
        if (overlay) {
            overlay.addEventListener('click', function (e) {
                if (e.target === overlay) closeModal();
            });
        }
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') closeModal();
        });
    }

    function openRiverModal(riverId) {
        var river = SACRED_RIVERS.find(function (r) { return r.id === riverId; });
        if (!river) return;

        document.getElementById('srhModalIcon').textContent = river.icon;
        document.getElementById('srhModalTag').textContent = river.tagline;
        document.getElementById('srhModalTitle').textContent = river.name + ' (' + river.english + ')';
        document.getElementById('srhModalIntro').textContent = river.description;
        document.getElementById('srhModalDeity').textContent = river.deities;
        document.getElementById('srhModalLength').textContent = river.length + ' — Origin: ' + river.origin;
        document.getElementById('srhModalGhats').textContent = river.ghatExamples ? river.ghatExamples.map(function (g) { return g.name; }).join(', ') : 'Multiple ghats along its banks';
        document.getElementById('srhModalFestival').textContent = river.festivals.join(', ');
        document.getElementById('srhModalHistory').textContent = river.history;
        document.getElementById('srhModalRituals').textContent = river.rituals;
        document.getElementById('srhModalCulture').textContent = river.culture;

        var overlay = document.getElementById('srhModalOverlay');
        if (overlay) overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        var overlay = document.getElementById('srhModalOverlay');
        if (overlay) overlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    /* ============================================
       SCROLL ANIMATIONS
       ============================================ */
    function setupScrollAnimations() {
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        // Observe existing and future elements
        function observeElements() {
            document.querySelectorAll('.srh-animate-in:not(.visible)').forEach(function (el) {
                observer.observe(el);
            });
        }
        observeElements();

        // Re-observe after dynamic rendering
        var mutObs = new MutationObserver(observeElements);
        var mainContent = document.querySelector('.srh-section');
        if (mainContent) {
            mutObs.observe(mainContent, { childList: true, subtree: true });
        }
    }

    function animateVisibleElements() {
        // Trigger intersection observer re-check
        document.querySelectorAll('.srh-animate-in').forEach(function (el) {
            var rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight + 100) {
                el.classList.add('visible');
            }
        });
    }

})();
