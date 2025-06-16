import React, { useState, useEffect } from 'react';
import { ArrowRight, Shield, Clock, Users, Play, Star, X } from 'lucide-react';

const Hero = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const openWhatsApp = () => {
    const phoneNumber = '5511965316163';
    const message = 'Olá! Gostaria de fazer uma simulação para conquistar minha casa própria.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const openVideo = () => {
    setShowVideo(true);
  };

  const closeVideo = () => {
    setShowVideo(false);
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center bg-white overflow-hidden hero-animated-bg">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="hero-dots"></div>
      </div>

      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4 animate-fade-in-up">
          <div className="relative w-full max-w-6xl animate-scale-in">
            <button
              onClick={closeVideo}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-all duration-300"
            >
              <X size={32} />
            </button>
            <div className="relative w-full glass-effect rounded-xl overflow-hidden" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/jK5irzqaAfg?autoplay=1"
                title="CONTEMPLAÇÃO EM 5 MESES ( 70 anos de idade) CARTA DE 200 MIL"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 lg:px-6 pt-20 lg:pt-28 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Content */}
          <div className={`space-y-4 lg:space-y-6 text-center lg:text-left ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
            {/* Badge - Centralizado no mobile */}
            <div className="flex justify-center lg:justify-start">
              <div className="inline-flex items-center space-x-2 bg-orange-50 text-orange-700 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold hover-lift">
                <Star className="text-orange-500" size={14} />
                <span>Mais de 300 famílias contempladas</span>
              </div>
            </div>

            <div className="space-y-3 lg:space-y-4">
              <h1 className={`text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight ${isVisible ? 'animate-fade-in-up animate-delay-200' : 'opacity-0'}`}>
                <span className="text-[#010133] block">O caminho inteligente</span>
                da sua casa própria.
              </h1>
              <p className={`text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 ${isVisible ? 'animate-fade-in-up animate-delay-300' : 'opacity-0'}`}>
                Consórcios, financiamentos 
                e orientação especializada para você conquistar o seu sonho do jeito certo.
              </p>
            </div>

            {/* Trust Indicators - Ocultos no mobile */}
            <div className={`hidden lg:flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 justify-center lg:justify-start ${isVisible ? 'animate-fade-in-up animate-delay-400' : 'opacity-0'}`}>
              {[
                { icon: Shield, title: 'Sem Juros', subtitle: 'Pague só o valor do bem', color: 'green' },
                { icon: Clock, title: 'Parcelas Fixas', subtitle: 'Sem surpresas no orçamento', color: 'blue' },
                { icon: Users, title: '3 Anos', subtitle: 'De experiência', color: 'purple' }
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className={`flex items-center space-x-2 sm:space-x-3 hover-lift animate-delay-${(index + 1) * 100} justify-center sm:justify-start`}>
                    <div className={`w-8 h-8 sm:w-10 sm:h-10 bg-${item.color}-100 rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <Icon className={`text-${item.color}-600`} size={16} />
                    </div>
                    <div className="text-left">
                      <div className="font-semibold text-gray-900 text-sm">{item.title}</div>
                      <div className="text-xs text-gray-600">{item.subtitle}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Button - Apenas um botão */}
            <div className={`flex justify-center lg:justify-start ${isVisible ? 'animate-fade-in-up animate-delay-500' : 'opacity-0'}`}>
              <button 
                onClick={openWhatsApp}
                className="btn-primary bg-[#010133] hover:bg-blue-900 text-white px-6 py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-base lg:text-lg flex items-center justify-center space-x-2 transition-all duration-300"
              >
                <span>Quero Minha Simulação</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>

            {/* Stats */}
            <div className={`grid grid-cols-3 gap-3 sm:gap-4 lg:gap-6 pt-4 border-t border-gray-200 ${isVisible ? 'animate-fade-in-up animate-delay-600' : 'opacity-0'}`}>
              {[
                { value: 'R$ 100M+', label: 'Em Créditos' },
                { value: '300+', label: 'Contemplados' },
                { value: '98%', label: 'Satisfação' }
              ].map((stat, index) => (
                <div key={index} className={`text-center hover-lift animate-delay-${(index + 1) * 100}`}>
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold text-[#010133]">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className={`relative ${isVisible ? 'animate-fade-in-right animate-delay-300' : 'opacity-0'}`}>
            <div className="relative z-10">
              <img 
                src="https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Casa dos sonhos"
                className="rounded-3xl shadow-2xl w-full h-[250px] sm:h-[350px] lg:h-[500px] object-cover hover:scale-105 transition-transform duration-700"
              />
              
              {/* Floating Card */}
              <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 lg:-bottom-6 lg:-left-6 bg-white p-3 sm:p-4 lg:p-6 rounded-2xl shadow-2xl border border-gray-100 hover-lift">
                <div className="text-xs text-gray-600 mb-1">Parcelas a partir de</div>
                <div className="text-lg sm:text-xl lg:text-2xl font-bold text-[#010133] mb-1">R$ 350/mês</div>
                <div className="text-xs text-green-600 font-semibold">✓ Sem juros</div>
              </div>

              {/* Video Play Button */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <button 
                  onClick={openVideo}
                  className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 group"
                >
                  <Play className="text-[#010133] ml-1 group-hover:scale-110 transition-transform duration-300" size={20} />
                </button>
              </div>

              {/* Video Badge */}
              <div className="absolute top-3 left-3 bg-red-600 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center space-x-1">
                <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                <span>DEPOIMENTO REAL</span>
              </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute -top-4 -right-4 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-orange-100 rounded-full opacity-20 -z-10"></div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 bg-blue-100 rounded-full opacity-20 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;