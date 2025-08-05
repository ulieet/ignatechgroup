// app/layout.tsx
import "./globals.css";
import Header from "@/components/navigation/Header"
import { Footer } from "@/components/navigation/Footer";
import ProyectosGrid from "@/components/navigation/ProyectGrid"
import {Services} from "@/components/navigation/ServicesGrid"
import ContactFormSection from "@/components/navigation/Formus"
import FloatingLogo from "@/components/navigation/Floatwsp";


export const metadata = {
  title: "grupo ignatech",
  description: "No hay desc",
};

export default function RootLayout({
  children,
}: {s
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 ">
        {children}
        <Header/>
        <FloatingLogo/>
        <ProyectosGrid/>
        
        <Services/>
        
      <ContactFormSection/>
       
        <Footer/>
      </body>
      
    </html>
  );
}
