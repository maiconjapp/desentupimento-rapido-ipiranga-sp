
import React from 'react';

interface HeroSectionProps {
  title: string;
  description: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, description }) => {
  return (
    <section className="hero-section">
      <div className="container-custom text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
          {title}
        </h1>
        <p className="text-xl text-white max-w-3xl mx-auto">
          {description}
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
