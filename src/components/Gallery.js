// src/components/Gallery.jsx
"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules"; // <-- add Autoplay

const galleryImages = [
  "https://cdn.jdpower.com/JDP_2022%20Lexus%20LC%20500h%20Ultra%20White%20Front%20Quarter%20View.jpg",
  "https://imgcdn.zigwheels.us/large/gallery/exterior/7/170/chevrolet-camaro-front-angle-low-view-463238.jpg",
  "https://i.ebayimg.com/images/g/GRcAAOSwbXxhanMw/s-l1200.jpg",
  "https://media.ed.edmunds-media.com/mercedes-benz/s-class/2025/oem/2025_mercedes-benz_s-class_sedan_amg-s-63-e-performance_fq_oem_1_1280.jpg",
  "https://cdn.outsideonline.com/wp-content/uploads/2016/02/22/lexus-rx-450h-awd_h.jpg",
  "https://www.europeanprestige.co.uk/blobs/stock/588/images/15ee966c-9490-4f00-b4c4-194f97dd90f8/urus-1.jpg?width=2000&height=1333",
];

const Gallery = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-4xl font-bold text-gray-800 mb-12">
          Our Car Gallery
        </h2>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="overflow-hidden rounded-2xl shadow-lg"
            >
              <img
                src={img}
                alt={`Gallery ${i + 1}`}
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </div>

        {/* Mobile Swiper with Autoplay */}
        <div className="md:hidden">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={16}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
          >
            {galleryImages.map((img, i) => (
              <SwiperSlide key={i}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="overflow-hidden rounded-2xl shadow-lg"
                >
                  <img
                    src={img}
                    alt={`Gallery ${i + 1}`}
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
