import React from "react";
import aboutHero from "../assets/about-hero.jpg"; // Replace with your actual hero image
import { Link } from "react-router-dom";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function AboutUs() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="relative h-[75vh] w-full">
        <img
          src={aboutHero}
          alt="About Hero"
          className="w-full h-full object-cover brightness-60"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold">About WanderWave</h1>
          <p className="text-lg mt-4 max-w-2xl">
            "Explore more, worry less – your journey starts with WanderWave."
          </p>
        </div>
      </div>

      {/* Goal & Mission */}
      <section className="py-12 px-4 md:px-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Our Goal & Mission</h2>
        <p className="max-w-3xl mx-auto text-gray-600">
          Our mission is to connect travelers with unforgettable experiences by offering
          affordable travel packages, top-rated destinations, and the best service in the
          industry. WanderWave aims to be your most trusted travel partner.
        </p>
      </section>

      {/* Core Values */}
      <section className="py-12 px-4 md:px-20">
        <h2 className="text-3xl font-bold text-center mb-10">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Trust & Safety", desc: "We prioritize your safety and trust above all, ensuring hassle-free travels." },
            { title: "Customer Satisfaction", desc: "We go the extra mile to satisfy our clients with tailored services." },
            { title: "Innovation", desc: "We bring creative travel solutions using modern tools and trends." },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition duration-300"
            >
              <h3 className="text-xl font-semibold mb-2 text-blue-600">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/contact"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-800 transition"
          >
            Contact Us
          </Link>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 px-4 md:px-20 bg-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="bg-white rounded-2xl shadow p-6">
            <FaEnvelope className="text-3xl mx-auto text-blue-500 mb-4" />
            <h4 className="text-lg font-semibold">Email Us</h4>
            <p className="text-gray-600">support@wanderwave.com</p>
          </div>
          <div className="bg-white rounded-2xl shadow p-6">
            <FaPhoneAlt className="text-3xl mx-auto text-blue-500 mb-4" />
            <h4 className="text-lg font-semibold">Call Us</h4>
            <p className="text-gray-600">+1 1800 25 2202</p>
          </div>
          <div className="bg-white rounded-2xl shadow p-6">
            <FaMapMarkerAlt className="text-3xl mx-auto text-blue-500 mb-4" />
            <h4 className="text-lg font-semibold">Headquarters</h4>
            <p className="text-gray-600">Kathmandu, Nepal</p>
          </div>
        </div>
      </section>
    </div>
  );
}
