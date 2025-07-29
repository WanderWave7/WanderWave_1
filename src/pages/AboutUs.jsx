import React from "react";
import aboutHero from "../assets/about-hero.jpg";
import { Link } from "react-router-dom";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function AboutUs() {
  return (
    <div>
      {/* Hero Section */}
      <motion.div
        className="relative h-[75vh] w-full"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <img
          src={aboutHero}
          alt="About Hero"
          className="w-full h-full object-cover brightness-60"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <motion.h1 className="text-4xl md:text-6xl font-bold" variants={fadeUp}>
            About WanderWave
          </motion.h1>
          <motion.p className="text-lg mt-4 max-w-2xl" variants={fadeUp}>
            "Explore more, worry less – your journey starts with WanderWave."
          </motion.p>
        </div>
      </motion.div>

      {/* Main Content Starts Below Hero */}
      <div className="pt-5">
        {/* Goal & Mission */}
        <motion.section
          className="py-12 px-4 md:px-20 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-3xl font-bold mb-4">Our Goal & Mission</h2>
          <p className="max-w-3xl mx-auto text-gray-600">
            Our mission is to connect travelers with unforgettable experiences by offering
            affordable travel packages, top-rated destinations, and the best service in the
            industry. WanderWave aims to be your most trusted travel partner.
          </p>
        </motion.section>

        {/* Core Values */}
        <motion.section
          className="py-12 px-4 md:px-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <h2 className="text-3xl font-bold text-center mb-10">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Trust & Safety",
                desc: "We prioritize your safety and trust above all, ensuring hassle-free travels.",
              },
              {
                title: "Customer Satisfaction",
                desc: "We go the extra mile to satisfy our clients with tailored services.",
              },
              {
                title: "Innovation",
                desc: "We bring creative travel solutions using modern tools and trends.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition duration-300"
                variants={fadeUp}
              >
                <h3 className="text-xl font-semibold mb-2 text-blue-600">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div className="mt-12 text-center" variants={fadeUp}>
            <Link
              to="/contact"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-800 transition"
            >
              Contact Us
            </Link>
          </motion.div>
        </motion.section>

        {/* Contact Info Cards */}
        <motion.section
          className="py-12 px-4 md:px-20 bg-gray-100"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {[
              {
                icon: <FaEnvelope className="text-3xl mx-auto text-blue-500 mb-4" />,
                title: "Email Us",
                text: "support@wanderwave.com",
              },
              {
                icon: <FaPhoneAlt className="text-3xl mx-auto text-blue-500 mb-4" />,
                title: "Call Us",
                text: "+1 1800 25 2202",
              },
              {
                icon: <FaMapMarkerAlt className="text-3xl mx-auto text-blue-500 mb-4" />,
                title: "Headquarters",
                text: "Kathmandu, Nepal",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-2xl shadow p-6"
                variants={fadeUp}
              >
                {item.icon}
                <h4 className="text-lg font-semibold">{item.title}</h4>
                <p className="text-gray-600">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}
