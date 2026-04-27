import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { springConfig } from '../constants';

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
        position: 'relative', 
        overflow: 'hidden', 
        background: '#ffffff',
        padding: '100px 0'
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
      
      <div className="container grid-2 hero-grid" style={{ position: 'relative', zIndex: 1 }}>
        
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
            style={{ display: 'inline-block', padding: '8px 16px', background: 'var(--primary-light)', color: 'var(--primary)', borderRadius: '30px', fontWeight: '600', marginBottom: '20px' }}
          >
            ✨ Premium Dental Care in Surat
          </motion.span>
          
          <motion.h1 
            style={{ fontSize: 'var(--h1-size)', fontWeight: '800', lineHeight: '1.1', marginBottom: '1.5rem', color: 'var(--dark)' }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ...springConfig, delay: 0.1 }}
          >
            Your Smile Deserves a <br/>
            <span style={{ color: 'var(--primary)' }}>Painless</span> Promise
          </motion.h1>
          
          <motion.p 
            style={{ fontSize: '1.125rem', color: 'var(--gray)', marginBottom: '2.5rem', maxWidth: '480px', lineHeight: '1.6', margin: '0 auto 2.5rem' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="hero-desc"
          >
            Experience the future of dentistry with <span style={{ color: 'var(--dark)', fontWeight: '600' }}>Dr. XYZ</span>. We combine world-class technology with a gentle touch to give you a smile that lasts a lifetime.
          </motion.p>
          
          <div className="hero-btns" style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <Link to="/appointment">
              <motion.button 
                className="btn btn-primary"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={springConfig}
              >
                Book Appointment
              </motion.button>
            </Link>
            
            <motion.a 
              href="tel:+918200232074"
              className="btn btn-secondary"
              whileHover={{ scale: 1.05, background: '#F1F5F9' }}
              whileTap={{ scale: 0.95 }}
              transition={springConfig}
              style={{ textDecoration: 'none' }}
            >
              📞 082002 32074
            </motion.a>
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
            whileHover={{ scale: 1.05 }}
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
              {/* Main Image */}
              <div style={{ width: '100%', height: '450px', background: '#E0F2FE', borderRadius: '20px', overflow: 'hidden', position: 'relative' }}>
                <img 
                  src="images/hero.png" 
                  alt="Premium Clinic" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                  fetchpriority="high"
                />
              </div>

              {/* Floating Image 1: Root Canal */}
              <motion.div 
                style={{ position: 'absolute', top: '-30px', right: '-30px', width: '130px', height: '130px', borderRadius: '24px', overflow: 'hidden', border: '6px solid white', boxShadow: '0 20px 40px rgba(0,0,0,0.15)', transform: 'translateZ(30px)' }}
                animate={{ y: [0, -15, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <img src="images/root_canal.png" alt="RCT" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </motion.div>

              {/* Floating Image 2: Modern Dentistry */}
              <motion.div 
                style={{ position: 'absolute', bottom: '100px', left: '-50px', width: '150px', height: '150px', borderRadius: '24px', overflow: 'hidden', border: '6px solid white', boxShadow: '0 20px 40px rgba(0,0,0,0.15)', transform: 'translateZ(40px)' }}
                animate={{ y: [0, 15, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <img src="images/modern_dentistry.png" alt="Modern Dentistry" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </motion.div>

              {/* Floating Trust Badge */}
              <motion.div 
                style={{ 
                  position: 'absolute', 
                  bottom: '-25px', 
                  right: '-20px', 
                  background: 'white', 
                  padding: '20px 25px', 
                  borderRadius: '24px',
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '15px', 
                  boxShadow: '0 25px 50px rgba(0,0,0,0.1)',
                  transform: 'translateZ(50px)' 
                }}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ scale: 1.05, y: -15 }}
              >
                <div style={{ background: '#0ea5e9', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '24px', boxShadow: '0 10px 20px rgba(14,165,233,0.3)' }}>
                  🦷
                </div>
                <div>
                  <h4 style={{ fontSize: '1.25rem', margin: '0 0 2px 0', color: '#0F172A', fontWeight: '800' }}>Painless Expert</h4>
                  <p style={{ fontSize: '0.9rem', margin: '0', color: '#64748B', fontWeight: '500' }}>Advanced Technology</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

      </div>
    </motion.section>
  );
}
