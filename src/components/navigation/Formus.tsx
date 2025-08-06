import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MessageCircle, Mail } from "lucide-react" 

export default function ContactFormSection() {
  return (
    <section id="contacto-form" className="py-20 px-4 bg-slate-900/50">
      <div className="container mx-auto max-w-3xl">
     
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">¿Listo para Transformar tu Negocio?</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Contáctanos hoy y descubre cómo podemos llevar tu proyecto al siguiente nivel
          </p>
        </div>

      
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button
            asChild
            size="lg"
            className="bg-purple-600 hover:bg-purple-700 text-white shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
          >
            <a
              href="https://wa.me/5492213183837"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2"
            >
              Whatsapp <MessageCircle size={20} className="text-emerald-300" />
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            className="bg-purple-600 hover:bg-purple-700 text-white shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
          >
            <a href="mailto:info@grupoignatech.com" className="flex items-center justify-center gap-2">
              Mail <Mail size={20} className="text-blue-300" />
            </a>
          </Button>
        </div>


        <form className="space-y-6 bg-slate-800/50 p-8 rounded-lg border border-purple-500/20 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="name" className="text-gray-200 mb-2 block">
                Nombre Completo
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="Tu nombre"
                className="bg-slate-700/50 border-purple-500/30 text-white placeholder:text-gray-400 focus:border-purple-500 focus:ring-purple-500"
              />
            </div>
            <div>
              <Label htmlFor="email" className="text-gray-200 mb-2 block">
                Correo Electrónico
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="tu@ejemplo.com"
                className="bg-slate-700/50 border-purple-500/30 text-white placeholder:text-gray-400 focus:border-purple-500 focus:ring-purple-500"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="subject" className="text-gray-200 mb-2 block">
              Asunto
            </Label>
            <Input
              id="subject"
              type="text"
              placeholder="Asunto de tu mensaje"
              className="bg-slate-700/50 border-purple-500/30 text-white placeholder:text-gray-400 focus:border-purple-500 focus:ring-purple-500"
            />
          </div>

          <div>
            <Label htmlFor="message" className="text-gray-200 mb-2 block">
              Tu Mensaje
            </Label>
            <Textarea
              id="message"
              placeholder="Escribe tu mensaje aquí..."
              rows={5}
              className="bg-slate-700/50 border-purple-500/30 text-white placeholder:text-gray-400 focus:border-purple-500 focus:ring-purple-500"
            />
          </div>

          <Button type="submit" size="lg" className="w-full bg-purple-600 hover:bg-purple-700 text-white">
            Enviar Mensaje
          </Button>
        </form>
      </div>
    </section>
  )
}
