import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { useUISound } from '../../hooks/useUISound'; // SES HOOK'U EKLENDİ
import './PillNav.css';

const PillNav = ({
  navItems,
  logo,
  className = '',
  ease = 'power3.easeOut',
  baseColor = '#111317',
  pillColor = 'transparent',
  hoveredPillTextColor = '#000',
  pillTextColor = '#fff',
  onMobileMenuClick,
  initialLoadAnimation = true
}) => {
  const resolvedPillTextColor = pillTextColor ?? baseColor;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // --- SES EFEKTLERİ ---
  const { playHover, playClick } = useUISound();

  // Referanslar
  const circleRefs = useRef([]);
  const tlRefs = useRef([]);
  const activeTweenRefs = useRef([]);
  const logoTweenRef = useRef(null);
  const hamburgerRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const navItemsRef = useRef(null);
  const logoRef = useRef(null);

  // --- SMOOTH SCROLL + SES ---
  const handleInteraction = (e, href) => {
    e.preventDefault();
    playClick(); // Tıklama sesi çal

    if (isMobileMenuOpen) toggleMobileMenu();

    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    const layout = () => {
      circleRefs.current.forEach(circle => {
        if (!circle?.parentElement) return;
        const pill = circle.parentElement;
        const rect = pill.getBoundingClientRect();
        const { width: w, height: h } = rect;
        const R = ((w * w) / 4 + h * h) / (2 * h);
        const D = Math.ceil(2 * R) + 2;
        const delta = Math.ceil(R - Math.sqrt(Math.max(0, R * R - (w * w) / 4))) + 1;
        const originY = D - delta;

        circle.style.width = `${D}px`;
        circle.style.height = `${D}px`;
        circle.style.bottom = `-${delta}px`;

        gsap.set(circle, { xPercent: -50, scale: 0, transformOrigin: `50% ${originY}px` });

        const label = pill.querySelector('.pill-label');
        const white = pill.querySelector('.pill-label-hover');
        if (label) gsap.set(label, { y: 0 });
        if (white) gsap.set(white, { y: h + 12, opacity: 0 });

        const index = circleRefs.current.indexOf(circle);
        if (index === -1) return;

        tlRefs.current[index]?.kill();
        const tl = gsap.timeline({ paused: true });
        tl.to(circle, { scale: 1.2, xPercent: -50, duration: 0.5, ease, overwrite: 'auto' }, 0);
        if (label) tl.to(label, { y: -(h + 8), duration: 0.5, ease, overwrite: 'auto' }, 0);
        if (white) {
          gsap.set(white, { y: Math.ceil(h + 100), opacity: 0 });
          tl.to(white, { y: 0, opacity: 1, duration: 0.5, ease, overwrite: 'auto' }, 0);
        }
        tlRefs.current[index] = tl;
      });
    };

    layout();
    const onResize = () => layout();
    window.addEventListener('resize', onResize);
    if (document.fonts?.ready) document.fonts.ready.then(layout).catch(() => {});

    const menu = mobileMenuRef.current;
    if (menu) gsap.set(menu, { visibility: 'hidden', opacity: 0, scaleY: 1 });

    if (initialLoadAnimation) {
      const logoEl = logoRef.current;
      const itemsEl = navItemsRef.current;
      if (logoEl) {
        gsap.set(logoEl, { scale: 0 });
        gsap.to(logoEl, { scale: 1, duration: 0.6, ease });
      }
      if (itemsEl) {
        gsap.set(itemsEl, { width: 0, overflow: 'hidden' });
        gsap.to(itemsEl, { width: 'auto', duration: 0.6, ease });
      }
    }
    return () => window.removeEventListener('resize', onResize);
  }, [navItems, ease, initialLoadAnimation]);

  const handleEnter = i => {
    playHover(); // Hover sesi çal
    const tl = tlRefs.current[i];
    if (!tl) return;
    activeTweenRefs.current[i]?.kill();
    activeTweenRefs.current[i] = tl.tweenTo(tl.duration(), { duration: 0.3, ease, overwrite: 'auto' });
  };

  const handleLeave = i => {
    const tl = tlRefs.current[i];
    if (!tl) return;
    activeTweenRefs.current[i]?.kill();
    activeTweenRefs.current[i] = tl.tweenTo(0, { duration: 0.2, ease, overwrite: 'auto' });
  };

  const handleLogoEnter = () => {
    playHover(); // Logo için de ses
    const el = logoRef.current;
    if (!el) return;
    logoTweenRef.current?.kill();
    gsap.set(el, { rotate: 0 });
    logoTweenRef.current = gsap.to(el, { rotate: 360, duration: 0.5, ease, overwrite: 'auto' });
  };

  const toggleMobileMenu = () => {
    playClick(); // Hamburger menü sesi
    const newState = !isMobileMenuOpen;
    setIsMobileMenuOpen(newState);
    const hamburger = hamburgerRef.current;
    const menu = mobileMenuRef.current;

    if (hamburger) {
      const lines = hamburger.querySelectorAll('.hamburger-line');
      if (newState) {
        gsap.to(lines[0], { rotation: 45, y: 3, duration: 0.3, ease });
        gsap.to(lines[1], { rotation: -45, y: -3, duration: 0.3, ease });
      } else {
        gsap.to(lines[0], { rotation: 0, y: 0, duration: 0.3, ease });
        gsap.to(lines[1], { rotation: 0, y: 0, duration: 0.3, ease });
      }
    }

    if (menu) {
      if (newState) {
        gsap.set(menu, { visibility: 'visible' });
        gsap.fromTo(menu, { opacity: 0, y: -10, scaleY: 0.95 }, { opacity: 1, y: 0, scaleY: 1, duration: 0.3, ease });
      } else {
        gsap.to(menu, {
          opacity: 0, y: -10, scaleY: 0.95, duration: 0.2, ease,
          onComplete: () => { gsap.set(menu, { visibility: 'hidden' }); }
        });
      }
    }
    onMobileMenuClick?.();
  };

  const cssVars = { '--base': baseColor, '--pill-bg': pillColor, '--hover-text': hoveredPillTextColor, '--pill-text': resolvedPillTextColor };

  return (
    <div className="pill-nav-container">
      <nav className={`pill-nav ${className}`} style={cssVars}>
        <a className="pill-logo" href="#hero" onClick={(e) => handleInteraction(e, '#hero')} onMouseEnter={handleLogoEnter} ref={logoRef}>
          {logo}
        </a>
        <div className="pill-nav-items desktop-only" ref={navItemsRef}>
          <ul className="pill-list">
            {navItems.map((item, i) => (
              <li key={i}>
                <a href={item.href} className="pill" onClick={(e) => handleInteraction(e, item.href)} onMouseEnter={() => handleEnter(i)} onMouseLeave={() => handleLeave(i)}>
                  <span className="hover-circle" ref={el => { circleRefs.current[i] = el; }} style={{ backgroundColor: '#14b8ff' }} />
                  <span className="label-stack">
                    <span className="pill-label">{item.label}</span>
                    <span className="pill-label-hover">{item.label}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <button className="mobile-menu-button mobile-only" onClick={toggleMobileMenu} ref={hamburgerRef}>
          <span className="hamburger-line" />
          <span className="hamburger-line" />
        </button>
      </nav>
      <div className="mobile-menu-popover mobile-only" ref={mobileMenuRef}>
        <ul className="mobile-menu-list">
          {navItems.map((item, i) => (
            <li key={i}>
              <a href={item.href} className="mobile-menu-link" onClick={(e) => handleInteraction(e, item.href)}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PillNav;