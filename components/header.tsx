"use client";

import { Button } from "./ui/button"
import Link from "next/link"
import { SiX, SiDiscord, SiGithub } from "@icons-pack/react-simple-icons"
import { motion } from "framer-motion"

export default function Header() {
  return (
    <motion.div 
      className="flex items-center gap-3 h-16 px-4 m-4 rounded-full shadow-lg bg-gradient-to-r from-blue-500 to-purple-600"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Button variant={"ghost"} className="font-bold text-xl rounded-full text-white hover:text-blue-200 transition-colors duration-300" asChild>
        <Link href={"/"}>Techfish</Link>
      </Button>
      <div className="flex-1"></div>
      <div className="flex items-center gap-3">
        {["About", "Projects", "Link"].map((item, index) => (
          <motion.div key={item} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Button asChild variant="ghost" className="text-white hover:text-blue-200 transition-colors duration-300">
              <Link href={item === "About" ? "/mypage" : item === "Projects" ? "/items" : "/mypage"}>{item}</Link>
            </Button>
          </motion.div>
        ))}
      </div>
      <div className="flex-1"></div>
      <div className="flex items-center gap-2">
        {[
          { Icon: SiX, href: "https://x.com/11sakana1", size: 18 },
          { Icon: SiDiscord, href: "https://discord.gg/mNDvAYayp5", size: 20 },
          { Icon: SiGithub, href: "https://github.com/techfish-11", size: 20 }
        ].map(({ Icon, href, size }, index) => (
          <motion.div key={href} whileHover={{ scale: 1.2, rotate: 15 }} whileTap={{ scale: 0.8 }}>
            <Button asChild variant="ghost" size={"icon"} className="text-white hover:text-blue-200 transition-colors duration-300">
              <Link href={href}><Icon size={size} /></Link>
            </Button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}