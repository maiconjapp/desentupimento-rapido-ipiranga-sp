
import React, { useState } from 'react';

const ContactForm = () => {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const text = `
      Olá! Gostaria de solicitar um orçamento para desentupimento.
      Nome: ${nome}
      Telefone: ${telefone}
      Mensagem: ${mensagem}
    `.replace(/^\s+|\s+$/gm, '');

    const encoded = encodeURIComponent(text);
    const url = `https://wa.me/5511977480538?text=${encoded}`;
    window.open(url, '_blank');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="nome" className="block text-brand-orange font-semibold mb-1">Nome</label>
        <input
          type="text"
          id="nome"
          value={nome}
          onChange={e => setNome(e.target.value)}
          className="w-full border border-gray-700 bg-gray-800 rounded p-2 text-white"
          required
        />
      </div>
      <div>
        <label htmlFor="telefone" className="block text-brand-orange font-semibold mb-1">Telefone</label>
        <input
          type="tel"
          id="telefone"
          value={telefone}
          onChange={e => setTelefone(e.target.value)}
          className="w-full border border-gray-700 bg-gray-800 rounded p-2 text-white"
          required
        />
      </div>
      <div>
        <label htmlFor="mensagem" className="block text-brand-orange font-semibold mb-1">Mensagem</label>
        <textarea
          id="mensagem"
          value={mensagem}
          onChange={e => setMensagem(e.target.value)}
          className="w-full border border-gray-700 bg-gray-800 rounded p-2 text-white"
          rows={4}
          required
        />
      </div>
      <button
        type="submit"
        className="bg-brand-orange text-white px-4 py-2 rounded hover:bg-orange-600 transition-colors"
      >
        Enviar mensagem
      </button>
    </form>
  );
};

export default ContactForm;
