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
    image: "images/bps_dentures.png",
    color: "#0EA5E9"
  },
  {
    title: "Dental Implants",
    tag: "Restoration",
    desc: "A permanent solution for missing teeth. Our implants act as artificial tooth roots, providing a strong foundation for fixed replacement teeth that look, feel, and function like natural teeth.",
    features: ["Permanent tooth replacement", "Prevents bone loss", "No impact on adjacent teeth"],
    image: "images/dental_implant.png",
    color: "#8B5CF6"
  },
  {
    title: "Root Canal Treatment",
    tag: "Endodontics",
    desc: "Save your natural tooth with our painless RCT procedure. We remove infected pulp, clean the inside of the tooth, and seal it to protect against future infections, all with maximum comfort.",
    features: ["Painless procedure", "Saves natural tooth structure", "Relieves severe tooth pain"],
    image: "images/root_canal.png",
    color: "#F59E0B"
  },
  {
    title: "Minimal Invasive Dentistry",
    tag: "Conservation",
    desc: "We believe in preserving as much of your natural tooth as possible. Using advanced techniques, we treat decay and damage while minimizing the removal of healthy tooth structure.",
    features: ["Less drilling required", "Preserves tooth integrity", "Faster recovery time"],
    image: "images/modern_dentistry.png",
    color: "#10B981"
  }
];

export default function ServicesPage() {
  return (
    <PageTransition>
      {/* Header */}
      <section style={{ padding: '150px 0 80px', background: 'var(--dark, #0F172A)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '800px', margin: '0 auto', padding: '0 20px' }}>
          <motion.span 
            style={{ color: 'var(--primary, #0EA5E9)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px' }}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={springConfig}
          >
            Our Expertise
          </motion.span>
          <motion.h1 
            style={{ fontSize: 'clamp(2.5rem, 8vw, 4rem)', color: 'white', fontWeight: '800', marginTop: '20px', marginBottom: '30px' }}
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, ...springConfig }}
          >
            Painless Dental <br/>Solutions
          </motion.h1>
          <motion.p 
            style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.25rem', lineHeight: '1.6', maxWidth: '700px', margin: '0 auto' }}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, ...springConfig }}
          >
            Combining years of expertise with the latest dental technology to provide you with the most comfortable care in Surat.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section style={{ padding: '100px 0', background: 'var(--light-gray, #F8FAFC)' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
            {servicesList.map((service, index) => (
              <motion.div 
                key={index}
                style={{ 
                  background: 'white', borderRadius: '30px', overflow: 'hidden',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.03)',
                  border: '1px solid #F1F5F9',
                  display: 'flex', flexDirection: 'column'
                }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ ...springConfig, delay: index * 0.1 }}
                whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(14,165,233,0.1)' }}
              >
                {/* Procedure Image */}
                <div style={{ width: '100%', height: '240px', overflow: 'hidden', position: 'relative' }}>
                  <img src={service.image} alt={service.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', top: '20px', right: '20px' }}>
                    <span style={{ color: 'white', fontWeight: '700', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px', background: service.color, padding: '6px 14px', borderRadius: '20px', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}>
                      {service.tag}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div style={{ padding: '30px', display: 'flex', flexDirection: 'column', gap: '15px', flexGrow: 1 }}>
                  <h2 style={{ fontSize: '1.5rem', color: 'var(--dark, #0F172A)', fontWeight: '800', margin: 0 }}>
                    {service.title}
                  </h2>
                  <p style={{ color: 'var(--gray, #64748B)', fontSize: '1rem', lineHeight: '1.7', margin: 0 }}>
                    {service.desc}
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {service.features.map((feat, i) => (
                      <li key={i} style={{ color: 'var(--dark, #0F172A)', display: 'flex', alignItems: 'center', gap: '10px', fontWeight: '500', opacity: 0.8 }}>
                        <span style={{ color: service.color, fontWeight: 'bold' }}>✓</span> {feat}
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
