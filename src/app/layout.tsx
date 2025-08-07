import "./globals.css";
import Header from "@/components/navigation/Header";
import { Footer } from "@/components/navigation/Footer";
import FloatingLogo from "@/components/navigation/Floatwsp";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
        <Header />
        <FloatingLogo />
        
        <main className="min-h-screen">{children}</main>
        
        <Footer />
      </body>
    </html>
  );
}
