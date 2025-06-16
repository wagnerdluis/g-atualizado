import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, User, MessageSquare, Shield } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    value: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
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

    const element = document.getElementById('contato');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Criar o corpo do e-mail
      const emailBody = `
Nova Simulação de Consórcio/Financiamento - G.LIONS

DADOS DO CLIENTE:
Nome: ${formData.name}
E-mail: ${formData.email}
WhatsApp: ${formData.phone}
Situação: ${formData.service}
Valor do Imóvel: ${formData.value || 'Não informado'}

MENSAGEM:
${formData.message || 'Nenhuma mensagem adicional'}

---
Formulário enviado através do site G.LIONS
Data: ${new Date().toLocaleString('pt-BR')}
      `.trim();

      // Criar o link mailto
      const mailtoLink = `mailto:contato@glions.com.br?subject=Nova Simulação - ${formData.name}&body=${encodeURIComponent(emailBody)}`;
      
      // Abrir o cliente de e-mail
      window.location.href = mailtoLink;

      // Mostrar mensagem de sucesso
      setIsSubmitted(true);
      
      // Limpar formulário
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        value: '',
        message: ''
      });

      // Esconder mensagem após 5 segundos
      setTimeout(() => setIsSubmitted(false), 5000);

    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      alert('Erro ao enviar formulário. Tente novamente ou entre em contato diretamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Ligue Agora',
      content: '(11) 96531-6163',
      subContent: 'Atendimento humanizado',
      color: 'blue'
    },
    {
      icon: Mail,
      title: 'E-mail',
      content: 'contato@glions.com.br',
      subContent: 'Resposta garantida em 2h',
      color: 'blue'
    },
    {
      icon: MapPin,
      title: 'Visite-nos',
      content: 'R. Topázio, 76 - Vila Mariana',
      subContent: 'São Paulo - SP, 04105-060',
      color: 'blue'
    },
    {
      icon: Clock,
      title: 'Horário',
      content: 'Seg-Sex: 8h às 18h',
      subContent: 'Sáb: 8h às 12h',
      color: 'blue'
    }
  ];

  return (
    <section id="contato" className="py-16 lg:py-24 bg-white particles">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className={`text-center mb-12 lg:mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="inline-flex items-center space-x-2 bg-orange-50 text-orange-700 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6 hover-lift">
            <MessageSquare size={14} />
            <span>Fale Conosco</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
            Pronto para sair do aluguel?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Nossos consultores especializados estão prontos para te mostrar como é possível 
            conquistar sua casa própria com parcelas que cabem no seu orçamento.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <div className={`bg-gray-50 rounded-3xl p-6 sm:p-8 lg:p-10 hover-lift ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
            <div className="flex items-center space-x-3 mb-6 sm:mb-8">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#010133] rounded-xl flex items-center justify-center">
                <User className="text-white" size={20} />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                Simular agora
              </h3>
            </div>

            {/* PCA-10 Highlight */}
            <div className="bg-[#010133] text-white rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8 relative overflow-hidden hover-lift">
              <div className="relative z-10">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <Shield className="text-white" size={18} />
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold">Empresa Regulamentada</h4>
                </div>
                <p className="text-blue-100 mb-4 text-sm sm:text-base">
                  Administradora autorizada pelo Banco Central do Brasil
                </p>
                <div className="bg-white/10 rounded-xl p-3 sm:p-4 border border-white/20">
                  <div className="text-xs sm:text-sm text-blue-200 mb-1">PCA-10 BACEN</div>
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold text-white tracking-wider">
                    6585615850
                  </div>
                  <div className="text-xs text-blue-200 mt-2">
                    ✓ Autorização para administrar consórcios
                  </div>
                </div>
              </div>
            </div>

            {isSubmitted ? (
              <div className="bg-green-100 border border-green-200 rounded-2xl p-6 sm:p-8 text-center animate-scale-in">
                <CheckCircle className="text-green-600 mx-auto mb-4 sm:mb-6" size={48} />
                <h4 className="text-xl sm:text-2xl font-bold text-green-800 mb-3 sm:mb-4">
                  Simulação Enviada!
                </h4>
                <p className="text-green-700 text-sm sm:text-base lg:text-lg">
                  Seu cliente de e-mail foi aberto com suas informações. Complete o envio para que 
                  um de nossos consultores entre em contato com sua simulação personalizada.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="animate-fade-in-up animate-delay-100">
                    <label className="block text-sm font-semibold text-gray-700 mb-2 sm:mb-3">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-3 sm:py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#010133] focus:border-transparent transition-all text-sm sm:text-base hover:border-[#010133] focus-ring"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div className="animate-fade-in-up animate-delay-200">
                    <label className="block text-sm font-semibold text-gray-700 mb-2 sm:mb-3">
                      WhatsApp *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-3 sm:py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#010133] focus:border-transparent transition-all text-sm sm:text-base hover:border-[#010133] focus-ring"
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                </div>

                <div className="animate-fade-in-up animate-delay-300">
                  <label className="block text-sm font-semibold text-gray-700 mb-2 sm:mb-3">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-3 sm:py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#010133] focus:border-transparent transition-all text-sm sm:text-base hover:border-[#010133] focus-ring"
                    placeholder="seu@email.com"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="animate-fade-in-up animate-delay-400">
                    <label className="block text-sm font-semibold text-gray-700 mb-2 sm:mb-3">
                      Qual sua situação? *
                    </label>
                    <select
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-3 sm:py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#010133] focus:border-transparent transition-all text-sm sm:text-base hover:border-[#010133] focus-ring"
                    >
                      <option value="">Selecione uma opção</option>
                      <option value="aluguel">Pago aluguel e quero sair</option>
                      <option value="primeira-casa">Quero minha primeira casa</option>
                      <option value="trocar-casa">Quero trocar de casa</option>
                      <option value="investimento">Quero investir em imóveis</option>
                    </select>
                  </div>
                  <div className="animate-fade-in-up animate-delay-500">
                    <label className="block text-sm font-semibold text-gray-700 mb-2 sm:mb-3">
                      Valor do Imóvel Desejado
                    </label>
                    <input
                      type="text"
                      name="value"
                      value={formData.value}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-3 sm:py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#010133] focus:border-transparent transition-all text-sm sm:text-base hover:border-[#010133] focus-ring"
                      placeholder="R$ 300.000"
                    />
                  </div>
                </div>

                <div className="animate-fade-in-up animate-delay-600">
                  <label className="block text-sm font-semibold text-gray-700 mb-2 sm:mb-3">
                    Conte-nos mais sobre seu sonho
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-3 sm:py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#010133] focus:border-transparent transition-all text-sm sm:text-base resize-none hover:border-[#010133] focus-ring"
                    placeholder="Ex: Quero uma casa de 3 quartos na zona sul, tenho FGTS disponível..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary bg-[#010133] hover:bg-blue-900 disabled:bg-gray-400 text-white py-4 sm:py-5 rounded-xl font-semibold text-base sm:text-lg flex items-center justify-center space-x-3 transition-all duration-300 disabled:hover:scale-100 animate-fade-in-up animate-delay-700"
                >
                  <Send size={20} className={isSubmitting ? 'animate-spin' : ''} />
                  <span>
                    {isSubmitting ? 'Enviando...' : 'Simular agora'}
                  </span>
                </button>

                <p className="text-center text-xs sm:text-sm text-gray-500 animate-fade-in-up animate-delay-800">
                  ✓ Simulação 100% gratuita • ✓ Sem compromisso • ✓ Resposta em até 2 horas
                </p>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className={`space-y-6 lg:space-y-8 ${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8">
                Outros Canais de Atendimento
              </h3>
              <div className="space-y-4 sm:space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className={`flex items-start space-x-3 sm:space-x-4 p-4 sm:p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-all duration-300 hover-lift animate-fade-in-up animate-delay-${(index + 1) * 100}`}>
                      <div className={`w-12 h-12 sm:w-14 sm:h-14 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <Icon className="text-blue-600" size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1 sm:mb-2 text-base sm:text-lg hover:text-[#010133] transition-colors duration-300">
                          {info.title}
                        </h4>
                        <p className="text-gray-700 font-semibold text-sm sm:text-base lg:text-lg">
                          {info.content}
                        </p>
                        <p className="text-gray-500 text-xs sm:text-sm">
                          {info.subContent}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Endereço com Link */}
            <div className="bg-gray-50 rounded-3xl p-6 sm:p-8 hover-lift animate-fade-in-up animate-delay-500">
              <div className="flex items-center space-x-3 mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <MapPin className="text-blue-600" size={20} />
                </div>
                <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">
                  Nosso Escritório
                </h4>
              </div>
              <p className="text-gray-700 text-sm sm:text-base lg:text-lg mb-4">
                R. Topázio, 76 - Vila Mariana<br />
                São Paulo - SP, 04105-060
              </p>
              <a 
                href="https://maps.app.goo.gl/Mnq9885YS3VKXrxQ9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-[#010133] hover:bg-blue-900 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold transition-all duration-300 text-sm sm:text-base"
              >
                <MapPin size={18} />
                <span>Ver Localização</span>
              </a>
            </div>

            {/* Contact CTA */}
            <div className="bg-[#010133] text-white rounded-3xl p-6 sm:p-8 hover-lift animate-fade-in-up animate-delay-600">
              <h4 className="font-bold text-white mb-3 text-lg sm:text-xl">
                📞 Fale Conosco Agora
              </h4>
              <p className="text-blue-200 mb-4 text-sm sm:text-base lg:text-lg">
                Nossa equipe está pronta para te atender e esclarecer todas as suas dúvidas sobre consórcios e financiamentos.
              </p>
              <div className="flex items-center space-x-3 mb-4">
                <Phone className="text-orange-400" size={20} />
                <span className="font-bold text-white text-lg sm:text-xl">
                  (11) 96531-6163
                </span>
              </div>
              <p className="text-blue-200 font-semibold text-sm sm:text-base">
                Ligue agora e tire todas as suas dúvidas!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;