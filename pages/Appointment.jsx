import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';

const springConfig = { type: "spring", stiffness: 100, damping: 15 };

export default function Appointment() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
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
          style={{ position: 'relative', zIndex: 1, width: '100%', maxWidth: '600px', background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(20px)', borderRadius: '30px', border: '1px solid rgba(255,255,255,0.1)', padding: '50px', boxShadow: '0 30px 60px rgba(0,0,0,0.5)' }}
          initial={{ opacity: 0, y: 50, rotateX: 10 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={springConfig}
        >
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
              <p style={{ color: '#94A3B8', fontSize: '1.125rem' }}>Our team will contact you shortly to confirm your appointment time.</p>
            </motion.div>
          ) : (
            <>
              <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                <h1 style={{ color: 'white', fontSize: '2.5rem', fontWeight: '800', marginBottom: '10px' }}>Book an Appointment</h1>
                <p style={{ color: '#94A3B8' }}>Take the first step towards a perfect, painless smile.</p>
              </div>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1, ...springConfig }}>
                  <input type="text" placeholder="Full Name" required style={{ width: '100%', padding: '16px 20px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.05)', color: 'white', fontSize: '1rem', outline: 'none' }} />
                </motion.div>
                
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, ...springConfig }}>
                  <input type="tel" placeholder="Phone Number" required style={{ width: '100%', padding: '16px 20px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.05)', color: 'white', fontSize: '1rem', outline: 'none' }} />
                </motion.div>

                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3, ...springConfig }}>
                  <select required style={{ width: '100%', padding: '16px 20px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.05)', color: '#94A3B8', fontSize: '1rem', outline: 'none', appearance: 'none' }}>
                    <option value="" disabled selected>Select Treatment</option>
                    <option value="consultation">General Consultation</option>
                    <option value="rct">Root Canal Treatment</option>
                    <option value="implant">Dental Implants</option>
                    <option value="dentures">BPS Dentures</option>
                    <option value="other">Other</option>
                  </select>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, ...springConfig }} style={{ marginTop: '10px' }}>
                  <motion.button 
                    type="submit"
                    style={{ width: '100%', padding: '18px', background: '#0EA5E9', color: 'white', border: 'none', borderRadius: '16px', fontSize: '1.125rem', fontWeight: '700', cursor: 'pointer', boxShadow: '0 10px 20px rgba(14,165,233,0.3)' }}
                    whileHover={{ scale: 1.02, boxShadow: '0 15px 30px rgba(14,165,233,0.4)' }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : 'Request Appointment'}
                  </motion.button>
                </motion.div>
              </form>
            </>
          )}
        </motion.div>
      </section>
    </PageTransition>
  );
}
