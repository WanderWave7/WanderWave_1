import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import darkMountains from "../assets/dark-mountains.jpg";  // Update the path as per your folder

export default function Footer() {
  return (
    <footer className="relative text-white mt-16 min-h-[250px]">
      {/* Background Image */}
      <img
        src={darkMountains}
        alt="Dark Mountains Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h4 className="text-xl font-bold mb-4">WanderWave</h4>
          <p className="text-sm text-gray-300">
            Discover your next adventure with us. Explore, dream, and travel.
          </p>
        </div>

        <div>
          <h4 className="text-xl font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-bold mb-4">Follow Us</h4>
          <div className="flex gap-4 text-2xl">
            <a
              href="#"
              aria-label="Facebook"
              className="hover:text-blue-600 transition"
            >
              <FaFacebook />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="hover:text-pink-500 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="hover:text-blue-400 transition"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="relative z-20 text-center py-4 text-sm bg-black/30">
        &copy; {new Date().getFullYear()} WanderWave. All rights reserved.
      </div>
    </footer>
  );
}
