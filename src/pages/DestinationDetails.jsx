import React, { useState } from "react";
import { useParams } from "react-router-dom";
import destinationData from "../data/destinationData";

export default function DestinationDetails() {
  const { id } = useParams();
  const destination = destinationData.find((d) => d.id === parseInt(id));
  const [selectedImage, setSelectedImage] = useState(null);

  if (!destination) return <div className="p-10 text-center">Destination not found</div>;

  console.log("Hero Image URL:", destination.heroImage);


  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-screen w-full">
        <img
          src={destination.heroImage}
          alt={destination.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold">{destination.name}</h1>
          <p className="text-xl italic mt-4">{destination.quote}</p>
        </div>
      </div>

      {/* Main Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-10 py-14">
        {/* Left: Gallery + Description */}
        <div className="lg:col-span-2 space-y-6">
          {/* Gallery Thumbnails */}
          <div className="grid grid-cols-3 gap-3">
            {destination.gallery.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt="gallery"
                onClick={() => setSelectedImage(img)}
                className="rounded-md cursor-pointer object-cover h-28 w-full hover:opacity-75"
              />
            ))}
          </div>

          {/* Large Preview Image */}
          <img
            src={destination.gallery[0]}
            alt="preview"
            className="w-full rounded-xl object-cover h-[400px]"
          />

          {/* Description */}
          <p className="text-gray-700 text-lg">{destination.description}</p>

          {/* Things To Do */}
          <div>
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Things to Do</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {destination.activities.map((act, idx) => (
                <div key={idx} className="bg-blue-50 p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-blue-700">{act}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Info Box */}
        <div className="bg-blue-50 rounded-xl p-6 space-y-4 shadow-md">
          <h3 className="text-xl font-bold text-blue-700">Tour Info</h3>
          <p><strong>Weather:</strong> {destination.weather}</p>
          <p><strong>Best Season:</strong> {destination.season}</p>
          <p><strong>Location:</strong> {destination.location}</p>
        </div>
      </div>

      {/* Modal Viewer */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 cursor-pointer"
        >
          <img
            src={selectedImage}
            alt="modal"
            className="max-h-[80%] max-w-[90%] rounded-lg shadow-lg"
          />
        </div>
      )}
    </div>
  );
}
