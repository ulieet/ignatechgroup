import Link from "next/link"
import { NavBar } from "@/components/navigation/NavBar"
import { MobileMenu } from "@/components/navigation/MobileMenu"

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-slate-950/90 backdrop-blur-md border-b border-purple-400/20 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/">
        <img src="/images/Group.svg" alt="Ignatech" className="h-12 cursor-pointer" />
      </Link>
<<<<<<< HEAD
        

        {/* Navbar desktop */}
        <NavBar />

        {/* Menú móvil */}
=======
        <NavBar />
>>>>>>> de4e9fa (DEFINITVO)
        <MobileMenu />
      </div>
    </header>
  )
}
