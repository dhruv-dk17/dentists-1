import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';

const springConfig = { type: "spring", stiffness: 100, damping: 15 };

// ⚠️ PASTE YOUR GOOGLE APPS SCRIPT WEB APP URL BELOW
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxWXfaVvktp-sAEKqh4lYUDP0xR88mSLIw2wZBdsRF8UwvC4k6cOHqwugguq1Y1fh4/exec';

export default function Appointment() {
  const [formData, setFormData] = useState({ name: '', phone: '', treatment: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg('');

    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // Apps Script requires no-cors from browser
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      // no-cors mode returns opaque response, so we just assume success
      setIsSuccess(true);
      setFormData({ name: '', phone: '', treatment: '' });
    } catch (err) {
      console.error('Submission error:', err);
      setErrorMsg('Something went wrong. Please call us at 082002 32074 to book your appointment.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageTransition>
      <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '120px 20px', background: '#0F172A', position: 'relative', overflow: 'hidden' }}>
        
        {/* Animated Background */}
        <motion.div 
          style={{ position: 'absolute', top: '-10%', left: '-10%', width: '120%', height: '120%', background: 'radial-gradient(circle at 50% 50%, rgba(14,165,233,0.15) 0%, rgba(15,23,42,1) 60%)', zIndex: 0 }}
          animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />

        <motion.div 
          style={{ position: 'relative', zIndex: 1, width: '100%', maxWidth: '1000px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(20px)', borderRadius: '40px', border: '1px solid rgba(255,255,255,0.1)', overflow: 'hidden', boxShadow: '0 30px 60px rgba(0,0,0,0.5)' }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={springConfig}
        >
          {/* Form Side */}
          <div style={{ padding: '60px 40px' }}>
            {isSuccess ? (
              <motion.div 
                style={{ textAlign: 'center', padding: '40px 0' }}
                initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={springConfig}
              >
                <motion.div 
                  style={{ fontSize: '5rem', marginBottom: '20px' }}
                  initial={{ scale: 0 }} animate={{ scale: 1, rotate: [0, 20, 0] }} transition={{ type: 'spring', delay: 0.2 }}
                >
                  🎉
                </motion.div>
                <h2 style={{ color: 'white', fontSize: '2.5rem', marginBottom: '15px' }}>Request Received!</h2>
                <p style={{ color: '#94A3B8', fontSize: '1.125rem', marginBottom: '30px' }}>Our team will contact you shortly to confirm your appointment time.</p>
                <motion.button
                  onClick={() => setIsSuccess(false)}
                  style={{ padding: '14px 30px', background: 'rgba(255,255,255,0.1)', color: 'white', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '16px', fontSize: '1rem', fontWeight: '600', cursor: 'pointer' }}
                  whileHover={{ scale: 1.05, background: 'rgba(255,255,255,0.15)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  Book Another
                </motion.button>
              </motion.div>
            ) : (
              <>
                <div style={{ marginBottom: '40px' }}>
                  <h1 style={{ color: 'white', fontSize: '2.5rem', fontWeight: '800', marginBottom: '10px' }}>Book Your Visit</h1>
                  <p style={{ color: '#94A3B8' }}>Fill out the form below and we'll handle the rest.</p>
                </div>

                {errorMsg && (
                  <motion.div 
                    style={{ padding: '15px 20px', background: 'rgba(239,68,68,0.15)', border: '1px solid rgba(239,68,68,0.3)', borderRadius: '12px', color: '#FCA5A5', marginBottom: '20px', fontSize: '0.9rem' }}
                    initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
                  >
                    {errorMsg}
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1, ...springConfig }}>
                    <input 
                      type="text" 
                      name="name"
                      placeholder="Full Name" 
                      required 
                      value={formData.name}
                      onChange={handleChange}
                      style={{ width: '100%', padding: '16px 20px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.05)', color: 'white', fontSize: '1rem', outline: 'none', boxSizing: 'border-box' }} 
                    />
                  </motion.div>
                  
                  <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, ...springConfig }}>
                    <input 
                      type="tel" 
                      name="phone"
                      placeholder="Phone Number" 
                      required 
                      value={formData.phone}
                      onChange={handleChange}
                      style={{ width: '100%', padding: '16px 20px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.05)', color: 'white', fontSize: '1rem', outline: 'none', boxSizing: 'border-box' }} 
                    />
                  </motion.div>

                  <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3, ...springConfig }}>
                    <select 
                      name="treatment"
                      required 
                      value={formData.treatment}
                      onChange={handleChange}
                      style={{ width: '100%', padding: '16px 20px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.05)', color: formData.treatment ? 'white' : '#94A3B8', fontSize: '1rem', outline: 'none', appearance: 'none', boxSizing: 'border-box' }}
                    >
                      <option value="" disabled>Select Treatment</option>
                      <option value="General Consultation">General Consultation</option>
                      <option value="Root Canal Treatment">Root Canal Treatment</option>
                      <option value="Dental Implants">Dental Implants</option>
                      <option value="BPS Dentures">BPS Dentures</option>
                      <option value="Other">Other</option>
                    </select>
                  </motion.div>

                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, ...springConfig }} style={{ marginTop: '10px' }}>
                    <motion.button 
                      type="submit"
                      style={{ width: '100%', padding: '18px', background: '#0EA5E9', color: 'white', border: 'none', borderRadius: '16px', fontSize: '1.125rem', fontWeight: '700', cursor: isSubmitting ? 'wait' : 'pointer', boxShadow: '0 10px 20px rgba(14,165,233,0.3)', opacity: isSubmitting ? 0.7 : 1 }}
                      whileHover={!isSubmitting ? { scale: 1.02, boxShadow: '0 15px 30px rgba(14,165,233,0.4)' } : {}}
                      whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                          <motion.span
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                            style={{ display: 'inline-block', width: '20px', height: '20px', border: '3px solid rgba(255,255,255,0.3)', borderTop: '3px solid white', borderRadius: '50%' }}
                          />
                          Submitting...
                        </span>
                      ) : 'Request Appointment'}
                    </motion.button>
                  </motion.div>
                </form>
              </>
            )}
          </div>

          {/* Image Side */}
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(255,255,255,0.02)' }}>
            <img 
              src="images/surgery_room.png" 
              alt="Surgery Room" 
              style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }} 
            />
            <div style={{ position: 'absolute', bottom: '40px', left: '40px', right: '40px', padding: '25px', background: 'rgba(15,23,42,0.8)', backdropFilter: 'blur(10px)', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <p style={{ color: 'white', fontWeight: '600', marginBottom: '5px' }}>✓ Your data is saved securely</p>
              <p style={{ color: '#94A3B8', fontSize: '0.875rem' }}>We'll call you within 30 minutes to confirm your appointment slot.</p>
            </div>
          </div>
        </motion.div>
      </section>
    </PageTransition>
  );
}
