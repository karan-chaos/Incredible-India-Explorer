/* ==========================================================================
   CLASSICAL DANCES EXPLORER — MAIN APPLICATION LOGIC
   Vanilla JavaScript. No external dependencies.
   Plugs into the shared Journey system via window.Journey.
   ========================================================================== */

// ---------------------------------------------------------------------------
// 1. DANCE DATA — 8 Sangeet Natak Akademi recognised classical dances
// ---------------------------------------------------------------------------

const DANCES_DATA = [
    {
        id: 'bharatanatyam',
        name: 'Bharatanatyam',
        origin: 'Tamil Nadu, South India',
        region: 'south',
        era: '2000+',
        eraNum: 2000,
        style: 'nritta',
        styleLabel: 'Nritta & Nritya',
        description: 'One of the oldest and most widely practiced classical dance forms, Bharatanatyam originated in the temples of Tamil Nadu. It is characterised by fixed upper torso, bent legs, and expressive storytelling through mudras (hand gestures) and facial expressions (abhinaya).',
        image: '../assets/bharatanatyam.jpg',
        detailImage: '../assets/bharatanatyam.jpg',
        costume: 'Colourful silk costume with pleated fan, gold jewellery, ankle bells (ghungroo), and a distinctive head ornament (nethichutti).',
        originText: 'Bharatanatyam traces its roots to the ancient Natya Shastra by Bharata Muni (~200 BCE). It was historically performed by Devadasis (temple dancers) and was codified under the name "Sadir" before being renamed Bharatanatyam in the 20th century by Rukmini Devi Arundale.',
        keyFigures: ['Rukmini Devi Arundale', 'Balasaraswati', 'Bala Saraswati', 'Alarmel Valli', 'Yamini Krishnamurthy'],
        mudras: [
            { icon: '🙏', name: 'Anjali', meaning: 'Salutation / Prayer' },
            { icon: '🤚', name: 'Pataka', meaning: 'Flag / Cloud / River' },
            { icon: '✋', name: 'Tripataka', meaning: 'Three parts of flag / Tree' },
            { icon: '🖐️', name: 'Mayura', meaning: 'Peacock / Bird' },
            { icon: '✊', name: 'Shikhara', meaning: 'Peak / Bow / Lamp' },
            { icon: '👌', name: 'Hamsasya', meaning: 'Swan / Beauty / Diamond' }
        ],
        highlights: [
            'Recognised by Sangeet Natak Akademi as one of 8 classical dances',
            'Features 28 primary mudras (hand gestures)',
            'Performed in a fixed temple posture called Aramandi (half-sit)',
            'Each piece follows a sequence: Alarippu, Jatiswaram, Shabdam, Varnam, Padam, Tillana',
            'Rukmini Devi Arundale founded Kalakshetra in 1936 to revive it',
            'UNESCO inscribed it as Intangible Cultural Heritage in 2004'
        ],
        tags: ['Tamil Nadu', 'Temple Dance', '2000+ years', 'Mudras']
    },
    {
        id: 'kathak',
        name: 'Kathak',
        origin: 'North India (Uttar Pradesh, Rajasthan)',
        region: 'north',
        era: '2500',
        eraNum: 2500,
        style: 'natya',
        styleLabel: 'Nritya & Natya',
        description: 'Kathak, meaning "storyteller," evolved from the ancient tradition of travelling bards who narrated mythological tales through dance. It uniquely blends Hindu and Mughal influences, featuring graceful spins (chakkars) and intricate footwork.',
        image: '../assets/kathak.jpg',
        detailImage: '../assets/kathak.jpg',
        costume: 'Anarkali-style frock with churidar and dupatta, or a flowing lehenga for women; sherwani with churidar for men. Heavy ghungroos (ankle bells) are essential.',
        originText: 'Kathak derives from "Katha" (story) and the ancient Kathakars who narrated epics in temples. During the Mughal era it absorbed Persian and Central Asian influences, developing the Lucknow (expressive) and Jaipur (technical) gharanas (schools).',
        keyFigures: ['Birju Maharaj', 'Sitara Devi', 'Lachhu Maharaj', 'Acchan Maharaj', 'Shambhu Maharaj'],
        mudras: [
            { icon: '🙏', name: 'Anjali', meaning: 'Salutation' },
            { icon: '🤏', name: 'Kapitha', meaning: 'Lotus / Holding' },
            { icon: '🤚', name: 'Pataka', meaning: 'Flag / Forest' },
            { icon: '✊', name: 'Mushti', meaning: 'Fist / Strength' },
            { icon: '🖖', name: 'Ardhachandra', meaning: 'Half-moon / River bank' },
            { icon: '👌', name: 'Hamsasya', meaning: 'Swan / Beauty' }
        ],
        highlights: [
            'Three main gharanas: Lucknow, Jaipur, and Benaras',
            'Renowned for 100+ consecutive spins (chakkars)',
            'Dancers wear up to 200 ghungroos on each ankle',
            'Raslila tradition from Vrindavan is a key sub-style',
            'Birju Maharaj is considered the greatest living exponent',
            'Featured prominently in Bollywood films since the 1950s'
        ],
        tags: ['North India', 'Storytelling', '2500+ years', 'Spins']
    },
    {
        id: 'kathakali',
        name: 'Kathakali',
        origin: 'Kerala, South India',
        region: 'south',
        era: '400',
        eraNum: 400,
        style: 'natya',
        styleLabel: 'Natya (Dramatic)',
        description: 'Kathakali is a spectacular dance-drama known for its elaborate costumes, vivid face paint, and powerful facial expressions. Performers undergo rigorous training to master the art of conveying complex emotions entirely through eye and facial movements.',
        image: '../assets/kathakali.jpg',
        detailImage: '../assets/kathakali.jpg',
        costume: 'Elaborate green face paint (Pachcha) for heroes, red beard for villains, and layers of skirt, headgear, and painted nails. Costumes can weigh over 10 kg.',
        originText: 'Kathakali evolved from Ramanattam, a dance-drama created by the Raja of Kozhikode in the 17th century as a rival to Krishnanattam. It synthesised traditions from Kerala's martial art (Kalaripayattu), temple rituals, and folk theatre.',
        keyFigures: ['Kalamandalam Gopi', 'Kottakkal Sivaraman', 'Mammiyoor Krishna Kutty Nair', 'Raman Nair', 'Sadaram Anand'],
        mudras: [
            { icon: '✋', name: 'Pataka', meaning: 'Cloud / Forest / Blessing' },
            { icon: '🤏', name: 'Kapitha', meaning: 'Lakshmi / Kṛṣṇa' },
            { icon: '✌️', name: 'Katakamukha', meaning: 'Necklace / Flower' },
            { icon: '🤚', name: 'Mushti', meaning: 'Determination / Strength' },
            { icon: '🖐️', name: 'Soochi', meaning: 'Needle / Small / Knife' },
            { icon: '👌', name: 'Hamsapaksha', meaning: 'Swan wing / Moonlight' }
        ],
        highlights: [
            'Requires 8-10 years of rigorous training at gurukulams',
            'Actors spend 2+ hours applying layered face paint before each show',
            'Traditionally performed from dusk till dawn (all-night performances)',
            'Only male performers historically, though women now perform too',
            'Eye movements alone can convey 9 different emotions (Navarasas)',
            'Kalaripayattu martial arts training is prerequisite for many artists'
        ],
        tags: ['Kerala', 'Dance-Drama', '400+ years', 'Face Paint']
    },
    {
        id: 'odissi',
        name: 'Odissi',
        origin: 'Odisha, East India',
        region: 'east',
        era: '2000',
        eraNum: 2000,
        style: 'nritya',
        styleLabel: 'Nritya (Expressive)',
        description: 'Odissi is one of the oldest surviving dance forms, originating from the temples of Odisha. Known for its sculptural quality and graceful torso movements, it brings the temple sculptures of Konark and Jagannath to life.',
        image: '../assets/odissi.jpg',
        detailImage: '../assets/odissi.jpg',
        costume: 'Silk saree draped in a distinctive Odia style with silver jewellery, a wooden headpiece (tahiya), and ankle bells. Soft, flowing movements define the style.',
        originText: 'Odissi references appear in the Mahabharata and it was codified in the Natya Shastra. It was performed by Maharis (temple dancers) in Jagannath temples. It was revived in the 1950s by scholars and dancers like Kelucharan Mohapatra after near-extinction.',
        keyFigures: ['Kelucharan Mohapatra', 'Sanjukta Panigrahi', 'Sonal Mansingh', 'Protima Gauri Bedi', 'Guru Deba Prasad Das'],
        mudras: [
            { icon: '🙏', name: 'Anjali', meaning: 'Salutation / Devotion' },
            { icon: '✋', name: 'Pataka', meaning: 'Forest / Blessing' },
            { icon: '🤚', name: 'Alapadma', meaning: 'Full-blown lotus / Beauty' },
            { icon: '✌️', name: 'Katakamukha', meaning: 'Necklace / Flower plucking' },
            { icon: '🖖', name: 'Ardhachandra', meaning: 'Half-moon / River' },
            { icon: '🖐️', name: 'Mayura', meaning: 'Peacock / Vine / Writing' }
        ],
        highlights: [
            'Characterised by the Tribhangi (three-bend) posture',
            'Sculptures at Konark Sun Temple directly inspired its revival',
            'Chauka and Tribhangi are the two fundamental positions',
            'Jagannath Rath Yatra rituals preserve ancient Odissi traditions',
            'Guru Kelucharan Mohapatra is the father of modern Odissi',
            'Guru Gita Govinda by Jayadeva is a foundational text'
        ],
        tags: ['Odisha', 'Temple Sculpture', '2000+ years', 'Tribhangi']
    },
    {
        id: 'kuchipudi',
        name: 'Kuchipudi',
        origin: 'Andhra Pradesh, South India',
        region: 'south',
        era: '400',
        eraNum: 400,
        style: 'natya',
        styleLabel: 'Nritya & Natya',
        description: 'Kuchipudi combines dance and drama in a vibrant performance tradition. Named after the village of Kuchipudi in Andhra Pradesh, it is known for its fluid, graceful movements and the unique feat of dancing on the edge of a brass plate.',
        image: '../assets/kuchipudi.jpg',
        detailImage: '../assets/kuchipudi.jpg',
        costume: 'Vibrant silk costume similar to Bharatanatyam but with distinct Andhra styling. Men traditionally performed female roles (stree-vesham). Heavy silver jewellery and distinctive head ornaments.',
        originText: 'Kuchipudi originated in the 17th century in the village of Kuchelapuram (Kuchipudi), where Siddhendra Yogi created the dance-drama "Bhama Kalapam" about the devoted woman Satyabhama. It was traditionally performed only by male Brahmins.',
        keyFigures: ['Guru Vempati Chinna Satyam', 'Yamini Krishnamurthy', 'Raja Reddy', 'Kaushalya Reddy', 'Bhaskar K殳sh'],
        mudras: [
            { icon: '🙏', name: 'Anjali', meaning: 'Prayer / Greeting' },
            { icon: '✋', name: 'Pataka', meaning: 'Flag / Blessing' },
            { icon: '🤏', name: 'Kapitha', meaning: 'Holding flower / Parrot' },
            { icon: '✌️', name: 'Katakamukha', meaning: 'Flower / Necklace' },
            { icon: '🖐️', name: 'Alapadma', meaning: 'Lotus / Moon' },
            { icon: '🖖', name: 'Ardhachandra', meaning: 'Half-moon / Earth' }
        ],
        highlights: [
            'Unique "Tarangam" — dancing on the rim of a brass plate',
            'Traditionally performed as dance-drama (Bhama Kalapam)',
            'Only men originally performed all roles including female characters',
            'Dancers balance a pot of water on their heads during some performances',
            'Guru Vempati Chinna Satyam single-handedly revived the art form',
            'Kuchipudi village still maintains the traditional dance-drama format'
        ],
        tags: ['Andhra Pradesh', 'Dance-Drama', '400+ years', 'Plate Dance']
    },
    {
        id: 'manipuri',
        name: 'Manipuri',
        origin: 'Manipur, Northeast India',
        region: 'northeast',
        era: '500',
        eraNum: 500,
        style: 'nritya',
        styleLabel: 'Nritya (Expressive)',
        description: 'Manipuri, also known as Jagoi, is a graceful and devotional dance form from the northeastern state of Manipur. Centred on the love story of Radha and Krishna, it is characterised by fluid, circular movements and an ethereal, otherworldly quality.',
        image: '../assets/manipuri.jpg',
        detailImage: '../assets/manipuri.jpg',
        costume: 'The iconic cylindrical stiffened skirt (Potloi) for women, made of stiffened cloth decorated with mirrors and sequins. Men wear dhotis with turbans. White and vibrant colours dominate.',
        originText: 'Manipuri dance traditions predate recorded history, linked to the Meitei people\'s worship of age-old deities. The Vaishnavite reform of King Bhagyachandra in the 18th century gave it its present devotional character with the Ras Lila dance-dramas.',
        keyFigures: ['Guru Bipin Singh', 'Darshana Jhaveri', 'Manipuri Devi', 'Guru Amubi Singh', 'Trikullam Ipsi Devi'],
        mudras: [
            { icon: '🙏', name: 'Anjali', meaning: 'Prayer / Devotion' },
            { icon: '✋', name: 'Alapadma', meaning: 'Lotus / Beauty' },
            { icon: '🤏', name: 'Kapitha', meaning: 'Holding / Flower' },
            { icon: '🖐️', name: 'Pataka', meaning: 'Cloud / Blessing' },
            { icon: '✌️', name: 'Hamsasya', meaning: 'Swan / Grace' },
            { icon: '🖖', name: 'Chandrakala', meaning: 'Crescent moon / Divine' }
        ],
        highlights: [
            'Ras Lila performances are held under moonlight in temple courtyards',
            'The cylindrical Potloi costume is unique among all Indian dances',
            'Male dancers performing Krishna wear a peacock-feather crown',
            'Cartwheel-like movements are notably absent — all motion is circular',
            'Guru Bipin Singh single-handedly brought it to the national stage',
            'UNESCO listed Ras Lila as Intangible Cultural Heritage in 2010'
        ],
        tags: ['Manipur', 'Devotional', '500+ years', 'Ras Lila']
    },
    {
        id: 'kathak',
        name: 'Mohiniyattam',
        origin: 'Kerala, South India',
        region: 'south',
        era: '400',
        eraNum: 400,
        style: 'nritya',
        styleLabel: 'Nritya (Expressive)',
        description: 'Named after the enchantress Mohini (the female avatar of Lord Vishnu), Mohiniyattam is a graceful solo dance form characterised by gentle swaying movements, delicate facial expressions, and a signature Lasya (feminine) style.',
        image: '../assets/mohiniyattam.jpg',
        detailImage: '../assets/mohiniyattam.jpg',
        costume: 'White or off-white Kasavu saree with gold border, simple gold jewellery, and flowers in the hair. The costume emphasises elegance and simplicity over ornamentation.',
        originText: 'References to Mohiniyattam appear in the 16th century Kerala texts. It was revived in the 19th century by Maharaja Swathi Thirunal of Travancore and later by poet Vallathol Narayana Menon who established the Kerala Kalamandalam.',
        keyFigures: ['Kalamandalam Kalyanikutty Amma', 'Kumari Thankam', 'Sunanda Nair', 'Neena Prasad', 'Gopika Varma'],
        mudras: [
            { icon: '🙏', name: 'Anjali', meaning: 'Salutation / Devotion' },
            { icon: '✋', name: 'Pataka', meaning: 'Forest / River' },
            { icon: '🖐️', name: 'Alapadma', meaning: 'Lotus / Beauty' },
            { icon: '🤏', name: 'Kapitha', meaning: 'Lakshmi / Holding' },
            { icon: '✌️', name: 'Katakamukha', meaning: 'Flower / Necklace' },
            { icon: '🖖', name: 'Hamsapaksha', meaning: 'Swan wing / Walking' }
        ],
        highlights: [
            'Characterised by the signature "swaying" (sopanam) movements',
            'Only female solo dance among the 8 classical forms',
            'White Kasavu costume symbolises purity and simplicity',
            'Guru Kalyanikutty Amma is considered the mother of modern Mohiniyattam',
            'Draws from both Bharatanatyam and Kerala\'s temple traditions',
            'Lasya (grace) is valued over Tandava (vigour) in this form'
        ],
        tags: ['Kerala', 'Solo Dance', '400+ years', 'Lasya']
    },
    {
        id: 'sattriya',
        name: 'Sattriya',
        origin: 'Assam, Northeast India',
        region: 'northeast',
        era: '500',
        eraNum: 500,
        style: 'natya',
        styleLabel: 'Nritya & Natya',
        description: 'Sattriya is a devotional dance form that originated in the Vaishnavite monasteries (Sattras) of Assam. Created by the great reformer Srimanta Sankaradeva, it combines dance, music, and drama in service of devotion.',
        image: '../assets/sattriya.jpg',
        detailImage: '../assets/sattriya.jpg',
        costume: 'Dhoti and chadar for men (dhoti andmekhela chador for women), in white, saffron or other bright colours. Dancers wear simple jewellery and the distinctive Assamese gamusa (towel).',
        originText: 'Sattriya was created in the 15th-16th century by Srimanta Sankaradeva and his disciple Madhavdeva as part of the Neo-Vaishnavite movement. For centuries it remained confined to monasteries before being recognised as a classical form in 2000.',
        keyFigures: ['Srimanta Sankaradeva', 'Maniram Dutta Muktiyar', 'Jatin Goswami', 'Bapuram Barbayan', 'Roseshwar Saikia Barbayan'],
        mudras: [
            { icon: '🙏', name: 'Anjali', meaning: 'Prayer / Namaskar' },
            { icon: '✋', name: 'Pataka', meaning: 'Blessing / Cloud' },
            { icon: '🖐️', name: 'Alapadma', meaning: 'Lotus / Beauty' },
            { icon: '🤏', name: 'Kapitha', meaning: 'Holding / Parrot' },
            { icon: '✌️', name: 'Katakamukha', meaning: 'Flower / Garland' },
            { icon: '🖖', name: 'Soochi', meaning: 'Needle / Sharp' }
        ],
        highlights: [
            'The newest dance to receive Sangeet Natak Akademi recognition (2000)',
            'Originally performed only by male monks (Bhokots) in Sattras',
            'Two main styles: Paurashik (male) and Stri (female)',
            'Sankaradeva wrote Ankiya Naat (one-act plays) for this dance',
            'The Borgeet songs by Sankaradeva are inseparable from Sattriya',
            'UNESCO listed the Sattras as part of the Living Cultural Heritage'
        ],
        tags: ['Assam', 'Monastery Dance', '500+ years', 'Vaishnavite']
    },
    {
        id: 'chhau',
        name: 'Chhau',
        origin: 'Odisha / Jharkhand / West Bengal, East India',
        region: 'east',
        era: '400',
        eraNum: 400,
        style: 'natya',
        styleLabel: 'Nritya & Natya',
        description: 'Chhau is a unique semi-classical dance form that blends martial traditions, tribal dances, and folk elements. Its three distinct styles — Seraikella, Mayurbhanj, and Purulia — each have their own costume and character, with some using elaborate masks.',
        image: '../assets/chhau.jpg',
        detailImage: '../assets/chhau.jpg',
        costume: 'Varies by style: Seraikella uses carved wooden masks; Mayurbhanj uses no masks but elaborate painted faces; Purulia uses large ornate masks. All styles feature bright costumes with flowing sashes.',
        originText: 'Chhau derives its name from "Chhauni" (military camp), reflecting its martial origins. The Seraikella and Purulia styles use masks (representing animals and demons), while Mayurbhanj Chhau is maskless. UNESCO inscribed it in 2010.',
        keyFigures: ['Guru Jogesh Chandra Sau', 'Guru Kelucharan Mohapatra', 'Mohan Khopkar', 'Bireswar Gananayak', 'Ranjan Malla'],
        mudras: [
            { icon: '✊', name: 'Mushti', meaning: 'Fist / Weapon grip' },
            { icon: '🤚', name: 'Pataka', meaning: 'Sword / Shield' },
            { icon: '🖐️', name: 'Tripataka', meaning: 'Trident / Arrow' },
            { icon: '🖖', name: 'Ardhachandra', meaning: 'Shield / Crescent' },
            { icon: '✌️', name: 'Kartarimukha', meaning: 'Scissors / Battle' },
            { icon: '👌', name: 'Shikhara', meaning: 'Bow / Peak / Arrow' }
        ],
        highlights: [
            'Only Indian classical/semi-classical dance that uses carved wooden masks',
            'Three distinct regional styles with completely different aesthetics',
            'UNESCO Intangible Cultural Heritage since 2010',
            'Rabindranath Tagore described it as "a perfect expression of beauty"',
            'Performances retell episodes from Ramayana, Mahabharata, and Puranas',
            'The mask-making tradition itself is a dying folk art'
        ],
        tags: ['Eastern India', 'Masked Dance', '400+ years', 'Martial']
    }
];

