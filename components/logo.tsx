"use client"

import Link from "next/link"
import { motion } from "framer-motion"

interface LogoProps {
  className?: string
}

export default function Logo({ className = "" }: LogoProps) {
  return (
    <Link href="/" className={`font-bold text-xl group inline-block ${className}`}>
      <motion.div
        className="flex items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="relative flex items-center justify-center w-8 h-8 mr-2 rounded-full bg-gradient-to-r from-primary to-secondary text-white"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-lg font-bold">G</span>
        </motion.div>
        <span>
          Ghazanfar<span className="text-primary group-hover:text-secondary transition-colors duration-300">.</span>
        </span>
      </motion.div>
    </Link>
  )
}

