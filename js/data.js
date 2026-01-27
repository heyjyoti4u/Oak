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
            // FIXED: Used backticks (`) below to allow multi-line text
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
            { name: "Bapu Bazaar", img: "images/jaipur-8.jpg" }
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
            { name: "Top Station", img: "images/munnar-8.jpg" }
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
            { name: "Tanot Mata", img: "images/jai-8.jpg" }
        ]
    }
};
