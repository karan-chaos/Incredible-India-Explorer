/* ==========================================================================
   CLASSICAL INSTRUMENTS EXPLORER — MAIN APPLICATION LOGIC
   Vanilla JavaScript. No external dependencies.
   Plugs into the shared Journey system via window.Journey.
   ========================================================================== */

// ---------------------------------------------------------------------------
// 1. INSTRUMENT DATA — 12 instruments across 4 families
// ---------------------------------------------------------------------------

const INSTRUMENTS_DATA = [
    // ---- STRING FAMILY ----
    {
        id: 'sitar',
        name: 'Sitar',
        family: 'string',
        familyLabel: 'String',
        origin: 'North India (Punjab / Delhi)',
        region: 'North India',
        era: '~13th Century',
        description: 'The sitar is perhaps the most globally recognised Indian instrument. A plucked string instrument with movable frets, it produces a shimmering, resonant sound through sympathetic strings that vibrate in harmony. It became the voice of Indian classical music worldwide through Ravi Shankar.',
        image: '../assets/sitar.jpg',
        detailImage: '../assets/sitar.jpg',
        history: 'The sitar evolved from the Persian Setar and was refined in the Mughal courts of the 13th–14th centuries. Amir Khusrau is sometimes credited with its invention, though this is debated. It gained global prominence when Ravi Shankar introduced it to Western audiences in the 1950s and 1960s, famously performing at the Monterey Pop Festival.',
        keyFigures: ['Ravi Shankar', 'Vilayat Khan', 'Nikhil Banerjee', 'Rahimuddin Khan', 'Imrat Khan'],
        parts: [
            { icon: '🎵', name: 'Tumba', desc: 'Gourd resonator at base' },
            { icon: '🎸', name: 'Dand', desc: 'Long hollow neck (fretted)' },
            { icon: '🎶', name: 'Taraf', desc: 'Sympathetic resonance strings' },
            { icon: '🎵', name: 'Palat', desc: 'Movable curved frets' },
            { icon: '🔊', name: 'Gulu', desc: 'Wooden neck joint' },
            { icon: '🎸', name: 'Majha', desc: 'Bridge for main strings' }
        ],
        highlights: [
            'Has 18–21 strings: 6–7 main strings + 11–13 sympathetic strings',
            'Played with a wire plectrum called mizrab worn on the right index finger',
            'Produces unique "jawari" buzzing sound from the wide flat bridge',
            'Ravi Shankar popularised it globally; collaborated with George Harrison',
            'Standard instrument for Hindustani classical music (raag performance)',
            'Made from seasoned tun wood, seasoned gourd, and bone inlay'
        ],
        tags: ['North India', 'Plucked String', 'Sympathetic Strings', 'Hindustani']
    },
    {
        id: 'veena',
        name: 'Veena',
        family: 'string',
        familyLabel: 'String',
        origin: 'South India (Tamil Nadu / Karnataka)',
        region: 'South India',
        era: '~2000+ Years',
        description: 'The Saraswati Veena is one of the oldest string instruments in Indian music, closely associated with Carnatic tradition. Unlike the sitar, it has no sympathetic strings, producing a warm, intimate tone that forms the backbone of South Indian classical concerts.',
        image: '../assets/veena.jpg',
        detailImage: '../assets/veena.jpg',
        history: 'The veena is referenced in the Rigveda and ancient Sanskrit texts as the divine instrument of Saraswati. The modern Saraswati Veena was developed in Thanjavur during the Nayak period (16th–18th century). It is essential to the Carnatic music tradition and symbolises learning and devotion in Hindu culture.',
        keyFigures: ['M. S. Subbulakshmi', 'S. Balachander', 'Chitti Babu', 'E. Gayathri', 'Chowdiah'],
        parts: [
            { icon: '🎵', name: 'Kudam', desc: 'Gourd resonator at the base' },
            { icon: '🎸', name: 'Dandi', desc: 'Carved jackwood neck (24 frets)' },
            { icon: '🎶', name: 'String Set', desc: '4 main + 3 drone strings' },
            { icon: '🎵', name: 'Duck Head', desc: 'Yali sculpture at neck junction' },
            { icon: '🔊', name: 'Sarani', desc: 'Side tuning pegs' },
            { icon: '🎸', name: 'Frets', desc: '24 brass frets (permanent)' }
        ],
        highlights: [
            'Has 4 main playing strings, 3 drone strings, and no sympathetic strings',
            'Features 24 fixed brass frets embedded in wax on the neck',
            'The head of the instrument is carved into a mythical Yali (dragon) shape',
            'Considered the divine instrument of Goddess Saraswati',
            'Unique among Indian instruments for its deep, resonant sustain',
            'Thanjavur Veena is the most prized variety, considered a masterpiece'
        ],
        tags: ['South India', 'Plucked String', 'Carnatic', 'Divine Instrument']
    },
    {
        id: 'santoor',
        name: 'Santoor',
        family: 'string',
        familyLabel: 'String',
        origin: 'Kashmir / Jammu & Kashmir',
        region: 'North India',
        era: '~4000 Years',
        description: 'The santoor is a trapezoid-shaped hammered dulcimer from Kashmir, one of the oldest known instruments in the world. It produces a bright, bell-like cascade of notes when struck with delicate wooden mallets called mezrabs. It entered Indian classical music only in the 20th century.',
        image: '../assets/santoor.jpg',
        detailImage: '../assets/santoor.jpg',
        history: 'The santoor traces its lineage to the ancient Persian Santur and Mesopotamian Hammurabi (~2000 BCE). It was adapted to Indian classical music by Shivkumar Sharma of Jammu, who is credited as the pioneer who brought this folk instrument into the Hindustani classical mainstream.',
        keyFigures: ['Shivkumar Sharma', 'Bhajan Sopori', 'Rahul Sharma', 'Satish Vyas'],
        parts: [
            { icon: '🎵', name: 'Dab', desc: 'Trapezoid walnut wood resonator box' },
            { icon: '🎸', name: 'Frets', desc: 'Bridges (moveable wooden bridges)' },
            { icon: '🎶', name: 'Wires', desc: '100 strings on 25 bridges' },
            { icon: '🎵', name: 'Mezrab', desc: 'Delicate wooden mallets for striking' },
            { icon: '🔊', name: 'Tuners', desc: 'Metal tuning pegs along the side' },
            { icon: '🎸', name: 'Sound Board', desc: 'Stretched membrane resonator' }
        ],
        highlights: [
            'Has approximately 100 metal strings stretched across 25 movable bridges',
            'Played with two delicate wooden mallets (mezrabs) — no plucking',
            'Shivkumar Sharma single-handedly introduced it to Hindustani classical music',
            'Used in the famous ensemble "Shiv-Hari" with flute legend Hariprasad Chaurasia',
            'Originated in Kashmir; historically played in Sufiana Mausiqi (Sufi music)',
            'One of the most difficult Indian instruments to master due to rapid stroke technique'
        ],
        tags: ['Kashmir', 'Hammered Dulcimer', 'Hindustani', 'Ancient']
    },
    {
        id: 'sarod',
        name: 'Sarod',
        family: 'string',
        familyLabel: 'String',
        origin: 'North India (Punjab / Afghanistan)',
        region: 'North India',
        era: '~18th Century',
        description: 'The sarod is a fretless, deep-voiced plucked string instrument known for its introspective, meditative tone. Its metal fingerboard allows for seamless sliding between notes (meend), producing a vocal quality that is unique among Indian string instruments.',
        image: '../assets/sarod.jpg',
        detailImage: '../assets/sarod.jpg',
        history: 'The sarod evolved from the Afghan Rubab brought to India during the Mughal period. It was refined by court musicians in the 18th century and became a primary instrument of the Senia and Gwalior gharanas. Its fretless design made it ideal for the wide melodic slides prized in Hindustani music.',
        keyFigures: ['Amjad Ali Khan', 'Rahimuddin Khan', 'Hafiz Ali Khan', 'Ali Akbar Khan', 'Vinayak Gore'],
        parts: [
            { icon: '🎵', name: 'Dabba', desc: 'Hollow metal resonator (skull-shaped)' },
            { icon: '🎸', name: 'Dand', desc: 'Bamboo neck (fretless)' },
            { icon: '🎶', name: 'Tabli', desc: 'Goatskin membrane on resonator' },
            { icon: '🎵', name: 'Safaa', desc: 'Polished metal fingerboard' },
            { icon: '🔊', name: 'Jawaari', desc: 'Bone/ivory bridge' },
            { icon: '🎸', name: 'Strings', desc: '4 main + 12 sympathetic strings' }
        ],
        highlights: [
            'Completely fretless — notes are produced by sliding along a smooth metal fingerboard',
            'Has 4 main playing strings, 2 drone strings, and 12 sympathetic strings',
            'The resonator is covered with goatskin membrane (unlike the gourd sitar)',
            'Amjad Ali Khan is considered its greatest living exponent',
            'Produces "meend" (gliding notes) unmatched by any fretted instrument',
            'Preferred instrument for Khayal and Dhrupad vocal-style compositions'
        ],
        tags: ['North India', 'Fretless String', 'Hindustani', 'Meditative']
    },

    // ---- PERCUSSION FAMILY ----
    {
        id: 'tabla',
        name: 'Tabla',
        family: 'percussion',
        familyLabel: 'Percussion',
        origin: 'North India (Delhi / Varanasi)',
        region: 'North India',
        era: '~18th Century',
        description: 'The tabla consists of a pair of hand drums that form the rhythmic backbone of Hindustani classical music. The smaller dayan (right, treble) and larger bayan (left, bass) produce an astonishing range of tones through intricate finger techniques.',
        image: '../assets/tabla.jpg',
        detailImage: '../assets/tabla.jpg',
        history: 'The tabla\'s origin is attributed to Amir Khusrau in the 13th century, though the modern form developed in the 18th century in Varanasi and Delhi. It gradually replaced the pakhawaj as the primary percussion instrument in North Indian classical music, becoming indispensable to vocal, instrumental, and dance performances.',
        keyFigures: ['Zakir Hussain', 'Kishan Maharaj', 'Alla Rakha', 'Sultan Khan', 'Akkalpur Valad'],
        parts: [
            { icon: '🥁', name: 'Dayan', desc: 'Right drum (tuned treble, tun wood)' },
            { icon: '🥁', name: 'Bayan', desc: 'Left drum (bass, metal/copper)' },
            { icon: '🎵', name: 'Gab', desc: 'Black paste circle on playing surface' },
            { icon: '🔊', name: 'Maidaan', desc: 'Central thin playing zone' },
            { icon: '🎵', name: 'Syahi', desc: 'Black iron filings paste (controls pitch)' },
            { icon: '🎸', name: 'Straps', desc: 'Woven leather tension straps' }
        ],
        highlights: [
            'The pair consists of a wooden treble drum and a metal bass drum',
            'The black spot (syahi/gab) is made of rice paste, iron filings, and flour — it controls pitch',
            'Played with 30+ distinct finger strokes, each with its own syllable name (bols)',
            'Zakir Hussain is the most internationally famous tabla player',
            'Nearly every Hindustani classical performance features tabla accompaniment',
            'The bass drum (bayan) pitch can be bent in real-time using palm pressure'
        ],
        tags: ['North India', 'Hand Drums', 'Hindustani', 'Rhythm']
    },
    {
        id: 'mridangam',
        name: 'Mridangam',
        family: 'percussion',
        familyLabel: 'Percussion',
        origin: 'South India (Tamil Nadu)',
        region: 'South India',
        era: '~2000+ Years',
        description: 'The mridangam is the primary rhythmic accompaniment in Carnatic music. A double-headed barrel drum carved from a single block of jackwood, it produces a rich palette of tones from its two heads — a treble side and a bass side — through sophisticated finger techniques.',
        image: '../assets/mridangam.jpg',
        detailImage: '../assets/mridangam.jpg',
        history: 'The mridangam is one of the oldest drums in India, mentioned in ancient Sangam literature and depicted in Chola bronzes. It has been the primary percussion of South Indian classical music for over two millennia. The Thanjavur and Puddukottai schools are the most prominent teaching lineages.',
        keyFigures: ['Palghat Mani Iyer', 'Umayalpuram K. Sivaraman', 'T.K. Murthy', 'Velukkutty Nair', 'Srimushnam V. Raja Rao'],
        parts: [
            { icon: '🥁', name: 'Valanthalai', desc: 'Treble head (right side, smaller)' },
            { icon: '🥁', name: 'Toppi', desc: 'Bass head (left side, larger)' },
            { icon: '🎵', name: 'Satham', desc: 'Rice + iron filings paste (treble spot)' },
            { icon: '🔊', name: 'Karanai', desc: 'Black tuning paste on bass side' },
            { icon: '🎵', name: 'Kapili', desc: 'Jackwood barrel body (single piece)' },
            { icon: '🎸', name: 'Vakku', desc: 'Leather straps + wooden dowels for tuning' }
        ],
        highlights: [
            'Carved from a single block of aged jackwood — the body is one piece',
            'Both heads have the distinctive black paste spots (satham and karanai)',
            'Used in every Carnatic classical concert as the primary percussion',
            'The "Puddukottai" and "Thanjavur" schools produce the finest mridangams',
            'Palghat Mani Iyer elevated it to a solo concert instrument',
            'Plays the same 16-beat Adi Tala cycle that structures all Carnatic compositions'
        ],
        tags: ['South India', 'Barrel Drum', 'Carnatic', 'Ancient']
    },
    {
        id: 'pakhawaj',
        name: 'Pakhawaj',
        family: 'percussion',
        familyLabel: 'Percussion',
        origin: 'North India (Uttar Pradesh)',
        region: 'North India',
        era: '~15th Century',
        description: 'The pakhawaj is a barrel-shaped, two-headed drum that predates the tabla in North Indian classical music. Its deep, majestic tone makes it the preferred percussion for Dhrupad — the oldest surviving form of Hindustani classical music.',
        image: '../assets/pakhawaj.jpg',
        detailImage: '../assets/pakhawaj.jpg',
        history: 'The pakhawaj evolved from the ancient Mridanga mentioned in the Vedas. It was the primary percussion of Hindustani music until the tabla displaced it in the 18th century. It survived through the Dhrupad tradition, which preserves the oldest forms of North Indian classical performance.',
        keyFigures: ['Dayal Shukla', 'Govindrao Rajopadhye', 'Sumant Madhav Kshirsagar', 'Zakir Hussain (occasionally)'],
        parts: [
            { icon: '🥁', name: 'Dagga', desc: 'Bass head (left side, leather)' },
            { icon: '🥁', name: 'Thoppi', desc: 'Treble head (right side)' },
            { icon: '🎵', name: 'Gab', desc: 'Black tuning paste on both heads' },
            { icon: '🔊', name: 'Dholak Shape', desc: 'Barrel-shaped wooden body' },
            { icon: '🎵', name: 'Leather Straps', desc: 'Tension leather straps around body' },
            { icon: '🎸', name: 'Wood Block', desc: 'Internal tuning blocks between straps' }
        ],
        highlights: [
            'The oldest surviving drum in Hindustani classical music tradition',
            'Preferred percussion for Dhrupad and Dhamar (ancient vocal forms)',
            'Has a deeper, more resonant tone compared to the tabla',
            'Played while sitting cross-legged, resting across the lap',
            'Both heads have the characteristic black tuning paste (similar to tabla)',
            'Slowly gaining renewed interest through fusion and world music collaborations'
        ],
        tags: ['North India', 'Barrel Drum', 'Dhrupad', 'Ancient']
    },

    // ---- WIND FAMILY ----
    {
        id: 'bansuri',
        name: 'Bansuri',
        family: 'wind',
        familyLabel: 'Wind',
        origin: 'North India / Pan-Indian',
        region: 'Pan-India',
        era: '~3000+ Years',
        description: 'The bansuri is a bamboo transverse flute that is one of the simplest yet most expressive Indian instruments. Associated with Lord Krishna, its pure, breathy tone can evoke deep devotion and lyrical beauty. It is used across both Hindustani and Carnatic traditions.',
        image: '../assets/bansuri.jpg',
        detailImage: '../assets/bansuri.jpg',
        history: 'The bansuri is mentioned in the Vedas and is the instrument of Lord Krishna. The ancient "venu" was the original form, used in temple rituals. Pannalal Ghosh pioneered its use in classical music in the 20th century by adding a seventh hole and adapting it for raag performance.',
        keyFigures: ['Hariprasad Chaurasia', 'Pannalal Ghosh', 'Rajendra Prasanna', 'Kadri Gopalnath', 'Ronu Majumdar'],
        parts: [
            { icon: '🎵', name: 'Blow Hole', desc: 'Embouchure hole near the closed end' },
            { icon: '🎵', name: 'Finger Holes', desc: '6–7 holes for pitch control' },
            { icon: '🎶', name: 'Body', desc: 'Hollow bamboo shaft (seasoned)' },
            { icon: '🎵', name: 'Lower End', desc: 'Open bore end (resonator)' },
            { icon: '🔊', name: 'Tuning Ring', desc: 'Thread/wax wraps for fine-tuning' },
            { icon: '🎸', name: 'Nodes', desc: 'Natural bamboo nodes (add warmth)' }
        ],
        highlights: [
            'Made from a single piece of bamboo — no metal, no keys, no reed',
            'Has 6 or 7 finger holes; no mechanical keys like the Western flute',
            'The instrument of Lord Krishna in Hindu mythology',
            'Pannalal Ghosh added the 7th hole to enable full raag performance',
            'Hariprasad Chaurasia is the most celebrated living bansuri maestro',
            'Different bamboo species produce different tonal qualities (bans, beech, reed)'
        ],
        tags: ['Pan-India', 'Bamboo Flute', 'Hindustani & Carnatic', 'Divine']
    },
    {
        id: 'shehnai',
        name: 'Shehnai',
        family: 'wind',
        familyLabel: 'Wind',
        origin: 'North India (Varanasi)',
        region: 'North India',
        era: '~15th Century',
        description: 'The shehnai is a double-reed wind instrument with a piercing, auspicious tone. Its sound is considered sacred and is virtually inseparable from Indian weddings and temple ceremonies. In classical music, it produces deeply emotional and expressive raag performances.',
        image: '../assets/shehnai.jpg',
        detailImage: '../assets/shehnai.jpg',
        history: 'The shehnai derives from the ancient Sanskrit "sushira" (hollow wind instrument) and was played in Mughal courts. Ustad Bismillah Khan single-handedly elevated it from a temple/ceremonial instrument to a classical concert instrument, performing at the Red Fort on India\'s Independence Day in 1947.',
        keyFigures: ['Bismillah Khan', 'Salamat Ali Khan', 'Ali Ahmed Hussain', 'Daya Shankar', 'K L Saigal\'s accompanist'],
        parts: [
            { icon: '🎵', name: 'Jali', desc: 'Flared brass bell (amplifier)' },
            { icon: '🎶', name: 'Nal', desc: 'Conical wooden body with 7 finger holes' },
            { icon: '🎵', name: 'Pani', desc: 'Double reed (made from Indian reed grass)' },
            { icon: '🔊', name: 'Kharne', desc: 'Wooden cylindrical reed holder' },
            { icon: '🎵', name: 'Surahi', desc: 'Metal tuning slides' },
            { icon: '🎸', name: 'Ring Joint', desc: 'Brass connectors between sections' }
        ],
        highlights: [
            'Bismillah Khan performed at the Red Fort on India\'s Independence Day (Aug 15, 1947)',
            'Considered highly auspicious — almost mandatory at Hindu and Muslim weddings',
            'Uses a double reed (like the oboe), producing a distinctive nasal, piercing tone',
            'The brass bell at the end amplifies and projects the sound',
            'Varanasi is considered the spiritual home of shehnai performance',
            'One of the few Indian instruments used in both Hindustani classical and folk music'
        ],
        tags: ['North India', 'Double Reed', 'Hindustani', 'Auspicious']
    },
    {
        id: 'nadaswaram',
        name: 'Nadaswaram',
        family: 'wind',
        familyLabel: 'Wind',
        origin: 'South India (Tamil Nadu)',
        region: 'South India',
        era: '~2000+ Years',
        description: 'The nadaswaram (nagaswaram) is one of the loudest non-brass acoustic instruments in the world. A double-reed wind instrument from South India, it is essential to Carnatic music and Tamil temple traditions, its powerful tone carrying across vast open spaces.',
        image: '../assets/nadaswaram.jpg',
        detailImage: '../assets/nadaswaram.jpg',
        history: 'The nadaswaram is mentioned in Sangam literature and temple inscriptions dating back over 2000 years. It was historically played in Shaivite temples and at royal coronations. The combination of nadaswaram with thavil (drum) is considered the most auspicious in Tamil culture.',
        keyFigures: ['T.N. Seshagopalan', 'Sheik Chinna Moulana', 'Maharajapuram Viswanathan', 'Haridwaramangalam A. K. Palanisamy'],
        parts: [
            { icon: '🎵', name: 'Valampuri', desc: 'Flared bell end (natural curve, aatrical)' },
            { icon: '🎶', name: 'Suri', desc: 'Conical wooden body (teak or african wood)' },
            { icon: '🎵', name: 'Ori', desc: 'Double reed mouthpiece (metal-capped)' },
            { icon: '🔊', name: 'Kizh', desc: 'Metal joint ring between sections' },
            { icon: '🎵', name: 'Finger Holes', desc: '7 holes (plus 2 side holes)' },
            { icon: '🎸', name: 'Thattu', desc: 'Tuning stopper (controls pitch range)' }
        ],
        highlights: [
            'One of the loudest non-brass acoustic instruments in the world',
            'Over 2 feet long — significantly larger than the North Indian shehnai',
            'Considered the most auspicious instrument in Tamil Nadu',
            'Always played with the thavil (barrel drum) as accompaniment',
            'Temple authorities historically held hereditary rights to play it',
            'Can produce 40+ distinct tones across its range (2.5 octaves)'
        ],
        tags: ['South India', 'Double Reed', 'Carnatic', 'Loud']
    },

    // ---- OTHER FAMILY ----
    {
        id: 'tanpura',
        name: 'Tanpura',
        family: 'other',
        familyLabel: 'Drone',
        origin: 'Pan-Indian',
        region: 'Pan-India',
        era: '~2000+ Years',
        description: 'The tanpura (tambura) is the drone instrument that provides the harmonic foundation for all Indian classical music. While it plays no melody, its four strings create a rich, shimmering drone that establishes the tonal centre (sa) for the performer. It is the soul of Indian music.',
        image: '../assets/tanpura.jpg',
        detailImage: '../assets/tanpura.jpg',
        history: 'The tanpura is the most ancient Indian instrument, depicted in temple sculptures dating back to the 2nd century BCE. It exists in virtually every classical performance as the drone. The Thanjavur tradition of tanpura-making is famous, and the instrument is considered sacred — it is never placed on the ground.',
        keyFigures: ['K. Srinivasan', 'Thanjavur maker tradition', 'Umayalpuram Brothers', 'Mumbai-style makers'],
        parts: [
            { icon: '🎵', name: 'Tumba', desc: 'Large gourd resonator' },
            { icon: '🎶', name: 'Dand', desc: 'Long fretless wooden neck' },
            { icon: '🎵', name: 'Jawaari', desc: 'Curved wide bridge (creates buzzing)' },
            { icon: '🔊', name: 'Strings', desc: '4 brass strings (no frets)' },
            { icon: '🎵', name: 'Kunti', desc: 'Wooden tuning pegs (4)' },
            { icon: '🎸', name: 'Tabli', desc: 'Covered resonator face (skin/gourd)' }
        ],
        highlights: [
            'Plays no melody — only produces a continuous four-note drone (Sa-Pa-Sa-Sa)',
            'The wide flat bridge (jawaari) creates the characteristic buzzing "beyond the note"',
            'Every Indian classical performance requires a tanpura drone',
            'Electronic tanpuras (shruti boxes) are now commonly used as alternatives',
            'The Thanjavur variety with the gourd resonator is considered the finest',
            'Traditionally considered sacred and is treated with ritual respect'
        ],
        tags: ['Pan-India', 'Drone', 'Hindustani & Carnatic', 'Sacred']
    },
    {
        id: 'morsing',
        name: 'Morsing',
        family: 'other',
        familyLabel: 'Percussion',
        origin: 'South India (Tamil Nadu / Karnataka)',
        region: 'South India',
        era: '~300+ Years',
        description: 'The morsing (morchang) is a jaw harp / mouth harp — a small percussion instrument held against the teeth or lips while plucked. The player\'s mouth acts as a resonating chamber, and by changing the shape of the mouth cavity, different overtones are produced.',
        image: '../assets/morsing.jpg',
        detailImage: '../assets/morsing.jpg',
        history: 'The morsing arrived in India from the Middle East and became popular in South Indian Carnatic music. It serves as a secondary percussion instrument in concerts, typically playing along with the mridangam. The Rajasthani morchang has a longer folk tradition.',
        keyFigures: ['Hariharan', 'Giridhar Udupa', 'J.V. Raghavulu', 'V.K. Raman'],
        parts: [
            { icon: '🎵', name: 'Metal Frame', desc: 'Horseshoe-shaped metal body' },
            { icon: '🎶', name: 'Tongue', desc: 'Flexible metal reed (the vibrating element)' },
            { icon: '🎵', name: 'String', desc: 'Attached pull string for plucking' },
            { icon: '🔊', name: 'Teeth Rest', desc: 'Wooden/ivory piece for biting' },
            { icon: '🎵', name: 'Curved Frame', desc: 'Body shaped to fit against the face' },
            { icon: '🎸', name: 'Resonator', desc: 'Player\'s mouth cavity acts as resonator' }
        ],
        highlights: [
            'The player\'s mouth cavity acts as the resonating chamber — unique among instruments',
            'Produces rhythmic overtones by changing mouth shape while plucking',
            'Typically accompanies the mridangam in Carnatic concerts',
            'One of the smallest instruments in Indian classical music',
            'Also known as "morchang" in Rajasthan with a folk music tradition',
            'Can produce surprising volume and rhythmic complexity for its tiny size'
        ],
        tags: ['South India', 'Jaw Harp', 'Carnatic', 'Micro Instrument']
    }
];

