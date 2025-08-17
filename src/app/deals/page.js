"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const deals = [
  {
    model: "BMW X5",
    img: "https://media.ed.edmunds-media.com/bmw/x5/2026/oem/2026_bmw_x5_4dr-suv_xdrive40i_fq_oem_1_1280.jpg",
    originalPrice: 60000,
    discount: 0.1,
  },
  {
    model: "Audi Q7",
    img: "https://hips.hearstapps.com/hmg-prod/images/0k2a4815-66b29b3088101.jpg?crop=1.00xw:0.848xh;0,0.121xh&resize=980:*",
    originalPrice: 65000,
    discount: 0.15,
  },
  {
    model: "Mercedes E-Class",
    img: "https://www.mbusa.com/content/dam/mb-nafta/us/myco/my25/e-class/e-sedan/byo-options/2025-E-SEDAN-MP-017.jpg",
    originalPrice: 65000,
    discount: 0.12,
  },
  {
    model: "Tesla Model 3",
    img: "https://www.shop4tesla.com/cdn/shop/articles/lohnt-sich-ein-gebrauchtes-tesla-model-3-vor-und-nachteile-833053.jpg?v=1733570691",
    originalPrice: 45000,
    discount: 0.08,
  },
  {
    model: "Porsche 911",
    img: "https://media.ed.edmunds-media.com/porsche/911/2025/oem/2025_porsche_911_coupe_carrera-4-gts_fq_oem_1_1280.jpg",
    originalPrice: 120000,
    discount: 0.2,
  },
  {
    model: "Toyota Camry",
    img: "https://hips.hearstapps.com/hmg-prod/images/2025-toyota-camry-xse-awd-123-66993cc94cc40.jpg?crop=0.676xw:0.506xh;0.101xw,0.399xh&resize=1200:*",
    originalPrice: 30000,
    discount: 0.07,
  },
];

export default function DealsPage() {
  return (
    <main className="bg-gray-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 text-center"
      >
        Hot Deals
      </motion.h1>
      <p className="text-gray-600 text-center max-w-2xl mx-auto text-lg md:text-xl mb-12">
        Grab the best offers on selected cars before they&apos;re gone.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {deals.map((deal, idx) => {
          const discountedPrice = deal.originalPrice * (1 - deal.discount);
          return (
            <motion.div
              key={idx}
              className="relative bg-white rounded-xl shadow overflow-hidden cursor-pointer hover:shadow-xl transition"
              whileHover={{ scale: 1.03 }}
            >
              <div className="relative w-full h-48">
                <Image
                  src={deal.img}
                  alt={deal.model}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
                <span className="absolute top-3 left-3 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Hot Deal
                </span>
                <div className="absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 transition flex items-center justify-center gap-3">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-full shadow hover:bg-blue-700">
                    View Deal
                  </button>
                  <button className="bg-white text-gray-900 px-4 py-2 rounded-full shadow hover:bg-gray-200">
                    Contact Seller
                  </button>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{deal.model}</h3>
                <p className="mt-1 text-gray-500 line-through">
                  ${deal.originalPrice.toLocaleString()}
                </p>
                <p className="mt-1 text-green-600 font-bold text-lg">
                  ${discountedPrice.toLocaleString()} ({deal.discount * 100}% off)
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </main>
  );
}
