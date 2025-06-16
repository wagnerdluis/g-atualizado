import React, { useEffect, useState } from 'react';
import { Handshake } from 'lucide-react';

const Partners = () => {
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

    const element = document.querySelector('#parceiros');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const partners = [
    {
      name: 'Caixa Econômica Federal',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Caixa_Econ%C3%B4mica_Federal_logo.svg/2560px-Caixa_Econ%C3%B4mica_Federal_logo.svg.png',
      alt: 'Caixa Econômica Federal'
    },
    {
      name: 'C6 Bank',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Logo_C6_Bank.svg/2560px-Logo_C6_Bank.svg.png',
      alt: 'C6 Bank'
    },
    {
      name: 'Banco do Brasil',
      logo: 'https://logodownload.org/wp-content/uploads/2014/05/banco-do-brasil-logo-5.png',
      alt: 'Banco do Brasil'
    },
    {
      name: 'Santander',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Banco_Santander_Logotipo.svg/2560px-Banco_Santander_Logotipo.svg.png',
      alt: 'Banco Santander'
    },
    {
      name: 'Porto Seguro',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Porto_2022.svg/2560px-Porto_2022.svg.png',
      alt: 'Porto Seguro'
    },
    {
      name: 'Âncora Consórcios',
      logo: 'https://consorciokawasakibrasil.com.br/wp-content/themes/carforyou/assets/images/ancoraBranco.png',
      alt: 'Âncora Consórcios'
    }
  ];

  // Duplicar os parceiros para criar o efeito de loop infinito
  const duplicatedPartners = [...partners, ...partners, ...partners];

  return (
    <section id="parceiros" className="py-12 lg:py-16 bg-white border-t border-gray-100 particles">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className={`text-center mb-8 lg:mb-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6 hover-lift">
            <Handshake size={14} />
            <span>Nossos Parceiros</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Trabalhamos com as melhores instituições do país
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
            Parcerias estratégicas com bancos e instituições financeiras renomadas 
            para oferecer as melhores condições para nossos clientes.
          </p>
        </div>

        {/* Partners Slider */}
        <div className={`relative overflow-hidden ${isVisible ? 'animate-fade-in-up animate-delay-200' : 'opacity-0'}`}>
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-16 lg:w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-16 lg:w-20 bg-gradient-to-l from-white to-transparent z-10"></div>
          
          {/* Sliding Container */}
          <div className="flex animate-scroll hover:pause">
            {duplicatedPartners.map((partner, index) => (
              <div 
                key={`${partner.name}-${index}`}
                className="flex-shrink-0 mx-4 sm:mx-6 lg:mx-8 flex items-center justify-center hover-lift"
                style={{ width: '150px', height: '80px' }}
              >
                <img
                  src={partner.logo}
                  alt={partner.alt}
                  className="max-w-full max-h-full object-contain hover:scale-105 transition-all duration-500 opacity-80 hover:opacity-100"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className={`mt-12 lg:mt-16 ${isVisible ? 'animate-fade-in-up animate-delay-400' : 'opacity-0'}`}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                icon: '🏦',
                title: 'Instituições Regulamentadas',
                description: 'Todos os nossos parceiros são autorizados pelo Banco Central',
                delay: '0s'
              },
              {
                icon: '🤝',
                title: 'Parcerias Estratégicas',
                description: 'Relacionamentos sólidos construídos ao longo de 3 anos',
                delay: '0.2s'
              },
              {
                icon: '⭐',
                title: 'Melhores Condições',
                description: 'Negociamos as melhores taxas e condições para você',
                delay: '0.4s'
              }
            ].map((item, index) => (
              <div key={index} className={`text-center group hover-lift animate-fade-in-up`} style={{ animationDelay: item.delay }}>
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-105 transition-all duration-300">
                  <span className="text-lg sm:text-xl lg:text-2xl">{item.icon}</span>
                </div>
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-2 group-hover:text-[#010133] transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        
        .animate-scroll {
          animation: scroll 15s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }

        .hover\\:pause:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Partners;