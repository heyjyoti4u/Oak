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
            content: "Delhi is a bridge between two worlds..."
        },
        places: [
            { 
                name: "India Gate", 
                img: "images/delhi-1.jpg",
                history: "The India Gate, originally named the All-India War Memorial, was designed by Sir Edwin Lutyens. The cornerstone was laid in 1921 by the Duke of Connaught, and it was dedicated to the nation in 1931. It stands as a memorial to 70,000 soldiers of the British Indian Army who died in the First World War. Beneath the arch burns the Amar Jawan Jyoti, an eternal flame added in 1972 to honor soldiers who died in the Indo-Pakistan War of 1971.",
                facts: [
                    "Height: 42 Meters",
                    "Architect: Sir Edwin Lutyens",
                    "Inspired by the Arc de Triomphe in Paris",
                    "Names of over 13,000 soldiers are inscribed on the walls"
                ],
                cuisine: "Pandara Road for Butter Chicken (Gulati's), Street Chaat at UPSC Lane.",
                bestTime: "Evenings (Sunset) or Early Morning."
            },
            { 
                name: "Red Fort", 
                img: "images/delhi-2.jpg",
                history: "Commissioned by Emperor Shah Jahan in 1638 when he shifted his capital from Agra to Delhi, the Red Fort (Lal Qila) took 10 years to complete. Designed by Ustad Ahmad Lahori, the architect of the Taj Mahal, it represents the zenith of Mughal creativity. The fort was the residence of the Mughal emperors for nearly 200 years until 1857. It witnessed the Nadir Shah invasion (looting of the Peacock Throne) and the First War of Independence.",
                facts: [
                    "UNESCO World Heritage Site",
                    "Originally red and white, but the white marble has faded",
                    "Features the famous Diwan-i-Aam and Diwan-i-Khas",
                    "Site of the Prime Minister's Independence Day speech"
                ],
                cuisine: "Mughlai food at Karim's or Al Jawahar (Jama Masjid area), Paranthas at Paranthe Wali Gali.",
                bestTime: "October to March (Avoid Mondays)."
            },
            { 
                name: "Qutub Minar", 
                img: "images/delhi-3.jpg", 
                history: "The construction of this soaring tower of victory was started in 1192 by Qutab-ud-din Aibak and later completed by his successor Iltutmish. The top storeys were constructed by Firoz Shah Tughlaq. It is the tallest brick minaret in the world at 73 meters. The complex also houses the Quwwat-ul-Islam Mosque, the first mosque built in India.",
                facts: [
                    "Height: 73 meters",
                    "Contains the famous non-rusting Iron Pillar of Delhi",
                    "Five distinct storeys with projecting balconies",
                    "Built using red sandstone and marble"
                ],
                cuisine: "Cafes in Champa Gali, Fine dining at Mehrauli (Olive Bar & Kitchen).",
                bestTime: "Winter afternoons (Nov-Feb)."
            },
            { 
                name: "Humayun's Tomb", 
                img: "images/delhi-4.jpg", 
                history: "Built in 1570 by Empress Bega Begum for her husband Humayun, this tomb is the first garden-tomb on the Indian subcontinent. It introduced the Persian Charbagh style of gardens to India. The double-dome structure and red sandstone masonry served as a direct prototype for the Taj Mahal in Agra.",
                facts: [
                    "First garden-tomb in India",
                    "Dormitory of the Mughals (over 150 graves)",
                    "Restored extensively by Aga Khan Trust for Culture",
                    "Beautiful Charbagh (Four Gardens) layout"
                ],
                cuisine: "Nizamuddin Basti for Kebabs, Sunder Nursery Organic Cafe.",
                bestTime: "Late afternoon for Golden Hour photography."
            },
            { 
                name: "Lotus Temple", 
                img: "images/delhi-5.jpg", 
                history: "Opened in 1986, the Lotus Temple is a Baháʼí House of Worship designed by Fariborz Sahba. It is structured like a lotus flower, consisting of 27 free-standing marble-clad 'petals' arranged in clusters of three. It has won numerous architectural awards and is open to people of all religions to pray or meditate silently.",
                facts: [
                    "Made of Greek Pentelic marble",
                    "Capacity: 2,500 people",
                    "No idols, no religious pictures, no sermons",
                    "Symbolizes purity and unity"
                ],
                cuisine: "Nehru Place Epicuria (Food Court), Kalkaji market street food.",
                bestTime: "Weekdays (to avoid crowds)."
            },
            { 
                name: "Akshardham", 
                img: "images/delhi-6.jpg", 
                history: "Officially named Swaminarayan Akshardham, this temple complex was opened in 2005. It was constructed by 11,000 artisans and volunteers. The main mandir is built according to Vastu Shastra and Pancharatra Shastra, entirely of Rajasthani pink sandstone and Italian Carrara marble, without using any steel or concrete support.",
                facts: [
                    "Guinness World Record for Largest Comprehensive Hindu Temple",
                    "Features a boat ride (Sanskruti Vihar) and musical fountain",
                    "Features 234 ornately carved pillars",
                    "No electronics allowed inside"
                ],
                cuisine: "Premvati Food Court (Inside complex) serves pure veg Satvik food.",
                bestTime: "Afternoon to stay for the Evening Water Show."
            },
            { 
                name: "Chandni Chowk", 
                img: "images/delhi-7.jpg", 
                history: "Established in the 17th century by Mughal Emperor Shah Jahan and designed by his daughter Jahanara, Chandni Chowk (Moonlight Square) was once divided by canals reflecting the moonlight. It remains one of India's oldest and busiest markets, housing religious shrines of multiple faiths side by side.",
                facts: [
                    "Home to Asia's largest spice market (Khari Baoli)",
                    "Famous for 'Paranthe Wali Gali'",
                    "Contains Sis Ganj Sahib Gurudwara and Digambar Jain Lal Mandir",
                    "Narrow lanes (Kuchas) and Havelis"
                ],
                cuisine: "Natraj Dahi Bhalle, Old Famous Jalebi Wala, Rabri Faluda.",
                bestTime: "Early morning for breakfast or Late evening."
            },
            { 
                name: "Hauz Khas", 
                img: "images/delhi-8.jpg", 
                history: "Hauz Khas (Royal Tank) was excavated during the reign of Alauddin Khalji in the 13th century to supply water to the Siri Fort. Later, Firoz Shah Tughlaq re-excavated it and built a Madrasa, a mosque, and his own tomb overlooking the water. Today, the village around it is a trendy hub of art galleries and boutiques.",
                facts: [
                    "Blend of medieval history and modern nightlife",
                    "Houses the tomb of Firoz Shah Tughlaq",
                    "Excellent Deer Park attached",
                    "Famous for Graffiti and Street Art"
                ],
                cuisine: "Social Offline, Yeti (Himalayan Kitchen), Kunzum Travel Cafe.",
                bestTime: "Sunset by the lake."
            }
        ]
    },

    "jaipur": {
        name: "Jaipur",
        tagline: "The Pink City",
        heroImage: "images/jaipur-lit.jpg",
        events: [],
        story: { heading: "Royal Grandeur", content: "..." },
        places: [
            { 
                name: "Hawa Mahal", 
                img: "images/jaipur-1.jpg", 
                history: "Built in 1799 by Maharaja Sawai Pratap Singh, the Hawa Mahal (Palace of Winds) was designed by Lal Chand Ustad. Its unique five-story exterior is akin to the honeycomb of a beehive with its 953 small windows called Jharokhas decorated with intricate latticework. The original intent was to allow royal ladies to observe everyday life and festivals celebrated in the street below without being seen.",
                facts: [
                    "5-story pyramidal shape",
                    "No foundation (curved architecture keeps it stable)",
                    "Dedicated to Lord Krishna",
                    "Natural air conditioning via Venturi effect"
                ],
                cuisine: "Lassiwala (MI Road), Rawat Kachori.",
                bestTime: "Early Morning (Sunrise falls on the facade)."
            },
            { 
                name: "Amber Fort", 
                img: "images/jaipur-2.jpg", 
                history: "Located 11 km from Jaipur, Amber (Amer) Fort was built by Raja Man Singh I in 1592. It is known for its artistic style elements, blending Hindu and Rajput elements. The fort is constructed of red sandstone and marble. The Maota Lake provides a beautiful reflection of the fort. It was the residence of the Rajput Maharajas and their families.",
                facts: [
                    "Famous Sheesh Mahal (Mirror Palace)",
                    "Declared UNESCO World Heritage Site",
                    "Connected to Jaigarh Fort via subterranean passage",
                    "Features the Ganesh Pol entrance"
                ],
                cuisine: "1135 AD (Royal dining inside fort), Surabhi Restaurant.",
                bestTime: "Winter mornings or Evening Light & Sound Show."
            },
            { name: "City Palace", img: "images/jaipur-3.jpg", history: "Built by Sawai Jai Singh II between 1729 and 1732, the palace complex lies in the heart of Jaipur. It includes the Chandra Mahal and Mubarak Mahal palaces and other buildings. The palace was the seat of the Maharaja of Jaipur.", facts: ["Fusion of Indian, Mughal, Rajput architecture", "Houses a museum of royal costumes", "Famous Peacock Gate"], cuisine: "Baradari Restaurant (Inside palace).", bestTime: "Morning 10 AM." },
            { name: "Jantar Mantar", img: "images/jaipur-4.jpg", history: "A collection of 19 architectural astronomical instruments built by the Rajput king Sawai Jai Singh II, completed in 1734. It features the world's largest stone sundial, and is a UNESCO World Heritage site.", facts: ["World's largest Stone Sundial (Vrihat Samrat Yantra)", "Calculates time to 2-second accuracy", "Instruments predict eclipses"], cuisine: "Tapri Central (Tea & Snacks).", bestTime: "Mid-day (when sun is overhead)." },
            { name: "Nahargarh Fort", img: "images/jaipur-5.jpg", history: "Nahargarh stands on the edge of the Aravalli Hills, overlooking the city of Jaipur. Built in 1734 by Maharaja Sawai Jai Singh, mainly as a place of retreat. It was never attacked by enemies.", facts: ["Best sunset view of Jaipur city", "Features the Madhavendra Bhawan", "Famous filming location (Rang De Basanti)"], cuisine: "Padao Open Air Restaurant (at the Fort).", bestTime: "Sunset." },
            { name: "Albert Hall", img: "images/jaipur-6.jpg", history: "The oldest museum of the state and the state museum of Rajasthan. The building is situated in Ram Niwas Garden. It was named after King Edward VII (Albert Edward) and built in 1876.", facts: ["Indo-Saracenic architecture", "Houses an Egyptian Mummy", "Famous for its pigeons outside"], cuisine: "Masala Chowk (Open air food court nearby).", bestTime: "Evening (Beautifully lit up)." },
            { name: "Jal Mahal", img: "images/jaipur-7.jpg", history: "The Jal Mahal (Water Palace) is located in the middle of the Man Sagar Lake in Jaipur city. The palace and the lake around it were renovated and enlarged in the 18th century by Maharaja Jai Singh II.", facts: ["4 floors are underwater, only 1 visible", "Migratory birds destination", "Red sandstone architecture"], cuisine: "Street food on the promenade.", bestTime: "Evening walk." },
            { name: "Bapu Bazaar", img: "images/jaipur-8.jpg", history: "One of the most famous markets in Jaipur, known for its vibrancy and pink rustic buildings. It is the ultimate destination for traditional Rajasthani shopping.", facts: ["Famous for Mojari (Camel leather shoes)", "Bandhani textiles", "Traditional Lac Bangles"], cuisine: "Faluda Kulfi shops nearby.", bestTime: "Afternoon to Evening." }
        ]
    },

    "kutch": {
        name: "Rann of Kutch",
        tagline: "The White Desert",
        heroImage: "images/rann-utsav.jpg",
        events: [],
        story: { heading: "Where Earth Meets Sky", content: "..." },
        places: [
            { 
                name: "White Desert", 
                img: "images/kutch-1.jpg", 
                history: "The Great Rann of Kutch is a salt marsh in the Thar Desert in the Kutch District of Gujarat. It is about 7500 sq km in area and is reputed to be one of the largest salt deserts in the world. The area turns into a marsh during monsoons and a white endless desert in winters.",
                facts: ["Largest salt desert in the world", "Best viewed during Full Moon", "Hosts the Rann Utsav"], 
                cuisine: "Kutchi Dabeli, Odho (Local curry).", 
                bestTime: "November to February (Full Moon)." 
            },
            { name: "Kalo Dungar", img: "images/kutch-2.jpg", history: "Black Hill is the highest point in Kutch at 462 m. It is the only place in Kutch from where a panoramic view of the Great Rann of Kutch is possible. It is famous for the 400-year-old Dattatreya temple.", facts: ["Highest point in Kutch", "Magnetic hill phenomenon nearby", "View of Pakistan border"], cuisine: "Temple Prasadam (Sweet Rice).", bestTime: "Sunset." },
            { name: "Bhujodi", img: "images/kutch-3.jpg", history: "A major textile center of Kutch, where the Vankars (weavers) create exquisite shawls and blankets. It is a living museum of Gujarat's textile heritage.", facts: ["Home to award-winning artisans", "Hiralaxmi Craft Park", "Traditional Pit Looms"], cuisine: "Local Gujarati Thali.", bestTime: "Morning." },
            { name: "Aina Mahal", img: "images/kutch-4.jpg", history: "The Palace of Mirrors was built by Rao Lakhpatji in 1761. It was designed by Ramsinh Malam, who had spent 17 years in Europe. It houses a Hall of Mirrors with Venetian glass.", facts: ["Indo-European architecture", "Features a Pleasure Pool", "Damaged in 2001 earthquake but restored"], cuisine: "Traditional Kutchi Thali.", bestTime: "10 AM - 5 PM." },
            { name: "Mandvi Beach", img: "images/kutch-5.jpg", history: "Mandvi was once a major port of the region. The beach is pristine with windmills lining the horizon. It is close to the Vijay Vilas Palace, a summer retreat of the royal family.", facts: ["Wind Farm Beach", "Vijay Vilas Palace nearby", "Shipbuilding yard"], cuisine: "Mandvi famed Dabeli (Origin place).", bestTime: "Late Afternoon." },
            { name: "Prag Mahal", img: "images/kutch-6.jpg", history: "Built in the 19th century next to Aina Mahal, it is designed in the Italian Gothic style. The palace was commissioned by Rao Pragmalji II and designed by Colonel Henry Saint Wilkins.", facts: ["Italian Gothic style", "45-foot high clock tower", "Used in Bollywood movies (Lagaan)"], cuisine: "Local snacks in Bhuj market.", bestTime: "Daytime." },
            { name: "Dholavira", img: "images/kutch-7.jpg", history: "One of the most remarkable and well-preserved urban settlements of the Indus Valley Civilization (Harappan), dating back 4500 years. It showcases sophisticated water conservation systems.", facts: ["UNESCO World Heritage Site", "Unique signboard with Indus script", "Advanced water reservoirs"], cuisine: "Carry your own food (Remote area).", bestTime: "Winter Morning." },
            { name: "Narayan Sarovar", img: "images/kutch-8.jpg", history: "One of the five holy lakes of Hinduism, along with Mansarovar, Pushkar, Pampa, and Bindu Sarovar. It is associated with a drought that was ended by Lord Vishnu.", facts: ["One of 5 holy lakes", "Koteshwar temple nearby", "Wildlife Sanctuary nearby"], cuisine: "Temple food.", bestTime: "Early Morning." }
        ]
    },

    // PLACEHOLDERS FOR OTHERS TO PREVENT ERRORS (Add detailed history similarly if needed)
    "auli": { name: "Auli", tagline: "Ski Capital", heroImage: "images/auli-ski.jpg", events: [], story: {}, places: [
        { name: "Auli Artificial Lake", img: "images/auli-1.jpg", history: "World's highest man-made lake.", facts: ["Skiing source", "Scenic beauty"], cuisine: "Garhwali cuisine", bestTime: "Winter" },
        { name: "Auli Ropeway", img: "images/auli-2.jpg", history: "Connects Joshimath to Auli.", facts: ["Asia's longest", "Panoramic views"], cuisine: "Maggi at viewpoints", bestTime: "Morning" },
        { name: "Gorson Bugyal", img: "images/auli-3.jpg", history: "Lush alpine meadow.", facts: ["Trekking spot", "Oak forests"], cuisine: "Packaged snacks", bestTime: "Daytime" },
        { name: "Joshimath", img: "images/auli-4.jpg", history: "Winter seat of Lord Badrinath.", facts: ["Sacred town", "Gateway to treks"], cuisine: "North Indian Thali", bestTime: "All year" },
        { name: "Nanda Devi Park", img: "images/auli-5.jpg", history: "Biosphere reserve.", facts: ["UNESCO site", "Flora & Fauna"], cuisine: "None inside", bestTime: "Summer" },
        { name: "Chattrakund", img: "images/auli-6.jpg", history: "Sweet water lake.", facts: ["Dense forest", "Honeymoon spot"], cuisine: "Local tea", bestTime: "Daytime" },
        { name: "Chenab Lake", img: "images/auli-7.jpg", history: "Offbeat artificial lake.", facts: ["Less crowded", "Calm waters"], cuisine: "Picnic food", bestTime: "Daytime" },
        { name: "Kwani Bugyal", img: "images/auli-8.jpg", history: "Trekkers paradise.", facts: ["View of Nanda Devi", "Camping"], cuisine: "Campfire food", bestTime: "Summer" }
    ]},
    "lakshadweep": { name: "Lakshadweep", tagline: "Coral Paradise", heroImage: "images/lakshadweep.jpg", events: [], story: {}, places: [
        { name: "Agatti Island", img: "images/lak-1.jpg", history: "Gateway to the archipelago.", facts: ["Has Airport", "Beautiful lagoon"], cuisine: "Tuna Fish Fry", bestTime: "Oct-May" },
        { name: "Minicoy Island", img: "images/lak-2.jpg", history: "Southernmost island, Maldivian culture.", facts: ["Lighthouse", "Tuna canning"], cuisine: "Coconut rice", bestTime: "Winter" },
        { name: "Bangaram", img: "images/lak-3.jpg", history: "Uninhabited tourist resort.", facts: ["Phosphorescent plankton", "Alcohol allowed"], cuisine: "Seafood BBQ", bestTime: "Winter" },
        { name: "Kavaratti", img: "images/lak-4.jpg", history: "Capital city.", facts: ["52 Mosques", "Marine Aquarium"], cuisine: "Malabar Parotta", bestTime: "All year" },
        { name: "Kalpeni", img: "images/lak-5.jpg", history: "Known for storm bank of coral debris.", facts: ["Snorkeling", "Three islets"], cuisine: "Spicy Fish Curry", bestTime: "Winter" },
        { name: "Marine Museum", img: "images/lak-6.jpg", history: "Showcases marine artifacts.", facts: ["Shark skeletons", "Coral displays"], cuisine: "N/A", bestTime: "Daytime" },
        { name: "Kadmat", img: "images/lak-7.jpg", history: "Known for long sandy beaches.", facts: ["Scuba center", "Coral gardens"], cuisine: "Fresh Lobster", bestTime: "Winter" },
        { name: "Lighthouse", img: "images/lak-8.jpg", history: "Old British lighthouses.", facts: ["360 view", "Historic"], cuisine: "N/A", bestTime: "Evening" }
    ]},
    "hampi": { name: "Hampi", tagline: "City of Ruins", heroImage: "images/hampi.jpg", events: [], story: {}, places: [
        { name: "Virupaksha Temple", img: "images/hampi-1.jpg", history: "Oldest shrine, dedicated to Shiva.", facts: ["7th century", "Still functioning"], cuisine: "South Indian Thali", bestTime: "Morning" },
        { name: "Vithala Temple", img: "images/hampi-2.jpg", history: "Epicenter of Hampi's attractions.", facts: ["Musical Pillars", "Stone Chariot"], cuisine: "Coconut Water", bestTime: "Afternoon" },
        { name: "Stone Chariot", img: "images/hampi-3.jpg", history: "Shrine dedicated to Garuda.", facts: ["Monolithic", "Rotating wheels"], cuisine: "N/A", bestTime: "Daytime" },
        { name: "Lotus Mahal", img: "images/hampi-4.jpg", history: "Queen's summer palace.", facts: ["Indo-Islamic", "Air cooled"], cuisine: "Mango Rice", bestTime: "Evening" },
        { name: "Elephant Stables", img: "images/hampi-5.jpg", history: "Royal elephant parking.", facts: ["11 Domes", "Grand structure"], cuisine: "N/A", bestTime: "Daytime" },
        { name: "Matanga Hill", img: "images/hampi-6.jpg", history: "Best view of Hampi.", facts: ["Sunrise spot", "Steep climb"], cuisine: "Breakfast at Mango Tree", bestTime: "Dawn" },
        { name: "Tungabhadra River", img: "images/hampi-7.jpg", history: "River dividing the ruins.", facts: ["Coracle rides", "Ancient rocks"], cuisine: "River fish", bestTime: "Evening" },
        { name: "Hippie Island", img: "images/hampi-8.jpg", history: "Backpacker's paradise.", facts: ["Bouldering", "Relaxed vibe"], cuisine: "Israeli Food", bestTime: "All day" }
    ]},
    "varanasi": { name: "Varanasi", tagline: "Spiritual Capital", heroImage: "images/varanasi.jpg", events: [], story: {}, places: [
        { name: "Kashi Vishwanath", img: "images/varanasi-1.jpg", history: "Golden Temple of Shiva.", facts: ["Jyotirlinga", "Gold plated"], cuisine: "Blue Lassi", bestTime: "Early Morning" },
        { name: "Dashashwamedh Ghat", img: "images/varanasi-2.jpg", history: "Main ghat for Aarti.", facts: ["Ganga Aarti", "Crowded"], cuisine: "Kachori Sabzi", bestTime: "Evening" },
        { name: "Assi Ghat", img: "images/varanasi-3.jpg", history: "Place where River Assi meets Ganga.", facts: ["Subah-e-Banaras", "Student hub"], cuisine: "Pizzeria Vaatika", bestTime: "Morning" },
        { name: "Sarnath", img: "images/varanasi-4.jpg", history: "Buddha's first sermon.", facts: ["Dhamek Stupa", "Lion Capital"], cuisine: "Tibetan Food", bestTime: "Daytime" },
        { name: "Manikarnika Ghat", img: "images/varanasi-5.jpg", history: "Burning ghat.", facts: ["Moksha spot", "Eternal fire"], cuisine: "Malaiyo", bestTime: "Anytime" },
        { name: "Ramnagar Fort", img: "images/varanasi-6.jpg", history: "Ancestral home of Maharaja.", facts: ["Vintage cars", "Museum"], cuisine: "Lassi", bestTime: "Afternoon" },
        { name: "Sankat Mochan", img: "images/varanasi-7.jpg", history: "Hanuman temple.", facts: ["Tulsidas built it", "Monkeys"], cuisine: "Besan Laddu", bestTime: "Tuesday" },
        { name: "BHU Campus", img: "images/varanasi-8.jpg", history: "Asia's largest residential uni.", facts: ["New VT Temple", "Greenery"], cuisine: "Cold Coffee", bestTime: "Evening" }
    ]},
    "munnar": { name: "Munnar", tagline: "Kashmir of South", heroImage: "images/munnar.jpg", events: [], story: {}, places: [
        { name: "Tea Museum", img: "images/munnar-1.jpg", history: "History of tea in Munnar.", facts: ["Tea tasting", "Machinery"], cuisine: "Tea & Cake", bestTime: "Daytime" },
        { name: "Eravikulam Park", img: "images/munnar-2.jpg", history: "Home to Nilgiri Tahr.", facts: ["Anamudi view", "Biodiversity"], cuisine: "Kerala Sadya", bestTime: "Morning" },
        { name: "Mattupetty Dam", img: "images/munnar-3.jpg", history: "Concrete gravity dam.", facts: ["Boating", "Elephants"], cuisine: "Corn & Peanuts", bestTime: "Evening" },
        { name: "Echo Point", img: "images/munnar-4.jpg", history: "Natural echo phenomenon.", facts: ["Scenic lake", "Misty"], cuisine: "Hot Maggi", bestTime: "Morning" },
        { name: "Anamudi Peak", img: "images/munnar-5.jpg", history: "Highest peak in South India.", facts: ["2695m high", "Trekking"], cuisine: "Packed food", bestTime: "Morning" },
        { name: "Pothamedu View", img: "images/munnar-6.jpg", history: "Sunset view point.", facts: ["Tea valleys", "Coffee"], cuisine: "Ginger Tea", bestTime: "Sunset" },
        { name: "Attukad Falls", img: "images/munnar-7.jpg", history: "Scenic waterfall.", facts: ["Trekking", "Nature"], cuisine: "Bajji", bestTime: "Post-Monsoon" },
        { name: "Top Station", img: "images/munnar-8.jpg", history: "Highest point on border.", facts: ["Neelakurinji", "Clouds"], cuisine: "Carrots", bestTime: "Sunrise" }
    ]},
    "ayodhya": { name: "Ayodhya", tagline: "City of Rama", heroImage: "images/ayodhya.jpg", events: [], story: {}, places: [
        { name: "Ram Mandir", img: "images/ayo-1.jpg", history: "Grand temple for Lord Rama.", facts: ["Nagara style", "Sacred"], cuisine: "Vegetarian Thali", bestTime: "Morning" },
        { name: "Hanuman Garhi", img: "images/ayo-2.jpg", history: "Fort-temple of Hanuman.", facts: ["76 steps", "Guardian"], cuisine: "Laddu", bestTime: "Morning" },
        { name: "Kanak Bhawan", img: "images/ayo-3.jpg", history: "Gift to Sita by Kaikeyi.", facts: ["Golden palace", "Beautiful idols"], cuisine: "Prasad", bestTime: "Daytime" },
        { name: "Saryu Ghat", img: "images/ayo-4.jpg", history: "Holy river bank.", facts: ["Aarti", "Boating"], cuisine: "Chaat", bestTime: "Evening" },
        { name: "Nageshwarnath", img: "images/ayo-5.jpg", history: "Established by Kush.", facts: ["Shiva temple", "Oldest"], cuisine: "Milk sweets", bestTime: "Monday" },
        { name: "Ram Ki Paidi", img: "images/ayo-6.jpg", history: "Riverfront ghats.", facts: ["Light show", "Bathing"], cuisine: "Street Food", bestTime: "Night" },
        { name: "Mani Parbat", img: "images/ayo-7.jpg", history: "Mythological hillock.", facts: ["Sanjeevani", "Viewpoint"], cuisine: "N/A", bestTime: "Daytime" },
        { name: "Dashrath Mahal", img: "images/ayo-8.jpg", history: "King's palace.", facts: ["Shrine", "Satsang"], cuisine: "Veg Thali", bestTime: "Daytime" }
    ]},
    "tawang": { name: "Tawang", tagline: "Monk Land", heroImage: "images/tawang.jpg", events: [], story: {}, places: [
        { name: "Tawang Monastery", img: "images/tawang-1.jpg", history: "Largest in India.", facts: ["Golden Buddha", "Library"], cuisine: "Butter Tea", bestTime: "Morning" },
        { name: "Sela Pass", img: "images/tawang-2.jpg", history: "High altitude pass.", facts: ["Frozen lake", "Gateway"], cuisine: "Momos", bestTime: "Noon" },
        { name: "Madhuri Lake", img: "images/tawang-3.jpg", history: "Sangetsar Lake.", facts: ["Bollywood fame", "Scenic"], cuisine: "Maggi", bestTime: "Morning" },
        { name: "Nuranang Falls", img: "images/tawang-4.jpg", history: "Jang Falls.", facts: ["100m drop", "Crystal clear"], cuisine: "N/A", bestTime: "Daytime" },
        { name: "War Memorial", img: "images/tawang-5.jpg", history: "1962 War tribute.", facts: ["Patriotic", "Stupa"], cuisine: "N/A", bestTime: "Evening" },
        { name: "Gorichen Peak", img: "images/tawang-6.jpg", history: "Highest peak.", facts: ["Mountaineering", "Sacred"], cuisine: "Packed food", bestTime: "Daytime" },
        { name: "Bumla Pass", img: "images/tawang-7.jpg", history: "Indo-China border.", facts: ["Meeting point", "Permit needed"], cuisine: "Army Canteen", bestTime: "Morning" },
        { name: "Jaswant Garh", img: "images/tawang-8.jpg", history: "Hero's memorial.", facts: ["Legend", "Bunker"], cuisine: "Free Samosa/Tea", bestTime: "Stopover" }
    ]},
    "gokarna": { name: "Gokarna", tagline: "Peaceful", heroImage: "images/gokarna.jpg", events: [], story: {}, places: [
        { name: "Om Beach", img: "images/gok-1.jpg", history: "Shaped like Om.", facts: ["Water sports", "Famous"], cuisine: "Namaste Cafe", bestTime: "Sunset" },
        { name: "Mahabaleshwar", img: "images/gok-2.jpg", history: "Atmalinga temple.", facts: ["Dravidian", "Sacred"], cuisine: "Prasadam", bestTime: "Morning" },
        { name: "Kudle Beach", img: "images/gok-3.jpg", history: "Backpacker hub.", facts: ["C-shaped", "Shacks"], cuisine: "Seafood", bestTime: "Sunset" },
        { name: "Half Moon Beach", img: "images/gok-4.jpg", history: "Secluded beach.", facts: ["Hiking access", "Private"], cuisine: "Fresh Juice", bestTime: "Afternoon" },
        { name: "Paradise Beach", img: "images/gok-5.jpg", history: "Full Moon beach.", facts: ["Camping", "Rocks"], cuisine: "BBQ", bestTime: "Night" },
        { name: "Mirjan Fort", img: "images/gok-6.jpg", history: "Pepper queen fort.", facts: ["Laterite", "Greenery"], cuisine: "Snacks", bestTime: "Morning" },
        { name: "Shiva Statue", img: "images/gok-7.jpg", history: "Murudeshwar (nearby).", facts: ["Tallest statue", "Sea view"], cuisine: "RNS Residency", bestTime: "Evening" },
        { name: "Yana Caves", img: "images/gok-8.jpg", history: "Rock formations.", facts: ["Karst rock", "Trek"], cuisine: "Local food", bestTime: "Daytime" }
    ]},
    "jaisalmer": { name: "Jaisalmer", tagline: "Golden City", heroImage: "images/jaisalmer.jpg", events: [], story: {}, places: [
        { name: "Jaisalmer Fort", img: "images/jai-1.jpg", history: "Living fort.", facts: ["Golden stone", "Residents inside"], cuisine: "Italian & Rajsthani", bestTime: "Evening" },
        { name: "Sam Sand Dunes", img: "images/jai-2.jpg", history: "Desert safari.", facts: ["Camel ride", "Camping"], cuisine: "Dal Baati", bestTime: "Sunset" },
        { name: "Patwon Ki Haveli", img: "images/jai-3.jpg", history: "Merchant mansions.", facts: ["Cluster of 5", "Carvings"], cuisine: "Local sweets", bestTime: "Morning" },
        { name: "Gadisar Lake", img: "images/jai-4.jpg", history: "Water conservation.", facts: ["Boating", "Temples"], cuisine: "Pakoras", bestTime: "Evening" },
        { name: "Bada Bagh", img: "images/jai-5.jpg", history: "Royal cenotaphs.", facts: ["Sunset view", "History"], cuisine: "N/A", bestTime: "Sunset" },
        { name: "Jain Temples", img: "images/jai-6.jpg", history: "Inside fort.", facts: ["Intricate", "Dilwara style"], cuisine: "Veg food", bestTime: "Morning" },
        { name: "Kuldhara", img: "images/jai-7.jpg", history: "Haunted village.", facts: ["Abandoned", "Ruins"], cuisine: "N/A", bestTime: "Daytime" },
        { name: "Tanot Mata", img: "images/jai-8.jpg", history: "Border temple.", facts: ["1965 war", "Unexploded bombs"], cuisine: "Langad", bestTime: "Daytime" }
    ]}
};
