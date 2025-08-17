// src/components/Footer.jsx
"use client";

import { useEffect, useState } from "react";
import { Facebook, Twitter, Instagram } from "lucide-react";
import Lottie from "lottie-react";

const Footer = () => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    // Fetch Lottie JSON dynamically
    fetch("/lottie/moving.json") // replace with your preferred Lottie URL
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
      .catch((err) => console.error("Failed to load Lottie:", err));
  }, []);

  return (
    <footer className="bg-white text-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand & About */}
        <div className="space-y-4 flex flex-col items-start">
          <div className="flex items-center space-x-2">
            {animationData && (
              <div className="w-16 h-16">
                <Lottie animationData={animationData} loop={true} />
              </div>
            )}
            <h3 className="text-2xl font-bold">Carlo</h3>
          </div>
          <p className="text-gray-700 text-sm">
            Premium online marketplace for buying and selling cars. Browse thousands of verified listings with ease.
          </p>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="hover:text-blue-600 transition"><Facebook size={20} /></a>
            <a href="#" className="hover:text-blue-600 transition"><Twitter size={20} /></a>
            <a href="#" className="hover:text-blue-600 transition"><Instagram size={20} /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-2">
          <h4 className="font-semibold text-lg">Quick Links</h4>
          <ul className="space-y-1 text-gray-700 text-sm">
            <li><a href="/" className="hover:text-blue-600 transition">Home</a></li>
            <li><a href="/listings" className="hover:text-blue-600 transition">Listings</a></li>
            <li><a href="#about" className="hover:text-blue-600 transition">About</a></li>
            <li><a href="#contact" className="hover:text-blue-600 transition">Contact</a></li>
          </ul>
        </div>

        {/* Support */}
        <div className="space-y-2">
          <h4 className="font-semibold text-lg">Support</h4>
          <ul className="space-y-1 text-gray-700 text-sm">
            <li><a href="#" className="hover:text-blue-600 transition">Help Center</a></li>
            <li><a href="#" className="hover:text-blue-600 transition">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-blue-600 transition">Terms of Service</a></li>
            <li><a href="#" className="hover:text-blue-600 transition">FAQ</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="space-y-4">
          <h4 className="font-semibold text-lg">Subscribe</h4>
          <p className="text-gray-700 text-sm">
            Get updates on latest listings and promotions.
          </p>
          <form className="flex flex-col sm:flex-row gap-2 w-full">
            <input
              type="email"
              placeholder="Your Email"
              className="px-4 py-2 rounded-full border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600 flex-1 min-w-0"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="mt-12 border-t border-gray-200 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Carlo. All rights reserved. Made by Dray.
      </div>
    </footer>
  );
};

export default Footer;
