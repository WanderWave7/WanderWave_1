import React from "react";

export default function PreFooter() {
  return (
    <section className="bg-gradient-to-r from-gray-900 via-blue-950 to-black text-white py-12 px-6 md:px-12 text-center rounded-lg max-w-7xl mx-auto my-8 shadow-lg">
      <h2 className="text-3xl font-bold mb-4">
        Ready to start your next adventure?
      </h2>
      <p className="mb-6 max-w-xl mx-auto text-lg">
        Subscribe to our newsletter for the latest travel deals, tips, and
        guides!
      </p>
      <form
        className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto"
        onSubmit={(e) => {
          e.preventDefault();
          alert("Subscribed!"); // Replace with real submit logic
        }}
      >
        <input
          type="email"
          placeholder="Enter your email"
          required
          className="rounded px-4 py-3 text-gray-900 w-full sm:flex-grow bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-yellow-400 text-gray-900 font-semibold rounded px-6 py-3 hover:bg-yellow-500 transition"
        >
          Subscribe
        </button>
      </form>
    </section>
  );
}
