// src/components/About.jsx
"use client";

import { motion } from "framer-motion";
import { Car, ShieldCheck, Star } from "lucide-react";

const features = [
  { icon: Car, title: "Extensive Listings", desc: "Thousands of cars from trusted sellers." },
  { icon: ShieldCheck, title: "Verified Sellers", desc: "All listings are verified for peace of mind." },
  { icon: Star, title: "Premium Experience", desc: "High-quality images, smooth browsing, and detailed info." },
];

const About = () => {
  return (
    <section className="relative bg-gray-50 py-24 overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-tr from-blue-200 to-blue-400 rounded-full opacity-20"
          animate={{ y: [0, -30, 0], x: [0, 15, 0], rotate: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-10 right-0 w-96 h-96 bg-gradient-to-br from-purple-200 to-purple-400 rounded-full opacity-15"
          animate={{ y: [0, 40, 0], x: [0, -20, 0], rotate: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 25, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/3 left-1/2 w-64 h-64 border-2 border-blue-300 rounded-full opacity-10"
          animate={{ y: [0, -20, 0], x: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 22, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Column: Text + Features */}
        <div className="space-y-6">
          <motion.h2
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl md:text-4xl font-bold text-gray-800"
          >
            About Carlo
          </motion.h2>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-lg md:text-xl"
          >
            Carlo is your go-to online marketplace for finding the perfect car. We bring together the best listings, detailed information, and high-quality images to make car shopping simple and enjoyable.
          </motion.p>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gray-600 text-lg md:text-xl"
          >
            Browse cars from trusted sellers, compare models, and discover your next ride all in one place.
          </motion.p>

          <motion.div
            className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <a
              href="/listings"
              className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:bg-blue-700 transition"
            >
              Browse Cars
            </a>
          </motion.div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 gap-6 mt-8">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 * idx }}
                className="flex items-start space-x-4 bg-white bg-opacity-80 backdrop-blur-md p-6 rounded-xl shadow hover:shadow-lg transition"
              >
                <feature.icon className="w-8 h-8 text-blue-600 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">{feature.title}</h4>
                  <p className="text-gray-600">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Column: Car Illustration */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="relative w-full flex justify-center md:justify-end"
        >
          <img
            src="/images/bmw.png"
            alt="Car Illustration"
            className="w-80 md:w-[400px] lg:w-[450px] object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
