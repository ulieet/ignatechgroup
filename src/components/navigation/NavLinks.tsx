"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import React from "react"

interface NavLinksProps {
  className?: string
}

export function NavLinks({ className = "" }: NavLinksProps) {
  const pathname = usePathname()
  const router = useRouter()

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

  const handleClick = (e: React.MouseEvent, targetId: string, targetPath: string) => {
    // Si estoy en la misma página y quiero hacer scroll
    if (pathname === targetPath) {
      e.preventDefault()
      smoothScrollTo(targetId)
    }
    // Si es otra página dejo que Next.js haga el routing normal con Link
  }

  return (
    <>
      <Link href="/#inicio" scroll={false} className={className} onClick={(e) => handleClick(e, "inicio", "/")}>
        Inicio
      </Link>

      <Link href="/#servicios" scroll={false} className={className} onClick={(e) => handleClick(e, "servicios", "/")}>
        Servicios
      </Link>

      <Link href="/nosotros" className={className}>
        Nosotros
      </Link>

      <Link href="/#contacto" scroll={false} className={className} onClick={(e) => handleClick(e, "contacto", "/")}>
        Contacto
      </Link>
    </>
  )
}
