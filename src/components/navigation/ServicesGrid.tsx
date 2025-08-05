import { Card, CardContent } from "@/components/ui/card"
import { services } from "@/data/services"

export function Services() {
  return (
    <section id="servicios" className="py-20 px-4 mb-50">
      <div className="container mx-auto"> {/* Contenedor de todo o sea el fondo */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-20">Nuestros Servicios</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Ofrecemos soluciones tecnológicas integrales para impulsar tu negocio
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-slate-800/50 border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:transform hover:scale-105"
            >
              <CardContent className="p-6">
                <service.icon className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
