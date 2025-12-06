import React, { useEffect, useRef, useState } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    // Mouse hareketini takip et
    const moveCursor = (e) => {
      const { clientX: x, clientY: y } = e;
      
      // Ana imleç anında gider
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }
      
      // Takipçi biraz gecikmeli gelir (CSS transition ile)
      if (followerRef.current) {
        followerRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }
    };

    // Hover olaylarını dinle (Linkler ve Butonlar için)
    const handleMouseOver = (e) => {
      if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('a') || e.target.closest('button')) {
        setHovered(true);
      }
    };

    const handleMouseOut = () => {
      setHovered(false);
    };

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  // Mobilde özel cursor'ı kapatıyoruz (Dokunmatik ekranda gerek yok)
  if (typeof navigator !== 'undefined' && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    return null;
  }

  return (
    <>
      {/* Ana İmleç (Küçük Nokta) */}
      <div ref={cursorRef} className={`cursor-dot ${hovered ? 'hovered' : ''}`} />
      
      {/* Takipçi (Büyük Halka) */}
      <div ref={followerRef} className={`cursor-follower ${hovered ? 'hovered' : ''}`} />
    </>
  );
};

export default CustomCursor;