"use client"

import { Card, CardContent } from "@/components/ui/card"
import { proyectos } from "@/data/proyectos"
import Image from "next/image"
import { motion } from "framer-motion"

export default function ProjectsSection() {
  return (
    <section className="py-20 px-4 bg-slate-900/50 mt-20 mb-10">
      <div className="container mx-auto mb-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">Nuestros Proyectos Destacados</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Explora algunos de los trabajos que hemos realizado para nuestros clientes.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {proyectos.map((project, index) => (
            <motion.div
              key={index}
              className="w-full h-full"
              initial={{ opacity: 0.5, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <Card className="w-full h-full flex flex-col justify-between bg-slate-800/50 border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:scale-105 hover:shadow-lg overflow-hidden">
                <Image
                  src={project.imageUrl || "/placeholder.svg"}
                  alt={project.titulo}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{project.titulo}</h3>
                  <p className="text-gray-300 text-sm">{project.descripcion}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
