'use client';

import Image from "next/image";
import { useEffect, useState } from "react";
import { Nothing_You_Could_Do } from 'next/font/google';
import Link from "next/link";

const nothingYouCouldDo = Nothing_You_Could_Do({
  weight: '400',
  subsets: ['latin'],
});

// Arrays de fórmulas para cada posição
const formulas1 = [
  "∫(x²+2x+1)dx = x³/3 + x² + x + C",
  "∮ E·dl = -dΦB/dt",
  "f(x) = ∫g(t)e^(-2πixt)dt",
  "∇ × B = μ₀J + μ₀ε₀∂E/∂t"
];

const formulas2 = [
  "E = mc²",
  "F = G(m₁m₂)/r²",
  "E = hf",
  "PV = nRT"
];

const formulas3 = [
  "y = ax² + bx + c",
  "dy/dx = nxⁿ⁻¹",
  "f′(x) = lim[h→0] [f(x+h) - f(x)]/h",
  "∫eˣ dx = eˣ + C"
];

// Arrays de fórmulas geométricas
const geometricFormulas1 = [
  "V = πr²h/3",
  "V = (1/3)πr²h",
  "h = 3V/πr²",
  "r = √(3V/πh)"
];

const geometricFormulas2 = [
  "V = a³",
  "S = 6a²",
  "a = ∛V",
  "a = √(S/6)"
];

const geometricFormulas3 = [
  "a² + b² = c²",
  "c = √(a² + b²)",
  "sin α = a/c",
  "cos β = b/c"
];

const geometricFormulas4 = [
  "S = πr²",
  "C = 2πr",
  "r = C/2π",
  "D = 2r"
];

const geometricFormulas5 = [
  "sin²x + cos²x = 1",
  "tan²x + 1 = sec²x",
  "cot²x + 1 = csc²x",
  "sin(2x) = 2sinx·cosx"
];

const geometricFormulas6 = [
  "∑(n=1 to ∞) 1/n²",
  "∑(n=0 to ∞) x^n/n!",
  "∏(n=1 to ∞) (1-1/n²)",
  "lim(n→∞) (1+1/n)ⁿ"
];

const geometricFormulas7 = [
  "V = πr²h",
  "S = 2πr² + 2πrh",
  "r = √(V/πh)",
  "h = V/πr²"
];

