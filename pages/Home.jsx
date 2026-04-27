import React from 'react';
import HeroSection from '../components/HeroSection';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import CTASection from '../components/CTASection';
import PageTransition from '../components/PageTransition';

import GalleryPreview from '../components/GalleryPreview';

export default function Home() {
  return (
    <PageTransition>
      <HeroSection />
      <Services />
      <GalleryPreview />
      <Testimonials />
      <CTASection />
    </PageTransition>
  );
}
