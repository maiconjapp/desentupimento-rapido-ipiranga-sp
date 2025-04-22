
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import NeighborhoodList from '@/components/NeighborhoodList';

const NeighborhoodsListPage = () => {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container-custom text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Bairros Atendidos
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Oferecemos serviços de desentupimento rápido em toda a Zona Sul de São Paulo e região.
          </p>
        </div>
      </section>
      
      {/* Neighborhoods List */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-white">Atuamos em Toda a Zona Sul de SP</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              A Magnavita Marido de Aluguel atende em diversos bairros da Zona Sul e região central de São Paulo, oferecendo serviços de desentupimento rápido e eficiente.
            </p>
          </div>
          
          <div className="bg-gray-800 p-8 rounded-lg mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center text-white">Lista de Bairros Atendidos</h3>
            <NeighborhoodList />
          </div>
          
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-white">Desentupimento Rápido na Zona Sul de SP</h3>
            <p className="text-lg text-gray-300 mb-4">
              A Magnavita Marido de Aluguel oferece serviços especializados de desentupimento em toda a Zona Sul e região central de São Paulo, com profissionais capacitados e equipamentos modernos para resolver qualquer tipo de entupimento.
            </p>
            <p className="text-lg text-gray-300 mb-4">
              Sabemos que um entupimento pode causar grandes transtornos no seu dia a dia, por isso estamos sempre prontos para atender sua emergência com rapidez e eficiência, onde quer que você esteja na Zona Sul de SP.
            </p>
            <p className="text-lg text-gray-300">
              Clique no seu bairro para saber mais sobre nossos serviços de desentupimento na sua região ou entre em contato diretamente pelo WhatsApp ou telefone para um atendimento imediato.
            </p>
          </div>
          
          <div className="bg-brand-orange text-white p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Não encontrou seu bairro?</h3>
            <p className="text-lg mb-6">
              Entre em contato conosco para verificar a disponibilidade de atendimento na sua região.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <WhatsAppButton className="text-lg" />
              <Link 
                to="/contato" 
                className="inline-flex items-center justify-center rounded-md text-lg font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-transparent border border-white text-white hover:bg-white hover:text-brand-orange h-10 px-4 py-2"
              >
                Entre em Contato
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <WhatsAppButton floating />
      <Footer />
    </>
  );
};

export default NeighborhoodsListPage;
