import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const MobileHome = () => {
  const [blocks, setBlocks] = useState(Array.from({ length: 10 }, (_, i) => ({
    id: i,
    x: Math.random() * 300,
    y: Math.random() * 300,
    width: 50,
    height: 50,
    color: `hsl(${Math.random() * 360 % 360}, 100%, 50%)`,
  })));

  const handleBlockClick = (id) => {
    setBlocks(blocks.map(block => block.id === id ? { ...block, width: 0, height: 0 } : block));
  };

  useEffect(() => {
    if (blocks.every(block => block.width === 0 && block.height === 0)) {
      setBlocks(Array.from({ length: 10 }, (_, i) => ({
        id: i,
        x: Math.random() * 300,
        y: Math.random() * 300,
        width: 50,
        height: 50,
        color: `hsl(${Math.random() * 360 % 360}, 100%, 50%)`,
      })));
    }
  }, [blocks]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-800 bg-gradient-to-r from-gray-700 to-gray-900 relative">
      {blocks.map(block => (
        <motion.div
          key={block.id}
          className="absolute"
          style={{
            left: block.x,
            top: block.y,
            width: block.width,
            height: block.height,
            backgroundColor: block.color,
            borderRadius: '10px',
          }}
          onClick={() => handleBlockClick(block.id)}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        />
      ))}

      <p>このサイトはmobile版はサポートされていません。</p>
      <p>代わりに、遊ぶことができます。</p>
      <p>ブロックを押して遊んでください</p>
      <p>----------------</p>
      <p>またはデスクトップ用サイトを表示することができます。(非推奨)</p>
    </div>
  );
};

export default MobileHome;
