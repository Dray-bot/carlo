// src/components/FeaturedCars.jsx
"use client";

import { motion } from "framer-motion";

const featuredCars = [
  {
    id: 1,
    brand: "Lamborghini",
    model: "Huracan EVO",
    year: 2023,
    price: 250000,
    image: "https://www.lamborghinigoldcoast.com/imagetag/10822/2/l/New-2023-Lamborghini-Huracan-LP-640-4-EVO-1686768838.jpg",
  },
  {
    id: 2,
    brand: "Porsche",
    model: "911 Carrera",
    year: 2022,
    price: 150000,
    image: "https://media.ed.edmunds-media.com/porsche/cayenne-coupe/2022/oem/2022_porsche_cayenne-coupe_4dr-suv_s_fq_oem_1_1600.jpg",
  },
  {
    id: 3,
    brand: "Ferrari",
    model: "F8 Tributo",
    year: 2023,
    price: 300000,
    image: "https://static0.carbuzzimages.com/wordpress/wp-content/uploads/gallery-images/original/1122000/500/1122563.jpg",
  },
];

const FeaturedCars = () => {
  return (
    <section className="bg-gray-50 py-20 relative overflow-hidden">
      {/* Background Patterns */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-tr from-blue-200 to-blue-400 rounded-full opacity-20"
          animate={{ y: [0, -20, 0], rotate: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-200 to-purple-400 rounded-full opacity-15"
          animate={{ y: [0, 25, 0], rotate: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/3 w-64 h-64 border-2 border-blue-300 rounded-full opacity-10"
          animate={{ y: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-4xl font-bold text-gray-800 mb-12 text-center">
          Featured Cars
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCars.map((car) => (
            <motion.div
              key={car.id}
              whileHover={{ scale: 1.03, rotate: 1 }}
              className="relative bg-white bg-opacity-90 backdrop-blur-md border border-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-500"
            >
              {/* Car Image */}
              <div className="relative w-full h-52 md:h-56 overflow-hidden">
                <img
                  src={car.image}
                  alt={`${car.brand} ${car.model}`}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <span className="absolute top-3 left-3 bg-blue-600 text-white text-sm font-semibold px-2 py-1 rounded-full shadow">
                  {car.year}
                </span>
              </div>

              {/* Car Info */}
              <div className="p-4 flex flex-col space-y-2">
                <h3 className="text-xl font-semibold text-gray-800 hover:text-blue-600 transition">
                  {car.brand} {car.model}
                </h3>
                <p className="text-gray-600 font-medium">Premium Condition</p>
                <p className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                  ${car.price.toLocaleString()}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCars;
