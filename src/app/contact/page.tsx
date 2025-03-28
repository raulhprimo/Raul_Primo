'use client';

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Contact() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [formStatus, setFormStatus] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('Mensagem enviada com sucesso!');
    setTimeout(() => setFormStatus(''), 3000);
  };

  return (
    <main className="min-h-screen">
      <style jsx global>{`
        .nav-link {
          position: relative;
          color: transparent;
        }

        .nav-link::before {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          color: #4e4945;
          animation: writing 1s ease-out forwards;
          -webkit-clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);
          clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);
        }

        .nav-link:nth-child(1)::before { animation-delay: 0.2s; }
        .nav-link:nth-child(2)::before { animation-delay: 0.4s; }
        .nav-link:nth-child(3)::before { animation-delay: 0.6s; }
        .nav-link:nth-child(4)::before { animation-delay: 0.8s; }

        @keyframes writing {
          0% {
            -webkit-clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);
            clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);
          }
          100% {
            -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
          }
        }
      `}</style>
      {/* Navbar */}
      <nav 
        className={`fixed top-0 w-full h-16 z-50 transition-all duration-300 ease-in-out
          ${isScrolled ? 'shadow-lg translate-y-0' : '-translate-y-1'}`}
        style={{
          backgroundImage: 'url("/bg.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="container mx-auto h-full flex items-center justify-between px-4">
          <span className="text-3xl font-semibold nav-link" data-text="RP">RP</span>
          <div className="hidden md:flex gap-12">
            <Link href="/" className="text-2xl font-semibold nav-link" data-text="Home">Home</Link>
            <Link href="/about" className="text-2xl font-semibold nav-link" data-text="About">About</Link>
            <Link href="/services" className="text-2xl font-semibold nav-link" data-text="Services">Services</Link>
            <Link href="/contact" className="text-2xl font-semibold nav-link" data-text="Contact">Contact</Link>
          </div>
          <div className="md:hidden">
            <span className="text-2xl font-semibold nav-link" data-text="Menu">Menu</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div 
        className="relative min-h-screen w-full flex flex-col items-center justify-center pt-20"
        style={{
          backgroundImage: 'url("/bg.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-[#4e4945] mb-12 text-center">Contato</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Informações de Contato */}
              <div className="bg-white/90 rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-semibold text-[#4e4945] mb-6">Informações</h2>
                <div className="space-y-4">
                  <p className="flex items-center gap-3">
                    <span className="text-xl">📧</span>
                    <a href="mailto:contato@raulprimo.com" className="hover:underline">
                      contato@raulprimo.com
                    </a>
                  </p>
                  <p className="flex items-center gap-3">
                    <span className="text-xl">📱</span>
                    <a href="tel:+5511999999999" className="hover:underline">
                      +55 (11) 99999-9999
                    </a>
                  </p>
                  <p className="flex items-center gap-3">
                    <span className="text-xl">📍</span>
                    São Paulo, SP
                  </p>
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-[#4e4945] mb-4">Redes Sociais</h3>
                  <div className="flex gap-4">
                    <a href="#" className="text-2xl hover:scale-110 transition-transform">
                      📱
                    </a>
                    <a href="#" className="text-2xl hover:scale-110 transition-transform">
                      💼
                    </a>
                    <a href="#" className="text-2xl hover:scale-110 transition-transform">
                      📸
                    </a>
                  </div>
                </div>
              </div>

              {/* Formulário de Contato */}
              <div className="bg-white/90 rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-semibold text-[#4e4945] mb-6">Envie uma mensagem</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Nome
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4e4945]"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4e4945]"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Mensagem
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4e4945]"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#4e4945] text-white py-2 px-4 rounded-md hover:bg-[#3d3935] transition-colors"
                  >
                    Enviar Mensagem
                  </button>
                </form>
                {formStatus && (
                  <p className="mt-4 text-green-600 text-center">{formStatus}</p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Imagens decorativas */}
        <Image
          src="/lápis.png"
          alt="Lápis"
          width={80}
          height={80}
          className="absolute top-1/4 left-8 transform scale-[1.8] md:scale-[1.8] sm:scale-[1.4] rotate-90"
          priority
        />
      </div>
    </main>
  );
} 