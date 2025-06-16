import React, { useEffect, useState } from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.querySelector('footer');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    'Consórcio Imobiliário',
    'Financiamento Imobiliário',
    'Simulação Online',
    'Consultoria Especializada'
  ];

  const links = [
    'Sobre Nós',
    'Como Funciona',
    'Depoimentos',
    'Central de Ajuda',
    'Trabalhe Conosco',
    'Imprensa'
  ];

  const legal = [
    'Política de Privacidade',
    'Termos de Uso',
    'Regulamentos',
    'Ouvidoria'
  ];

  const openWhatsApp = () => {
    const phoneNumber = '5511965316163';
    const message = 'Olá! Gostaria de fazer uma simulação para conquistar minha casa própria.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <footer className="bg-[#010133] text-white relative particles">
      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-6 py-16 lg:py-24">
        <div className="grid lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className={`lg:col-span-1 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <img 
              src="https://i.postimg.cc/KvLbH05C/GLIONS-OG.png" 
              alt="G.LIONS" 
              className="h-12 lg:h-16 w-auto mb-8 hover:scale-105 transition-transform duration-300"
            />
            <p className="text-blue-200 mb-8 leading-relaxed text-lg">
              Há 3 anos ajudando famílias brasileiras a realizarem o sonho da casa própria 
              através de consórcios e financiamentos imobiliários.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              {[Facebook, Instagram, Linkedin, Youtube].map((Icon, index) => (
                <a key={index} href="#" className={`w-12 h-12 bg-blue-800 rounded-xl flex items-center justify-center hover:bg-blue-700 hover:scale-105 transition-all duration-300`}>
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className={`${isVisible ? 'animate-fade-in-up animate-delay-200' : 'opacity-0'}`}>
            <h3 className="text-xl lg:text-2xl font-bold mb-8">Serviços</h3>
            <ul className="space-y-4">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#" className={`text-blue-200 hover:text-white transition-all duration-300 text-lg hover:translate-x-1 inline-block animate-fade-in-left animate-delay-${(index + 1) * 100}`}>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div className={`${isVisible ? 'animate-fade-in-up animate-delay-300' : 'opacity-0'}`}>
            <h3 className="text-xl lg:text-2xl font-bold mb-8">Empresa</h3>
            <ul className="space-y-4">
              {links.map((link, index) => (
                <li key={index}>
                  <a href="#" className={`text-blue-200 hover:text-white transition-all duration-300 text-lg hover:translate-x-1 inline-block animate-fade-in-left animate-delay-${(index + 1) * 100}`}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className={`${isVisible ? 'animate-fade-in-up animate-delay-400' : 'opacity-0'}`}>
            <h3 className="text-xl lg:text-2xl font-bold mb-8">Contato</h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4 hover-lift">
                <div className="w-10 h-10 bg-blue-800 rounded-lg flex items-center justify-center">
                  <Phone size={20} className="text-blue-300" />
                </div>
                <span className="text-blue-200 text-lg hover:text-white transition-colors duration-300">(11) 96531-6163</span>
              </div>
              <div className="flex items-center space-x-4 hover-lift">
                <div className="w-10 h-10 bg-blue-800 rounded-lg flex items-center justify-center">
                  <Mail size={20} className="text-blue-300" />
                </div>
                <span className="text-blue-200 text-lg hover:text-white transition-colors duration-300">contato@glions.com.br</span>
              </div>
              <div className="flex items-start space-x-4 hover-lift">
                <div className="w-10 h-10 bg-blue-800 rounded-lg flex items-center justify-center mt-1">
                  <MapPin size={20} className="text-blue-300" />
                </div>
                <span className="text-blue-200 text-lg hover:text-white transition-colors duration-300">
                  R. Topázio, 76 - Vila Mariana<br />
                  São Paulo - SP<br />
                  CEP: 04105-060
                </span>
              </div>
            </div>

            {/* Business Hours */}
            <div className="mt-8 p-6 bg-blue-900 rounded-2xl hover-lift">
              <h4 className="font-bold mb-3 text-lg">Horário de Atendimento</h4>
              <p className="text-blue-200">
                Segunda a Sexta: 8h às 18h<br />
                Sábado: 8h às 12h
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Legal Footer */}
      <div className="border-t border-blue-800">
        <div className="container mx-auto px-4 lg:px-6 py-8">
          <div className={`flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0 ${isVisible ? 'animate-fade-in-up animate-delay-600' : 'opacity-0'}`}>
            <div className="flex flex-wrap gap-6 lg:gap-8">
              {legal.map((item, index) => (
                <a key={index} href="#" className="text-blue-300 hover:text-white transition-all duration-300 hover:underline hover:scale-105">
                  {item}
                </a>
              ))}
            </div>
            <div className="text-blue-300 text-center lg:text-right">
              <p>&copy; 2024 G.LIONS. Todos os direitos reservados.</p>
              <p className="mt-1 text-sm">CNPJ: 51.859.818/0001-03 | G. LIONS REPRESENTACAO COMERCIAL LTDA - ME</p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp CTA - Apenas WhatsApp */}
      <div className="fixed bottom-6 right-6 z-50 no-print">
        <button 
          onClick={openWhatsApp}
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-4 rounded-full font-semibold shadow-2xl flex items-center space-x-3 transition-all duration-300 hover:scale-105"
        >
          <Phone size={24} />
          <span className="hidden sm:inline">WhatsApp</span>
        </button>
      </div>
    </footer>
  );
};

export default Footer;