import Link from "next/link"
import { NavBar } from "@/components/navigation/NavBar"
import { MobileMenu } from "@/components/navigation/MobileMenu"
import Image from "next/image"

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-slate-950/90 border-b border-purple-400/20 z-50 transform-gpu will-change-transform transition-transform duration-300 ease-out">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/">
          <Image
            src="/images/Group.svg"
            alt="Ignatech"
            width={180}
            height={48}
            className="w-[180px] h-[48px] object-contain cursor-pointer"
            priority={true}
          />
        </Link>
        <NavBar />
        <MobileMenu />
      </div>
    </header>
  )
}
