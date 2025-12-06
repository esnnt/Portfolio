import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './Carousel.css';

const isVideo = (url) => {
  return url.match(/\.(mp4|webm|ogg)$/i);
};

export default function Carousel({ images = [], autoplay = false, autoplayDelay = 4000 }) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  if (!images || images.length === 0) return null;

  // Tek resim varsa direkt göster
  if (images.length === 1) {
    return (
      <div className="carousel-container">
        {isVideo(images[0]) ? (
          <video src={images[0]} className="carousel-media" autoPlay muted loop playsInline />
        ) : (
          <img src={images[0]} alt="Project" className="carousel-media" />
        )}
      </div>
    );
  }

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.95
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.95
    })
  };

  const nextStep = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevStep = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Autoplay mantığı
  useEffect(() => {
    if (autoplay) {
      const timer = setInterval(() => nextStep(), autoplayDelay);
      return () => clearInterval(timer);
    }
  }, [index, autoplay]);

  return (
    <div className="carousel-container group">
      
      {/* GÖRSEL ALANI */}
      <div className="carousel-wrapper">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={index}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            className="carousel-slide"
          >
            {isVideo(images[index]) ? (
              <video 
                src={images[index]} 
                className="carousel-media" 
                autoPlay muted loop playsInline 
              />
            ) : (
              <img 
                src={images[index]} 
                alt={`Slide ${index}`} 
                className="carousel-media" 
              />
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* BUTONLAR (Kenarlara Yaslı) */}
      <button className="nav-btn left" onClick={(e) => { e.preventDefault(); prevStep(); }}>
        <FaChevronLeft size={24} />
      </button>
      <button className="nav-btn right" onClick={(e) => { e.preventDefault(); nextStep(); }}>
        <FaChevronRight size={24} />
      </button>

      {/* NOKTALAR (Dots) */}
      <div className="carousel-dots">
        {images.map((_, idx) => (
          <div
            key={idx}
            onClick={() => {
              setDirection(idx > index ? 1 : -1);
              setIndex(idx);
            }}
            className={`dot ${index === idx ? 'active' : ''}`}
          />
        ))}
      </div>
    </div>
  );
}