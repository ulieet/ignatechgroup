// app/layout.tsx
import "./globals.css";
import Header from "../components/navigation/Header"
import { Footer } from "../components/navigation/Footer";
export const metadata = {
  title: "Mi App",
  description: "Descripción de mi app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 ">
        {children}
        <Header/>
        <Footer/>
      </body>
      
    </html>
  );
}
