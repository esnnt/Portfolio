import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [text, setText] = useState("INITIALIZING...");

  useEffect(() => {
    // Progress Bar Simülasyonu
    const timer = setInterval(() => {
      setProgress(prev => {
        const next = prev + Math.random() * 10;
        if (next >= 100) {
          clearInterval(timer);
          return 100;
        }
        return next;
      });
    }, 150);

    // Yazı Değiştirme Simülasyonu
    const textTimer = setTimeout(() => setText("LOADING ASSETS..."), 800);
    const textTimer2 = setTimeout(() => setText("CONNECTING TO SERVER..."), 1600);
    const textTimer3 = setTimeout(() => setText("ACCESS GRANTED"), 2400);

    return () => {
      clearInterval(timer);
      clearTimeout(textTimer);
      clearTimeout(textTimer2);
      clearTimeout(textTimer3);
    };
  }, []);

  // %100 olunca ana sayfaya haber ver
  useEffect(() => {
    if (progress >= 100) {
      setTimeout(() => {
        onComplete();
      }, 500); // %100 olduktan sonra yarım saniye bekle
    }
  }, [progress, onComplete]);

  return (
    <motion.div
      className="preloader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -50 }} // Yukarı kayarak kaybolsun
      transition={{ duration: 0.8, ease: "easeInOut" }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        backgroundColor: '#000',
        zIndex: 99999, // HER ŞEYİN ÜSTÜNDE
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#14b8ff',
        fontFamily: '"Press Start 2P", cursive'
      }}
    >
      {/* Yüzde Yazısı */}
      <div style={{ fontSize: '2rem', marginBottom: '20px' }}>
        {Math.floor(progress)}%
      </div>

      {/* Progress Bar */}
      <div style={{ 
        width: '300px', 
        height: '4px', 
        background: '#111', 
        borderRadius: '2px',
        overflow: 'hidden',
        marginBottom: '20px'
      }}>
        <div style={{
          width: `${progress}%`,
          height: '100%',
          background: '#14b8ff',
          transition: 'width 0.1s linear'
        }} />
      </div>

      {/* Durum Yazısı */}
      <div style={{ fontSize: '0.8rem', color: '#aaa', letterSpacing: '2px' }}>
        {text}
      </div>

    </motion.div>
  );
};

export default Preloader;