import React from 'react';
import { motion } from 'framer-motion'; // Bunu silme, kart içi efektler için kalsın
import { skillCategories } from '../../data/skills';
import ScrollReveal from '../../components/ui/ScrollReveal'; // YENİ IMPORT

const Skills = () => {
  return (
    <section style={{ padding: '100px 20px', position: 'relative', backgroundColor: 'transparent' }}>
      <div className="container">
        
        {/* Başlık */}
        <ScrollReveal>
          <div className="section-header">
            <h2 className="section-title">
              <span style={{ color: '#14b8ff' }}>//</span> Technical Arsenal
            </h2>
            <p className="section-subtitle">
              Unity motorunun derinliklerinden, modern web teknolojilerine kadar kullandığım araçlar.
            </p>
          </div>
        </ScrollReveal>

        {/* Kategoriler */}
        <div>
          {skillCategories.map((category, index) => (
            <div key={index} style={{ marginBottom: '50px' }}>
              
              {/* Kategori Başlığı */}
              <ScrollReveal delay={0.1}>
                <h3 style={{ 
                  color: '#fff', 
                  fontSize: '1.2rem', 
                  marginBottom: '20px', 
                  borderLeft: '4px solid #a259ff', 
                  paddingLeft: '15px',
                  display: 'flex',
                  alignItems: 'center',
                  background: 'linear-gradient(90deg, rgba(162,89,255,0.1) 0%, transparent 100%)'
                }}>
                  {category.title}
                </h3>
              </ScrollReveal>

              {/* Kartlar Grid */}
              <div className="skills-grid">
                {category.skills.map((skill, skillIndex) => {
                  const IconComponent = skill.icon;
                  return (
                    // Her karta ayrı reveal veriyoruz ki sırayla gelsinler
                    <ScrollReveal key={skillIndex} delay={skillIndex * 0.1}>
                      <motion.div 
                        className="skill-card"
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className="skill-icon" style={{ color: skill.color }}>
                          <IconComponent />
                        </div>
                        <div className="skill-info">
                          <h4>{skill.name}</h4>
                          <span>{skill.level}</span>
                        </div>
                      </motion.div>
                    </ScrollReveal>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;