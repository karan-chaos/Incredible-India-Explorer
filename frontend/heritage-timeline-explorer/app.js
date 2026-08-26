/* ==========================================================================
   HERITAGE TIMELINE EXPLORER — MAIN APPLICATION LOGIC
   Vanilla JavaScript. No external dependencies.
   Showcases all 42 UNESCO World Heritage Sites of India.
   ========================================================================== */

// ---------------------------------------------------------------------------
// 1. HERITAGE SITES DATA — 42 UNESCO World Heritage Sites
// ---------------------------------------------------------------------------

const HERITAGE_SITES = [
    // ---- CULTURAL (34) ----
    {
        id: 'ajanta-caves',
        name: 'Ajanta Caves',
        category: 'cultural',
        state: 'Maharashtra',
        year: 1983,
        description: 'Thirty rock-cut Buddhist cave monuments dating from the 2nd century BCE to 480 CE. Renowned for their masterful murals depicting Jataka tales and the life of Buddha.',
        image: '../assets/ajanta-caves.jpg',
        era: '2nd Century BCE',
        highlights: ['30 rock-cut caves in a horseshoe gorge', 'Finest surviving ancient Indian murals', 'Cave 1 painting of Padmapani bodhisattva'],
        significance: 'The Ajanta Caves represent the pinnacle of ancient Buddhist art. The murals are among the finest surviving examples of Indian painting, showing extraordinary mastery of line, colour, and expression.'
    },
    {
        id: 'ellora-caves',
        name: 'Ellora Caves',
        category: 'cultural',
        state: 'Maharashtra',
        year: 1983,
        description: 'A complex of 34 monasteries and temples carved into a basalt cliffside, spanning Buddhist, Hindu and Jain traditions (6th–10th century).',
        image: '../assets/ellora-caves.jpg',
        era: '6th–10th Century CE',
        highlights: ['Kailasa Temple — largest monolithic rock excavation in the world', 'Unique coexistence of three religions', 'Over 100,000 sq ft of carved surface'],
        significance: 'Ellora demonstrates the remarkable religious harmony of ancient India, where Buddhist, Hindu, and Jain traditions coexisted and created art side by side. The Kailasa Temple is an engineering marvel carved from a single rock.'
    },
    {
        id: 'agra-fort',
        name: 'Agra Fort',
        category: 'cultural',
        state: 'Uttar Pradesh',
        year: 1983,
        description: 'A massive Mughal fortress of red sandstone on the banks of the Yamuna. Served as the main residence of Mughal emperors until 1638.',
        image: '../assets/agra-fort.jpg',
        era: '16th Century CE',
        highlights: ['114 acres enclosed by double ramparts', 'Diwan-i-Am and Diwan-i-Khas halls', 'View of the Taj Mahal from Musamman Burj'],
        significance: 'Agra Fort is one of the finest examples of Mughal architecture, combining military fortification with palatial luxury. It witnessed the rise and fall of the Mughal Empire.'
    },
    {
        id: 'taj-mahal',
        name: 'Taj Mahal',
        category: 'cultural',
        state: 'Uttar Pradesh',
        year: 1983,
        description: 'An immense ivory-white marble mausoleum built by Emperor Shah Jahan for his wife Mumtaz Mahal. Considered the finest example of Mughal architecture worldwide.',
        image: '../assets/taj-mahal.jpg',
        era: '17th Century CE',
        highlights: ['Took 22 years and 20,000 workers to build', 'Perfect symmetry with 4 minarets', 'Semi-precious stone inlay (pietra dura)'],
        significance: 'The Taj Mahal is universally regarded as one of the most beautiful buildings ever constructed. It represents the zenith of Mughal artistic achievement and is an enduring symbol of love.'
    },
    {
        id: 'sun-temple',
        name: 'Konark Sun Temple',
        category: 'cultural',
        state: 'Odisha',
        year: 1984,
        description: 'A 13th-century temple shaped as a colossal chariot of the Sun God, with 24 elaborately carved stone wheels and pulled by seven horses.',
        image: '../assets/konark-sun-temple.jpg',
        era: '13th Century CE',
        highlights: ['Shaped as a giant stone chariot', '24 monumental carved wheels', 'Erotic sculptures on Northern gate'],
        significance: 'The Konark Sun Temple is a masterpiece of Kalinga architecture. Its astronomical precision — the wheels function as sundials — demonstrates the advanced scientific knowledge of medieval India.'
    },
    {
        id: 'kapilavastu',
        name: 'Mahabodhi Temple Complex',
        category: 'cultural',
        state: 'Bihar',
        year: 2002,
        description: 'The holiest Buddhist site, marking the exact spot where the Buddha attained enlightenment under the Bodhi Tree in Bodh Gaya.',
        image: '../assets/mahabodhi-temple.jpg',
        era: '3rd Century BCE',
        highlights: ['Marking spot of Buddha\'s enlightenment', 'Vajrasana (Diamond Throne) under the tree', 'Oldest surviving brick temple in India'],
        significance: 'The Mahabodhi Temple is the most sacred site in Buddhism. The original Bodhi Tree\'s descendant still stands in the complex, making it a living place of worship for millions of Buddhists worldwide.'
    },
    {
        id: 'sanchi',
        name: 'Sanchi Stupa',
        category: 'cultural',
        state: 'Madhya Pradesh',
        year: 1989,
        description: 'The oldest stone structure in India, built by Emperor Ashoka in the 3rd century BCE. A masterpiece of Buddhist art and architecture.',
        image: '../assets/sanchi-stupa.jpg',
        era: '3rd Century BCE',
        highlights: ['Commissioned by Emperor Ashoka', 'Great Stupa (Stupa 1) is 54 feet high', 'Finely carved gateway narratives'],
        significance: 'Sanchi is the best-preserved group of Buddhist monuments in India. The sculptural narratives on its gateways are among the earliest examples of Buddhist art, depicting the life of Buddha through symbols.'
    },
    {
        id: 'champaner',
        name: 'Champaner-Pavagadh Archaeological Park',
        category: 'cultural',
        state: 'Gujarat',
        year: 2004,
        description: 'An unexcavated archaeological city with Hindu and Islamic architecture dating from the 8th to 14th centuries.',
        image: '../assets/champaner-pavagadh.jpg',
        era: '8th–14th Century CE',
        highlights: ['Complete pre-Mughal Islamic city', 'Kalika Mata Temple atop Pavagadh Hill', 'Fusion of Hindu and Islamic styles'],
        significance: 'This is the only complete and unchanged Islamic pre-Mughal city in India. It represents a rare synthesis of Hindu and Islamic architectural traditions before the Mughal era.'
    },
    {
        id: 'red-fort',
        name: 'Red Fort Complex',
        category: 'cultural',
        state: 'Delhi',
        year: 2007,
        description: 'The main residence of the Mughal emperors for nearly 200 years. Built in 1648, it symbolises the zenith of Mughal creativity.',
        image: '../assets/red-fort.jpg',
        era: '17th Century CE',
        highlights: ['Lahori Gate is the main entrance', 'Diwan-i-Am and Diwan-i-Khas', 'India\'s Independence Day flag hoisting here'],
        significance: 'The Red Fort is inseparable from India\'s national identity. The Prime Minister hoists the national flag here every Independence Day, making it a living symbol of Indian sovereignty.'
    },
    {
        id: 'hampi',
        name: 'Group of Monuments at Hampi',
        category: 'cultural',
        state: 'Karnataka',
        year: 1986,
        description: 'The ruins of Vijayanagara, the last great Hindu empire, spread across a dramatic boulder-strewn landscape. Over 1,600 surviving structures.',
        image: '../assets/hampi.jpg',
        era: '14th–16th Century CE',
        highlights: ['Vittala Temple with iconic stone chariot', 'Virupaksha Temple still in active worship', 'Royal Enclosure and elephant stables'],
        significance: 'Hampi was one of the largest and richest cities in the world during its peak. Its ruins tell the story of a cosmopolitan empire that rivalled European Renaissance cities in wealth and culture.'
    },
    {
        id: 'khajuraho',
        name: 'Khajuraho Group of Monuments',
        category: 'cultural',
        state: 'Madhya Pradesh',
        year: 1986,
        description: 'A group of Hindu and Jain temples famous for their Nagara-style architecture and intricate erotic sculptures (950–1050 CE).',
        image: '../assets/khajuraho.jpg',
        era: '10th–11th Century CE',
        highlights: ['Only 25 of original 85 temples survive', 'Famous for detailed sculptural art', 'Western Group (Kandariya Mahadeva) is the finest'],
        significance: 'Khajuraho represents the peak of Nagara temple architecture. Its sculptures depict all aspects of life — the sacred and the mundane — celebrating the fullness of human existence.'
    },
    {
        id: 'churches-goa',
        name: 'Churches and Convents of Goa',
        category: 'cultural',
        state: 'Goa',
        year: 1986,
        description: 'A group of six churches and three convents from the Portuguese colonial period (16th–18th centuries), including the Basilica of Bom Jesus.',
        image: '../assets/goa-churches.jpg',
        era: '16th–18th Century CE',
        highlights: ['Basilica of Bom Jesus holds St. Francis Xavier\'s relics', 'Sé Cathedral is largest church in Asia', 'Baroque architecture adapted to tropical climate'],
        significance: 'These churches represent the spread of Christianity in Asia through the Portuguese colonial enterprise. The architecture is a unique fusion of European Baroque with local Indian craftsmanship.'
    },
    {
        id: 'fatehpur-sikri',
        name: 'Fatehpur Sikri',
        category: 'cultural',
        state: 'Uttar Pradesh',
        year: 1986,
        description: 'A perfectly preserved Mughal city built by Emperor Akbar in 1571, serving briefly as the capital before being abandoned due to water scarcity.',
        image: '../assets/fatehpur-sikri.jpg',
        era: '16th Century CE',
        highlights: ['Panch Mahal — five-storied columnar palace', 'Buland Darwaza — highest gateway in India', 'Tomb of Salim Chishti in marble'],
        significance: 'Fatehpur Sikri is a unique example of a complete Mughal city frozen in time. Its blend of Hindu, Islamic, and Jain architectural elements reflects Akbar\'s visionary syncretic philosophy.'
    },
    {
        id: 'mahabalipuram',
        name: 'Group of Monuments at Mahabalipuram',
        category: 'cultural',
        state: 'Tamil Nadu',
        year: 1984,
        description: 'A complex of 7th–8th century Pallava-era monuments including shore temples, rock-cut caves, monolithic rathas, and giant open-air bas-reliefs.',
        image: '../assets/mahabalipuram.jpg',
        era: '7th–8th Century CE',
        highlights: ['Shore Temple on the Bay of Bengal', 'Descent of the Ganges bas-relief', 'Five Rathas — monolithic temple models'],
        significance: 'Mahabalipuram showcases the transition from rock-cut to structural temple architecture. The Pallava sculptors here set the template for all subsequent South Indian temple art.'
    },
    {
        id: 'qutb-minar',
        name: 'Qutb Minar and its Monuments',
        category: 'cultural',
        state: 'Delhi',
        year: 1993,
        description: 'A 73-metre tapering minaret built in 1193, the tallest brick minaret in the world. Surrounded by several historically significant Indo-Islamic structures.',
        image: '../assets/qutb-minar.jpg',
        era: '12th–13th Century CE',
        highlights: ['73 metres tall — tallest brick minaret globally', 'Iron Pillar of Delhi — rust-resistant for 1600 years', 'Quwwat-ul-Islam Mosque — first mosque in India'],
        significance: 'The Qutb Minar complex marks the beginning of Islamic rule in India. The adjacent Iron Pillar demonstrates advanced metallurgical knowledge of ancient Indian craftsmen.'
    },
    {
        id: 'nanda-devi',
        name: 'Nanda Devi and Valley of Flowers',
        category: 'natural',
        state: 'Uttarakhand',
        year: 1988,
        description: 'A stunning mountain ecosystem containing the second-highest peak in India (7,816m) and a high-altitude valley carpeted with alpine wildflowers.',
        image: '../assets/nanda-devi.jpg',
        era: 'Natural Formation',
        highlights: ['7,816m peak — second highest in India', 'Home to Himalayan black bear and snow leopard', 'Valley blooms with 300+ alpine species in summer'],
        significance: 'This site encompasses one of the most biologically rich and pristine mountain ecosystems in the Western Himalayas, with species found nowhere else on Earth.'
    },
    {
        id: 'sundarbans',
        name: 'Sundarbans National Park',
        category: 'natural',
        state: 'West Bengal',
        year: 1987,
        description: 'The largest mangrove forest in the world, spanning 10,000 sq km across India and Bangladesh. Home to the Royal Bengal Tiger.',
        image: '../assets/sundarbans.jpg',
        era: 'Natural Formation',
        highlights: ['World\'s largest mangrove ecosystem', 'Home to the Royal Bengal Tiger', 'UNESCO Biosphere Reserve'],
        significance: 'The Sundarbans is the only mangrove forest in the world where tigers are found. The tigers here are unique — they swim between islands and are adapted to a saltwater environment.'
    },
    {
        id: 'kaziranga',
        name: 'Kaziranga National Park',
        category: 'natural',
        state: 'Assam',
        year: 1985,
        description: 'Home to two-thirds of the world\'s one-horned rhinoceroses and the highest density of tigers among protected areas.',
        image: '../assets/kaziranga.jpg',
        era: 'Natural Formation',
        highlights: ['2/3 of world\'s one-horned rhinoceroses', 'Highest tiger density per sq km', 'Home to wild water buffalo and elephants'],
        significance: 'Kaziranga is one of the most successful conservation stories in the world. Despite devastating floods and poaching, the park has brought the one-horned rhino back from near extinction.'
    },
    {
        id: 'manas',
        name: 'Manas Wildlife Sanctuary',
        category: 'natural',
        state: 'Assam',
        year: 1985,
        description: 'A biodiversity hotspot at the foot of the Eastern Himalayas, home to rare species including the golden langur and pygmy hog.',
        image: '../assets/manas.jpg',
        era: 'Natural Formation',
        highlights: ['Home to golden langur and pygmy hog', 'Project Tiger reserve since 1973', 'UNESCO World Heritage Site in Danger (1992–2011)'],
        significance: 'Manas is ecologically unique as the meeting point of the Indo-Malayan and Indo-Gurkha biomes, resulting in extraordinary biodiversity including 350+ bird species.'
    },
    {
        id: 'keoladeo',
        name: 'Keoladeo National Park',
        category: 'natural',
        state: 'Rajasthan',
        year: 1985,
        description: 'A world-famous bird sanctuary hosting over 360 species of birds, including Siberian cranes that migrate from Russia each winter.',
        image: '../assets/keoladeo.jpg',
        era: 'Natural Formation',
        highlights: ['364+ bird species documented', 'Wintering ground for Siberian Crane', 'UNESCO site and Ramsar Wetland'],
        significance: 'Keoladeo is one of the most important bird wintering grounds in the Indian subcontinent. The annual arrival of Siberian cranes was one of the world\'s great natural spectacles (though numbers have declined).'
    },
    {
        id: 'churches-mylapore',
        name: 'Great Living Chola Temples',
        category: 'cultural',
        state: 'Tamil Nadu',
        year: 2004,
        description: 'Three magnificent Hindu temples built during the Chola dynasty: Brihadisvara at Thanjavur and Gangaikondacholapuram, and Airavatesvara at Darasuram.',
        image: '../assets/brihadeeswara.jpg',
        era: '11th–12th Century CE',
        highlights: ['Brihadisvara — 66m vimana (tower)', 'World\'s largest monolithic temple dome', 'Remarkable bronze Nataraja sculptures'],
        significance: 'The Chola temples represent the pinnacle of South Indian Dravidian architecture. The Brihadisvara Temple\'s engineering — its capstone weighing 80 tonnes placed at 66m height — remains a mystery.'
    },
    {
        id: 'mount-abu',
        name: 'Dilwara Temples, Mount Abu',
        category: 'cultural',
        state: 'Rajasthan',
        year: 1998,
        description: 'Five Jain marble temples of extraordinary intricacy, built between the 11th and 13th centuries. The marble carvings are considered among the finest in the world.',
        image: '../assets/dilwara-temple.jpg',
        era: '11th–13th Century CE',
        highlights: ['Carvings so fine they appear machine-made', 'Vimal Vasahi ceiling has 1,084 marble panels', 'Each panel is unique in its design'],
        significance: 'The Dilwara Temples demonstrate a level of marble craftsmanship that has never been matched. Every surface is covered with extraordinarily detailed carvings depicting celestial dancers, flowers, and geometric patterns.'
    },
    {
        id: 'btb-hills',
        name: 'Buddhist Monuments at Sanchi',
        category: 'cultural',
        state: 'Madhya Pradesh',
        year: 1989,
        description: 'An important complex of Buddhist monuments including stupas, temples, and monastic remains dating from the 3rd century BCE.',
        image: '../assets/sanchi.jpg',
        era: '3rd Century BCE – 12th Century CE',
        highlights: ['Great Stupa (Stupa 1) is 1,683 years old', 'Four ornamental gateways (toranas)', 'Ashokan lion pillar'],
        significance: 'Sanchi preserves some of the oldest and finest examples of Buddhist art and architecture. The sculptural narratives on the toranas are early masterpieces of Indian storytelling.'
    },
    {
        id: 'dholavira',
        name: 'Dholavira: A Harappan City',
        category: 'cultural',
        state: 'Gujarat',
        year: 2021,
        description: 'A remarkably preserved Harappan (Indus Valley) city dating to 3000 BCE, showcasing advanced urban planning, water management, and a unique signboard with the oldest known inscription.',
        image: '../assets/dholavira.jpg',
        era: '3000 BCE',
        highlights: ['10th Indian UNESCO site (2021)', 'Oldest known signboard with 10+ signs', 'Sophisticated water reservoir system'],
        significance: 'Dholavira is one of the five largest Harappan cities and the most outstanding example of the Indus Valley Civilization\'s urban sophistication, water engineering, and social organisation.'
    },
    {
        id: 'ramappa',
        name: 'Ramappa Temple',
        category: 'cultural',
        state: 'Telangana',
        year: 2021,
        description: 'A 13th-century Shiva temple renowned for its floating bricks, intricate bracket sculptures, and extraordinary structural engineering.',
        image: '../assets/ramappa-temple.jpg',
        era: '13th Century CE',
        highlights: ['Built with "floating bricks" lighter than water', '20+ intricate bracket sculptures of celestial dancers', 'Sacrificial horse with 24 riders relief'],
        significance: 'The Ramappa Temple is a remarkable example of Kakatiya-era engineering. Its bricks are so light they float on water, yet the structure has withstood 800 years of earthquakes.'
    },
    {
        id: 'hoysala',
        name: 'Sacred Ensembles of Hoysala',
        category: 'cultural',
        state: 'Karnataka',
        year: 2023,
        description: 'Three Hoysala-era temples — Chennakeshava at Belur, Hoysaleshwara at Halebidu, and Keshava at Somanathapura — featuring extraordinarily detailed soapstone carvings.',
        image: '../assets/hoysala-temples.jpg',
        era: '12th–13th Century CE',
        highlights: ['Chennakeshava — 40+ bracket figures (madanika)', 'Soapstone carvings so detailed they appear lace-like', 'Star-shaped platforms unique to Hoysala style'],
        significance: 'The Hoysala temples are considered among the finest examples of Hindu temple architecture in the world. Every surface is covered with incredibly detailed carvings of gods, animals, dancers, and daily life.'
    },
    {
        id: 'shantiniketan',
        name: 'Santiniketan',
        category: 'cultural',
        state: 'West Bengal',
        year: 2023,
        description: 'The educational township founded by Rabindranath Tagore in 1901, now Visva-Bharati University, representing a unique approach to education harmonised with nature.',
        image: '../assets/shantiniketan.jpg',
        era: 'Early 20th Century CE',
        highlights: ['Founded by Nobel laureate Rabindranath Tagore', 'Classes held under open sky and trees', 'Visva-Bharati — "Where the world makes its home in a single nest"'],
        significance: 'Santiniketan embodies Tagore\'s revolutionary vision of education that draws from both Eastern and Western traditions. Its architecture deliberately blends with the natural landscape.'
    },
    {
        id: 'jaipur',
        name: 'Jaipur City',
        category: 'cultural',
        state: 'Rajasthan',
        year: 2019,
        description: 'The "Pink City" — a 1727 planned city by Maharaja Sawai Jai Singh II, famous for its grid-like streets, rose-tinted buildings, and monumental civic structures.',
        image: '../assets/jaipur-city.jpg',
        era: '18th Century CE',
        highlights: ['World\'s first planned Indian city', 'Hawa Mahal — Palace of Winds (953 windows)', 'Jantar Mantar — largest stone sundial'],
        significance: 'Jaipur was one of the earliest planned cities in India. Its grid system, ventilation design, and rose-pink colour scheme (to welcome Prince of Wales in 1876) make it an exceptional example of urban design.'
    },
    {
        id: 'grp-monuments-aurangabad',
        name: 'The Architectural Work of Le Corbusier',
        category: 'cultural',
        state: 'Chandigarh',
        year: 2016,
        description: 'The Capitol Complex in Chandigarh, designed by Le Corbusier, represents a masterpiece of 20th-century modern architecture in a new city.',
        image: '../assets/chandigarh-capitol.jpg',
        era: '20th Century CE',
        highlights: ['High Court, Secretariat, and Assembly building', 'Open Hand Monument — 26m rotating sculpture', 'Master plan of the city of Chandigarh'],
        significance: 'The Capitol Complex is one of Le Corbusier\'s most significant works. His master plan for Chandigarh — India\'s first planned city after independence — influenced modernist architecture globally.'
    },
    {
        id: 'jaipur-observatory',
        name: 'Jantar Mantar, Jaipur',
        category: 'cultural',
        state: 'Rajasthan',
        year: 2010,
        description: 'An astronomical observation site built in the 18th century with the world\'s largest stone sundial and 19 other architectural astronomical instruments.',
        image: '../assets/jantar-mantar.jpg',
        era: '18th Century CE',
        highlights: ['Samrat Yantra — world\'s largest stone sundial (27m)', 'Accurate to within 2 seconds of time', '19 instruments for celestial observations'],
        significance: 'Jantar Mantar represents the peak of medieval Indian astronomical science. Its instruments achieve extraordinary accuracy without modern technology, demonstrating the advanced mathematical knowledge of the era.'
    },
    {
        id: 'victoria-terminus',
        name: 'Chhatrapati Shivaji Terminus',
        category: 'cultural',
        state: 'Maharashtra',
        year: 2004,
        description: 'A stunning Victorian Gothic Revival railway station in Mumbai, built in 1888. A masterpiece blending Indian and European architectural traditions.',
        image: '../assets/csmt-mumbai.jpg',
        era: '19th Century CE',
        highlights: ['1,000+ architectural features and sculptures', 'Peacock gate, tigers at entrance', 'Still one of the busiest railway stations in India'],
        significance: 'CST (formerly Victoria Terminus) is a living heritage monument — still serving millions of daily commuters. It represents Mumbai\'s identity as a city of migration and opportunity.'
    },
    {
        id: 'patkulama',
        name: 'Historic City of Gwalior',
        category: 'cultural',
        state: 'Madhya Pradesh',
        year: 2024,
        description: 'A historic city dominated by the imposing Gwalior Fort, with temples, palaces, and cenotaphs spanning over a millennium of Rajput and Mughal history.',
        image: '../assets/gwalior-fort.jpg',
        era: '6th–18th Century CE',
        highlights: ['Gwalior Fort — "Gibraltar of India"', 'Sas-Bahu and Teli ka Mandir temples', 'Tomb of Tansen — legendary musician'],
        significance: 'Gwalior has been a seat of power for centuries, from the Pratiharas to the Scindias. The fort\'s 1,000-year history of battles, sieges, and cultural patronage makes it a microcosm of Indian history.'
    },

    // ---- MIXED (1) ----
    {
        id: 'khangchendzonga',
        name: 'Khangchendzonga National Park',
        category: 'mixed',
        state: 'Sikkim',
        year: 2016,
        description: 'India\'s first and only mixed (natural + cultural) UNESCO site. Encompasses the world\'s third-highest peak and sacred glacial landscapes central to Sikkimese Buddhist culture.',
        image: '../assets/khangchendzonga.jpg',
        era: 'Natural + Cultural',
        highlights: ['World\'s third-highest peak (8,586m)', 'India\'s first mixed UNESCO site', 'Sacred to Sikkimese Buddhism'],
        significance: 'Khangchendzonga is unique because it was inscribed for both natural and cultural significance. The mountain is sacred to the Sikkimese people, who have coexisted with this extreme environment for centuries.'
    },

    // ---- Add remaining natural sites ----
    {
        id: 'western-ghats',
        name: 'Western Ghats',
        category: 'natural',
        state: 'Multiple States',
        year: 2012,
        description: 'One of the world\'s eight "hottest hotspots" of biological diversity, stretching 1,600 km along India\'s western coast with 7,402 flowering plant species.',
        image: '../assets/western-ghats.jpg',
        era: 'Natural Formation',
        highlights: ['One of 8 global biodiversity hotspots', '7,402+ flowering plant species', '500+ endemic species found nowhere else'],
        significance: 'The Western Ghats influence Indian monsoon patterns and harbour more than 300 globally threatened species. They are older than the Himalayas and one of the most biologically rich regions on Earth.'
    },
    {
        id: 'great-himalayan',
        name: 'Great Himalayan National Park',
        category: 'natural',
        state: 'Himachal Pradesh',
        year: 2014,
        description: 'A pristine mountain ecosystem in the western Himalayas, home to snow leopards, Himalayan brown bears, and over 375 species of fauna.',
        image: '../assets/great-himalayan-park.jpg',
        era: 'Natural Formation',
        highlights: ['754 sq km of pristine Himalayan wilderness', 'Home to snow leopard and Himalayan brown bear', 'Alpine meadows and glacial lakes'],
        significance: 'This park preserves one of the last intact ecosystems of the western Himalayas. It represents a unique transition zone between the Palearctic and Indomalayan biogeographic realms.'
    }
];

