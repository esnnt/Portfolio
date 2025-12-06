import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const ScrollReveal = ({ children, width = "100%", delay = 0 }) => {
  const ref = useRef(null);
  
  // DÜZELTME BURADA: once: false yaptık.
  // Artık eleman her görüş alanına girdiğinde animasyon tetiklenecek.
  const isInView = useInView(ref, { once: false, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      style={{ width, position: 'relative', overflow: 'hidden' }}
      initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
      animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : { opacity: 0, y: 50, filter: 'blur(10px)' }} // Çıkınca sıfırla
      transition={{ 
        duration: 0.6, // Süreyi biraz kısalttım, daha seri olsun
        delay: delay, 
        ease: "easeOut" 
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;