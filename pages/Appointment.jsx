import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import SEO from '../components/SEO';
import { springConfig, GOOGLE_SCRIPT_URL } from '../constants';

export default function Appointment() {
  const [formData, setFormData] = useState({ name: '', phone: '', treatment: '', date: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Hardcore Validation
    if (formData.phone.length < 10) {
      setErrorMsg('Please enter a valid 10-digit phone number.');
      return;
    }

    setIsSubmitting(true);
    setErrorMsg('');

    try {
      const params = new URLSearchParams({
        ...formData,
        type: 'Appointment Booking'
      });

      // Use GET request for maximum reliability with Google Scripts
      const url = `${GOOGLE_SCRIPT_URL}?${params.toString()}`;

      await fetch(url, {
        method: 'GET',
        mode: 'no-cors'
      });

      setIsSuccess(true);
      setFormData({ name: '', phone: '', treatment: '', date: '' });
    } catch (err) {
      console.error('Submission error:', err);
      setErrorMsg('Could not connect to the booking system. Please call 082002 32074.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageTransition>
      <SEO 
        title="Book an Appointment" 
        description="Book your dental appointment online at Promise Dental Clinic. Easy, fast, and painless dental care in Surat."
        keywords="Book Dentist Surat, Dental Appointment Surat, Promise Dental Booking"
      />
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
                style={{ textAlign: 'center', padding: '60px 0' }}
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={springConfig}
              >
                <div style={{ position: 'relative', display: 'inline-block', marginBottom: '30px' }}>
                  <motion.div 
                    style={{ fontSize: '6rem', position: 'relative', zIndex: 2 }}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, type: 'spring' }}
                  >
                    ✨
                  </motion.div>
                  <motion.div 
                    style={{ position: 'absolute', top: '50%', left: '50%', x: '-50%', y: '-50%', width: '120px', height: '120px', background: 'rgba(14,165,233,0.2)', borderRadius: '50%', filter: 'blur(20px)', zIndex: 1 }}
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>

                <motion.h2 
                  style={{ color: 'white', fontSize: '2.5rem', fontWeight: '800', marginBottom: '20px', letterSpacing: '-1px' }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Booking Confirmed!
                </motion.h2>
                
                <motion.p 
                  style={{ color: '#94A3B8', fontSize: '1.25rem', lineHeight: '1.6', maxWidth: '400px', margin: '0 auto 40px' }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  Thank you for choosing Promise Dental. We've received your request and will call you within <span style={{ color: '#0EA5E9', fontWeight: '700' }}>30 minutes</span> to finalize your slot.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <motion.button
                    onClick={() => setIsSuccess(false)}
                    style={{ padding: '16px 40px', background: 'rgba(14,165,233,0.1)', color: '#0EA5E9', border: '1px solid rgba(14,165,233,0.2)', borderRadius: '20px', fontSize: '1.1rem', fontWeight: '700', cursor: 'pointer' }}
                    whileHover={{ scale: 1.05, background: 'rgba(14,165,233,0.2)' }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Done
                  </motion.button>
                </motion.div>
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
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
                    <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1, ...springConfig }}>
                      <label style={{ display: 'block', color: '#94A3B8', marginBottom: '8px', fontSize: '0.9rem' }}>Full Name</label>
                      <input 
                        type="text" name="name" value={formData.name} onChange={handleChange} required
                        placeholder="e.g. Dhruv Khuman"
                        style={{ width: '100%', padding: '16px 20px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.05)', color: 'white', fontSize: '1rem', outline: 'none', boxSizing: 'border-box' }} 
                      />
                    </motion.div>
                    
                    <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, ...springConfig }}>
                      <label style={{ display: 'block', color: '#94A3B8', marginBottom: '8px', fontSize: '0.9rem' }}>Phone Number</label>
                      <input 
                        type="tel" name="phone" value={formData.phone} onChange={handleChange} required
                        placeholder="10-digit mobile"
                        style={{ width: '100%', padding: '16px 20px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.05)', color: 'white', fontSize: '1rem', outline: 'none', boxSizing: 'border-box' }} 
                      />
                    </motion.div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
                    <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3, ...springConfig }}>
                      <label style={{ display: 'block', color: '#94A3B8', marginBottom: '8px', fontSize: '0.9rem' }}>Treatment</label>
                      <select 
                        name="treatment" value={formData.treatment} onChange={handleChange} required
                        style={{ width: '100%', padding: '16px 20px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.05)', color: formData.treatment ? 'white' : '#94A3B8', fontSize: '1rem', outline: 'none', appearance: 'none', boxSizing: 'border-box' }}
                      >
                        <option value="" disabled>Select Treatment</option>
                        <option value="Checkup">Routine Checkup</option>
                        <option value="Cleaning">Dental Cleaning</option>
                        <option value="Root Canal">Root Canal Treatment</option>
                        <option value="Implants">Dental Implants</option>
                        <option value="Braces">Braces & Invisalign</option>
                        <option value="Other">Other Treatment</option>
                      </select>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4, ...springConfig }}>
                      <label style={{ display: 'block', color: '#94A3B8', marginBottom: '8px', fontSize: '0.9rem' }}>Preferred Date</label>
                      <input 
                        type="date" name="date" value={formData.date} onChange={handleChange} required
                        style={{ width: '100%', padding: '16px 20px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.05)', color: 'white', fontSize: '1rem', outline: 'none', boxSizing: 'border-box' }} 
                      />
                    </motion.div>
                  </div>

                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, ...springConfig }} style={{ marginTop: '10px' }}>
                    <motion.button 
                      type="submit"
                      style={{ width: '100%', padding: '18px', background: '#0EA5E9', color: 'white', border: 'none', borderRadius: '16px', fontSize: '1.125rem', fontWeight: '700', cursor: isSubmitting ? 'wait' : 'pointer', boxShadow: '0 10px 20px rgba(14,165,233,0.3)', opacity: isSubmitting ? 0.7 : 1 }}
                      whileHover={!isSubmitting ? { scale: 1.02, boxShadow: '0 15px 30px rgba(14,165,233,0.4)' } : {}}
                      whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Submitting...' : 'Confirm Appointment'}
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
