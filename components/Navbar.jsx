import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { springConfig, navLinks } from '../constants';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <motion.nav 
        className="navbar"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={springConfig}
      >
        <div className="container">
          
          {/* Logo */}
          <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }} aria-label="Promise Dental Clinic Home">
            <motion.div 
              whileHover={{ rotate: 180, scale: 1.1 }} 
              transition={springConfig}
            >
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M16 2C10.5 2 6 6.5 6 12C6 17.5 9 24 16 30C23 24 26 17.5 26 12C26 6.5 21.5 2 16 2Z" fill="var(--primary)"/>
                <path d="M12 11C12 11 14 13 16 13C18 13 20 11 20 11" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </motion.div>
            <span style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--dark)', letterSpacing: '-0.5px' }}>Promise</span>
          </Link>

          {/* Desktop Links */}
          <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }} className="desktop-nav" role="navigation">
            {navLinks.map((link, index) => (
              <Link 
                key={index} 
                to={link.path}
                aria-current={location.pathname === link.path ? 'page' : undefined}
                style={{ 
                  textDecoration: 'none', 
                  color: location.pathname === link.path ? 'var(--primary)' : 'var(--gray)',
                  fontWeight: '600',
                  position: 'relative',
                  padding: '5px 0'
                }}
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.div 
                    layoutId="underline"
                    style={{
                      position: 'absolute', bottom: 0, left: 0, right: 0, height: '3px', background: 'var(--primary)', borderRadius: '3px'
                    }}
                    transition={springConfig}
                  />
                )}
              </Link>
            ))}
            
            <Link to="/appointment">
              <motion.button
                className="btn btn-primary"
                style={{ padding: '10px 24px', fontSize: '0.875rem' }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={springConfig}
              >
                Book Now
              </motion.button>
            </Link>
          </div>

          <motion.button 
            className="mobile-nav-toggle"
            aria-label="Toggle Menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? '✕' : '☰'}
          </motion.button>

        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            style={{
              position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(15, 23, 42, 0.98)', zIndex: 1001, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '20px', backdropFilter: 'blur(15px)'
            }}
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
          >
            <motion.button 
              style={{ position: 'absolute', top: '25px', right: '25px', color: 'white', fontSize: '32px', cursor: 'pointer', background: 'rgba(255,255,255,0.1)', border: 'none', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              onClick={() => setIsOpen(false)}
              whileHover={{ rotate: 90, background: 'rgba(255,255,255,0.2)' }}
              whileTap={{ scale: 0.9 }}
              aria-label="Close Menu"
            >
              ✕
            </motion.button>
            {navLinks.map((link, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, ...springConfig }}
              >
                <Link 
                  to={link.path} 
                  style={{ color: location.pathname === link.path ? 'var(--primary)' : 'white', fontSize: '2.5rem', fontWeight: '800', textDecoration: 'none', letterSpacing: '-1px' }}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
             <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1, ...springConfig }}
              >
                <Link to="/appointment" onClick={() => setIsOpen(false)}>
                  <button className="btn btn-primary" style={{ fontSize: '1.25rem', marginTop: '30px', padding: '20px 40px' }}>
                    Book Appointment
                  </button>
                </Link>
              </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
