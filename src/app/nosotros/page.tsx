"use client"
import Hero from "@/app/nosotros/components/Hero"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Hero />
      </motion.div>
    </>
  )
}
