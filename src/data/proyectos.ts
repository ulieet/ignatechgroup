// data/proyectos.ts (o donde tengas ese archivo)
export interface ProyectoTarjeta {
  titulo: string
  descripcion: string
  imageUrl?: string
  link?: string
  cta?: string
}

export const proyectos: ProyectoTarjeta[] = [
  {
    titulo: "Tienda de moda urbana",
    descripcion: "Creación de una plataforma e-commerce escalable con pasarela de pagos integrada y gestión de inventario..",
    imageUrl: "/images/ecommerce.png",
    link: "#", //obvio falta linkear aca los links con las distintas paginas
    cta: "Explorar",
  },
  {
    titulo: "Landing Page Automores",
    descripcion: "Diseño elegante con menu interactivo.",
    imageUrl: "/images/autos.png",
    link: "#",
    cta: "Explorar",
  },
  {
    titulo: "Proteccion de Ciberseguridad",
    imageUrl: "/images/cybersecurity.png",
    descripcion: "Defendé tu infraestructura digital con sistemas avanzados de detección de amenazas, protección de redes y gestión de vulnerabilidades.",
    link: "#",
    cta: "Ver soluciones"
  },

  {
    titulo: "Gestión Empresarial",
    imageUrl: "/images/empresa.png",
    descripcion: "Desarrollo de un sistema ERP a medida para optimizar operaciones internas de una gran corporación..",
    link: "#", 
    cta: "Conocer Más",
  },



]


