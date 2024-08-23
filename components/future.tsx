"use client";

import React from 'react';
import { SiPython, SiJavascript, SiTypescript } from '@icons-pack/react-simple-icons';
import { motion } from 'framer-motion';

export default function Future() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#171121] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/stars.png')] opacity-50"></div>
      <motion.h1 
        className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300 mb-4 relative z-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ fontFamily: '"Orbitron", sans-serif' }}
      >
        My Favorite Languages
      </motion.h1>
      <motion.p 
        className="text-xl text-blue-200 mb-8 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Here, I introduce my favorite programming languages.
      </motion.p>
      <div className="flex flex-wrap justify-center gap-8 mt-8 relative z-10">
        {[
          { Icon: SiPython, name: "Python", color: "blue" },
          { Icon: SiJavascript, name: "JavaScript", color: "yellow" },
          { Icon: SiTypescript, name: "TypeScript", color: "blue" }
        ].map((lang, index) => (
          <motion.div
            key={lang.name}
            className="w-72 h-72 bg-gradient-to-br from-blue-800 to-purple-800 rounded-2xl p-6 flex flex-col items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ rotate: 5 }}
          >
            <div className="absolute inset-0 bg-[url('/stars.png')] opacity-30"></div>
            <motion.div
              className="absolute inset-0 bg-blue-500 opacity-20"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.2, 0.3, 0.2],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
            <lang.Icon className="text-7xl text-blue-200 mb-4 relative z-10" />
            <p className="text-2xl font-bold text-blue-100 relative z-10" style={{ fontFamily: '"Orbitron", sans-serif' }}>{lang.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
