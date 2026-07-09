// js/news-data.js
// Latest travel news items. Each links back to a destination (destId) and reuses that
// destination's own images — no new image assets required.

const newsData = [
    {
        id: "ayodhya-deepotsav-2026",
        destId: "ayodhya",
        title: "Ayodhya Gears Up for Record-Breaking Deepotsav Celebrations",
        date: "5 July 2026",
        image: "images/ayodhya.jpg",
        summary: "The banks of the Saryu are preparing for another record attempt with lakhs of diyas lit across the ghats this festive season.",
        content: [
            "Ayodhya's annual Deepotsav continues to grow every year, with the district administration once again preparing to light lakhs of earthen lamps along the Saryu ghats in a bid to set a new record for the world's largest diya display.",
            "Alongside the illumination, the festival features a grand re-enactment of Lord Rama's return to Ayodhya, classical dance performances, and a laser show projected onto the riverfront.",
            "With the Ram Mandir now a major draw, city authorities have also expanded pedestrian access around Ram Ki Paidi and added more shuttle services from the railway station to ease the flow of pilgrims during the celebration.",
            "Travellers planning a visit around the festival dates are advised to book accommodation well in advance, as hotels near the temple complex fill up quickly during this period."
        ]
    },
    {
        id: "auli-snowfall-2026",
        destId: "auli",
        title: "Fresh Snowfall Blankets Auli, Ski Season Extended",
        date: "2 July 2026",
        image: "images/auli-ski.jpg",
        summary: "Unseasonal snowfall has extended Auli's skiing window, with resorts reporting excellent powder conditions on the slopes.",
        content: [
            "A fresh spell of snowfall across the upper reaches of Auli has delighted skiers and resort operators alike, with slopes reporting some of the best powder conditions seen in recent seasons.",
            "The Auli Ropeway, one of the longest cable car rides in Asia, has seen a sharp rise in footfall as visitors make the most of the extended window before the melt season begins.",
            "Local ski schools have added extra batches to accommodate the surge in beginner and intermediate skiers, and several homestays in nearby Joshimath are reporting near-full occupancy.",
            "Visitors are advised to carry proper cold-weather gear, as night temperatures at this altitude continue to dip well below freezing even as daytime conditions remain pleasant for outdoor activity."
        ]
    },
    {
        id: "jaipur-heritage-walk-2026",
        destId: "jaipur",
        title: "Jaipur Launches New Night Heritage Walk Through the Walled City",
        date: "28 June 2026",
        image: "images/jaipur-lit.jpg",
        summary: "A newly launched evening walking tour takes visitors through the illuminated lanes of Jaipur's old city, past havelis and bazaars.",
        content: [
            "The Rajasthan Tourism Department has introduced a curated night heritage walk through the pink-hued lanes of the old city, starting near Hawa Mahal and winding through some of Jaipur's oldest bazaars.",
            "The two-hour walk is led by trained local guides who share stories about the city's Rajput architecture, its planned grid layout designed by Jai Singh II, and the trading families that built many of the surviving havelis.",
            "Organisers say the walk was designed specifically for the evening hours, when the facades of Hawa Mahal and the surrounding markets are lit up and considerably cooler to explore on foot.",
            "Tickets can currently be booked through local tour operators near Badi Chaupar, with plans to open online booking in the coming months."
        ]
    },
    {
        id: "hampi-utsav-2026",
        destId: "hampi",
        title: "Hampi Utsav Returns With Expanded Cultural Programme",
        date: "20 June 2026",
        image: "images/hampi.jpg",
        summary: "The annual Hampi Utsav returns this year with an expanded lineup of classical dance, music, and light shows staged among the ruins.",
        content: [
            "The Karnataka Tourism Department has confirmed an expanded edition of the Hampi Utsav, with performances staged directly among the ruins of the Vijayanagara Empire for the first time in several years.",
            "The festival's centrepiece remains the classical dance and music performances held against the backdrop of the Virupaksha Temple, alongside a newly added light-and-sound presentation depicting the city's history.",
            "Craft stalls featuring Karnataka's traditional textiles and stone-carving demonstrations will also line the festival grounds, giving visitors a chance to see artisans at work.",
            "Given the scale of the event, authorities are recommending early accommodation bookings in Hampi Bazaar and across the river on Hippie Island."
        ]
    },
    {
        id: "lakshadweep-tourism-push-2026",
        destId: "lakshadweep",
        title: "New Ferry Routes Improve Access to Lakshadweep's Outer Islands",
        date: "15 June 2026",
        image: "images/lakshadweep.jpg",
        summary: "Additional ferry services have made it easier for travellers to reach the outer islands of the Lakshadweep archipelago.",
        content: [
            "The introduction of additional ferry routes connecting Agatti to the outer islands has made it considerably easier for travellers to explore beyond the more commonly visited spots.",
            "Islands such as Kadmat and Kalpeni, previously reachable only through limited weekly sailings, now have more frequent connections, opening up new options for multi-island itineraries.",
            "Diving operators have welcomed the change, noting that the outer reefs around these islands remain some of the least disturbed in the archipelago.",
            "Travellers should note that permits are still required to visit Lakshadweep and are best arranged well ahead of the trip through the Lakshadweep Administration's tourism office."
        ]
    },
    {
        id: "varanasi-corridor-update-2026",
        destId: "varanasi",
        title: "Kashi Vishwanath Corridor Sees Record Pilgrim Footfall This Season",
        date: "10 June 2026",
        image: "images/varanasi.jpg",
        summary: "The redeveloped corridor connecting the ghats to Kashi Vishwanath Temple continues to draw record numbers of pilgrims and visitors.",
        content: [
            "The Kashi Vishwanath Corridor, which links the temple directly to the banks of the Ganga, has reported some of its highest pilgrim numbers since opening, with queues managed through an expanded token system.",
            "City officials say the corridor has also boosted footfall at nearby ghats, with Dashashwamedh Ghat's evening Ganga Aarti drawing particularly large crowds on weekends.",
            "Boat operators along the river have added extra early-morning departures to meet demand for sunrise views of the ghats, a experience many visitors rank among the highlights of a Varanasi trip.",
            "Visitors are encouraged to plan temple visits during early morning or late evening hours to avoid the peak midday rush."
        ]
    },
    {
        id: "munnar-tea-festival-2026",
        destId: "munnar",
        title: "Munnar's Tea Estates Open Doors for Annual Harvest Season Tours",
        date: "3 June 2026",
        image: "images/munnar.jpg",
        summary: "Several tea estates around Munnar are opening their gardens for guided harvest-season tours and tasting sessions.",
        content: [
            "With the harvest season in full swing, a number of tea estates around Munnar are opening their gardens to visitors for guided walks through the plantations, followed by tastings at their processing units.",
            "Guides walk visitors through the plucking process, explain the difference between orthodox and CTC tea production, and demonstrate how leaves are graded before packaging.",
            "The tours have become a popular add-on for travellers already visiting the Tea Museum, giving a more hands-on view of the industry that shaped the region.",
            "Estate visits are best combined with an early start, since the plantations are at their most photogenic in the morning mist before the sun burns it off."
        ]
    },
    {
        id: "gokarna-beach-cleanup-2026",
        destId: "gokarna",
        title: "Community Beach Clean-Up Drives Keep Gokarna's Coastline Pristine",
        date: "27 May 2026",
        image: "images/gokarna.jpg",
        summary: "Local volunteer groups and homestay owners in Gokarna have stepped up regular beach clean-up drives across its five main beaches.",
        content: [
            "Local volunteer groups, together with homestay and café owners, have organised regular clean-up drives across Gokarna's stretch of beaches, from Kudle to Paradise Beach.",
            "The initiative has been credited with keeping the coastline noticeably cleaner during peak season, a point many repeat visitors say sets Gokarna apart from more crowded coastal towns.",
            "Organisers are also encouraging visitors to carry reusable water bottles and avoid single-use plastics during beach treks between Om Beach and Half Moon Beach.",
            "Travellers interested in joining a clean-up during their stay can usually sign up through noticeboards at most beachside guesthouses."
        ]
    },
    {
        id: "jaisalmer-desert-festival-2026",
        destId: "jaisalmer",
        title: "Jaisalmer Desert Festival Dates Announced for Next Season",
        date: "18 May 2026",
        image: "images/jaisalmer.jpg",
        summary: "Dates for the upcoming Jaisalmer Desert Festival have been announced, with the usual mix of camel races, turban-tying contests, and folk performances.",
        content: [
            "The Rajasthan Tourism Department has announced dates for the next edition of the Jaisalmer Desert Festival, one of the state's most colourful cultural events, held annually against the backdrop of the Sam Sand Dunes.",
            "Regular features of the festival include camel races, turban-tying competitions, and performances by Kalbeliya folk dancers, alongside a moonlit desert camp experience for visitors staying overnight.",
            "This year's edition is expected to include an expanded handicraft bazaar showcasing Rajasthani textiles, leatherwork, and silver jewellery from artisans across the region.",
            "Given the festival's popularity, desert camps around Sam Sand Dunes tend to book out early, and travellers are advised to reserve accommodation as soon as dates are confirmed."
        ]
    },
    {
        id: "kutch-rann-utsav-2026",
        destId: "kutch",
        title: "Rann Utsav Tent City Reopens With Expanded Cultural Line-Up",
        date: "10 May 2026",
        image: "images/rann-utsav.jpg",
        summary: "The Rann Utsav Tent City near the White Desert has reopened for the season with new cultural performances and expanded stay options.",
        content: [
            "The Rann Utsav Tent City near Dholavira has reopened for the season, offering visitors an expanded range of accommodation, from luxury tents to more budget-friendly options.",
            "This year's cultural programme includes nightly folk dance and live Kutchi music performances, alongside craft demonstrations from local artisans working in bandhani, mirror work, and embroidery.",
            "Full moon nights remain the most sought-after dates, when the White Desert turns silver under the moonlight — a sight that draws photographers from across the country.",
            "Given the festival's seasonal nature, most tour operators recommend booking Tent City stays several weeks in advance, particularly around full moon weekends."
        ]
    },
    {
        id: "delhi-winter-festivals-2026",
        destId: "delhi",
        title: "Delhi's Winter Festival Season Brings Heritage Walks and Food Trails Back",
        date: "1 May 2026",
        image: "images/delhi-parade.jpg",
        summary: "Delhi's popular winter season lineup of heritage walks, food trails, and cultural nights is returning with new additions this year.",
        content: [
            "As the city's cooler months approach, Delhi's calendar of heritage walks and food trails is returning, with several new routes added through Old Delhi's lesser-explored lanes.",
            "The Chandni Chowk food trail remains a firm favourite, taking visitors past generations-old shops for parathas, kebabs, and traditional sweets, while newer heritage walks now cover areas around Hauz Khas Village.",
            "Evening cultural programmes, including Sufi music nights, are also expected to return to venues around the city as the festival season picks up.",
            "Visitors are advised to book guided walks in advance, as popular routes through Chandni Chowk tend to sell out quickly on weekends."
        ]
    },
    {
        id: "tawang-connectivity-2026",
        destId: "tawang",
        title: "Improved Road Connectivity Opens Up Easier Access to Tawang",
        date: "22 April 2026",
        image: "images/tawang.jpg",
        summary: "Recent road improvements along the route to Tawang have made the journey smoother, cutting travel time from Guwahati and Tezpur.",
        content: [
            "Recent improvements to the road network connecting Tawang to the rest of Arunachal Pradesh have made the journey noticeably smoother, cutting down travel time from both Guwahati and Tezpur.",
            "The route via Sela Pass, one of the highest motorable passes in the world, remains the scenic highlight of the drive, though travellers are advised to check pass conditions before departure as weather can close it with little notice.",
            "Local tour operators report a rise in road-trip travellers making the journey by car, in addition to the usual visitors arriving by flight into Tezpur or Guwahati followed by a road transfer.",
            "As with any high-altitude destination, visitors are encouraged to build in a day for acclimatisation before heading further up toward Bumla Pass."
        ]
    }
];
