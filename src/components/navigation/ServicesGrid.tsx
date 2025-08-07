import { Card, CardContent} from "@/components/ui/card"
import { ArrowRight } from 'lucide-react' // Importar ArrowRight
import { services } from "@/data/services"
import { Button } from "@/components/ui/button" 

export function Services() {
  return (
    <section id="servicios" className="py-20 px-4 mb-8 ">
      <div className="container mx-auto"> 
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
              className="bg-slate-800/50 border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:transform hover:scale-105">
              <CardContent className="p-6">
                <service.icon className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
                <Button
                  asChild
                  size="sm"
                  className="mt-10 bg-purple-600 hover:bg-purple-700 text-white shadow-md hover:shadow-purple-500/30 transition-all duration-300 self-start rounded-md">
                    <a href={service.link || "#"} className="inline-flex items-center gap-1 group">
                    Saber más
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" /></a>
                  </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
