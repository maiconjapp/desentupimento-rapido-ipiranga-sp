
import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { useToast } from '../hooks/use-toast';

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Desentupimento de Pia',
    neighborhood: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format message for WhatsApp
    const message = encodeURIComponent(
      `Nome: ${formData.name}\nTelefone: ${formData.phone}\nEmail: ${formData.email}\nServiço: ${formData.service}\nBairro: ${formData.neighborhood}\nMensagem: ${formData.message}`
    );
    
    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/5511977480538?text=${message}`, '_blank');
    
    toast({
      title: "Mensagem enviada!",
      description: "Em breve entraremos em contato com você.",
    });
    
    // Reset form
    setFormData({
      name: '',
      phone: '',
      email: '',
      service: 'Desentupimento de Pia',
      neighborhood: '',
      message: ''
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">Nome</Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Seu nome"
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="phone">Telefone</Label>
          <Input
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="(11) 99999-9999"
            required
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="seu@email.com"
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="service">Serviço</Label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full h-10 px-3 py-2 border border-input rounded-md bg-background text-sm"
            required
          >
            <option value="Desentupimento de Pia">Desentupimento de Pia</option>
            <option value="Desentupimento de Vaso">Desentupimento de Vaso</option>
            <option value="Desentupimento de Ralo">Desentupimento de Ralo</option>
            <option value="Outro">Outro</option>
          </select>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="neighborhood">Bairro</Label>
          <Input
            id="neighborhood"
            name="neighborhood"
            value={formData.neighborhood}
            onChange={handleChange}
            placeholder="Seu bairro"
            required
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="message">Mensagem</Label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Descreva seu problema"
          rows={4}
          required
        />
      </div>
      
      <Button type="submit" className="w-full">Enviar Mensagem</Button>
    </form>
  );
};

export default ContactForm;
