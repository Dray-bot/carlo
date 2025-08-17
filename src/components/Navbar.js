// src/components/Navbar.jsx
"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Lottie from "lottie-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Listings", href: "/listings" },
  { name: "Deals", href: "/deals" },
  { name: "Blog", href: "/blog" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [carAnimation, setCarAnimation] = useState(null);

  useEffect(() => {
    // Replace with your Lottie JSON URL or local file
    fetch("/lottie/moving.json")
      .then((res) => res.json())
      .then((data) => setCarAnimation(data))
      .catch((err) => console.error("Failed to load Lottie:", err));
  }, []);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 backdrop-blur-md bg-opacity-90 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo + Lottie */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-2 cursor-pointer"
          >
            {carAnimation && (
              <Lottie
                animationData={carAnimation}
                loop={true}
                className="w-14 h-14 md:w-16 md:h-16"
              />
            )}
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 hover:text-blue-600 transition-colors">
              Carlo
            </h1>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                whileHover={{ scale: 1.1, color: "#2563eb" }}
                transition={{ type: "spring", stiffness: 300 }}
                className="text-gray-700 font-medium hover:text-gray-900"
              >
                {link.name}
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle menu"
              className="text-gray-700 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-white shadow-md"
          >
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.1 }}
              className="flex flex-col px-4 py-4 space-y-2"
            >
              {navLinks.map((link) => (
                <motion.li
                  key={link.name}
                  whileHover={{ scale: 1.02, backgroundColor: "#f3f4f6" }}
                  className="rounded-md"
                >
                  <a href={link.href} className="block px-4 py-2 text-gray-700 font-medium">
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
