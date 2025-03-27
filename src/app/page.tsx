'use client';

import Image from "next/image";
import { useEffect, useState } from "react";
import { Nothing_You_Could_Do } from 'next/font/google';

const nothingYouCouldDo = Nothing_You_Could_Do({
  weight: '400',
  subsets: ['latin'],
});

export default function Home() {
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
        /* Estilos da scrollbar */
        ::-webkit-scrollbar {
          width: 12px;
          background-image: url("/bg.jpg");
          background-size: cover;
          background-position: center;
        }

        ::-webkit-scrollbar-thumb {
          background-color: #E7E7E7;
          border-radius: 6px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background-color: #E7E7E7;
        }

        .handwriting {
          position: relative;
          color: transparent;
        }

        .handwriting::before {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          color: #4e4945;
          animation: writing 2s ease-out forwards;
          -webkit-clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);
          clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);
        }

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

        .geometry {
          position: absolute;
          font-family: "Times New Roman", serif;
          transform-origin: center;
          user-select: none;
          pointer-events: none;
        }

        .geometry-formula {
          font-size: 1.2rem;
          color: #4e4945;
          opacity: 0.6;
        }

        .svg-figure {
          stroke: #4e4945;
          fill: none;
          stroke-width: 1.5;
          opacity: 0.6;
        }

        .svg-figure text, .svg-figure line {
          stroke-width: 1;
        }

        .svg-figure .filled {
          fill: #4e4945;
          fill-opacity: 0.2;
        }

        .math-formula {
          position: absolute;
          color: #4e4945;
          font-family: 'Times New Roman', serif;
          font-size: 1.5rem;
          transform-origin: center;
          user-select: none;
          pointer-events: none;
        }

        .math-formula:nth-child(1) {
          top: 20%;
          left: 35%;
          transform: rotate(0deg);
          font-size: 2rem;
          opacity: 0.6;
        }

        .math-formula:nth-child(2) {
          top: 70%;
          right: 35%;
          transform: rotate(10deg);
          font-size: 1.8rem;
          opacity: 0.5;
        }

        .math-formula:nth-child(3) {
          bottom: 30%;
          left: 40%;
          transform: rotate(-5deg);
          font-size: 2.2rem;
          opacity: 0.55;
        }

        .math-formula:nth-child(4) {
          top: 25%;
          right: 40%;
          transform: rotate(20deg);
          font-size: 1.7rem;
          opacity: 0.6;
        }

        .math-formula:nth-child(5) {
          bottom: 15%;
          right: 25%;
          transform: rotate(-10deg);
          font-size: 2.1rem;
          opacity: 0.5;
        }

        /* Ajustes responsivos */
        @media (max-width: 768px) {
          .geometry, .math-formula {
            font-size: 1rem;
          }
          
          .math-formula:nth-child(1) {
            font-size: 1.4rem;
          }
          
          .math-formula:nth-child(2) {
            font-size: 1.2rem;
          }
          
          .math-formula:nth-child(3) {
            font-size: 1.4rem;
          }
        }
        
        @media (max-width: 480px) {
          .geometry-formula {
            font-size: 0.9rem;
          }
          
          .math-formula {
            opacity: 0.4;
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
            <a href="#home" className="text-2xl font-semibold nav-link" data-text="Home">Home</a>
            <a href="#about" className="text-2xl font-semibold nav-link" data-text="About">About</a>
            <a href="#services" className="text-2xl font-semibold nav-link" data-text="Services">Services</a>
            <a href="#contact" className="text-2xl font-semibold nav-link" data-text="Contact">Contact</a>
          </div>
          <div className="md:hidden">
            <span className="text-2xl font-semibold nav-link" data-text="Menu">Menu</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div 
        className="relative h-screen w-full flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: 'url("/bg.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Fórmulas matemáticas de fundo (escondidas em telas muito pequenas) */}
        <div className="math-formula hidden sm:block">∫(x²+2x+1)dx = x³/3 + x² + x + C</div>
        <div className="math-formula">E = mc²</div>
        <div className="math-formula hidden xs:block">y = ax² + bx + c</div>

        
        {/* Figuras geométricas */}
        
        {/* Cone e fórmula de volume */}
        <div className="geometry hidden md:block" style={{ top: '15%', left: '12%', transform: 'rotate(-8deg)' }}>
          <svg width="80" height="100" viewBox="0 0 80 100" className="svg-figure">
            <ellipse cx="40" cy="80" rx="30" ry="10" />
            <line x1="40" y1="10" x2="10" y2="80" />
            <line x1="40" y1="10" x2="70" y2="80" />
            <line x1="40" y1="10" x2="40" y2="80" strokeDasharray="3,3" />
            <text x="42" y="50" fontSize="12">h</text>
            <text x="30" y="85" fontSize="12">r</text>
          </svg>
          <div className="geometry-formula">V = πr²h/3</div>
        </div>
        
        {/* Cubo e fórmula de volume */}
        <div className="geometry hidden md:block" style={{ top: '12%', right: '15%', transform: 'rotate(5deg)' }}>
          <svg width="70" height="70" viewBox="0 0 70 70" className="svg-figure">
            <polygon points="20,20 60,20 60,60 20,60" />
            <polygon points="10,10 50,10 50,50 10,50" />
            <line x1="20" y1="20" x2="10" y2="10" />
            <line x1="60" y1="20" x2="50" y2="10" />
            <line x1="60" y1="60" x2="50" y2="50" />
            <line x1="20" y1="60" x2="10" y2="50" />
            <text x="30" y="40" fontSize="14">a</text>
          </svg>
          <div className="geometry-formula">V = a³</div>
        </div>
        
        {/* Teorema de Pitágoras */}
        <div className="geometry" style={{ bottom: '15%', left: '15%', transform: 'rotate(-5deg)' }}>
          <svg width="90" height="70" viewBox="0 0 90 70" className="svg-figure">
            <polygon points="10,60 80,60 80,10" />
            <text x="40" y="40" fontSize="12">c</text>
            <text x="45" y="65" fontSize="12">a</text>
            <text x="82" y="35" fontSize="12">b</text>
          </svg>
          <div className="geometry-formula">a² + b² = c²</div>
        </div>
        
        {/* Círculo com área */}
        <div className="geometry" style={{ bottom: '20%', right: '15%', transform: 'rotate(5deg)' }}>
          <svg width="70" height="70" viewBox="0 0 70 70" className="svg-figure">
            <circle cx="35" cy="35" r="30" />
            <line x1="35" y1="35" x2="65" y2="35" />
            <text x="45" y="30" fontSize="12">r</text>
          </svg>
          <div className="geometry-formula">S = πr²</div>
        </div>
        
        {/* Fórmula trigonométrica */}
        <div className="geometry sm:block hidden" style={{ top: '35%', left: '8%', transform: 'rotate(-3deg)' }}>
          <div className="geometry-formula">sin²x + cos²x = 1</div>
        </div>
        
        {/* Série infinita */}
        <div className="geometry hidden sm:block" style={{ top: '60%', left: '25%', transform: 'rotate(90deg)' }}>
          <div className="geometry-formula" style={{ fontSize: '1rem' }}>∑(n=1 to ∞) 1/n²</div>
        </div>
        
        {/* Cilindro e volume */}
        <div className="geometry hidden md:block" style={{ top: '35%', right: '10%', transform: 'rotate(10deg)' }}>
          <svg width="70" height="100" viewBox="0 0 70 100" className="svg-figure">
            <ellipse cx="35" cy="20" rx="25" ry="10" />
            <ellipse cx="35" cy="80" rx="25" ry="10" />
            <line x1="10" y1="20" x2="10" y2="80" />
            <line x1="60" y1="20" x2="60" y2="80" />
            <line x1="35" y1="20" x2="35" y2="80" strokeDasharray="3,3" />
            <text x="38" y="50" fontSize="12">h</text>
            <text x="25" y="20" fontSize="12">r</text>
          </svg>
          <div className="geometry-formula">V = πr²h</div>
        </div>

        {/* Lápis alinhado com a borracha */}
        <Image
          src="/lápis.png"
          alt="Lápis"
          width={80}
          height={80}
          className="absolute top-1/5 left-8 transform scale-[1.8] md:scale-[1.8] sm:scale-[1.4] rotate-90"
          priority
        />

        {/* Lápis com borracha direita */}
        <Image
          src="/borracha-lapis.png"
          alt="Lápis com borracha"
          width={70}
          height={70}
          className="absolute top-1/4 right-8 transform scale-[2.4] md:scale-[2.4] sm:scale-[1.8] xs:scale-[1.4] rotate-[40deg]"
          priority
        />
        
        {/* Borracha inferior esquerda */}
        <Image
          src="/borracha.png"
          alt="Borracha"
          width={150}
          height={150}
          className="absolute -bottom-10 -left-10 transform scale-[2] md:scale-[2] sm:scale-[1.5] xs:scale-[1]"
          priority
        />

        <h1 className={`text-4xl sm:text-5xl md:text-7xl lg:text-9xl text-center leading-relaxed handwriting ${nothingYouCouldDo.className}`} data-text="Raul Primo">
          Raul Primo
        </h1>
      </div>
    </main>
  );
}
