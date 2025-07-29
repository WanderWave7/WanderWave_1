import React from "react";
import contactHero from "../assets/contactHero.jpg";
import officeImage from "../assets/officeImage.jpg";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const Contact = () => {
  return (
    <div>
      {/* Hero Image */}
      <div className="w-full h-[400px] md:h-[500px]">
        <img
          src={contactHero}
          alt="Contact Hero"
          className="w-full h-full object-cover brightness-75"
        />
      </div>

      {/* Main Section */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-8">
        {/* Left Side: Office Info */}
        <div className="space-y-6">
          <img
           src={officeImage}
 					 alt="Office"
  				 className="rounded-2xl shadow-md w-full min-h-[300px] object-cover"
          />
          <div className="space-y-2 text-gray-700">
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-blue-600" />
              <span>New Plaza, Putalisadak, Kathmandu, Nepal</span>
            </div>
            <div className="flex items-center gap-2">
              <FaPhone className="text-blue-600" />
              <span>01-5919709, 9802379330</span>
            </div>
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-blue-600" />
              <span>info@parkvacation.com</span>
            </div>
            <div className="flex items-center gap-2">
              <FaClock className="text-blue-600" />
              <span>Sunday–Friday: 9:30 AM – 5 PM</span>
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <form className="bg-white shadow-md rounded-xl p-8 space-y-6">
          <h2 className="text-2xl font-semibold">Send Us a Message</h2>

          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Full Name *"
              required
              className="border rounded-md px-4 py-2 w-full"
            />
            <input
              type="email"
              placeholder="Email Address *"
              required
              className="border rounded-md px-4 py-2 w-full"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="border rounded-md px-4 py-2 w-full"
            />
            <input
              type="text"
              placeholder="Subject *"
              required
              className="border rounded-md px-4 py-2 w-full"
            />
          </div>

          <select className="border rounded-md px-4 py-2 w-full">
            <option>General Inquiry</option>
            <option>Booking</option>
            <option>Feedback</option>
            <option>Other</option>
          </select>

          <textarea
            rows="4"
            placeholder="Message *"
            required
            className="border rounded-md px-4 py-2 w-full"
          ></textarea>

          {/* Contact Method */}
          <div className="flex gap-4">
            <label className="flex items-center">
              <input type="radio" name="contactMethod" className="mr-2" defaultChecked />
              Email
            </label>
            <label className="flex items-center">
              <input type="radio" name="contactMethod" className="mr-2" />
              Phone
            </label>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 flex items-center gap-2"
          >
            <span>Send Message</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
