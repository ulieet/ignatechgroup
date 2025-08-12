import Image from "next/image";
import CardCuadrada from "@/app/nosotros/components/CardCuadrada";
import CardGrande from "@/app/nosotros/components/CardGrande";

export default function Component() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 ">
      <div className="container px-4 md:px-6 mx-auto max-w-6xl">
        <div className="text-center space-y-6 mb-20">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 mt-10">
            Sobre Nosotros
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-purple-700 rounded-full mx-auto mb-8 "></div>
          <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto ">
            Grupo Ignatech nace con la visión de brindar soluciones digitales integrales que transformen la forma en que las empresas gestionan sus procesos y se relacionan con sus clientes. Somos un equipo multidisciplinario dedicado al desarrollo de empresas en su totalidad impulsando su crecimiento mediante soluciones tecnológicas.
          </p>
        </div>

        <div className="mb-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white">Los Inicios: Ignatech</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-purple-700 rounded-full"></div>
              <p className="text-gray-300 text-lg leading-relaxed text-justify">
                En 2018, Ignacio Di Criscio comenzó vendiendo componentes de hardware desde un pequeño espacio de coworking en la ciudad de La Plata, City Bell. Actualmente existan diversos productos que ofrece mas alla de productos de hardware para pc. Más tarde, la idea evolucionó hacia la formación de Grupo Ignatech, un equipo multidisciplinario que ofrece soluciones digitales integrales para llevar los procesos de negocio empresariales al siguiente nivel.</p>
              <p className="text-gray-300 text-lg leading-relaxed text-justify">
                Hoy en Grupo Ignatech somos especialistas en desarrollo web, ciberseguridad, testing, e-commerce y venta de hardware, combinando innovación y calidad para transformar la presencia digital de nuestros clientes. 
              </p>
            </div>
            <div className="relative max-w-4xl mx-auto group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-800 rounded-2xl blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              <Image
                src="/images/inicios.png"
                width={800}
                height={300}
                alt="Equipo actual de Grupo Ignatech"
                className="relative rounded-2xl object-cover border border-slate-700/50 w-full h-auto transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        <CardGrande />

        <div className="text-center space-y-12 mb-20 mt-15">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Grupo Ignatech Hoy</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-purple-700 rounded-full mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
              Hoy somos mucho más que vendedores de componentes. Somos un grupo integral especializado en transformar negocios a través de soluciones digitales completas.
            </p>
          </div>
        </div>

        <div className="relative max-w-4xl mx-auto group">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-800 rounded-2xl blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
          <Image
            src="/images/genteempresa.png"
            width={800}
            height={300}
            alt="Equipo actual de Grupo Ignatech"
            className="relative rounded-2xl object-cover border border-slate-700/50 w-full h-auto transform group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        <CardCuadrada />
      </div>
    </section>
  );
}
