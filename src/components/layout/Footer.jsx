import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaUnity } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">

        {/* Sosyal İkonlar */}
        <div className="footer-socials">
          <a
            href="https://github.com/esnnt"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/esin-tekin-465b20332"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://unity.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaUnity />
          </a>
        </div>

        {/* Esin'in İsmi */}
        <p style={{ color: '#fff', fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '5px' }}>
          ESİN TEKİN
        </p>

        {/* Telif Hakkı */}
        <p className="footer-text" style={{ fontSize: '0.85rem', color: '#666' }}>
          © {new Date().getFullYear()} All rights reserved.
        </p>

        {/* --- SENİN İMZAN --- */}
        <div style={{ marginTop: '20px', fontSize: '0.75rem', color: '#444' }}>
          <span style={{ opacity: 0.7 }}>Developed by </span>
          <a
            href="https://github.com/mehmet2725" // Kendi GitHub veya LinkedIn linkini koy
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#14b8ff', textDecoration: 'none', fontWeight: 'bold', transition: 'color 0.3s' }}
            onMouseEnter={(e) => e.target.style.color = '#a259ff'} // Hover rengi
            onMouseLeave={(e) => e.target.style.color = '#14b8ff'}
          >
            Mehmet Sönmez
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;