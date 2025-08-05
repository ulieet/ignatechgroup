// components/navigation/Navbar.tsx
import { NavLinks } from "@/components/navigation/NavLinks"
export function Navbar() {
  return (
    <nav className="hidden md:flex space-x-8" aria-label="Menú principal">
      
      <NavLinks className="text-gray-200 hover:text-purple-300 transition-colors" />
      
    </nav>
  )
}
