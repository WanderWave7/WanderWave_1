import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Brandon Smith",
    feedback: "WanderWave made our honeymoon unforgettable! Everything was well-organized and smooth.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Emily Johnson",
    feedback: "Booking our dream destination was never this easy. Loved the experience!",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Nitesh Sharma",
    feedback: "Affordable and reliable. Their 24/7 support really helped us during our trip.",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 600,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  arrows: false,
};

export default function TestimonialSection() {
  return (
    <section className="bg-white py-20 px-4" id="testimonials">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          What People Say About <span className="text-blue-600">WanderWave</span>
        </motion.h2>

        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="p-8 bg-gray-50 rounded-xl shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="flex flex-col items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-28 h-28 rounded-full object-cover border-4 border-blue-500 mb-6"
                />
                <p className="text-gray-700 text-lg italic mb-4">"{testimonial.feedback}"</p>
                <h4 className="text-xl font-semibold text-blue-700">{testimonial.name}</h4>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
