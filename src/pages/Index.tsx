
import React from 'react';
import { Link } from 'react-router-dom';
import { Sink, Shower, Toilet, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';
import NeighborhoodList from '@/components/NeighborhoodList';

const Index = () => {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container-custom flex flex-col items-center text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Desentupimento Rápido em SP
          </h1>
          <h2 className="text-xl md:text-2xl mb-6 text-white font-normal">
            Pia, vaso ou ralo entupido? <br className="md:hidden" />
            Chame a Magnavita Marido de Aluguel e resolva agora!
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <WhatsAppButton className="text-lg" />
            <Button asChild variant="outline" className="text-white border-white hover:bg-white hover:text-brand-blue text-lg">
              <a href="tel:+5511977480538">
                Ligar Agora
              </a>
            </Button>
          </div>
          <div className="mt-12 animate-bounce">
            <ArrowDown className="h-8 w-8 text-white" />
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nossos Serviços</h2>
            <p className="text-lg text-brand-gray max-w-2xl mx-auto">
              Oferecemos soluções rápidas e eficientes para todos os tipos de entupimentos na sua residência ou comércio.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              title="Desentupimento de Pia"
              description="Desentupimos pias de cozinha, banheiro e áreas de serviço com equipamentos modernos e sem sujeira."
              icon={<Sink className="h-12 w-12" />}
              link="/servicos#pia"
            />
            <ServiceCard
              title="Desentupimento de Vaso"
              description="Resolvemos entupimentos em vasos sanitários de forma rápida, higiênica e sem danificar suas instalações."
              icon={<Toilet className="h-12 w-12" />}
              link="/servicos#vaso"
            />
            <ServiceCard
              title="Desentupimento de Ralo"
              description="Eliminamos entupimentos em ralos de banheiros, box, áreas externas e caixas de gordura."
              icon={<Shower className="h-12 w-12" />}
              link="/servicos#ralo"
            />
          </div>
          
          <div className="mt-12 text-center">
            <Button asChild size="lg">
              <Link to="/servicos">Ver Todos os Serviços</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
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
      
      {/* Testimonials Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">O Que Nossos Clientes Dizem</h2>
            <p className="text-lg text-brand-gray max-w-2xl mx-auto">
              A satisfação dos nossos clientes é nossa maior prioridade.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              text="Chamei para desentupir a pia da cozinha que estava totalmente entupida. Chegaram em menos de 1 hora e resolveram o problema rapidamente. Super recomendo!"
              author="Carlos Silva"
              location="Ipiranga, SP"
            />
            <TestimonialCard
              text="Serviço excelente! Profissionais muito atenciosos e deixaram tudo limpo após o desentupimento do vaso sanitário. Farei negócio novamente se precisar."
              author="Ana Oliveira"
              location="Vila Mariana, SP"
            />
            <TestimonialCard
              text="Meu ralo do banheiro estava totalmente entupido. Eles vieram no mesmo dia e resolveram rápido sem fazer sujeira. Preço justo e atendimento nota 10!"
              author="Paulo Santos"
              location="Sacomã, SP"
            />
          </div>
        </div>
      </section>
      
      {/* Neighborhoods Section */}
      <section className="section bg-brand-lightGray">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Bairros Atendidos</h2>
            <p className="text-lg text-brand-gray max-w-2xl mx-auto">
              Atendemos em toda a região do Ipiranga, Vila Mariana e Zona Sul de SP com rapidez e eficiência.
            </p>
          </div>
          
          <NeighborhoodList />
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section bg-brand-blue text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Precisa de Desentupimento Urgente?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Entre em contato agora mesmo para uma solução rápida e eficiente para o seu problema.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <WhatsAppButton className="text-lg" />
            <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-brand-blue" asChild>
              <a href="tel:+5511977480538">
                Ligar: (11) 97748-0538
              </a>
            </Button>
          </div>
        </div>
      </section>
      
      <WhatsAppButton floating neighborhood="Ipiranga" />
      <Footer />
    </>
  );
};

export default Index;
