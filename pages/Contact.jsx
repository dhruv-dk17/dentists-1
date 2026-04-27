import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';

const springConfig = { type: "spring", stiffness: 100, damping: 15 };

export default function Contact() {
  return (
    <PageTransition>
      {/* Header */}
      <section style={{ padding: '150px 0 80px', background: '#0F172A', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '800px', margin: '0 auto', padding: '0 20px' }}>
          <motion.span 
            style={{ color: '#0EA5E9', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px' }}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={springConfig}
          >
            Get In Touch
          </motion.span>
          <motion.h1 
            style={{ fontSize: 'clamp(2.5rem, 8vw, 3.5rem)', color: 'white', fontWeight: '800', marginTop: '15px', marginBottom: '20px' }}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, ...springConfig }}
          >
            Contact Us
          </motion.h1>
          <motion.p 
            style={{ color: '#94A3B8', fontSize: '1.25rem', lineHeight: '1.6' }}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, ...springConfig }}
          >
            We'd love to hear from you. Reach out to schedule your appointment or ask any questions.
          </motion.p>
        </div>
      </section>

      {/* Contact Cards & Map */}
      <section style={{ padding: '100px 0', background: '#F8FAFC' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>

          <div className="grid-adaptive" style={{ marginBottom: '80px' }}>
            
            {/* Visit Clinic Card */}
            <motion.div 
              style={{ background: 'white', padding: '40px', borderRadius: '30px', boxShadow: '0 20px 40px rgba(0,0,0,0.04)', border: '1px solid #F1F5F9', textAlign: 'center' }}
              whileHover={{ y: -10, scale: 1.02, boxShadow: '0 30px 60px rgba(14,165,233,0.1)' }}
              transition={springConfig}
            >
              <div style={{ fontSize: '3rem', marginBottom: '20px' }}>📍</div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#0F172A', marginBottom: '15px' }}>Visit Clinic</h3>
              <p style={{ color: '#64748B', lineHeight: '1.6' }}>Office Number 113, First Floor, Vitoria Height,<br/>Ugat Canal Road, Opposite Raj Harmony,<br/>Jahangirabad, Surat-395005, Gujarat</p>
            </motion.div>

            {/* Call Us Card */}
            <motion.div 
              style={{ background: 'white', padding: '40px', borderRadius: '30px', boxShadow: '0 20px 40px rgba(0,0,0,0.04)', border: '1px solid #F1F5F9', textAlign: 'center' }}
              whileHover={{ y: -10, scale: 1.02, boxShadow: '0 30px 60px rgba(14,165,233,0.1)' }}
              transition={springConfig}
            >
              <div style={{ fontSize: '3rem', marginBottom: '20px' }}>📞</div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#0F172A', marginBottom: '15px' }}>Call Us</h3>
              <p style={{ color: '#64748B', lineHeight: '1.6', marginBottom: '10px' }}>Mon - Sat: 10:00 AM - 9:00 PM</p>
              <a href="tel:+918200232074" style={{ color: '#0EA5E9', fontWeight: '800', fontSize: '1.25rem', textDecoration: 'none' }}>082002 32074</a>
            </motion.div>

            {/* Email Card */}
            <motion.div 
              style={{ background: 'white', padding: '40px', borderRadius: '30px', boxShadow: '0 20px 40px rgba(0,0,0,0.04)', border: '1px solid #F1F5F9', textAlign: 'center' }}
              whileHover={{ y: -10, scale: 1.02, boxShadow: '0 30px 60px rgba(14,165,233,0.1)' }}
              transition={springConfig}
            >
              <div style={{ fontSize: '3rem', marginBottom: '20px' }}>✉️</div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#0F172A', marginBottom: '15px' }}>Email Us</h3>
              <p style={{ color: '#64748B', lineHeight: '1.6', marginBottom: '10px' }}>Send us your queries anytime.</p>
              <a href="mailto:info@promisedental.com" style={{ color: '#0EA5E9', fontWeight: '700', textDecoration: 'none' }}>info@promisedental.com</a>
            </motion.div>
          </div>

          {/* Map */}
          <motion.div 
            className="contact-map"
            style={{ borderRadius: '30px', overflow: 'hidden', boxShadow: '0 25px 50px rgba(0,0,0,0.1)', background: '#E2E8F0' }}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={springConfig}
          >
             <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.2422897782867!2d72.7778941!3d21.222238699999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04d63a36d2ef1%3A0xdd0066327109ee1b!2sPromise%20Dental%20clinic!5e0!3m2!1sen!2sin!4v1777295020546!5m2!1sen!2sin" width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </motion.div>

        </div>
      </section>
    </PageTransition>
  );
}
