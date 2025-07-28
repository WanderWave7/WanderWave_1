import React from "react";
import homeImage from "../assets/hero.jpg";
import FeaturedPackages from "./FeaturedPackages";

export default function Hero() {
  return (
    <div>
      <section id="hero" className="relative w-full h-full">
        <div className="h-full">
          <img
            src={homeImage}
            alt="Background"
            className="w-full h-full object-cover brightness-60"
          />
        </div>

        <div className="absolute top-0 w-full h-full flex flex-col justify-center items-center text-center z-30 gap-4">
          <div className="text-white">
            <h1 className="text-7xl md:text-6xl font-extrabold tracking-wide text-white/80">
              Wander Far. Ride the Wave.
            </h1>

            <p className="mt-2 text-base md:text-lg px-4 md:px-[30vw] text-white/80">
              Discover unforgettable destinations, curated journeys, and stories
              that move with you. WanderWave — where every trip begins with a
              spark.
            </p>
          </div>

          <div className="flex flex-col md:flex-row bg-white/80 p-4 md:p-2 rounded-md gap-4 md:gap-0 items-center">
            <div className="flex flex-col items-center px-4">
              <label className="text-indigo-900 text-base mb-1">
                Where you want to go
              </label>
              <input
                type="text"
                placeholder="Search Your location"
                className="bg-transparent border-none text-center text-black placeholder-black focus:outline-none"
              />
            </div>

            <div className="flex flex-col items-center px-4">
              <label className="text-indigo-900 text-base mb-1">Check-in</label>
              <input
                type="date"
                className="bg-transparent border-none text-black focus:outline-none pl-4 md:pl-12"
              />
            </div>

            <div className="flex flex-col items-center px-4">
              <label className="text-indigo-900 text-base mb-1">Check-out</label>
              <input
                type="date"
                className="bg-transparent border-none text-black focus:outline-none pl-4 md:pl-12"
              />
            </div>

            <button className="px-6 py-3 bg-blue-600 text-white rounded-md uppercase text-base hover:bg-blue-900 transition">
              Explore Now
            </button>
          </div>
        </div>
      </section>

      {/* ✅ Add featured packages inside a scrollable section */}
      <section id="featured">
        <FeaturedPackages />
      </section>
      <section id="highlights">
    
</section>

    </div>
  );
}
