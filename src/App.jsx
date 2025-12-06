import React, { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import Hero from './features/hero/Hero';
import Skills from './features/skills/Skills';
import Projects from './features/projects/Projects';
import Contact from './features/contact/Contact';
import Footer from './components/layout/Footer';
import FaultyTerminal from './components/ui/FaultyTerminal';
import CustomCursor from './components/ui/CustomCursor';
import Preloader from './components/ui/Preloader';

import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      mirror: false,
      offset: 50,
    });
  }, []);

  return (
    <>
      {/* PRELOADER */}
      <AnimatePresence>
        {loading && (
          <Preloader onComplete={() => setLoading(false)} />
        )}
      </AnimatePresence>

      {/* ANA UYGULAMA */}
      {!loading && (
        <div style={{ position: 'relative', minHeight: '100vh' }}>
          
          <CustomCursor />

          {/* 1. MASAÜSTÜ ARKA PLANI (PERFORMANS MODLU) */}
          <div className="desktop-bg" style={{
            position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh', zIndex: -1,
            backgroundColor: '#0d0f14', 
            contain: 'strict',
            // GPU Hızlandırma için bu satırlar şart:
            transform: 'translateZ(0)',
            willChange: 'transform' 
          }}>
            <FaultyTerminal 
              scale={3}                 // Ölçeği büyüttük (Daha az detay = Daha yüksek FPS)
              gridMul={[1, 1]}          // Grid'i azalttık (Hesaplama yükünü yarıya indirdik)
              digitSize={1}
              timeScale={0.1}           // Animasyonu çok yavaşlattık (Sakinleştirici etki)
              scanlineIntensity={0.2} 
              glitchAmount={0.1}        
              flickerAmount={0.0}       // Titremeyi kapattık (İşlemciyi yormasın)
              noiseAmp={0.02}           // Gürültüyü minimuma indirdik
              chromaticAberration={0}
              dither={0}
              curvature={0}
              tint="#0099ff"            
              mouseReact={true}
              mouseStrength={0.5}       // Mouse etkisini azalttık
              pageLoadAnimation={false} 
              brightness={0.2}
              
              // --- SİHİRLİ DOKUNUŞ ---
              dpr={0.6} // Çözünürlüğü %60'a çektik. Görüntü bozulmaz (retro tarzı) ama FPS uçar!
            />
          </div>

          {/* 2. MOBİL ARKA PLANI */}
          <div className="mobile-bg" style={{
            position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh', zIndex: -2,
            background: 'linear-gradient(to bottom, #050608, #101216)'
          }}></div>

          <Navbar />

          <main style={{ position: 'relative', zIndex: 1 }}>
            <div id="hero"><Hero /></div>
            <div id="skills"><Skills /></div>
            <div id="projects"><Projects /></div>
            <div id="contact"><Contact /></div>
          </main>

          <div style={{ position: 'relative', zIndex: 1 }}>
            <Footer />
          </div>

        </div>
      )}
    </>
  );
}

export default App;