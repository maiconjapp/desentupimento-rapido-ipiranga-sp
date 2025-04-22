
import React from 'react';
import { Wrench } from 'lucide-react';

const OtherServices = () => {
  return (
    <section className="section bg-brand-lightGray">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-black">Outros Serviços</h2>
          <p className="text-lg text-black max-w-2xl mx-auto">
            Além dos serviços principais de desentupimento, também oferecemos:
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <div className="bg-brand-blue/10 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                <Wrench className="h-6 w-6 text-brand-blue" />
              </div>
              <h3 className="text-xl font-semibold text-black">Limpeza de Caixas d'Água</h3>
            </div>
            <p className="text-black">
              Realizamos limpeza e higienização completa de caixas d'água residenciais e comerciais, seguindo todas as normas sanitárias.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <div className="bg-brand-blue/10 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                <Wrench className="h-6 w-6 text-brand-blue" />
              </div>
              <h3 className="text-xl font-semibold text-black">Manutenção Hidráulica</h3>
            </div>
            <p className="text-black">
              Consertos e reparos em vazamentos, troca de registros, válvulas, torneiras e tubulações com qualidade e garantia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OtherServices;
