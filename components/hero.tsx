"use client";

import { FaServer } from 'react-icons/fa';
import { SiMisskey, SiProxmox, SiNextdotjs, SiReact } from 'react-icons/si';
import Im from './im';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <div
      className="flex items-start justify-start w-full p-8 h-screen relative overflow-hidden text-lg font-bold"
      style={{
        backgroundImage: 'url(mountain.png)', // 画像のパスを適切に設定してください
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Imのやつを設置してるよ */}
      <div className="flex flex-col items-center w-1/2 z-10" style={{ marginTop: '100px' }}>
        <Im />
      </div>
      {/* 好きなプロジェクトの欄だよ */}
      <div className="flex flex-wrap justify-center gap-6 mt-8 z-10">
        {[
{ Icon: FaServer, text: "Home Server", description: "Building and managing a home server." },
{ Icon: SiMisskey, text: "Misskey", description: "Operating a social media platform using Misskey." },
{ Icon: SiProxmox, text: "ProxmoxVE", description: "Setting up a virtualization environment with ProxmoxVE." },
{ Icon: SiNextdotjs, text: "Next.js", description: "Developing fast web applications with Next.js." },
{ Icon: SiReact, text: "React", description: "Building interactive UIs with React." }
        ].map((item, index) => (
          <motion.div
            key={index}
            className="w-64 h-64 rounded-2xl bg-gradient-to-br from-[#FF7E5F] to-[#FEB47B] p-4 flex flex-col items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 text-lg font-bold"
            whileHover={{ scale: 1.05, rotate: 5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <item.Icon className="text-6xl text-white mb-4" />
            <p className="text-xl font-semibold text-white">{item.text}</p>
            <p className="text-sm text-white">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
