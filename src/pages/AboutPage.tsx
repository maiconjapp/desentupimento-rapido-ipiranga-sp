import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';

const AboutPage = () => {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container-custom text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Sobre a Magnavita Marido de Aluguel
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Conheça nossa história e nosso compromisso com a qualidade nos serviços de desentupimento na região do Ipiranga.
          </p>
        </div>
      </section>
      
      {/* About Us Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Nossa História</h2>
              <p className="text-lg text-brand-gray mb-4">
                A Magnavita Marido de Aluguel nasceu da paixão por resolver problemas domésticos com excelência e profissionalismo. Com anos de experiência no mercado, nos especializamos em serviços de desentupimento rápido e eficiente para residências e comércios na região do Ipiranga e toda a Zona Sul de São Paulo.
              </p>
              <p className="text-lg text-brand-gray mb-4">
                Nossa equipe é formada por profissionais qualificados e em constante treinamento, preparados para lidar com os mais diversos desafios em desentupimento de pias, vasos sanitários, ralos e sistemas de esgoto, sempre utilizando equipamentos modernos e técnicas avançadas.
              </p>
              <p className="text-lg text-brand-gray">
                O que nos diferencia é o compromisso com a qualidade do serviço, a rapidez no atendimento e a transparência nos orçamentos, construindo relacionamentos de confiança com nossos clientes em toda a região.
              </p>
            </div>
            <div className="md:w-1/2 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
              <img 
                src="https://i.ibb.co/TDk4CFX9/Empresa-de-desentupimento-ipiranga.jpg" 
                alt="Empresa de desentupimento Ipiranga" 
                className="object-cover w-full h-full rounded-lg"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission & Values */}
      <section className="section bg-brand-lightGray">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nossa Missão e Valores</h2>
            <p className="text-lg text-brand-gray max-w-2xl mx-auto">
              Trabalhamos com princípios claros que norteiam todas as nossas ações.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Missão</h3>
              <p className="text-brand-gray">
                Oferecer serviços de desentupimento de alta qualidade, com rapidez e eficiência, garantindo a satisfação total dos nossos clientes e contribuindo para o bem-estar e a qualidade de vida em seus ambientes.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Visão</h3>
              <p className="text-brand-gray">
                Ser referência em serviços de desentupimento na região do Ipiranga e Zona Sul de São Paulo, reconhecidos pela excelência, confiabilidade e inovação em nossas soluções.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Valores</h3>
              <ul className="text-brand-gray space-y-2">
                <li>• Transparência e honestidade</li>
                <li>• Compromisso com a qualidade</li>
                <li>• Respeito aos clientes</li>
                <li>• Responsabilidade ambiental</li>
                <li>• Aprimoramento contínuo</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Por Que Nos Escolher?</h2>
            <p className="text-lg text-brand-gray max-w-2xl mx-auto">
              Existem muitas razões para confiar na Magnavita Marido de Aluguel para resolver seus problemas de entupimento.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <div className="bg-brand-blue/10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-blue">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Atendimento Rápido</h3>
                <p className="text-brand-gray">
                  Chegamos em até 60 minutos após o seu contato, minimizando os transtornos causados pelo entupimento.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-brand-blue/10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-blue">
                  <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Serviço Garantido</h3>
                <p className="text-brand-gray">
                  Todos os nossos serviços possuem garantia, demonstrando a confiança que temos na qualidade do nosso trabalho.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-brand-blue/10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-blue">
                  <circle cx="12" cy="8" r="7"/>
                  <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Profissionais Qualificados</h3>
                <p className="text-brand-gray">
                  Nossa equipe é treinada e experiente, capaz de resolver qualquer tipo de entupimento com eficiência.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-brand-blue/10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-blue">
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <path d="M7 15h0M12 15h0M17 15h0"/>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Equipamentos Modernos</h3>
                <p className="text-brand-gray">
                  Utilizamos tecnologia avançada, como máquinas desentupidoras e câmeras de inspeção, para um serviço preciso e eficaz.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-brand-blue/10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-blue">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Preços Justos</h3>
                <p className="text-brand-gray">
                  Oferecemos orçamentos transparentes e sem surpresas, com preços competitivos e compatíveis com a qualidade do serviço.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-brand-blue/10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-blue">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Atendimento Local</h3>
                <p className="text-brand-gray">
                  Atuamos diretamente na região do Ipiranga e bairros da Zona Sul, o que nos permite um atendimento rápido e conhecimento das necessidades locais.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section bg-brand-blue text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Pronto para resolver seu problema de entupimento?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Entre em contato agora mesmo para um atendimento rápido e profissional na sua residência ou comércio.
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

export default AboutPage;
