import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';

const springConfig = { type: "spring", stiffness: 100, damping: 15 };

export default function Contact() {
  return (
    <PageTransition>
      <section style={{ padding: '150px 0 100px', background: '#F8FAFC' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          
          <motion.div 
            style={{ textAlign: 'center', marginBottom: '80px' }}
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={springConfig}
          >
            <span style={{ color: '#0EA5E9', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px' }}>Get In Touch</span>
            <h1 style={{ fontSize: '3.5rem', fontWeight: '800', color: '#0F172A', marginTop: '15px' }}>We're Here to Help</h1>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', marginBottom: '80px' }}>
            
            {/* Contact Info Cards */}
            <motion.div 
              style={{ background: 'white', padding: '40px', borderRadius: '30px', boxShadow: '0 20px 40px rgba(0,0,0,0.04)', border: '1px solid #F1F5F9', textAlign: 'center' }}
              whileHover={{ y: -10, scale: 1.02, boxShadow: '0 30px 60px rgba(14,165,233,0.1)' }}
              transition={springConfig}
            >
              <div style={{ fontSize: '3rem', marginBottom: '20px' }}>📍</div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#0F172A', marginBottom: '15px' }}>Visit Clinic</h3>
              <p style={{ color: '#64748B', lineHeight: '1.6' }}>Office Number 113, First Floor, Vitoria Height,<br/>Ugat Canal Road, Opposite Raj Harmony,<br/>Jahangirabad, Surat-395005, Gujarat</p>
            </motion.div>

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
            style={{ borderRadius: '30px', overflow: 'hidden', height: '500px', boxShadow: '0 25px 50px rgba(0,0,0,0.1)', background: '#E2E8F0' }}
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
