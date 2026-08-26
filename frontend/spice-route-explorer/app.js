/* ==========================================================================
   SPICE ROUTE EXPLORER — MAIN APPLICATION LOGIC
   Vanilla JavaScript. No external dependencies.
   Showcases India's most iconic spices with culinary & medicinal profiles.
   ========================================================================== */

// ---------------------------------------------------------------------------
// 1. SPICE DATA — 20 iconic Indian spices
// ---------------------------------------------------------------------------

const SPICE_DATA = [
    {
        id: 'kashmir-saffron',
        name: 'Kashmir Saffron (Kesar)',
        hindi: 'केसर',
        emoji: '🌸',
        category: 'flower',
        heat: 0,
        region: 'Kashmir',
        description: 'The world\'s most expensive spice by weight, hand-harvested from crocus flowers in Pampore, Kashmir. Each flower yields only 3 stigmas, and 150,000 flowers produce just 1 kg.',
        origin: 'Kashmir (Pampore fields)',
        taste: 'Bitter-sweet, hay-like, honey notes',
        uses: ['Biryani', 'Kheer', 'Kahwa tea', 'Mughlai curries', 'Saffron milk'],
        pairs: ['🍵 Green Tea', '🍚 Rice', '🥛 Milk', '🍬 Sugar Syrup'],
        history: 'Kashmiri saffron has been cultivated for over 2,500 years. Mughal emperor Jahangir called it "the soul of Kashmir." It remains a symbol of luxury and is used in Hindu, Buddhist, and Islamic rituals.',
        tags: ['Most Expensive', 'Kashmir', 'Hand-Harvested', 'Mughlai']
    },
    {
        id: 'kashmir-chili',
        name: 'Kashmiri Red Chili (Deghi Mirch)',
        hindi: 'देगी मिर्च',
        emoji: '🌶️',
        category: 'fruit',
        heat: 3,
        region: 'Kashmir',
        description: 'Prized for its vibrant red colour rather than extreme heat. Provides the signature deep red hue to Kashmiri cuisine and Rogan Josh without overwhelming spiciness.',
        origin: 'Kashmir Valley',
        taste: 'Mild heat, slightly sweet, fruity',
        uses: ['Rogan Josh', 'Kashmiri Wazwan', 'Kashmiri chai', 'Colouring agent'],
        pairs: ['🐑 Lamb', '🍚 Rice', '🧅 Onion', '🫙 Yogurt'],
        history: 'Deghi mirch is central to the Kashmiri Wazwan feast — a 36-course banquet where it gives the signature red colour to multiple dishes.',
        tags: ['Mild Heat', 'Colouring', 'Kashmir', 'Wazwan']
    },
    {
        id: 'black-pepper',
        name: 'Black Pepper (Kali Mirch)',
        hindi: 'काली मिर्च',
        emoji: '⚫',
        category: 'fruit',
        heat: 7,
        region: 'Kerala',
        description: 'Known as the "King of Spices" and "Black Gold," black pepper was once so valuable it was used as currency. Native to Kerala\'s Malabar Coast, it drove the age of exploration.',
        origin: 'Kerala (Malabar Coast)',
        taste: 'Sharp, pungent, piney, warm',
        uses: ['Universal seasoning', 'Kerala fish curry', 'Rasam', 'Pickle spice mixes'],
        pairs: ['🥩 All meats', '🥚 Eggs', '🫙 Yogurt', '🫘 Lentils'],
        history: 'Black pepper drove Vasco da Gama to India in 1498. Roman Empire spent 50 million sesterces annually on Indian pepper. It was used as rent, tribute, and dowry across medieval Europe.',
        tags: ['Black Gold', 'Malabar Coast', 'Age of Exploration', 'Universal']
    },
    {
        id: 'cardamom',
        name: 'Cardamom (Elaichi)',
        hindi: 'इलाइची',
        emoji: '🟢',
        category: 'fruit',
        heat: 0,
        region: 'Kerala / Karnataka',
        description: 'The "Queen of Spices" — green cardamom pods contain intensely aromatic seeds with a complex, sweet-spicy flavour. Used in both savoury and sweet dishes across India.',
        origin: 'Western Ghats (Kerala, Karnataka)',
        taste: 'Sweet, menthol, camphor-like, eucalyptus',
        uses: ['Chai tea', 'Biryani', 'Garam masala', 'Mithai (sweets)', 'Kheer'],
        pairs: ['☕ Tea', '🍚 Rice', '🍬 Sweets', '🥛 Milk-based desserts'],
        history: 'Cardamom has been traded from the Western Ghats for over 4,000 years. Ancient Egyptians chewed it to freshen breath. Vikings discovered it in Constantinople and brought it to Scandinavia.',
        tags: ['Queen of Spices', 'Western Ghats', 'Ancient Trade', 'Versatile']
    },
    {
        id: 'cinnamon',
        name: 'Cinnamon (Dalchini)',
        hindi: 'दालचीनी',
        emoji: '🟤',
        category: 'bark',
        heat: 2,
        region: 'Sri Lanka / Kerala',
        description: 'True cinnamon (Ceylon) comes from the inner bark of Cinnamomum trees, rolled into delicate quills. Its warm, sweet flavour is essential to garam masala and Mughlai cuisine.',
        origin: 'Sri Lanka & Kerala',
        taste: 'Sweet, warm, woody, slightly citrusy',
        uses: ['Garam masala', 'Biryani', 'Kheer', 'Chai tea', 'Baking'],
        pairs: ['🍚 Rice', '☕ Tea', '🍬 Sweets', '🍷 Mulled beverages'],
        history: 'Ancient Egyptians used cinnamon in embalming. It was once more valuable than gold. The Dutch and Portuguese fought wars to control the cinnamon trade from Sri Lanka.',
        tags: ['Garam Masala', 'Ceylon', 'Embalmment', 'War Catalyst']
    },
    {
        id: 'turmeric',
        name: 'Turmeric (Haldi)',
        hindi: 'हल्दी',
        emoji: '🟡',
        category: 'root',
        heat: 1,
        region: 'Andhra Pradesh / Erode',
        description: 'The "Golden Spice" — turmeric is the backbone of Indian cooking and Ayurvedic medicine. Its bright yellow colour and earthy flavour appear in nearly every Indian curry.',
        origin: 'Andhra Pradesh, Erode (Tamil Nadu)',
        taste: 'Earthy, bitter, warm, slightly peppery',
        uses: ['All curries', 'Dal', 'Rice dishes', 'Golden milk', 'Pickles'],
        pairs: ['🫘 Lentils', '🥘 All curries', '🥛 Milk', '🧅 Onion-Ginger base'],
        history: 'Turmeric has been used in India for over 4,500 years. In Hindu tradition, haldi (turmeric paste) is applied in weddings and religious ceremonies. Modern science confirms its anti-inflammatory compound curcumin.',
        tags: ['Golden Spice', 'Ayurvedic', 'Curcumin', 'Sacred']
    },
    {
        id: 'cumin',
        name: 'Cumin (Jeera)',
        hindi: 'जीरा',
        emoji: '🫘',
        category: 'seed',
        heat: 2,
        region: 'Rajasthan / Gujarat',
        description: 'The most widely used spice in Indian kitchens. Cumin seeds, when tempered in hot oil, release a warm, nutty aroma that forms the flavour base of countless dishes.',
        origin: 'Rajasthan, Gujarat, and Iran',
        taste: 'Warm, nutty, earthy, slightly bitter',
        uses: ['Tadka (tempering)', 'Jeera rice', 'Raita', 'Garam masala', 'Pickles'],
        pairs: ['🫘 Lentils', '🍚 Rice', '🫙 Yogurt', '🧅 Onion'],
        history: 'Cumin was found in the tomb of Egyptian Pharaoh Tutankhamun. In India, it has been used since Vedic times. The practice of "tadka" (tempering cumin in oil) is a uniquely Indian cooking technique.',
        tags: ['Most Used', 'Tadka', 'Vedic', 'Versatile']
    },
    {
        id: 'coriander',
        name: 'Coriander (Dhania)',
        hindi: 'धनिया',
        emoji: '🌿',
        category: 'seed',
        heat: 0,
        region: 'Rajasthan / Madhya Pradesh',
        description: 'Used both as fresh leaves (cilantro) and dried seeds, coriander is India\'s most produced and consumed spice. The seeds have a warm, citrusy, slightly sweet flavour.',
        origin: 'Rajasthan, Madhya Pradesh',
        taste: 'Warm, citrusy, slightly floral, nutty',
        uses: ['Coriander chutney', 'Curry base', 'Sambar', 'Pickles', 'Garam masala'],
        pairs: ['🫘 Lentils', '🧅 Onion', '🌶️ Chili', '🫙 Yogurt'],
        history: 'Coriander is one of the oldest spices known to humanity, found in Neolithic sites dating to 5000 BCE. It is mentioned in the Rigveda and has been used in Indian medicine for millennia.',
        tags: ['Most Produced', 'Dual Use', 'Neolithic', 'Chutney']
    },
    {
        id: 'mustard',
        name: 'Mustard Seeds (Rai)',
        hindi: 'राई',
        emoji: '⬛',
        category: 'seed',
        heat: 5,
        region: 'Rajasthan / West Bengal',
        description: 'Tiny seeds that pop explosively in hot oil, releasing a sharp, pungent flavour. Essential to Bengali five-spice (panch phoron) and South Indian tempering.',
        origin: 'Rajasthan, West Bengal',
        taste: 'Sharp, pungent, nutty when tempered',
        uses: ['Panch phoron', 'Bengali fish curry', 'South Indian tadka', 'Pickles', 'Sarson ka saag'],
        pairs: ['🐟 Fish', '🥬 Leafy greens', '🫙 Yogurt', '🐟 Mustard fish (Shorshe)'],
        history: 'Mustard seeds have been found in Indus Valley Civilization sites. The Bengali "Sarson ka Saag" is one of India\'s most iconic dishes. Mustard paste is central to Bengali cuisine.',
        tags: ['Panch Phoron', 'Bengali', 'Tempering', 'Pungent']
    },
    {
        id: 'fenugreek',
        name: 'Fenugreek (Methi)',
        hindi: 'मेथी',
        emoji: '🟠',
        category: 'seed',
        heat: 0,
        region: 'Rajasthan / Gujarat',
        description: 'Bitter-yellow seeds with a maple-syrup-like aroma. Dried fenugreek leaves (kasuri methi) add a distinctive aroma to butter chicken and other Mughlai dishes.',
        origin: 'Rajasthan, Gujarat',
        taste: 'Bitter, maple-like, caramel, nutty',
        uses: ['Butter chicken', 'Kasuri methi dishes', 'Pickles', 'Panch phoron', 'Methi paratha'],
        pairs: ['🍗 Chicken', '🫘 Lentils', '🧅 Onion-tomato base', '🥛 Cream'],
        history: 'Fenugreek has been used in Indian medicine for over 4,000 years. It is believed to increase milk production in nursing mothers — hence the name "methi" (related to "methe" meaning sweet in some dialects).',
        tags: ['Bitter-Sweet', 'Kasuri Methi', 'Butter Chicken', 'Medicinal']
    },
    {
        id: 'star-anise',
        name: 'Star Anise (Chakra Phool)',
        hindi: 'चक्र फूल',
        emoji: '⭐',
        category: 'fruit',
        heat: 0,
        region: 'Northeast India',
        description: 'Beautiful star-shaped pods with a strong licorice-like flavour. Essential to biryani and garam masala. Also the source of shikimic acid used in Tamiflu production.',
        origin: 'Northeast India (Arunachal Pradesh, Nagaland)',
        taste: 'Sweet, licorice-like, warm, aromatic',
        uses: ['Biryani', 'Garam masala', 'Chinese five-spice', 'Mughlai curries'],
        pairs: ['🍚 Biryani rice', '🥩 Red meat', '🫙 Yogurt', '🧅 Onion-based curries'],
        history: 'Star anise is a key ingredient in both Indian and Chinese cuisines. It became globally significant when shikimic acid from its seeds was discovered to be the precursor for Tamiflu (oseltamivir).',
        tags: ['Biryani Essential', 'Tamiflu Source', 'Northeast', 'Star-Shaped']
    },
    {
        id: 'asafoetida',
        name: 'Asafoetida (Hing)',
        hindi: 'हींग',
        emoji: '🟡',
        category: 'root',
        heat: 0,
        region: 'Iran / Kashmir imports',
        description: 'Known as "devil\'s dung" for its pungent smell when raw, but transforms into a savoury, onion-garlic-like flavour when tempered. Essential in Jain and Brahmin cooking.',
        origin: 'Iran / Afghanistan (imported to India)',
        taste: 'Umami, onion-garlic-like, savoury',
        uses: ['Jain cooking (no onion/garlic)', 'Sambar tadka', 'Dal tadka', 'Pickles', 'Digestive aid'],
        pairs: ['🫘 Lentils', '🥔 Potato', '🫙 Yogurt', '🥜 Legumes'],
        history: 'Hing is essential in Jain cuisine, where onion and garlic are prohibited. It provides the savoury depth that replaces them. Introduced to India via the spice trade routes from Persia.',
        tags: ['Umami Bomb', 'Jain Cooking', 'Persian Import', 'Digestive']
    },
    {
        id: 'nutmeg',
        name: 'Nutmeg (Jaiphal)',
        hindi: 'जायफल',
        emoji: '🟤',
        category: 'fruit',
        heat: 0,
        region: 'Kerala / Karnataka',
        description: 'The seed of the Myristica fragrans tree, closely related to mace. Has a warm, sweet, slightly nutty flavour used sparingly in both savoury and sweet dishes.',
        origin: 'Kerala, Karnataka',
        taste: 'Warm, sweet, nutty, slightly woody',
        uses: ['Garam masala', 'Biryani', 'Korma', 'Desserts', 'Mughlai sweets'],
        pairs: ['🍚 Biryani', '🥛 Milk-based desserts', '🐔 Korma', '☕ Chai'],
        history: 'Nutmeg and mace come from the same tree — nutmeg is the seed, mace is the covering. The Dutch once controlled all nutmeg production and burned trees on islands that wouldn\'t comply.',
        tags: ['Garam Masala', 'Mughlai', 'Dutch Monopoly', 'Mace Relative']
    },
    {
        id: 'cloves',
        name: 'Cloves (Laung)',
        hindi: 'लौंग',
        emoji: '🔴',
        category: 'flower',
        heat: 4,
        region: 'Kerala',
        description: 'Dried flower buds with an intense, warm, numbing flavour. Used sparingly in curries, biryanis, and garam masala. Also used medicinally for toothache relief.',
        origin: 'Kerala (Malabar Coast)',
        taste: 'Intense, warm, numbing, sweet',
        uses: ['Garam masala', 'Biryani', 'Mughlai curries', 'Chai tea', 'Toothache remedy'],
        pairs: ['🍚 Biryani', '☕ Tea', '🍬 Sweets', '🫙 Yogurt marinades'],
        history: 'Cloves were so valuable in medieval China that courtiers had to chew them before addressing the emperor. The clove trade from Kerala was one of the most lucrative in ancient maritime commerce.',
        tags: ['Intense', 'Toothache Remedy', 'Malabar', 'Numismatic Value']
    },
    {
        id: 'bay-leaf',
        name: 'Bay Leaf (Tej Patta)',
        hindi: 'तेज पत्ता',
        emoji: '🍃',
        category: 'leaf',
        heat: 0,
        region: 'Northeast India',
        description: 'Indian bay leaves (Cinnamomum tamala) are different from European bay leaves, with a cinnamon-clove aroma. Used whole in rice dishes, curries, and biryanis.',
        origin: 'Northeast India, Himachal Pradesh',
        taste: 'Cinnamon-clove, warm, slightly bitter',
        uses: ['Biryani', 'Pulao', 'Curry base', 'Garam masala', 'Rice dishes'],
        pairs: ['🍚 Rice dishes', '🫘 Lentils', '🥩 Meat curries', '🧅 Onion-tomato base'],
        history: 'Indian bay leaf (tej patta) is botanically different from European bay leaf (Laurus nobilis). It has been used in Indian cooking since Vedic times and is mentioned in Ayurvedic texts.',
        tags: ['Biryani Essential', 'Vedic', 'Cinnamon-Clove', 'Whole Spice']
    },
    {
        id: 'ajwain',
        name: 'Ajwain (Carom Seeds)',
        hindi: 'अजवाइन',
        emoji: '🫘',
        category: 'seed',
        heat: 3,
        region: 'Rajasthan / Gujarat',
        description: 'Tiny seeds with a powerful thyme-like flavour due to high thymol content. Used in small quantities in snacks, breads, and tempering. Also a potent digestive aid.',
        origin: 'Rajasthan, Gujarat',
        taste: 'Thyme-like, pungent, bitter, warm',
        uses: ['Paratha tempering', 'Pakoras', 'Jeera-ajwain dal', 'Digestive remedies', 'Papdi'],
        pairs: ['🫓 Parathas', '🫘 Lentils', '🥔 Potato dishes', '🧅 Onion'],
        history: 'Ajwain has been used in Ayurveda for over 3,000 years as a digestive aid. The high thymol content gives it antimicrobial properties. It is especially popular in Rajasthani and Gujarati cuisines.',
        tags: ['Digestive', 'Thymol', 'Rajasthani', 'Tempering']
    },
    {
        id: 'fennel',
        name: 'Fennel (Saunf)',
        hindi: 'सौंफ',
        emoji: '🟢',
        category: 'seed',
        heat: 0,
        region: 'Rajasthan / Bihar',
        description: 'Sweet, anise-flavoured seeds used as a digestive mouth freshener after meals and in tempering for pickles and curries. A staple of Indian "mukhwas" (after-meal mixture).',
        origin: 'Rajasthan, Bihar',
        taste: 'Sweet, anise-like, cool, fresh',
        uses: ['Mouth freshener', 'Pickle spice mix', 'Raita tempering', 'Korma', 'Saunf tea'],
        pairs: ['🫙 Yogurt', '🍬 Sweets', '🫘 Lentils', '🍚 Rice'],
        history: 'Fennel has been used in India as both a spice and medicine for over 3,000 years. The tradition of serving saunf after meals is rooted in Ayurvedic digestive principles.',
        tags: ['Digestive', 'Mouth Freshener', 'Ayurvedic', 'Sweet']
    },
    {
        id: 'tamarind',
        name: 'Tamarind (Imli)',
        hindi: 'इमली',
        emoji: '🟫',
        category: 'fruit',
        heat: 0,
        region: 'South India / Maharashtra',
        description: 'Tangy, sweet-sour fruit pods that provide the signature sourness to South Indian sambar, rasam, and chutneys. The quintessential souring agent of Indian cooking.',
        origin: 'South India, Maharashtra',
        taste: 'Sour, tangy, slightly sweet',
        uses: ['Sambar', 'Rasam', 'Chutneys', 'Puliogare (tamarind rice)', 'Imli chutney'],
        pairs: ['🫘 Lentils', '🍚 Rice', '🥔 Vegetables', '🐟 Fish'],
        history: 'Tamarind is native to tropical Africa but has been integral to Indian cooking for over 2,000 years. The name comes from Arabic "tamar hind" (Indian date). It is essential to every South Indian meal.',
        tags: ['Sour Agent', 'Sambar Essential', 'South Indian', 'Versatile']
    },
    {
        id: 'curry-leaf',
        name: 'Curry Leaf (Kadi Patta)',
        hindi: 'कड़ी पत्ता',
        emoji: '🍃',
        category: 'leaf',
        heat: 0,
        region: 'South India',
        description: 'Fragrant leaves from the Murraya koenigii tree, essential to South Indian, Sri Lankan, and coastal cuisines. No substitute exists — their distinctive aroma is irreplaceable.',
        origin: 'South India',
        taste: 'Nutty, citrusy, herbal, aromatic',
        uses: ['Curry leaf rice', 'Sambar tadka', 'Chutney', 'Dosa batter', 'Upma'],
        pairs: ['🫘 Lentils', '🍚 Rice', '🥔 Vegetables', '🫙 Yogurt'],
        history: 'Curry leaves are essential to South Indian cooking and have no true substitute. The word "curry" may actually derive from the Tamil "kari" (sauce), not the leaf itself.',
        tags: ['Irreplaceable', 'South Indian', 'Tadka Essential', 'Citrusy']
    },
    {
        id: 'stone-flower',
        name: 'Stone Flower (Dagad Phool)',
        hindi: 'दगड फूल',
        emoji: '🪨',
        category: 'flower',
        heat: 0,
        region: 'Maharashtra / Madhya Pradesh',
        description: 'A lichen that grows on rocks, used primarily in Maharashtrian and Hyderabadi cuisine. Adds an earthy, smoky depth to gravies, especially in Kolhapuri and Goda masalas.',
        origin: 'Maharashtra, Madhya Pradesh',
        taste: 'Earthy, smoky, woody, mineral',
        uses: ['Goda masala', 'Kolhapuri masala', 'Hyderabadi biryani', 'Misal pav'],
        pairs: ['🥩 Meat curries', '🫘 Lentils', '🍚 Rice', '🫓 Pav bread'],
        history: 'Stone flower is a closely guarded secret in many Maharashtrian masala recipes. It grows naturally on rocks in central India and is hand-collected during the monsoon season.',
        tags: ['Goda Masala', 'Maharashtrian', 'Lichen', 'Secret Ingredient']
    },
    {
        id: 'long-pepper',
        name: 'Long Pepper (Pippali)',
        hindi: 'पिप्पली',
        emoji: '⚫',
        category: 'fruit',
        heat: 6,
        region: 'Northeast India / Kerala',
        description: 'The original "pepper" before black pepper took over. A catkin-like fruit with a complex, lingering heat that is sweeter and more nuanced than black pepper.',
        origin: 'Northeast India, Kerala',
        taste: 'Sweet, complex heat, lingering, woody',
        uses: ['Ayurvedic medicine', 'Chyawanprash', 'Ancient garam masala', 'Tonic preparations'],
        pairs: ['🍵 Herbal tonics', '🫘 Lentils', '🍯 Honey preparations', '🥛 Warm milk'],
        history: 'Long pepper was the original "pepper" known to the ancient world. The Latin word for pepper ("piper") comes from pippali. It was replaced by black pepper in global trade around the 1st century CE.',
        tags: ['Original Pepper', 'Ayurvedic', 'Chyawanprash', 'Ancient']
    }
];

