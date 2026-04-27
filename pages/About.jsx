import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import CTASection from '../components/CTASection';

const springConfig = { type: "spring", stiffness: 100, damping: 15 };

export default function About() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <PageTransition>
      {/* Header Section */}
      <section style={{ padding: '150px 0 100px', background: '#F8FAFC', position: 'relative', overflow: 'hidden' }}>
        <motion.div 
          style={{ position: 'absolute', top: -100, right: -100, width: 400, height: 400, borderRadius: '50%', background: 'linear-gradient(45deg, rgba(14,165,233,0.1), rgba(251,191,36,0.1))', filter: 'blur(50px)' }}
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        />
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <motion.span 
            style={{ display: 'inline-block', color: '#0EA5E9', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '15px' }}
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ ...springConfig, delay: 0.1 }}
          >
            Our Story
          </motion.span>
          <motion.h1 
            style={{ fontSize: '4rem', fontWeight: '800', color: '#0F172A', marginBottom: '20px', lineHeight: 1.1 }}
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ ...springConfig, delay: 0.2 }}
          >
            Excellence in Dental Care
          </motion.h1>
          <motion.p 
            style={{ fontSize: '1.25rem', color: '#64748B', maxWidth: '600px', margin: '0 auto', lineHeight: 1.6 }}
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ ...springConfig, delay: 0.3 }}
          >
            Building trust through painless procedures and high-quality clinical expertise in Surat.
          </motion.p>
        </div>
      </section>

      {/* About Content */}
      <section style={{ padding: '100px 0', background: 'white' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'center' }}>
            
            {/* 3D Image Container */}
            <motion.div 
              style={{ perspective: 1000, y }}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={springConfig}
            >
              <motion.div
                style={{ 
                  width: '100%', paddingBottom: '120%', position: 'relative', 
                  borderRadius: '30px', overflow: 'hidden',
                  background: 'linear-gradient(135deg, #0EA5E9 0%, #3B82F6 100%)',
                  boxShadow: '0 25px 50px -12px rgba(14,165,233,0.3)',
                  transformStyle: 'preserve-3d'
                }}
                whileHover={{ rotateY: 10, rotateX: -10, scale: 1.02 }}
                transition={springConfig}
              >
                <motion.div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '6rem', transform: 'translateZ(50px)' }}>
                  👨‍⚕️
                </motion.div>
                {/* Simulated Image overlay */}
                <div style={{ position: 'absolute', inset: 0, background: 'url(https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop) center/cover', opacity: 0.8, mixBlendMode: 'overlay' }} />
              </motion.div>
            </motion.div>

            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ ...springConfig, delay: 0.2 }}
            >
              <span style={{ color: '#F59E0B', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px' }}>Lead Dentist</span>
              <h2 style={{ fontSize: '3rem', fontWeight: '800', color: '#0F172A', marginTop: '10px', marginBottom: '30px' }}>
                Dr. Dharmendar Jadav
              </h2>
              <p style={{ fontSize: '1.125rem', color: '#475569', lineHeight: 1.8, marginBottom: '20px' }}>
                With a passion for restoring smiles and a commitment to painless dentistry, Dr. Jadav has established Promise Dental Clinic as a beacon of trust in Surat.
              </p>
              <p style={{ fontSize: '1.125rem', color: '#475569', lineHeight: 1.8, marginBottom: '40px' }}>
                He specializes in advanced prosthodontics (BPS Dentures) and implantology, ensuring that every patient receives treatment that is not only effective but also life-changing.
              </p>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
                <motion.div whileHover={{ y: -5 }} transition={springConfig} style={{ background: '#F8FAFC', padding: '20px', borderRadius: '16px', border: '1px solid #F1F5F9' }}>
                  <h3 style={{ fontSize: '2rem', color: '#0EA5E9', fontWeight: '800', margin: '0 0 10px' }}>10+</h3>
                  <p style={{ color: '#64748B', margin: 0, fontWeight: '600' }}>Years Experience</p>
                </motion.div>
                <motion.div whileHover={{ y: -5 }} transition={springConfig} style={{ background: '#F8FAFC', padding: '20px', borderRadius: '16px', border: '1px solid #F1F5F9' }}>
                  <h3 style={{ fontSize: '2rem', color: '#0EA5E9', fontWeight: '800', margin: '0 0 10px' }}>5k+</h3>
                  <p style={{ color: '#64748B', margin: 0, fontWeight: '600' }}>Happy Smiles</p>
                </motion.div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      <CTASection />
    </PageTransition>
  );
}
