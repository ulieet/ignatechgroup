"use client"

export default function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-2">
      <div className="container mx-auto text-center">

        {/* Título principal con animación */}
        <div className="mb-5">
          <h1 className="text-4xl md:text-7xl font-bold text-white mb-10 animate-fade-in-up">
            <span className="animate-glow">Grupo</span>{" "}
            <span className="k text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300 animate-pulse-slow">
              Ignatech
            </span>
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto animate-expand"></div>
        </div>

        <p className="text-xl md:text-2xl text-gray-200 mb-4 max-w-4xl mx-auto animate-fade-in-up animation-delay-300">
          Transformamos Ideas en Soluciones Digitales
        </p>

        <p className="text-lg text-gray-300 mb-10 max-w-3xl mx-auto animate-fade-in-up animation-delay-500">
          Especialistas en desarrollo web, ciberseguridad, testing y e-commerce. Llevamos tu negocio al siguiente nivel
          con tecnología de vanguardia.
        </p>

        {/* Botones reemplazados con enlaces */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-700">
          <a
            href="#"
            className="text-center px-6 py-3 text-lg font-medium rounded-md bg-purple-600 hover:bg-purple-700 text-white shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
          >
            Comenzar Proyecto
          </a>
          <a
            href="#"
            className="text-center px-6 py-3 text-lg font-medium rounded-md border border-purple-400 text-purple-200 hover:bg-purple-600/20 bg-transparent hover:border-purple-300 transition-all duration-300"
          >
            Ver Portfolio
          </a>
        </div>
      </div>

      {/* Estilos animaciones */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes glow {
          0%, 100% {
            text-shadow: 0 0 20px rgba(168, 85, 247, 0.5);
          }
          50% {
            text-shadow: 0 0 30px rgba(168, 85, 247, 0.8), 0 0 40px rgba(168, 85, 247, 0.6);
          }
        }

        @keyframes expand {
          from {
            width: 0;
          }
          to {
            width: 8rem;
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animate-glow {
          animation: glow 3s ease-in-out infinite;
        }

        .animate-expand {
          animation: expand 1.5s ease-out 1s forwards;
          width: 0;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animation-delay-300 {
          animation-delay: 0.3s;
          opacity: 0;
        }

        .animation-delay-500 {
          animation-delay: 0.5s;
          opacity: 0;
        }

        .animation-delay-700 {
          animation-delay: 0.7s;
          opacity: 0;
        }
      `}</style>
    </section>
  )
}
