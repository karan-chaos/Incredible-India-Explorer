/* ==========================================================================
   TRADITIONAL GAMES EXPLORER — MAIN APPLICATION LOGIC
   Vanilla JavaScript. No external dependencies.
   Showcases India's rich heritage of traditional games.
   ========================================================================== */

// ---------------------------------------------------------------------------
// 1. GAMES DATA — 15 iconic Indian traditional games
// ---------------------------------------------------------------------------

const GAMES_DATA = [
    // ---- BOARD GAMES ----
    {
        id: 'chaturanga',
        name: 'Chaturanga',
        hindi: 'चतुरंग',
        emoji: '♟️',
        type: 'board',
        typeLabel: 'Board Game',
        region: 'Gupta Empire (North India)',
        age: '~6th Century CE',
        ageNum: 600,
        description: 'The ancestor of Chess, Chaturanga was a strategic board game played on an 8×8 grid. Its four divisions — infantry, cavalry, elephants, and chariots — evolved into the modern pawn, knight, bishop, and rook.',
        origin: 'Gupta Empire, North India',
        players: '2',
        duration: '30–90 minutes',
        equipment: 'Ashtāpada board, 64 pieces',
        rules: 'Played on an 8×8 grid. Each player commands four types of pieces: padāti (infantry/pawn), ashva (cavalry/knight), gaja (elephant/bishop), and ratha (chariot/rook), plus a king and counsellor.',
        history: 'Chaturanga emerged in the Gupta Empire around the 6th century CE. The name means "four divisions" of the military. It spread to Persia as Shatranj, then to the Arab world, and finally to Europe where it became modern Chess.',
        globalImpact: ['Evolved into Chess — the world\'s most popular strategy game', 'Influenced Shatranj in Persia and Xiangqi in China', 'The word "Checkmate" comes from Persian "Shāh Māt" (the king is dead)'],
        highlights: ['Invented the concept of strategic board gaming', 'Each piece represented a military division of ancient India', 'Spread along the Silk Route to become a global game', 'Featured in the epic Mahabharata in proto-form'],
        tags: ['Chess Ancestor', 'Gupta Empire', 'Strategy', 'Global Impact']
    },
    {
        id: 'pallankuzhi',
        name: 'Pallankuzhi',
        hindi: 'पल्लंकुझी',
        emoji: '🕳️',
        type: 'board',
        typeLabel: 'Board Game',
        region: 'Tamil Nadu (South India)',
        age: '~500 BCE',
        ageNum: -500,
        description: 'An ancient seed-and-pit counting game played on a wooden board with two rows of pits. It is the South Indian ancestor of Mancala and is still played across Tamil Nadu, Kerala, and Sri Lanka.',
        origin: 'Tamil Nadu, South India',
        players: '2',
        duration: '15–30 minutes',
        equipment: 'Wooden board with 2×7 pits, cowrie shells or seeds',
        rules: 'Players take turns picking up all seeds from one pit and sowing them counter-clockwise into subsequent pits. Capturing occurs when the last seed lands in an opponent\'s pit with a specific count.',
        history: 'Pallankuzhi dates back over 2,500 years and is referenced in Sangam literature. The game spread from South India to Africa where it became known as Mancala, Oware, and Bao. The Tamil name means "pit game."',
        globalImpact: ['Parent of the entire Mancala family of games worldwide', 'Oware (Ghana), Bao (Tanzania), Congkak (Malaysia) all trace here', 'UNESCO recognised it as Intangible Cultural Heritage of Humanity'],
        highlights: ['Oldest known pit-and-seed counting game', 'Played on a distinctive board carved from jackwood', 'Still widely played by children and elders in Tamil Nadu', 'Featured in Sangam-era Tamil literature'],
        tags: ['Mancala Ancestor', 'Tamil Nadu', 'Pit Game', '2500+ Years']
    },
    {
        id: 'pachisi',
        name: 'Pachisi',
        hindi: 'पचीसी',
        emoji: '🎲',
        type: 'dice',
        typeLabel: 'Dice Game',
        region: 'Uttar Pradesh / Mughal Courts',
        age: '~4th Century CE',
        ageNum: 400,
        description: 'The "Royal Game of India" — a cross-and-circle race game played on a giant outdoor board. Mughal emperors played on marble courts at Fatehpur Sikri with servants as living game pieces.',
        origin: 'Uttar Pradesh, North India',
        players: '2–4',
        duration: '30–60 minutes',
        equipment: 'Cross-shaped board, cowrie shells (used as dice), 4 tokens per player',
        rules: 'Players roll cowrie shells to determine movement. Tokens start in the home column, travel around the board, and must return to the centre. Landing on an opponent sends their piece back to start.',
        history: 'Pachisi dates to the Gupta period. The word comes from "pachis" (twenty-five), the highest cowrie-shell roll. Emperor Akbar played it on a grand scale at Fatehpur Sikri, using slave girls as pawns.',
        globalImpact: ['Directly evolved into Ludo (patented in England, 1896)', 'Also evolved into Parcheesi (American version)', 'Influenced Chaupar, another cross-and-circle game'],
        highlights: ['Mughal emperor Akbar played with human pieces at Fatehpur Sikri', 'Cowrie shells serve as the randomiser (no manufactured dice needed)', 'The giant outdoor court at Fatehpur Sikri still exists today', 'Directly became Ludo — now one of the world\'s most played board games'],
        tags: ['Royal Game', 'Mughal', 'Ludo Ancestor', 'Cowrie Dice']
    },
    {
        id: 'carrom',
        name: 'Carrom',
        hindi: 'कैरम',
        emoji: '🔵',
        type: 'dexterity',
        typeLabel: 'Dexterity Game',
        region: 'South India / Travancore',
        age: '~18th Century CE',
        ageNum: 1700,
        description: 'A tabletop dexterity game where players flick wooden strikers to pocket coloured coins into corner pockets. Combines precision, geometry, and competitive spirit.',
        origin: 'Travancore (Kerala), South India',
        players: '2–4',
        duration: '15–45 minutes',
        equipment: 'Carrom board, 9 black, 9 white, 1 red queen, wooden striker',
        rules: 'Players take turns flicking the striker to pocket their assigned colour (black or white). The queen (red) must be "covered" by pocketing one of your own pieces immediately after. First to pocket all pieces wins.',
        history: 'Carrom likely originated in Travancore (now southern Kerala) in the 18th century. The exact origin is debated, but the game spread rapidly across the Indian subcontinent during the British colonial era.',
        globalImpact: ['Popular across South Asia, Middle East, and parts of East Africa', 'International Carrom Federation was founded in 1956', 'World Carrom Championship held since 1991'],
        highlights: ['The "follow" and "double" shots are advanced techniques', 'Indian players dominate the World Carrom Championship', 'The queen (red piece) adds a unique strategic element', 'Common sight in Indian tea shops, clubs, and households'],
        tags: ['Dexterity', 'Flick Game', 'Travancore', 'World Champion']
    },
    {
        id: 'paramapadam',
        name: 'Paramapadam',
        hindi: 'परमापदम',
        emoji: '🎯',
        type: 'board',
        typeLabel: 'Board Game',
        region: 'South India',
        age: '~300 BCE',
        ageNum: -300,
        description: 'An ancient South Indian strategy board game played on a grid with cowrie-shell dice. Considered a sacred game where the board represents the cosmic journey of the soul.',
        origin: 'South India (ancient Tamilakam)',
        players: '2',
        duration: '30–60 minutes',
        equipment: '10×10 grid board, cowrie shells, counters',
        rules: 'Players move pieces across a grid-based path based on cowrie-shell rolls. Certain squares represent virtues (promotions) and vices (demotions). The goal is to reach the final square — Moksha (liberation).',
        history: 'Paramapadam is referenced in Sangam literature and temple inscriptions. The game is symbolic of the Hindu concept of karma — good deeds (virtue squares) advance you, while bad deeds (vice squares) push you back.',
        globalImpact: ['Spiritual predecessor to the Western game Snakes and Ladders', 'Moksha Patam (its Sanskrit name) became Snakes and Ladders in colonial India', 'The moral/punishment grid concept was adopted worldwide'],
        highlights: ['Board squares represent virtues and vices', 'Reaching the final square symbolises Moksha (spiritual liberation)', 'Each square is labelled with a Sanskrit virtue or vice name', 'Directly inspired Snakes and Ladders, now a global children\'s game'],
        tags: ['Sacred Game', 'Snakes & Ladders Ancestor', 'Spiritual', 'Ancient']
    },

    // ---- OUTDOOR GAMES ----
    {
        id: 'kabaddi',
        name: 'Kabaddi',
        hindi: 'कबड्डी',
        emoji: '🤼',
        type: 'outdoor',
        typeLabel: 'Outdoor Sport',
        region: 'Pan-India / Tamil Nadu',
        age: '~4000 Years',
        ageNum: -2000,
        description: 'A high-energy contact sport where a "raider" enters the opponent\'s half, tags defenders, and returns while holding their breath — all in a single chant of "kabaddi-kabaddi."',
        origin: 'Tamil Nadu / Maharashtra',
        players: '7 vs 7',
        duration: '40 minutes (2 halves)',
        equipment: 'Marked court, no equipment needed',
        rules: 'The raider crosses into the opponent\'s half, tags defenders, and returns without being tackled — all while continuously chanting "kabaddi." A raider earns points for each defender tagged. If tackled, the defender earns a point.',
        history: 'Kabaddi is mentioned in the Mahabharata and ancient Tamil Sangam literature. The modern rules were standardised in 1930. The Pro Kabaddi League (2014) made it one of India\'s most-watched sports, second only to cricket.',
        globalImpact: ['Pro Kabaddi League is the 2nd most-watched sports league in India', 'Played professionally in Iran, South Korea, Japan, and Kenya', 'Part of the Asian Games since 1990'],
        highlights: ['Mentioned in the Mahabharata — one of the oldest known sports', 'Pro Kabaddi League (2014) rivals IPL in viewership', 'Requires no equipment — played on bare ground', 'The "cant" (continuous chant) is a unique rule in world sports'],
        tags: ['Contact Sport', 'Ancient', 'Pro League', 'Mahabharata']
    },
    {
        id: 'gilli-danda',
        name: 'Gilli-danda',
        hindi: 'गिल्ली-डंडा',
        emoji: '🏏',
        type: 'outdoor',
        typeLabel: 'Outdoor Sport',
        region: 'Pan-India / Rural',
        age: '~2000+ Years',
        ageNum: -500,
        description: 'A bat-and-ball game played with two wooden sticks — a large "danda" (bat) and a small "gilli" (tapered stick). The player flips the gilli into the air and strikes it as far as possible.',
        origin: 'Pan-Indian (rural villages)',
        players: '2+ teams',
        duration: 'Variable',
        equipment: 'Danda (large stick), Gilli (tapered small stick)',
        rules: 'One end of the gilli is placed on the ground and flicked up with the danda. The player then strikes the airborne gilli as far as possible. Fielding teams try to catch or retrieve it. Points are calculated by distance.',
        history: 'Gilli-danda is mentioned in ancient Indian texts and has been played across the subcontinent for over 2,000 years. Many historians believe it evolved into cricket, baseball, and hockey during the British colonial period.',
        globalImpact: ['Credited as the ancestor of cricket and baseball', 'Similar bat-and-ball mechanics found in Kōbō in Japan and Oina in Romania', 'Demonstrates the universal appeal of bat-and-ball games'],
        highlights: ['Played across every village in India during festivals', 'Credited by many historians as the precursor to cricket', 'Requires zero cost — just two sticks and open ground', 'Variations exist under different names in every Indian state'],
        tags: ['Cricket Ancestor', 'Village Game', 'Bat & Ball', 'Universal']
    },
    {
        id: ' kho-kho',
        name: 'Kho-Kho',
        hindi: 'खो-खो',
        emoji: '🏃',
        type: 'outdoor',
        typeLabel: 'Outdoor Sport',
        region: 'Maharashtra / Pan-India',
        age: '~Ancient India',
        ageNum: -1000,
        description: 'A high-speed tag-and-chase team sport where 9 "chasers" sit in a line while 3 runners try to evade them. Chasers chase in a seated-kneeling position and can switch via a "kho" tag.',
        origin: 'Maharashtra, West India',
        players: '12 vs 12',
        duration: '30 minutes (2 innings)',
        equipment: 'Marked rectangular court with poles',
        rules: 'Chasers sit in alternating directions along a central line. The "active" chaser runs to tag a runner. If the runner is tagged, the chaser shouts "kho" to switch to the next seated chaser, who leaps up and continues the chase.',
        history: 'Kho-Kho evolved from the ancient "Rathera" (chariot race) game. Modern rules were codified in 1935 by the Deccan Gymkhana in Pune. It is now played at national and international levels.',
        globalImpact: ['Recognised by the International Kho Kho Federation', 'Played in countries including Bangladesh, Nepal, Sri Lanka, and England', 'The first Kho-Kho World Cup was held in 2025'],
        highlights: ['Second most popular traditional team sport in India after kabaddi', 'The "kho" tag-switching mechanic is unique in world sports', 'Featured in every school sports day across India', 'National championship has been held since 1960'],
        tags: ['Team Sport', 'Tag Game', 'Maharashtra', 'School Sport']
    },
    {
        id: 'langdi',
        name: 'Langdi',
        hindi: 'लंगड़ी',
        emoji: '🦵',
        type: 'outdoor',
        typeLabel: 'Outdoor Sport',
        region: 'Maharashtra / Gujarat',
        age: '~Medieval India',
        ageNum: 1000,
        description: 'A traditional tag game where the "den" player must hop on one leg while trying to tag the other players. Tagged players must also hop until they are freed by a teammate.',
        origin: 'Maharashtra / Gujarat',
        players: '8+ (two teams)',
        duration: '20–30 minutes',
        equipment: 'Open ground, chalk boundary',
        rules: 'One team enters the court; the "den" (one player from the other team) chases on one leg. Tagged players must also hop on one leg. A teammate can free tagged players by passing under their raised arm.',
        history: 'Langdi is an ancient folk game played during festivals and village gatherings in Maharashtra and Gujarat. It tests balance, agility, and teamwork. It is now being revived as a competitive sport.',
        globalImpact: ['Being developed into a competitive sport by the Langdi Federation of India', 'Similar to "One-legged tag" played in various cultures', 'Demonstrates the playful agility traditions of western India'],
        highlights: ['Tests balance, speed, and agility simultaneously', 'Often played during Makar Sankranti festivals in Maharashtra', 'The "freeing" mechanic adds a team strategy element', 'Recognised as a traditional sport by Maharashtra government'],
        tags: ['One-Leg Tag', 'Agility', 'Festival Game', 'Maharashtra']
    },

    // ---- MARTIAL ARTS ----
    {
        id: 'mallakhamb',
        name: 'Mallakhamb',
        hindi: 'मल्लखम्ब',
        emoji: '🪵',
        type: 'martial',
        typeLabel: 'Martial Art',
        region: 'Maharashtra',
        age: '~12th Century CE',
        ageNum: 1200,
        description: 'An ancient Indian sport combining gymnastics and yoga on a vertical wooden pole or hanging rope. Performers execute acrobatic feats while gripping the pole with their limbs.',
        origin: 'Maharashtra, West India',
        players: 'Individual / Competition',
        duration: 'Variable',
        equipment: 'Wooden pole (4m), or hanging rope, gymnasium',
        rules: 'Competitors perform routines on a vertical wooden pole, executing grips, swings, and poses. Scoring is based on difficulty, execution, and holding specific positions. Variants include pole, rope, and hanging mallakhamb.',
        history: 'Mallakhamb is mentioned in the 12th-century Skandapurana. The word combines "malla" (wrestler) and "khamb" (pole). It was used by wrestlers for conditioning and is now a competitive sport with national championships.',
        globalImpact: ['Recognised by the Indian Olympic Association', 'Performed at Commonwealth Games as a demonstration sport', 'Similar to Chinese pole acrobatics but with distinctly Indian poses'],
        highlights: ['Combines yoga poses with extreme acrobatics', 'Featured in the 36th National Games as a competitive sport', 'Every major akhara (wrestling school) in Maharashtra has a pole', 'The speed and agility of performers is compared to gravity-defying'],
        tags: ['Pole Gymnastics', 'Wrestler Training', 'Acrobatic', 'Maharashtra']
    },
    {
        id: 'silambam',
        name: 'Silambam',
        hindi: 'सिलम्बम',
        emoji: '⚔️',
        type: 'martial',
        typeLabel: 'Martial Art',
        region: 'Tamil Nadu',
        age: '~3000+ Years',
        ageNum: -1000,
        description: 'A traditional South Indian martial art of bamboo staff fencing. Practitioners wield long bamboo poles with extraordinary speed and precision, creating hypnotic spinning patterns.',
        origin: 'Tamil Nadu, South India',
        players: 'Individual / Pairs',
        duration: 'Variable',
        equipment: 'Bamboo staff (silambam), occasionally shield and dagger',
        rules: 'Practitioners use long bamboo staves to attack and defend. The art emphasises spinning, footwork, and fluid transitions between offensive and defensive techniques. Combat forms include single staff, double staff, and staff vs. sword.',
        history: 'Silambam is referenced in Sangam literature dating back over 3,000 years. It was used as a weapon of war by the Chera, Chola, and Pandya kingdoms. Today it is practised as a martial art, sport, and performing art.',
        globalImpact: ['UNESCO listed as Intangible Cultural Heritage (2024)', 'Influenced Southeast Asian martial arts like Arnis', 'Featured in the martial arts of the Malay world (Toya)'],
        highlights: ['One of the oldest continuously practiced martial arts in the world', 'Featured in Sangam-era Tamil literature and temple carvings', 'The bamboo staff can be wielded at speeds exceeding 150 strikes per minute', 'UNESCO recognition (2024) brought global attention'],
        tags: ['Staff Fighting', 'Tamil Nadu', 'UNESCO Heritage', '3000+ Years']
    },

    // ---- DEXTERITY GAMES ----
    {
        id: 'pitthoo',
        name: 'Pitthu (Seven Stones)',
        hindi: 'पिठ्ठू',
        emoji: '🪨',
        type: 'dexterity',
        typeLabel: 'Dexterity Game',
        region: 'North India',
        age: '~Ancient India',
        ageNum: -500,
        description: 'A street game where players stack seven flat stones and take turns trying to knock them down with a ball, then quickly restack them before the opposing team catches them.',
        origin: 'North India',
        players: '6–12 (two teams)',
        duration: '20–40 minutes',
        equipment: '7 flat stones, a soft cloth ball',
        rules: 'One team stacks 7 stones. The other team throws a ball to knock them down. A designated "hitter" then tries to restack while teammates protect them. If the ball hits the hitter while restacking, they\'re out.',
        history: 'Pitthu (also called Lingoochur, Sat-pathar, or Seven Stones) is an ancient folk game played across North India. It tests throwing accuracy, speed, and teamwork. The seven stones may have ritual significance.',
        globalImpact: ['Variations found across South Asia and Middle East', 'The knock-down-and-restack mechanic appears in many cultures', 'Developed into the organized sport "Lagori" with formal rules'],
        highlights: ['Played in every North Indian gully (street) during summer', 'The seven stones may represent seven chakras or seven sages', 'Now organised as the sport "Lagori" at national level', 'Requires only stones and a ball — zero-cost entertainment'],
        tags: ['Street Game', 'Seven Stones', 'Lagori', 'Zero Cost']
    },
    {
        id: 'kancha',
        name: 'Kancha (Marbles)',
        hindi: 'कंचा',
        emoji: '🟣',
        type: 'dexterity',
        typeLabel: 'Dexterity Game',
        region: 'Pan-India',
        age: '~3000+ Years',
        ageNum: -1000,
        description: 'India\'s version of marbles — small glass or clay balls flicked with the thumb to hit target marbles. A beloved childhood game played in every Indian gully.',
        origin: 'Pan-Indian',
        players: '2–6',
        duration: 'Variable',
        equipment: 'Glass or clay marbles (kancha), chalk-drawn circle',
        rules: 'Players draw a circle and each puts in an agreed number of marbles. Taking turns, players flick their "shooter" marble to knock marbles out of the circle. Whatever you knock out, you keep.',
        history: 'Marbles (kancha) have been found in the Indus Valley Civilization sites dating back to 3000 BCE. The Indian version uses glass marbles with colourful swirls and is deeply embedded in childhood culture.',
        globalImpact: ['Marbles are played worldwide — the Indian kancha is among the oldest versions', 'The Indus Valley marbles are among the earliest known toys', 'World Marbles Championship exists (Tinsley Green, UK)'],
        highlights: ['Indus Valley Civilization marbles date to 3000 BCE', 'Every Indian child has played kancha in the gully', 'The specific flicking technique is called "kanncha maarna"', 'Different regions have different names: kancha, goli, goti, kanche'],
        tags: ['Marbles', 'Indus Valley', 'Childhood Game', 'Universal']
    },
    {
        id: 'lattoo',
        name: 'Lattoo (Spinning Top)',
        hindi: 'लट्टू',
        emoji: '🔄',
        type: 'dexterity',
        typeLabel: 'Dexterity Game',
        region: 'Pan-India',
        age: '~3000+ Years',
        ageNum: -1000,
        description: 'A wooden or metal spinning top whipped with a string. Competitive lattoo involves tops battling to knock each other out of a circle. A beloved childhood toy across India.',
        origin: 'Pan-Indian',
        players: '2+',
        duration: 'Variable',
        equipment: 'Wooden/metal spinning top, cotton string (sooti)',
        rules: 'Players wind the string around the top and throw it to make it spin. In competitive play, two tops spin in a circle and the last one still spinning wins. Some competitions involve tops that crack opponents\' tops.',
        history: 'Spinning tops have been found at Indus Valley sites dating back 3,000+ years. The Indian lattoo is typically made of wood with an iron nail at the tip. Different cities are famous for different lattoo styles.',
        globalImpact: ['Spinning tops are among the oldest known toys in human history', 'The Indian lattoo influenced spinning top games across South Asia', 'Beyblade and similar modern games trace concepts back to traditional tops'],
        highlights: ['Indus Valley tops date back 3,000+ years', 'Mumbai is famous for its "Chikna" (smooth brass-tipped) tops', 'Competitive lattoo involves tops that "attack" and crack opponents', 'Different regional names: lattoo, bugur, buggi, bambaram'],
        tags: ['Spinning Top', 'Ancient Toy', 'Indus Valley', 'Childhood']
    }
];

