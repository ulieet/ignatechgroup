"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

import Hero from "@/components/navigation/Hero";
import ProyectosGrid from "@/components/navigation/ProyectGrid";
import { Services } from "@/components/navigation/ServicesGrid";
import ContactFormSection from "@/components/navigation/Formus";
import { TestimonialsSection } from "@/components/navigation/testimonials-section";
import { Partners } from "@/components/navigation/Partnership";

export default function Home() {
  const pathname = usePathname()

  useEffect(() => {
    if (pathname === "/") {
      const hash = window.location.hash
      if (hash) {
        const id = hash.substring(1)
        const el = document.getElementById(id)
        if (el) {
          setTimeout(() => {
            el.scrollIntoView({ behavior: "smooth" })
          }, 100)
        }
      }
    }
  }, [pathname])

  return (
    <>
      <section id="inicio" className="scroll-mt-24">
        <Hero />
      </section>

      <section id="servicios" className="scroll-mt-24">
        <Services />
      </section>
      
      <section id="proyectos" className="scroll-mt-24">
        <ProyectosGrid />
      </section>

      <section id="testimonios" className="scroll-mt-24">
        <TestimonialsSection />
      </section>

      <section id="partner" className="scroll-mt-24">
        <Partners />
      </section>
      
      <section id="contacto" className="scroll-mt-24">
        <ContactFormSection />
      </section>
    </>
  )
}
