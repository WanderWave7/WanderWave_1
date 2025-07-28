import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import destinationData from "../data/destinationData";
import { motion, AnimatePresence } from "framer-motion";

import { FaTemperatureHigh } from "react-icons/fa";
import { WiHumidity, WiStrongWind } from "react-icons/wi";
import { MdOutlineWbSunny, MdOutlineCloudQueue } from "react-icons/md";

export default function DestinationDetails() {
  const { id } = useParams();
  const destination = destinationData.find((d) => d.id === parseInt(id));
  const [selectedImage, setSelectedImage] = useState(null);
  const [mainImage, setMainImage] = useState(destination?.gallery[0]);

  useEffect(() => {
    if (destination) {
      setMainImage(destination.gallery[0]);
    }
  }, [destination]);

  if (!destination)
    return <div className="p-10 text-center">Destination not found</div>;

  // Animation Variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 12,
      },
    },
  };

  const imagePop = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 14,
      },
    },
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-screen w-full overflow-hidden">
        {/* Hero Image */}
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 60, damping: 20 }}
          className="absolute inset-0 z-0"
        >
          <img
            src={destination.heroImage}
            alt={destination.name}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Dark Overlay + Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white px-4 text-center z-10"
        >
          <motion.h1
            className="text-5xl md:text-6xl font-bold"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {destination.name}
          </motion.h1>
          <motion.p
            className="text-xl italic mt-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            {destination.quote}
          </motion.p>
        </motion.div>
      </div>

      {/* Main Section */}
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-10 py-14"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left Section */}
        <div className="lg:col-span-2 space-y-6">
          {/* Thumbnail Gallery */}
          <motion.div
            className="flex gap-4 overflow-x-auto"
            variants={containerVariants}
          >
            {destination.gallery.map((img, idx) => (
              <motion.img
                key={idx}
                src={img}
                alt={`Thumbnail ${idx + 1}`}
                onClick={() => setMainImage(img)}
                className={`w-24 h-20 object-cover cursor-pointer rounded-md border-2 ${
                  mainImage === img ? "border-blue-500" : "border-transparent"
                }`}
                variants={imagePop}
                whileHover={{ scale: 1.08 }}
              />
            ))}
          </motion.div>

          {/* Main Featured Image */}
          <motion.img
            src={mainImage}
            alt="Featured"
            className="w-full h-[400px] object-cover rounded-xl shadow-md"
            variants={fadeInUp}
          />

          {/* Description */}
          <motion.p className="text-gray-700 text-lg" variants={fadeInUp}>
            {destination.description}
          </motion.p>

          {/* Things To Do */}
          <motion.div variants={fadeInUp}>
            <h2 className="text-2xl font-bold text-blue-800 mb-4">
              Things to Do
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {destination.activities.map((act, idx) => (
                <motion.div
                  key={idx}
                  className="bg-blue-50 p-4 rounded-lg shadow-sm"
                  variants={fadeInUp}
                >
                  <h4 className="font-semibold text-blue-700">✔️ {act}</h4>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Weather & Climate Info Box */}
        <motion.div
          className="bg-white shadow-xl rounded-xl p-6 border text-gray-800"
          variants={fadeInUp}
        >
          <div className="flex items-center gap-3 mb-4">
            <FaTemperatureHigh className="text-xl text-yellow-500" />
            <h3 className="text-xl font-semibold">Weather & Climate</h3>
          </div>

          <div className="text-3xl font-bold text-yellow-600 mb-1">29–30°C</div>
          <p className="text-gray-600 mb-4">Rainy</p>

          <div className="flex justify-between text-sm text-gray-600 mb-6">
            <span className="flex items-center gap-1">
              <WiHumidity className="text-lg" />
              75–83%
            </span>
            <span className="flex items-center gap-1">
              <WiStrongWind className="text-lg" />
              5–10 mph
            </span>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold">Best time to visit:</h4>
            <p>{destination.season}</p>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold mb-1 flex items-center gap-2">
              <MdOutlineWbSunny className="text-yellow-500" />
              Dry Season
            </h4>
            <p className="text-sm text-gray-600">
              November to April. The dry season, known locally as Iruvai, is
              sunny with clear skies, low humidity, and calm seas. Perfect for
              beach days and snorkeling.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-1 flex items-center gap-2">
              <MdOutlineCloudQueue className="text-blue-400" />
              Wet Season
            </h4>
            <p className="text-sm text-gray-600">
              May to October. Characterized by higher humidity, frequent rain,
              and stronger winds. Skies are often cloudy, but sunshine breaks
              are common.
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* Modal Viewer */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 cursor-pointer"
            onClick={() => setSelectedImage(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <motion.img
              src={selectedImage}
              alt="modal"
              className="max-h-[80%] max-w-[90%] rounded-lg shadow-lg"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
