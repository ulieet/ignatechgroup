"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export function ScrollToHashOnRouteChange() {
  const pathname = usePathname()

  useEffect(() => {

    const timeout = setTimeout(() => {
      const hash = window.location.hash.replace("#", "")
      if (hash) {
        const el = document.getElementById(hash)
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" })
        }
      }
    }, 900)

    return () => clearTimeout(timeout)
  }, [pathname])

  return null
}
