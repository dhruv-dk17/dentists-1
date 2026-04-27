import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const springConfig = { type: "spring", stiffness: 120, damping: 14 };

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/reviews', label: 'Reviews' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <motion.nav 
        style={{
          position: 'fixed', top: 0, left: 0, right: 0,
          background: 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(0,0,0,0.05)',
          padding: '15px 0',
          zIndex: 1000
        }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={springConfig}
      >
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          
          {/* Logo */}
          <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <motion.div 
              whileHover={{ rotate: 180, scale: 1.1 }} 
              transition={springConfig}
            >
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M16 2C10.5 2 6 6.5 6 12C6 17.5 9 24 16 30C23 24 26 17.5 26 12C26 6.5 21.5 2 16 2Z" fill="#0EA5E9"/>
                <path d="M12 11C12 11 14 13 16 13C18 13 20 11 20 11" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </motion.div>
            <span style={{ fontSize: '1.5rem', fontWeight: '800', color: '#0F172A', letterSpacing: '-0.5px' }}>Promise</span>
          </Link>

          {/* Desktop Links */}
          <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }} className="desktop-nav">
            {navLinks.map((link, index) => (
              <Link 
                key={index} 
                to={link.path}
                style={{ 
                  textDecoration: 'none', 
                  color: location.pathname === link.path ? '#0EA5E9' : '#64748B',
                  fontWeight: '600',
                  position: 'relative',
                  padding: '5px 0'
                }}
              >
                {link.label}
                {location.pathname === link.path && (
                  <motion.div 
                    layoutId="underline"
                    style={{
                      position: 'absolute', bottom: 0, left: 0, right: 0, height: '3px', background: '#0EA5E9', borderRadius: '3px'
                    }}
                    transition={springConfig}
                  />
                )}
              </Link>
            ))}
            
            <Link to="/appointment">
              <motion.button
                style={{
                  background: '#0EA5E9', color: 'white', padding: '10px 24px', borderRadius: '12px', border: 'none', fontWeight: '700', cursor: 'pointer', boxShadow: '0 4px 14px rgba(14,165,233,0.3)'
                }}
                whileHover={{ scale: 1.05, y: -2, boxShadow: '0 6px 20px rgba(14,165,233,0.4)' }}
                whileTap={{ scale: 0.95 }}
                transition={springConfig}
              >
                Book Now
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <motion.div 
            className="mobile-nav-toggle"
            style={{ display: 'none', fontSize: '24px', cursor: 'pointer', color: '#0F172A' }}
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.9 }}
          >
            ☰
          </motion.div>

        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            style={{
              position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: '#0F172A', zIndex: 999, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '20px'
            }}
            initial={{ opacity: 0, scale: 0.9, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -20 }}
            transition={springConfig}
          >
            <motion.div 
              style={{ position: 'absolute', top: '20px', right: '30px', color: 'white', fontSize: '30px', cursor: 'pointer' }}
              onClick={() => setIsOpen(false)}
              whileHover={{ rotate: 90 }}
            >
              ✕
            </motion.div>
            {navLinks.map((link, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, ...springConfig }}
              >
                <Link 
                  to={link.path} 
                  style={{ color: 'white', fontSize: '2rem', fontWeight: '700', textDecoration: 'none' }}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
             <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1, ...springConfig }}
              >
                <Link to="/appointment" onClick={() => setIsOpen(false)}>
                  <button style={{ background: '#0EA5E9', color: 'white', padding: '15px 30px', borderRadius: '16px', border: 'none', fontWeight: '700', fontSize: '1.25rem', marginTop: '20px' }}>
                    Book Appointment
                  </button>
                </Link>
              </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-nav-toggle { display: block !important; }
        }
      `}</style>
    </>
  );
}
