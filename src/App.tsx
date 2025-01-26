import React from 'react';
import { 
  Sparkles, 
  Star, 
  MapPin, 
  Phone, 
  Mail, 
  Instagram, 
  Facebook, 
  Clock,
  ChevronRight,
  Heart
} from 'lucide-react';
import { useWhatsApp } from './hooks/useWhatsApp';

function App() {
  const { openWhatsApp } = useWhatsApp();

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      {/* Header */}
      <header className="fixed w-full bg-white/80 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-3xl font-serif text-pink-600">Novaes Nails</h1>
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-600 hover:text-pink-600 transition">Início</a>
            <a href="#services" className="text-gray-600 hover:text-pink-600 transition">Serviços</a>
            <a href="#portfolio" className="text-gray-600 hover:text-pink-600 transition">Portfólio</a>
            {/* <a href="#about" className="text-gray-600 hover:text-pink-600 transition">Sobre</a> */}
            <a href="#contact" className="text-gray-600 hover:text-pink-600 transition">Contato</a>
          </nav>
          <button onClick={openWhatsApp} className="bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600 transition">
            Agende Agora
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-20 px-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-5xl font-serif leading-tight text-gray-800">
              Bem-vinda ao <span className="text-pink-600">Novaes Nails</span>
              <br />
              Arte e Beleza nas suas Mãos!
            </h2>
            <p className="text-xl text-gray-600">
              Descubra designs exclusivos e tratamentos de alta qualidade para suas unhas.
            </p>
            <button onClick={ scrollToServices} className="flex items-center space-x-2 bg-pink-500 text-white px-8 py-3 rounded-full hover:bg-pink-600 transition">
              <span>Conheça Nossos Serviços</span>
              <ChevronRight size={20} />
            </button>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0">
            <img 
              src="https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=800&q=80" 
              alt="Nail Art"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-serif text-center text-gray-800 mb-16">Nossos Serviços</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Manicure e Pedicure',
                description: 'Cuidados profissionais para mãos e pés.',
                icon: <Heart className="w-8 h-8 text-pink-500" />
              },
              {
                title: 'Alongamento de Unhas',
                description: 'Técnicas modernas para unhas longas e resistentes.',
                icon: <Sparkles className="w-8 h-8 text-pink-500" />
              },
              {
                title: 'Designs Artísticos',
                description: 'Criatividade e tendências em cada detalhe.',
                icon: <Star className="w-8 h-8 text-pink-500" />
              },
              {
                title: 'Tratamentos Especiais',
                description: 'Hidratação e fortalecimento para unhas saudáveis.',
                icon: <Heart className="w-8 h-8 text-pink-500" />
              }
            ].map((service, index) => (
              <div key={index} className="bg-pink-50 p-8 rounded-xl hover:shadow-lg transition">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-serif text-center text-gray-800 mb-16">Nossos Trabalhos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              "https://images.unsplash.com/photo-1604654894610-df63bc536371",
              "https://images.unsplash.com/photo-1632345031435-8727f6897d53",
              "https://images.unsplash.com/photo-1607779097040-26e80aa78e66",
              "https://images.unsplash.com/photo-1519014816548-bf5fe059798b",
              "https://images.unsplash.com/photo-1604654894610-df63bc536371",
              "https://images.unsplash.com/photo-1632345031435-8727f6897d53"
            ].map((img, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg">
                <img 
                  src={`${img}?auto=format&fit=crop&w=600&q=80`}
                  alt={`Nail Design ${index + 1}`}
                  className="w-full h-72 object-cover transform group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-lg font-semibold">Design {index + 1}</h3>
                    <p className="text-sm">Ver detalhes</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-pink-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-serif text-center text-gray-800 mb-16">Entre em Contato</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <MapPin className="w-6 h-6 text-pink-500" />
                <div>
                  <h3 className="font-semibold">Endereço</h3>
                  <p className="text-gray-600">Rua Jocelir de Oliveira, 08, Parque América, Itu SP, 13304-406</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-pink-500" />
                <div>
                  <h3 className="font-semibold">Telefone</h3>
                  <p className="text-gray-600">(11) 96092-5780</p>
                </div>
              </div>
              {/* <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-pink-500" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-gray-600">contato@lilinails.com</p>
                </div>
              </div> */}
              <div className="flex items-center space-x-4">
                <Clock className="w-6 h-6 text-pink-500" />
                <div>
                  <h3 className="font-semibold">Horário de Funcionamento</h3>
                  <p className="text-gray-600">Ter - Sáb: 8h às 19h</p>
                </div>
              </div>
            </div>
            {/* <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nome</label>
                <input type="text" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-transparent" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input type="email" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-transparent" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Mensagem</label>
                <textarea rows={4} className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-transparent"></textarea>
              </div>
              <button className="w-full bg-pink-500 text-white px-6 py-3 rounded-lg hover:bg-pink-600 transition">
                Enviar Mensagem
              </button>
            </form> */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-serif mb-4">Novaes Nails</h3>
              <p className="text-gray-400">Arte e beleza nas suas mãos.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Links Rápidos</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-pink-500 transition">Início</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-pink-500 transition">Serviços</a></li>
                <li><a href="#portfolio" className="text-gray-400 hover:text-pink-500 transition">Portfólio</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-pink-500 transition">Contato</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Horário</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Segunda: Fechado</li>
                <li>Terça - Sexta: 8h - 19h</li>
                <li>Sábado: 8h - 17h</li>
                <li>Domingo: Fechado</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Redes Sociais</h4>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/novaes_nails/" target='_blank' className="text-gray-400 hover:text-pink-500 transition">
                  <Instagram className="w-6 h-6" />
                </a>
                {/* <a href="#" className="text-gray-400 hover:text-pink-500 transition">
                  <Facebook className="w-6 h-6" />
                </a> */}
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© 2025 Novaes Nails. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
