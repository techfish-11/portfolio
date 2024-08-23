"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RotatingText = () => {
  const texts = [
    "Frontend Developer",
    "White Hat Hacker",
    "Home Server Administrator"
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-12 overflow-visible ml-auto text-right">
      <AnimatePresence mode="wait">
        <motion.h2
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text"
          style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 700, whiteSpace: 'nowrap' }}
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
        >
          {texts[currentIndex]}
        </motion.h2>
      </AnimatePresence>
    </div>
  );
};

export default function Introduction() {
  return (
    <div className="flex flex-col items-end w-1/2 z-10" style={{ marginTop: '100px' }}>
      <motion.h1 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="text-6xl font-black bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text"
        style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 900 }}
        whileHover={{ scale: 1.05, rotate: 5 }}
        whileTap={{ scale: 0.95 }}
      >
        I am Techfish
      </motion.h1>
      <RotatingText />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="mt-4 text-lg text-gray-300 text-right"
        whileHover={{ scale: 1.05, rotate: 5 }}
        whileTap={{ scale: 0.95 }}
      >
        © 2024 Techfish Portfolio. All rights reserved.
      </motion.div>
    </div>
  );
}