// Paquetes externos
import Link from "next/link"
import { Menu } from "lucide-react"
import { DialogTitle } from "@radix-ui/react-dialog"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"

// Componentes internos
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { NavLinks } from "@/components/navigation/NavLinks"

export function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden text-white" aria-label="Abrir menú de navegación">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>

      <SheetContent side="right" className="bg-slate-950 border-l border-purple-400/20 text-white px-5">
        <DialogTitle>
          <VisuallyHidden>Menú de navegación móvil</VisuallyHidden>
        </DialogTitle>

        <nav className="flex flex-col gap-6 py-3" aria-label="Menú móvil">
          <div className="font-bold text-white mb-5">
            <h1 className="font-semibold">
              <Link href="/" aria-label="Inicio Grupo Ignatech" className="text-white">
                <span>Grupo </span>
                <span className="text-purple-300">Ignatech</span>
              </Link>
            </h1>
          </div>

          <NavLinks className="text-gray-200 hover:text-purple-300 transition-colors text-lg font-medium" />
        </nav>
      </SheetContent>
    </Sheet>
  )
}
