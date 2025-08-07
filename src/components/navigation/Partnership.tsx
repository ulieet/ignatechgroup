import Image from "next/image"
import { partners } from "@/data/partner"

export function Partners() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Nuestras colaboraciones
          </h2>
          <p className="text-gray-400 text-sm">
            Empresas que han elegido nuestras soluciones
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-9 rounded-lg bg-slate-600/30 hover:bg-slate-400/50 transition-all duration-300 hover:scale-105"
            >
              <Image
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                width={150}
                height={60}
                className="max-w-full h-auto opacity-70 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
