
import React from "react";

const WhyChooseUsSection = () => (
  <section className="section bg-brand-lightGray">
    <div className="container-custom">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Por Que Nos Escolher?</h2>
        <p className="text-lg text-brand-gray max-w-2xl mx-auto">
          Oferecemos o melhor serviço de desentupimento na região do Ipiranga e Zona Sul de SP.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-sm text-center">
          <div className="bg-brand-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-blue">
              <path d="M12 2v2"/>
              <path d="m4.93 4.93 1.41 1.41"/>
              <path d="M20 12h2"/>
              <path d="m19.07 4.93-1.41 1.41"/>
              <path d="M15.947 12.65a4 4 0 0 0-5.925-4.128"/>
              <path d="M13 22H7a2 2 0 0 1-2-2v-1a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2z"/>
              <path d="M10.29 13.7V18"/>
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Atendimento Rápido</h3>
          <p className="text-brand-gray">
            Chegamos em até 60 minutos após o seu contato em toda região do Ipiranga.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm text-center">
          <div className="bg-brand-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-blue">
              <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/>
              <path d="M12 11V3l4 3-4 3"/>
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Equipamento Moderno</h3>
          <p className="text-brand-gray">
            Utilizamos máquinas desentupidoras de alta potência para resolver qualquer problema.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm text-center">
          <div className="bg-brand-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-blue">
              <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z"/>
              <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"/>
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Orçamento Sem Compromisso</h3>
          <p className="text-brand-gray">
            Avaliamos seu problema e fornecemos um orçamento justo antes de iniciar o serviço.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm text-center">
          <div className="bg-brand-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-blue">
              <path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2"/>
              <rect width="18" height="18" x="3" y="3" rx="2"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Profissionais Experientes</h3>
          <p className="text-brand-gray">
            Nossa equipe é treinada e com anos de experiência em todos os tipos de desentupimento.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default WhyChooseUsSection;
