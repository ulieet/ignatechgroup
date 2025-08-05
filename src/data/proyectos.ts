// data/proyectos.ts (o donde tengas ese archivo)
export interface ProyectoTarjeta {
  titulo: string
  descripcion: string
  imageUrl?: string
  link?: string
}

export const proyectos: ProyectoTarjeta[] = [
  {
    titulo: "Tienda de moda urbana",
    descripcion: "Ecommerce con pasarela de pago y diseño responsive.",
    imageUrl: "/images/tienda.jpg",
    link: "https://tienda-moda.com",
    
  },
  {
    titulo: "Landing Page Automores",
    descripcion: "Diseño elegante con menu interactivo.",
    imageUrl: "/images/restaurante.jpg",
    link: "https://resto-ejemplo.com",
  },
  {
    titulo: "Gestión Empresarial",
    imageUrl: "/images/restaurante.jpg",
    descripcion: "Sistema interno para empresas medianas.",
  },

  {
    titulo: "Gestión Empresarial",
    imageUrl: "/images/cybersecurity.png",
    descripcion: "Sistema interno para empresas medianas.",
  },
]
