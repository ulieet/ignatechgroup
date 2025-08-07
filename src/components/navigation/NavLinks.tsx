
import Link from "next/link"

interface NavLinksProps {
  className?: string
}

export function NavLinks({ className = "" }: NavLinksProps) {
  return (
    <>
      <Link href="#inicio" className={className}>
        Inicio
      </Link>
      <Link href="#servicios" className={className}>
        Servicios
      </Link>
      <Link href="#nosotros" className={className}>
        Nosotros
      </Link>
      
      <Link href="#contacto" className={className}>
        Contacto
      </Link>

    </>
  )
}
