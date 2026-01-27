// js/data.js

const travelData = {

    // ROW 1
    "delhi": {
        name: "Delhi",
        tagline: "The Heart of India",
        heroImage: "images/delhi-parade.jpg",
        events: [
            { title: "Beating Retreat", date: "29th Jan", img: "images/delhi-event1.jpg" },
            { title: "Surajkund Mela", date: "Feb 2nd", img: "images/delhi-event2.jpg" },
            { title: "Mughal Garden Open", date: "31st Jan", img: "images/delhi-event3.jpg" },
            { title: "Food Walk", date: "Sunday", img: "images/delhi-event4.jpg" },
            { title: "Sufi Night", date: "Friday", img: "images/delhi-event5.jpg" }
        ],
        story: {
            heading: "A City of Cities",
            content: "Delhi is not a single city but a collection of many cities that have risen and fallen over thousands of years. Its story begins with Indraprastha, the legendary capital of the Pandavas mentioned in the Mahabharata. Over centuries, powerful dynasties such as the Delhi Sultanate and the Mughal Empire shaped its identity. The Qutub Minar symbolizes the beginning of Islamic rule, while Humayun’s Tomb introduced Persian garden architecture to India. Shah Jahan built Shahjahanabad, today’s Old Delhi, crowned by the majestic Red Fort and Jama Masjid. Later, the British created New Delhi with grand avenues and monuments like Rashtrapati Bhavan and India Gate. Today, Delhi is a living museum where ancient civilizations, Mughal glory, colonial legacy, and modern democracy exist together."
        },
        places: [
            { name: "India Gate", img: "images/delhi-1.jpg" },
            { name: "Red Fort", img: "images/delhi-2.jpg" },
            { name: "Qutub Minar", img: "images/delhi-3.jpg" },
            { name: "Humayun's Tomb", img: "images/delhi-4.jpg" },
            { name: "Lotus Temple", img: "images/delhi-5.jpg" },
            { name: "Akshardham", img: "images/delhi-6.jpg" },
            { name: "Chandni Chowk", img: "images/delhi-7.jpg" },
            { name: "Hauz Khas", img: "images/delhi-8.jpg" }
        ]
    },

    "kutch": {
        name: "Rann of Kutch",
        tagline: "The White Desert",
        heroImage: "images/rann-utsav.jpg",
        events: [
            { title: "Full Moon Night", date: "24-26 Jan", img: "images/kutch-event1.jpg" },
            { title: "Kite Flying", date: "Daily", img: "images/kutch-event2.jpg" },
            { title: "Folk Dance", date: "Every Night", img: "images/kutch-event3.jpg" },
            { title: "Camel Safari", date: "Sunset", img: "images/kutch-event4.jpg" }
        ],
        story: {
            heading: "Where Earth Meets Sky",
            content: `Rann Utsav Tent City, located near Dholavira in Gujarat, is set within one of the most ecologically and culturally rich landscapes in the world. This remarkable region offers an extraordinary blend of pristine natural beauty, deep-rooted cultural heritage, and vibrant traditional celebrations. Held annually, the Rann Utsav Festival beautifully captures this spirit, presenting a colourful showcase of music, dance, art, and festive experiences that highlight the grandeur of this unique destination. Under the moonlit sky, the White Desert transforms into a surreal wonderland, creating an unforgettable spectacle of nature’s magic.

The White Rann is renowned for its lively cultural expressions, including folk dances, traditional music, and exquisite handicrafts. Visitors can discover fine textiles, intricate embroidery, bandhani sarees, traditional jewellery, and detailed mirror work that reflect Gujarat’s rich artistic legacy. Guests are warmly welcomed by local communities, whose traditions and way of life remain closely connected to the region’s natural surroundings.

Amitabh Bachchan, the brand ambassador of Gujarat Tourism, famously says in his iconic campaign, “Kutch Nahin Dekha Toh Kuch Nahi Dekha”, meaning “If you haven’t seen it, you haven’t truly seen anything.” This powerful message perfectly conveys the unmatched charm of the Rann Utsav Festival and the timeless beauty of this extraordinary destination.`
        },
        places: [
            { name: "White Desert", img: "images/kutch-1.jpg" },
            { name: "Kalo Dungar", img: "images/kutch-2.jpg" },
            { name: "Bhujodi", img: "images/kutch-3.jpg" },
            { name: "Aina Mahal", img: "images/kutch-4.jpg" },
            { name: "Mandvi Beach", img: "images/kutch-5.jpg" },
            { name: "Prag Mahal", img: "images/kutch-6.jpg" },
            { name: "Dholavira", img: "images/kutch-7.jpg" },
            { name: "Narayan Sarovar", img: "images/kutch-8.jpg" }
        ]
    },

    "auli": {
        name: "Auli",
        tagline: "Ski Capital of India",
        heroImage: "images/auli-ski.jpg",
        events: [
            { title: "Ski Championship", date: "27th Jan", img: "images/auli-event1.jpg" },
            { title: "Snow Trek", date: "Daily", img: "images/auli-event2.jpg" },
            { title: "Bonfire Night", date: "Weekend", img: "images/auli-event3.jpg" }
        ],
        story: {
            heading: "Himalayan Paradise",
            content: "Auli was once a quiet Himalayan pastureland used by shepherds. Its strategic slopes were later developed by the Indian government to train soldiers for mountain warfare. Over time, Auli emerged as India’s premier skiing destination. Surrounded by oak forests and overlooking peaks like Nanda Devi, it offers both adventure and serenity, preserving the untouched charm of the Himalayas."
        },
        places: [
            { name: "Auli Artificial Lake", img: "images/auli-1.jpg" },
            { name: "Auli Ropeway", img: "images/auli-2.jpg" },
            { name: "Gorson Bugyal", img: "images/auli-3.jpg" },
            { name: "Joshimath", img: "images/auli-4.jpg" },
            { name: "Nanda Devi Park", img: "images/auli-5.jpg" },
            { name: "Chattrakund", img: "images/auli-6.jpg" },
            { name: "Chenab Lake", img: "images/auli-7.jpg" },
            { name: "Kwani Bugyal", img: "images/auli-8.jpg" }
        ]
    },

    "jaipur": {
        name: "Jaipur",
        tagline: "The Pink City",
        heroImage: "images/jaipur-lit.jpg",
        events: [
            { title: "Literature Fest", date: "Ongoing", img: "images/jaipur-event1.jpg" },
            { title: "Polo Match", date: "Sunday", img: "images/jaipur-event2.jpg" },
            { title: "Light & Sound", date: "Daily", img: "images/jaipur-event3.jpg" },
            { title: "Heritage Walk", date: "Morning", img: "images/jaipur-event4.jpg" }
        ],
        story: {
            heading: "Royal Grandeur",
            content: "Founded in 1727 by Maharaja Sawai Jai Singh II, Jaipur was India’s first planned city based on Vastu Shastra. It became known as the Pink City when its buildings were painted pink in 1876 to welcome Prince Albert. Jaipur reflects Rajput pride and power through grand forts, royal palaces, and vibrant markets that still preserve traditional craftsmanship."
        },
        places: [
            { name: "Hawa Mahal", img: "images/jaipur-1.jpg" },
            { name: "Amber Fort", img: "images/jaipur-2.jpg" },
            { name: "City Palace", img: "images/jaipur-3.jpg" },
            { name: "Jantar Mantar", img: "images/jaipur-4.jpg" },
            { name: "Nahargarh Fort", img: "images/jaipur-5.jpg" },
            { name: "Albert Hall", img: "images/jaipur-6.jpg" },
            { name: "Jal Mahal", img: "images/jaipur-7.jpg" },
            { name: "Bapu Bazaar", img: "images/jaipur-8.jpg" }
        ]
    }

    // Continue?  
// js/data.js  (PART 2 CONTINUATION)

    "lakshadweep": {
        name: "Lakshadweep",
        tagline: "India's Coral Paradise",
        heroImage: "images/lakshadweep.jpg",
        events: [
            { title: "Scuba Diving", date: "Daily", img: "images/lak-event1.jpg" },
            { title: "Island Hopping", date: "Weekend", img: "images/lak-event2.jpg" },
            { title: "Seafood Fest", date: "Friday", img: "images/lak-event3.jpg" }
        ],
        story: {
            heading: "Tropical Bliss",
            content: "Lakshadweep, meaning 'a hundred thousand islands', has been known to sailors and traders since ancient times. Arab traders were among the earliest settlers, and their influence is still visible in the culture, language, and traditions of the islands. These coral islands were once important stopovers in the maritime trade routes connecting India with the Middle East and Africa. Isolated from the mainland, Lakshadweep evolved into a pristine ecosystem where nature remains largely untouched. Today, it is celebrated for its turquoise lagoons, coral reefs, and marine biodiversity, offering a rare glimpse into a tropical paradise preserved by time."
        },
        places: [
            { name: "Agatti Island", img: "images/lak-1.jpg" },
            { name: "Minicoy Island", img: "images/lak-2.jpg" },
            { name: "Bangaram", img: "images/lak-3.jpg" },
            { name: "Kavaratti", img: "images/lak-4.jpg" },
            { name: "Kalpeni", img: "images/lak-5.jpg" },
            { name: "Marine Museum", img: "images/lak-6.jpg" },
            { name: "Kadmat", img: "images/lak-7.jpg" },
            { name: "Lighthouse", img: "images/lak-8.jpg" }
        ]
    },

    "hampi": {
        name: "Hampi",
        tagline: "City of Ruins",
        heroImage: "images/hampi.jpg",
        events: [
            { title: "Hampi Utsav", date: "Feb 2026", img: "images/hampi-event1.jpg" },
            { title: "Coracle Ride", date: "Daily", img: "images/hampi-event2.jpg" },
            { title: "Sunset Jam", date: "Evening", img: "images/hampi-event3.jpg" }
        ],
        story: {
            heading: "The Lost Empire",
            content: "Hampi was the glorious capital of the Vijayanagara Empire in the 14th to 16th centuries, one of the richest and most powerful empires in Indian history. Foreign travelers like Domingo Paes described it as grander than Rome, filled with bustling markets, temples, and palaces. It was a center of art, architecture, and international trade. In 1565, after the Battle of Talikota, the city was invaded and destroyed, leading to its abandonment. Today, its ruins stand as silent witnesses to a once-thriving civilization and remain one of the finest examples of medieval Indian architecture."
        },
        places: [
            { name: "Virupaksha Temple", img: "images/hampi-1.jpg" },
            { name: "Vithala Temple", img: "images/hampi-2.jpg" },
            { name: "Stone Chariot", img: "images/hampi-3.jpg" },
            { name: "Lotus Mahal", img: "images/hampi-4.jpg" },
            { name: "Elephant Stables", img: "images/hampi-5.jpg" },
            { name: "Matanga Hill", img: "images/hampi-6.jpg" },
            { name: "Tungabhadra River", img: "images/hampi-7.jpg" },
            { name: "Hippie Island", img: "images/hampi-8.jpg" }
        ]
    },

    "varanasi": {
        name: "Varanasi",
        tagline: "The Spiritual Capital",
        heroImage: "images/varanasi.jpg",
        events: [
            { title: "Ganga Aarti", date: "Daily 6PM", img: "images/varanasi-event1.jpg" },
            { title: "Boat Ride", date: "Sunrise", img: "images/varanasi-event2.jpg" },
            { title: "Classical Music", date: "Weekends", img: "images/varanasi-event3.jpg" }
        ],
        story: {
            heading: "Oldest Living City",
            content: "Varanasi, also known as Kashi or Banaras, is believed to be one of the oldest continuously inhabited cities in the world, dating back more than 5,000 years. It has been a spiritual, cultural, and educational center since ancient times. Saints, scholars, and seekers have come here in search of enlightenment. The ghats along the River Ganga are sacred spaces where life and death meet, symbolizing liberation and rebirth. Even today, rituals performed here connect modern India directly with its ancient civilization."
        },
        places: [
            { name: "Kashi Vishwanath", img: "images/varanasi-1.jpg" },
            { name: "Dashashwamedh Ghat", img: "images/varanasi-2.jpg" },
            { name: "Assi Ghat", img: "images/varanasi-3.jpg" },
            { name: "Sarnath", img: "images/varanasi-4.jpg" },
            { name: "Manikarnika Ghat", img: "images/varanasi-5.jpg" },
            { name: "Ramnagar Fort", img: "images/varanasi-6.jpg" },
            { name: "Sankat Mochan", img: "images/varanasi-7.jpg" },
            { name: "BHU Campus", img: "images/varanasi-8.jpg" }
        ]
    },

    "munnar": {
        name: "Munnar",
        tagline: "Kashmir of South India",
        heroImage: "images/munnar.jpg",
        events: [
            { title: "Tea Tasting", date: "Daily", img: "images/munnar-event1.jpg" },
            { title: "Flower Show", date: "Jan-Feb", img: "images/munnar-event2.jpg" },
            { title: "Trekking", date: "Morning", img: "images/munnar-event3.jpg" }
        ],
        story: {
            heading: "Emerald Hills",
            content: "Munnar was developed in the late 19th century by the British as a summer retreat and a major tea plantation region. John Daniel Munro of the British government established the tea estates that transformed the hills into endless green carpets. The name 'Munnar' means 'three rivers', referring to the confluence of the Mudhirapuzha, Nallathanni, and Kundala rivers. Today, Munnar stands as a legacy of colonial plantation culture blended with Kerala’s natural beauty and biodiversity."
        },
        places: [
            { name: "Tea Museum", img: "images/munnar-1.jpg" },
            { name: "Eravikulam Park", img: "images/munnar-2.jpg" },
            { name: "Mattupetty Dam", img: "images/munnar-3.jpg" },
            { name: "Echo Point", img: "images/munnar-4.jpg" },
            { name: "Anamudi Peak", img: "images/munnar-5.jpg" },
            { name: "Pothamedu View", img: "images/munnar-6.jpg" },
            { name: "Attukad Falls", img: "images/munnar-7.jpg" },
            { name: "Top Station", img: "images/munnar-8.jpg" }
        ]
    },
// js/data.js  (PART 3 CONTINUATION)

    "ayodhya": {
        name: "Ayodhya",
        tagline: "City of Lord Rama",
        heroImage: "images/ayodhya.jpg",
        events: [
            { title: "Deepotsav", date: "Evening", img: "images/ayo-event1.jpg" },
            { title: "Temple Aarti", date: "Daily", img: "images/ayo-event2.jpg" },
            { title: "Saryu Aarti", date: "Sunset", img: "images/ayo-event3.jpg" }
        ],
        story: {
            heading: "A New Era",
            content: "Ayodhya is one of the most ancient and sacred cities of India, deeply rooted in Hindu mythology and history. It is believed to be the birthplace of Lord Rama, the hero of the Ramayana, and has been a center of devotion for thousands of years. Ancient scriptures describe Ayodhya as a prosperous and divine city ruled by the Ikshvaku dynasty. Over centuries, it remained a symbol of faith, spirituality, and cultural continuity. With the construction of the Ram Mandir, Ayodhya has entered a new era of spiritual revival, attracting pilgrims from across the globe while preserving its timeless legacy."
        },
        places: [
            { name: "Ram Mandir", img: "images/ayo-1.jpg" },
            { name: "Hanuman Garhi", img: "images/ayo-2.jpg" },
            { name: "Kanak Bhawan", img: "images/ayo-3.jpg" },
            { name: "Saryu Ghat", img: "images/ayo-4.jpg" },
            { name: "Nageshwarnath", img: "images/ayo-5.jpg" },
            { name: "Ram Ki Paidi", img: "images/ayo-6.jpg" },
            { name: "Mani Parbat", img: "images/ayo-7.jpg" },
            { name: "Dashrath Mahal", img: "images/ayo-8.jpg" }
        ]
    },

    "tawang": {
        name: "Tawang",
        tagline: "Land of Monks",
        heroImage: "images/tawang.jpg",
        events: [
            { title: "Torgya Festival", date: "Jan 28", img: "images/tawang-event1.jpg" },
            { title: "Snow Drive", date: "Daily", img: "images/tawang-event2.jpg" },
            { title: "Monastery Pray", date: "Morning", img: "images/tawang-event3.jpg" }
        ],
        story: {
            heading: "Hidden Gem",
            content: "Tawang holds immense importance in Tibetan Buddhism. The Tawang Monastery, founded in the 17th century, is the largest monastery in India and second largest in the world. It played a key role in the spread of Buddhism in the eastern Himalayas and served as a center of spiritual learning. Due to its remote location, Tawang remained isolated for centuries, preserving its traditions, culture, and serene beauty. Today, it stands as a peaceful sanctuary where spirituality meets breathtaking Himalayan landscapes."
        },
        places: [
            { name: "Tawang Monastery", img: "images/tawang-1.jpg" },
            { name: "Sela Pass", img: "images/tawang-2.jpg" },
            { name: "Madhuri Lake", img: "images/tawang-3.jpg" },
            { name: "Nuranang Falls", img: "images/tawang-4.jpg" },
            { name: "War Memorial", img: "images/tawang-5.jpg" },
            { name: "Gorichen Peak", img: "images/tawang-6.jpg" },
            { name: "Bumla Pass", img: "images/tawang-7.jpg" },
            { name: "Jaswant Garh", img: "images/tawang-8.jpg" }
        ]
    },

    "gokarna": {
        name: "Gokarna",
        tagline: "Peaceful Paradise",
        heroImage: "images/gokarna.jpg",
        events: [
            { title: "Beach Yoga", date: "Morning", img: "images/gok-event1.jpg" },
            { title: "Flea Market", date: "Evening", img: "images/gok-event2.jpg" },
            { title: "Temple Visit", date: "Daily", img: "images/gok-event3.jpg" }
        ],
        story: {
            heading: "Beaches & Temples",
            content: "Gokarna is an ancient pilgrimage town mentioned in Hindu scriptures and associated with Lord Shiva. The Mahabaleshwar Temple houses the sacred Atmalinga and has drawn devotees for centuries. Traditionally a quiet religious town, Gokarna later attracted travelers and backpackers seeking peaceful beaches away from crowded tourist hubs. Today, it uniquely blends spirituality and serenity, where sacred temples coexist with untouched coastal beauty."
        },
        places: [
            { name: "Om Beach", img: "images/gok-1.jpg" },
            { name: "Mahabaleshwar", img: "images/gok-2.jpg" },
            { name: "Kudle Beach", img: "images/gok-3.jpg" },
            { name: "Half Moon Beach", img: "images/gok-4.jpg" },
            { name: "Paradise Beach", img: "images/gok-5.jpg" },
            { name: "Mirjan Fort", img: "images/gok-6.jpg" },
            { name: "Shiva Statue", img: "images/gok-7.jpg" },
            { name: "Yana Caves", img: "images/gok-8.jpg" }
        ]
    },

    "jaisalmer": {
        name: "Jaisalmer",
        tagline: "The Golden City",
        heroImage: "images/jaisalmer.jpg",
        events: [
            { title: "Desert Festival", date: "Feb", img: "images/jai-event1.jpg" },
            { title: "Dune Bashing", date: "Daily", img: "images/jai-event2.jpg" },
            { title: "Kalbeliya Dance", date: "Nightly", img: "images/jai-event3.jpg" }
        ],
        story: {
            heading: "Fort Alive",
            content: "Founded in 1156 AD by Rawal Jaisal, Jaisalmer rose as a major trading center on the camel caravan routes connecting India with Central Asia, Persia, and Arabia. Merchants accumulated immense wealth, reflected in the beautifully carved havelis and temples. Jaisalmer Fort, built of golden sandstone, is one of the few living forts in the world where people still reside. The city glows like gold under the desert sun, symbolizing the pride, resilience, and architectural brilliance of the Rajput desert kingdoms."
        },
        places: [
            { name: "Jaisalmer Fort", img: "images/jai-1.jpg" },
            { name: "Sam Sand Dunes", img: "images/jai-2.jpg" },
            { name: "Patwon Ki Haveli", img: "images/jai-3.jpg" },
            { name: "Gadisar Lake", img: "images/jai-4.jpg" },
            { name: "Bada Bagh", img: "images/jai-5.jpg" },
            { name: "Jain Temples", img: "images/jai-6.jpg" },
            { name: "Kuldhara", img: "images/jai-7.jpg" },
            { name: "Tanot Mata", img: "images/jai-8.jpg" }
        ]
    }
};

// END OF travelData
