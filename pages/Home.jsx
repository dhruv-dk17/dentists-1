import React from 'react';
import HeroSection from '../components/HeroSection';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import CTASection from '../components/CTASection';
import PageTransition from '../components/PageTransition';
import GalleryPreview from '../components/GalleryPreview';
import SEO from '../components/SEO';

export default function Home() {
  return (
    <PageTransition>
      <SEO 
        title="Best Painless Dentist in Jahangirabad, Surat" 
        description="Experience painless dental treatments at Promise Dental Clinic. From root canals to implants, we provide expert care in Surat."
        keywords="Dentist in Surat, Painless Dentistry, Root Canal Surat, Dental Implants Surat"
      />
      <HeroSection />
      <Services />
      <GalleryPreview />
      <Testimonials />
      <CTASection />
    </PageTransition>
  );
}
