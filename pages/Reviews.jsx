import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import CTASection from '../components/CTASection';

const springConfig = { type: "spring", stiffness: 100, damping: 15 };

const reviewsData = [
  { name: "Rajesh Patel", rating: 5, review: "Absolutely painless root canal! I was so nervous but Dr. Jadav made me feel completely comfortable. The clinic is so clean and professional." },
  { name: "Priya Shah", rating: 5, review: "The friendliest dental clinic in Surat. Dr. Jadav takes time to explain everything clearly. Highly recommend for BPS dentures!" },
  { name: "Amit Desai", rating: 5, review: "Got my dental implants done here. The whole process was smooth and the results are amazing. Worth every rupee." },
  { name: "Sneha Reddy", rating: 5, review: "I had a severe toothache and they accommodated me immediately. The extraction was quick and I felt no pain at all." },
  { name: "Vikram Singh", rating: 5, review: "Best experience I've ever had at a dentist. The ambient lighting and the calm environment really help reduce anxiety." },
  { name: "Neha Sharma", rating: 5, review: "My smile looks entirely different after the tooth reshaping. Thank you so much Promise Dental!" }
];

export default function Reviews() {
  return (
    <PageTransition>
      {/* Header */}
      <section style={{ padding: '150px 0 80px', background: '#FFFFFF', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '0 20px' }}>
          <motion.span 
            style={{ color: '#F59E0B', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px' }}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={springConfig}
          >
            Patient Voice
          </motion.span>
          <motion.h1 
            style={{ fontSize: '3.5rem', color: '#0F172A', fontWeight: '800', marginTop: '15px', marginBottom: '20px' }}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, ...springConfig }}
          >
            What Our Patients Say
          </motion.h1>
          <motion.div 
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px', marginTop: '30px' }}
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, ...springConfig }}
          >
            <h2 style={{ margin: 0, fontSize: '4rem', color: '#0EA5E9', fontWeight: '800', lineHeight: 1 }}>4.8</h2>
            <div style={{ textAlign: 'left' }}>
              <div style={{ color: '#F59E0B', fontSize: '1.5rem', letterSpacing: '2px' }}>★★★★★</div>
              <p style={{ margin: 0, fontSize: '1rem', color: '#64748B', fontWeight: '600' }}>Based on verified reviews</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Grid */}
      <section style={{ padding: '0 0 100px', background: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '30px' }}>
            {reviewsData.map((review, index) => (
              <motion.div
                key={index}
                style={{ perspective: 1000 }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ ...springConfig, delay: index * 0.1 }}
              >
                <motion.div
                  style={{
                    background: '#F8FAFC', padding: '40px', borderRadius: '24px',
                    height: '100%', display: 'flex', flexDirection: 'column',
                    transformStyle: 'preserve-3d', border: '1px solid #F1F5F9'
                  }}
                  whileHover={{ rotateY: index % 2 === 0 ? 5 : -5, rotateX: 5, scale: 1.02, boxShadow: '0 30px 60px rgba(0,0,0,0.05)', background: 'white' }}
                  transition={springConfig}
                >
                  <motion.div style={{ color: '#F59E0B', fontSize: '1.25rem', marginBottom: '20px', transform: 'translateZ(20px)' }}>
                    {'★'.repeat(review.rating)}
                  </motion.div>
                  <p style={{ fontStyle: 'italic', fontSize: '1.125rem', color: '#334155', lineHeight: '1.7', flexGrow: 1, marginBottom: '30px', transform: 'translateZ(30px)' }}>
                    "{review.review}"
                  </p>
                  <div style={{ borderTop: '1px solid #E2E8F0', paddingTop: '20px', transform: 'translateZ(20px)' }}>
                    <h4 style={{ margin: 0, fontSize: '1.125rem', color: '#0F172A', fontWeight: '700' }}>{review.name}</h4>
                    <span style={{ fontSize: '0.875rem', color: '#10B981', fontWeight: '600' }}>Verified Patient</span>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </PageTransition>
  );
}
