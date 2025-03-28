'use client';

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function About() {
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
          <div className="max-w-4xl mx-auto bg-white/90 rounded-lg shadow-lg p-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-[#4e4945] mb-8">Sobre Mim</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h2 className="text-2xl font-semibold text-[#4e4945] mb-4">Formação</h2>
                <ul className="space-y-2">
                  <li>• Mestrado em Matemática - USP</li>
                  <li>• Licenciatura em Matemática - UNICAMP</li>
                  <li>• Especialização em Educação Digital</li>
                </ul>
              </div>
              
              <div>
                <h2 className="text-2xl font-semibold text-[#4e4945] mb-4">Habilidades</h2>
                <ul className="space-y-2">
                  <li>• Matemática Avançada</li>
                  <li>• Desenvolvimento Web</li>
                  <li>• Metodologias de Ensino</li>
                  <li>• Tecnologias Educacionais</li>
                </ul>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-[#4e4945] mb-4">Experiência</h2>
              <p className="mb-4">
                Com mais de 10 anos de experiência em educação matemática, 
                desenvolvi uma abordagem única que combina métodos tradicionais 
                com tecnologias modernas. Minha paixão é tornar a matemática 
                acessível e envolvente para todos os alunos.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="/curriculo.pdf" 
                className="btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver Currículo Completo
              </a>
              <a 
                href="/projetos" 
                className="btn-secondary"
              >
                Projetos Realizados
              </a>
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