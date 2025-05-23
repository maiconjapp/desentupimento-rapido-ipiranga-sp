import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Instagram } from 'lucide-react';

const Footer = () => {
  const neighborhoods = ["Ipiranga", "Vila Mariana", "Sacomã", "Cursino", "Cambuci", "Aclimação", "Bosque da Saúde", "Vila da Saúde"];
  return <footer className="bg-brand-blue text-white">
      <div className="container-custom py-12 bg-slate-50">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-brand-black">
          <div>
            <h3 className="text-xl font-bold mb-4 text-brand-orange">Magnavita Marido de Aluguel</h3>
            <p className="mb-4 text-brand-black">
              Especialistas em desentupimento rápido de pia, vaso e ralo em toda a região do Ipiranga e Zona Sul de SP.
            </p>
            <div className="flex items-center mb-2 bg-brand-black">
              <Phone className="h-5 w-5 mr-2 text-brand-orange" />
              <a href="tel:+5511977480538" className="text-brand-orange hover:text-orange-600 transition-colors">
                (11) 97748-0538
              </a>
            </div>
            <div className="flex items-start">
              <MapPin className="h-5 w-5 mr-2 mt-1 text-brand-orange" />
              <address className="not-italic text-brand-orange">
                Rua Dom Pero Leitão, 137<br />
                04134-070 São Paulo
              </address>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Links Rápidos</h3>
            <ul className="space-y-2 bg-brand-black">
              <li>
                <Link to="/" className="text-brand-orange hover:text-orange-600 transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="text-brand-orange hover:text-orange-600 transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-brand-orange hover:text-orange-600 transition-colors">
                  Sobre
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-brand-orange hover:text-orange-600 transition-colors">
                  Contato
                </Link>
              </li>
              <li>
                <a href="https://magnavitamaridodealuguel.com/pt" target="_blank" rel="noopener noreferrer" className="text-brand-orange hover:text-orange-600 transition-colors">
                  Site Oficial
                </a>
              </li>
              <li>
                <a 
                  href="https://www.instagram.com/magnavita_marido_de_aluguel/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center text-brand-orange hover:text-orange-600 transition-colors"
                >
                  <Instagram className="h-5 w-5 mr-2" />
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-blue-700 mt-8 pt-6 text-sm text-center md:text-left md:flex md:justify-between bg-brand-black">
          <p className="text-brand-orange">© 2025 Magnavita Marido de Aluguel. Todos os direitos reservados.</p>
          <p className="mt-2 md:mt-0">
            <a href="https://magnavitamaridodealuguel.com/pt" target="_blank" rel="noopener noreferrer" className="text-brand-orange underline hover:text-orange-600 transition-colors">
              magnavitamaridodealuguel.com
            </a>
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;
