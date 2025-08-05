// components/navigation/Header.tsx
import Link from "next/link"
import { Navbar } from "@/components/navigation/NavBar"
import { MobileMenu } from "@/components/navigation/MobileMenu"

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-slate-950/90 backdrop-blur-md border-b border-purple-400/20 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo y nombre */}
        <div className="text-2xl font-bold text-white">
          <h1 className="text-xl font-semibold">
            <Link href="/" aria-label="Inicio Grupo Ignatech" className="text-white">
              <span>Grupo </span>
              <span className="text-purple-300">Ignatech</span>
            </Link>
          </h1>
        </div>

        {/* Navbar desktop */}
        <Navbar />

        {/* Menú móvil */}
        <MobileMenu />
      </div>
    </header>
  )
}
