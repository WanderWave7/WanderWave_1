import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkedAlt, FaMap, FaGlobe, FaCalendarAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import SectionWrapper, { fadeIn } from "./SectionWrapper";

const services = [
  {
    icon: <FaMapMarkedAlt className="text-4xl text-blue-600" />,
    title: "Guided Tours",
    description:
      "Explore destinations with knowledgeable local guides who bring history and culture to life.",
  },
  {
    icon: <FaMap className="text-4xl text-red-500" />,
    title: "Custom Itineraries",
    description:
      "Personalized travel plans tailored to your interests, timeframe, and budget preferences.",
  },
  {
    icon: <FaGlobe className="text-4xl text-blue-600" />,
    title: "Adventure Packages",
    description:
      "Thrilling experiences from hiking and trekking to water sports and wildlife safaris.",
  },
  {
    icon: <FaCalendarAlt className="text-4xl text-red-500" />,
    title: "Holiday Packages",
    description:
      "All-inclusive holiday deals to popular destinations worldwide with seasonal offers.",
  },
];

export default function Services() {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-100">
      <SectionWrapper id="services" className="py-20 text-center">
        <motion.div variants={fadeIn("down", "spring", 0.1, 0.75)}>
          <h2 className="text-3xl font-bold text-blue-700">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-2 mb-10">
            Discover our comprehensive range of travel services designed to make
            your journey seamless and memorable.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 md:px-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", "spring", index * 0.2, 0.75)}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all"
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="font-semibold text-xl mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.button
          variants={fadeIn("up", "spring", 0.8, 0.75)}
          onClick={() => navigate("/contact")}
          className="mt-10 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
        >
          Contact Now
        </motion.button>
      </SectionWrapper>
    </div>
  );
}
