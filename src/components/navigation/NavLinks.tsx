"use client"

import { usePathname, useRouter } from "next/navigation"
import React from "react"

interface NavLinksProps {
  className?: string
}

export function NavLinks({ className = "" }: NavLinksProps) {
  const pathname = usePathname()
  const router = useRouter()

  // Scroll con doble requestAnimationFrame para evitar saltos
  const smoothScrollTo = (id: string) => {
    let tries = 0
    const maxTries = 15

    const attemptScroll = () => {
      const el = document.getElementById(id)
      if (el) {
        window.requestAnimationFrame(() => {
          el.scrollIntoView({ behavior: "smooth" })
          window.requestAnimationFrame(() => {
            el.scrollIntoView({ behavior: "smooth" })
          })
        })
        window.history.replaceState(null, "", `/#${id}`)
      } else if (tries < maxTries) {
        tries++
        setTimeout(attemptScroll, 100)
      }
    }
    attemptScroll()
  }

  const handleScrollOrNavigate = (e: React.MouseEvent, targetId: string, targetPath: string) => {
    e.preventDefault()

    if (pathname === targetPath) {
      smoothScrollTo(targetId)
    } else {
      // Navegar incluyendo el hash para que Home detecte y haga scroll
      router.push(`${targetPath}#${targetId}`)
    }
  }

  return (
    <>
      <a href="/#inicio" className={className} onClick={(e) => handleScrollOrNavigate(e, "inicio", "/")}>
        Inicio
      </a>

      <a href="/#servicios" className={className} onClick={(e) => handleScrollOrNavigate(e, "servicios", "/")}>
        Servicios
      </a>

      <a href="/nosotros" className={className}>
        Nosotros
      </a>

      <a href="/#contacto" className={className} onClick={(e) => handleScrollOrNavigate(e, "contacto", "/")}>
        Contacto
      </a>
    </>
  )
}
