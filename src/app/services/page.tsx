'use client';

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Services() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-[#4e4945] mb-12 text-center">Serviços</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1 - Aulas Particulares */}
              <div className="bg-white/90 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <h2 className="text-2xl font-semibold text-[#4e4945] mb-4">Aulas Particulares</h2>
                <ul className="space-y-2 mb-6">
                  <li>• Matemática para todos os níveis</li>
                  <li>• Aulas presenciais ou online</li>
                  <li>• Material didático exclusivo</li>
                  <li>• Exercícios personalizados</li>
                  <li>• Preparação para vestibular</li>
                </ul>
                <Link href="/contact" className="btn-primary block text-center">
                  Saiba Mais
                </Link>
              </div>

              {/* Card 2 - Desenvolvimento Web */}
              <div className="bg-white/90 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <h2 className="text-2xl font-semibold text-[#4e4945] mb-4">Desenvolvimento Web</h2>
                <ul className="space-y-2 mb-6">
                  <li>• Sites institucionais</li>
                  <li>• Plataformas educacionais</li>
                  <li>• E-commerce</li>
                  <li>• Design responsivo</li>
                  <li>• Otimização SEO</li>
                </ul>
                <Link href="/contact" className="btn-primary block text-center">
                  Saiba Mais
                </Link>
              </div>

              {/* Card 3 - Consultoria Educacional */}
              <div className="bg-white/90 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <h2 className="text-2xl font-semibold text-[#4e4945] mb-4">Consultoria Educacional</h2>
                <ul className="space-y-2 mb-6">
                  <li>• Análise curricular</li>
                  <li>• Implementação tecnológica</li>
                  <li>• Capacitação docente</li>
                  <li>• Metodologias ativas</li>
                  <li>• Avaliação de resultados</li>
                </ul>
                <Link href="/contact" className="btn-primary block text-center">
                  Saiba Mais
                </Link>
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