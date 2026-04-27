import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { springConfig, navLinks } from '../constants';

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
    <footer style={{ background: '#0F172A', color: 'rgba(255,255,255,0.6)', padding: '100px 0 40px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="container" style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '60px', marginBottom: '60px' }}>
          
          {/* Brand Column */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={springConfig}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '25px' }}>
              <div style={{ background: 'rgba(14,165,233,0.1)', padding: '10px', borderRadius: '12px' }}>
                <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                  <path d="M16 2C10.5 2 6 6.5 6 12C6 17.5 9 24 16 30C23 24 26 17.5 26 12C26 6.5 21.5 2 16 2Z" fill="#0EA5E9"/>
                  <path d="M12 11C12 11 14 13 16 13C18 13 20 11 20 11" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 style={{ color: 'white', fontSize: '1.75rem', fontWeight: '800', margin: 0, letterSpacing: '-0.5px' }}>Promise Dental</h3>
            </div>
            <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#94A3B8', marginBottom: '30px' }}>
              Restoring smiles with precision and care. Surat's leading destination for painless, advanced dentistry.
            </p>
            <div style={{ display: 'flex', gap: '15px' }}>
              {/* Social Placeholders */}
              {['FB', 'IG', 'TW', 'LI'].map((social) => (
                <motion.div 
                  key={social}
                  whileHover={{ y: -5, background: '#0EA5E9', color: 'white' }}
                  style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: '700', cursor: 'pointer', transition: '0.3s' }}
                >
                  {social}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Navigation Column */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, ...springConfig }}>
            <h4 style={{ color: 'white', fontSize: '1.25rem', marginBottom: '30px', fontWeight: '700' }}>Quick Links</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {navLinks.map((item, i) => (
                <Link key={i} to={item.path} style={{ color: 'inherit', textDecoration: 'none', width: 'fit-content' }}>
                  <motion.span whileHover={{ x: 8, color: '#0EA5E9' }} style={{ display: 'inline-block', fontSize: '1.05rem' }}>{item.label}</motion.span>
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Contact Column */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, ...springConfig }}>
            <h4 style={{ color: 'white', fontSize: '1.25rem', marginBottom: '30px', fontWeight: '700' }}>Contact Info</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'flex', gap: '12px' }}>
                <span style={{ fontSize: '1.25rem' }}>📍</span>
                <a href="https://maps.app.goo.gl/YApe5ThTQZcyJNHw6" target="_blank" rel="noopener noreferrer" style={{ color: '#94A3B8', textDecoration: 'none', lineHeight: '1.5' }}>
                  Office Number 113, First Floor, Vitoria Height,<br/>Jahangirabad, Surat-395005
                </a>
              </div>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <span style={{ fontSize: '1.25rem' }}>📞</span>
                <a href="tel:+918200232074" style={{ color: '#0EA5E9', textDecoration: 'none', fontWeight: '800', fontSize: '1.125rem' }}>082002 32074</a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'rgba(255,255,255,0.03)', padding: '12px 20px', borderRadius: '12px', width: 'fit-content' }}>
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: isOpen ? '#22c55e' : '#ef4444', boxShadow: isOpen ? '0 0 15px #22c55e' : '0 0 15px #ef4444' }}></span>
                <span style={{ color: isOpen ? '#22c55e' : '#ef4444', fontWeight: '700', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  {isOpen ? 'Clinic Open' : 'Clinic Closed'}
                </span>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Bottom Bar */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '40px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '20px' }}>
          <p style={{ margin: 0, fontSize: '0.95rem' }}>&copy; {new Date().getFullYear()} Promise Dental Clinic. Crafted for excellence.</p>
          <div style={{ display: 'flex', gap: '30px', fontSize: '0.95rem' }}>
            <Link to="/contact" style={{ color: 'inherit' }}>Privacy Policy</Link>
            <Link to="/contact" style={{ color: 'inherit' }}>Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

