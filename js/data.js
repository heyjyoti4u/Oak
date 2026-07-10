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
            content: "Delhi is a bridge between two worlds. Old Delhi, with its labyrinth of narrow lanes and old havelis, tells the story of the Mughals, while New Delhi, with its wide avenues and colonial architecture, speaks of the British Raj and modern democracy."
        },
        places: [
            { name: "India Gate", img: "images/delhi-1.jpg" },
            { name: "Red Fort", img: "images/delhi-2.jpg" },
            { name: "Qutub Minar", img: "images/delhi-3.jpg" },
            { name: "Humayun's Tomb", img: "images/delhi-4.jpg" },
            { name: "Lotus Temple", img: "images/delhi-5.jpg" },
            { name: "Akshardham", img: "images/delhi-6.jpg" },
            { name: "Chandni Chowk", img: "images/delhi-7.jpg" },
            { name: "Hauz Khas", img: "images/delhi-8.jpg" },
            { name: "Jama Masjid", img: "images/delhi-parade.jpg" },
            { name: "Rashtrapati Bhavan", img: "images/delhi-parade.jpg" },
            { name: "Kartavya Path", img: "images/delhi-parade.jpg" },
            { name: "Dilli Haat", img: "images/delhi-parade.jpg" }
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
            // FIXED: Using backticks (`) here to allow multi-line text
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
            { name: "Narayan Sarovar", img: "images/kutch-8.jpg" },
            { name: "Kutch Museum", img: "images/kutch-9.jpg" },
            { name: "Vijay Vilas Palace", img: "images/rann-utsav.jpg" },
            { name: "Kandla Port", img: "images/rann-utsav.jpg" },
            { name: "Rann Utsav Tent City", img: "images/rann-utsav.jpg" }
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
            content: "Located at an elevation of 2,800 meters, Auli offers panoramic views of some of India's highest peaks, including Nanda Devi. It is a premier destination for winter sports and offers pristine oak forests."
        },
        places: [
            { name: "Auli Artificial Lake", img: "images/auli-1.jpg" },
            { name: "Auli Ropeway", img: "images/auli-2.jpg" },
            { name: "Gorson Bugyal", img: "images/auli-3.jpg" },
            { name: "Joshimath", img: "images/auli-4.jpg" },
            { name: "Nanda Devi Park", img: "images/auli-5.jpg" },
            { name: "Chattrakund", img: "images/auli-6.jpg" },
            { name: "Chenab Lake", img: "images/auli-7.jpg" },
            { name: "Kwani Bugyal", img: "images/auli-8.jpg" },
            { name: "Auli Ski Resort", img: "images/auli-ski.jpg" },
            { name: "Trishul Peak Viewpoint", img: "images/auli-ski.jpg" },
            { name: "Auli Bugyal Ridge", img: "images/auli-ski.jpg" },
            { name: "Kalpvriksha Tree", img: "images/auli-ski.jpg" }
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
            content: "Founded in 1727 by Jai Singh II, Jaipur is India's first planned city. Famous for its pink-hued buildings, massive forts, and vibrant bazaars, it forms the Golden Triangle with Delhi and Agra."
        },
        places: [
            { name: "Hawa Mahal", img: "images/jaipur-1.jpg" },
            { name: "Amber Fort", img: "images/jaipur-2.jpg" },
            { name: "City Palace", img: "images/jaipur-3.jpg" },
            { name: "Jantar Mantar", img: "images/jaipur-4.jpg" },
            { name: "Nahargarh Fort", img: "images/jaipur-5.jpg" },
            { name: "Albert Hall", img: "images/jaipur-6.jpg" },
            { name: "Jal Mahal", img: "images/jaipur-7.jpg" },
            { name: "Bapu Bazaar", img: "images/jaipur-8.jpg" },
            { name: "Birla Mandir", img: "images/jaipur-lit.jpg" },
            { name: "Jaigarh Fort", img: "images/jaipur-lit.jpg" },
            { name: "Central Park", img: "images/jaipur-lit.jpg" },
            { name: "Chokhi Dhani", img: "images/jaipur-lit.jpg" }
        ]
    },

    // ROW 2
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
            content: "A cluster of 36 islands known for their sun-kissed beaches and lush green landscapes. It offers some of the best diving spots in India with untouched coral reefs and crystal clear lagoons."
        },
        places: [
            { name: "Agatti Island", img: "images/lak-1.jpg" },
            { name: "Minicoy Island", img: "images/lak-2.jpg" },
            { name: "Bangaram", img: "images/lak-3.jpg" },
            { name: "Kavaratti", img: "images/lak-4.jpg" },
            { name: "Kalpeni", img: "images/lak-5.jpg" },
            { name: "Marine Museum", img: "images/lak-6.jpg" },
            { name: "Kadmat", img: "images/lak-7.jpg" },
            { name: "Lighthouse", img: "images/lak-8.jpg" },
            { name: "Thinnakara Island", img: "images/lakshadweep.jpg" },
            { name: "Suheli Valiyakara", img: "images/lakshadweep.jpg" },
            { name: "Kiltan Island", img: "images/lakshadweep.jpg" },
            { name: "Androth Island", img: "images/lakshadweep.jpg" }
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
            content: "Once the capital of the Vijayanagara Empire, Hampi is now a UNESCO World Heritage site. Its boulder-strewn landscape is dotted with magnificent temples, markets, and monuments that tell tales of a glorious past."
        },
        places: [
            { name: "Virupaksha Temple", img: "images/hampi-1.jpg" },
            { name: "Vithala Temple", img: "images/hampi-2.jpg" },
            { name: "Stone Chariot", img: "images/hampi-3.jpg" },
            { name: "Lotus Mahal", img: "images/hampi-4.jpg" },
            { name: "Elephant Stables", img: "images/hampi-5.jpg" },
            { name: "Matanga Hill", img: "images/hampi-6.jpg" },
            { name: "Tungabhadra River", img: "images/hampi-7.jpg" },
            { name: "Hippie Island", img: "images/hampi-8.jpg" },
            { name: "Sanapur Lake", img: "images/hampi.jpg" },
            { name: "Anegundi Village", img: "images/hampi.jpg" },
            { name: "Anjaneya Hill", img: "images/hampi.jpg" },
            { name: "Queen's Bath", img: "images/hampi.jpg" }
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
            content: "Varanasi, or Kashi, is older than history, tradition, and legend. It is the holiest of the seven sacred cities in Hinduism and Jainism, famous for its Ghats lining the River Ganges."
        },
        places: [
            { name: "Kashi Vishwanath", img: "images/varanasi-1.jpg" },
            { name: "Dashashwamedh Ghat", img: "images/varanasi-2.jpg" },
            { name: "Assi Ghat", img: "images/varanasi-3.jpg" },
            { name: "Sarnath", img: "images/varanasi-4.jpg" },
            { name: "Manikarnika Ghat", img: "images/varanasi-5.jpg" },
            { name: "Ramnagar Fort", img: "images/varanasi-6.jpg" },
            { name: "Sankat Mochan", img: "images/varanasi-7.jpg" },
            { name: "BHU Campus", img: "images/varanasi-8.jpg" },
            { name: "Tulsi Manas Temple", img: "images/varanasi.jpg" },
            { name: "Man Mandir Ghat", img: "images/varanasi.jpg" },
            { name: "Kashi Vishwanath Corridor", img: "images/varanasi.jpg" },
            { name: "Chunar Fort", img: "images/varanasi.jpg" }
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
            content: "Situated at the confluence of three mountain streams, Munnar was once the summer resort of the British government in South India. It is famous for its rolling tea plantations and mist-covered hills."
        },
        places: [
            { name: "Tea Museum", img: "images/munnar-1.jpg" },
            { name: "Eravikulam Park", img: "images/munnar-2.jpg" },
            { name: "Mattupetty Dam", img: "images/munnar-3.jpg" },
            { name: "Echo Point", img: "images/munnar-4.jpg" },
            { name: "Anamudi Peak", img: "images/munnar-5.jpg" },
            { name: "Pothamedu View", img: "images/munnar-6.jpg" },
            { name: "Attukad Falls", img: "images/munnar-7.jpg" },
            { name: "Top Station", img: "images/munnar-8.jpg" },
            { name: "Kundala Lake", img: "images/munnar.jpg" },
            { name: "Blossom Park", img: "images/munnar.jpg" },
            { name: "Chinnakanal Waterfalls", img: "images/munnar.jpg" },
            { name: "Marayoor Sandalwood Forest", img: "images/munnar.jpg" }
        ]
    },

    // ROW 3 (TRENDING)
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
            content: "Ayodhya is an ancient city of India, the birthplace of Lord Rama and setting of the epic Ramayana. With the new Ram Mandir, it has become a global spiritual destination."
        },
        places: [
            { name: "Ram Mandir", img: "images/ayo-1.jpg" },
            { name: "Hanuman Garhi", img: "images/ayo-2.jpg" },
            { name: "Kanak Bhawan", img: "images/ayo-3.jpg" },
            { name: "Saryu Ghat", img: "images/ayo-4.jpg" },
            { name: "Nageshwarnath", img: "images/ayo-5.jpg" },
            { name: "Ram Ki Paidi", img: "images/ayo-6.jpg" },
            { name: "Mani Parbat", img: "images/ayo-7.jpg" },
            { name: "Dashrath Mahal", img: "images/ayo-8.jpg" },
            { name: "Treta Ke Thakur", img: "images/ayodhya.jpg" },
            { name: "Chhoti Devkali Temple", img: "images/ayodhya.jpg" },
            { name: "Guptar Ghat", img: "images/ayodhya.jpg" },
            { name: "Bharat Kund", img: "images/ayodhya.jpg" }
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
            content: "Tawang is known for its beautiful monastery, which is the largest in India. Located in Arunachal Pradesh, it offers breathtaking views of the eastern Himalayas and deep valleys."
        },
        places: [
            { name: "Tawang Monastery", img: "images/tawang-1.jpg" },
            { name: "Sela Pass", img: "images/tawang-2.jpg" },
            { name: "Madhuri Lake", img: "images/tawang-3.jpg" },
            { name: "Nuranang Falls", img: "images/tawang-4.jpg" },
            { name: "War Memorial", img: "images/tawang-5.jpg" },
            { name: "Gorichen Peak", img: "images/tawang-6.jpg" },
            { name: "Bumla Pass", img: "images/tawang-7.jpg" },
            { name: "Jaswant Garh", img: "images/tawang-8.jpg" },
            { name: "Pankang Teng Tso Lake", img: "images/tawang.jpg" },
            { name: "Urgelling Monastery", img: "images/tawang.jpg" },
            { name: "Tawang Craft Centre", img: "images/tawang.jpg" },
            { name: "Zemithang Valley", img: "images/tawang.jpg" }
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
            content: "Gokarna is a small temple town on the western coast of India. It is known for its sacred Mahabaleshwar Temple as well as its pristine, laid-back beaches that offer a quieter alternative to Goa."
        },
        places: [
            { name: "Om Beach", img: "images/gok-1.jpg" },
            { name: "Mahabaleshwar", img: "images/gok-2.jpg" },
            { name: "Kudle Beach", img: "images/gok-3.jpg" },
            { name: "Half Moon Beach", img: "images/gok-4.jpg" },
            { name: "Paradise Beach", img: "images/gok-5.jpg" },
            { name: "Mirjan Fort", img: "images/gok-6.jpg" },
            { name: "Shiva Statue", img: "images/gok-7.jpg" },
            { name: "Yana Caves", img: "images/gok-8.jpg" },
            { name: "Kotitheertha Pond", img: "images/gokarna.jpg" },
            { name: "Vibhooti Falls", img: "images/gokarna.jpg" },
            { name: "Gokarna Market", img: "images/gokarna.jpg" },
            { name: "Belekan Beach", img: "images/gokarna.jpg" }
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
            content: "Jaisalmer stands on a ridge of yellowish sandstone, crowned by the ancient Jaisalmer Fort. This fort contains a royal palace and several ornate Jain temples. It is a gateway to the Thar Desert."
        },
        places: [
            { name: "Jaisalmer Fort", img: "images/jai-1.jpg" },
            { name: "Sam Sand Dunes", img: "images/jai-2.jpg" },
            { name: "Patwon Ki Haveli", img: "images/jai-3.jpg" },
            { name: "Gadisar Lake", img: "images/jai-4.jpg" },
            { name: "Bada Bagh", img: "images/jai-5.jpg" },
            { name: "Jain Temples", img: "images/jai-6.jpg" },
            { name: "Kuldhara", img: "images/jai-7.jpg" },
            { name: "Tanot Mata", img: "images/jai-8.jpg" },
            { name: "Desert National Park", img: "images/jaisalmer.jpg" },
            { name: "Longewala War Memorial", img: "images/jaisalmer.jpg" },
            { name: "Akal Wood Fossil Park", img: "images/jaisalmer.jpg" },
            { name: "Amar Sagar", img: "images/jaisalmer.jpg" }
        ]
    }
    ,"goa": {
        name: "Goa",
        tagline: "Sun, Sand & Portuguese Charm",
        heroImage: "images/goa.jpg",
        events: [
            { title: "Sunburn Festival", date: "28th Dec", img: "images/goa-event1.jpg" },
            { title: "Goa Carnival", date: "Feb", img: "images/goa-event2.jpg" },
            { title: "Christmas Beach Party", date: "25th Dec", img: "images/goa-event3.jpg" },
            { title: "Saturday Night Market", date: "Every Saturday", img: "images/goa-event4.jpg" },
            { title: "Feast of St. Francis Xavier", date: "3rd Dec", img: "images/goa-event5.jpg" }
        ],
        story: {
            heading: "Where the Tide Never Stops",
            content: "Goa is India's smallest state but its biggest party. Portuguese-era churches sit a short drive from beach shacks blasting trance music, while spice-scented villages in the interior move at an entirely different pace. It is a coastline of many moods — quiet at dawn, electric by midnight."
        },
        places: [
            { name: "Baga Beach", img: "images/goa-1.jpg" },
            { name: "Calangute Beach", img: "images/goa-2.jpg" },
            { name: "Fort Aguada", img: "images/goa-3.jpg" },
            { name: "Basilica of Bom Jesus", img: "images/goa-4.jpg" },
            { name: "Se Cathedral", img: "images/goa-5.jpg" },
            { name: "Anjuna Flea Market", img: "images/goa-6.jpg" },
            { name: "Dudhsagar Falls", img: "images/goa-7.jpg" },
            { name: "Chapora Fort", img: "images/goa-8.jpg" },
            { name: "Palolem Beach", img: "images/goa.jpg" },
            { name: "Old Goa Churches", img: "images/goa.jpg" },
            { name: "Spice Plantation", img: "images/goa.jpg" },
            { name: "Fontainhas Latin Quarter", img: "images/goa.jpg" }
        ]
    },

    "udaipur": {
        name: "Udaipur",
        tagline: "The City of Lakes",
        heroImage: "images/udaipur.jpg",
        events: [
            { title: "Mewar Festival", date: "March", img: "images/udaipur-event1.jpg" },
            { title: "World Music Festival", date: "Feb", img: "images/udaipur-event2.jpg" },
            { title: "Shilpgram Utsav", date: "Dec", img: "images/udaipur-event3.jpg" },
            { title: "Lake Palace Boat Nights", date: "Weekends", img: "images/udaipur-event4.jpg" },
            { title: "Holi Celebrations", date: "March", img: "images/udaipur-event5.jpg" }
        ],
        story: {
            heading: "A Reflection in Water",
            content: "Udaipur was built around its lakes, and it shows — every palace, ghat and haveli seems designed to be seen from the water. The City Palace rises above Lake Pichola like something from a folk tale, and the whole town still feels closer to its Rajput past than most of Rajasthan's other cities."
        },
        places: [
            { name: "City Palace", img: "images/udaipur-1.jpg" },
            { name: "Lake Pichola", img: "images/udaipur-2.jpg" },
            { name: "Jag Mandir", img: "images/udaipur-3.jpg" },
            { name: "Saheliyon Ki Bari", img: "images/udaipur-4.jpg" },
            { name: "Fateh Sagar Lake", img: "images/udaipur-5.jpg" },
            { name: "Jagdish Temple", img: "images/udaipur-6.jpg" },
            { name: "Bagore Ki Haveli", img: "images/udaipur-7.jpg" },
            { name: "Sajjangarh Monsoon Palace", img: "images/udaipur-8.jpg" },
            { name: "Vintage Car Museum", img: "images/udaipur.jpg" },
            { name: "Ambrai Ghat", img: "images/udaipur.jpg" },
            { name: "Shilpgram", img: "images/udaipur.jpg" },
            { name: "Eklingji Temple", img: "images/udaipur.jpg" }
        ]
    },

    "rishikesh": {
        name: "Rishikesh",
        tagline: "Yoga Capital of the World",
        heroImage: "images/rishikesh.jpg",
        events: [
            { title: "International Yoga Festival", date: "March", img: "images/rishikesh-event1.jpg" },
            { title: "Ganga Aarti", date: "Daily, Sunset", img: "images/rishikesh-event2.jpg" },
            { title: "Rafting Season Opening", date: "Sept", img: "images/rishikesh-event3.jpg" },
            { title: "Kumbh Mela", date: "Periodic", img: "images/rishikesh-event4.jpg" },
            { title: "Adventure Sports Festival", date: "Oct", img: "images/rishikesh-event5.jpg" }
        ],
        story: {
            heading: "Between the Ganga and the Himalayas",
            content: "Rishikesh sits where the Ganga rushes down from the mountains, and the town has grown up entirely around that fact. Ashrams and yoga schools line the riverbanks alongside rafting outfitters and cafés, making it a rare place where spiritual retreat and adrenaline sit comfortably side by side."
        },
        places: [
            { name: "Laxman Jhula", img: "images/rishikesh-1.jpg" },
            { name: "Ram Jhula", img: "images/rishikesh-2.jpg" },
            { name: "Triveni Ghat", img: "images/rishikesh-3.jpg" },
            { name: "Beatles Ashram", img: "images/rishikesh-4.jpg" },
            { name: "Neelkanth Mahadev Temple", img: "images/rishikesh-5.jpg" },
            { name: "Parmarth Niketan", img: "images/rishikesh-6.jpg" },
            { name: "Rajaji National Park", img: "images/rishikesh-7.jpg" },
            { name: "Shivpuri", img: "images/rishikesh-8.jpg" },
            { name: "Kaudiyala", img: "images/rishikesh.jpg" },
            { name: "Vashisht Cave", img: "images/rishikesh.jpg" },
            { name: "Neer Garh Waterfall", img: "images/rishikesh.jpg" },
            { name: "Ganga Aarti Ghat", img: "images/rishikesh.jpg" }
        ]
    },

    "darjeeling": {
        name: "Darjeeling",
        tagline: "Queen of the Hills",
        heroImage: "images/darjeeling.jpg",
        events: [
            { title: "Tea Tourism Festival", date: "Nov", img: "images/darjeeling-event1.jpg" },
            { title: "Darjeeling Carnival", date: "Dec", img: "images/darjeeling-event2.jpg" },
            { title: "Losar (Tibetan New Year)", date: "Feb", img: "images/darjeeling-event3.jpg" },
            { title: "Toy Train Heritage Run", date: "Weekends", img: "images/darjeeling-event4.jpg" },
            { title: "Monastery Festivals", date: "Various", img: "images/darjeeling-event5.jpg" }
        ],
        story: {
            heading: "Mist, Tea and the Toy Train",
            content: "Darjeeling built its name on tea, and the terraced gardens still ring the town on every side. Add a colonial-era toy train that climbs through the clouds, prayer flags fluttering over Buddhist monasteries, and the promise of a Kanchenjunga sunrise, and it's easy to see why the hills have kept their old nickname."
        },
        places: [
            { name: "Tiger Hill", img: "images/darjeeling-1.jpg" },
            { name: "Batasia Loop", img: "images/darjeeling-2.jpg" },
            { name: "Darjeeling Toy Train", img: "images/darjeeling-3.jpg" },
            { name: "Peace Pagoda", img: "images/darjeeling-4.jpg" },
            { name: "Padmaja Naidu Zoological Park", img: "images/darjeeling-5.jpg" },
            { name: "Happy Valley Tea Estate", img: "images/darjeeling-6.jpg" },
            { name: "Ghoom Monastery", img: "images/darjeeling-7.jpg" },
            { name: "Darjeeling Ropeway", img: "images/darjeeling-8.jpg" },
            { name: "Japanese Peace Temple", img: "images/darjeeling.jpg" },
            { name: "Singalila National Park", img: "images/darjeeling.jpg" },
            { name: "Rock Garden", img: "images/darjeeling.jpg" },
            { name: "Chowrasta Mall Road", img: "images/darjeeling.jpg" }
        ]
    },

    "manali": {
        name: "Manali",
        tagline: "Valley of the Gods",
        heroImage: "images/manali.jpg",
        events: [
            { title: "Winter Carnival", date: "Jan", img: "images/manali-event1.jpg" },
            { title: "Hadimba Devi Fair", date: "May", img: "images/manali-event2.jpg" },
            { title: "Kullu Dussehra", date: "Oct", img: "images/manali-event3.jpg" },
            { title: "Paragliding Season", date: "March-June", img: "images/manali-event4.jpg" },
            { title: "Apple Blossom Season", date: "April", img: "images/manali-event5.jpg" }
        ],
        story: {
            heading: "Where the Beas Begins",
            content: "Manali marks the point where the Kullu Valley's orchards give way to high Himalayan passes. Old Manali's cafés and backpacker lanes sit a world apart from the deodar forests and glacier-fed streams just outside town, and the road onward — toward Rohtang and Spiti — is reason enough for most people to visit."
        },
        places: [
            { name: "Solang Valley", img: "images/manali-1.jpg" },
            { name: "Rohtang Pass", img: "images/manali-2.jpg" },
            { name: "Hadimba Temple", img: "images/manali-3.jpg" },
            { name: "Old Manali", img: "images/manali-4.jpg" },
            { name: "Vashisht Hot Springs", img: "images/manali-5.jpg" },
            { name: "Manu Temple", img: "images/manali-6.jpg" },
            { name: "Jogini Falls", img: "images/manali-7.jpg" },
            { name: "Beas Kund", img: "images/manali-8.jpg" },
            { name: "Naggar Castle", img: "images/manali.jpg" },
            { name: "Great Himalayan National Park", img: "images/manali.jpg" },
            { name: "Manikaran", img: "images/manali.jpg" },
            { name: "Kasol", img: "images/manali.jpg" }
        ]
    },

    "andaman": {
        name: "Andaman Islands",
        tagline: "Emerald Isles of the Bay of Bengal",
        heroImage: "images/andaman.jpg",
        events: [
            { title: "Island Tourism Festival", date: "Jan", img: "images/andaman-event1.jpg" },
            { title: "Cellular Jail Light & Sound Show", date: "Daily, Evening", img: "images/andaman-event2.jpg" },
            { title: "Beach Marathon", date: "Feb", img: "images/andaman-event3.jpg" },
            { title: "Water Sports Festival", date: "Oct", img: "images/andaman-event4.jpg" },
            { title: "Independence Day at Cellular Jail", date: "15th Aug", img: "images/andaman-event5.jpg" }
        ],
        story: {
            heading: "India's Tropical Frontier",
            content: "The Andaman Islands feel like a different country entirely — turquoise water, coral reefs, and rainforest-covered islands scattered across the Bay of Bengal. Port Blair's colonial Cellular Jail is a sobering counterpoint to the postcard beaches of Havelock and Neil Island just a ferry ride away."
        },
        places: [
            { name: "Radhanagar Beach", img: "images/andaman-1.jpg" },
            { name: "Cellular Jail", img: "images/andaman-2.jpg" },
            { name: "Ross Island", img: "images/andaman-3.jpg" },
            { name: "Havelock Island", img: "images/andaman-4.jpg" },
            { name: "Neil Island", img: "images/andaman-5.jpg" },
            { name: "Elephant Beach", img: "images/andaman-6.jpg" },
            { name: "Chidiya Tapu", img: "images/andaman-7.jpg" },
            { name: "Baratang Limestone Caves", img: "images/andaman-8.jpg" },
            { name: "North Bay Island", img: "images/andaman.jpg" },
            { name: "Corbyn's Cove Beach", img: "images/andaman.jpg" },
            { name: "Mahatma Gandhi Marine Park", img: "images/andaman.jpg" },
            { name: "Viper Island", img: "images/andaman.jpg" }
        ]
    }

};
