
import {FiMessageCircle, FiLinkedin, FiGithub} from "react-icons/fi"

export function Footer() {
  return (
    <footer id="contacto" className="py-12 px-4 bg-slate-950 border-t border-purple-400/20">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8">

          <div className="md:col-span-2">
            <div className="text-2xl font-bold text-white mb-4">
              Grupo <span className="text-purple-300">Ignatech</span>
            </div>
            <p className="text-gray-300 mb-4">
              Transformamos ideas en soluciones digitales innovadoras que impulsan el crecimiento de tu negocio.
            </p>
          </div>

          <section>
            <h4 className="font-semibold text-white mb-4">Servicios</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Testing & QA</li>
              <li>Ciberseguridad</li>
              <li>Desarrollo Web</li>
              <li>E-commerce</li>
            </ul>
          </section>

          <section>
            <h4 className="font-semibold text-white mb-4">Contacto</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="mailto:contacto@tusitio.com" className="hover:underline">info@grupoignatech.com</a></li>
              
              <li><a href="https://wa.me/5491123456789" className="hover:underline flex gap-1" >Whatsapp <FiMessageCircle size={24} className="text-emerald-600"/></a></li> 
              <li><a href="https://linkedin.com/in/tu-perfil" className="hover:underline flex gap-3">LinkedIn <FiLinkedin size={24} className="text-blue-400" /></a></li>
              <li><a href="https://github.com/tu-perfil" className="hover:underline flex gap-4">GitHub <FiGithub size={24} className="text-white" /></a></li>
            </ul>
          </section>
        </div>

        <div className="border-t border-purple-400/20 mt-20 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Grupo Ignatech. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
