"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const blogPosts = [
  {
    title: "Top 5 SUVs for 2025",
    img: "https://hips.hearstapps.com/hmg-prod/images/0k2a4815-66b29b3088101.jpg?crop=1.00xw:0.848xh;0,0.121xh&resize=980:*",
    author: "Jane Doe",
    date: "Aug 10, 2025",
    excerpt: "Discover the best SUVs of 2025 based on performance, comfort, and price.",
  },
  {
    title: "Electric Cars: What You Need to Know",
    img: "https://www.shop4tesla.com/cdn/shop/articles/lohnt-sich-ein-gebrauchtes-tesla-model-3-vor-und-nachteile-833053.jpg?v=1733570691",
    author: "John Smith",
    date: "Aug 8, 2025",
    excerpt: "A complete guide to electric vehicles, charging stations, and cost savings.",
  },
  {
    title: "Luxury Cars Worth Every Penny",
    img: "https://media.ed.edmunds-media.com/porsche/911/2025/oem/2025_porsche_911_coupe_carrera-4-gts_fq_oem_1_1280.jpg",
    author: "Emily Clark",
    date: "Aug 5, 2025",
    excerpt: "Explore luxury cars that offer unmatched style, speed, and comfort.",
  },
  {
    title: "How to Get the Best Car Deals",
    img: "https://hips.hearstapps.com/hmg-prod/images/2025-toyota-camry-xse-awd-123-66993cc94cc40.jpg?crop=0.676xw:0.506xh;0.101xw,0.399xh&resize=1200:*",
    author: "Michael Lee",
    date: "Aug 2, 2025",
    excerpt: "Tips and tricks for negotiating car prices and finding special promotions.",
  },
  {
    title: "Maintaining Your Car Like a Pro",
    img: "https://media.ed.edmunds-media.com/mercedes-benz/s-class/2025/oem/2025_mercedes-benz_s-class_sedan_amg-s-63-e-performance_fq_oem_1_1600.jpg",
    author: "Sarah Johnson",
    date: "Jul 30, 2025",
    excerpt: "Learn essential car maintenance habits to keep your vehicle running smoothly.",
  },
  {
    title: "Future of Autonomous Vehicles",
    img: "https://cdn.motor1.com/images/mgl/1ZQrxK/s1/2023-bmw-m3-cs-first-drive-review.webp",
    author: "David Kim",
    date: "Jul 28, 2025",
    excerpt: "An in-depth look at autonomous cars and how they will reshape transportation.",
  },
];

export default function BlogPage() {
  return (
    <main className="bg-gray-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 text-center"
      >
        Carlo Insights
      </motion.h1>
      <p className="text-gray-600 text-center max-w-2xl mx-auto text-lg md:text-xl mb-12">
        Latest news, tips, and guides for car enthusiasts and buyers.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post, idx) => (
          <motion.div
            key={idx}
            className="relative bg-white rounded-xl shadow overflow-hidden cursor-pointer hover:shadow-xl transition"
            whileHover={{ scale: 1.02 }}
          >
            <div className="relative w-full h-48">
              <Image
                src={post.img}
                alt={post.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition flex items-center justify-center">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-full shadow hover:bg-blue-700">
                  Read More
                </button>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">{post.title}</h3>
              <p className="text-gray-500 text-sm mt-1">
                By {post.author} &bull; {post.date}
              </p>
              <p className="text-gray-600 mt-2">{post.excerpt}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
