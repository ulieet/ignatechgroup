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

  const handleClick = async (e: React.MouseEvent, targetId: string, targetPath: string) => {
    e.preventDefault()

    if (pathname !== targetPath) {
     
      await router.push(targetPath)
  
      smoothScrollTo(targetId)
    } else {
    
      smoothScrollTo(targetId)
    }
  }

  return (
    <>
      <Link href="/#inicio" scroll={false} className={className} onClick={(e) => handleClick(e, "inicio", "/")}>
        Inicio
      </Link>

      <Link href="/#servicios" scroll={false} className={className} onClick={(e) => handleClick(e, "servicios", "/")}>
        Servicios
      </Link>

       <Link href="/#contacto" scroll={false} className={className} onClick={(e) => handleClick(e, "contacto", "/")}>
        Contacto
      </Link>

      <Link href="/nosotros" className={className}>
        Nosotros
      </Link>

     
    </>
  )
}