// ---------------------------------------------------------------------------
// 2. TAB DEFINITIONS
// ---------------------------------------------------------------------------

const DANCE_TABS = [
    { key: 'overview', label: 'Overview', icon: '<i class="fa-solid fa-book-open" style="color: var(--primary-gold);"></i>' },
    { key: 'costume', label: 'Costume', icon: '<i class="fa-solid fa-shirt" style="color: var(--primary-gold);"></i>' },
    { key: 'mudras', label: 'Mudras', icon: '<i class="fa-solid fa-hand" style="color: var(--primary-gold);"></i>' },
    { key: 'highlights', label: 'Highlights', icon: '<i class="fa-solid fa-star" style="color: var(--primary-gold);"></i>' },
    { key: 'keyFigures', label: 'Key Figures', icon: '<i class="fa-solid fa-user" style="color: var(--primary-gold);"></i>' }
];

// ---------------------------------------------------------------------------
// 3. INIT FUNCTION
// ---------------------------------------------------------------------------

function initDancesPage() {
    const cardsGrid = document.getElementById('dances-cards-grid');
    const detailPanel = document.getElementById('dances-detail-panel');
    const modalBackdrop = document.getElementById('dances-modal-backdrop');
    const searchInput = document.getElementById('dances-search-input');
    const regionSelect = document.getElementById('dances-region-select');
    const styleSelect = document.getElementById('dances-style-select');
    const sortSelect = document.getElementById('dances-sort-select');
    const resetBtn = document.getElementById('dances-reset-btn');

    if (!cardsGrid || !detailPanel) return;

    let detailPanelFocusTrap = null;
    let currentList = [...DANCES_DATA];

    // -----------------------------------------------------------------------
    // RENDER CARDS
    // -----------------------------------------------------------------------
    function renderCards() {
        if (!currentList.length) {
            cardsGrid.innerHTML = '<p class="dance-no-results">No dance forms match your filters. Try resetting them.</p>';
            return;
        }

        cardsGrid.innerHTML = currentList.map((d, idx) => {
            const isSaved = window.Journey && window.Journey.isSaved ? window.Journey.isSaved('dance-' + d.id) : false;
            return `
            <div class="dance-card" data-id="${d.id}" style="animation-delay: ${idx * 0.06}s">
                <div class="dance-card-img-wrap">
                    <img src="${d.image}" alt="${d.name} classical dance" loading="lazy">
                    <div class="dance-card-img-overlay"></div>
                    <span class="dance-card-badge region-${d.region}">${d.region.charAt(0).toUpperCase() + d.region.slice(1)}</span>
                    <button class="dance-card-fav ${isSaved ? 'active' : ''}" data-fav="${d.id}" aria-label="Save ${d.name}">${isSaved ? '♥' : '♡'}</button>
                    <div class="dance-card-title">${d.name}</div>
                </div>
                <div class="dance-card-body">
                    <p class="dance-card-desc">${d.description.substring(0, 140)}…</p>
                    <div class="dance-card-meta">
                        <span class="dance-card-meta-item"><i class="fa-solid fa-location-dot"></i> ${d.origin.split(',')[0]}</span>
                        <span class="dance-card-meta-item"><i class="fa-solid fa-clock"></i> ${d.era}+ yrs</span>
                        <span class="dance-card-meta-item"><i class="fa-solid fa-palette"></i> ${d.styleLabel.split(' ')[0]}</span>
                    </div>
                    <div class="dance-card-tags">
                        ${d.tags.map(t => `<span class="dance-tag">${t}</span>`).join('')}
                    </div>
                </div>
            </div>
            `;
        }).join('');

        // Card click → open detail
        cardsGrid.querySelectorAll('.dance-card').forEach(card => {
            card.addEventListener('click', () => openDetail(card.dataset.id));
        });

        // Fav button toggle
        cardsGrid.querySelectorAll('[data-fav]').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const danceId = btn.dataset.fav;
                const d = DANCES_DATA.find(x => x.id === danceId);
                if (window.Journey && window.Journey.toggle && d) {
                    const saved = window.Journey.toggle({
                        id: 'dance-' + d.id,
                        explorerPage: 'classical-dances-explorer/index.html',
                        title: d.name + ' Dance',
                        thumbnail: d.image,
                        category: 'classical-dances'
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
    function openDetail(danceId) {
        const d = DANCES_DATA.find(x => x.id === danceId);
        if (!d) return;

        let activeTab = 'overview';

        const tabButtons = DANCE_TABS.map(tab => `
            <button class="dances-tab-btn ${tab.key === activeTab ? 'active' : ''}" data-tab="${tab.key}">
                <span>${tab.icon}</span> ${tab.label}
            </button>
        `).join('');

        function renderTabPanels() {
            const overviewPanel = `
                <div class="dances-tab-panel active" data-panel="overview">
                    <p class="dances-tab-text">${d.originText}</p>
                </div>
            `;
            const costumePanel = `
                <div class="dances-tab-panel" data-panel="costume">
                    <p class="dances-tab-text">${d.costume}</p>
                </div>
            `;
            const mudrasPanel = `
                <div class="dances-tab-panel" data-panel="mudras">
                    <p class="dances-tab-text">Key mudras (hand gestures) used in ${d.name}:</p>
                    <div class="dances-mudra-grid">
                        ${d.mudras.map(m => `
                            <div class="dances-mudra-item">
                                <div class="dances-mudra-icon">${m.icon}</div>
                                <div class="dances-mudra-name">${m.name}</div>
                                <div class="dances-mudra-meaning">${m.meaning}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
            const highlightsPanel = `
                <div class="dances-tab-panel" data-panel="highlights">
                    <ul class="dances-tab-list">
                        ${d.highlights.map(h => `<li><span class="check-icon"><i class="fa-regular fa-circle-check" style="color: var(--primary-gold);"></i></span>${h}</li>`).join('')}
                    </ul>
                </div>
            `;
            const figuresPanel = `
                <div class="dances-tab-panel" data-panel="keyFigures">
                    <p class="dances-tab-text">Notable practitioners and gurus of ${d.name}:</p>
                    <ul class="dances-tab-list">
                        ${d.keyFigures.map(f => `<li><span class="check-icon"><i class="fa-solid fa-user" style="color: var(--primary-gold);"></i></span>${f}</li>`).join('')}
                    </ul>
                </div>
            `;
            return overviewPanel + costumePanel + mudrasPanel + highlightsPanel + figuresPanel;
        }

        detailPanel.innerHTML = `
            <div class="dances-detail-hero">
                <img src="${d.detailImage}" alt="${d.name} dance performance">
                <div class="dances-detail-hero-overlay"></div>
                <button class="dances-detail-close" id="dances-detail-close" aria-label="Close">✕</button>
            </div>
            <div class="dances-detail-body">
                <h2 class="dances-detail-name">${d.name}</h2>
                <p class="dances-detail-origin"><i class="fa-solid fa-location-dot"></i> ${d.origin}</p>
                <p class="dances-detail-desc">${d.description}</p>
                <div class="dances-detail-stats">
                    <div class="dances-detail-stat">
                        <span class="stat-icon"><i class="fa-solid fa-clock"></i></span>
                        <div>
                            <div class="dances-detail-stat-label">History</div>
                            <div class="dances-detail-stat-value">${d.era}+ Years</div>
                        </div>
                    </div>
                    <div class="dances-detail-stat">
                        <span class="stat-icon"><i class="fa-solid fa-palette"></i></span>
                        <div>
                            <div class="dances-detail-stat-label">Primary Style</div>
                            <div class="dances-detail-stat-value">${d.styleLabel}</div>
                        </div>
                    </div>
                    <div class="dances-detail-stat">
                        <span class="stat-icon"><i class="fa-solid fa-earth-asia"></i></span>
                        <div>
                            <div class="dances-detail-stat-label">Region</div>
                            <div class="dances-detail-stat-value">${d.origin.split(',')[1] ? d.origin.split(',')[1].trim() : d.origin}</div>
                        </div>
                    </div>
                    <div class="dances-detail-stat">
                        <span class="stat-icon"><i class="fa-solid fa-hand"></i></span>
                        <div>
                            <div class="dances-detail-stat-label">Mudras</div>
                            <div class="dances-detail-stat-value">${d.mudras.length} Key Gestures</div>
                        </div>
                    </div>
                </div>
                <div class="dances-detail-tabs">${tabButtons}</div>
                ${renderTabPanels()}
            </div>
        `;

        // Tab switching
        detailPanel.querySelectorAll('.dances-tab-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                activeTab = btn.dataset.tab;
                detailPanel.querySelectorAll('.dances-tab-btn').forEach(b => b.classList.toggle('active', b.dataset.tab === activeTab));
                detailPanel.querySelectorAll('.dances-tab-panel').forEach(p => p.classList.toggle('active', p.dataset.panel === activeTab));
            });
        });

        document.getElementById('dances-detail-close')?.addEventListener('click', closeDetail);

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
    const dancesEscapeHandler = (e) => {
        if (e.key === 'Escape') closeDetail();
    };
    document.addEventListener('keydown', dancesEscapeHandler);
    if (typeof window.iiRegisterKeydownHandler === 'function') {
        window.iiRegisterKeydownHandler(dancesEscapeHandler);
    }

    // -----------------------------------------------------------------------
    // FILTERING & SORTING
    // -----------------------------------------------------------------------
    function applyFilters() {
        const query = (searchInput?.value || '').trim().toLowerCase();
        const region = regionSelect?.value || 'all';
        const style = styleSelect?.value || 'all';

        let list = DANCES_DATA.filter(d => {
            const matchesRegion = region === 'all' || d.region === region;
            const matchesStyle = style === 'all' || d.style === style;
            const matchesQuery = !query ||
                d.name.toLowerCase().includes(query) ||
                d.origin.toLowerCase().includes(query) ||
                d.description.toLowerCase().includes(query) ||
                d.tags.some(t => t.toLowerCase().includes(query));
            return matchesRegion && matchesStyle && matchesQuery;
        });

        const sortMode = sortSelect?.value || 'popular';
        if (sortMode === 'az') {
            list.sort((a, b) => a.name.localeCompare(b.name));
        } else if (sortMode === 'age') {
            list.sort((a, b) => a.eraNum - b.eraNum);
        }

        currentList = list;
        renderCards();
    }

    // -----------------------------------------------------------------------
    // EVENT LISTENERS
    // -----------------------------------------------------------------------
    searchInput?.addEventListener('input', applyFilters);
    regionSelect?.addEventListener('change', applyFilters);
    styleSelect?.addEventListener('change', applyFilters);
    sortSelect?.addEventListener('change', applyFilters);

    resetBtn?.addEventListener('click', () => {
        if (searchInput) searchInput.value = '';
        if (regionSelect) regionSelect.value = 'all';
        if (styleSelect) styleSelect.value = 'all';
        if (sortSelect) sortSelect.value = 'popular';
        applyFilters();
    });

    // -----------------------------------------------------------------------
    // INITIAL RENDER & JOURNEY REGISTRATION
    // -----------------------------------------------------------------------
    renderCards();

    if (window.Journey && window.Journey.registerSearchItems) {
        window.Journey.registerSearchItems('classical-dances-explorer/index.html', DANCES_DATA.map(d => ({
            id: 'dance-' + d.id,
            title: d.name + ' Dance',
            description: d.description.substring(0, 100),
            link: 'frontend/classical-dances-explorer/index.html'
        })));
    }
}

// ---------------------------------------------------------------------------
// 4. ROUTE DISPATCHER
// ---------------------------------------------------------------------------

document.addEventListener('app:route-changed', () => {
    initSiteChrome();
    const page = document.body.dataset.page;
    if (page === 'dances') {
        initDancesPage();
    }
});

// Also support standalone (non-SPA) loading
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        if (document.body.dataset.page === 'dances') {
            initDancesPage();
        }
    });
} else {
    if (document.body.dataset.page === 'dances') {
        initDancesPage();
    }
}
