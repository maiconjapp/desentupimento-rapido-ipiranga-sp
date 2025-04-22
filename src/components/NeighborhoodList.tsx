
import React from 'react';
import { Link } from 'react-router-dom';

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

const NeighborhoodList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
      {neighborhoods.map((neighborhood) => (
        <Link
          key={neighborhood}
          to={`/bairros/${neighborhood.toLowerCase().replace(/\s+/g, '-')}`}
          className="text-brand-blue hover:text-brand-orange transition-colors"
        >
          {neighborhood}
        </Link>
      ))}
    </div>
  );
};

export default NeighborhoodList;
