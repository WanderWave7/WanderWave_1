import React from "react";
import aboutHero from "../assets/about-hero.jpg";
import { Link } from "react-router-dom";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

import SectionWrapper, { fadeIn } from "../components/SectionWrapper";

export default function AboutUs() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[75vh] w-full overflow-hidden">
        <motion.img
          src={aboutHero}
          alt="About Hero"
          className="w-full h-full object-cover brightness-60"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <motion.h1
            className="text-4xl md:text-6xl font-bold"
            variants={fadeIn("up", "spring", 0.3, 1)}
            initial="hidden"
            animate="show"
          >
            About WanderWave
          </motion.h1>
          <motion.p
            className="text-lg mt-4 max-w-2xl"
            variants={fadeIn("up", "spring", 0.5, 1)}
            initial="hidden"
            animate="show"
          >
            "Explore more, worry less – your journey starts with WanderWave."
          </motion.p>
        </div>
      </div>

      {/* Main Content Starts Below Hero */}
      <div className="pt-5">
        {/* Goal & Mission */}
        <SectionWrapper className="py-12 px-4 md:px-20 text-center">
          <motion.h2
            className="text-3xl font-bold mb-4"
            variants={fadeIn("down", "spring", 0.1, 0.75)}
          >
            Our Goal & Mission
          </motion.h2>
          <motion.p
            className="max-w-3xl mx-auto text-gray-600"
            variants={fadeIn("up", "spring", 0.3, 0.75)}
          >
            Our mission is to connect travelers with unforgettable experiences
            by offering affordable travel packages, top-rated destinations, and
            the best service in the industry. WanderWave aims to be your most
            trusted travel partner.
          </motion.p>
        </SectionWrapper>

        {/* Core Values */}
        <SectionWrapper className="py-12 px-4 md:px-20">
          <motion.h2
            className="text-3xl font-bold text-center mb-10"
            variants={fadeIn("down", "spring", 0.1, 0.75)}
          >
            Our Core Values
          </motion.h2>
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
                variants={fadeIn("up", "spring", idx * 0.2, 0.75)}
              >
                <h3 className="text-xl font-semibold mb-2 text-blue-600">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-12 text-center"
            variants={fadeIn("up", "spring", 0.8, 0.75)}
          >
            <Link
              to="/contact"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-800 transition"
            >
              Contact Us
            </Link>
          </motion.div>
        </SectionWrapper>

        {/* Contact Info Cards */}
        <SectionWrapper className="py-12 px-4 md:px-20 bg-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {[
              {
                icon: (
                  <FaEnvelope className="text-3xl mx-auto text-blue-500 mb-4" />
                ),
                title: "Email Us",
                text: "support@wanderwave.com",
              },
              {
                icon: (
                  <FaPhoneAlt className="text-3xl mx-auto text-blue-500 mb-4" />
                ),
                title: "Call Us",
                text: "+1 1800 25 2202",
              },
              {
                icon: (
                  <FaMapMarkerAlt className="text-3xl mx-auto text-blue-500 mb-4" />
                ),
                title: "Headquarters",
                text: "Kathmandu, Nepal",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-2xl shadow p-6"
                variants={fadeIn("up", "spring", idx * 0.2, 0.75)}
              >
                {item.icon}
                <h4 className="text-lg font-semibold">{item.title}</h4>
                <p className="text-gray-600">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </SectionWrapper>
      </div>
    </div>
  );
}
