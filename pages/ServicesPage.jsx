import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import CTASection from '../components/CTASection';

const springConfig = { type: "spring", stiffness: 100, damping: 15 };

const servicesList = [
  {
    title: "BPS Dentures Fixing",
    tag: "Prosthodontics",
    desc: "Experience the Bio-functional Prosthetic System (BPS). These aren't just dentures; they are a high-precision restoration of your natural smile, designed for comfort, durability, and a perfect aesthetic fit.",
    features: ["Superior fit and stability", "Natural tooth appearance", "Restores 90% chewing function"],
    icon: "🦷",
    color: "#0EA5E9"
  },
  {
    title: "Dental Implants",
    tag: "Restoration",
    desc: "A permanent solution for missing teeth. Our implants act as artificial tooth roots, providing a strong foundation for fixed replacement teeth that look, feel, and function like natural teeth.",
    features: ["Permanent tooth replacement", "Prevents bone loss", "No impact on adjacent teeth"],
    icon: "💎",
    color: "#8B5CF6"
  },
  {
    title: "Root Canal Treatment",
    tag: "Endodontics",
    desc: "Save your natural tooth with our painless RCT procedure. We remove infected pulp, clean the inside of the tooth, and seal it to protect against future infections, all with maximum comfort.",
    features: ["Painless procedure", "Saves natural tooth structure", "Relieves severe tooth pain"],
    icon: "🔬",
    color: "#F59E0B"
  },
  {
    title: "Minimal Invasive Dentistry",
    tag: "Conservation",
    desc: "We believe in preserving as much of your natural tooth as possible. Using advanced techniques, we treat decay and damage while minimizing the removal of healthy tooth structure.",
    features: ["Less drilling required", "Preserves tooth integrity", "Faster recovery time"],
    icon: "✨",
    color: "#10B981"
  }
];

export default function ServicesPage() {
  return (
    <PageTransition>
      {/* Header */}
      <section style={{ padding: '150px 0 80px', background: '#0F172A', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '800px', margin: '0 auto', padding: '0 20px' }}>
          <motion.span 
            style={{ color: '#0EA5E9', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px' }}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={springConfig}
          >
            Comprehensive Care
          </motion.span>
          <motion.h1 
            style={{ fontSize: '3.5rem', color: 'white', fontWeight: '800', marginTop: '15px', marginBottom: '20px' }}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, ...springConfig }}
          >
            Advanced Treatments
          </motion.h1>
          <motion.p 
            style={{ color: '#94A3B8', fontSize: '1.25rem', lineHeight: '1.6' }}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, ...springConfig }}
          >
            World-class expertise in every procedure, from routine check-ups to complex restorations.
          </motion.p>
        </div>
      </section>

      {/* Services List */}
      <section style={{ padding: '100px 0', background: '#F8FAFC' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            {servicesList.map((service, index) => (
              <motion.div 
                key={index}
                style={{ 
                  background: 'white', borderRadius: '30px', padding: '40px',
                  display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '40px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.03)',
                  border: '1px solid #F1F5F9',
                  alignItems: 'center'
                }}
                initial={{ opacity: 0, y: 50, rotateX: 20 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ ...springConfig, delay: index * 0.1 }}
                whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(14,165,233,0.1)' }}
              >
                
                {/* 3D Icon Box */}
                <motion.div
                  style={{ 
                    width: '120px', height: '120px', borderRadius: '24px',
                    background: `linear-gradient(135deg, ${service.color}22, ${service.color}44)`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '4rem', perspective: 1000,
                    border: `1px solid ${service.color}33`
                  }}
                  whileHover={{ rotateY: 15, rotateX: -15, scale: 1.05 }}
                  transition={springConfig}
                >
                  <motion.div style={{ transform: 'translateZ(20px)' }}>{service.icon}</motion.div>
                </motion.div>

                {/* Content */}
                <div>
                  <span style={{ color: service.color, fontWeight: '700', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '1px', background: `${service.color}11`, padding: '4px 12px', borderRadius: '20px' }}>
                    {service.tag}
                  </span>
                  <h2 style={{ fontSize: '2rem', color: '#0F172A', fontWeight: '800', marginTop: '15px', marginBottom: '15px' }}>
                    {service.title}
                  </h2>
                  <p style={{ color: '#64748B', fontSize: '1.125rem', lineHeight: '1.7', marginBottom: '20px' }}>
                    {service.desc}
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {service.features.map((feat, i) => (
                      <li key={i} style={{ color: '#475569', display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <span style={{ color: service.color }}>✓</span> {feat}
                      </li>
                    ))}
                  </ul>
                </div>

              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </PageTransition>
  );
}
