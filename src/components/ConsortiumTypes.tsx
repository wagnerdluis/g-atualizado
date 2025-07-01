import React, { useEffect, useState } from 'react';
import { Car, Home, Truck, Wrench, CreditCard, ArrowRight, CheckCircle, Banknote, TrendingUp, Building, Zap } from 'lucide-react';

const ConsortiumTypes = () => {
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

    const element = document.getElementById('tipos-consorcio');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const openWhatsApp = () => {
    const phoneNumber = '5511965316163';
    const message = 'Olá! Gostaria de saber mais sobre os tipos de consórcios e financiamentos disponíveis.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const consortiumTypes = [
    {
      icon: Car,
      title: 'Consórcio de Autos',
      description: 'Conquiste seu carro novo ou usado sem juros. Parcelas fixas que cabem no seu orçamento.',
      features: ['Carros 0km e seminovos', 'Sem juros bancários', 'Use FGTS como lance', 'Contemplação garantida'],
      color: '[#010133]',
      highlight: 'Sem Juros'
    },
    {
      icon: Home,
      title: 'Consórcio Imobiliário',
      description: 'Sua casa própria sem juros abusivos. A forma mais inteligente de sair do aluguel.',
      features: ['Casas e apartamentos', 'Parcelas que não aumentam', 'Use FGTS como entrada', 'Sem análise de renda rigorosa'],
      color: '[#DAA520]',
      highlight: 'Mais Popular'
    },
    {
      icon: Wrench,
      title: 'Consórcio de Maquinários',
      description: 'Equipamentos para sua empresa crescer. Invista no seu negócio sem comprometer o capital.',
      features: ['Máquinas industriais', 'Equipamentos agrícolas', 'Ferramentas profissionais', 'Condições especiais PJ'],
      color: '[#DAA520]',
      highlight: 'Pessoa Jurídica'
    },
    {
      icon: Truck,
      title: 'Consórcio de Pesados',
      description: 'Caminhões, tratores e veículos pesados para impulsionar seu trabalho e renda.',
      features: ['Caminhões e carretas', 'Tratores e colheitadeiras', 'Máquinas de construção', 'Financiamento para autônomos'],
      color: '[#010133]',
      highlight: 'Para Autônomos'
    }
  ];

  const financingTypes = [
    {
      icon: Banknote,
      title: 'Financiamento de Autos',
      description: 'Aprovação rápida para quem tem pressa. Saia dirigindo seu carro novo hoje mesmo.',
      features: ['Aprovação em 24h', 'Até 60x para pagar', 'Taxa competitiva', 'Sem entrada em alguns casos'],
      color: '[#010133]',
      highlight: 'Aprovação Rápida'
    },
    {
      icon: Building,
      title: 'Financiamento Imobiliário',
      description: 'Casa própria agora! Condições especiais e processo simplificado.',
      features: ['Até 35 anos para pagar', 'Use FGTS como entrada', 'Taxas a partir de 8,99% a.a.', 'Aprovação em 48h'],
      color: '[#DAA520]',
      highlight: 'Melhor Taxa'
    },
    {
      icon: TrendingUp,
      title: 'Financiamento de Maquinários',
      description: 'Capital de giro para sua empresa. Equipamentos novos para aumentar a produtividade.',
      features: ['Linha PJ especializada', 'Até 48x para pagar', 'Sem garantia real', 'Análise diferenciada'],
      color: '[#DAA520]',
      highlight: 'Pessoa Jurídica'
    },
    {
      icon: Zap,
      title: 'Financiamento de Pesados',
      description: 'Veículos pesados com condições especiais para profissionais autônomos.',
      features: ['Caminhoneiros e frotistas', 'Entrada facilitada', 'Parcelas que cabem na renda', 'Aprovação simplificada'],
      color: '[#010133]',
      highlight: 'Para Autônomos'
    }
  ];

  return (
    <section id="tipos-consorcio" className="py-12 lg:py-16 bg-[#E5E5EA]/30 particles">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className={`text-center mb-8 lg:mb-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="inline-flex items-center space-x-2 bg-[#DAA520]/10 text-[#DAA520] px-3 py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 hover-lift border border-[#DAA520]/20">
            <CreditCard size={14} />
            <span>Nossas Modalidades</span>
          </div>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
            Soluções completas para realizar seus sonhos
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Seja qual for seu objetivo - casa própria, carro novo, equipamentos para trabalhar ou expandir seu negócio - 
            temos a solução ideal para sua realidade financeira.
          </p>
        </div>

        {/* Comparison Table Header */}
        <div className={`grid lg:grid-cols-2 gap-6 lg:gap-8 mb-12 lg:mb-16 ${isVisible ? 'animate-fade-in-up animate-delay-200' : 'opacity-0'}`}>
          <div className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg border-2 border-[#010133]/20 hover-lift">
            <div className="text-center mb-6">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#010133]/10 border border-[#010133]/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Home className="text-[#010133]" size={20} />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3">Consórcios</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4">
                A forma mais inteligente de conquistar seus objetivos. Você paga apenas o valor do bem, 
                sem juros bancários e com parcelas fixas.
              </p>
              <div className="bg-[#DAA520]/10 border border-[#DAA520]/20 rounded-xl p-3">
                <div className="text-[#DAA520] font-bold text-sm sm:text-base">✓ Sem Juros Bancários</div>
                <div className="text-[#DAA520]/80 text-xs sm:text-sm">Economia de até 40% comparado ao financiamento</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg border-2 border-[#DAA520]/20 hover-lift">
            <div className="text-center mb-6">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#DAA520]/10 border border-[#DAA520]/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <CreditCard className="text-[#DAA520]" size={20} />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3">Empréstimos e Financiamentos</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4">
                Para quem tem pressa e quer realizar seus objetivos agora. Processo simplificado 
                e aprovação em até 48 horas.
              </p>
              <div className="bg-[#010133]/10 border border-[#010133]/20 rounded-xl p-3">
                <div className="text-[#010133] font-bold text-sm sm:text-base">⚡ Aprovação Rápida</div>
                <div className="text-[#010133]/80 text-xs sm:text-sm">Tenha seu crédito liberado em até 48 horas</div>
              </div>
            </div>
          </div>
        </div>

        {/* Consórcios Section */}
        <div className="mb-12 lg:mb-16">
          <div className={`mb-8 lg:mb-12 ${isVisible ? 'animate-fade-in-up animate-delay-300' : 'opacity-0'}`}>
            <div className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg border border-[#E5E5EA]">
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-3 mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#010133]/10 border border-[#010133]/20 rounded-xl flex items-center justify-center">
                  <Home className="text-[#010133]" size={18} />
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">Consórcios</h3>
                  <p className="text-xs sm:text-sm text-gray-600">Sem juros • Parcelas fixas • Contemplação garantida</p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {consortiumTypes.map((type, index) => {
                  const Icon = type.icon;
                  return (
                    <div 
                      key={index}
                      className="bg-[#E5E5EA]/30 border border-[#E5E5EA] rounded-xl p-4 hover:bg-white hover:shadow-md hover:border-[#010133] transition-all duration-300 group relative"
                    >
                      {/* Highlight Badge */}
                      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                        <div className="bg-[#010133] text-white px-2 py-1 rounded-full text-xs font-semibold whitespace-nowrap">
                          {type.highlight}
                        </div>
                      </div>

                      <div className="text-center pt-3">
                        {/* Icon */}
                        <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-${type.color}/10 border border-${type.color}/20 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-105 transition-all duration-300`}>
                          <Icon className={`text-${type.color}`} size={16} />
                        </div>
                        
                        {/* Title */}
                        <h4 className="text-sm sm:text-base font-bold text-gray-900 mb-2 group-hover:text-[#010133] transition-colors duration-300">
                          {type.title}
                        </h4>
                        
                        {/* Description */}
                        <p className="text-gray-600 text-xs mb-3 leading-relaxed">
                          {type.description}
                        </p>
                        
                        {/* Features */}
                        <ul className="space-y-1 text-left">
                          {type.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start space-x-2 text-xs">
                              <CheckCircle className="text-[#DAA520] mt-0.5 flex-shrink-0" size={10} />
                              <span className="text-gray-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Financiamentos Section */}
        <div className="mb-12 lg:mb-16">
          <div className={`mb-8 lg:mb-12 ${isVisible ? 'animate-fade-in-up animate-delay-500' : 'opacity-0'}`}>
            <div className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg border border-[#E5E5EA]">
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-3 mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#DAA520]/10 border border-[#DAA520]/20 rounded-xl flex items-center justify-center">
                  <CreditCard className="text-[#DAA520]" size={18} />
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">Empréstimos e Financiamentos</h3>
                  <p className="text-xs sm:text-sm text-gray-600">Aprovação rápida • Taxas competitivas • Processo simplificado</p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {financingTypes.map((type, index) => {
                  const Icon = type.icon;
                  return (
                    <div 
                      key={index}
                      className="bg-[#E5E5EA]/30 border border-[#E5E5EA] rounded-xl p-4 hover:bg-white hover:shadow-md hover:border-[#010133] transition-all duration-300 group relative"
                    >
                      {/* Highlight Badge */}
                      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                        <div className="bg-[#010133] text-white px-2 py-1 rounded-full text-xs font-semibold whitespace-nowrap">
                          {type.highlight}
                        </div>
                      </div>

                      <div className="text-center pt-3">
                        {/* Icon */}
                        <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-${type.color}/10 border border-${type.color}/20 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-105 transition-all duration-300`}>
                          <Icon className={`text-${type.color}`} size={16} />
                        </div>
                        
                        {/* Title */}
                        <h4 className="text-sm sm:text-base font-bold text-gray-900 mb-2 group-hover:text-[#010133] transition-colors duration-300">
                          {type.title}
                        </h4>
                        
                        {/* Description */}
                        <p className="text-gray-600 text-xs mb-3 leading-relaxed">
                          {type.description}
                        </p>
                        
                        {/* Features */}
                        <ul className="space-y-1 text-left">
                          {type.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start space-x-2 text-xs">
                              <CheckCircle className="text-[#DAA520] mt-0.5 flex-shrink-0" size={10} />
                              <span className="text-gray-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className={`text-center ${isVisible ? 'animate-fade-in-up animate-delay-700' : 'opacity-0'}`}>
          <div className="bg-[#010133] rounded-2xl p-6 lg:p-8 text-white relative overflow-hidden hover-lift">
            <div className="relative z-10">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4">
                Não sabe qual é a melhor opção para você?
              </h3>
              <p className="text-sm sm:text-base lg:text-lg mb-6 opacity-90 max-w-2xl mx-auto">
                Nossos consultores especializados analisam seu perfil e te mostram qual caminho 
                é mais vantajoso para sua realidade financeira.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center">
                <button 
                  onClick={openWhatsApp}
                  className="btn-primary bg-[#DAA520] hover:bg-[#B8941C] text-white px-6 py-3 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Falar com Especialista</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsortiumTypes;