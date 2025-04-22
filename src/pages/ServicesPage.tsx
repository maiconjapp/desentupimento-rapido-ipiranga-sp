
import React from 'react';
import { Droplet, SquareAsterisk, WashingMachine } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import HeroSection from '@/components/services/HeroSection';
import ServiceSection from '@/components/services/ServiceSection';
import OtherServices from '@/components/services/OtherServices';
import CTASection from '@/components/services/CTASection';

const ServicesPage = () => {
  const piaFeatures = [
    "Desentupimento de pias de cozinha com acúmulo de gordura",
    "Eliminação de obstruções em sifões e tubulações",
    "Limpeza de pias com máquina desentupidora profissional",
    "Prevenção de novos entupimentos e orientações"
  ];

  const vasoFeatures = [
    "Desobstrução completa de vasos sanitários",
    "Remoção de objetos estranhos sem quebrar a louça",
    "Uso de equipamento especializado para entupimentos severos",
    "Higienização completa após o serviço"
  ];

  const raloFeatures = [
    "Desentupimento de ralos de banheiros e box",
    "Limpeza de caixas de gordura e sifonadas",
    "Desobstrução de tubulações de esgoto",
    "Tratamento preventivo contra novos entupimentos"
  ];

  return (
    <>
      <Header />
      
      <HeroSection 
        title="Nossos Serviços de Desentupimento"
        description="Soluções profissionais para todos os tipos de entupimentos em residências e comércios na região do Ipiranga e toda Zona Sul de SP."
      />

      <ServiceSection
        id="pia"
        title="Desentupimento de Pia"
        description="Oferecemos serviço especializado para desentupimento de pias de cozinha, banheiro e áreas de serviço. Nossos profissionais utilizam equipamentos modernos para garantir a desobstrução completa sem danificar suas instalações."
        features={piaFeatures}
        actionText="Desentupir minha pia"
        icon={<Droplet className="h-8 w-8 text-brand-blue" />}
        image="https://i.ibb.co/hRxPtLZj/desentupimento-de-pia-sp.jpg"
        backgroundColor="white"
      />

      <ServiceSection
        id="vaso"
        title="Desentupimento de Vaso Sanitário"
        description="Resolvemos rapidamente entupimentos em vasos sanitários e bacias, utilizando técnicas eficientes e equipamentos específicos para cada tipo de obstrução, garantindo um serviço higiênico e sem danos à louça sanitária."
        features={vasoFeatures}
        actionText="Desentupir meu vaso"
        icon={<SquareAsterisk className="h-8 w-8 text-brand-blue" />}
        image="https://i.ibb.co/XkbZgW1z/desentupimento-de-vaso-sp.jpg"
        isReversed={true}
        backgroundColor="dark"
      />

      <ServiceSection
        id="ralo"
        title="Desentupimento de Ralo"
        description="Desobstruímos ralos de banheiro, box, áreas externas, caixas de gordura e sistemas de esgoto com equipamentos especializados, devolvendo o perfeito escoamento da água e prevenindo problemas maiores."
        features={raloFeatures}
        actionText="Desentupir meu ralo"
        icon={<WashingMachine className="h-8 w-8 text-brand-blue" />}
        image="https://i.ibb.co/QjkZcsCP/IMG-20250422-WA0243.jpg"
        backgroundColor="white"
      />

      <OtherServices />
      
      <CTASection />

      <WhatsAppButton floating neighborhood="Ipiranga" />
      <Footer />
    </>
  );
};

export default ServicesPage;
