import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import CTASection from '../components/CTASection';
import SEO from '../components/SEO';
import { springConfig } from '../constants';

const reviews = [
  { name: "Rajesh Patel", rating: 5, review: "Absolutely painless root canal! I was so nervous but Dr. Dhruv Khuman made me feel completely comfortable. The clinic is so clean and professional.", avatar: "RP", color: "#0EA5E9" },
  { name: "Priya Shah", rating: 5, review: "The friendliest dental clinic in Surat. Dr. Dhruv Khuman takes time to explain everything clearly. Highly recommend for BPS dentures!", avatar: "images/happy_patient.png", color: "#6366F1" },
  { name: "Amit Desai", rating: 5, review: "Got my dental implants done here. The whole process was smooth and the results are amazing. Worth every rupee.", avatar: "AD", color: "#F59E0B" },
  { name: "Sneha Reddy", rating: 5, review: "I had a severe toothache and they accommodated me immediately. The extraction was quick and I felt no pain at all.", avatar: "SR", color: "#10B981" },
  { name: "Vikram Singh", rating: 5, review: "Best experience I've ever had at a dentist. The ambient lighting and the calm environment really help reduce anxiety.", avatar: "VS", color: "#EC4899" },
  { name: "Neha Sharma", rating: 5, review: "My smile looks entirely different after the tooth reshaping. Thank you so much Promise Dental!", avatar: "NS", color: "#8B5CF6" }
];

export default function Reviews() {
  return (
    <PageTransition>
      <SEO 
        title="Patient Reviews" 
        description="Read what our patients say about Promise Dental Clinic. Verified reviews for root canal, dental implants, and BPS dentures in Surat."
        keywords="Dentist Reviews Surat, Best Dental Clinic Surat Reviews, Patient Testimonials"
      />
      <section style={{ padding: '150px 0 80px', background: '#F8FAFC', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={springConfig}
            style={{ color: '#0EA5E9', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px' }}
          >
            Patient Stories
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, ...springConfig }}
            style={{ fontSize: 'clamp(2.5rem, 8vw, 4rem)', color: '#0F172A', fontWeight: '800', marginTop: '15px', marginBottom: '20px' }}
          >
            Smiles We've Restored
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, ...springConfig }}
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '30px', flexWrap: 'wrap', marginTop: '40px' }}
          >
            <div style={{ textAlign: 'left', background: 'white', padding: '30px 50px', borderRadius: '30px', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
              <h2 style={{ margin: 0, fontSize: '4rem', color: '#0EA5E9', fontWeight: '800', lineHeight: 1 }}>4.8</h2>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ color: '#F59E0B', fontSize: '1.5rem', letterSpacing: '2px' }}>★★★★★</div>
                <p style={{ margin: 0, fontSize: '1rem', color: '#64748B', fontWeight: '600' }}>Based on 500+ verified reviews</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section style={{ padding: '80px 0 100px', background: 'white' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '30px' }}>
            {reviews.map((review, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, ...springConfig }}
                whileHover={{ y: -10, boxShadow: '0 30px 60px rgba(0,0,0,0.1)' }}
                style={{ 
                    background: '#F8FAFC', padding: '40px', borderRadius: '30px',
                    display: 'flex', flexDirection: 'column', gap: '20px',
                    border: '1px solid #F1F5F9',
                    position: 'relative',
                    transition: 'box-shadow 0.3s ease'
                }}
              >
                  <div style={{ position: 'absolute', top: '20px', right: '40px', color: '#CBD5E1', fontSize: '4rem', fontWeight: '900', opacity: 0.3, pointerEvents: 'none' }}>
                    "
                  </div>

                  <div style={{ color: '#F59E0B', fontSize: '1.25rem', marginBottom: '10px' }}>
                    {"★".repeat(review.rating)}
                  </div>

                  <p style={{ fontStyle: 'italic', fontSize: '1.125rem', color: '#334155', lineHeight: '1.7', flexGrow: 1, marginBottom: '30px' }}>
                    "{review.review}"
                  </p>

                  <div style={{ borderTop: '1px solid #E2E8F0', paddingTop: '20px', display: 'flex', alignItems: 'center', gap: '15px' }}>
                    <div style={{ 
                      width: '50px', height: '50px', borderRadius: '50%', 
                      background: review.color, color: 'white', 
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontWeight: '700', fontSize: '1.1rem',
                      overflow: 'hidden'
                    }}>
                      {review.avatar.length > 2 && review.avatar.includes('.') ? (
                        <img src={review.avatar} alt={review.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      ) : review.avatar}
                    </div>
                    <div>
                      <h4 style={{ margin: 0, fontSize: '1.125rem', color: '#0F172A', fontWeight: '700' }}>{review.name}</h4>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                        <span style={{ fontSize: '0.8rem', color: '#10B981', fontWeight: '700' }}>✓ VERIFIED PATIENT</span>
                      </div>
                    </div>
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
