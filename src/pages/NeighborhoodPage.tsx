
import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Droplet, SquareAsterisk, WashingMachine } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const neighborhoods = [
  "Bosque da Saúde", "Vila da Saúde", "Chácara Inglesa", 
  "Chácara Klabin", "Ipiranga", "Vila Mariana", 
  "Jardim Vila Mariana", "Vila Dom Pedro I", 
  "Sacomã", "Cambuci", "Vila Monumento", 
  "Jardim da Glória", "Praça da Árvore", 
  "Mirandópolis", "Vila Brasílio Machado", 
  "Vila Nair", "Vila Vera", "Vila Moraes", 
  "Vila das Mercês", "Vila Moinho Velho", 
  "Vila Gumercindo", "Vila Guarani", "Cursino", 
  "Vila Firmiano Pinto", "Vila São José", 
  "Alto do Ipiranga", "Aclimação"
];

const getNeighborhoodFromParam = (param: string): string => {
  // Convert param to a standard format
  const formattedParam = param
    .toLowerCase()
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  
  // Find the matching neighborhood
  const neighborhood = neighborhoods.find(
    n => n.toLowerCase() === formattedParam.toLowerCase()
  );
  
  return neighborhood || 'Ipiranga';
};

const NeighborhoodPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const neighborhoodName = getNeighborhoodFromParam(slug || '');
  
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container-custom text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Desentupimento em {neighborhoodName} - SP
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Serviços de desentupimento de pia, vaso e ralo com atendimento rápido em {neighborhoodName} e região.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center">
            <WhatsAppButton neighborhood={neighborhoodName} className="text-lg" />
            <Button variant="outline" className="text-white border-white hover:bg-white hover:text-brand-blue text-lg" asChild>
              <a href="tel:+5511977480538">
                Ligar Agora
              </a>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-12">
            {/* Main Content */}
            <div className="md:w-2/3">
              <h2 className="text-2xl font-bold mb-4">Desentupimento Rápido em {neighborhoodName}</h2>
              
              <p className="text-lg text-brand-gray mb-6">
                A Magnavita Marido de Aluguel oferece serviços especializados de desentupimento em {neighborhoodName}, com atendimento rápido e eficiente para residências e comércios da região.
              </p>
              
              <p className="text-lg text-brand-gray mb-6">
                Nossos profissionais são treinados para resolver qualquer tipo de entupimento, utilizando equipamentos modernos e técnicas avançadas que garantem a solução definitiva do problema sem causar danos às suas instalações.
              </p>
              
              <h3 className="text-xl font-semibold mb-3">Serviços de Desentupimento em {neighborhoodName}:</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                <div className="bg-brand-lightGray p-6 rounded-lg">
                  <div className="flex justify-center mb-4">
                    <Droplet className="h-10 w-10 text-brand-blue" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-center">Desentupimento de Pia</h4>
                  <p className="text-brand-gray text-center">
                    Resolvemos entupimentos em pias de cozinha e banheiro com rapidez e eficiência.
                  </p>
                </div>
                
                <div className="bg-brand-lightGray p-6 rounded-lg">
                  <div className="flex justify-center mb-4">
                    <SquareAsterisk className="h-10 w-10 text-brand-blue" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-center">Desentupimento de Vaso</h4>
                  <p className="text-brand-gray text-center">
                    Desentupimos vasos sanitários sem quebrar a louça, de forma rápida e higiênica.
                  </p>
                </div>
                
                <div className="bg-brand-lightGray p-6 rounded-lg">
                  <div className="flex justify-center mb-4">
                    <WashingMachine className="h-10 w-10 text-brand-blue" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-center">Desentupimento de Ralo</h4>
                  <p className="text-brand-gray text-center">
                    Eliminamos entupimentos em ralos de banheiros, box e áreas externas.
                  </p>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-3">Por que escolher a Magnavita para desentupimento em {neighborhoodName}?</h3>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-blue mr-2 mt-1">
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
                    <path d="m9 12 2 2 4-4"/>
                  </svg>
                  <span className="text-brand-gray">
                    <strong>Atendimento rápido em {neighborhoodName}</strong> - Chegamos em até 60 minutos após o seu contato.
                  </span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-blue mr-2 mt-1">
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
                    <path d="m9 12 2 2 4-4"/>
                  </svg>
                  <span className="text-brand-gray">
                    <strong>Equipamentos modernos</strong> - Utilizamos máquinas desentupidoras profissionais para resolver qualquer tipo de entupimento.
                  </span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-blue mr-2 mt-1">
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
                    <path d="m9 12 2 2 4-4"/>
                  </svg>
                  <span className="text-brand-gray">
                    <strong>Orçamento transparente</strong> - Sem surpresas ou custos adicionais após o serviço.
                  </span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-blue mr-2 mt-1">
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
                    <path d="m9 12 2 2 4-4"/>
                  </svg>
                  <span className="text-brand-gray">
                    <strong>Profissionais experientes</strong> - Equipe especializada em desentupimento na região de {neighborhoodName}.
                  </span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-blue mr-2 mt-1">
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
                    <path d="m9 12 2 2 4-4"/>
                  </svg>
                  <span className="text-brand-gray">
                    <strong>Garantia de serviço</strong> - Nosso trabalho tem garantia para sua total segurança e satisfação.
                  </span>
                </li>
              </ul>
              
              <p className="text-lg text-brand-gray mb-6">
                Atendemos em todo o bairro de {neighborhoodName} e regiões próximas. Entre em contato agora mesmo para resolver seu problema de entupimento com rapidez e qualidade.
              </p>
              
              <div className="bg-brand-lightGray p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold mb-3">Desentupimento em {neighborhoodName} - Perguntas Frequentes</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-1">Quanto tempo vocês levam para chegar em {neighborhoodName}?</h4>
                    <p className="text-brand-gray">Nosso tempo médio de chegada em {neighborhoodName} é de até 60 minutos após o seu contato, dependendo da disponibilidade e tráfego.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-1">Qual o valor do desentupimento em {neighborhoodName}?</h4>
                    <p className="text-brand-gray">O valor varia de acordo com o tipo e complexidade do serviço. Entre em contato para um orçamento gratuito e sem compromisso.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-1">Vocês trabalham aos finais de semana em {neighborhoodName}?</h4>
                    <p className="text-brand-gray">Sim, mediante agendamento prévio, atendemos emergências de desentupimento também aos finais de semana.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-1">Oferecem garantia para desentupimento em {neighborhoodName}?</h4>
                    <p className="text-brand-gray">Sim, todos os nossos serviços em {neighborhoodName} contam com garantia, demonstrando a confiança na qualidade do nosso trabalho.</p>
                  </div>
                </div>
              </div>
              
              <p className="text-brand-gray mb-6">
                Saiba mais no site oficial da <a href="https://magnavitamaridodealuguel.com/pt" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:text-brand-orange transition-colors">Magnavita Marido de Aluguel</a>.
              </p>
              
              <div className="flex justify-center sm:justify-start space-x-4">
                <WhatsAppButton neighborhood={neighborhoodName}>
                  Chamar no WhatsApp
                </WhatsAppButton>
                <Button variant="outline" className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white" asChild>
                  <a href="tel:+5511977480538">
                    Ligar Agora
                  </a>
                </Button>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="md:w-1/3">
              <div className="bg-brand-lightGray p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold mb-4">Contato Rápido</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-blue mr-3">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                    <a href="tel:+5511977480538" className="text-brand-blue hover:text-brand-orange transition-colors">
                      (11) 97748-0538
                    </a>
                  </div>
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-blue mr-3 mt-1">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                    <address className="not-italic text-brand-gray">
                      Rua Dom Pero Leitão, 137<br />
                      04134-070 São Paulo
                    </address>
                  </div>
                </div>
                <div className="mt-6">
                  <WhatsAppButton neighborhood={neighborhoodName} className="w-full" />
                </div>
              </div>
              
              <div className="bg-brand-lightGray p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold mb-4">Bairros Próximos a {neighborhoodName}</h3>
                <ul className="space-y-2">
                  {neighborhoods
                    .filter(n => n !== neighborhoodName)
                    .slice(0, 8)
                    .map(n => (
                      <li key={n}>
                        <Link 
                          to={`/bairros/${n.toLowerCase().replace(/\s+/g, '-')}`}
                          className="text-brand-blue hover:text-brand-orange transition-colors"
                        >
                          Desentupimento em {n}
                        </Link>
                      </li>
                    ))
                  }
                </ul>
                <div className="mt-4">
                  <Link 
                    to="/bairros" 
                    className="text-brand-orange hover:text-brand-blue transition-colors font-medium"
                  >
                    Ver todos os bairros →
                  </Link>
                </div>
              </div>
              
              <div className="bg-brand-lightGray p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Nossos Serviços</h3>
                <ul className="space-y-3">
                  <li>
                    <Link 
                      to="/servicos#pia" 
                      className="flex items-center text-brand-blue hover:text-brand-orange transition-colors"
                    >
                      <Droplet className="h-5 w-5 mr-2" />
                      <span>Desentupimento de Pia</span>
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/servicos#vaso" 
                      className="flex items-center text-brand-blue hover:text-brand-orange transition-colors"
                    >
                      <SquareAsterisk className="h-5 w-5 mr-2" />
                      <span>Desentupimento de Vaso</span>
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/servicos#ralo" 
                      className="flex items-center text-brand-blue hover:text-brand-orange transition-colors"
                    >
                      <WashingMachine className="h-5 w-5 mr-2" />
                      <span>Desentupimento de Ralo</span>
                    </Link>
                  </li>
                </ul>
                <div className="mt-6">
                  <Button asChild className="w-full">
                    <Link to="/servicos">
                      Ver Todos os Serviços
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <WhatsAppButton floating neighborhood={neighborhoodName} />
      <Footer />
    </>
  );
};

export default NeighborhoodPage;
