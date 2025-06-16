import React, { useEffect, useState } from 'react';
import { Home, CreditCard, Calculator, Users, Shield, Clock, ArrowRight, CheckCircle } from 'lucide-react';

const Services = () => {
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

    const element = document.getElementById('servicos');
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

  const services = [
    {
      icon: Home,
      title: 'Consórcio Imobiliário',
      description: 'A forma mais inteligente de conquistar sua casa própria. Sem juros, com parcelas fixas e total flexibilidade.',
      features: ['Sem juros bancários', 'Parcelas que não aumentam', 'Use seu FGTS', 'Contemplação garantida'],
      highlight: 'Sem Juros',
      color: 'blue',
      benefit: 'Economia de até 40% comparado ao financiamento'
    },
    {
      icon: CreditCard,
      title: 'Financiamento Imobiliário',
      description: 'Para quem tem pressa e quer sair do aluguel agora. Aprovação rápida e condições especiais.',
      features: ['Aprovação em 48h', 'Use FGTS como entrada', 'Até 35 anos para pagar', 'Taxas competitivas'],
      highlight: 'Aprovação Rápida',
      color: 'green',
      benefit: 'Saia do aluguel em até 60 dias'
    },
    {
      icon: Calculator,
      title: 'Simulação Gratuita',
      description: 'Descubra qual a melhor opção para seu perfil. Compare consórcio vs financiamento sem compromisso.',
      features: ['100% gratuita', 'Resultado na hora', 'Sem compromisso', 'Orientação especializada'],
      highlight: 'Gratuito',
      color: 'orange',
      benefit: 'Tome a decisão certa para seu futuro'
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'Empresa Regulamentada',
      description: 'Autorizada pelo Banco Central e com mais de 3 anos de tradição no mercado',
      stats: 'BACEN'
    },
    {
      icon: Users,
      title: 'Atendimento Humanizado',
      description: 'Consultores especializados que entendem sua realidade e te orientam sem pressão',
      stats: '24/7'
    },
    {
      icon: Clock,
      title: 'Processo Transparente',
      description: 'Sem pegadinhas, sem taxas escondidas. Você sabe exatamente o que vai pagar',
      stats: '100%'
    }
  ];

  return (
    <section id="servicos" className="py-16 lg:py-24 bg-gray-50 particles">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className={`text-center mb-12 lg:mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6 hover-lift">
            <span>Nossas Soluções</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
            Qual é a melhor opção para você?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Cada pessoa tem uma realidade financeira diferente. Por isso oferecemos 
            soluções personalizadas para que você conquiste sua casa própria da melhor forma.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 mb-16 lg:mb-20">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className={`bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 group relative overflow-hidden hover-lift ${isVisible ? `animate-fade-in-up animate-delay-${(index + 1) * 200}` : 'opacity-0'}`}
              >
                {/* Highlight Badge */}
                <div className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-orange-500 text-white px-2 sm:px-3 py-1 rounded-full text-xs font-semibold">
                  {service.highlight}
                </div>

                <div className="relative z-10">
                  <div className={`w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 bg-${service.color}-100 rounded-2xl flex items-center justify-center mb-6 sm:mb-8 group-hover:scale-105 transition-all duration-300`}>
                    <Icon className={`text-${service.color}-600`} size={32} />
                  </div>
                  
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-[#010133] transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base lg:text-lg">
                    {service.description}
                  </p>

                  {/* Benefit Highlight */}
                  <div className="bg-green-50 border border-green-200 rounded-xl p-3 sm:p-4 mb-6 sm:mb-8 hover-lift">
                    <p className="text-green-800 font-semibold text-center text-xs sm:text-sm">
                      💡 {service.benefit}
                    </p>
                  </div>
                  
                  <ul className="space-y-3 sm:space-y-4 mb-8 sm:mb-10">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className={`flex items-center space-x-2 sm:space-x-3 animate-fade-in-left animate-delay-${(idx + 1) * 100}`}>
                        <CheckCircle className={`text-${service.color}-500`} size={16} />
                        <span className="text-gray-700 font-medium text-sm sm:text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button 
                    onClick={openWhatsApp}
                    className="w-full btn-primary bg-[#010133] hover:bg-blue-900 text-white py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-base lg:text-lg transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <span>Simular Agora</span>
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Benefits */}
        <div className={`bg-white rounded-3xl p-6 sm:p-8 lg:p-12 shadow-xl hover-lift ${isVisible ? 'animate-fade-in-up animate-delay-600' : 'opacity-0'}`}>
          <div className="text-center mb-8 lg:mb-12">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
              Por que a G.LIONS é diferente?
            </h3>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
              Não somos apenas uma empresa de consórcios. Somos parceiros na realização do seu sonho.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 mb-8 sm:mb-12">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className={`text-center group hover-lift ${isVisible ? `animate-fade-in-up animate-delay-${(index + 7) * 100}` : 'opacity-0'}`}>
                  <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-[#010133] rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-105 transition-all duration-300">
                    <Icon className="text-white" size={32} />
                  </div>
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold text-orange-500 mb-2">{benefit.stats}</div>
                  <h4 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-[#010133] transition-colors duration-300">
                    {benefit.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base lg:text-lg">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <button 
              onClick={scrollToContact}
              className="btn-primary bg-[#010133] hover:bg-blue-900 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-base lg:text-lg transition-all duration-300 flex items-center space-x-2 mx-auto"
            >
              <span>Saiba Mais</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;