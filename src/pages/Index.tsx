
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

// Novo: Importa componentes das seções
import HeroSection from '@/components/index/HeroSection';
import ServicesSection from '@/components/index/ServicesSection';
import WhyChooseUsSection from '@/components/index/WhyChooseUsSection';
import TestimonialsSection from '@/components/index/TestimonialsSection';
import NeighborhoodsSection from '@/components/index/NeighborhoodsSection';
import CTASection from '@/components/index/CTASection';

const Index = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <NeighborhoodsSection />
      <CTASection />
      <WhatsAppButton floating neighborhood="Ipiranga" />
      <Footer />
    </>
  );
};

export default Index;
