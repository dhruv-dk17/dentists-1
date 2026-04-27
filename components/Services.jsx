import React from 'react';
import { motion } from 'framer-motion';

const springConfig = { type: "spring", stiffness: 120, damping: 14 };

const servicesData = [
  {
    title: "BPS Dentures Fixing",
    desc: "Bio-functional Prosthetic System for high-precision, natural-looking dentures that restore perfect function.",
    icon: "🦷",
    image: "/images/bps_dentures.png",
    tag: "Popular"
  },
  {
    title: "Dental Implants",
    desc: "Permanent, stable solutions for missing teeth using top-tier implant technology and 3D precision.",
    icon: "💎",
    image: "/images/dental_implant.png",
    tag: "Advanced"
  },
  {
    title: "Painless RCT",
    desc: "Advanced Root Canal Treatment designed for maximum comfort and efficient preservation of your natural tooth.",
    icon: "✨",
    image: "/images/root_canal.png",
    tag: "Specialty"
  },
  {
    title: "Tooth Reshaping",
    desc: "Aesthetic contouring to correct chipped, uneven, or poorly aligned teeth for a flawless smile.",
    icon: "😁",
    image: "/images/cosmetic_dentistry.png",
    tag: "Aesthetic"
  },
  {
    title: "Minimal Invasive",
    desc: "Modern dentistry focused on conserving healthy tooth structure while effectively treating decay.",
    icon: "🔬",
    image: "/images/modern_dentistry.png",
    tag: "Care"
  },
  {
    title: "Oral & Maxillofacial",
    desc: "Expert surgical procedures including wisdom teeth extraction and advanced facial trauma reconstruction.",
    icon: "🏥",
    image: "/images/oral_surgery.png",
    tag: "Surgery"
  }
];

export default function Services() {
  return (
    <section style={{ padding: '100px 0', background: '#F8FAFC', position: 'relative', overflow: 'hidden' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', position: 'relative', zIndex: 1 }}>
        
        {/* Header Section */}
        <motion.div 
          style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 60px' }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={springConfig}
        >
          <span style={{ display: 'inline-block', color: '#0EA5E9', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '10px' }}>
            Our Expertise
          </span>
          <h2 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#0F172A', marginBottom: '20px' }}>
            Premium Dental Solutions
          </h2>
          <p style={{ color: '#64748B', fontSize: '1.125rem', lineHeight: '1.6' }}>
            From routine care to advanced surgical procedures, we provide comprehensive, painless treatments under one roof.
          </p>
        </motion.div>
<div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              style={{
                background: 'white',
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(0,0,0,0.03)',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                border: '1px solid #F1F5F9'
              }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ ...springConfig, delay: index * 0.1 }}
              whileHover={{ 
                y: -10, 
                boxShadow: '0 25px 50px rgba(14,165,233,0.1)'
              }}
            >
              {/* Service Image */}
              <div style={{ width: '100%', height: '200px', overflow: 'hidden', background: '#F0F9FF' }}>
                <img 
                  src={service.image} 
                  alt={service.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
                />
                <div style={{ display: 'none', height: '100%', alignItems: 'center', justifyContent: 'center', fontSize: '4rem' }}>
                  {service.icon}
                </div>
              </div>

              <div style={{ padding: '30px' }}>
                <div style={{ 
                  display: 'inline-block',
                  background: '#F0F9FF', color: '#0EA5E9', 
                  padding: '4px 12px', borderRadius: '20px', 
                  fontSize: '0.75rem', fontWeight: '700',
                  marginBottom: '15px'
                }}>
                  {service.tag}
                </div>
                
                <h3 style={{ fontSize: '1.5rem', color: '#0F172A', marginBottom: '15px', fontWeight: '700' }}>
                  {service.title}
                </h3>
                
                <p style={{ color: '#64748B', lineHeight: '1.6', marginBottom: '25px' }}>
                  {service.desc}
                </p>
                
                <motion.a 
                  href="#" 
                  style={{ 
                    color: '#0EA5E9', fontWeight: '700', textDecoration: 'none', 
                    display: 'inline-flex', alignItems: 'center', gap: '8px'
                  }}
                  whileHover={{ x: 5 }}
                  transition={springConfig}
                >
                  Learn More <span>→</span>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
