import React, { useEffect, useState } from 'react';
import { FileText, Search, CheckCircle, Key, ArrowRight } from 'lucide-react';

const HowItWorks = () => {
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

    const element = document.getElementById('como-funciona');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const openWhatsApp = () => {
    const phoneNumber = '5511965316163';
    const message = 'Olá! Gostaria de fazer uma simulação para conquistar minha casa própria.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const steps = [
    {
      icon: FileText,
      number: '01',
      title: 'Simulação Gratuita',
      description: 'Conte-nos sobre seus sonhos e sua realidade financeira. Nossa simulação mostra exatamente quanto você vai pagar.',
      details: ['Sem compromisso', 'Resultado na hora', 'Orientação personalizada']
    },
    {
      icon: Search,
      number: '02',
      title: 'Análise Personalizada',
      description: 'Nossos especialistas analisam seu perfil e encontram a melhor solução para sua realidade.',
      details: ['Consultoria gratuita', 'Análise completa', 'Orientação sem pressão']
    },
    {
      icon: CheckCircle,
      number: '03',
      title: 'Aprovação Simplificada',
      description: 'Documentação mínima e processo 100% transparente. Sem burocracias desnecessárias.',
      details: ['Poucos documentos', 'Processo claro', 'Aprovação rápida']
    },
    {
      icon: Key,
      number: '04',
      title: 'Sonho Realizado',
      description: 'Você recebe seu crédito e finalmente conquista sua casa própria. Nosso suporte continua até o fim.',
      details: ['Crédito liberado', 'Suporte contínuo', 'Casa própria garantida']
    }
  ];

  return (
    <section id="como-funciona" className="py-16 lg:py-24 bg-white particles">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className={`text-center mb-12 lg:mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="inline-flex items-center space-x-2 bg-[#DAA520]/10 text-[#DAA520] px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6 hover-lift border border-[#DAA520]/20">
            <span>Processo Simples</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
            Como você conquista sua casa própria
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Desenvolvemos um processo simples e transparente para que você realize seu sonho 
            sem complicações. Veja como é fácil começar hoje mesmo.
          </p>
        </div>

        {/* Steps */}
        <div className="relative mb-16 lg:mb-20">
          {/* Progress Line - Desktop */}
          <div className="hidden lg:block absolute top-32 left-0 right-0 h-1 bg-[#E5E5EA] overflow-hidden">
            <div className={`h-1 bg-[#010133] transition-all duration-2000 ${isVisible ? 'w-full' : 'w-0'}`}></div>
          </div>

          <div className="grid lg:grid-cols-4 gap-6 lg:gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  {/* Mobile Arrow */}
                  {index < steps.length - 1 && (
                    <div className={`lg:hidden absolute -bottom-3 left-1/2 transform -translate-x-1/2 text-[#E5E5EA] transition-all duration-500 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${(index + 1) * 200}ms` }}>
                      <ArrowRight size={20} className="rotate-90" />
                    </div>
                  )}

                  {/* Step Card */}
                  <div className={`bg-white border-2 border-[#E5E5EA] rounded-3xl p-6 lg:p-8 text-center hover:border-[#010133] hover:shadow-2xl transition-all duration-500 group hover-lift ${isVisible ? `animate-fade-in-up animate-delay-${(index + 1) * 200}` : 'opacity-0'}`}>
                    <div className="relative z-10">
                      {/* Step Number & Icon */}
                      <div className="relative mb-6 sm:mb-8">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-[#010133] rounded-2xl flex items-center justify-center mx-auto relative z-10 group-hover:scale-105 transition-all duration-300">
                          <Icon className="text-white" size={24} />
                        </div>
                        <div className="absolute -top-2 -right-2 w-8 h-8 sm:w-10 sm:h-10 bg-[#DAA520] rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base">
                          {step.number}
                        </div>
                      </div>

                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-[#010133] transition-colors duration-300">
                        {step.title}
                      </h3>

                      <p className="text-gray-600 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base lg:text-lg">
                        {step.description}
                      </p>

                      <ul className="space-y-2 sm:space-y-3">
                        {step.details.map((detail, idx) => (
                          <li key={idx} className={`flex items-center justify-center space-x-2 animate-fade-in-left animate-delay-${(idx + 1) * 100}`}>
                            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#DAA520] rounded-full"></div>
                            <span className="text-gray-700 font-medium text-xs sm:text-sm">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className={`text-center ${isVisible ? 'animate-fade-in-up animate-delay-800' : 'opacity-0'}`}>
          <div className="bg-[#010133] rounded-3xl p-6 sm:p-8 lg:p-12 text-white relative overflow-hidden hover-lift">
            <div className="relative z-10">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 animate-fade-in-up">
                Pare de pagar aluguel e comece a investir no seu futuro
              </h3>
              <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 lg:mb-10 opacity-90 max-w-2xl mx-auto animate-fade-in-up animate-delay-200">
                Cada mês que passa pagando aluguel é dinheiro que você nunca mais vai ver. 
                Que tal começar a construir seu patrimônio hoje mesmo?
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 justify-center">
                <button 
                  onClick={openWhatsApp}
                  className="btn-primary bg-[#DAA520] hover:bg-[#B8941C] text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-xl font-semibold text-sm sm:text-base lg:text-lg transition-all duration-300 flex items-center justify-center space-x-2 animate-fade-in-up animate-delay-300"
                >
                  <span>Quero Parar de Pagar Aluguel</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                <button 
                  onClick={scrollToContact}
                  className="border-2 border-white text-white hover:bg-white hover:text-[#010133] px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-xl font-semibold text-sm sm:text-base lg:text-lg transition-all duration-300 animate-fade-in-up animate-delay-400"
                >
                  Falar com Especialista
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;