// ---------------------------------------------------------------------------
// 2. TAB DEFINITIONS
// ---------------------------------------------------------------------------

const HRT_TABS = [
    { key: 'about', label: 'About', icon: '<i class="fa-solid fa-book-open" style="color: var(--primary-gold);"></i>' },
    { key: 'highlights', label: 'Highlights', icon: '<i class="fa-solid fa-star" style="color: var(--primary-gold);"></i>' },
    { key: 'significance', label: 'Significance', icon: '<i class="fa-solid fa-trophy" style="color: var(--primary-gold);"></i>' }
];

// ---------------------------------------------------------------------------
// 3. INIT FUNCTION
// ---------------------------------------------------------------------------

function initHeritagePage() {
    const timelineItems = document.getElementById('hrt-timeline-items');
    const noResults = document.getElementById('hrt-no-results');
    const detailPanel = document.getElementById('hrt-detail-panel');
    const modalBackdrop = document.getElementById('hrt-modal-backdrop');
    const searchInput = document.getElementById('hrt-search-input');
    const categoryTabs = document.getElementById('hrt-category-tabs');
    const stateSelect = document.getElementById('hrt-state-select');
    const sortSelect = document.getElementById('hrt-sort-select');
    const resetBtn = document.getElementById('hrt-reset-btn');
    const countEl = document.getElementById('hrt-count');

    if (!timelineItems || !detailPanel) return;

    let detailPanelFocusTrap = null;
    let currentList = [...HERITAGE_SITES];
    let activeCategory = 'all';

    // -----------------------------------------------------------------------
    // POPULATE STATE DROPDOWN
    // -----------------------------------------------------------------------
    function populateStates() {
        const states = new Set();
        HERITAGE_SITES.forEach(s => states.add(s.state));
        const sorted = Array.from(states).sort();
        if (stateSelect) {
            stateSelect.innerHTML = '<option value="all">All States</option>' +
                sorted.map(s => `<option value="${s}">${s}</option>`).join('');
        }
    }

    // -----------------------------------------------------------------------
    // RENDER TIMELINE
    // -----------------------------------------------------------------------
    function renderTimeline() {
        if (!currentList.length) {
            timelineItems.innerHTML = '';
            if (noResults) noResults.style.display = 'block';
            if (countEl) countEl.textContent = '0';
            return;
        }

        if (noResults) noResults.style.display = 'none';
        if (countEl) countEl.textContent = currentList.length;

        // Sort by year ascending for the timeline
        const sorted = [...currentList].sort((a, b) => a.year - b.year);

        timelineItems.innerHTML = sorted.map((s, idx) => {
            const isSaved = window.Journey && window.Journey.isSaved ? window.Journey.isSaved('heritage-' + s.id) : false;
            return `
            <div class="hrt-timeline-item" data-id="${s.id}" style="animation-delay: ${idx * 0.04}s">
                <div class="hrt-timeline-node"></div>
                <div class="hrt-timeline-card">
                    <div class="hrt-card-img-wrap">
                        <img src="${s.image}" alt="${s.name}" loading="lazy">
                        <span class="hrt-card-badge cat-${s.category}">${s.category}</span>
                        <span class="hrt-card-year">${s.year}</span>
                        <button class="hrt-card-fav ${isSaved ? 'active' : ''}" data-fav="${s.id}" aria-label="Save ${s.name}">${isSaved ? '♥' : '♡'}</button>
                    </div>
                    <div class="hrt-card-body">
                        <div class="hrt-card-state">${s.state} • ${s.era}</div>
                        <h3 class="hrt-card-title">${s.name}</h3>
                        <p class="hrt-card-desc">${s.description.substring(0, 120)}…</p>
                    </div>
                </div>
            </div>
            `;
        }).join('');

        // Card click → open detail
        timelineItems.querySelectorAll('.hrt-timeline-card').forEach(card => {
            const item = card.closest('.hrt-timeline-item');
            card.addEventListener('click', () => openDetail(item.dataset.id));
        });

        // Fav toggle
        timelineItems.querySelectorAll('[data-fav]').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const siteId = btn.dataset.fav;
                const s = HERITAGE_SITES.find(x => x.id === siteId);
                if (window.Journey && window.Journey.toggle && s) {
                    const saved = window.Journey.toggle({
                        id: 'heritage-' + s.id,
                        explorerPage: 'heritage-timeline-explorer/index.html',
                        title: s.name,
                        thumbnail: s.image,
                        category: 'heritage'
                    });
                    btn.classList.toggle('active', saved);
                    btn.textContent = saved ? '♥' : '♡';
                } else {
                    btn.classList.toggle('active');
                    btn.textContent = btn.classList.contains('active') ? '♥' : '♡';
                }
            });
        });
    }

    // -----------------------------------------------------------------------
    // OPEN DETAIL MODAL
    // -----------------------------------------------------------------------
    function openDetail(siteId) {
        const s = HERITAGE_SITES.find(x => x.id === siteId);
        if (!s) return;

        let activeTab = 'about';

        const tabButtons = HRT_TABS.map(tab => `
            <button class="hrt-tab-btn ${tab.key === activeTab ? 'active' : ''}" data-tab="${tab.key}">
                <span>${tab.icon}</span> ${tab.label}
            </button>
        `).join('');

        const categoryIcon = s.category === 'cultural' ? '🏛' : s.category === 'natural' ? '🌿' : '🔄';

        detailPanel.innerHTML = `
            <div class="hrt-detail-hero">
                <img src="${s.image}" alt="${s.name}">
                <div class="hrt-detail-hero-overlay"></div>
                <button class="hrt-detail-close" id="hrt-detail-close" aria-label="Close">✕</button>
            </div>
            <div class="hrt-detail-body">
                <h2 class="hrt-detail-name">${s.name}</h2>
                <p class="hrt-detail-origin">${categoryIcon} ${s.category.charAt(0).toUpperCase() + s.category.slice(1)} Site • ${s.state} • Inscribed ${s.year}</p>
                <p class="hrt-detail-desc">${s.description}</p>
                <div class="hrt-detail-stats">
                    <div class="hrt-detail-stat">
                        <span class="stat-icon"><i class="fa-solid fa-calendar"></i></span>
                        <div>
                            <div class="hrt-detail-stat-label">Era</div>
                            <div class="hrt-detail-stat-value">${s.era}</div>
                        </div>
                    </div>
                    <div class="hrt-detail-stat">
                        <span class="stat-icon"><i class="fa-solid fa-location-dot"></i></span>
                        <div>
                            <div class="hrt-detail-stat-label">State</div>
                            <div class="hrt-detail-stat-value">${s.state}</div>
                        </div>
                    </div>
                    <div class="hrt-detail-stat">
                        <span class="stat-icon"><i class="fa-solid fa-globe-asia"></i></span>
                        <div>
                            <div class="hrt-detail-stat-label">Inscribed</div>
                            <div class="hrt-detail-stat-value">${s.year}</div>
                        </div>
                    </div>
                    <div class="hrt-detail-stat">
                        <span class="stat-icon"><i class="fa-solid fa-tag"></i></span>
                        <div>
                            <div class="hrt-detail-stat-label">Category</div>
                            <div class="hrt-detail-stat-value">${s.category.charAt(0).toUpperCase() + s.category.slice(1)}</div>
                        </div>
                    </div>
                </div>
                <div class="hrt-detail-tabs">${tabButtons}</div>

                <div class="hrt-tab-panel active" data-panel="about">
                    <p class="hrt-tab-text">${s.description}</p>
                </div>

                <div class="hrt-tab-panel" data-panel="highlights">
                    <ul class="hrt-tab-list">
                        ${s.highlights.map(h => `<li><span class="check-icon"><i class="fa-regular fa-circle-check" style="color: var(--primary-gold);"></i></span>${h}</li>`).join('')}
                    </ul>
                </div>

                <div class="hrt-tab-panel" data-panel="significance">
                    <p class="hrt-tab-text">${s.significance}</p>
                </div>
            </div>
        `;

        // Tab switching
        detailPanel.querySelectorAll('.hrt-tab-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                activeTab = btn.dataset.tab;
                detailPanel.querySelectorAll('.hrt-tab-btn').forEach(b => b.classList.toggle('active', b.dataset.tab === activeTab));
                detailPanel.querySelectorAll('.hrt-tab-panel').forEach(p => p.classList.toggle('active', p.dataset.panel === activeTab));
            });
        });

        document.getElementById('hrt-detail-close')?.addEventListener('click', closeDetail);

        modalBackdrop.classList.add('open');
        detailPanel.classList.add('open');
        document.body.style.overflow = 'hidden';
        detailPanelFocusTrap = window.setupFocusTrap(detailPanel);
    }

    // -----------------------------------------------------------------------
    // CLOSE DETAIL MODAL
    // -----------------------------------------------------------------------
    function closeDetail() {
        modalBackdrop.classList.remove('open');
        detailPanel.classList.remove('open');
        document.body.style.overflow = '';
        if (detailPanelFocusTrap) {
            detailPanelFocusTrap.deactivate();
            detailPanelFocusTrap = null;
        }
    }

    modalBackdrop?.addEventListener('click', closeDetail);
    const hrtEscapeHandler = (e) => {
        if (e.key === 'Escape') closeDetail();
    };
    document.addEventListener('keydown', hrtEscapeHandler);
    if (typeof window.iiRegisterKeydownHandler === 'function') {
        window.iiRegisterKeydownHandler(hrtEscapeHandler);
    }

    // -----------------------------------------------------------------------
    // FILTERING
    // -----------------------------------------------------------------------
    function applyFilters() {
        const query = (searchInput?.value || '').trim().toLowerCase();
        const state = stateSelect?.value || 'all';

        let list = HERITAGE_SITES.filter(s => {
            const matchesCategory = activeCategory === 'all' || s.category === activeCategory;
            const matchesState = state === 'all' || s.state === state;
            const matchesQuery = !query ||
                s.name.toLowerCase().includes(query) ||
                s.state.toLowerCase().includes(query) ||
                s.description.toLowerCase().includes(query) ||
                s.era.toLowerCase().includes(query) ||
                s.category.toLowerCase().includes(query);
            return matchesCategory && matchesState && matchesQuery;
        });

        currentList = list;
        renderTimeline();
    }

    // Category tab switching
    if (categoryTabs) {
        categoryTabs.querySelectorAll('.hrt-filter-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                activeCategory = btn.dataset.category;
                categoryTabs.querySelectorAll('.hrt-filter-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                applyFilters();
            });
        });
    }

    // -----------------------------------------------------------------------
    // EVENT LISTENERS
    // -----------------------------------------------------------------------
    searchInput?.addEventListener('input', applyFilters);
    stateSelect?.addEventListener('change', applyFilters);

    resetBtn?.addEventListener('click', () => {
        if (searchInput) searchInput.value = '';
        activeCategory = 'all';
        if (stateSelect) stateSelect.value = 'all';
        if (categoryTabs) {
            categoryTabs.querySelectorAll('.hrt-filter-btn').forEach(b => b.classList.remove('active'));
            categoryTabs.querySelector('[data-category="all"]')?.classList.add('active');
        }
        applyFilters();
    });

    // -----------------------------------------------------------------------
    // INITIAL RENDER
    // -----------------------------------------------------------------------
    populateStates();
    renderTimeline();

    if (window.Journey && window.Journey.registerSearchItems) {
        window.Journey.registerSearchItems('heritage-timeline-explorer/index.html', HERITAGE_SITES.map(s => ({
            id: 'heritage-' + s.id,
            title: s.name,
            description: s.description.substring(0, 100),
            link: 'frontend/heritage-timeline-explorer/index.html'
        })));
    }
}

// ---------------------------------------------------------------------------
// 4. ROUTE DISPATCHER
// ---------------------------------------------------------------------------

document.addEventListener('app:route-changed', () => {
    initSiteChrome();
    const page = document.body.dataset.page;
    if (page === 'heritage') {
        initHeritagePage();
    }
});

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        if (document.body.dataset.page === 'heritage') {
            initHeritagePage();
        }
    });
} else {
    if (document.body.dataset.page === 'heritage') {
        initHeritagePage();
    }
}
