
import React from 'react';
import WhatsAppButton from '@/components/WhatsAppButton';

interface ServiceSectionProps {
  id: string;
  title: string;
  description: string;
  features: string[];
  actionText: string;
  icon: React.ReactNode;
  image?: string;
  isReversed?: boolean;
  backgroundColor: 'white' | 'dark';
}

const ServiceSection: React.FC<ServiceSectionProps> = ({
  id,
  title,
  description,
  features,
  actionText,
  icon,
  image,
  isReversed = false,
  backgroundColor
}) => {
  const textClass = "text-black";
  const bgClass = backgroundColor === 'white' ? 'bg-white' : 'bg-brand-lightGray';
  
  return (
    <section id={id} className={`section ${bgClass}`}>
      <div className="container-custom">
        <div className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center`}>
          <div className="md:w-1/2">
            <div className="bg-brand-blue/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              {icon}
            </div>
            <h2 className={`text-3xl font-bold mb-4 ${textClass}`}>{title}</h2>
            <p className={`text-lg ${textClass} mb-4`}>
              {description}
            </p>
            <ul className="space-y-2 mb-6">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-blue mr-2 mt-1">
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
                    <path d="m9 12 2 2 4-4"/>
                  </svg>
                  <span className={textClass}>{feature}</span>
                </li>
              ))}
            </ul>
            <WhatsAppButton neighborhood="Ipiranga" className="mt-4">
              {actionText}
            </WhatsAppButton>
          </div>
          <div className="md:w-1/2 bg-gray-100 h-64 md:h-80 rounded-lg flex items-center justify-center overflow-hidden">
            {image ? (
              <img
                src={image}
                alt={title}
                className="object-cover w-full h-full"
                style={{ maxHeight: 320, borderRadius: '0.5rem' }}
                loading="lazy"
              />
            ) : (
              <div className="text-9xl text-brand-blue">
                {icon}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
