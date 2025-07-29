import React from "react";
import {
  FaGlobeAsia,
  FaMoneyCheckAlt,
  FaHeadset,
  FaStar,
} from "react-icons/fa";

const reasons = [
  {
    icon: <FaGlobeAsia className="text-5xl text-blue-600" />,
    title: "Explore Top Destinations",
    description:
      "Discover and book packages to the most popular travel spots around the world.",
  },
  {
    icon: <FaMoneyCheckAlt className="text-5xl text-green-600" />,
    title: "Affordable Packages",
    description:
      "We offer the best value travel deals with transparent pricing and no hidden fees.",
  },
  {
    icon: <FaHeadset className="text-5xl text-red-600" />,
    title: "24/7 Customer Support",
    description:
      "Get round-the-clock assistance and travel guidance from our expert team.",
  },
  {
    icon: <FaStar className="text-5xl text-yellow-500" />,
    title: "Trusted by Travelers",
    description:
      "Thousands of happy customers choose WanderWave for their travel adventures.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-gray-100 py-20 px-6" id="why-choose-us">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-14">
          Why Choose <span className="text-blue-600">WanderWave</span>?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="mb-6">{reason.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{reason.title}</h3>
              <p className="text-gray-600 text-base">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
