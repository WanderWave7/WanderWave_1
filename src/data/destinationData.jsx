import parisHero from "../assets/parisHero.jpg";
import gallery1 from "../assets/parisHero.jpg";
import gallery2 from "../assets/paris2.jpeg";
import gallery3 from "../assets/paris3.jpeg";

import tokyoHero from "../assets/tokyoHero.jpg";
import tokyo1 from "../assets/tokyo1.jpg";
import tokyo2 from "../assets/tokyo2.jpg"; // Replace with real Tokyo image
import tokyo3 from "../assets/tokyo3.jpg";     // Replace with real Tokyo image

import nycHero from "../assets/nyc1.jpg";
import nyc1 from "../assets/nyc1.jpg";
import nyc2 from "../assets/nyc2.jpg"; // Replace with real NYC image
import nyc3 from "../assets/nyc3.jpg";   // Replace with real NYC image

import veniceHero from "../assets/venice1.jpg";
import venice1 from "../assets/venice1.jpg";
import venice2 from "../assets/venice2.jpg"; // Replace with real Venice image
import venice3 from "../assets/venice3.jpg"; // Replace with real Venice image

const destinationData = [
  {
    id: 1,
    name: "Paris",
    heroImage: parisHero,
    quote: "City of Love & Lights",
    description:
      "Paris is the capital of France, known for its art, fashion, gastronomy, and culture.",
    weather: "Mild and moderately wet",
    season: "April to June & October",
    location: "France",
    gallery: [gallery1, gallery2, gallery3],
    activities: [
      "Visit Eiffel Tower",
      "Explore Louvre Museum",
      "Cruise on the Seine River",
    ],
  },
  {
    id: 2,
    name: "Tokyo",
    heroImage: tokyoHero,
    quote: "A blend of tradition and technology",
    description:
      "Tokyo is a vibrant city in Japan that mixes ultra-modern with traditional temples, rich cuisine, and unique pop culture.",
    weather: "Humid subtropical",
    season: "March to May & October to November",
    location: "Japan",
    gallery: [tokyo1, tokyo2, tokyo3],
    activities: [
      "Visit Senso-ji Temple",
      "Walk through Shibuya Crossing",
      "Experience sushi at Tsukiji Market",
    ],
  },
  {
    id: 3,
    name: "New York City",
    heroImage: nycHero,
    quote: "The city that never sleeps",
    description:
      "New York City is an iconic global hub of finance, culture, and entertainment with famous landmarks and diverse neighborhoods.",
    weather: "Cold winters and hot summers",
    season: "Spring and Autumn",
    location: "USA",
    gallery: [nyc1, nyc2, nyc3],
    activities: [
      "See Times Square",
      "Stroll through Central Park",
      "Visit the Statue of Liberty",
    ],
  },
  {
    id: 4,
    name: "Venice",
    heroImage: veniceHero,
    quote: "A floating city of romance",
    description:
      "Venice is a charming city in Italy known for its canals, gondola rides, and historic architecture built on water.",
    weather: "Mild and humid",
    season: "April to June & September",
    location: "Italy",
    gallery: [venice1, venice2, venice3],
    activities: [
      "Ride a gondola on Grand Canal",
      "Visit St. Mark's Basilica",
      "Explore Doge’s Palace",
    ],
  },
];

export default destinationData;
