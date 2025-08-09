"use client"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-2 mt-7">
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-10"
        >
          <h1 className="text-4xl md:text-7xl font-bold text-white mb-10">
            <motion.span
              animate={{
                textShadow: [
                  "0 0 20px rgba(168, 85, 247, 0.5)",
                  "0 0 30px rgba(168, 85, 247, 0.8), 0 0 40px rgba(168, 85, 247, 0.6)",
                  "0 0 20px rgba(168, 85, 247, 0.5)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity, repeatType: "loop" }}
            >
              Grupo
            </motion.span>{" "}
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300"
              animate={{ opacity: [1, 0.8, 1] }}
              transition={{ duration: 4, repeat: Infinity, repeatType: "loop" }}
            >
              Ignatech
            </motion.span>
          </h1>
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "8rem", opacity: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="text-xl md:text-2xl text-gray-200 mb-4 max-w-4xl mx-auto"
        >
          Transformamos tu negocio en Soluciones Digitales
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="text-lg text-gray-300 mb-10 max-w-3xl mx-auto"
        >
          Especialistas en desarrollo web, ciberseguridad, testing y e-commerce. Llevamos tu negocio al siguiente nivel.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#"
            className="text-center px-6 py-3 text-lg font-medium rounded-md bg-purple-600 hover:bg-purple-700 text-white shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
          >
            Pedir Cotización
          </a>
          <a
            href="#"
            className="text-center px-6 py-3 text-lg font-medium rounded-md border border-purple-400 text-purple-200 hover:bg-purple-600/20 bg-transparent hover:border-purple-300 transition-all duration-300"
          >
            Ver Proyectos
          </a>
        </motion.div>
      </div>
    </section>
  )
}
