import React, { useState, useEffect } from 'react';
import { X, Phone, ArrowRight } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openWhatsApp = () => {
    const phoneNumber = '5511965316163';
    const message = 'Olá! Gostaria de fazer uma simulação para conquistar minha casa própria.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-[#010133]/95 backdrop-blur-lg shadow-2xl animate-slide-in-down' : 'bg-[#010133]'
    }`}>
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex justify-between items-center py-4 lg:py-6">
          {/* Logo */}
          <div className="flex items-center animate-fade-in-left">
            <img 
              src="https://i.postimg.cc/KvLbH05C/GLIONS-OG.png" 
              alt="G.LIONS" 
              className="h-10 lg:h-14 w-auto hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-10 animate-fade-in-up animate-delay-200">
            <a href="#inicio" className="text-white/90 hover:text-[#DAA520] transition-all duration-300 font-medium text-lg relative group">
              Início
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#DAA520] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#servicos" className="text-white/90 hover:text-[#DAA520] transition-all duration-300 font-medium text-lg relative group">
              Serviços
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#DAA520] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#tipos-consorcio" className="text-white/90 hover:text-[#DAA520] transition-all duration-300 font-medium text-lg relative group">
              Modalidades
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#DAA520] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#como-funciona" className="text-white/90 hover:text-[#DAA520] transition-all duration-300 font-medium text-lg relative group">
              Como Funciona
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#DAA520] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#depoimentos" className="text-white/90 hover:text-[#DAA520] transition-all duration-300 font-medium text-lg relative group">
              Depoimentos
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#DAA520] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#contato" className="text-white/90 hover:text-[#DAA520] transition-all duration-300 font-medium text-lg relative group">
              Contato
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#DAA520] transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4 animate-fade-in-right animate-delay-300">
            <button 
              onClick={openWhatsApp}
              className="btn-primary bg-[#DAA520] hover:bg-[#B8941C] text-white px-8 py-3 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center space-x-2"
            >
              <span>Simular Agora</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-all duration-300 animate-fade-in-right"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X size={28} className="animate-scale-in" />
            ) : (
              <img 
                src="https://i.postimg.cc/YSy3PwRf/menu.png" 
                alt="Menu" 
                className="w-7 h-7 filter invert hover:scale-105 transition-transform duration-300"
              />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <nav className="py-6 space-y-6 border-t border-white/20">
            {['Início', 'Serviços', 'Modalidades', 'Como Funciona', 'Depoimentos', 'Contato'].map((item, index) => (
              <a 
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-').replace('modalidades', 'tipos-consorcio')}`} 
                className={`block text-white/90 hover:text-[#DAA520] transition-all duration-300 font-medium text-lg py-2 hover:translate-x-2 animate-fade-in-left animate-delay-${(index + 1) * 100}`}
              >
                {item}
              </a>
            ))}
            <button 
              onClick={openWhatsApp}
              className="w-full bg-[#DAA520] hover:bg-[#B8941C] text-white px-6 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-2 animate-fade-in-up animate-delay-600"
            >
              <span>Simular Agora</span>
              <ArrowRight size={20} />
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;