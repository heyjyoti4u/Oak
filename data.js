// js/data.js

const travelData = {
    "goa": {
        name: "Goa",
        tagline: "The Party Capital of India",
        heroImage: "images/goa.jpg", // Make sure this exists
        
        // Section 1: What's Happening (Events Slider)
        events: [
            { title: "Sunburn Reload", date: "Friday Night", img: "images/party.jpg" },
            { title: "Beach Carnival", date: "29th Jan", img: "images/carnival.jpg" },
            { title: "Flea Market", date: "Saturday", img: "images/market.jpg" },
            { title: "Jazz Fest", date: "Sunday", img: "images/jazz.jpg" },
            { title: "Full Moon Party", date: "30th Jan", img: "images/moon.jpg" },
            // Add more up to 10-12...
        ],

        // Section 2: Know the Story (History/Relevance)
        story: {
            heading: "A Portugese Legacy",
            content: "Goa is not just about beaches; it's a blend of Indian and Portuguese cultures. Known as the 'Pearl of the Orient', its history dates back to the 3rd century BC. The unique architecture, the susegad way of life, and the stunning churches make it historically relevant beyond just tourism."
        },

        // Section 3: Popular Places (8 items)
        places: [
            { name: "Baga Beach", img: "images/baga.jpg" },
            { name: "Fort Aguada", img: "images/fort.jpg" },
            { name: "Dudhsagar Falls", img: "images/falls.jpg" },
            { name: "Basilica of Bom Jesus", img: "images/church.jpg" },
            { name: "Anjuna Beach", img: "images/anjuna.jpg" },
            { name: "Calangute", img: "images/calangute.jpg" },
            { name: "Chapora Fort", img: "images/chapora.jpg" },
            { name: "Palolem", img: "images/palolem.jpg" }
        ]
    },

    "manali": {
        name: "Manali",
        tagline: "Valley of Gods",
        heroImage: "images/manali.jpg",
        events: [
            { title: "Winter Carnival", date: "2nd Feb", img: "images/snow-fest.jpg" },
            { title: "Skiing Championship", date: "Weekend", img: "images/ski.jpg" },
            // ... more events
        ],
        story: {
            heading: "Ancient Trade Route",
            content: "Manali is named after the Sanatan Hindu lawgiver Manu. It is often referred to as the 'Valley of the Gods'. Historically, it was the beginning of an ancient trade route to Ladakh and beyond."
        },
        places: [
            { name: "Solang Valley", img: "images/solang.jpg" },
            { name: "Rohtang Pass", img: "images/rohtang.jpg" },
            // ... 8 items
        ]
    }
    // Copy paste above block for 'delhi', 'kerala', etc.
};
