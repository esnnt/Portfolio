import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'; // FaGamepad'i sildik çünkü Itch.io kalktı
import ScrollReveal from '../../components/ui/ScrollReveal';

const Contact = () => {
  // GÜNCELLENMİŞ İLETİŞİM BİLGİLERİ
  const socialLinks = [
    {
      name: 'LINKEDIN',
      action: 'Connect',
      icon: FaLinkedin,
      url: 'https://www.linkedin.com/in/esin-tekin-465b20332', 
      color: '#0077b5'
    },
    {
      name: 'GITHUB',
      action: 'Follow',
      icon: FaGithub,
      url: 'https://github.com/esnnt',
      color: '#ffffff'
    },
    {
      name: 'EMAIL',
      action: 'Send Mail',
      icon: FaEnvelope,
      url: 'mailto:esintekin1012@gmail.com',
      color: '#ea4335'
    }
  ];

  return (
    <section style={{ padding: '100px 20px', paddingBottom: '150px', backgroundColor: 'transparent' }}>
      <div className="container">
        
        {/* Başlık - Zoom Animasyonu */}
        <ScrollReveal>
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 className="section-title">
               Let's <span style={{ color: '#14b8ff' }}>Connect</span>
            </h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Projelerimi incelediğin için teşekkürler. Aşağıdaki kanallardan bana ulaşabilirsin.
            </p>
          </div>
        </ScrollReveal>

        {/* Kartlar Grid'i */}
        <div className="social-grid">
          {socialLinks.map((link, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <motion.a 
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-card"
                style={{ '--hover-color': link.color }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                {/* İkon */}
                <div className="social-icon-large" style={{ color: link.color }}>
                  <link.icon />
                </div>

                {/* İsim */}
                <div className="social-name">{link.name}</div>
                
                {/* Aksiyon */}
                <div className="social-action">{'< ' + link.action + ' />'}</div>

              </motion.a>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Contact;