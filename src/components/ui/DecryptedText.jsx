import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

// Karıştırılacak karakter seti (Matrix/Code havası için)
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';

const DecryptedText = ({ text, className }) => {
  const [displayText, setDisplayText] = useState(text);
  const [isHovering, setIsHovering] = useState(false);
  const intervalRef = useRef(null);

  const animate = () => {
    let iteration = 0;
    
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setDisplayText(prev => 
        text
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return text[index]; // Doğru harfi göster
            }
            // Rastgele karakter göster
            return characters[Math.floor(Math.random() * characters.length)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        clearInterval(intervalRef.current);
      }

      iteration += 1 / 3; // Hız ayarı (daha düşük = daha yavaş)
    }, 30);
  };

  // İlk açılışta çalıştır
  useEffect(() => {
    animate();
  }, []);

  return (
    <motion.span
      className={className}
      onMouseEnter={() => animate()} // Üzerine gelince tekrar çalıştır
      style={{ display: 'inline-block', fontFamily: 'monospace' }} // Kod fontu
    >
      {displayText}
    </motion.span>
  );
};

export default DecryptedText;