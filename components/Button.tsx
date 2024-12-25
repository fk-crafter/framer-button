"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

export default function AnimatedButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex items-center justify-center h-screen bg-dark-blue">
      <div
        className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.button
          className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 text-white py-2 px-4 rounded-lg z-10 shadow-[0_0_15px_2px_rgba(255,255,255,0.5)]"
          whileHover={{ scale: 1.1 }}
        >
          principal btn
        </motion.button>

        <motion.button
          className="absolute left-[-100px] bg-gradient-to-r from-green-800 via-green-700 to-green-600 text-white py-2 px-4 rounded-lg z-10 shadow-[0_0_15px_2px_rgba(0,255,0,0.7)]"
          initial={{ opacity: 0, x: -30 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            x: isHovered ? -15 : 30,
            y: isHovered ? -25 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          left btn
        </motion.button>

        <motion.button
          className="absolute right-[-100px] bg-gradient-to-r from-indigo-800 via-indigo-700 to-indigo-600 text-white py-2 px-4 rounded-lg z-10 shadow-[0_0_15px_2px_rgba(75,0,130,0.7)]"
          initial={{ opacity: 0, x: 30 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            x: isHovered ? 15 : -30,
            y: isHovered ? -25 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          right btn
        </motion.button>
      </div>
    </div>
  );
}
//vt modif
