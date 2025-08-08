"use client"

import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from 'lucide-react'
import { services } from "@/data/services"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function Services() {
  return (
    <section id="servicios" className="py-15 px-4 mb-10 mt-10 bg-slate-900/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-white mb-20"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Nuestros Servicios
          </motion.h2>
          <motion.p 
            className="text-gray-300 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Ofrecemos soluciones tecnológicas integrales para impulsar tu negocio
          </motion.p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="h-full"
            >
              <Card className="bg-slate-800/50 border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 h-full flex flex-col">
                <CardContent className="p-6 flex flex-col h-full">
                  <service.icono className="w-12 h-12 text-purple-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 flex-grow">{service.description}</p>
                  <Button
                    asChild
                    size="sm"
                    className="mt-6 bg-purple-600 hover:bg-purple-700 text-white shadow-md hover:shadow-purple-500/30 transition-all duration-300 self-start rounded-md"
                  >
                    <a
                      href={service.link}
                      className="inline-flex items-center gap-1 group"
                      target={service.link.startsWith('http') ? "_blank" : "_self"}
                      rel={service.link.startsWith('http') ? "noopener noreferrer" : undefined}
                    >
                      {service.cta || "Saber más"}
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
