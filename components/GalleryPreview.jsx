import React from 'react';
import { motion } from 'framer-motion';

const springConfig = { type: "spring", stiffness: 120, damping: 14 };

const galleryImages = [
  { src: 'images/waiting_area.png', title: 'Comfortable Waiting Area' },
  { src: 'images/surgery_room.png', title: 'Modern Surgery Room' },
  { src: 'images/clinic.png', title: 'Advanced Facilities' },
  { src: 'images/modern_dentistry.png', title: 'Sterile Environment' }
];

export default function GalleryPreview() {
  return (
    <section style={{ padding: 'var(--section-pad) 0', background: 'var(--light-gray)' }}>
      <div className="container">
        
        <motion.div 
          style={{ textAlign: 'center', marginBottom: '60px' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={springConfig}
        >
          <span style={{ color: 'var(--primary)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px' }}>Our Space</span>
          <h2 style={{ fontSize: 'var(--h2-size)', fontWeight: '800', color: 'var(--dark)', marginTop: '10px' }}>Clinical Excellence</h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              style={{ position: 'relative', height: '300px', borderRadius: '30px', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ ...springConfig, delay: i * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <img src={img.src} alt={img.title} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '20px', background: 'linear-gradient(transparent, rgba(15,23,42,0.8))', color: 'white' }}>
                <p style={{ margin: 0, fontWeight: '600' }}>{img.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
