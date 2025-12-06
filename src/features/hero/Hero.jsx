import React from 'react';
import BlurText from '../../components/ui/BlurText';
import TextType from '../../components/ui/TextType';
import GlitchText from '../../components/ui/GlitchText';

const Hero = () => {
  return (
    <section style={{ 
      height: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      textAlign: 'center',
      position: 'relative'
    }}>
      
      <div className="container">

        {/* Rozet */}
        <div style={{ marginBottom: '40px' }}>
          <span style={{ color: '#14b8ff', border: '1px solid #333', padding: '6px 16px', borderRadius: '20px', fontSize: '14px', backgroundColor: 'rgba(0,0,0,0.6)' }}>
            ● Available for Work
          </span>
        </div>

        {/* --- İSİM ALANI --- */}
        <div style={{ marginBottom: '30px' }}>
          
          {/* Merhaba, ben */}
          <div style={{ marginBottom: '10px' }}>
             <BlurText 
              text="Merhaba, ben" 
              delay={50} 
              animateBy="words"
              direction="top"
              className="text-small"
            />
          </div>

          {/* ESİN TEKİN */}
          <div style={{ height: 'auto', overflow: 'visible' }}>
            <BlurText 
              text="Esin Tekin" 
              delay={150}
              animateBy="letters"
              direction="bottom"
              className="text-name"
            />
          </div>

        </div>

        {/* --- UNVAN ALANI --- */}
        <div style={{ marginBottom: '50px', minHeight: '60px' }}>
          <GlitchText
            speed={1}
            enableShadows={true}
            enableOnHover={true}
            style={{
              fontSize: '1.5rem',
              fontFamily: '"Press Start 2P", cursive',
              color: '#e7e9ec',
              letterSpacing: '2px',
              textTransform: 'uppercase'
            }}
          >
            UNITY GAME DEVELOPER
          </GlitchText>
        </div>

        {/* --- AÇIKLAMA YAZISI --- */}
        <div style={{ 
          minHeight: '80px',
          maxWidth: '700px', 
          margin: '0 auto',
          fontSize: '1.25rem',
          color: '#ffffff',
          fontWeight: '500',
          fontFamily: 'sans-serif',
          lineHeight: '1.6',
          textShadow: '0 2px 4px rgba(0,0,0,0.8)'
        }}>
          <TextType
            text={[
              "C# ile mobil ve PC için performans odaklı oyunlar geliştiriyorum.",
              "Oyun dünyasında kendimi geliştirmek adına projeler yapıyorum.",
              "Unity ile hayallerinizi koda döküyorum."
            ]}
            typingSpeed={50}
            deletingSpeed={30}
            pauseDuration={2000}
            loop={true}
            showCursor={true}
            cursorCharacter="|"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;