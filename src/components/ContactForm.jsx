import React from "react";

export default function ContactForm() {
  return (
    <form className="bg-white max-w-3xl mx-auto p-8 rounded-xl shadow-md space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block mb-1 font-semibold">Full Name</label>
          <input type="text" className="w-full border px-4 py-2 rounded-lg" placeholder="Your name" required />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Email Address</label>
          <input type="email" className="w-full border px-4 py-2 rounded-lg" placeholder="Your email" required />
        </div>
      </div>
      <div>
        <label className="block mb-1 font-semibold">Subject</label>
        <input type="text" className="w-full border px-4 py-2 rounded-lg" placeholder="Subject" required />
      </div>
      <div>
        <label className="block mb-1 font-semibold">Message</label>
        <textarea className="w-full border px-4 py-2 rounded-lg" rows="5" placeholder="Your message" required></textarea>
      </div>
      <div className="text-center">
        <button
          type="submit"
          className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
