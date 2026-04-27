import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import CTASection from '../components/CTASection';

const springConfig = { type: "spring", stiffness: 100, damping: 15 };

const reviews = [
  { name: "Rajesh Patel", rating: 5, review: "Absolutely painless root canal! I was so nervous but Dr. XYZ made me feel completely comfortable. The clinic is so clean and professional.", avatar: "RP", color: "var(--primary)" },
  { name: "Priya Shah", rating: 5, review: "The friendliest dental clinic in Surat. Dr. XYZ takes time to explain everything clearly. Highly recommend for BPS dentures!", avatar: "images/happy_patient.png", color: "var(--secondary)" },
  { name: "Amit Desai", rating: 5, review: "Got my dental implants done here. The whole process was smooth and the results are amazing. Worth every rupee.", avatar: "AD", color: "#F59E0B" },
  { name: "Sneha Reddy", rating: 5, review: "I had a severe toothache and they accommodated me immediately. The extraction was quick and I felt no pain at all.", avatar: "SR", color: "var(--accent)" },
  { name: "Vikram Singh", rating: 5, review: "Best experience I've ever had at a dentist. The ambient lighting and the calm environment really help reduce anxiety.", avatar: "VS", color: "#EC4899" },
  { name: "Neha Sharma", rating: 5, review: "My smile looks entirely different after the tooth reshaping. Thank you so much Promise Dental!", avatar: "NS", color: "var(--primary)" }
];

export default function Reviews() {
  return (
    <PageTransition>
      <section style={{ padding: '150px 0 80px', background: 'var(--white)', textAlign: 'center' }}>
        <div className="container">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ color: '#F59E0B', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px' }}
          >
            Patient Stories
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            style={{ fontSize: 'var(--h2-size)', color: 'var(--dark)', fontWeight: '800', marginTop: '15px', marginBottom: '20px' }}
          >
            Smiles We've Restored
          </motion.h1>
          
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '30px', flexWrap: 'wrap', marginTop: '40px' }}>
            <div style={{ textAlign: 'left' }}>
              <h2 style={{ margin: 0, fontSize: '4rem', color: 'var(--primary)', fontWeight: '800', lineHeight: 1 }}>4.8</h2>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ color: '#F59E0B', fontSize: '1.5rem', letterSpacing: '2px' }}>★★★★★</div>
                <p style={{ margin: 0, fontSize: '1rem', color: 'var(--gray)', fontWeight: '600' }}>Based on verified reviews</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '0 0 100px', background: 'var(--white)' }}>
        <div className="container">
          <div style={{ columns: 'repeat(auto-fill, minmax(350px, 1fr))', columnGap: '30px', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '30px' }}>
            {reviews.map((review, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                style={{ 
                    background: 'var(--light-gray)', padding: '40px', borderRadius: '24px',
                    display: 'flex', flexDirection: 'column', gap: '20px',
                    transformStyle: 'preserve-3d', border: '1px solid rgba(0,0,0,0.05)',
                    position: 'relative'
                }}
              >
                  <div style={{ position: 'absolute', top: '20px', right: '40px', color: 'var(--gray)', fontSize: '4rem', fontWeight: '900', opacity: 0.1, pointerEvents: 'none' }}>
                    "
                  </div>

                  <motion.div style={{ color: '#F59E0B', fontSize: '1.25rem', marginBottom: '20px', transform: 'translateZ(20px)' }}>
                    {"★".repeat(review.rating)}
                  </motion.div>

                  <p style={{ fontStyle: 'italic', fontSize: '1.125rem', color: 'var(--dark)', lineHeight: '1.7', flexGrow: 1, marginBottom: '30px', transform: 'translateZ(30px)', opacity: 0.9 }}>
                    "{review.review}"
                  </p>

                  <div style={{ borderTop: '1px solid rgba(0,0,0,0.05)', paddingTop: '20px', transform: 'translateZ(20px)', display: 'flex', alignItems: 'center', gap: '15px' }}>
                    <div style={{ 
                      width: '50px', height: '50px', borderRadius: '50%', 
                      background: review.color, color: 'white', 
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontWeight: '700', fontSize: '1.1rem',
                      overflow: 'hidden'
                    }}>
                      {review.avatar.length > 2 ? (
                        <img src={review.avatar} alt={review.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      ) : review.avatar}
                    </div>
                    <div>
                      <h4 style={{ margin: 0, fontSize: '1.125rem', color: 'var(--dark)', fontWeight: '700' }}>{review.name}</h4>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                        <span style={{ fontSize: '0.8rem', color: 'var(--accent)', fontWeight: '700' }}>✓ VERIFIED</span>
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
