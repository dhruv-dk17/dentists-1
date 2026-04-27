import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const springConfig = { type: "spring", stiffness: 120, damping: 14 };

// Floating particle component
const Particle = ({ delay, size, top, left, duration }) => (
  <motion.div
    style={{
      position: 'absolute',
      width: size,
      height: size,
      top: top,
      left: left,
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(14, 165, 233, 0.4) 0%, rgba(14, 165, 233, 0) 70%)',
      pointerEvents: 'none',
      zIndex: 0
    }}
    animate={{
      y: [0, -30, 0],
      x: [0, 15, 0],
      opacity: [0.2, 0.6, 0.2],
      scale: [1, 1.2, 1]
    }}
    transition={{
      duration: duration,
      repeat: Infinity,
      ease: "easeInOut",
      delay: delay
    }}
  />
);

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.section 
      className="hero" 
      style={{ 
        paddingTop: '180px', 
        paddingBottom: '100px',
        position: 'relative', 
        overflow: 'hidden', 
        background: '#ffffff'
      }}
    >
      {/* Animated Gradient Background */}
      <motion.div
        style={{
          position: 'absolute',
          top: '-20%',
          left: '-10%',
          width: '60%',
          height: '60%',
          background: 'radial-gradient(circle, rgba(14, 165, 233, 0.15) 0%, transparent 70%)',
          zIndex: 0
        }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <motion.div
        style={{
          position: 'absolute',
          bottom: '0%',
          right: '-10%',
          width: '50%',
          height: '50%',
          background: 'radial-gradient(circle, rgba(251, 191, 36, 0.1) 0%, transparent 70%)',
          zIndex: 0
        }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* Floating Particles */}
      <Particle size={100} top="20%" left="15%" delay={0} duration={6} />
      <Particle size={150} top="60%" left="10%" delay={2} duration={8} />
      <Particle size={80} top="30%" left="80%" delay={1} duration={5} />
      <Particle size={120} top="70%" left="85%" delay={3} duration={7} />

      <div className="container" style={{ position: 'relative', zIndex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'center' }}>
        
        {/* Left Content Area */}
        <motion.div 
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={springConfig}
          style={{ x: -mousePosition.x, y: -mousePosition.y }} // Parallax effect
        >
          <motion.span 
            className="service-tag"
            whileHover={{ scale: 1.05 }}
            style={{ display: 'inline-block', padding: '8px 16px', background: '#F0F9FF', color: '#0EA5E9', borderRadius: '30px', fontWeight: '600', marginBottom: '20px' }}
          >
            ✨ Premium Dental Care in Surat
          </motion.span>
          
          <motion.h1 
            style={{ fontSize: '3.5rem', fontWeight: '800', lineHeight: '1.2', marginBottom: '1.5rem', color: '#0F172A' }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ...springConfig, delay: 0.1 }}
          >
            Your Smile Deserves a <br/>
            <span style={{ color: '#0EA5E9' }}>Painless</span> Promise
          </motion.h1>
          
          <motion.p 
            style={{ fontSize: '1.125rem', color: '#64748B', marginBottom: '2.5rem', maxWidth: '480px', lineHeight: '1.6' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Experience the future of dentistry with Dr. XYZ. We combine world-class technology with a gentle touch to give you a smile that lasts a lifetime.
          </motion.p>
          
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <motion.button 
              className="btn btn-primary"
              style={{ padding: '16px 32px', background: '#0EA5E9', color: 'white', border: 'none', borderRadius: '12px', fontSize: '1rem', fontWeight: '600', cursor: 'pointer', boxShadow: '0 10px 25px rgba(14,165,233,0.3)' }}
              whileHover={{ scale: 1.08, y: -2, boxShadow: '0 15px 35px rgba(14,165,233,0.4)' }}
              whileTap={{ scale: 0.95 }}
              transition={springConfig}
            >
              Book Appointment
            </motion.button>
            
            <motion.button 
              className="btn btn-secondary"
              style={{ padding: '16px 32px', background: '#F8FAFC', color: '#0F172A', border: '1px solid #E2E8F0', borderRadius: '12px', fontSize: '1rem', fontWeight: '600', cursor: 'pointer' }}
              whileHover={{ scale: 1.08, background: '#F1F5F9' }}
              whileTap={{ scale: 0.95 }}
              transition={springConfig}
            >
              📞 082002 32074
            </motion.button>
          </div>
        </motion.div>

        {/* Right Image / 3D Illusion Area */}
        <motion.div 
          style={{ perspective: 1000, display: 'flex', justifyContent: 'center' }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ ...springConfig, delay: 0.2 }}
        >
          {/* Tooth focus effect on hover container */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 200 }}
            style={{ position: 'relative', width: '100%', maxWidth: '500px' }}
          >
            <motion.div
              style={{ 
                borderRadius: '30px', 
                boxShadow: '0 30px 60px rgba(0,0,0,0.12)',
                background: 'white',
                padding: '10px',
                transformStyle: 'preserve-3d',
                x: mousePosition.x * 1.5, // Subtle reverse parallax
                y: mousePosition.y * 1.5
              }}
              whileHover={{ 
                rotateY: 8, 
                rotateX: 4, 
                scale: 1.03,
                boxShadow: '0 40px 80px rgba(14,165,233,0.2)'
              }}
              transition={springConfig}
            >
              {/* Main Image Placeholder */}
              <div style={{ width: '100%', height: '400px', background: '#E0F2FE', borderRadius: '20px', overflow: 'hidden', position: 'relative' }}>
                <img 
                  src="/images/hero.png" 
                  alt="Premium Clinic" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                  onError={(e) => { e.target.src = 'https://via.placeholder.com/600x800?text=Premium+Clinic+Image' }}
                />
              </div>

              {/* Floating Trust Badge */}
              <motion.div 
                style={{ 
                  position: 'absolute', 
                  bottom: '-20px', 
                  left: '-30px', 
                  background: 'white', 
                  padding: '20px', 
                  borderRadius: '20px',
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '15px', 
                  boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                  transform: 'translateZ(50px)' // 3D depth pop out
                }}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ scale: 1.1, y: -15 }}
              >
                <div style={{ background: '#22c55e', width: '48px', height: '48px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '24px' }}>
                  🦷
                </div>
                <div>
                  <h4 style={{ fontSize: '1.125rem', margin: '0 0 4px 0', color: '#0F172A' }}>Painless Expert</h4>
                  <p style={{ fontSize: '0.875rem', margin: '0', color: '#64748B' }}>Advanced Technology</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

      </div>
    </motion.section>
  );
}
