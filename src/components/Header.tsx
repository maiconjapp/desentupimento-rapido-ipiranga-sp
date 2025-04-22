
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-black shadow-md sticky top-0 z-50 border-b border-gray-800">
      <div className="container-custom flex justify-between items-center py-4">
        <Link to="/" className="flex items-center">
          <h1 className="text-xl md:text-2xl font-bold flex items-center">
            <span className="text-brand-orange mr-2">Magnavita</span>
            <span className="text-white text-sm md:text-base">Marido de Aluguel</span>
          </h1>
        </Link>

        <div className="hidden md:flex items-center space-x-6">
          <nav>
            <ul className="flex space-x-6">
              <li>
                <Link to="/" className="text-white hover:text-brand-orange transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="text-white hover:text-brand-orange transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-white hover:text-brand-orange transition-colors">
                  Sobre
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-white hover:text-brand-orange transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </nav>
          
          <a href="tel:+5511977480538" className="flex items-center text-brand-orange hover:text-white transition-colors">
            <Phone className="h-5 w-5 mr-2" />
            <span className="font-medium">(11) 97748-0538</span>
          </a>
        </div>

        <div className="md:hidden flex items-center">
          <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Menu" className="text-white">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-black border-t border-gray-800">
          <nav className="container-custom py-4">
            <ul className="space-y-4">
              <li>
                <Link 
                  to="/" 
                  className="block text-white hover:text-brand-orange transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Início
                </Link>
              </li>
              <li>
                <Link 
                  to="/servicos" 
                  className="block text-white hover:text-brand-orange transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Serviços
                </Link>
              </li>
              <li>
                <Link 
                  to="/sobre" 
                  className="block text-white hover:text-brand-orange transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sobre
                </Link>
              </li>
              <li>
                <Link 
                  to="/contato" 
                  className="block text-white hover:text-brand-orange transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contato
                </Link>
              </li>
              <li>
                <a 
                  href="tel:+5511977480538" 
                  className="flex items-center text-brand-orange hover:text-white transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Phone className="h-5 w-5 mr-2" />
                  <span className="font-medium">(11) 97748-0538</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
