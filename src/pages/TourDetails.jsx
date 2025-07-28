import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import pokharaImg from "../assets/pokhara.jpg";
import kathmanduImg from "../assets/kathmandu.jpg";
import lumbiniImg from "../assets/lumbini.jpg";

const data = {
  1: {
    title: "Pokhara Adventure",
    image: pokharaImg,
    about:
      "Pokhara is the gateway to the Annapurna Himalayas. Experience the thrill of paragliding, explore caves, go boating in Phewa Lake, and enjoy the scenic mountain views.",
    price: "$299",
    services: [
      "Airport Pickup & Drop",
      "Hotel Stay",
      "Breakfast Included",
      "Local Guide",
    ],
    itinerary: [
      "Arrival in Pokhara and Lakeside stroll",
      "Paragliding and Peace Pagoda Hike",
      "Cave exploration and boating",
      "Free time for shopping and departure",
    ],
  },
  2: {
    title: "Kathmandu Heritage Tour",
    image: kathmanduImg,
    about:
      "Visit UNESCO heritage sites like Swayambhunath, Patan Durbar Square, and Boudhanath. Perfect for cultural explorers and history lovers.",
    price: "$199",
    services: [
      "Airport Pickup",
      "3-Star Hotel",
      "All Entry Fees",
      "English-speaking Guide",
    ],
    itinerary: [
      "Arrival and Thamel walk",
      "Swayambhunath and Patan Durbar Square",
      "Boudhanath and Pashupatinath Tour",
      "Shopping and Departure",
    ],
  },
  3: {
    title: "Lumbini Spiritual Journey",
    image: lumbiniImg,
    about:
      "Lumbini is the birthplace of Lord Buddha. Explore monasteries, Maya Devi Temple, and the spiritual serenity of this sacred site.",
    price: "$249",
    services: ["Hotel & Meals", "Temple Access", "Tour Guide", "Pickup & Drop"],
    itinerary: [
      "Arrival and check-in",
      "Visit Maya Devi Temple",
      "Explore international monasteries",
      "Peace meditation and Departure",
    ],
  },
};

export default function TourDetails() {
  const { id } = useParams();
  const tour = data[id];

  if (!tour)
    return <div className="text-center py-20 text-xl">Tour Not Found</div>;

  return (
    <motion.div
      className="min-h-screen bg-gray-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Image */}
      <motion.div
        className="relative h-[400px]"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <img
          src={tour.image}
          alt={tour.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent px-10 py-6">
          <h1 className="text-white text-4xl font-bold">{tour.title}</h1>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-6 lg:px-20 py-10">
        {/* Main content */}
        <motion.div
          className="md:col-span-3 space-y-8"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.section>
            <h2 className="text-2xl font-bold text-blue-800 mb-2">
              About This Tour
            </h2>
            <p className="text-gray-700 leading-relaxed">{tour.about}</p>
          </motion.section>

          <motion.section
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-blue-800 mb-4">
              Activities & Itinerary
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              {tour.itinerary.map((item, index) => (
                <li key={index}>
                  <span className="font-semibold">Day {index + 1}:</span> {item}
                </li>
              ))}
            </ul>
          </motion.section>
        </motion.div>

        {/* Sidebar */}
        <motion.div
          className="md:col-span-1 bg-white shadow-md p-6 rounded-xl"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold mb-2">
            Price: <span className="text-blue-700">{tour.price}</span>
          </h3>
          <button className="w-full bg-blue-600 text-white py-2 rounded-full mb-4 hover:bg-blue-800 transition duration-300">
            Book This Tour
          </button>
          <p className="font-medium text-gray-800 mb-2">Includes:</p>
          <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
            {tour.services.map((service, idx) => (
              <li key={idx}>{service}</li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.div>
  );
}
