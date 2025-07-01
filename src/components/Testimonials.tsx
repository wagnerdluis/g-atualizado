import React, { useEffect, useState } from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
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

    const element = document.getElementById('depoimentos');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const testimonials = [
    {
      name: 'Maria Silva',
      role: 'Professora',
      location: 'São Paulo - SP',
      photo: 'https://i.postimg.cc/FRNfhm3S/insta-media.jpg',
      rating: 5,
      text: 'Estava cansada de pagar aluguel e não conseguir guardar dinheiro. Com o consórcio da G.LIONS, consegui minha casa própria pagando menos do que pagava de aluguel. A equipe me orientou em tudo!',
      achievement: 'Saiu do aluguel',
      value: 'R$ 280.000',
      time: '18 meses'
    },
    {
      name: 'João Santos',
      role: 'Engenheiro',
      location: 'São Paulo - SP',
      photo: 'https://i.postimg.cc/rwZhWcS2/insta-media-1.jpg',
      rating: 5,
      text: 'Precisava sair do aluguel urgente e o financiamento da G.LIONS foi a solução perfeita. Aprovação super rápida e sem burocracia. Em 2 meses estava com as chaves na mão!',
      achievement: 'Aprovação em 3 dias',
      value: 'R$ 450.000',
      time: '2 meses'
    },
    {
      name: 'Ana Costa',
      role: 'Empresária',
      location: 'São Paulo - SP',
      photo: 'https://i.postimg.cc/tJrr5HL6/insta-media-2.jpg',
      rating: 5,
      text: 'Sempre achei que consórcio era complicado, mas a G.LIONS me mostrou como é simples. Hoje tenho meu apartamento dos sonhos e pago parcelas que cabem no meu orçamento, sem juros!',
      achievement: 'Contemplada em 8 meses',
      value: 'R$ 380.000',
      time: '8 meses'
    }
  ];

  const stats = [
    { number: '300+', label: 'Famílias Contempladas', icon: '🏠' },
    { number: '98%', label: 'Clientes Satisfeitos', icon: '😊' },
    { number: '4.9/5', label: 'Avaliação Média', icon: '⭐' },
    { number: '3 anos', label: 'de Confiança', icon: '🏆' }
  ];

  return (
    <section id="depoimentos" className="py-16 lg:py-24 bg-[#E5E5EA]/30 particles">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className={`text-center mb-12 lg:mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="inline-flex items-center space-x-2 bg-[#DAA520]/10 text-[#DAA520] px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6 hover-lift border border-[#DAA520]/20">
            <Star className="text-[#DAA520]" size={14} />
            <span>Histórias Reais</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
            Quem confia na G.LIONS já tem casa própria
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Mais de 300 famílias já saíram do aluguel e conquistaram a casa própria conosco. 
            Veja alguns depoimentos de quem realizou esse sonho.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 lg:mb-16">
          {stats.map((stat, index) => (
            <div key={index} className={`text-center bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover-lift border border-[#E5E5EA] ${isVisible ? `animate-fade-in-up animate-delay-${(index + 1) * 100}` : 'opacity-0'}`}>
              <div className="text-xl sm:text-2xl lg:text-3xl mb-2">{stat.icon}</div>
              <div className="text-lg sm:text-xl lg:text-2xl font-bold text-[#010133] mb-1 sm:mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium text-xs sm:text-sm lg:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:mb-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={`bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 relative group hover-lift border border-[#E5E5EA] ${isVisible ? `animate-fade-in-up animate-delay-${(index + 5) * 200}` : 'opacity-0'}`}
            >
              <div className="relative z-10">
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 sm:top-6 sm:right-6 text-[#E5E5EA] group-hover:text-[#DAA520]/30 transition-all duration-300">
                  <Quote size={32} />
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4 sm:mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-[#DAA520] fill-current" size={18} />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base lg:text-lg group-hover:text-gray-800 transition-colors duration-300">
                  "{testimonial.text}"
                </p>

                {/* Achievement Badges */}
                <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                  <div className="bg-[#DAA520]/10 text-[#DAA520] px-3 py-1 sm:px-4 sm:py-2 rounded-xl text-xs sm:text-sm font-semibold inline-block hover-lift animate-fade-in-left border border-[#DAA520]/20">
                    ✓ {testimonial.achievement}
                  </div>
                  <div className="bg-[#010133]/10 text-[#010133] px-3 py-1 sm:px-4 sm:py-2 rounded-xl text-xs sm:text-sm font-semibold inline-block ml-2 hover-lift animate-fade-in-left animate-delay-100 border border-[#010133]/20">
                    💰 {testimonial.value}
                  </div>
                  <div className="bg-[#DAA520]/10 text-[#DAA520] px-3 py-1 sm:px-4 sm:py-2 rounded-xl text-xs sm:text-sm font-semibold inline-block hover-lift animate-fade-in-left animate-delay-200 border border-[#DAA520]/20">
                    ⏱️ Em {testimonial.time}
                  </div>
                </div>

                {/* Author */}
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <img 
                    src={testimonial.photo}
                    alt={testimonial.name}
                    className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full object-cover border-4 border-[#E5E5EA] group-hover:border-[#010133] transition-all duration-300 hover:scale-105"
                  />
                  <div>
                    <div className="font-bold text-gray-900 text-sm sm:text-base lg:text-lg group-hover:text-[#010133] transition-colors duration-300">
                      {testimonial.name}
                    </div>
                    <div className="text-gray-600 font-medium text-xs sm:text-sm">
                      {testimonial.role}
                    </div>
                    <div className="text-gray-500 text-xs">
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Section */}
        <div className={`text-center ${isVisible ? 'animate-fade-in-up animate-delay-800' : 'opacity-0'}`}>
          <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-12 shadow-xl hover-lift border border-[#E5E5EA]">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">
              Empresa Regulamentada e Confiável
            </h3>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Somos autorizados pelo Banco Central e associados às principais entidades do setor. 
              Sua segurança e tranquilidade são nossa prioridade.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-8">
              {[
                { text: 'Autorização BACEN', delay: '0s' },
                { text: 'Membro ABAC', delay: '0.2s' },
                { text: 'Associado FEBRABAN', delay: '0.4s' }
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-2 sm:space-x-3 text-gray-600 font-semibold text-sm sm:text-base lg:text-lg hover-lift animate-fade-in-up" style={{ animationDelay: item.delay }}>
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#DAA520]/10 border border-[#DAA520]/20 rounded-full flex items-center justify-center">
                    <span className="text-[#DAA520] text-xs sm:text-sm">✓</span>
                  </div>
                  <span className="hover:text-[#010133] transition-colors duration-300">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;