// Figuras geométricas alternativas (SVGs)
const coneShapes = ["cone", "pyramid", "tetrahedron"];
const cubeShapes = ["cube", "prism", "cuboid"];
const triangleShapes = ["right_triangle", "equilateral", "scalene"];
const circleShapes = ["circle", "ellipse", "arc"];
const cylinderShapes = ["cylinder", "tube", "prism"];

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Estados para fórmulas
  const [currentFormula1, setCurrentFormula1] = useState(0);
  const [currentFormula2, setCurrentFormula2] = useState(0);
  const [currentFormula3, setCurrentFormula3] = useState(0);
  
  // Estados para fórmulas geométricas
  const [currentGeoFormula1, setCurrentGeoFormula1] = useState(0);
  const [currentGeoFormula2, setCurrentGeoFormula2] = useState(0);
  const [currentGeoFormula3, setCurrentGeoFormula3] = useState(0);
  const [currentGeoFormula4, setCurrentGeoFormula4] = useState(0);
  const [currentGeoFormula5, setCurrentGeoFormula5] = useState(0);
  const [currentGeoFormula6, setCurrentGeoFormula6] = useState(0);
  const [currentGeoFormula7, setCurrentGeoFormula7] = useState(0);
  
  // Estados para figuras geométricas
  const [currentConeShape, setCurrentConeShape] = useState(0);
  const [currentCubeShape, setCurrentCubeShape] = useState(0);
  const [currentTriangleShape, setCurrentTriangleShape] = useState(0);
  const [currentCircleShape, setCurrentCircleShape] = useState(0);
  const [currentCylinderShape, setCurrentCylinderShape] = useState(0);
  
  // Estados independentes para fade de cada elemento
  const [fadeState1, setFadeState1] = useState("in");
  const [fadeState2, setFadeState2] = useState("in");
  const [fadeState3, setFadeState3] = useState("in");
  const [fadeStateGeo1, setFadeStateGeo1] = useState("in");
  const [fadeStateGeo2, setFadeStateGeo2] = useState("in");
  const [fadeStateGeo3, setFadeStateGeo3] = useState("in");
  const [fadeStateGeo4, setFadeStateGeo4] = useState("in");
  const [fadeStateGeo5, setFadeStateGeo5] = useState("in");
  const [fadeStateGeo6, setFadeStateGeo6] = useState("in");
  const [fadeStateGeo7, setFadeStateGeo7] = useState("in");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Efeitos independentes para cada fórmula matemática
  useEffect(() => {
    const interval = setInterval(() => {
      setFadeState1("out");
      setTimeout(() => {
        setCurrentFormula1((prev) => (prev + 1) % formulas1.length);
        setFadeState1("in");
      }, 1000);
    }, 7000); // 7 segundos
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeState2("out");
      setTimeout(() => {
        setCurrentFormula2((prev) => (prev + 1) % formulas2.length);
        setFadeState2("in");
      }, 1000);
    }, 5000); // 5 segundos
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeState3("out");
      setTimeout(() => {
        setCurrentFormula3((prev) => (prev + 1) % formulas3.length);
        setFadeState3("in");
      }, 1000);
    }, 6000); // 6 segundos
    return () => clearInterval(interval);
  }, []);

  // Efeitos independentes para cada fórmula geométrica
  useEffect(() => {
    const interval = setInterval(() => {
      setFadeStateGeo1("out");
      setTimeout(() => {
        setCurrentGeoFormula1((prev) => (prev + 1) % geometricFormulas1.length);
        setCurrentConeShape((prev) => (prev + 1) % coneShapes.length);
        setFadeStateGeo1("in");
      }, 1000);
    }, 8000); // 8 segundos
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeStateGeo2("out");
      setTimeout(() => {
        setCurrentGeoFormula2((prev) => (prev + 1) % geometricFormulas2.length);
        setCurrentCubeShape((prev) => (prev + 1) % cubeShapes.length);
        setFadeStateGeo2("in");
      }, 1000);
    }, 9000); // 9 segundos
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeStateGeo3("out");
      setTimeout(() => {
        setCurrentGeoFormula3((prev) => (prev + 1) % geometricFormulas3.length);
        setCurrentTriangleShape((prev) => (prev + 1) % triangleShapes.length);
        setFadeStateGeo3("in");
      }, 1000);
    }, 6500); // 6,5 segundos
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeStateGeo4("out");
      setTimeout(() => {
        setCurrentGeoFormula4((prev) => (prev + 1) % geometricFormulas4.length);
        setCurrentCircleShape((prev) => (prev + 1) % circleShapes.length);
        setFadeStateGeo4("in");
      }, 1000);
    }, 7500); // 7,5 segundos
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeStateGeo5("out");
      setTimeout(() => {
        setCurrentGeoFormula5((prev) => (prev + 1) % geometricFormulas5.length);
        setFadeStateGeo5("in");
      }, 1000);
    }, 5500); // 5,5 segundos
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeStateGeo6("out");
      setTimeout(() => {
        setCurrentGeoFormula6((prev) => (prev + 1) % geometricFormulas6.length);
        setFadeStateGeo6("in");
      }, 1000);
    }, 8500); // 8,5 segundos
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeStateGeo7("out");
      setTimeout(() => {
        setCurrentGeoFormula7((prev) => (prev + 1) % geometricFormulas7.length);
        setCurrentCylinderShape((prev) => (prev + 1) % cylinderShapes.length);
        setFadeStateGeo7("in");
      }, 1000);
    }, 7000); // 7 segundos
    return () => clearInterval(interval);
  }, []);

  // Função de renderização de figura geométrica com base no tipo selecionado
  const renderConeShape = () => {
    const shape = coneShapes[currentConeShape];
    if (shape === "pyramid") {
      return (
        <svg width="80" height="100" viewBox="0 0 80 100" className="svg-figure">
          <polygon points="10,80 70,80 40,10" className="filled" fillOpacity="0.1" />
          <line x1="10" y1="80" x2="70" y2="80" />
          <line x1="10" y1="80" x2="40" y2="10" />
          <line x1="70" y1="80" x2="40" y2="10" />
          <line x1="40" y1="10" x2="40" y2="80" strokeDasharray="3,3" />
          <text x="42" y="50" fontSize="12">h</text>
          <text x="35" y="85" fontSize="12">a</text>
        </svg>
      );
    } else if (shape === "tetrahedron") {
      return (
        <svg width="80" height="100" viewBox="0 0 80 100" className="svg-figure">
          <polygon points="40,10 10,70 70,70" className="filled" fillOpacity="0.1" />
          <line x1="40" y1="10" x2="10" y2="70" />
          <line x1="40" y1="10" x2="70" y2="70" />
          <line x1="10" y1="70" x2="70" y2="70" />
          <line x1="40" y1="10" x2="40" y2="70" strokeDasharray="3,3" />
          <text x="42" y="45" fontSize="12">h</text>
          <text x="35" y="75" fontSize="12">b</text>
        </svg>
      );
    } else {
      return (
        <svg width="80" height="100" viewBox="0 0 80 100" className="svg-figure">
          <ellipse cx="40" cy="80" rx="30" ry="10" />
          <line x1="40" y1="10" x2="10" y2="80" />
          <line x1="40" y1="10" x2="70" y2="80" />
          <line x1="40" y1="10" x2="40" y2="80" strokeDasharray="3,3" />
          <text x="42" y="50" fontSize="12">h</text>
          <text x="30" y="85" fontSize="12">r</text>
        </svg>
      );
    }
  };

  // Função de renderização do cubo/prisma
  const renderCubeShape = () => {
    const shape = cubeShapes[currentCubeShape];
    if (shape === "prism") {
      return (
        <svg width="70" height="70" viewBox="0 0 70 70" className="svg-figure">
          <polygon points="10,20 50,20 50,60 10,60" className="filled" fillOpacity="0.1" />
          <polygon points="20,10 60,10 60,50 20,50" className="filled" fillOpacity="0.1" />
          <line x1="10" y1="20" x2="50" y2="20" />
          <line x1="10" y1="60" x2="50" y2="60" />
          <line x1="10" y1="20" x2="10" y2="60" />
          <line x1="50" y1="20" x2="50" y2="60" />
          <line x1="10" y1="20" x2="20" y2="10" />
          <line x1="50" y1="20" x2="60" y2="10" />
          <line x1="50" y1="60" x2="60" y2="50" />
          <line x1="10" y1="60" x2="20" y2="50" />
          <line x1="20" y1="10" x2="60" y2="10" />
          <line x1="20" y1="50" x2="60" y2="50" />
          <line x1="20" y1="10" x2="20" y2="50" />
          <line x1="60" y1="10" x2="60" y2="50" />
          <text x="25" y="40" fontSize="12">a</text>
          <text x="35" y="35" fontSize="12">b</text>
        </svg>
      );
    } else if (shape === "cuboid") {
      return (
        <svg width="70" height="70" viewBox="0 0 70 70" className="svg-figure">
          <polygon points="15,25 55,25 55,55 15,55" className="filled" fillOpacity="0.1" />
          <polygon points="25,15 65,15 65,45 25,45" className="filled" fillOpacity="0.1" />
          <line x1="15" y1="25" x2="55" y2="25" />
          <line x1="15" y1="55" x2="55" y2="55" />
          <line x1="15" y1="25" x2="15" y2="55" />
          <line x1="55" y1="25" x2="55" y2="55" />
          <line x1="15" y1="25" x2="25" y2="15" />
          <line x1="55" y1="25" x2="65" y2="15" />
          <line x1="55" y1="55" x2="65" y2="45" />
          <line x1="15" y1="55" x2="25" y2="45" />
          <line x1="25" y1="15" x2="65" y2="15" />
          <line x1="25" y1="45" x2="65" y2="45" />
          <line x1="25" y1="15" x2="25" y2="45" />
          <line x1="65" y1="15" x2="65" y2="45" />
          <text x="30" y="40" fontSize="12">l</text>
          <text x="37" y="35" fontSize="12">w</text>
          <text x="40" y="50" fontSize="12">h</text>
        </svg>
      );
    } else {
      return (
        <svg width="70" height="70" viewBox="0 0 70 70" className="svg-figure">
          <polygon points="20,20 60,20 60,60 20,60" />
          <polygon points="10,10 50,10 50,50 10,50" />
          <line x1="20" y1="20" x2="10" y2="10" />
          <line x1="60" y1="20" x2="50" y2="10" />
          <line x1="60" y1="60" x2="50" y2="50" />
          <line x1="20" y1="60" x2="10" y2="50" />
          <text x="30" y="40" fontSize="14">a</text>
        </svg>
      );
    }
  };

  // Função de renderização do triângulo
  const renderTriangleShape = () => {
    const shape = triangleShapes[currentTriangleShape];
    if (shape === "equilateral") {
      return (
        <svg width="90" height="70" viewBox="0 0 90 70" className="svg-figure">
          <polygon points="45,10 10,60 80,60" className="filled" fillOpacity="0.1" />
          <line x1="45" y1="10" x2="10" y2="60" />
          <line x1="45" y1="10" x2="80" y2="60" />
          <line x1="10" y1="60" x2="80" y2="60" />
          <line x1="45" y1="10" x2="45" y2="60" strokeDasharray="3,3" />
          <text x="48" y="40" fontSize="12">h</text>
          <text x="43" y="65" fontSize="12">a</text>
        </svg>
      );
    } else if (shape === "scalene") {
      return (
        <svg width="90" height="70" viewBox="0 0 90 70" className="svg-figure">
          <polygon points="20,15 75,40 30,60" className="filled" fillOpacity="0.1" />
          <line x1="20" y1="15" x2="75" y2="40" />
          <line x1="75" y1="40" x2="30" y2="60" />
          <line x1="30" y1="60" x2="20" y2="15" />
          <text x="40" y="25" fontSize="12">a</text>
          <text x="55" y="50" fontSize="12">b</text>
          <text x="25" y="40" fontSize="12">c</text>
        </svg>
      );
    } else {
      return (
        <svg width="90" height="70" viewBox="0 0 90 70" className="svg-figure">
          <polygon points="10,60 80,60 80,10" />
          <text x="40" y="40" fontSize="12">c</text>
          <text x="45" y="65" fontSize="12">a</text>
          <text x="82" y="35" fontSize="12">b</text>
        </svg>
      );
    }
  };

  // Função de renderização do círculo
  const renderCircleShape = () => {
    const shape = circleShapes[currentCircleShape];
    if (shape === "ellipse") {
      return (
        <svg width="80" height="70" viewBox="0 0 80 70" className="svg-figure">
          <ellipse cx="40" cy="35" rx="30" ry="20" className="filled" fillOpacity="0.1" />
          <line x1="10" y1="35" x2="70" y2="35" strokeDasharray="2,2" />
          <line x1="40" y1="15" x2="40" y2="55" strokeDasharray="2,2" />
          <text x="55" y="35" fontSize="12">a</text>
          <text x="40" y="25" fontSize="12">b</text>
        </svg>
      );
    } else if (shape === "arc") {
      return (
        <svg width="80" height="70" viewBox="0 0 80 70" className="svg-figure">
          <path d="M20,50 A30,30 0 0,1 60,50" fill="none" stroke="#4e4945" strokeWidth="1.5" />
          <line x1="20" y1="50" x2="60" y2="50" strokeDasharray="2,2" />
          <line x1="40" y1="20" x2="40" y2="50" />
          <text x="35" y="35" fontSize="12">r</text>
          <text x="38" y="55" fontSize="12">θ</text>
        </svg>
      );
    } else {
      return (
        <svg width="70" height="70" viewBox="0 0 70 70" className="svg-figure">
          <circle cx="35" cy="35" r="30" />
          <line x1="35" y1="35" x2="65" y2="35" />
          <text x="45" y="30" fontSize="12">r</text>
        </svg>
      );
    }
  };

  // Função de renderização do cilindro
  const renderCylinderShape = () => {
    const shape = cylinderShapes[currentCylinderShape];
    if (shape === "tube") {
      return (
        <svg width="70" height="100" viewBox="0 0 70 100" className="svg-figure">
          <ellipse cx="35" cy="20" rx="25" ry="10" />
          <ellipse cx="35" cy="80" rx="25" ry="10" />
          <ellipse cx="35" cy="20" rx="15" ry="5" />
          <ellipse cx="35" cy="80" rx="15" ry="5" />
          <line x1="10" y1="20" x2="10" y2="80" />
          <line x1="60" y1="20" x2="60" y2="80" />
          <line x1="20" y1="20" x2="20" y2="80" />
          <line x1="50" y1="20" x2="50" y2="80" />
          <text x="35" y="50" fontSize="12">h</text>
          <text x="30" y="20" fontSize="12">R</text>
          <text x="30" y="25" fontSize="12">r</text>
        </svg>
      );
    } else if (shape === "prism") {
      return (
        <svg width="70" height="100" viewBox="0 0 70 100" className="svg-figure">
          <polygon points="15,30 55,30 45,10 25,10" className="filled" fillOpacity="0.1" />
          <polygon points="15,80 55,80 45,60 25,60" className="filled" fillOpacity="0.1" />
          <line x1="15" y1="30" x2="15" y2="80" />
          <line x1="55" y1="30" x2="55" y2="80" />
          <line x1="25" y1="10" x2="25" y2="60" />
          <line x1="45" y1="10" x2="45" y2="60" />
          <line x1="15" y1="30" x2="55" y2="30" />
          <line x1="15" y1="80" x2="55" y2="80" />
          <line x1="25" y1="10" x2="45" y2="10" />
          <line x1="25" y1="60" x2="45" y2="60" />
          <text x="35" y="45" fontSize="12">h</text>
        </svg>
      );
    } else {
      return (
        <svg width="70" height="100" viewBox="0 0 70 100" className="svg-figure">
          <ellipse cx="35" cy="20" rx="25" ry="10" />
          <ellipse cx="35" cy="80" rx="25" ry="10" />
          <line x1="10" y1="20" x2="10" y2="80" />
          <line x1="60" y1="20" x2="60" y2="80" />
          <line x1="35" y1="20" x2="35" y2="80" strokeDasharray="3,3" />
          <text x="38" y="50" fontSize="12">h</text>
          <text x="25" y="20" fontSize="12">r</text>
        </svg>
      );
    }
  };

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
          transition: opacity 1s ease;
        }

        .geometry.fade-in {
          opacity: 1;
        }

        .geometry.fade-out {
          opacity: 0;
        }

        .geometry-formula {
          font-size: 1.2rem;
          color: #4e4945;
          opacity: 0.6;
          transition: opacity 1s ease;
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
          transition: opacity 1s ease;
        }

        .math-formula.fade-in {
          opacity: 0.6;
        }

        .math-formula.fade-out {
          opacity: 0;
        }

        .math-formula:nth-child(1) {
          top: 20%;
          left: 35%;
          transform: rotate(0deg);
          font-size: 2rem;
        }

        .math-formula:nth-child(2) {
          top: 70%;
          right: 35%;
          transform: rotate(10deg);
          font-size: 1.8rem;
        }

        .math-formula:nth-child(3) {
          bottom: 30%;
          left: 40%;
          transform: rotate(-5deg);
          font-size: 2.2rem;
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
          
          .math-formula.fade-in {
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
        className="relative h-screen w-full flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: 'url("/bg.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Fórmulas matemáticas com animação */}
        <div className={`math-formula hidden sm:block fade-${fadeState1}`}>
          {formulas1[currentFormula1]}
        </div>
        <div className={`math-formula fade-${fadeState2}`}>
          {formulas2[currentFormula2]}
        </div>
        <div className={`math-formula hidden xs:block fade-${fadeState3}`}>
          {formulas3[currentFormula3]}
        </div>
        
        {/* Figuras geométricas com animação */}
        
        {/* Cone e fórmula de volume */}
        <div className={`geometry hidden md:block fade-${fadeStateGeo1}`} style={{ top: '15%', left: '12%', transform: 'rotate(-8deg)' }}>
          {renderConeShape()}
          <div className="geometry-formula">
            {geometricFormulas1[currentGeoFormula1]}
          </div>
        </div>
        
        {/* Cubo e fórmula de volume */}
        <div className={`geometry hidden md:block fade-${fadeStateGeo2}`} style={{ top: '12%', right: '15%', transform: 'rotate(5deg)' }}>
          {renderCubeShape()}
          <div className="geometry-formula">
            {geometricFormulas2[currentGeoFormula2]}
          </div>
        </div>
        
        {/* Teorema de Pitágoras */}
        <div className={`geometry fade-${fadeStateGeo3}`} style={{ bottom: '15%', left: '15%', transform: 'rotate(-5deg)' }}>
          {renderTriangleShape()}
          <div className="geometry-formula">
            {geometricFormulas3[currentGeoFormula3]}
          </div>
        </div>
        
        {/* Círculo com área */}
        <div className={`geometry fade-${fadeStateGeo4}`} style={{ bottom: '20%', right: '15%', transform: 'rotate(5deg)' }}>
          {renderCircleShape()}
          <div className="geometry-formula">
            {geometricFormulas4[currentGeoFormula4]}
          </div>
        </div>
        
        {/* Fórmula trigonométrica */}
        <div className={`geometry sm:block hidden fade-${fadeStateGeo5}`} style={{ top: '35%', left: '8%', transform: 'rotate(-3deg)' }}>
          <div className="geometry-formula">
            {geometricFormulas5[currentGeoFormula5]}
          </div>
        </div>
        
        {/* Série infinita */}
        <div className={`geometry hidden sm:block fade-${fadeStateGeo6}`} style={{ top: '60%', left: '25%', transform: 'rotate(90deg)' }}>
          <div className="geometry-formula" style={{ fontSize: '1rem' }}>
            {geometricFormulas6[currentGeoFormula6]}
          </div>
        </div>
        
        {/* Cilindro e volume */}
        <div className={`geometry hidden md:block fade-${fadeStateGeo7}`} style={{ top: '35%', right: '10%', transform: 'rotate(10deg)' }}>
          {renderCylinderShape()}
          <div className="geometry-formula">
            {geometricFormulas7[currentGeoFormula7]}
          </div>
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
          className="absolute bottom-0 left-0 transform scale-[2] md:scale-[2] sm:scale-[1.5] xs:scale-[1]"
          priority
        />

        <h1 className={`text-4xl sm:text-5xl md:text-7xl lg:text-9xl text-center leading-relaxed handwriting ${nothingYouCouldDo.className}`} data-text="Raul Primo">
          Raul Primo
        </h1>
      </div>
    </main>
  );
}
