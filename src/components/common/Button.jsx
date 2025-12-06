import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, variant = 'primary', onClick, className = '' }) => {
  // Stil varyasyonları
  const baseStyle = "relative px-6 py-3 font-bold rounded-lg transition-all duration-300 flex items-center gap-2 group overflow-hidden cursor-pointer";
  
  const variants = {
    primary: "bg-neon_blue/10 text-neon_blue border border-neon_blue/50 hover:bg-neon_blue hover:text-black hover:shadow-[0_0_20px_rgba(20,184,255,0.6)]",
    secondary: "bg-ui_card text-gray-300 border border-gray-700 hover:border-gray-500 hover:text-white",
    outline: "bg-transparent text-neon_purple border border-neon_purple/50 hover:bg-neon_purple hover:text-black hover:shadow-[0_0_20px_rgba(162,89,255,0.6)]"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyle} ${variants[variant] || variants.primary} ${className}`}
      onClick={onClick}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </motion.button>
  );
};

export default Button;