import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const springConfig = { type: 'spring', stiffness: 300, damping: 30 };

export default function Footer() {
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    const updateStatus = () => {
      const now = new Date();
      // IST is UTC+5:30
      const istOffset = 5.5 * 60 * 60 * 1000;
      const istTime = new Date(now.getTime() + (now.getTimezoneOffset() * 60000) + istOffset);
      const day = istTime.getDay();
      const hour = istTime.getHours();
      
      // Mon-Sat: 10 AM - 9 PM
      setIsOpen(day >= 1 && day <= 6 && hour >= 10 && hour < 21);
    };
    
    updateStatus();
    const interval = setInterval(updateStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer style={{ background: 'var(--dark)', color: 'rgba(255,255,255,0.6)', padding: '80px 0 40px', overflow: 'hidden' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '40px', marginBottom: '40px' }}>
          
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={springConfig}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M16 2C10.5 2 6 6.5 6 12C6 17.5 9 24 16 30C23 24 26 17.5 26 12C26 6.5 21.5 2 16 2Z" fill="var(--primary)"/>
                <path d="M12 11C12 11 14 13 16 13C18 13 20 11 20 11" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <h3 style={{ color: 'white', fontSize: '1.5rem', fontWeight: '800', margin: 0 }}>Promise Dental</h3>
            </div>
            <p style={{ lineHeight: '1.6' }}>Bringing top-class, painless dentistry and restoring beautiful smiles across Surat with world-class facilities.</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, ...springConfig }}>
            <h4 style={{ color: 'white', fontSize: '1.125rem', marginBottom: '20px', fontWeight: '700' }}>Quick Links</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { label: 'Home', path: '/' },
                { label: 'About Us', path: '/about' },
                { label: 'Our Services', path: '/services' },
                { label: 'Patient Reviews', path: '/reviews' },
                { label: 'Contact Us', path: '/contact' }
              ].map((item, i) => (
                <Link key={i} to={item.path} style={{ color: 'inherit', textDecoration: 'none' }}>
                  <motion.span whileHover={{ x: 5, color: 'var(--primary)' }} style={{ display: 'inline-block' }}>{item.label}</motion.span>
                </Link>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, ...springConfig }}>
            <h4 style={{ color: 'white', fontSize: '1.125rem', marginBottom: '20px', fontWeight: '700' }}>Contact Info</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <p style={{ margin: 0 }}>
                📍 <a href="https://maps.app.goo.gl/YApe5ThTQZcyJNHw6" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                  Office Number 113, First Floor, Vitoria Height, Jahangirabad, Surat-395005
                </a>
              </p>
              <p style={{ margin: 0 }}>📞 <a href="tel:+918200232074" style={{ color: 'var(--primary)', textDecoration: 'none', fontWeight: '700' }}>082002 32074</a></p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: isOpen ? '#22c55e' : '#ef4444', boxShadow: isOpen ? '0 0 10px #22c55e' : '0 0 10px #ef4444' }}></span>
                <span style={{ color: isOpen ? '#22c55e' : '#ef4444', fontWeight: '600' }}>
                  {isOpen ? 'Open Now (Closes at 9 PM)' : 'Closed (Opens at 10 AM)'}
                </span>
              </div>
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
