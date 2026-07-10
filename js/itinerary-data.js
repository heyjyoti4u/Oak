// js/itinerary-data.js
// Day-wise itinerary, activity and food content for every destination in travelData.
// Each entry links back to travelData[destId].places[placeIndex] so images/names stay in sync.

const itineraryData = {

    "delhi": {
        duration: "3 Days / 2 Nights",
        bestTime: "October to March",
        budget: "₹2,500 – ₹4,500 / day",
        idealFor: "History lovers, first-time visitors, food explorers",
        days: [
            {
                day: 1,
                title: "Mughal Delhi & The Walled City",
                slots: [
                    { time: "Morning", placeIndex: 1, note: "Start at the Red Fort — walk the ramparts Shah Jahan once walked and imagine the Mughal court in full swing." },
                    { time: "Afternoon", placeIndex: 6, note: "Dive into Chandni Chowk. Get lost in the lanes, haggle at the spice market, and let the city's chaos win you over." },
                    { time: "Evening", placeIndex: 0, note: "Wind down at India Gate as the monument lights up — carry a mat and join the locals for an evening picnic." }
                ],
                food: [
                    { meal: "Breakfast", name: "Stuffed Parathas", desc: "Head to Paranthe Wali Gali for a plate of ghee-soaked, stuffed parathas with tangy pickle." },
                    { meal: "Dinner", name: "Mughlai Kebabs", desc: "Old Delhi's legendary kebab houses serve smoky seekh and mutton burra straight off the coal grill." }
                ]
            },
            {
                day: 2,
                title: "Monuments & Modern Marvels",
                slots: [
                    { time: "Morning", placeIndex: 2, note: "Climb the story of the Qutub Minar, then wander the Iron Pillar and the ruins around it." },
                    { time: "Afternoon", placeIndex: 3, note: "Humayun's Tomb is a quieter, greener escape — the blueprint for the Taj Mahal decades later." },
                    { time: "Evening", placeIndex: 4, note: "Catch the Lotus Temple at golden hour, when the marble petals glow against the sky." }
                ],
                food: [
                    { meal: "Breakfast", name: "Chole Bhature", desc: "A Delhi classic — fluffy fried bread with spiced chickpeas, best from a no-frills local dhaba." },
                    { meal: "Dinner", name: "Butter Chicken", desc: "Try the dish that was invented in Delhi, rich with tomato gravy and finished with cream." }
                ]
            },
            {
                day: 3,
                title: "Spiritual Delhi & Boutique Delhi",
                slots: [
                    { time: "Morning", placeIndex: 5, note: "Spend the morning at Akshardham — the scale of the carvings and gardens needs unhurried time." },
                    { time: "Afternoon", placeIndex: 7, note: "Shop and sip at Hauz Khas Village, where medieval ruins sit beside boutique cafés and street art." }
                ],
                food: [
                    { meal: "Lunch", name: "Temple Thali", desc: "Akshardham's food court serves a simple, satisfying vegetarian thali." },
                    { meal: "Dinner", name: "Rooftop Fusion", desc: "Hauz Khas Village's rooftop cafés are perfect for a relaxed farewell dinner overlooking the lake ruins." }
                ]
            }
        ],
        cuisine: [
            { name: "Chole Bhature", desc: "Spiced chickpeas with deep-fried bread — Delhi's favourite breakfast." },
            { name: "Butter Chicken", desc: "Tomato-cream gravy invented in the city's old kitchens." },
            { name: "Daulat ki Chaat", desc: "A winter-only, cloud-like milk dessert sold only in the early morning." },
            { name: "Seekh Kebabs", desc: "Char-grilled minced meat skewers from Old Delhi's kebab lanes." }
        ]
    },

    "kutch": {
        duration: "3 Days / 2 Nights",
        bestTime: "November to February (Rann Utsav season)",
        budget: "₹3,000 – ₹6,000 / day",
        idealFor: "Culture seekers, photographers, desert first-timers",
        days: [
            {
                day: 1,
                title: "Heritage Bhuj & The White Desert",
                slots: [
                    { time: "Morning", placeIndex: 3, note: "Explore Aina Mahal's mirrored halls, a glimpse into the opulence of the old Kutch royals." },
                    { time: "Afternoon", placeIndex: 5, note: "Walk through Prag Mahal's Gothic corridors and climb the clock tower for city views." },
                    { time: "Evening", placeIndex: 0, note: "Drive out to the White Desert for sunset — under a full moon it turns silver as far as you can see." }
                ],
                food: [
                    { meal: "Breakfast", name: "Khaman Dhokla", desc: "Soft, steamed gram-flour cakes tempered with mustard seeds — a Gujarati staple." },
                    { meal: "Dinner", name: "Kutchi Thali at Tent City", desc: "A spread of bajra rotla, kadhi, and seasonal sabzis served in the Rann Utsav dining tents." }
                ]
            },
            {
                day: 2,
                title: "Craft Villages & Highest Point",
                slots: [
                    { time: "Morning", placeIndex: 2, note: "Visit the weaving village of Bhujodi — watch artisans work looms that produce Kutch's famous textiles." },
                    { time: "Afternoon", placeIndex: 1, note: "Head up to Kalo Dungar, the highest point in Kutch, for a panoramic view over the Rann." },
                    { time: "Evening", placeIndex: 0, note: "Return to Tent City for folk dance and live Kutchi music around the campfire." }
                ],
                food: [
                    { meal: "Breakfast", name: "Bajra Rotla with White Butter", desc: "A hearty millet flatbread, traditionally paired with fresh white butter and jaggery." },
                    { meal: "Dinner", name: "Kutchi Dabeli", desc: "A spiced, tangy potato filling stuffed in a soft bun — sold at roadside stalls all over Kutch." }
                ]
            },
            {
                day: 3,
                title: "The Coast & The Ancients",
                slots: [
                    { time: "Morning", placeIndex: 4, note: "Relax at Mandvi Beach and see the old shipbuilding yards still in use today." },
                    { time: "Afternoon", placeIndex: 6, note: "Make the trip to Dholavira, one of the largest and best-preserved Harappan sites in India." },
                    { time: "Evening", placeIndex: 7, note: "If time allows, catch sunset at the tranquil Narayan Sarovar lake before heading back." }
                ],
                food: [
                    { meal: "Lunch", name: "Gujarati Thali", desc: "A balanced, unlimited thali of dal, kadhi, sabzi, rotli and a sweet — a Kutch coastal favourite." },
                    { meal: "Dinner", name: "Undhiyu", desc: "A slow-cooked mixed vegetable dish, richly spiced — a Gujarat winter specialty." }
                ]
            }
        ],
        cuisine: [
            { name: "Kutchi Dabeli", desc: "Sweet-and-spicy potato filling in a toasted bun, topped with pomegranate and sev." },
            { name: "Bajra Rotla", desc: "Millet flatbread served with white butter and jaggery." },
            { name: "Khaman Dhokla", desc: "Steamed, spongy gram-flour squares, a beloved Gujarati snack." },
            { name: "Kutchi Kadhi", desc: "A slightly sweet, tangy yogurt-based curry unique to the region." }
        ]
    },

    "auli": {
        duration: "3 Days / 2 Nights",
        bestTime: "December to February for snow, April to June for meadows",
        budget: "₹3,500 – ₹6,000 / day",
        idealFor: "Adventure seekers, skiers, honeymooners",
        days: [
            {
                day: 1,
                title: "Arrival & First Views",
                slots: [
                    { time: "Morning", placeIndex: 3, note: "Acclimatise in Joshimath, browse the local market and pick up warm layers if needed." },
                    { time: "Afternoon", placeIndex: 1, note: "Take Asia's longest cable car ride on the Auli Ropeway, floating above pine forests to the resort." },
                    { time: "Evening", placeIndex: 0, note: "Stroll around the Auli Artificial Lake as the peaks turn pink at dusk." }
                ],
                food: [
                    { meal: "Lunch", name: "Garhwali Thali", desc: "A wholesome plate of phaanu, kaapa and mandua roti — mountain comfort food." },
                    { meal: "Dinner", name: "Jhangora Kheer", desc: "A warm barnyard-millet pudding, perfect after a cold day outdoors." }
                ]
            },
            {
                day: 2,
                title: "Meadows, Skiing & Bonfire",
                slots: [
                    { time: "Morning", placeIndex: 2, note: "Trek or ski across Gorson Bugyal, a wide open meadow ringed by snow peaks." },
                    { time: "Afternoon", placeIndex: 4, note: "Stop at the Nanda Devi viewpoint for one of the best close-up views of the peak in the region." },
                    { time: "Evening", note: "Gather round a bonfire back at the resort — most stays organise one on winter evenings." }
                ],
                food: [
                    { meal: "Breakfast", name: "Aloo ke Gutke", desc: "Spiced, pan-fried potatoes tempered with local Himalayan herbs." },
                    { meal: "Dinner", name: "Chainsoo", desc: "A slow-roasted black gram lentil dish, deeply savoury and warming." }
                ]
            },
            {
                day: 3,
                title: "Hidden Trails",
                slots: [
                    { time: "Morning", placeIndex: 5, note: "Trek to Chattrakund Lake, a lesser-visited spot that stays peaceful even in season." },
                    { time: "Afternoon", placeIndex: 7, note: "Explore Kwani Bugyal or the Chenab Lake area for one last quiet Himalayan view before departure." }
                ],
                food: [
                    { meal: "Lunch", name: "Bal Mithai", desc: "A fudge-like, chocolate-brown Kumaoni sweet coated in sugar balls — a good souvenir too." },
                    { meal: "Dinner", name: "Local Rajma-Chawal", desc: "Simple, hearty kidney beans and rice to fuel the journey back down." }
                ]
            }
        ],
        cuisine: [
            { name: "Garhwali Thali", desc: "Phaanu, kaapa, mandua roti and seasonal vegetables — regional comfort food." },
            { name: "Aloo ke Gutke", desc: "Pan-fried spiced potatoes, a common Uttarakhandi side dish." },
            { name: "Bal Mithai", desc: "A chocolate-like Kumaoni sweet, ideal to carry home." },
            { name: "Jhangora Kheer", desc: "Barnyard-millet pudding, served warm in the hills." }
        ]
    },

    "jaipur": {
        duration: "3 Days / 2 Nights",
        bestTime: "October to March",
        budget: "₹2,500 – ₹5,000 / day",
        idealFor: "Heritage lovers, shoppers, families",
        days: [
            {
                day: 1,
                title: "Palaces of the Pink City",
                slots: [
                    { time: "Morning", placeIndex: 1, note: "Ride up to Amber Fort by jeep and explore its mirrored Sheesh Mahal and courtyards." },
                    { time: "Afternoon", placeIndex: 2, note: "Wander the City Palace complex, still home to the royal family in part." },
                    { time: "Evening", placeIndex: 0, note: "See the Hawa Mahal lit up at night — best viewed from the rooftop cafés opposite." }
                ],
                food: [
                    { meal: "Lunch", name: "Dal Baati Churma", desc: "Baked wheat rolls dunked in ghee, served with lentils and a sweet churma crumble." },
                    { meal: "Dinner", name: "Laal Maas", desc: "A fiery Rajasthani mutton curry, rich with red chillies and garlic." }
                ]
            },
            {
                day: 2,
                title: "Forts, Science & Sunsets",
                slots: [
                    { time: "Morning", placeIndex: 3, note: "Visit Jantar Mantar, an 18th-century open-air observatory of giant stone instruments." },
                    { time: "Afternoon", placeIndex: 4, note: "Drive up to Nahargarh Fort for sweeping views over the city — arrive early for golden hour." },
                    { time: "Evening", placeIndex: 5, note: "Catch the light-and-sound show at Albert Hall Museum after exploring its galleries." }
                ],
                food: [
                    { meal: "Breakfast", name: "Pyaaz Kachori", desc: "A crisp, onion-stuffed pastry sold fresh every morning at Jaipur's old-city stalls." },
                    { meal: "Dessert", name: "Ghewar", desc: "A disc-shaped, syrup-soaked sweet, especially popular during festival season." }
                ]
            },
            {
                day: 3,
                title: "Lakes & Bazaars",
                slots: [
                    { time: "Morning", placeIndex: 6, note: "Photograph the Jal Mahal floating on Man Sagar Lake from the lakeside promenade." },
                    { time: "Afternoon", placeIndex: 7, note: "Shop Bapu Bazaar for jootis, block-printed textiles and lac bangles before you leave." }
                ],
                food: [
                    { meal: "Lunch", name: "Lassi at Lassiwala", desc: "A thick, clay-cup lassi from one of Jaipur's most iconic corner shops." },
                    { meal: "Dinner", name: "Rajasthani Thali", desc: "A farewell spread of gatte ki sabzi, ker sangri, and bajra roti." }
                ]
            }
        ],
        cuisine: [
            { name: "Dal Baati Churma", desc: "Jaipur's signature dish — baked wheat balls with lentils and sweet crumble." },
            { name: "Laal Maas", desc: "A fiery red mutton curry cooked with whole Mathania chillies." },
            { name: "Ghewar", desc: "A lattice-textured, syrup-soaked festive sweet." },
            { name: "Pyaaz Kachori", desc: "Crispy, spiced onion pastry — best eaten fresh and hot." }
        ]
    },

    "lakshadweep": {
        duration: "3 Days / 2 Nights",
        bestTime: "October to May",
        budget: "₹6,000 – ₹12,000 / day (permits + resort stays)",
        idealFor: "Divers, honeymooners, beach lovers",
        days: [
            {
                day: 1,
                title: "Arrival & Lagoon Views",
                slots: [
                    { time: "Morning", placeIndex: 0, note: "Arrive at Agatti Island and settle in beside its impossibly blue lagoon." },
                    { time: "Afternoon", placeIndex: 7, note: "Walk up to the island lighthouse for a wide view of the coral reef below." },
                    { time: "Evening", note: "Watch the sunset from the beach — the water here turns every shade of turquoise." }
                ],
                food: [
                    { meal: "Lunch", name: "Tuna Curry (Mas Curry)", desc: "A coconut-based fish curry using freshly caught tuna, a Lakshadweep staple." },
                    { meal: "Dinner", name: "Fish with Chapati", desc: "Grilled reef fish paired with soft flatbread — simple and fresh." }
                ]
            },
            {
                day: 2,
                title: "Coral & Water Sports",
                slots: [
                    { time: "Morning", placeIndex: 2, note: "Head to Bangaram Island for some of the clearest snorkelling and scuba diving in India." },
                    { time: "Afternoon", placeIndex: 6, note: "Try kayaking or glass-bottom boat rides off Kadmat Island." },
                    { time: "Evening", note: "Join a beach barbecue — freshly grilled seafood is the highlight of most island evenings." }
                ],
                food: [
                    { meal: "Snack", name: "Kavaab (Island Snack)", desc: "A local coconut-and-jaggery snack, a favourite with evening tea." },
                    { meal: "Dinner", name: "Seafood BBQ", desc: "Grilled prawns, tuna and reef fish, often cooked right on the sand." }
                ]
            },
            {
                day: 3,
                title: "Culture & Marine Life",
                slots: [
                    { time: "Morning", placeIndex: 3, note: "Visit Kavaratti and its Marine Museum to learn about the atoll's coral ecosystem." },
                    { time: "Afternoon", placeIndex: 1, note: "See Minicoy Island's tuna canning tradition and its historic lighthouse." },
                    { time: "Evening", placeIndex: 4, note: "End at Kalpeni's calm lagoon for one last swim before departure." }
                ],
                food: [
                    { meal: "Lunch", name: "Coconut Rice with Fish Fry", desc: "Fragrant coconut rice served with crisp-fried reef fish." },
                    { meal: "Refreshment", name: "Fresh Coconut Water", desc: "Straight from the tree — the island's everyday refresher." }
                ]
            }
        ],
        cuisine: [
            { name: "Tuna Curry (Mas Curry)", desc: "A coconut-milk based curry made with the day's catch." },
            { name: "Seafood BBQ", desc: "Grilled prawns and reef fish, an island evening staple." },
            { name: "Coconut Rice", desc: "Fragrant rice cooked with fresh grated coconut." },
            { name: "Kavaab", desc: "A sweet coconut-jaggery snack unique to the islands." }
        ]
    },

    "hampi": {
        duration: "3 Days / 2 Nights",
        bestTime: "October to February",
        budget: "₹1,500 – ₹3,000 / day",
        idealFor: "Backpackers, history buffs, photographers",
        days: [
            {
                day: 1,
                title: "The Sacred Temple Complex",
                slots: [
                    { time: "Morning", placeIndex: 0, note: "Begin at Virupaksha Temple, still active after nearly 700 years of continuous worship." },
                    { time: "Afternoon", placeIndex: 1, note: "Explore Vithala Temple and the Stone Chariot, Hampi's most photographed monument." },
                    { time: "Evening", placeIndex: 5, note: "Climb Matanga Hill for the best sunset view over the boulder-strewn landscape." }
                ],
                food: [
                    { meal: "Breakfast", name: "Filter Coffee & Dosa", desc: "A classic South Indian start at one of the riverside cafés." },
                    { meal: "Dinner", name: "Karnataka Thali", desc: "Rice, sambar, rasam and local vegetables served on a banana leaf." }
                ]
            },
            {
                day: 2,
                title: "The Royal Enclosure",
                slots: [
                    { time: "Morning", placeIndex: 3, note: "Admire the Indo-Islamic domes of Lotus Mahal, once a royal recreation pavilion." },
                    { time: "Afternoon", placeIndex: 4, note: "Walk through the Elephant Stables, built for the Vijayanagara royal elephants." },
                    { time: "Evening", placeIndex: 6, note: "Take a traditional coracle ride on the Tungabhadra River as the light fades." }
                ],
                food: [
                    { meal: "Lunch", name: "Jolada Rotti", desc: "A rustic sorghum flatbread served with spicy chutney and vegetables." },
                    { meal: "Snack", name: "Hampi Banana Chips", desc: "The region is famous for its bananas — try them fried and salted." }
                ]
            },
            {
                day: 3,
                title: "Hippie Island & Farewell",
                slots: [
                    { time: "Morning", placeIndex: 7, note: "Cross the river to Hippie Island for a slower morning of cafés and cycling trails." },
                    { time: "Afternoon", note: "Rent a bicycle and ride through the rice paddies and boulder fields at your own pace." }
                ],
                food: [
                    { meal: "Lunch", name: "Ragi Mudde", desc: "Finger-millet dumplings served with a tangy sambar — a Karnataka staple." },
                    { meal: "Dinner", name: "Riverside Thali", desc: "A relaxed farewell meal at one of Hippie Island's open-air cafés." }
                ]
            }
        ],
        cuisine: [
            { name: "Karnataka Thali", desc: "Rice, sambar, rasam and seasonal vegetables on a banana leaf." },
            { name: "Jolada Rotti", desc: "A rustic sorghum flatbread from North Karnataka." },
            { name: "Ragi Mudde", desc: "Steamed finger-millet dumplings, a local energy staple." },
            { name: "Filter Coffee", desc: "Strong South Indian coffee, best enjoyed riverside at sunrise." }
        ]
    },

    "varanasi": {
        duration: "3 Days / 2 Nights",
        bestTime: "October to March",
        budget: "₹1,500 – ₹3,000 / day",
        idealFor: "Spiritual travellers, photographers, solo explorers",
        days: [
            {
                day: 1,
                title: "Ghats & The Evening Aarti",
                slots: [
                    { time: "Morning", placeIndex: 0, note: "Seek blessings at the Kashi Vishwanath Temple, one of the twelve Jyotirlingas." },
                    { time: "Afternoon", placeIndex: 2, note: "Spend a quiet afternoon at Assi Ghat, popular with students and yoga practitioners." },
                    { time: "Evening", placeIndex: 1, note: "Watch the grand Ganga Aarti at Dashashwamedh Ghat as priests perform in unison." }
                ],
                food: [
                    { meal: "Breakfast", name: "Kachori Sabzi", desc: "Flaky fried kachoris with a spiced potato curry — a Banarasi morning ritual." },
                    { meal: "Dessert", name: "Malaiyyo", desc: "A winter-only, saffron-dusted milk foam dessert unique to Varanasi." }
                ]
            },
            {
                day: 2,
                title: "Sunrise Boat & Sarnath",
                slots: [
                    { time: "Morning", placeIndex: 4, note: "Take a sunrise boat ride along the ghats, passing Manikarnika, the ancient cremation ghat." },
                    { time: "Afternoon", placeIndex: 3, note: "Visit Sarnath, where the Buddha delivered his first sermon after enlightenment." },
                    { time: "Evening", placeIndex: 6, note: "Stop at Sankat Mochan Temple for its evening rituals and resident monkeys." }
                ],
                food: [
                    { meal: "Snack", name: "Banarasi Chaat", desc: "Tangy, spicy chaat from the lanes near the ghats — a local favourite." },
                    { meal: "Evening Treat", name: "Banarasi Paan", desc: "The city's famous betel-leaf preparation, a ritual way to end a meal." }
                ]
            },
            {
                day: 3,
                title: "Heritage & Campus Walk",
                slots: [
                    { time: "Morning", placeIndex: 5, note: "Cross the river to Ramnagar Fort, the residence of the former royal family of Kashi." },
                    { time: "Afternoon", placeIndex: 7, note: "Wander the leafy Banaras Hindu University campus and its Bharat Kala Bhavan museum." },
                    { time: "Evening", note: "Return for one last aarti and a walk along the ghats before departure." }
                ],
                food: [
                    { meal: "Lunch", name: "Thandai / Lassi", desc: "A cooling, spiced milk drink — the perfect refresher after a morning of walking." },
                    { meal: "Dinner", name: "Litti Chokha", desc: "Roasted stuffed wheat balls with smoky mashed vegetables, popular across the region." }
                ]
            }
        ],
        cuisine: [
            { name: "Kachori Sabzi", desc: "Fried kachoris with spiced potato curry — the classic Banarasi breakfast." },
            { name: "Banarasi Chaat", desc: "Tangy street chaat served in leaf bowls near the ghats." },
            { name: "Malaiyyo", desc: "A saffron-dusted milk foam dessert, available only in winter mornings." },
            { name: "Banarasi Paan", desc: "The city's signature betel-leaf preparation." }
        ]
    },

    "munnar": {
        duration: "3 Days / 2 Nights",
        bestTime: "September to May",
        budget: "₹3,000 – ₹5,500 / day",
        idealFor: "Nature lovers, honeymooners, families",
        days: [
            {
                day: 1,
                title: "Tea Trails",
                slots: [
                    { time: "Morning", placeIndex: 0, note: "Learn how the leaf becomes the cup at the Tea Museum, with tastings included." },
                    { time: "Afternoon", placeIndex: 5, note: "Drive to Pothamedu View Point for a wide panorama of tea, coffee and cardamom plantations." },
                    { time: "Evening", note: "Browse the local market for fresh spices, tea and homemade chocolate." }
                ],
                food: [
                    { meal: "Breakfast", name: "Appam with Stew", desc: "Soft, lacy rice pancakes paired with a mild coconut-milk vegetable or chicken stew." },
                    { meal: "Evening", name: "Spiced Munnar Tea", desc: "Freshly brewed estate tea, best enjoyed with the misty hills as backdrop." }
                ]
            },
            {
                day: 2,
                title: "Wildlife & Water",
                slots: [
                    { time: "Morning", placeIndex: 1, note: "Look for the endangered Nilgiri Tahr at Eravikulam National Park's grasslands." },
                    { time: "Afternoon", placeIndex: 2, note: "Go boating on Mattupetty Dam, framed by rolling green hills." },
                    { time: "Evening", placeIndex: 3, note: "Catch the natural echo effect at Echo Point as the valley cools down." }
                ],
                food: [
                    { meal: "Lunch", name: "Kerala Sadya", desc: "A traditional banana-leaf feast with rice, sambar, avial and payasam." },
                    { meal: "Dinner", name: "Karimeen Pollichathu", desc: "Pearl spot fish marinated in spices and grilled in a banana leaf." }
                ]
            },
            {
                day: 3,
                title: "Peaks & Waterfalls",
                slots: [
                    { time: "Morning", placeIndex: 7, note: "Catch sunrise at Top Station, one of the highest and coolest viewpoints in Munnar." },
                    { time: "Afternoon", placeIndex: 6, note: "Cool off at Attukad Falls, a short trek through the forest to a series of cascades." },
                    { time: "Evening", placeIndex: 4, note: "End at a viewpoint facing Anamudi Peak, the highest point in South India." }
                ],
                food: [
                    { meal: "Snack", name: "Banana Chips & Halwa", desc: "Kerala's iconic snack pairing — crisp chips and sticky, sweet halwa." },
                    { meal: "Dinner", name: "Malabar Parotta with Curry", desc: "Flaky layered flatbread with a rich vegetable or egg curry to end the trip." }
                ]
            }
        ],
        cuisine: [
            { name: "Kerala Sadya", desc: "A full banana-leaf vegetarian feast with rice and multiple side dishes." },
            { name: "Appam with Stew", desc: "Lacy rice pancakes served with a mild coconut stew." },
            { name: "Karimeen Pollichathu", desc: "Pearl spot fish grilled in banana leaf with local spices." },
            { name: "Estate Tea", desc: "Freshly brewed tea from Munnar's own plantations." }
        ]
    },

    "ayodhya": {
        duration: "3 Days / 2 Nights",
        bestTime: "October to March",
        budget: "₹1,500 – ₹3,000 / day",
        idealFor: "Pilgrims, families, cultural travellers",
        days: [
            {
                day: 1,
                title: "Temple Darshan",
                slots: [
                    { time: "Morning", placeIndex: 0, note: "Begin with darshan at the Ram Mandir — arrive early to avoid the midday crowds." },
                    { time: "Afternoon", placeIndex: 1, note: "Visit Hanuman Garhi, climbing its steps for a citywide view and blessings." },
                    { time: "Evening", placeIndex: 3, note: "Join the Saryu Ghat aarti at sunset, one of the city's most moving rituals." }
                ],
                food: [
                    { meal: "Lunch", name: "Satvik Thali", desc: "A simple, no-onion-no-garlic vegetarian thali, common near the temple town." },
                    { meal: "Dessert", name: "Ayodhya Peda", desc: "Soft, milk-based sweets sold as prasad across the city." }
                ]
            },
            {
                day: 2,
                title: "The Sacred Circuit",
                slots: [
                    { time: "Morning", placeIndex: 2, note: "See the ornate interiors of Kanak Bhawan, said to be a gift to Sita after her wedding." },
                    { time: "Afternoon", placeIndex: 4, note: "Visit the ancient Nageshwarnath Temple, linked to Lord Rama's son Kush." },
                    { time: "Evening", placeIndex: 5, note: "Catch the light-and-sound show at Ram Ki Paidi along the riverfront steps." }
                ],
                food: [
                    { meal: "Breakfast", name: "Puri Sabzi", desc: "Fried bread with a light potato curry, a common temple-town breakfast." },
                    { meal: "Dinner", name: "Kesar Bhaat", desc: "Saffron-sweetened rice, often served on festive occasions." }
                ]
            },
            {
                day: 3,
                title: "Heritage Walk & Farewell",
                slots: [
                    { time: "Morning", placeIndex: 6, note: "Climb Mani Parbat, said to be a fragment dropped from the Himalayas." },
                    { time: "Afternoon", placeIndex: 7, note: "Explore Dashrath Mahal, the palace believed to be King Dashrath's residence." },
                    { time: "Evening", note: "Take a final boat ride on the Saryu before your journey home." }
                ],
                food: [
                    { meal: "Lunch", name: "Lassi & Kachori", desc: "A refreshing, filling combination sold at most temple-town stalls." },
                    { meal: "Dinner", name: "Satvik Farewell Thali", desc: "A wholesome vegetarian spread to close out the trip." }
                ]
            }
        ],
        cuisine: [
            { name: "Satvik Thali", desc: "A pure vegetarian, no-onion-no-garlic meal typical of the pilgrim town." },
            { name: "Ayodhya Peda", desc: "Soft milk sweets sold widely as prasad." },
            { name: "Puri Sabzi", desc: "Fried bread with a light, home-style potato curry." },
            { name: "Kesar Bhaat", desc: "Saffron-flavoured sweet rice, often festive fare." }
        ]
    },

    "tawang": {
        duration: "4 Days / 3 Nights",
        bestTime: "March to June, September to October",
        budget: "₹3,000 – ₹5,500 / day",
        idealFor: "Adventure travellers, monastery seekers, road-trippers",
        days: [
            {
                day: 1,
                title: "Arrival & The Monastery",
                slots: [
                    { time: "Morning", note: "Arrive in Tawang and take it slow while acclimatising to the altitude." },
                    { time: "Afternoon", placeIndex: 0, note: "Visit Tawang Monastery, the largest in India, and sit in on the evening prayer chants." },
                    { time: "Evening", note: "Walk the local market, lined with prayer wheels and Tibetan handicrafts." }
                ],
                food: [
                    { meal: "Lunch", name: "Thukpa", desc: "A warming, noodle-and-vegetable soup — perfect for the mountain chill." },
                    { meal: "Dinner", name: "Momos", desc: "Steamed dumplings filled with vegetables, cheese or meat, served with a spicy chutney." }
                ]
            },
            {
                day: 2,
                title: "Passes & Alpine Lakes",
                slots: [
                    { time: "Morning", placeIndex: 1, note: "Cross Sela Pass, one of the highest motorable passes in the world, often lined with snow." },
                    { time: "Afternoon", placeIndex: 2, note: "Stop at Madhuri Lake, a serene alpine lake surrounded by pine forest." },
                    { time: "Evening", placeIndex: 3, note: "Visit Nuranang Falls as the light softens — one of the most photographed spots in the state." }
                ],
                food: [
                    { meal: "Breakfast", name: "Butter Tea (Po Cha)", desc: "A salty, buttery tea that locals swear by for staying warm at altitude." },
                    { meal: "Dinner", name: "Zan", desc: "A comforting buckwheat porridge, a staple of Monpa cuisine." }
                ]
            },
            {
                day: 3,
                title: "Border Memorials",
                slots: [
                    { time: "Morning", placeIndex: 7, note: "Pay respects at Jaswant Garh War Memorial, dedicated to a soldier of the 1962 war." },
                    { time: "Afternoon", placeIndex: 6, note: "With permits arranged, visit Bumla Pass on the India-China border for dramatic views." },
                    { time: "Evening", note: "Return to Tawang for a quiet evening at your homestay or hotel." }
                ],
                food: [
                    { meal: "Lunch", name: "Bamboo Shoot Pork", desc: "A tangy, fermented-bamboo dish typical of the region's tribal cuisine." },
                    { meal: "Dinner", name: "Local Red Rice", desc: "Nutty, hearty rice grown in the Himalayan foothills." }
                ]
            },
            {
                day: 4,
                title: "Peak Views & Departure",
                slots: [
                    { time: "Morning", placeIndex: 5, note: "Take in the view of Gorichen Peak, the highest mountain in Arunachal Pradesh, before starting your journey back." }
                ],
                food: [
                    { meal: "Breakfast", name: "Farewell Momos", desc: "One last plate before the long drive back down to the plains." }
                ]
            }
        ],
        cuisine: [
            { name: "Thukpa", desc: "A noodle soup loaded with vegetables — the region's everyday comfort food." },
            { name: "Momos", desc: "Steamed dumplings, the most iconic snack of the eastern Himalayas." },
            { name: "Butter Tea (Po Cha)", desc: "Salty, buttery tea that helps combat the cold at high altitude." },
            { name: "Zan", desc: "A buckwheat porridge central to traditional Monpa meals." }
        ]
    },

    "gokarna": {
        duration: "3 Days / 2 Nights",
        bestTime: "October to March",
        budget: "₹1,500 – ₹3,000 / day",
        idealFor: "Backpackers, beach lovers, yoga travellers",
        days: [
            {
                day: 1,
                title: "Temple Town & First Beaches",
                slots: [
                    { time: "Morning", placeIndex: 1, note: "Seek blessings at the Mahabaleshwar Temple, the spiritual heart of Gokarna town." },
                    { time: "Afternoon", placeIndex: 2, note: "Relax at Kudle Beach, the most easily accessible and social of Gokarna's beaches." },
                    { time: "Evening", placeIndex: 0, note: "Catch sunset at Om Beach, shaped like the sacred symbol it's named after." }
                ],
                food: [
                    { meal: "Breakfast", name: "Neer Dosa", desc: "Thin, delicate rice crepes served with coconut chutney — a coastal Karnataka favourite." },
                    { meal: "Dinner", name: "Kane (Mackerel) Fish Curry", desc: "A coconut-based fish curry, a staple of the Konkan coast." }
                ]
            },
            {
                day: 2,
                title: "Beach Hopping",
                slots: [
                    { time: "Morning", placeIndex: 3, note: "Take the cliffside trek to Half Moon Beach, quieter and more secluded." },
                    { time: "Afternoon", placeIndex: 4, note: "Continue on by boat or trek to Paradise Beach, the most remote and untouched of the lot." },
                    { time: "Evening", placeIndex: 6, note: "Visit the towering Shiva Statue viewpoint on the way back into town." }
                ],
                food: [
                    { meal: "Lunch", name: "Gojju Avalakki", desc: "Tangy, spiced flattened rice — a quick and filling coastal snack." },
                    { meal: "Refreshment", name: "Solkadhi", desc: "A cooling kokum-and-coconut drink, great after a day in the sun." }
                ]
            },
            {
                day: 3,
                title: "Fort & Caves",
                slots: [
                    { time: "Morning", placeIndex: 5, note: "Explore the overgrown ramparts of Mirjan Fort, an old spice-trade stronghold." },
                    { time: "Afternoon", placeIndex: 7, note: "Trek into the Yana Caves, dramatic limestone rock formations deep in the forest." },
                    { time: "Evening", note: "Head back to the beach for a final bonfire and farewell dinner." }
                ],
                food: [
                    { meal: "Lunch", name: "Coastal Karnataka Thali", desc: "Rice, fish curry and regional sides served on a banana leaf." },
                    { meal: "Dinner", name: "Filter Coffee & Beach Snacks", desc: "Wrap up the trip with strong filter coffee at a beach shack." }
                ]
            }
        ],
        cuisine: [
            { name: "Kane (Mackerel) Fish Curry", desc: "A coconut-based curry typical of the Konkan coastline." },
            { name: "Neer Dosa", desc: "Thin rice crepes, light and delicate, served with coconut chutney." },
            { name: "Solkadhi", desc: "A cooling kokum and coconut milk drink." },
            { name: "Gojju Avalakki", desc: "Tangy spiced flattened rice, a popular local snack." }
        ]
    },

    "jaisalmer": {
        duration: "3 Days / 2 Nights",
        bestTime: "November to February (Desert Festival in February)",
        budget: "₹2,500 – ₹5,000 / day",
        idealFor: "Desert adventurers, heritage lovers, photographers",
        days: [
            {
                day: 1,
                title: "The Golden Fort",
                slots: [
                    { time: "Morning", placeIndex: 0, note: "Explore the living Jaisalmer Fort, still home to families, shops and temples inside its walls." },
                    { time: "Afternoon", placeIndex: 2, note: "Marvel at the intricate stone carvings of Patwon Ki Haveli, a cluster of ornate mansions." },
                    { time: "Evening", placeIndex: 3, note: "Take a sunset boat ride on Gadisar Lake, ringed by chhatris and shrines." }
                ],
                food: [
                    { meal: "Lunch", name: "Dal Baati Churma", desc: "The quintessential Rajasthani meal — baked wheat rolls with lentils and sweet crumble." },
                    { meal: "Dinner", name: "Mirchi Bada", desc: "Large chillies stuffed with spiced potato and deep fried — a bold Jaisalmer snack." }
                ]
            },
            {
                day: 2,
                title: "Desert Safari",
                slots: [
                    { time: "Morning", placeIndex: 4, note: "Visit Bada Bagh, a garden of royal cenotaphs set against golden desert light." },
                    { time: "Afternoon", placeIndex: 6, note: "Explore Kuldhara, the mysterious abandoned village with centuries-old legends." },
                    { time: "Evening", placeIndex: 1, note: "Head to the Sam Sand Dunes for a camel safari and a night in a desert camp under the stars." }
                ],
                food: [
                    { meal: "Lunch", name: "Ker Sangri", desc: "A tangy desert-bean and berry dish, unique to arid Rajasthan." },
                    { meal: "Dinner", name: "Desert Camp Thali", desc: "A full Rajasthani spread served under the stars, often with folk music and dance." }
                ]
            },
            {
                day: 3,
                title: "Temples & The Border",
                slots: [
                    { time: "Morning", placeIndex: 5, note: "Step inside the Jain Temples within the fort, known for their delicate yellow sandstone carving." },
                    { time: "Afternoon", placeIndex: 7, note: "Make the trip to Tanot Mata Temple near the India-Pakistan border, revered for surviving the 1965 war unscathed." },
                    { time: "Evening", note: "Return to Jaisalmer for a final walk through the bazaars before departure." }
                ],
                food: [
                    { meal: "Lunch", name: "Gatte ki Sabzi", desc: "Gram-flour dumplings simmered in a spiced yogurt gravy." },
                    { meal: "Dinner", name: "Rajasthani Thali", desc: "A last full spread of thali classics to close out the desert trip." }
                ]
            }
        ],
        cuisine: [
            { name: "Dal Baati Churma", desc: "Baked wheat rolls with lentils and sweet crumble, Rajasthan's signature dish." },
            { name: "Ker Sangri", desc: "A tangy dish of desert beans and berries, unique to the Thar region." },
            { name: "Mirchi Bada", desc: "Large stuffed chillies, deep fried and spiced." },
            { name: "Gatte ki Sabzi", desc: "Gram-flour dumplings in a spiced yogurt curry." }
        ]
    }
    ,"goa": {
        duration: "3 Days / 2 Nights",
        bestTime: "November to February",
        budget: "₹2,500 – ₹5,000 / day",
        idealFor: "Beach lovers, nightlife seekers, families",
        days: [
            {
                day: 1,
                title: "North Goa Beaches",
                slots: [
                    { time: "Morning", placeIndex: 2, note: "Explore Fort Aguada and its lighthouse, overlooking the Arabian Sea." },
                    { time: "Afternoon", placeIndex: 0, note: "Relax at Baga Beach, Goa's liveliest stretch of sand." },
                    { time: "Evening", placeIndex: 1, note: "Watch the sunset at Calangute Beach before dinner at a beach shack." }
                ],
                food: [
                    { meal: "Lunch", name: "Goan Fish Curry Rice", desc: "A coconut-based curry with fresh catch, the everyday Goan staple." },
                    { meal: "Dinner", name: "Prawn Balchão", desc: "A tangy, spicy Goan-Portuguese prawn pickle-curry, best with sausage pao." }
                ]
            },
            {
                day: 2,
                title: "Old Goa & Markets",
                slots: [
                    { time: "Morning", placeIndex: 3, note: "Visit the Basilica of Bom Jesus, home to the relics of St. Francis Xavier." },
                    { time: "Afternoon", placeIndex: 4, note: "See the Se Cathedral, one of the largest churches in Asia." },
                    { time: "Evening", placeIndex: 5, note: "Browse the Anjuna Flea Market for beachwear, jewellery and souvenirs." }
                ],
                food: [
                    { meal: "Breakfast", name: "Goan Sausage Pao", desc: "Spiced pork sausages in a soft local bread roll." },
                    { meal: "Dinner", name: "Bebinca", desc: "A layered Goan-Portuguese dessert, rich and slow-baked." }
                ]
            },
            {
                day: 3,
                title: "Waterfalls & South Goa",
                slots: [
                    { time: "Morning", placeIndex: 6, note: "Take a jeep safari to Dudhsagar Falls, one of India's tallest waterfalls." },
                    { time: "Afternoon", placeIndex: 7, note: "Explore Chapora Fort, famous from Bollywood and its river views." }
                ],
                food: [
                    { meal: "Lunch", name: "Xacuti", desc: "A richly spiced coconut-based curry with roasted spices." },
                    { meal: "Dinner", name: "Feni & Seafood Platter", desc: "A farewell spread of grilled seafood paired with Goa's local cashew spirit." }
                ]
            }
        ],
        cuisine: [
            { name: "Goan Fish Curry Rice", desc: "Coconut-based curry with the day's catch, eaten with rice." },
            { name: "Prawn Balchão", desc: "A tangy, spicy Goan-Portuguese pickle-style prawn curry." },
            { name: "Bebinca", desc: "A rich, layered Goan-Portuguese dessert." },
            { name: "Sausage Pao", desc: "Spiced Goan pork sausage in a soft bread roll." }
        ]
    },

    "udaipur": {
        duration: "3 Days / 2 Nights",
        bestTime: "September to March",
        budget: "₹3,000 – ₹6,000 / day",
        idealFor: "Honeymooners, heritage lovers, photographers",
        days: [
            {
                day: 1,
                title: "Palaces & The Lake",
                slots: [
                    { time: "Morning", placeIndex: 0, note: "Explore the City Palace, a sprawling complex of courtyards and museums." },
                    { time: "Afternoon", placeIndex: 1, note: "Take a boat ride on Lake Pichola, past the floating Lake Palace." },
                    { time: "Evening", placeIndex: 2, note: "Visit Jag Mandir island for sunset views over the water." }
                ],
                food: [
                    { meal: "Lunch", name: "Dal Baati Churma", desc: "The Rajasthani classic, best enjoyed lakeside in Udaipur." },
                    { meal: "Dinner", name: "Gatte ki Sabzi", desc: "Gram-flour dumplings in a spiced yogurt curry." }
                ]
            },
            {
                day: 2,
                title: "Gardens & Old City",
                slots: [
                    { time: "Morning", placeIndex: 3, note: "Wander Saheliyon Ki Bari, a garden built for the queen's attendants." },
                    { time: "Afternoon", placeIndex: 5, note: "Visit the ornate Jagdish Temple in the heart of the old city." },
                    { time: "Evening", placeIndex: 6, note: "Catch a folk dance show at Bagore Ki Haveli on the Ambrai Ghat waterfront." }
                ],
                food: [
                    { meal: "Breakfast", name: "Kachori with Chai", desc: "A simple, satisfying start from one of the old city's tea stalls." },
                    { meal: "Dinner", name: "Laal Maas", desc: "A fiery Rajasthani mutton curry with red chillies." }
                ]
            },
            {
                day: 3,
                title: "Viewpoints & Craft Villages",
                slots: [
                    { time: "Morning", placeIndex: 7, note: "Drive up to Sajjangarh, the Monsoon Palace, for a panoramic city view." },
                    { time: "Afternoon", placeIndex: 4, note: "Relax by Fateh Sagar Lake before heading to the airport or station." }
                ],
                food: [
                    { meal: "Lunch", name: "Ker Sangri", desc: "A tangy desert-bean dish, a Rajasthani specialty." },
                    { meal: "Dessert", name: "Ghewar", desc: "A syrup-soaked, lattice-textured sweet to end the trip." }
                ]
            }
        ],
        cuisine: [
            { name: "Dal Baati Churma", desc: "Baked wheat rolls with lentils and sweet crumble." },
            { name: "Gatte ki Sabzi", desc: "Gram-flour dumplings in spiced yogurt gravy." },
            { name: "Laal Maas", desc: "A fiery red mutton curry, a Rajasthani classic." },
            { name: "Ghewar", desc: "A festive, syrup-soaked lattice sweet." }
        ]
    },

    "rishikesh": {
        duration: "3 Days / 2 Nights",
        bestTime: "September to April",
        budget: "₹1,500 – ₹3,500 / day",
        idealFor: "Yoga practitioners, adventure seekers, backpackers",
        days: [
            {
                day: 1,
                title: "Ghats & Ashrams",
                slots: [
                    { time: "Morning", placeIndex: 2, note: "Begin at Triveni Ghat, the spiritual centre of Rishikesh." },
                    { time: "Afternoon", placeIndex: 3, note: "Visit the abandoned Beatles Ashram, now covered in colourful graffiti." },
                    { time: "Evening", placeIndex: 11, note: "Join the evening Ganga Aarti at the riverside ghats." }
                ],
                food: [
                    { meal: "Lunch", name: "Sattvic Thali", desc: "A simple vegetarian meal, common across the town's ashram cafés." },
                    { meal: "Dinner", name: "Herbal Chai", desc: "Locally blended herbal tea, a Rishikesh café staple." }
                ]
            },
            {
                day: 2,
                title: "Bridges & Adventure",
                slots: [
                    { time: "Morning", placeIndex: 0, note: "Walk across Laxman Jhula for views of the Ganga below." },
                    { time: "Afternoon", placeIndex: 7, note: "Head to Shivpuri for a white-water rafting session down the Ganga." },
                    { time: "Evening", placeIndex: 1, note: "Cross Ram Jhula and explore the cafés lining the riverbank." }
                ],
                food: [
                    { meal: "Breakfast", name: "Stuffed Paratha", desc: "A hearty, filling start before a day of rafting." },
                    { meal: "Dinner", name: "German Bakery Treats", desc: "Rishikesh's famous bakery cafés serve everything from pasta to pastries." }
                ]
            },
            {
                day: 3,
                title: "Temples & Waterfalls",
                slots: [
                    { time: "Morning", placeIndex: 4, note: "Visit Neelkanth Mahadev Temple, nestled in the forested hills above town." },
                    { time: "Afternoon", placeIndex: 10, note: "Trek to Neer Garh Waterfall for a refreshing dip before departure." }
                ],
                food: [
                    { meal: "Lunch", name: "Rajma Chawal", desc: "Kidney beans and rice, simple mountain comfort food." },
                    { meal: "Snack", name: "Fresh Fruit Lassi", desc: "A cooling farewell drink from a riverside café." }
                ]
            }
        ],
        cuisine: [
            { name: "Sattvic Thali", desc: "A simple, pure-vegetarian meal common across ashram cafés." },
            { name: "Herbal Chai", desc: "Locally blended herbal tea, a town staple." },
            { name: "Stuffed Paratha", desc: "A filling flatbread, popular with rafting groups." },
            { name: "Fruit Lassi", desc: "A cooling yogurt drink from the riverside cafés." }
        ]
    },

    "darjeeling": {
        duration: "3 Days / 2 Nights",
        bestTime: "March to May, October to December",
        budget: "₹2,500 – ₹4,500 / day",
        idealFor: "Tea lovers, honeymooners, nature photographers",
        days: [
            {
                day: 1,
                title: "Sunrise & The Toy Train",
                slots: [
                    { time: "Morning", placeIndex: 0, note: "Rise early for the famous sunrise over Kanchenjunga from Tiger Hill." },
                    { time: "Afternoon", placeIndex: 2, note: "Ride the UNESCO-listed Darjeeling Himalayan Railway, the 'Toy Train'." },
                    { time: "Evening", placeIndex: 1, note: "Stop at Batasia Loop for one last mountain view before sunset." }
                ],
                food: [
                    { meal: "Breakfast", name: "Momos & Darjeeling Tea", desc: "Steamed dumplings paired with a freshly brewed cup of the region's famous tea." },
                    { meal: "Dinner", name: "Thukpa", desc: "A warming noodle soup, ideal for the hill-station chill." }
                ]
            },
            {
                day: 2,
                title: "Tea Gardens & Monasteries",
                slots: [
                    { time: "Morning", placeIndex: 5, note: "Tour the Happy Valley Tea Estate and learn how the leaf becomes the cup." },
                    { time: "Afternoon", placeIndex: 6, note: "Visit Ghoom Monastery, one of the oldest Buddhist monasteries in the region." },
                    { time: "Evening", placeIndex: 7, note: "Take the Darjeeling Ropeway for aerial views over the tea gardens." }
                ],
                food: [
                    { meal: "Lunch", name: "Sael Roti with Achar", desc: "A crispy rice-flour ring bread served with tangy pickle." },
                    { meal: "Dinner", name: "Churpi Soup", desc: "A hearty soup made with fermented Himalayan cheese." }
                ]
            },
            {
                day: 3,
                title: "Parks & Mall Road",
                slots: [
                    { time: "Morning", placeIndex: 4, note: "Visit Padmaja Naidu Zoological Park to see the Red Panda conservation programme." },
                    { time: "Afternoon", placeIndex: 11, note: "Stroll Chowrasta Mall Road for souvenirs, tea shops and mountain views." }
                ],
                food: [
                    { meal: "Snack", name: "Darjeeling Tea Tasting", desc: "A guided tasting of first-flush and second-flush estate teas." },
                    { meal: "Dinner", name: "Gundruk Soup", desc: "A fermented leafy-green soup, a Himalayan specialty." }
                ]
            }
        ],
        cuisine: [
            { name: "Momos", desc: "Steamed dumplings, the region's most iconic snack." },
            { name: "Thukpa", desc: "A noodle soup loaded with vegetables and warmth." },
            { name: "Darjeeling Tea", desc: "The world-famous estate tea, best tasted fresh at the source." },
            { name: "Churpi Soup", desc: "A hearty soup made with fermented Himalayan cheese." }
        ]
    },

    "manali": {
        duration: "3 Days / 2 Nights",
        bestTime: "March to June, October to February",
        budget: "₹2,500 – ₹5,000 / day",
        idealFor: "Adventure seekers, honeymooners, road-trippers",
        days: [
            {
                day: 1,
                title: "Old Manali & Temples",
                slots: [
                    { time: "Morning", placeIndex: 2, note: "Visit the wooden Hadimba Temple, set deep in a cedar forest." },
                    { time: "Afternoon", placeIndex: 3, note: "Wander Old Manali's cafés and lanes along the Beas River." },
                    { time: "Evening", placeIndex: 4, note: "Soak in the natural hot springs at Vashisht." }
                ],
                food: [
                    { meal: "Lunch", name: "Himachali Dham", desc: "A traditional festive thali of lentils, rice and local vegetables." },
                    { meal: "Dinner", name: "Israeli-Style Cafe Food", desc: "Old Manali's café scene serves a distinctive backpacker-favourite menu." }
                ]
            },
            {
                day: 2,
                title: "Snow & Adventure",
                slots: [
                    { time: "Morning", placeIndex: 0, note: "Head to Solang Valley for paragliding, zorbing or skiing depending on season." },
                    { time: "Afternoon", placeIndex: 1, note: "Continue to Rohtang Pass for high-altitude snow views (permit required)." },
                    { time: "Evening", note: "Return to Manali for a bonfire evening at your stay." }
                ],
                food: [
                    { meal: "Breakfast", name: "Siddu with Ghee", desc: "A steamed wheat bread stuffed with walnuts or poppy seeds." },
                    { meal: "Dinner", name: "Trout Fish Fry", desc: "Freshly caught Himalayan trout, a Kullu Valley specialty." }
                ]
            },
            {
                day: 3,
                title: "Waterfalls & Valley Views",
                slots: [
                    { time: "Morning", placeIndex: 6, note: "Trek to Jogini Falls, a scenic walk through pine forest." },
                    { time: "Afternoon", placeIndex: 8, note: "Visit Naggar Castle, a 16th-century palace turned heritage hotel." }
                ],
                food: [
                    { meal: "Lunch", name: "Chana Madra", desc: "Chickpeas cooked in a rich yogurt gravy, a Himachali specialty." },
                    { meal: "Dessert", name: "Fresh Apple Treats", desc: "Locally grown apples, often turned into pies or fresh juice." }
                ]
            }
        ],
        cuisine: [
            { name: "Himachali Dham", desc: "A traditional festive thali of lentils, rice and vegetables." },
            { name: "Siddu", desc: "Steamed wheat bread stuffed with walnut or poppy seed filling." },
            { name: "Trout Fish Fry", desc: "Freshly caught Himalayan trout from the Kullu Valley." },
            { name: "Chana Madra", desc: "Chickpeas in a rich, spiced yogurt gravy." }
        ]
    },

    "andaman": {
        duration: "4 Days / 3 Nights",
        bestTime: "October to May",
        budget: "₹4,000 – ₹8,000 / day",
        idealFor: "Divers, honeymooners, island explorers",
        days: [
            {
                day: 1,
                title: "Port Blair History",
                slots: [
                    { time: "Morning", placeIndex: 1, note: "Visit the Cellular Jail, a sobering monument to India's freedom struggle." },
                    { time: "Afternoon", placeIndex: 2, note: "Take a ferry to Ross Island to see its overgrown colonial ruins." },
                    { time: "Evening", note: "Watch the Light & Sound Show at the Cellular Jail after sunset." }
                ],
                food: [
                    { meal: "Lunch", name: "Fish Curry with Rice", desc: "Fresh catch cooked in a coconut-based curry, an island staple." },
                    { meal: "Dinner", name: "Andaman Prawn Fry", desc: "Locally caught prawns pan-fried with island spices." }
                ]
            },
            {
                day: 2,
                title: "Havelock Island",
                slots: [
                    { time: "Morning", placeIndex: 3, note: "Take the ferry to Havelock Island and settle in by the coast." },
                    { time: "Afternoon", placeIndex: 0, note: "Spend the afternoon at Radhanagar Beach, rated among Asia's best." },
                    { time: "Evening", note: "Watch the sunset from the beach with a bonfire dinner nearby." }
                ],
                food: [
                    { meal: "Breakfast", name: "Coconut Pancakes", desc: "A tropical island breakfast, light and fresh." },
                    { meal: "Dinner", name: "Grilled Reef Fish", desc: "The day's catch, grilled simply with local spices." }
                ]
            },
            {
                day: 3,
                title: "Diving & Neil Island",
                slots: [
                    { time: "Morning", placeIndex: 5, note: "Snorkel or scuba dive at Elephant Beach's coral reefs." },
                    { time: "Afternoon", placeIndex: 4, note: "Ferry over to Neil Island for its quieter, laid-back beaches." },
                    { time: "Evening", note: "Cycle around Neil Island as the light softens over the lagoons." }
                ],
                food: [
                    { meal: "Lunch", name: "Crab Masala", desc: "Fresh crab in a spiced, tangy island-style gravy." },
                    { meal: "Dinner", name: "Tender Coconut Water", desc: "The islands' everyday refresher, straight from the shell." }
                ]
            },
            {
                day: 4,
                title: "Nature & Departure",
                slots: [
                    { time: "Morning", placeIndex: 6, note: "Visit Chidiya Tapu for birdwatching and a final scenic sunset point before heading to the airport." }
                ],
                food: [
                    { meal: "Breakfast", name: "Farewell Seafood Platter", desc: "One last taste of the islands before departure." }
                ]
            }
        ],
        cuisine: [
            { name: "Fish Curry with Rice", desc: "A coconut-based curry made with the day's fresh catch." },
            { name: "Crab Masala", desc: "Fresh crab in a spiced, tangy island-style gravy." },
            { name: "Grilled Reef Fish", desc: "Simply grilled fish with local spice rubs." },
            { name: "Tender Coconut Water", desc: "The islands' natural, everyday refresher." }
        ]
    }

};
