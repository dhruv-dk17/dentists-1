import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const springConfig = { type: "spring", stiffness: 120, damping: 14 };

export default function Footer() {
  return (
    <footer style={{ background: '#0F172A', color: '#94A3B8', padding: '80px 0 40px', overflow: 'hidden' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '40px', marginBottom: '40px' }}>
          
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={springConfig}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M16 2C10.5 2 6 6.5 6 12C6 17.5 9 24 16 30C23 24 26 17.5 26 12C26 6.5 21.5 2 16 2Z" fill="#0EA5E9"/>
                <path d="M12 11C12 11 14 13 16 13C18 13 20 11 20 11" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <h3 style={{ color: 'white', fontSize: '1.5rem', fontWeight: '800', margin: 0 }}>Promise Dental</h3>
            </div>
            <p style={{ lineHeight: '1.6' }}>Bringing top-class, painless dentistry and restoring beautiful smiles across Surat with world-class facilities.</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, ...springConfig }}>
            <h4 style={{ color: 'white', fontSize: '1.125rem', marginBottom: '20px', fontWeight: '700' }}>Quick Links</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {['Home', 'About Us', 'Our Services', 'Patient Reviews', 'Contact Us'].map((item, i) => {
                const path = item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`;
                return (
                  <Link key={i} to={path} style={{ color: '#94A3B8', textDecoration: 'none' }}>
                    <motion.span whileHover={{ x: 5, color: '#0EA5E9' }} style={{ display: 'inline-block' }}>{item}</motion.span>
                  </Link>
                );
              })}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, ...springConfig }}>
            <h4 style={{ color: 'white', fontSize: '1.125rem', marginBottom: '20px', fontWeight: '700' }}>Contact Info</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <p style={{ margin: 0 }}>📍 Vitoria Heights, Ugat Canal Road, Jahangirabad, Surat, Gujarat 395005</p>
              <p style={{ margin: 0 }}>📞 <a href="tel:+918200232074" style={{ color: '#0EA5E9', textDecoration: 'none' }}>082002 32074</a></p>
              <p style={{ margin: 0 }}>⏰ Mon-Sat: 10:00 AM - 9:00 PM</p>
            </div>
          </motion.div>

        </div>
        <motion.div style={{ textAlign: 'center', fontSize: '0.875rem' }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.5 }}>
          &copy; {new Date().getFullYear()} Promise Dental Clinic. All Rights Reserved.
        </motion.div>
      </div>
    </footer>
  );
}
