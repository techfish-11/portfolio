"use client";

import { FaServer } from 'react-icons/fa';
import { SiMisskey, SiProxmox, SiNextdotjs, SiReact } from 'react-icons/si';
import Wave from 'react-wavify';
import Im from './im';
import { motion } from 'framer-motion';

const StarField = () => {
  const stars = Array.from({ length: 100 }).map((_, i) => (
    <motion.div
      key={i}
      className="absolute bg-white rounded-full text-lg font-bold"
      style={{
        width: Math.random() * 2 + 1 + 'px',
        height: Math.random() * 2 + 1 + 'px',
        left: Math.random() * 100 + '%',
        top: Math.random() * 100 + '%',
      }}
      animate={{
        opacity: [0, 1, 0],
        scale: [0, 1, 0],
      }}
      transition={{
        duration: Math.random() * 3 + 2,
        repeat: Infinity,
        repeatType: 'loop',
      }}
    />
  ));

  return <div className="absolute inset-0">{stars}</div>;
};

export default function Hero() {
  return (
    <div className="flex items-start justify-start w-full p-8 bg-gradient-to-br from-blue-900 to-purple-900 text-white h-screen relative overflow-hidden text-lg font-bold">
      <StarField />
      {/* Imのやつを設置してるよ */}
      <div className="flex flex-col items-center w-1/2 z-10" style={{ marginTop: '100px' }}>
        <Im />
      </div>
      {/* 好きなプロジェクトの欄だよ */}
      <div className="flex flex-wrap justify-center gap-6 mt-8 z-10">
        {[
          { Icon: FaServer, text: "Home Server" },
          { Icon: SiMisskey, text: "Misskey" },
          { Icon: SiProxmox, text: "ProxmoxVE" },
          { Icon: SiNextdotjs, text: "Next.js" },
          { Icon: SiReact, text: "React" }
        ].map((item, index) => (
          <motion.div
            key={index}
            className="w-48 h-48 rounded-2xl bg-gradient-to-br from-blue-800 to-purple-900 p-4 flex flex-col items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 text-lg font-bold"
            whileHover={{ scale: 1.05, rotate: 5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <item.Icon className="text-6xl text-blue-200 mb-4" />
            <p className="text-xl font-semibold text-white">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
