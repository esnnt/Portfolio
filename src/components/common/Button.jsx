import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, variant = 'primary', onClick, className = '' }) => {
  
  // Stil Tanımları (Senin index.css değişkenlerine göre)
  const styles = {
    base: {
      position: 'relative',
      padding: '12px 28px',
      fontWeight: 'bold',
      borderRadius: '8px',
      fontSize: '0.9rem',
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      border: '1px solid transparent',
      transition: 'all 0.3s ease',
      fontFamily: '"Segoe UI", sans-serif',
      letterSpacing: '0.5px',
      textTransform: 'uppercase'
    },
    // Varyasyonlar
    primary: {
      // index.css'teki --accent-blue rengi (#14b8ff)
      backgroundColor: 'rgba(20, 184, 255, 0.1)', 
      color: '#14b8ff', 
      borderColor: '#14b8ff',
      boxShadow: '0 0 10px rgba(20, 184, 255, 0.1)'
    },
    outline: {
      backgroundColor: 'transparent',
      color: '#a259ff', // --accent-purple
      borderColor: '#a259ff'
    }
  };

  // Hover Animasyonları
  const hoverVariants = {
    hover: {
      scale: 1.05,
      backgroundColor: variant === 'primary' ? '#14b8ff' : '#a259ff',
      color: '#000', // Hover olunca yazı siyah olsun (okunabilirlik için)
      boxShadow: variant === 'primary' 
        ? '0 0 20px rgba(20, 184, 255, 0.6)' 
        : '0 0 20px rgba(162, 89, 255, 0.6)'
    }
  };

  return (
    <motion.button
      style={{ ...styles.base, ...styles[variant] }}
      variants={hoverVariants}
      whileHover="hover"
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={className}
    >
      {children}
    </motion.button>
  );
};

export default Button;