// ---------------------------------------------------------------------------
// 2. TAB DEFINITIONS
// ---------------------------------------------------------------------------

const SPC_TABS = [
    { key: 'culinary', label: 'Culinary', icon: '<i class="fa-solid fa-utensils" style="color: var(--primary-gold);"></i>' },
    { key: 'medicinal', label: 'Medicinal', icon: '<i class="fa-solid fa-leaf" style="color: var(--primary-gold);"></i>' },
    { key: 'history', label: 'History', icon: '<i class="fa-solid fa-landmark" style="color: var(--primary-gold);"></i>' },
    { key: 'pairings', label: 'Pairings', icon: '<i class="fa-solid fa-link" style="color: var(--primary-gold);"></i>' }
];

// ---------------------------------------------------------------------------
// 3. HEAT HELPERS
// ---------------------------------------------------------------------------

function getHeatLevel(heat) {
    if (heat === 0) return 'none';
    if (heat <= 3) return 'mild';
    if (heat <= 6) return 'medium';
    if (heat <= 9) return 'hot';
    return 'extreme';
}

function renderHeatDots(heat, size) {
    let dots = '';
    for (let i = 0; i < 10; i++) {
        const filled = i < heat;
        const color = filled ? (heat >= 8 ? '#e53e3e' : heat >= 5 ? '#ed8936' : '#ecc94b') : 'rgba(255,255,255,0.1)';
        dots += `<span style="display:inline-block;width:${size || 10}px;height:${size || 10}px;border-radius:50%;background:${color};"></span>`;
    }
    return dots;
}

