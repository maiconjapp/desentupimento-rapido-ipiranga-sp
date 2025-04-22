import React from 'react';
import { Droplet, SquareAsterisk, WashingMachine, Wrench } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const ServicesPage = () => {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container-custom text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Nossos Serviços de Desentupimento
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Soluções profissionais para todos os tipos de entupimentos em residências e comércios na região do Ipiranga e toda Zona Sul de SP.
          </p>
        </div>
      </section>
      
      {/* Pia Service */}
      <section id="pia" className="section bg-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <div className="bg-brand-blue/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Droplet className="h-8 w-8 text-brand-blue" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Desentupimento de Pia</h2>
              <p className="text-lg text-brand-gray mb-4">
                Oferecemos serviço especializado para desentupimento de pias de cozinha, banheiro e áreas de serviço. Nossos profissionais utilizam equipamentos modernos para garantir a desobstrução completa sem danificar suas instalações.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-blue mr-2 mt-1">
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
                    <path d="m9 12 2 2 4-4"/>
                  </svg>
                  <span>Desentupimento de pias de cozinha com acúmulo de gordura</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-blue mr-2 mt-1">
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
                    <path d="m9 12 2 2 4-4"/>
                  </svg>
                  <span>Eliminação de obstruções em sifões e tubulações</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-blue mr-2 mt-1">
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
                    <path d="m9 12 2 2 4-4"/>
                  </svg>
                  <span>Limpeza de pias com máquina desentupidora profissional</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-blue mr-2 mt-1">
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
                    <path d="m9 12 2 2 4-4"/>
                  </svg>
                  <span>Prevenção de novos entupimentos e orientações</span>
                </li>
              </ul>
              <WhatsAppButton neighborhood="Ipiranga" className="mt-4">
                Desentupir minha pia
              </WhatsAppButton>
            </div>
            <div className="md:w-1/2 bg-gray-100 h-64 md:h-80 rounded-lg flex items-center justify-center">
              <div className="text-9xl text-brand-blue">
                <Droplet />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Vaso Service */}
      <section id="vaso" className="section bg-brand-lightGray">
        <div className="container-custom">
          <div className="flex flex-col-reverse md:flex-row gap-8 items-center">
            <div className="md:w-1/2 bg-gray-100 h-64 md:h-80 rounded-lg flex items-center justify-center">
              <div className="text-9xl text-brand-blue">
                <SquareAsterisk />
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="bg-brand-blue/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <SquareAsterisk className="h-8 w-8 text-brand-blue" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Desentupimento de Vaso Sanitário</h2>
              <p className="text-lg text-brand-gray mb-4">
                Resolvemos rapidamente entupimentos em vasos sanitários e bacias, utilizando técnicas eficientes e equipamentos específicos para cada tipo de obstrução, garantindo um serviço higiênico e sem danos à louça sanitária.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-blue mr-2 mt-1">
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
                    <path d="m9 12 2 2 4-4"/>
                  </svg>
                  <span>Desobstrução completa de vasos sanitários</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-blue mr-2 mt-1">
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
                    <path d="m9 12 2 2 4-4"/>
                  </svg>
                  <span>Remoção de objetos estranhos sem quebrar a louça</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-blue mr-2 mt-1">
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
                    <path d="m9 12 2 2 4-4"/>
                  </svg>
                  <span>Uso de equipamento especializado para entupimentos severos</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-blue mr-2 mt-1">
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
                    <path d="m9 12 2 2 4-4"/>
                  </svg>
                  <span>Higienização completa após o serviço</span>
                </li>
              </ul>
              <WhatsAppButton neighborhood="Ipiranga" className="mt-4">
                Desentupir meu vaso
              </WhatsAppButton>
            </div>
          </div>
        </div>
      </section>
      
      {/* Ralo Service */}
      <section id="ralo" className="section bg-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <div className="bg-brand-blue/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <WashingMachine className="h-8 w-8 text-brand-blue" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Desentupimento de Ralo</h2>
              <p className="text-lg text-brand-gray mb-4">
                Desobstruímos ralos de banheiro, box, áreas externas, caixas de gordura e sistemas de esgoto com equipamentos especializados, devolvendo o perfeito escoamento da água e prevenindo problemas maiores.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-blue mr-2 mt-1">
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
                    <path d="m9 12 2 2 4-4"/>
                  </svg>
                  <span>Desentupimento de ralos de banheiros e box</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-blue mr-2 mt-1">
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
                    <path d="m9 12 2 2 4-4"/>
                  </svg>
                  <span>Limpeza de caixas de gordura e sifonadas</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-blue mr-2 mt-1">
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
                    <path d="m9 12 2 2 4-4"/>
                  </svg>
                  <span>Desobstrução de tubulações de esgoto</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-blue mr-2 mt-1">
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
                    <path d="m9 12 2 2 4-4"/>
                  </svg>
                  <span>Tratamento preventivo contra novos entupimentos</span>
                </li>
              </ul>
              <WhatsAppButton neighborhood="Ipiranga" className="mt-4">
                Desentupir meu ralo
              </WhatsAppButton>
            </div>
            <div className="md:w-1/2 bg-gray-100 h-64 md:h-80 rounded-lg flex items-center justify-center">
              <div className="text-9xl text-brand-blue">
                <WashingMachine />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Other Services */}
      <section className="section bg-brand-lightGray">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Outros Serviços</h2>
            <p className="text-lg text-brand-gray max-w-2xl mx-auto">
              Além dos serviços principais de desentupimento, também oferecemos:
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-brand-blue/10 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <Wrench className="h-6 w-6 text-brand-blue" />
                </div>
                <h3 className="text-xl font-semibold">Limpeza de Caixas d'Água</h3>
              </div>
              <p className="text-brand-gray">
                Realizamos limpeza e higienização completa de caixas d'água residenciais e comerciais, seguindo todas as normas sanitárias.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-brand-blue/10 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <Wrench className="h-6 w-6 text-brand-blue" />
                </div>
                <h3 className="text-xl font-semibold">Manutenção Hidráulica</h3>
              </div>
              <p className="text-brand-gray">
                Consertos e reparos em vazamentos, troca de registros, válvulas, torneiras e tubulações com qualidade e garantia.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-brand-blue/10 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <Wrench className="h-6 w-6 text-brand-blue" />
                </div>
                <h3 className="text-xl font-semibold">Inspeção por Câmera</h3>
              </div>
              <p className="text-brand-gray">
                Utilizamos câmeras de inspeção para localizar problemas em tubulações sem necessidade de quebra de paredes ou pisos.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section bg-brand-blue text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Precisa de um Orçamento?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Entre em contato agora mesmo para um orçamento sem compromisso e resolva seu problema de entupimento hoje!
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

export default ServicesPage;
