"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RotatingText = () => {
  const texts = [
    "I'm a Frontend Developer",
    "I'm a White Hat Hacker",
    "I'm a Home Server Owner"
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-12 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.h2
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold bg-gradient-to-r from-gray-500 to-gray-700 text-transparent bg-clip-text"
          style={{ fontFamily: '"Roboto Condensed", sans-serif', fontWeight: 700 }}
        >
          {texts[currentIndex]}
        </motion.h2>
      </AnimatePresence>
    </div>
  );
};

export default function Introduction() {
  return (
    <div className="flex flex-col items-start w-1/2 z-10" style={{ marginTop: '100px' }}>
      <h1 className="text-6xl font-black bg-gradient-to-r from-gray-500 to-gray-700 text-transparent bg-clip-text" style={{ fontFamily: '"Roboto Condensed", sans-serif', fontWeight: 900 }}>
        My name is techfish,
      </h1>
      <RotatingText />
    </div>
  );
}