// ---------------------------------------------------------------------------
// 4. INIT FUNCTION
// ---------------------------------------------------------------------------

function initSpicePage() {
    const cardsGrid = document.getElementById('spc-cards-grid');
    const noResults = document.getElementById('spc-no-results');
    const detailPanel = document.getElementById('spc-detail-panel');
    const modalBackdrop = document.getElementById('spc-modal-backdrop');
    const searchInput = document.getElementById('spc-search-input');
    const categoryTabs = document.getElementById('spc-category-tabs');
    const heatSelect = document.getElementById('spc-heat-select');
    const regionSelect = document.getElementById('spc-region-select');
    const sortSelect = document.getElementById('spc-sort-select');
    const resetBtn = document.getElementById('spc-reset-btn');
    const countEl = document.getElementById('spc-count');

    if (!cardsGrid || !detailPanel) return;

    let detailPanelFocusTrap = null;
    let currentList = [...SPICE_DATA];
    let activeCategory = 'all';

    // -----------------------------------------------------------------------
    // POPULATE REGION DROPDOWN
    // -----------------------------------------------------------------------
    function populateRegions() {
        const regions = new Set();
        SPICE_DATA.forEach(s => regions.add(s.region));
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

        cardsGrid.innerHTML = currentList.map((s, idx) => {
            const isSaved = window.Journey && window.Journey.isSaved ? window.Journey.isSaved('spice-' + s.id) : false;
            return `
            <div class="spc-card" data-id="${s.id}" style="animation-delay: ${idx * 0.04}s">
                <div class="spc-card-img-wrap">
                    <span class="spc-card-emoji">${s.emoji}</span>
                    <span class="spc-card-category">${s.category}</span>
                    <div class="spc-card-heat" title="Heat: ${s.heat}/10">${renderHeatDots(s.heat, 8)}</div>
                    <button class="spc-card-fav ${isSaved ? 'active' : ''}" data-fav="${s.id}" aria-label="Save ${s.name}">${isSaved ? '♥' : '♡'}</button>
                </div>
                <div class="spc-card-body">
                    <h3 class="spc-card-title">${s.name.split('(')[0].trim()}</h3>
                    <p class="spc-card-hindi">${s.hindi}</p>
                    <p class="spc-card-desc">${s.description.substring(0, 110)}…</p>
                    <div class="spc-card-meta">
                        <span class="spc-card-meta-item"><i class="fa-solid fa-location-dot"></i> ${s.region}</span>
                        <span class="spc-card-meta-item"><i class="fa-solid fa-fire"></i> ${s.heat}/10</span>
                        <span class="spc-card-meta-item"><i class="fa-solid fa-utensils"></i> ${s.uses[0]}</span>
                    </div>
                    <div class="spc-card-tags">
                        ${s.tags.slice(0, 3).map(t => `<span class="spc-tag">${t}</span>`).join('')}
                    </div>
                </div>
            </div>
            `;
        }).join('');

        // Card click → open detail
        cardsGrid.querySelectorAll('.spc-card').forEach(card => {
            card.addEventListener('click', () => openDetail(card.dataset.id));
        });

        // Fav toggle
        cardsGrid.querySelectorAll('[data-fav]').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const spiceId = btn.dataset.fav;
                const s = SPICE_DATA.find(x => x.id === spiceId);
                if (window.Journey && window.Journey.toggle && s) {
                    const saved = window.Journey.toggle({
                        id: 'spice-' + s.id,
                        explorerPage: 'spice-route-explorer/index.html',
                        title: s.name,
                        thumbnail: '',
                        category: 'spices'
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
    function openDetail(spiceId) {
        const s = SPICE_DATA.find(x => x.id === spiceId);
        if (!s) return;

        let activeTab = 'culinary';

        const tabButtons = SPC_TABS.map(tab => `
            <button class="spc-tab-btn ${tab.key === activeTab ? 'active' : ''}" data-tab="${tab.key}">
                <span>${tab.icon}</span> ${tab.label}
            </button>
        `).join('');

        detailPanel.innerHTML = `
            <div class="spc-detail-header">
                <span class="spc-detail-emoji">${s.emoji}</span>
                <button class="spc-detail-close" id="spc-detail-close" aria-label="Close">✕</button>
            </div>
            <div class="spc-detail-body">
                <h2 class="spc-detail-name">${s.name.split('(')[0].trim()}</h2>
                <p class="spc-detail-hindi">${s.hindi} • ${s.origin}</p>
                <div class="spc-detail-heat-bar">
                    <span class="spc-detail-heat-label">Heat Level:</span>
                    <div class="spc-detail-heat-dots">${renderHeatDots(s.heat, 12)}</div>
                    <span class="spc-detail-heat-label" style="color: var(--text-light); font-weight: 700;">${s.heat}/10</span>
                </div>
                <p class="spc-detail-desc">${s.description}</p>
                <div class="spc-detail-stats">
                    <div class="spc-detail-stat">
                        <span class="stat-icon"><i class="fa-solid fa-location-dot"></i></span>
                        <div>
                            <div class="spc-detail-stat-label">Origin</div>
                            <div class="spc-detail-stat-value">${s.origin}</div>
                        </div>
                    </div>
                    <div class="spc-detail-stat">
                        <span class="stat-icon"><i class="fa-solid fa-fire"></i></span>
                        <div>
                            <div class="spc-detail-stat-label">Heat</div>
                            <div class="spc-detail-stat-value">${getHeatLevel(s.heat).charAt(0).toUpperCase() + getHeatLevel(s.heat).slice(1)}</div>
                        </div>
                    </div>
                    <div class="spc-detail-stat">
                        <span class="stat-icon"><i class="fa-solid fa-utensils"></i></span>
                        <div>
                            <div class="spc-detail-stat-label">Category</div>
                            <div class="spc-detail-stat-value">${s.category.charAt(0).toUpperCase() + s.category.slice(1)}</div>
                        </div>
                    </div>
                    <div class="spc-detail-stat">
                        <span class="stat-icon"><i class="fa-solid fa-tongue"></i></span>
                        <div>
                            <div class="spc-detail-stat-label">Taste</div>
                            <div class="spc-detail-stat-value">${s.taste.split(',')[0]}</div>
                        </div>
                    </div>
                </div>
                <div class="spc-detail-tabs">${tabButtons}</div>

                <div class="spc-tab-panel active" data-panel="culinary">
                    <p class="spc-tab-text"><strong>Flavour Profile:</strong> ${s.taste}</p>
                    <p class="spc-tab-text"><strong>Common Uses:</strong></p>
                    <ul class="spc-tab-list">
                        ${s.uses.map(u => `<li><span class="check-icon"><i class="fa-regular fa-circle-check" style="color: var(--primary-gold);"></i></span>${u}</li>`).join('')}
                    </ul>
                </div>

                <div class="spc-tab-panel" data-panel="medicinal">
                    <p class="spc-tab-text">${s.name.split('(')[0].trim()} has been used in Ayurvedic medicine for millennia. In traditional Indian medicine, it is valued for its warming, digestive, and anti-inflammatory properties.</p>
                    <ul class="spc-tab-list">
                        <li><span class="check-icon"><i class="fa-solid fa-leaf" style="color: var(--primary-gold);"></i></span>Ayurvedic digestive aid</li>
                        <li><span class="check-icon"><i class="fa-solid fa-leaf" style="color: var(--primary-gold);"></i></span>Anti-inflammatory properties</li>
                        <li><span class="check-icon"><i class="fa-solid fa-leaf" style="color: var(--primary-gold);"></i></span>Traditional warming remedy</li>
                        <li><span class="check-icon"><i class="fa-solid fa-leaf" style="color: var(--primary-gold);"></i></span>Used in Chyawanprash preparations</li>
                    </ul>
                </div>

                <div class="spc-tab-panel" data-panel="history">
                    <p class="spc-tab-text">${s.history}</p>
                </div>

                <div class="spc-tab-panel" data-panel="pairings">
                    <p class="spc-tab-text"><strong>Perfect Pairings:</strong></p>
                    <div class="spc-pairing-grid">
                        ${s.pairs.map(p => `
                            <div class="spc-pairing-item">
                                <span>${p.split(' ')[0]}</span>
                                <span>${p.split(' ').slice(1).join(' ')}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;

        // Tab switching
        detailPanel.querySelectorAll('.spc-tab-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                activeTab = btn.dataset.tab;
                detailPanel.querySelectorAll('.spc-tab-btn').forEach(b => b.classList.toggle('active', b.dataset.tab === activeTab));
                detailPanel.querySelectorAll('.spc-tab-panel').forEach(p => p.classList.toggle('active', p.dataset.panel === activeTab));
            });
        });

        document.getElementById('spc-detail-close')?.addEventListener('click', closeDetail);

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
    const spcEscapeHandler = (e) => {
        if (e.key === 'Escape') closeDetail();
    };
    document.addEventListener('keydown', spcEscapeHandler);
    if (typeof window.iiRegisterKeydownHandler === 'function') {
        window.iiRegisterKeydownHandler(spcEscapeHandler);
    }

    // -----------------------------------------------------------------------
    // FILTERING & SORTING
    // -----------------------------------------------------------------------
    function applyFilters() {
        const query = (searchInput?.value || '').trim().toLowerCase();
        const heat = heatSelect?.value || 'all';
        const region = regionSelect?.value || 'all';

        let list = SPICE_DATA.filter(s => {
            const matchesCategory = activeCategory === 'all' || s.category === activeCategory;
            const matchesHeat = heat === 'all' || getHeatLevel(s.heat) === heat;
            const matchesRegion = region === 'all' || s.region === region;
            const matchesQuery = !query ||
                s.name.toLowerCase().includes(query) ||
                s.hindi.includes(query) ||
                s.region.toLowerCase().includes(query) ||
                s.description.toLowerCase().includes(query) ||
                s.uses.some(u => u.toLowerCase().includes(query)) ||
                s.tags.some(t => t.toLowerCase().includes(query));
            return matchesCategory && matchesHeat && matchesRegion && matchesQuery;
        });

        const sortMode = sortSelect?.value || 'popular';
        if (sortMode === 'az') {
            list.sort((a, b) => a.name.localeCompare(b.name));
        } else if (sortMode === 'heat') {
            list.sort((a, b) => b.heat - a.heat);
        } else if (sortMode === 'price') {
            // Sort by value: saffron > cardamom > clove > others
            const valueOrder = { 'kashmir-saffron': 10, 'cardamom': 8, 'vanilla': 9, 'clove': 6, 'cinnamon': 5, 'nutmeg': 4 };
            list.sort((a, b) => (valueOrder[b.id] || 1) - (valueOrder[a.id] || 1));
        }

        currentList = list;
        renderCards();
    }

    // Category tab switching
    if (categoryTabs) {
        categoryTabs.querySelectorAll('.spc-filter-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                activeCategory = btn.dataset.category;
                categoryTabs.querySelectorAll('.spc-filter-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                applyFilters();
            });
        });
    }

    // -----------------------------------------------------------------------
    // EVENT LISTENERS
    // -----------------------------------------------------------------------
    searchInput?.addEventListener('input', applyFilters);
    heatSelect?.addEventListener('change', applyFilters);
    regionSelect?.addEventListener('change', applyFilters);
    sortSelect?.addEventListener('change', applyFilters);

    resetBtn?.addEventListener('click', () => {
        if (searchInput) searchInput.value = '';
        activeCategory = 'all';
        if (heatSelect) heatSelect.value = 'all';
        if (regionSelect) regionSelect.value = 'all';
        if (sortSelect) sortSelect.value = 'popular';
        if (categoryTabs) {
            categoryTabs.querySelectorAll('.spc-filter-btn').forEach(b => b.classList.remove('active'));
            categoryTabs.querySelector('[data-category="all"]')?.classList.add('active');
        }
        applyFilters();
    });

    // -----------------------------------------------------------------------
    // INITIAL RENDER
    // -----------------------------------------------------------------------
    populateRegions();
    renderCards();

    if (window.Journey && window.Journey.registerSearchItems) {
        window.Journey.registerSearchItems('spice-route-explorer/index.html', SPICE_DATA.map(s => ({
            id: 'spice-' + s.id,
            title: s.name,
            description: s.description.substring(0, 100),
            link: 'frontend/spice-route-explorer/index.html'
        })));
    }
}

// ---------------------------------------------------------------------------
// 5. ROUTE DISPATCHER
// ---------------------------------------------------------------------------

document.addEventListener('app:route-changed', () => {
    initSiteChrome();
    const page = document.body.dataset.page;
    if (page === 'spices') {
        initSpicePage();
    }
});

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        if (document.body.dataset.page === 'spices') {
            initSpicePage();
        }
    });
} else {
    if (document.body.dataset.page === 'spices') {
        initSpicePage();
    }
}