// ---------------------------------------------------------------------------
// 2. TAB DEFINITIONS
// ---------------------------------------------------------------------------

const GAM_TABS = [
    { key: 'rules', label: 'How to Play', icon: '<i class="fa-solid fa-book-open" style="color: var(--primary-gold);"></i>' },
    { key: 'history', label: 'History', icon: '<i class="fa-solid fa-landmark" style="color: var(--primary-gold);"></i>' },
    { key: 'impact', label: 'Global Impact', icon: '<i class="fa-solid fa-globe" style="color: var(--primary-gold);"></i>' },
    { key: 'highlights', label: 'Highlights', icon: '<i class="fa-solid fa-star" style="color: var(--primary-gold);"></i>' }
];

// ---------------------------------------------------------------------------
// 3. INIT FUNCTION
// ---------------------------------------------------------------------------

function initGamesPage() {
    const cardsGrid = document.getElementById('gam-cards-grid');
    const noResults = document.getElementById('gam-no-results');
    const detailPanel = document.getElementById('gam-detail-panel');
    const modalBackdrop = document.getElementById('gam-modal-backdrop');
    const searchInput = document.getElementById('gam-search-input');
    const typeTabs = document.getElementById('gam-type-tabs');
    const regionSelect = document.getElementById('gam-region-select');
    const sortSelect = document.getElementById('gam-sort-select');
    const resetBtn = document.getElementById('gam-reset-btn');
    const countEl = document.getElementById('gam-count');

    if (!cardsGrid || !detailPanel) return;

    let detailPanelFocusTrap = null;
    let currentList = [...GAMES_DATA];
    let activeType = 'all';

    // -----------------------------------------------------------------------
    // POPULATE REGION DROPDOWN
    // -----------------------------------------------------------------------
    function populateRegions() {
        const regions = new Set();
        GAMES_DATA.forEach(g => regions.add(g.region));
        const sorted = Array.from(regions).sort();
        if (regionSelect) {
            regionSelect.innerHTML = '<option value="all">All Regions</option>' +
                sorted.map(r => `<option value="${r}">${r}</option>`).join('');
        }
    }

    // -----------------------------------------------------------------------
    // RENDER CARDS
    // -----------------------------------------------------------------------
    function renderCards() {
        if (!currentList.length) {
            cardsGrid.innerHTML = '';
            if (noResults) noResults.style.display = 'block';
            if (countEl) countEl.textContent = '0';
            return;
        }

        if (noResults) noResults.style.display = 'none';
        if (countEl) countEl.textContent = currentList.length;

        cardsGrid.innerHTML = currentList.map((g, idx) => {
            const isSaved = window.Journey && window.Journey.isSaved ? window.Journey.isSaved('game-' + g.id) : false;
            return `
            <div class="gam-card" data-id="${g.id}" style="animation-delay: ${idx * 0.04}s">
                <div class="gam-card-top">
                    <span class="gam-card-emoji">${g.emoji}</span>
                    <span class="gam-card-type-badge type-${g.type}">${g.typeLabel}</span>
                    <span class="gam-card-age">${g.age}</span>
                    <button class="gam-card-fav ${isSaved ? 'active' : ''}" data-fav="${g.id}" aria-label="Save ${g.name}">${isSaved ? '♥' : '♡'}</button>
                </div>
                <div class="gam-card-body">
                    <div class="gam-card-region">${g.region.split('(')[0].trim()}</div>
                    <h3 class="gam-card-title">${g.name}</h3>
                    <p class="gam-card-desc">${g.description.substring(0, 120)}…</p>
                    <div class="gam-card-meta">
                        <span class="gam-card-meta-item"><i class="fa-solid fa-users"></i> ${g.players}</span>
                        <span class="gam-card-meta-item"><i class="fa-solid fa-clock"></i> ${g.duration}</span>
                        <span class="gam-card-meta-item"><i class="fa-solid fa-tag"></i> ${g.typeLabel}</span>
                    </div>
                    <div class="gam-card-tags">
                        ${g.tags.slice(0, 3).map(t => `<span class="gam-tag">${t}</span>`).join('')}
                    </div>
                </div>
            </div>
            `;
        }).join('');

        // Card click → open detail
        cardsGrid.querySelectorAll('.gam-card').forEach(card => {
            card.addEventListener('click', () => openDetail(card.dataset.id));
        });

        // Fav toggle
        cardsGrid.querySelectorAll('[data-fav]').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const gameId = btn.dataset.fav;
                const g = GAMES_DATA.find(x => x.id === gameId);
                if (window.Journey && window.Journey.toggle && g) {
                    const saved = window.Journey.toggle({
                        id: 'game-' + g.id,
                        explorerPage: 'traditional-games-explorer/index.html',
                        title: g.name,
                        thumbnail: '',
                        category: 'traditional-games'
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
    function openDetail(gameId) {
        const g = GAMES_DATA.find(x => x.id === gameId);
        if (!g) return;

        let activeTab = 'rules';

        const tabButtons = GAM_TABS.map(tab => `
            <button class="gam-tab-btn ${tab.key === activeTab ? 'active' : ''}" data-tab="${tab.key}">
                <span>${tab.icon}</span> ${tab.label}
            </button>
        `).join('');

        detailPanel.innerHTML = `
            <div class="gam-detail-header">
                <span class="gam-detail-emoji">${g.emoji}</span>
                <button class="gam-detail-close" id="gam-detail-close" aria-label="Close">✕</button>
            </div>
            <div class="gam-detail-body">
                <h2 class="gam-detail-name">${g.name}</h2>
                <p class="gam-detail-origin">${g.hindi} • ${g.origin} • ${g.age}</p>
                <p class="gam-detail-desc">${g.description}</p>
                <div class="gam-detail-stats">
                    <div class="gam-detail-stat">
                        <span class="stat-icon"><i class="fa-solid fa-users"></i></span>
                        <div>
                            <div class="gam-detail-stat-label">Players</div>
                            <div class="gam-detail-stat-value">${g.players}</div>
                        </div>
                    </div>
                    <div class="gam-detail-stat">
                        <span class="stat-icon"><i class="fa-solid fa-clock"></i></span>
                        <div>
                            <div class="gam-detail-stat-label">Duration</div>
                            <div class="gam-detail-stat-value">${g.duration}</div>
                        </div>
                    </div>
                    <div class="gam-detail-stat">
                        <span class="stat-icon"><i class="fa-solid fa-tag"></i></span>
                        <div>
                            <div class="gam-detail-stat-label">Type</div>
                            <div class="gam-detail-stat-value">${g.typeLabel}</div>
                        </div>
                    </div>
                    <div class="gam-detail-stat">
                        <span class="stat-icon"><i class="fa-solid fa-box"></i></span>
                        <div>
                            <div class="gam-detail-stat-label">Equipment</div>
                            <div class="gam-detail-stat-value">${g.equipment.split(',')[0]}</div>
                        </div>
                    </div>
                </div>
                <div class="gam-detail-tabs">${tabButtons}</div>

                <div class="gam-tab-panel active" data-panel="rules">
                    <p class="gam-tab-text">${g.rules}</p>
                </div>

                <div class="gam-tab-panel" data-panel="history">
                    <p class="gam-tab-text">${g.history}</p>
                </div>

                <div class="gam-tab-panel" data-panel="impact">
                    <p class="gam-tab-text"><strong>Global influence of ${g.name}:</strong></p>
                    <ul class="gam-tab-list">
                        ${g.globalImpact.map(i => `<li><span class="check-icon"><i class="fa-solid fa-globe" style="color: var(--primary-gold);"></i></span>${i}</li>`).join('')}
                    </ul>
                </div>

                <div class="gam-tab-panel" data-panel="highlights">
                    <ul class="gam-tab-list">
                        ${g.highlights.map(h => `<li><span class="check-icon"><i class="fa-regular fa-circle-check" style="color: var(--primary-gold);"></i></span>${h}</li>`).join('')}
                    </ul>
                </div>
            </div>
        `;

        // Tab switching
        detailPanel.querySelectorAll('.gam-tab-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                activeTab = btn.dataset.tab;
                detailPanel.querySelectorAll('.gam-tab-btn').forEach(b => b.classList.toggle('active', b.dataset.tab === activeTab));
                detailPanel.querySelectorAll('.gam-tab-panel').forEach(p => p.classList.toggle('active', p.dataset.panel === activeTab));
            });
        });

        document.getElementById('gam-detail-close')?.addEventListener('click', closeDetail);

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
    const gamEscapeHandler = (e) => {
        if (e.key === 'Escape') closeDetail();
    };
    document.addEventListener('keydown', gamEscapeHandler);
    if (typeof window.iiRegisterKeydownHandler === 'function') {
        window.iiRegisterKeydownHandler(gamEscapeHandler);
    }

    // -----------------------------------------------------------------------
    // FILTERING & SORTING
    // -----------------------------------------------------------------------
    function applyFilters() {
        const query = (searchInput?.value || '').trim().toLowerCase();
        const region = regionSelect?.value || 'all';

        let list = GAMES_DATA.filter(g => {
            const matchesType = activeType === 'all' || g.type === activeType;
            const matchesRegion = region === 'all' || g.region === region;
            const matchesQuery = !query ||
                g.name.toLowerCase().includes(query) ||
                g.hindi.includes(query) ||
                g.region.toLowerCase().includes(query) ||
                g.description.toLowerCase().includes(query) ||
                g.tags.some(t => t.toLowerCase().includes(query));
            return matchesType && matchesRegion && matchesQuery;
        });

        const sortMode = sortSelect?.value || 'popular';
        if (sortMode === 'az') {
            list.sort((a, b) => a.name.localeCompare(b.name));
        } else if (sortMode === 'age') {
            list.sort((a, b) => a.ageNum - b.ageNum);
        }

        currentList = list;
        renderCards();
    }

    // Type tab switching
    if (typeTabs) {
        typeTabs.querySelectorAll('.gam-filter-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                activeType = btn.dataset.type;
                typeTabs.querySelectorAll('.gam-filter-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                applyFilters();
            });
        });
    }

    // -----------------------------------------------------------------------
    // EVENT LISTENERS
    // -----------------------------------------------------------------------
    searchInput?.addEventListener('input', applyFilters);
    regionSelect?.addEventListener('change', applyFilters);
    sortSelect?.addEventListener('change', applyFilters);

    resetBtn?.addEventListener('click', () => {
        if (searchInput) searchInput.value = '';
        activeType = 'all';
        if (regionSelect) regionSelect.value = 'all';
        if (sortSelect) sortSelect.value = 'popular';
        if (typeTabs) {
            typeTabs.querySelectorAll('.gam-filter-btn').forEach(b => b.classList.remove('active'));
            typeTabs.querySelector('[data-type="all"]')?.classList.add('active');
        }
        applyFilters();
    });

    // -----------------------------------------------------------------------
    // INITIAL RENDER
    // -----------------------------------------------------------------------
    populateRegions();
    renderCards();

    if (window.Journey && window.Journey.registerSearchItems) {
        window.Journey.registerSearchItems('traditional-games-explorer/index.html', GAMES_DATA.map(g => ({
            id: 'game-' + g.id,
            title: g.name,
            description: g.description.substring(0, 100),
            link: 'frontend/traditional-games-explorer/index.html'
        })));
    }
}

// ---------------------------------------------------------------------------
// 4. ROUTE DISPATCHER
// ---------------------------------------------------------------------------

document.addEventListener('app:route-changed', () => {
    initSiteChrome();
    const page = document.body.dataset.page;
    if (page === 'games') {
        initGamesPage();
    }
});

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        if (document.body.dataset.page === 'games') {
            initGamesPage();
        }
    });
} else {
    if (document.body.dataset.page === 'games') {
        initGamesPage();
    }
}
