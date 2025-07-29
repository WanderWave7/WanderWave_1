import React from "react";
import { useNavigate } from "react-router-dom";
import parisImg from "../assets/parisHero.jpg";
import tokyoImg from "../assets/tokyo1.jpg";
import nycImg from "../assets/nyc1.jpg";
import veniceImg from "../assets/venice1.jpg";

const destinations = [
  {
    id: 1,
    name: "Paris",
    image: parisImg,
    description:
      "The city of lights, romance, art, and the iconic Eiffel Tower.",
  },
  {
    id: 2,
    name: "Tokyo",
    image: tokyoImg,
    description:
      "A perfect blend of tradition and innovation in Japan’s capital.",
  },
  {
    id: 3,
    name: "New York",
    image: nycImg,
    description:
      "The city that never sleeps, full of energy, art, and skyscrapers.",
  },
  {
    id: 4,
    name: "Venice",
    image: veniceImg,
    description:
      "A floating city of canals, bridges, and breathtaking architecture.",
  },
];

export default function DestinationHighlights() {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-100 py-16 px-4 sm:px-8 lg:px-20">
      <h2 className="text-4xl font-bold text-center text-blue-700 mb-12">
        Destination Highlights
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {destinations.map((dest) => (
          <div
            key={dest.id}
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300 transform hover:scale-[1.02] group"
          >
            <div className="overflow-hidden">
              <img
                src={dest.image}
                alt={dest.name}
                className="w-full h-52 object-cover transform transition duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-5 space-y-3">
              <h3 className="text-xl font-semibold text-gray-800">
                {dest.name}
              </h3>
              <p className="text-sm text-gray-600">{dest.description}</p>
              <button
                onClick={() => navigate(`/destination/${dest.id}`)}
                className="mt-3 px-5 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-800 transition duration-300"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
