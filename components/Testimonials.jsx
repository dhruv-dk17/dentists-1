import React from 'react';
import { motion } from 'framer-motion';

const springConfig = { type: "spring", stiffness: 120, damping: 14 };

const testimonials = [
  {
    name: "Aarti Patel",
    review: "The absolute best! I was terrified of root canals, but Dr. XYZ made it completely painless. The clinic is incredibly clean and the staff is so warm.",
    rating: 5,
    treatment: "Painless RCT"
  },
  {
    name: "Rahul Desai",
    review: "Got my BPS dentures fixed here. The precision and fit are unbelievable. I can eat normally again without any discomfort. Highly recommend Promise Dental!",
    rating: 5,
    treatment: "BPS Dentures"
  },
  {
    name: "Sneha Shah",
    review: "Very professional team. They took the time to explain the implant process clearly. The surgery was minimal invasive just as promised. Worth every penny.",
    rating: 5,
    treatment: "Dental Implants"
  }
];

export default function Testimonials() {
  return (
    <section style={{ padding: '100px 0', background: '#FFFFFF', overflow: 'hidden' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        
        <motion.div 
          style={{ textAlign: 'center', marginBottom: '60px' }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={springConfig}
        >
          <span style={{ display: 'inline-block', color: '#F59E0B', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '10px' }}>
            Patient Stories
          </span>
          <h2 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#0F172A', marginBottom: '20px' }}>
            Smiles We've Restored
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              style={{ perspective: 1000 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ ...springConfig, delay: index * 0.15 }}
            >
              <motion.div
                style={{
                  background: '#F8FAFC',
                  borderRadius: '24px',
                  padding: '40px',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transformStyle: 'preserve-3d',
                  border: '1px solid #F1F5F9'
                }}
                whileHover={{ 
                  rotateY: index % 2 === 0 ? 5 : -5, 
                  rotateX: 5, 
                  scale: 1.03,
                  boxShadow: '0 30px 60px rgba(0,0,0,0.08)',
                  background: '#FFFFFF'
                }}
                transition={springConfig}
              >
                {/* 3D Floating Quotes */}
                <motion.div 
                  style={{ color: '#0EA5E9', fontSize: '3rem', lineHeight: '1', marginBottom: '20px', opacity: 0.2, transform: 'translateZ(30px)' }}
                >
                  "
                </motion.div>
                
                <p style={{ fontSize: '1.125rem', color: '#334155', lineHeight: '1.7', flexGrow: 1, fontStyle: 'italic', marginBottom: '30px', transform: 'translateZ(20px)' }}>
                  "{item.review}"
                </p>
                
                <div style={{ transform: 'translateZ(40px)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #E2E8F0', paddingTop: '20px' }}>
                  <div>
                    <h4 style={{ color: '#0F172A', fontWeight: '700', fontSize: '1.125rem', margin: '0 0 5px 0' }}>
                      {item.name}
                    </h4>
                    <span style={{ color: '#64748B', fontSize: '0.875rem' }}>
                      {item.treatment}
                    </span>
                  </div>
                  <div style={{ color: '#FBBF24', fontSize: '1.25rem' }}>
                    {'★'.repeat(item.rating)}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
