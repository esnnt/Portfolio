import React from 'react';
import { motion } from 'framer-motion';
import { projects as projectsData } from "../../data/projects.js"; 
import { FaGithub, FaPlay } from 'react-icons/fa';
import ScrollReveal from '../../components/ui/ScrollReveal';
import ProjectCarousel from '../../components/ui/Carousel';

const Projects = () => {
  return (
    <section style={{ padding: '100px 20px', backgroundColor: 'transparent' }}>
      <div className="container">
        
        <ScrollReveal>
          <div className="section-header" style={{ textAlign: 'right' }}>
            <h2 className="section-title">
               Selected Projects <span style={{ color: '#a259ff' }}>//</span>
            </h2>
            <p className="section-subtitle" style={{ marginLeft: 'auto' }}>
               Oyun mekanikleri, shader çalışmaları ve prototipler.
            </p>
          </div>
        </ScrollReveal>

        <div className="projects-grid">
          {projectsData && projectsData.map((project, index) => {
            
            const slideImages = (project.images && project.images.length > 0) 
              ? project.images 
              : (project.image ? [project.image] : []);

            return (
              <ScrollReveal key={project.id} delay={index * 0.2}>
                <div className="project-card">
                  
                  <div className="project-image-wrapper">
                    <ProjectCarousel 
                      images={slideImages} 
                      baseWidth={300} 
                      autoplay={false} 
                      loop={true} 
                    />
                  </div>

                  <div className="project-content">
                    {/* DÜZELTME: Tags kısmına margin-bottom ekledim */}
                    <div className="project-tags" style={{ marginBottom: '20px' }}>
                      {project.tags && project.tags.map((tag, i) => (
                        <span key={i} className="tag-badge">#{tag}</span>
                      ))}
                    </div>

                    <h3 style={{ color: '#fff', marginBottom: '10px', fontSize: '1.2rem' }}>
                      {project.title}
                    </h3>
                    
                    <p style={{ color: '#aaa', fontSize: '0.9rem', marginBottom: '20px', lineHeight: '1.5' }}>
                      {project.description}
                    </p>

                    <div style={{ display: 'flex', gap: '10px', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '15px', marginTop: 'auto' }}>
                       <a 
                         href={project.github} 
                         target="_blank" 
                         rel="noopener noreferrer"
                         className="btn btn-outline" 
                         style={{ flex: 1, fontSize: '0.8rem', padding: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '5px' }}
                       >
                         <FaGithub /> Kod
                       </a>

                       {project.demo && (
                         <a 
                           href={project.demo} 
                           target="_blank" 
                           rel="noopener noreferrer"
                           className="btn btn-primary" 
                           style={{ flex: 1, fontSize: '0.8rem', padding: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '5px' }}
                         >
                           <FaPlay size={10} /> Oyna
                         </a>
                       )}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Projects;