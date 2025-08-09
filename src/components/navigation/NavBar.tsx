import { NavLinks } from "@/components/navigation/NavLinks"

export function NavBar() {
  return (
    <nav
      className="hidden md:flex space-x-8 transition-colors duration-300 ease-out"
      aria-label="Menú principal"
    >
      <NavLinks className="text-gray-200 hover:text-purple-300 transition-colors duration-300 ease-out" />
    </nav>
  )
}
