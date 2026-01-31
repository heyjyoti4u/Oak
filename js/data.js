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
            content: "Delhi is not a single city but a collection of many cities that have risen and fallen over thousands of years. Its story begins with Indraprastha, the legendary capital of the Pandavas mentioned in the Mahabharata."
        },
        places: [
            { 
                name: "India Gate", 
                img: "images/delhi-1.jpg",
                about: "The India Gate is a war memorial located astride the Rajpath. It stands as a memorial to 70,000 soldiers of the British Indian Army who died in between 1914 and 1921 in the First World War."
            },
            { 
                name: "Red Fort", 
                img: "images/delhi-2.jpg",
                about: "The Red Fort is a historic fort in the city of Delhi in India that served as the main residence of the Mughal Emperors. Emperor Shah Jahan commissioned construction of the Red Fort on 12 May 1638, when he decided to shift his capital from Agra to Delhi."
            },
            { name: "Qutub Minar", img: "images/delhi-3.jpg", about: "A UNESCO World Heritage Site, the Qutub Minar is a 73-meter high tower of victory, built in 1193 by Qutab-ud-din Aibak immediately after the defeat of Delhi's last Hindu kingdom." },
            { name: "Humayun's Tomb", img: "images/delhi-4.jpg", about: "This tomb, built in 1570, is of particular cultural significance as it was the first garden-tomb on the Indian subcontinent. It inspired several major architectural innovations, culminating in the construction of the Taj Mahal." },
            { name: "Lotus Temple", img: "images/delhi-5.jpg", about: "The Lotus Temple, notable for its flowerlike shape, has become a prominent attraction in the city. Like all Baháʼí Houses of Worship, the Lotus Temple is open to all, regardless of religion or any other qualification." },
            { name: "Akshardham", img: "images/delhi-6.jpg", about: "Akshardham means the divine abode of God. It is hailed as an eternal place of devotion, purity and peace. Swaminarayan Akshardham at New Delhi is a Mandir – an abode of God, a Hindu house of worship." },
            { name: "Chandni Chowk", img: "images/delhi-7.jpg", about: "In the heart of Old Delhi, Chandni Chowk is a busy shopping area with markets full of spices, dried fruit, silver jewelry and vivid saris, while the narrow side streets are crowded with tiny shops selling essential oils, stationery and traditional Indian sweets." },
            { name: "Hauz Khas", img: "images/delhi-8.jpg", about: "Hauz Khas is an affluent neighborhood in South Delhi, its heart being the historic Hauz Khas Complex. It is now known for its electric nightlife, art galleries, and boutiques." }
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
            content: `Rann Utsav Tent City, located near Dholavira in Gujarat, is set within one of the most ecologically and culturally rich landscapes in the world.`
        },
        places: [
            { name: "White Desert", img: "images/kutch-1.jpg", about: "The Great Rann of Kutch is a salt marsh in the Thar Desert in the Kutch District of Gujarat, India. It is one of the largest salt deserts in the world." },
            { name: "Kalo Dungar", img: "images/kutch-2.jpg", about: "Kalo Dungar or Black Hill is the highest point in Kutch. It is probably the only place in Kutch from where a panoramic view of the Great Rann of Kutch is possible." },
            { name: "Bhujodi", img: "images/kutch-3.jpg", about: "Bhujodi is a major textile center of Kutch, with the vast majority of the 1200 inhabitants involved in textile handicraft production." },
            { name: "Aina Mahal", img: "images/kutch-4.jpg", about: "Aina Mahal is an 18th-century palace in Bhuj, Gujarat, India. It is located next to the Prag Mahal. It was built by Rao Lakhpatji in 1761." },
            { name: "Mandvi Beach", img: "images/kutch-5.jpg", about: "Mandvi is a beach town with a long maritime history. The beach offers clear waters and beautiful sunset views near the wind farms." },
            { name: "Prag Mahal", img: "images/kutch-6.jpg", about: "Prag Mahal is a 19th-century palace located next to the Aina Mahal in Bhuj, Gujarat, India. It was commissioned by Rao Pragmalji II." },
            { name: "Dholavira", img: "images/kutch-7.jpg", about: "Dholavira is an archaeological site at Khadirbet in Bhachau Taluka of Kutch District. It represents the ruins of an ancient Indus Valley Civilization city." },
            { name: "Narayan Sarovar", img: "images/kutch-8.jpg", about: "Narayan Sarovar or Narayansar is a village and place of pilgrimage for Hindus on the Kori Creek. It is one of the five holy lakes of Hinduism." }
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
            content: "Auli was once a quiet Himalayan pastureland used by shepherds. Its strategic slopes were later developed by the Indian government to train soldiers for mountain warfare."
        },
        places: [
            { name: "Auli Artificial Lake", img: "images/auli-1.jpg", about: "This is the world's highest man-made lake. The water from this lake is used to feed the snow guns stationed along the ski slopes to provide a good surface for skiing." },
            { name: "Auli Ropeway", img: "images/auli-2.jpg", about: "The second highest and longest ropeway in Asia, connecting Joshimath to Auli. It offers magnificent views of the Himalayan peaks." },
            { name: "Gorson Bugyal", img: "images/auli-3.jpg", about: "A large alpine meadow spread over vast acres of land. It is famous for its lush green pastures and coniferous forests of oak and deodar." },
            { name: "Joshimath", img: "images/auli-4.jpg", about: "Joshimath is a sacred town in Uttarakhand and a gateway to several Himalayan expeditions, trekking trails, and pilgrim centers like Badrinath." },
            { name: "Nanda Devi Park", img: "images/auli-5.jpg", about: "The Nanda Devi National Park constitutes a unique transition zone between the Zanskar mountain range and the Great Himalaya." },
            { name: "Chattrakund", img: "images/auli-6.jpg", about: "A small lake holding sweet water located near Auli. It is situated amidst a dense forest and is a famous spot for honeymooners and tourists." },
            { name: "Chenab Lake", img: "images/auli-7.jpg", about: "An artificial lake in Auli that offers a calm and serene atmosphere, perfect for those looking to escape the crowds." },
            { name: "Kwani Bugyal", img: "images/auli-8.jpg", about: "A popular trekking destination near Auli offering stunning views of peaks like Nanda Devi and Dunagiri." }
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
            content: "Founded in 1727 by Maharaja Sawai Jai Singh II, Jaipur was India’s first planned city based on Vastu Shastra."
        },
        places: [
            { name: "Hawa Mahal", img: "images/jaipur-1.jpg", about: "The 'Palace of Winds' was built in 1799. It is famous for its unique honeycomb-like structure with 953 small windows (jharokhas), designed to allow royal ladies to observe street festivals without being seen." },
            { name: "Amber Fort", img: "images/jaipur-2.jpg", about: "A majestic fort located on a hilltop, known for its artistic style elements. With its large ramparts and series of gates and cobbled paths, the fort overlooks Maota Lake." },
            { name: "City Palace", img: "images/jaipur-3.jpg", about: "A vast palace complex that includes the Chandra Mahal and Mubarak Mahal palaces. It was the seat of the Maharaja of Jaipur and houses a museum today." },
            { name: "Jantar Mantar", img: "images/jaipur-4.jpg", about: "A collection of nineteen architectural astronomical instruments built by the Rajput king Sawai Jai Singh II. It features the world's largest stone sundial." },
            { name: "Nahargarh Fort", img: "images/jaipur-5.jpg", about: "Nahargarh stands on the edge of the Aravalli Hills, overlooking the city of Jaipur. Along with Amer Fort and Jaigarh Fort, it once formed a strong defense ring for the city." },
            { name: "Albert Hall", img: "images/jaipur-6.jpg", about: "The oldest museum of the state and functions as the state museum of Rajasthan. The building is situated in Ram Niwas Garden outside the city wall opposite New Gate." },
            { name: "Jal Mahal", img: "images/jaipur-7.jpg", about: "The Water Palace is located in the middle of the Man Sagar Lake. It is a showcase of the Rajput style of architecture on a grand scale." },
            { name: "Bapu Bazaar", img: "images/jaipur-8.jpg", about: "A vibrant marketplace in Jaipur famous for its Mojari footwear, camel leather products, handicrafts, and textiles." }
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
            content: "Lakshadweep, meaning 'a hundred thousand islands', has been known to sailors and traders since ancient times."
        },
        places: [
            { name: "Agatti Island", img: "images/lak-1.jpg", about: "Agatti has one of the most beautiful lagoons in Lakshadweep. It is the virtual gateway to the islands as it houses the only airport." },
            { name: "Minicoy Island", img: "images/lak-2.jpg", about: "The southernmost atoll of the archipelago, famous for its lighthouse built in 1885 and its unique culture which is closer to the Maldives." },
            { name: "Bangaram", img: "images/lak-3.jpg", about: "A teardrop-shaped island with pristine beaches and turquoise waters. It is uninhabited and open only to tourists." },
            { name: "Kavaratti", img: "images/lak-4.jpg", about: "The capital of the Union Territory, known for its pristine white sand beaches and calm lagoons ideal for water sports." },
            { name: "Kalpeni", img: "images/lak-5.jpg", about: "Known for its three islets, Tilakkam, Pitti and Cheriyam. A huge shallow lagoon encloses all of them." },
            { name: "Marine Museum", img: "images/lak-6.jpg", about: "Located in Kavaratti, this museum showcases a wide variety of marine life and artifacts related to the history of the islands." },
            { name: "Kadmat", img: "images/lak-7.jpg", about: "Kadmat is a coral island that belongs to the Amindivi subgroup of islands. It is known for its sun-kissed beaches." },
            { name: "Lighthouse", img: "images/lak-8.jpg", about: "The historic lighthouses of Lakshadweep, particularly the one in Minicoy, offer panoramic views of the Arabian Sea." }
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
            content: "Hampi was the glorious capital of the Vijayanagara Empire in the 14th to 16th centuries, one of the richest and most powerful empires in Indian history."
        },
        places: [
            { name: "Virupaksha Temple", img: "images/hampi-1.jpg", about: "Dedicated to Lord Shiva, this temple predates the Vijayanagara empire and is the only functioning temple in the main Hampi complex." },
            { name: "Vithala Temple", img: "images/hampi-2.jpg", about: "An architectural masterpiece known for its musical pillars and the iconic stone chariot, which is a symbol of Karnataka tourism." },
            { name: "Stone Chariot", img: "images/hampi-3.jpg", about: "Located inside the Vithala Temple complex, this is actually a shrine dedicated to Garuda, built in the shape of a chariot." },
            { name: "Lotus Mahal", img: "images/hampi-4.jpg", about: "A pleasant blend of Indo-Islamic architecture, this palace was likely used by the royal women of the Vijayanagara Empire." },
            { name: "Elephant Stables", img: "images/hampi-5.jpg", about: "A long building with a row of domed chambers which were used to 'park' the royal elephants." },
            { name: "Matanga Hill", img: "images/hampi-6.jpg", about: "The highest point in Hampi, offering a breathtaking bird's-eye view of the entire ruins and the landscape, especially at sunrise." },
            { name: "Tungabhadra River", img: "images/hampi-7.jpg", about: "The lifeline of Hampi, offering coracle rides that take you to the ancient rocks and temples along the river banks." },
            { name: "Hippie Island", img: "images/hampi-8.jpg", about: "Located across the river from the main ruins, this area is known for its relaxed vibe, cafes, and bouldering activities." }
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
            content: "Varanasi, also known as Kashi or Banaras, is believed to be one of the oldest continuously inhabited cities in the world, dating back more than 5,000 years."
        },
        places: [
            { name: "Kashi Vishwanath", img: "images/varanasi-1.jpg", about: "One of the most famous Hindu temples dedicated to Lord Shiva. It is one of the twelve Jyotirlingas." },
            { name: "Dashashwamedh Ghat", img: "images/varanasi-2.jpg", about: "The main ghat in Varanasi on the Ganga River. It is located close to Vishwanath Temple and is famous for the evening Ganga Aarti." },
            { name: "Assi Ghat", img: "images/varanasi-3.jpg", about: "The southernmost ghat in Varanasi. It is a popular place for students, researchers, and tourists to live and visit." },
            { name: "Sarnath", img: "images/varanasi-4.jpg", about: "Located 10 km from Varanasi, this is where Gautama Buddha first taught the Dharma after his enlightenment." },
            { name: "Manikarnika Ghat", img: "images/varanasi-5.jpg", about: "One of the holiest cremation grounds among the sacred riverfronts, alongside the river Ganges." },
            { name: "Ramnagar Fort", img: "images/varanasi-6.jpg", about: "A fortification located in Ramnagar, Varanasi. It was built by Kashi Naresh Raja Balwant Singh in 1750." },
            { name: "Sankat Mochan", img: "images/varanasi-7.jpg", about: "A Hindu temple in Varanasi dedicated to the Hindu God Hanuman. It was established by famous Hindu preacher and poet saint Sri Goswami Tulsidas." },
            { name: "BHU Campus", img: "images/varanasi-8.jpg", about: "Banaras Hindu University is an internationally reputed temple of learning, situated in the holy city of Varanasi." }
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
            content: "Munnar was developed in the late 19th century by the British as a summer retreat and a major tea plantation region."
        },
        places: [
            { name: "Tea Museum", img: "images/munnar-1.jpg", about: "Shows the growth of tea plantations in Munnar. It houses curios, photographs and machineries." },
            { name: "Eravikulam Park", img: "images/munnar-2.jpg", about: "Famous for being the habitat of the endangered Nilgiri Tahr. The park offers a magnificent view of the tea plantations." },
            { name: "Mattupetty Dam", img: "images/munnar-3.jpg", about: "A storage concrete gravity dam built in the mountains of Kerala. It is a vital source of electricity and water." },
            { name: "Echo Point", img: "images/munnar-4.jpg", about: "A popular adventure tourism spot where your voice echoes back to you. It sits at the confluence of three mountain ranges." },
            { name: "Anamudi Peak", img: "images/munnar-5.jpg", about: "The highest peak in the Western Ghats and South India, at an elevation of 2,695 metres." },
            { name: "Pothamedu View", img: "images/munnar-6.jpg", about: "Offers a panoramic view of the tea, coffee and cardamom plantations in Munnar. Ideal for trekking and hiking." },
            { name: "Attukad Falls", img: "images/munnar-7.jpg", about: "A waterfall located between Munnar and Pallivasal. It is a feast for the eyes, especially during the monsoon." },
            { name: "Top Station", img: "images/munnar-8.jpg", about: "The highest point in Munnar, located on the Kerala-Tamil Nadu border. It offers a panoramic view of the Western Ghats." }
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
            content: "Ayodhya is one of the most ancient and sacred cities of India, deeply rooted in Hindu mythology and history. It is believed to be the birthplace of Lord Rama."
        },
        places: [
            { name: "Ram Mandir", img: "images/ayo-1.jpg", about: "A Hindu temple that is being built at the sacred pilgrimage site of Ram Janmabhoomi in Ayodhya." },
            { name: "Hanuman Garhi", img: "images/ayo-2.jpg", about: "A 10th-century temple dedicated to Hanuman. It is customary to visit this temple before visiting the Ram Temple." },
            { name: "Kanak Bhawan", img: "images/ayo-3.jpg", about: "Also known as Sone-ka-Ghar, it is a significant temple dedicated to Lord Rama and Goddess Sita." },
            { name: "Saryu Ghat", img: "images/ayo-4.jpg", about: "The banks of the Sarayu river where pilgrims take a holy dip. The evening Aarti here is a spiritual experience." },
            { name: "Nageshwarnath", img: "images/ayo-5.jpg", about: "A temple dedicated to Lord Shiva, believed to be established by Kush, the son of Lord Rama." },
            { name: "Ram Ki Paidi", img: "images/ayo-6.jpg", about: "A series of ghats on the bank of River Saryu. The river front brings forth an outstanding landscape especially in floodlit night." },
            { name: "Mani Parbat", img: "images/ayo-7.jpg", about: "A hillock that stands 65 feet high, believed to be a part of the Sanjeevani Booti hill dropped by Hanuman." },
            { name: "Dashrath Mahal", img: "images/ayo-8.jpg", about: "Located in the heart of Ayodhya, this palace is believed to be the residence of King Dasharatha, father of Lord Rama." }
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
            content: "Tawang holds immense importance in Tibetan Buddhism. The Tawang Monastery, founded in the 17th century, is the largest monastery in India."
        },
        places: [
            { name: "Tawang Monastery", img: "images/tawang-1.jpg", about: "The largest monastery in India and second largest in the world. It is situated on a mountain in the center of the Tawang town." },
            { name: "Sela Pass", img: "images/tawang-2.jpg", about: "A high-altitude mountain pass located on the border between Tawang and West Kameng districts. It is snow-covered year-round." },
            { name: "Madhuri Lake", img: "images/tawang-3.jpg", about: "Originally known as Sangetsar Lake, it was renamed after the filming of a Bollywood movie. It is known for its scenic beauty." },
            { name: "Nuranang Falls", img: "images/tawang-4.jpg", about: "A spectacular waterfall located in the Tawang district. It is one of the most stunning waterfalls in Arunachal Pradesh." },
            { name: "War Memorial", img: "images/tawang-5.jpg", about: "A stupa built in memory of the soldiers of the Indian Army who lost their lives in the 1962 Sino-Indian War." },
            { name: "Gorichen Peak", img: "images/tawang-6.jpg", about: "The highest peak in Arunachal Pradesh. It is a great trekking destination for adventure lovers." },
            { name: "Bumla Pass", img: "images/tawang-7.jpg", about: "A border pass between China's Cona County in Tibet and India's Tawang district. It is a historical trading route." },
            { name: "Jaswant Garh", img: "images/tawang-8.jpg", about: "A memorial dedicated to Rifleman Jaswant Singh Rawat who single-handedly fought off the Chinese army for 3 days in 1962." }
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
            content: "Gokarna is an ancient pilgrimage town mentioned in Hindu scriptures and associated with Lord Shiva."
        },
        places: [
            { name: "Om Beach", img: "images/gok-1.jpg", about: "Named because it is shaped like the auspicious ॐ (Om) symbol. It offers water sports and a relaxed vibe." },
            { name: "Mahabaleshwar", img: "images/gok-2.jpg", about: "A 4th-century CE Hindu temple dedicated to Lord Shiva. It is built in the classical Dravidian architectural style." },
            { name: "Kudle Beach", img: "images/gok-3.jpg", about: "A C-shaped beach that is popular with backpackers and yoga enthusiasts. It is dotted with shacks and huts." },
            { name: "Half Moon Beach", img: "images/gok-4.jpg", about: "A small, secluded beach that is accessible only by hiking or by boat. It offers privacy and stunning sunset views." },
            { name: "Paradise Beach", img: "images/gok-5.jpg", about: "Also known as Full Moon Beach, it is a pristine beach that is great for camping and swimming." },
            { name: "Mirjan Fort", img: "images/gok-6.jpg", about: "A historic fort located on the banks of the Aghanashini River. It is known for its architectural elegance." },
            { name: "Shiva Statue", img: "images/gok-7.jpg", about: "A massive statue of Lord Shiva located in the Murudeshwar temple complex, a short drive from Gokarna." },
            { name: "Yana Caves", img: "images/gok-8.jpg", about: "Known for the unusual karst rock formations. It is a biodiversity hotspot and a pilgrimage center." }
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
            content: "Founded in 1156 AD by Rawal Jaisal, Jaisalmer rose as a major trading center on the camel caravan routes."
        },
        places: [
            { name: "Jaisalmer Fort", img: "images/jai-1.jpg", about: "One of the very few living forts in the world, as nearly one fourth of the old city's population still resides within the fort." },
            { name: "Sam Sand Dunes", img: "images/jai-2.jpg", about: "Located 42 km from Jaisalmer, these dunes are famous for camel safaris and the annual Desert Festival." },
            { name: "Patwon Ki Haveli", img: "images/jai-3.jpg", about: "A cluster of five havelis of grandeur, it is the first and largest haveli in Jaisalmer, known for its intricate carvings." },
            { name: "Gadisar Lake", img: "images/jai-4.jpg", about: "A man-made lake built by the founder of Jaisalmer, Raja Rawal Jaisal. It was once the only source of water for the city." },
            { name: "Bada Bagh", img: "images/jai-5.jpg", about: "A garden complex containing the chhatris (cenotaphs) of the Maharajas of Jaisalmer state." },
            { name: "Jain Temples", img: "images/jai-6.jpg", about: "Located inside the Jaisalmer Fort, these temples are dedicated to Jain Tirthankaras and are famous for their architecture." },
            { name: "Kuldhara", img: "images/jai-7.jpg", about: "An abandoned village known as the 'Ghost Village of Rajasthan'. It was abandoned overnight by its residents in the 19th century." },
            { name: "Tanot Mata", img: "images/jai-8.jpg", about: "A temple located close to the India-Pakistan border. It is believed that the goddess protected the region during the 1965 war." }
        ]
    }
};