// ---------------------------------------------------------------------------
// 2. TAB DEFINITIONS
// ---------------------------------------------------------------------------

const INST_TABS = [
    { key: 'history', label: 'History', icon: '<i class="fa-solid fa-landmark" style="color: var(--primary-gold);"></i>' },
    { key: 'construction', label: 'Construction', icon: '<i class="fa-solid fa-screwdriver-wrench" style="color: var(--primary-gold);"></i>' },
    { key: 'highlights', label: 'Highlights', icon: '<i class="fa-solid fa-star" style="color: var(--primary-gold);"></i>' },
    { key: 'keyFigures', label: 'Key Figures', icon: '<i class="fa-solid fa-user" style="color: var(--primary-gold);"></i>' }
];

// ---------------------------------------------------------------------------
// 3. INIT FUNCTION
// ---------------------------------------------------------------------------

function initInstrumentsPage() {
    const cardsGrid = document.getElementById('inst-cards-grid');
    const detailPanel = document.getElementById('inst-detail-panel');
    const modalBackdrop = document.getElementById('inst-modal-backdrop');
    const searchInput = document.getElementById('inst-search-input');
    const familyTabs = document.getElementById('inst-family-tabs');
    const sortSelect = document.getElementById('inst-sort-select');
    const resetBtn = document.getElementById('inst-reset-btn');

    if (!cardsGrid || !detailPanel) return;

    let detailPanelFocusTrap = null;
    let currentList = [...INSTRUMENTS_DATA];
    let activeFamily = 'all';

    // -----------------------------------------------------------------------
    // RENDER CARDS
    // -----------------------------------------------------------------------
    function renderCards() {
        if (!currentList.length) {
            cardsGrid.innerHTML = '<p class="inst-no-results">No instruments match your filters. Try resetting them.</p>';
            return;
        }

        cardsGrid.innerHTML = currentList.map((d, idx) => {
            const isSaved = window.Journey && window.Journey.isSaved ? window.Journey.isSaved('instrument-' + d.id) : false;
            return `
            <div class="inst-card" data-id="${d.id}" style="animation-delay: ${idx * 0.06}s">
                <div class="inst-card-img-wrap">
                    <img src="${d.image}" alt="${d.name} instrument" loading="lazy">
                    <div class="inst-card-img-overlay"></div>
                    <span class="inst-card-badge family-${d.family}">${d.familyLabel}</span>
                    <button class="inst-card-fav ${isSaved ? 'active' : ''}" data-fav="${d.id}" aria-label="Save ${d.name}">${isSaved ? '♥' : '♡'}</button>
                    <div class="inst-card-title">${d.name}</div>
                </div>
                <div class="inst-card-body">
                    <p class="inst-card-desc">${d.description.substring(0, 130)}…</p>
                    <div class="inst-card-meta">
                        <span class="inst-card-meta-item"><i class="fa-solid fa-location-dot"></i> ${d.region}</span>
                        <span class="inst-card-meta-item"><i class="fa-solid fa-clock"></i> ${d.era}</span>
                        <span class="inst-card-meta-item"><i class="fa-solid fa-guitar"></i> ${d.familyLabel}</span>
                    </div>
                    <div class="inst-card-tags">
                        ${d.tags.map(t => `<span class="inst-tag">${t}</span>`).join('')}
                    </div>
                </div>
            </div>
            `;
        }).join('');

        // Card click → open detail
        cardsGrid.querySelectorAll('.inst-card').forEach(card => {
            card.addEventListener('click', () => openDetail(card.dataset.id));
        });

        // Fav button toggle
        cardsGrid.querySelectorAll('[data-fav]').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const instId = btn.dataset.fav;
                const d = INSTRUMENTS_DATA.find(x => x.id === instId);
                if (window.Journey && window.Journey.toggle && d) {
                    const saved = window.Journey.toggle({
                        id: 'instrument-' + d.id,
                        explorerPage: 'classical-instruments-explorer/index.html',
                        title: d.name + ' Instrument',
                        thumbnail: d.image,
                        category: 'classical-instruments'
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
    function openDetail(instId) {
        const d = INSTRUMENTS_DATA.find(x => x.id === instId);
        if (!d) return;

        let activeTab = 'history';

        const tabButtons = INST_TABS.map(tab => `
            <button class="inst-tab-btn ${tab.key === activeTab ? 'active' : ''}" data-tab="${tab.key}">
                <span>${tab.icon}</span> ${tab.label}
            </button>
        `).join('');

        detailPanel.innerHTML = `
            <div class="inst-detail-hero">
                <img src="${d.detailImage}" alt="${d.name} instrument">
                <div class="inst-detail-hero-overlay"></div>
                <button class="inst-detail-close" id="inst-detail-close" aria-label="Close">✕</button>
            </div>
            <div class="inst-detail-body">
                <h2 class="inst-detail-name">${d.name}</h2>
                <p class="inst-detail-origin"><i class="fa-solid fa-location-dot"></i> ${d.origin} • ${d.familyLabel} Family</p>
                <p class="inst-detail-desc">${d.description}</p>
                <div class="inst-detail-stats">
                    <div class="inst-detail-stat">
                        <span class="stat-icon"><i class="fa-solid fa-clock"></i></span>
                        <div>
                            <div class="inst-detail-stat-label">Age</div>
                            <div class="inst-detail-stat-value">${d.era}</div>
                        </div>
                    </div>
                    <div class="inst-detail-stat">
                        <span class="stat-icon"><i class="fa-solid fa-guitar"></i></span>
                        <div>
                            <div class="inst-detail-stat-label">Family</div>
                            <div class="inst-detail-stat-value">${d.familyLabel}</div>
                        </div>
                    </div>
                    <div class="inst-detail-stat">
                        <span class="stat-icon"><i class="fa-solid fa-earth-asia"></i></span>
                        <div>
                            <div class="inst-detail-stat-label">Region</div>
                            <div class="inst-detail-stat-value">${d.region}</div>
                        </div>
                    </div>
                    <div class="inst-detail-stat">
                        <span class="stat-icon"><i class="fa-solid fa-users"></i></span>
                        <div>
                            <div class="inst-detail-stat-label">Tradition</div>
                            <div class="inst-detail-stat-value">${d.tags[d.tags.length - 1]}</div>
                        </div>
                    </div>
                </div>
                <div class="inst-detail-tabs">${tabButtons}</div>

                <!-- History Tab -->
                <div class="inst-tab-panel active" data-panel="history">
                    <p class="inst-tab-text">${d.history}</p>
                </div>

                <!-- Construction Tab -->
                <div class="inst-tab-panel" data-panel="construction">
                    <p class="inst-tab-text">Key components of the ${d.name}:</p>
                    <div class="inst-parts-grid">
                        ${d.parts.map(p => `
                            <div class="inst-part-item">
                                <div class="inst-part-icon">${p.icon}</div>
                                <div class="inst-part-name">${p.name}</div>
                                <div class="inst-part-desc">${p.desc}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <!-- Highlights Tab -->
                <div class="inst-tab-panel" data-panel="highlights">
                    <ul class="inst-tab-list">
                        ${d.highlights.map(h => `<li><span class="check-icon"><i class="fa-regular fa-circle-check" style="color: var(--primary-gold);"></i></span>${h}</li>`).join('')}
                    </ul>
                </div>

                <!-- Key Figures Tab -->
                <div class="inst-tab-panel" data-panel="keyFigures">
                    <p class="inst-tab-text">Notable masters and gurus of the ${d.name}:</p>
                    <ul class="inst-tab-list">
                        ${d.keyFigures.map(f => `<li><span class="check-icon"><i class="fa-solid fa-user" style="color: var(--primary-gold);"></i></span>${f}</li>`).join('')}
                    </ul>
                </div>
            </div>
        `;

        // Tab switching
        detailPanel.querySelectorAll('.inst-tab-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                activeTab = btn.dataset.tab;
                detailPanel.querySelectorAll('.inst-tab-btn').forEach(b => b.classList.toggle('active', b.dataset.tab === activeTab));
                detailPanel.querySelectorAll('.inst-tab-panel').forEach(p => p.classList.toggle('active', p.dataset.panel === activeTab));
            });
        });

        document.getElementById('inst-detail-close')?.addEventListener('click', closeDetail);

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
    const instEscapeHandler = (e) => {
        if (e.key === 'Escape') closeDetail();
    };
    document.addEventListener('keydown', instEscapeHandler);
    if (typeof window.iiRegisterKeydownHandler === 'function') {
        window.iiRegisterKeydownHandler(instEscapeHandler);
    }

    // -----------------------------------------------------------------------
    // FILTERING & SORTING
    // -----------------------------------------------------------------------
    function applyFilters() {
        const query = (searchInput?.value || '').trim().toLowerCase();

        let list = INSTRUMENTS_DATA.filter(d => {
            const matchesFamily = activeFamily === 'all' || d.family === activeFamily;
            const matchesQuery = !query ||
                d.name.toLowerCase().includes(query) ||
                d.origin.toLowerCase().includes(query) ||
                d.region.toLowerCase().includes(query) ||
                d.description.toLowerCase().includes(query) ||
                d.tags.some(t => t.toLowerCase().includes(query));
            return matchesFamily && matchesQuery;
        });

        const sortMode = sortSelect?.value || 'popular';
        if (sortMode === 'az') {
            list.sort((a, b) => a.name.localeCompare(b.name));
        } else if (sortMode === 'family') {
            const familyOrder = { string: 0, percussion: 1, wind: 2, other: 3 };
            list.sort((a, b) => (familyOrder[a.family] || 0) - (familyOrder[b.family] || 0));
        }

        currentList = list;
        renderCards();
    }

    // Family tab switching
    if (familyTabs) {
        familyTabs.querySelectorAll('.inst-filter-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                activeFamily = btn.dataset.family;
                familyTabs.querySelectorAll('.inst-filter-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                applyFilters();
            });
        });
    }

    // -----------------------------------------------------------------------
    // EVENT LISTENERS
    // -----------------------------------------------------------------------
    searchInput?.addEventListener('input', applyFilters);
    sortSelect?.addEventListener('change', applyFilters);

    resetBtn?.addEventListener('click', () => {
        if (searchInput) searchInput.value = '';
        activeFamily = 'all';
        if (sortSelect) sortSelect.value = 'popular';
        if (familyTabs) {
            familyTabs.querySelectorAll('.inst-filter-btn').forEach(b => b.classList.remove('active'));
            familyTabs.querySelector('[data-family="all"]')?.classList.add('active');
        }
        applyFilters();
    });

    // -----------------------------------------------------------------------
    // INITIAL RENDER & JOURNEY REGISTRATION
    // -----------------------------------------------------------------------
    renderCards();

    if (window.Journey && window.Journey.registerSearchItems) {
        window.Journey.registerSearchItems('classical-instruments-explorer/index.html', INSTRUMENTS_DATA.map(d => ({
            id: 'instrument-' + d.id,
            title: d.name + ' Instrument',
            description: d.description.substring(0, 100),
            link: 'frontend/classical-instruments-explorer/index.html'
        })));
    }
}

// ---------------------------------------------------------------------------
// 4. ROUTE DISPATCHER
// ---------------------------------------------------------------------------

document.addEventListener('app:route-changed', () => {
    initSiteChrome();
    const page = document.body.dataset.page;
    if (page === 'instruments') {
        initInstrumentsPage();
    }
});

// Also support standalone (non-SPA) loading
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        if (document.body.dataset.page === 'instruments') {
            initInstrumentsPage();
        }
    });
} else {
    if (document.body.dataset.page === 'instruments') {
        initInstrumentsPage();
    }
}
