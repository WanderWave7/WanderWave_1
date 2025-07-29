import React from "react";
import { useNavigate } from "react-router-dom";
import pokharaImg from "../assets/pokhara.jpg";
import kathmanduImg from "../assets/kathmandu.jpg";
import lumbiniImg from "../assets/lumbini.jpg";

const packages = [
  {
    id: 1,
    title: "Pokhara Adventure",
    image: pokharaImg,
    rating: 4.8,
    price: "$299",
    description:
      "Fly high with paragliding, explore serene lakes, and enjoy the stunning views of the Himalayas.",
  },
  {
    id: 2,
    title: "Kathmandu Heritage Tour",
    image: kathmanduImg,
    rating: 4.6,
    price: "$199",
    description:
      "Dive into ancient history with visits to temples, stupas, and traditional architecture in the capital.",
  },
  {
    id: 3,
    title: "Lumbini Spiritual Journey",
    image: lumbiniImg,
    rating: 4.9,
    price: "$249",
    description:
      "Reconnect with peace and spirituality in the birthplace of Lord Buddha through guided temple tours.",
  },
];

export default function FeaturedPackages() {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-100 py-16 px-4 sm:px-8 lg:px-20">
      <h2 className="text-4xl font-bold text-center text-blue-600 mb-12">
        Featured Travel Packages
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300 transform hover:scale-[1.02] group"
          >
            <div className="overflow-hidden">
              <img
                src={pkg.image}
                alt={pkg.title}
                className="w-full h-52 object-cover transform transition duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-5 space-y-3">
              <h3 className="text-xl font-semibold text-gray-900">
                {pkg.title}
              </h3>
              <p className="text-sm text-gray-700">{pkg.description}</p>
              <p className="text-yellow-500 font-medium flex items-center">
                ⭐ {pkg.rating}
              </p>
              <p className="text-lg text-blue-700 font-bold">{pkg.price}</p>
              <button
                onClick={() => navigate(`/tour/${pkg.id}`)}
                className="mt-3 px-5 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-800 transition duration-300 cursor-pointer"
              >
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
