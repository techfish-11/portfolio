"use client";

import { FaServer } from 'react-icons/fa';
import { SiMisskey, SiProxmox, SiNextdotjs, SiReact } from 'react-icons/si';
import Wave from 'react-wavify';
import Im from './im';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <div className="flex items-start justify-start w-full p-8 bg-white text-gray-600 h-screen relative overflow-hidden">
      {/* Imのやつを設置してるよ */}
      <div className="flex flex-col items-start w-1/2 z-10" style={{ marginTop: '100px' }}>
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
            className="w-48 h-48 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-600 p-4 flex flex-col items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05, rotate: 5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <item.Icon className="text-6xl text-blue-400 mb-4" />
            <p className="text-lg font-semibold text-white">{item.text}</p>
          </motion.div>
        ))}
      </div>
      {/* Waveのアニメーションだよ */}
      <div className="absolute bottom-0 left-0 w-full" style={{ marginBottom: '-20px' }}>
        <Wave 
          fill='#f3f4f6'
          paused={false}
          options={{
            height: 0.1,
            amplitude: 40,
            speed: 0.15,
            points: 4
          }}
        />
      </div>
    </div>
  );
}
