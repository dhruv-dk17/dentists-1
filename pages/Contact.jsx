import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import SEO from '../components/SEO';
import { springConfig, GOOGLE_SCRIPT_URL } from '../constants';

export default function Contact() {
  const [formData, setFormData] = React.useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, type: 'Contact Inquiry' })
      });
      setIsSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error("Submission failed", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageTransition>
      <SEO 
        title="Contact Us" 
        description="Get in touch with Promise Dental Clinic in Surat. Schedule your appointment or visit our clinic in Jahangirabad."
        keywords="Contact Dentist Surat, Promise Dental Address, Dentist Phone Number Surat"
      />
      {/* Header */}
      <section style={{ padding: '150px 0 80px', background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <motion.div 
          style={{ position: 'absolute', bottom: -50, left: -50, width: 300, height: 300, borderRadius: '50%', background: 'rgba(14,165,233,0.05)', filter: 'blur(60px)' }}
          animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 8, repeat: Infinity }}
        />
        <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '800px', margin: '0 auto', padding: '0 20px' }}>
          <motion.span 
            style={{ color: '#0EA5E9', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px' }}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={springConfig}
          >
            Get In Touch
          </motion.span>
          <motion.h1 
            style={{ fontSize: 'clamp(2.5rem, 8vw, 3.5rem)', color: 'white', fontWeight: '800', marginTop: '15px', marginBottom: '20px' }}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, ...springConfig }}
          >
            How can we help?
          </motion.h1>
          <motion.p 
            style={{ color: '#94A3B8', fontSize: '1.25rem', lineHeight: '1.6' }}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, ...springConfig }}
          >
            Have a question or want to book an appointment? We're here to assist you with all your dental needs.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ padding: '80px 0', background: '#F8FAFC' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '50px' }}>
            
            {/* Contact Info & Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={springConfig}
            >
              <div style={{ background: 'white', padding: '40px', borderRadius: '30px', boxShadow: '0 20px 40px rgba(0,0,0,0.03)', border: '1px solid #F1F5F9' }}>
                <h2 style={{ fontSize: '1.75rem', marginBottom: '30px', color: '#0F172A' }}>Send a Message</h2>
                
                {isSuccess ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                    style={{ textAlign: 'center', padding: '40px 20px' }}
                  >
                    <div style={{ fontSize: '4rem', marginBottom: '20px' }}>✅</div>
                    <h3 style={{ color: '#059669', marginBottom: '10px' }}>Message Sent!</h3>
                    <p style={{ color: '#64748B' }}>Thank you for reaching out. We'll get back to you shortly.</p>
                    <button onClick={() => setIsSuccess(false)} className="btn btn-secondary" style={{ marginTop: '20px' }}>Send Another</button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <div className="form-group">
                      <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#475569' }}>Full Name</label>
                      <input 
                        type="text" required placeholder="John Doe" 
                        value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}
                        style={{ width: '100%', padding: '15px 20px', borderRadius: '12px', border: '2px solid #E2E8F0', background: '#F8FAFC', outline: 'none', transition: 'all 0.3s' }}
                      />
                    </div>
                    <div className="form-group">
                      <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#475569' }}>Email Address</label>
                      <input 
                        type="email" required placeholder="john@example.com" 
                        value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})}
                        style={{ width: '100%', padding: '15px 20px', borderRadius: '12px', border: '2px solid #E2E8F0', background: '#F8FAFC', outline: 'none' }}
                      />
                    </div>
                    <div className="form-group">
                      <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#475569' }}>Subject</label>
                      <input 
                        type="text" required placeholder="Appointment Inquiry" 
                        value={formData.subject} onChange={(e) => setFormData({...formData, subject: e.target.value})}
                        style={{ width: '100%', padding: '15px 20px', borderRadius: '12px', border: '2px solid #E2E8F0', background: '#F8FAFC', outline: 'none' }}
                      />
                    </div>
                    <div className="form-group">
                      <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#475569' }}>Message</label>
                      <textarea 
                        required rows="4" placeholder="Tell us more..." 
                        value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})}
                        style={{ width: '100%', padding: '15px 20px', borderRadius: '12px', border: '2px solid #E2E8F0', background: '#F8FAFC', outline: 'none', resize: 'none' }}
                      />
                    </div>
                    <button type="submit" disabled={isSubmitting} className="btn btn-primary" style={{ width: '100%', padding: '18px' }}>
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Contact Details & Map */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={springConfig}
                style={{ background: 'white', padding: '30px', borderRadius: '24px', boxShadow: '0 10px 30px rgba(0,0,0,0.02)', border: '1px solid #F1F5F9', display: 'flex', gap: '20px', alignItems: 'center' }}
              >
                <div style={{ width: '60px', height: '60px', borderRadius: '16px', background: '#F0F9FF', color: '#0EA5E9', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>📞</div>
                <div>
                  <h4 style={{ margin: 0, color: '#0F172A' }}>Call Us</h4>
                  <a href="tel:+918200232074" style={{ color: '#64748B', fontWeight: '600' }}>082002 32074</a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ ...springConfig, delay: 0.1 }}
                style={{ background: 'white', padding: '30px', borderRadius: '24px', boxShadow: '0 10px 30px rgba(0,0,0,0.02)', border: '1px solid #F1F5F9', display: 'flex', gap: '20px', alignItems: 'center' }}
              >
                <div style={{ width: '60px', height: '60px', borderRadius: '16px', background: '#F0F9FF', color: '#0EA5E9', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>📍</div>
                <div>
                  <h4 style={{ margin: 0, color: '#0F172A' }}>Location</h4>
                  <p style={{ margin: 0, color: '#64748B', fontSize: '0.9rem' }}>Office 113, Vitoria Height, Jahangirabad, Surat</p>
                </div>
              </motion.div>

              <motion.div 
                className="contact-map"
                style={{ flexGrow: 1, borderRadius: '30px', overflow: 'hidden', boxShadow: '0 25px 50px rgba(0,0,0,0.05)', background: '#E2E8F0', minHeight: '300px' }}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ ...springConfig, delay: 0.2 }}
              >
                 <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.2422897782867!2d72.7778941!3d21.222238699999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04d63a36d2ef1%3A0xdd0066327109ee1b!2sPromise%20Dental%20clinic!5e0!3m2!1sen!2sin!4v1777295020546!5m2!1sen!2sin" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </motion.div>
            </div>

          </div>

        </div>
      </section>
    </PageTransition>
  );
}
