import React from 'react';
import { motion } from 'framer-motion';

const springConfig = { type: "spring", stiffness: 120, damping: 14 };

export default function CTASection() {
  return (
    <section style={{ padding: '120px 0', position: 'relative', overflow: 'hidden', backgroundColor: '#0F172A' }}>
      
      {/* Animated Gradient Background Loop */}
      <motion.div
        style={{
          position: 'absolute',
          top: '-50%',
          left: '-10%',
          width: '120%',
          height: '200%',
          background: 'linear-gradient(45deg, rgba(14, 165, 233, 0.2) 0%, rgba(251, 191, 36, 0.1) 50%, rgba(14, 165, 233, 0.2) 100%)',
          zIndex: 0
        }}
        animate={{ 
          rotate: [0, 5, 0, -5, 0],
          scale: [1, 1.05, 1, 1.05, 1] 
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      <div className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '0 20px', position: 'relative', zIndex: 1, textAlign: 'center' }}>
        
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={springConfig}
          style={{
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.1)',
            padding: '60px 40px',
            borderRadius: '30px',
            boxShadow: '0 30px 60px rgba(0,0,0,0.3)'
          }}
        >
          <motion.div 
            style={{ fontSize: '48px', marginBottom: '20px' }}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            🦷
          </motion.div>
          
          <h2 style={{ fontSize: '3rem', fontWeight: '800', color: '#FFFFFF', marginBottom: '20px', lineHeight: '1.2' }}>
            Ready for a <span style={{ color: '#0EA5E9' }}>Painless</span> Experience?
          </h2>
          
          <p style={{ color: '#94A3B8', fontSize: '1.125rem', marginBottom: '40px', maxWidth: '500px', margin: '0 auto 40px' }}>
            Join thousands of happy patients in Surat. Book your appointment today and take the first step towards a perfect smile.
          </p>

          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <motion.button 
              style={{ 
                padding: '18px 40px', 
                background: '#0EA5E9', 
                color: 'white', 
                border: 'none', 
                borderRadius: '16px', 
                fontSize: '1.125rem', 
                fontWeight: '700', 
                cursor: 'pointer',
                boxShadow: '0 10px 25px rgba(14,165,233,0.4)'
              }}
              whileHover={{ scale: 1.08, y: -2, boxShadow: '0 15px 35px rgba(14,165,233,0.6)' }}
              whileTap={{ scale: 0.95 }}
              transition={springConfig}
            >
              Book Your Visit
            </motion.button>
            
            <motion.button 
              style={{ 
                padding: '18px 40px', 
                background: 'transparent', 
                color: '#FFFFFF', 
                border: '2px solid rgba(255,255,255,0.2)', 
                borderRadius: '16px', 
                fontSize: '1.125rem', 
                fontWeight: '700', 
                cursor: 'pointer'
              }}
              whileHover={{ scale: 1.08, background: 'rgba(255,255,255,0.1)', borderColor: 'rgba(255,255,255,0.4)' }}
              whileTap={{ scale: 0.95 }}
              transition={springConfig}
            >
              Call 082002 32074
            </motion.button>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
