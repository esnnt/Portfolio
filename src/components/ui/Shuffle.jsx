import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText'; // DİKKAT: SplitText ücretli bir eklenti olabilir, alternatif kullanacağız.
import { useGSAP } from '@gsap/react';
import './Shuffle.css';

// GSAP Plugins
gsap.registerPlugin(ScrollTrigger, useGSAP);

// NOT: GSAP'in SplitText eklentisi ücretli (Club GSAP) olduğu için,
// basit bir "kelime/harf parçalayıcı"yı kendimiz yazıyoruz.
// Böylece para vermeden veya lisans hatası almadan çalışır.

const Shuffle = ({
  text,
  className = '',
  style = {},
  shuffleDirection = 'right',
  duration = 0.35,
  maxDelay = 0,
  ease = 'power3.out',
  threshold = 0.1,
  rootMargin = '-100px',
  tag = 'p',
  textAlign = 'center',
  onShuffleComplete,
  shuffleTimes = 1,
  animationMode = 'evenodd',
  loop = false,
  loopDelay = 0,
  stagger = 0.03,
  scrambleCharset = '',
  colorFrom,
  colorTo,
  triggerOnce = true,
  respectReducedMotion = true,
  triggerOnHover = true
}) => {
  const ref = useRef(null);
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [ready, setReady] = useState(false);
  
  useEffect(() => {
    document.fonts.ready.then(() => setFontsLoaded(true));
  }, []);

  useGSAP(() => {
    if (!ref.current || !text || !fontsLoaded) return;
    
    const el = ref.current;
    // İçeriği harflere böl (Manuel SplitText)
    const chars = text.split('').map(char => `<span class="shuffle-char" style="display:inline-block">${char === ' ' ? '&nbsp;' : char}</span>`).join('');
    el.innerHTML = chars;
    
    const charElements = el.querySelectorAll('.shuffle-char');

    const animate = () => {
      gsap.fromTo(charElements, 
        { y: shuffleDirection === 'top' ? 20 : 0, opacity: 0, x: shuffleDirection === 'right' ? -20 : 0 },
        {
          y: 0,
          x: 0,
          opacity: 1,
          duration: duration,
          stagger: stagger,
          ease: ease,
          onComplete: onShuffleComplete
        }
      );
    };

    ScrollTrigger.create({
      trigger: el,
      start: "top 80%",
      onEnter: animate,
      once: triggerOnce
    });

    if (triggerOnHover) {
      el.addEventListener('mouseenter', animate);
    }

    setReady(true);

  }, { scope: ref, dependencies: [text, fontsLoaded] });

  const Tag = tag;
  return <Tag ref={ref} className={`${className} ${ready ? 'is-ready' : ''}`} style={{ textAlign, ...style }} />;
};

export default Shuffle;