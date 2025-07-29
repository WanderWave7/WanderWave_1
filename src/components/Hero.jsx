import React from "react";
import homeImage from "../assets/hero.jpg";
import FeaturedPackages from "./FeaturedPackages";

export default function Hero() {
  return (
    <div>
      <section id="hero" className="relative w-full h-[100vh] min-h-[600px]">
        <div className="h-full">
          <img
            src={homeImage}
            alt="Background"
            className="w-full h-full object-cover brightness-60"
          />
        </div>

        <div className="absolute top-0 w-full h-full flex flex-col justify-center items-center text-center z-30 gap-4 px-4">
          <div className="text-white px-2">
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-wide text-white/80">
              Wander Far. Ride the Wave.
            </h1>

            <p className="mt-2 text-sm sm:text-base md:text-lg lg:px-[30vw] text-white/80">
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
                className="bg-transparent border-none text-center text-black placeholder-black focus:outline-none w-full sm:w-64"
              />
            </div>

            <div className="flex flex-col items-center px-4">
              <label className="text-indigo-900 text-base mb-1">Check-in</label>
              <input
                type="date"
                className="bg-transparent border-none text-black focus:outline-none pl-4 md:pl-12 w-full sm:w-[160px]"
              />
            </div>

            <div className="flex flex-col items-center px-4">
              <label className="text-indigo-900 text-base mb-1">
                Check-out
              </label>
              <input
                type="date"
                className="bg-transparent border-none text-black focus:outline-none pl-4 md:pl-12 w-full sm:w-[160px]"
              />
            </div>

            <button className="px-6 py-3 bg-blue-600 text-white rounded-md uppercase text-base hover:bg-blue-900 transition cursor-pointer w-full sm:w-auto">
              Explore Now
            </button>
          </div>
        </div>
      </section>

      <section id="featured">
        <FeaturedPackages />
      </section>
      <section id="highlights"></section>
    </div>
  );
}
