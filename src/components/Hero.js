"use client";

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative bg-gray-50 overflow-hidden">
      {/* Background Patterns */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-10 left-[-40px] w-96 h-96 bg-gradient-to-tr from-blue-300 to-blue-500 rounded-full opacity-40"
          animate={{ y: [0, -30, 0], rotate: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-10 right-[-60px] w-[450px] h-[450px] bg-gradient-to-br from-purple-300 to-purple-500 rounded-full opacity-35"
          animate={{ y: [0, 25, 0], rotate: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/3 w-80 h-80 border-2 border-blue-200 rounded-full opacity-25"
          animate={{ y: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex flex-col-reverse md:flex-row items-center">
        {/* Text Section */}
        <div className="w-full md:w-1/2 flex flex-col items-start text-left space-y-6">
          <motion.h1
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.02 }}
            className="text-4xl md:text-6xl font-bold text-gray-800"
          >
            Find Your Perfect Ride
          </motion.h1>

          <motion.p
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            whileHover={{ scale: 1.01 }}
            className="text-gray-600 text-lg md:text-xl max-w-lg"
          >
            Explore the best car listings, compare models, and discover your dream vehicle in one place.
          </motion.p>

          <motion.a
            href="/listings"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            whileHover={{ scale: 1.08, rotate: [0, 1, -1, 0] }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:bg-blue-700 transition"
          >
            Browse Listings
          </motion.a>
        </div>

        {/* Car Image Section */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          whileHover={{ scale: 1.03 }}
          className="w-full md:w-1/2 flex justify-center md:justify-end mb-12 md:mb-0"
        >
          <img
            src="/images/bmw.png" // transparent PNG car
            alt="Car Hero"
            className="w-96 md:w-[650px] object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
