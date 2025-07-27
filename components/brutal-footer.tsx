"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Instagram, Twitter, Linkedin, ArrowUp, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import FloatingElement from "./floating-element"

export default function BrutalFooter() {
  const [email, setEmail] = useState("")
  const [isHovered, setIsHovered] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter signup
    console.log("Newsletter signup:", email)
    setEmail("")
    // Show success message or toast
  }

  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-white/20"></div>

      <FloatingElement
        xFactor={20}
        rotateFactor={10}
        className="absolute top-[10%] right-[5%] w-32 h-32 border border-white/10"
      >
        <div className="w-full h-full rotate-45"></div>
      </FloatingElement>

      <FloatingElement
        xFactor={-15}
        yFactor={10}
        rotateFactor={-5}
        className="absolute bottom-[20%] left-[10%] w-24 h-24 border border-white/10"
      >
        <div className="w-full h-full -rotate-12"></div>
      </FloatingElement>

      {/* Main footer content */}
      <div className="container mx-auto px-4 pt-24 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Left column - Logo and info */}
          <div className="md:col-span-4">
            <Link href="/" className="inline-block mb-6">
              <div className="flex items-center">
                <div className="relative">
                  <span className="text-3xl font-bold tracking-tighter">MONOLITH CREW</span>
                  <div className="absolute -bottom-1 left-0 w-full h-[2px]">
                    <div className="w-full h-full bg-red-500"></div>
                  </div>
                </div>
              </div>
            </Link>

            <p className="text-white/70 mb-8 max-w-xs">
              Straight fire fits that live rent-free in your head. No cap, we're pushing boundaries and serving main
              character energy.
            </p>

            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 border border-white/30 flex items-center justify-center hover:border-red-500 hover:text-red-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-white/30 flex items-center justify-center hover:border-red-500 hover:text-red-500 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-white/30 flex items-center justify-center hover:border-red-500 hover:text-red-500 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Middle column - Quick links with unconventional layout */}
          <div className="md:col-span-3 md:col-start-6">
            <h3 className="text-lg font-bold mb-6 relative inline-block">
              QUICK LINKS
              <div className="absolute -bottom-1 left-0 w-full h-[2px]">
                <div className="w-1/2 h-full bg-red-500"></div>
              </div>
            </h3>

            <ul className="space-y-4">
              {[
                { name: "THE DRIP", href: "#projects" },
                { name: "VIBE CHECK", href: "#about" },
                { name: "LINK UP", href: "#contact" },
                { name: "OUR SAUCE", href: "#services" },
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="group flex items-center text-white/70 hover:text-white transition-colors"
                  >
                    <span className="w-0 h-[1px] bg-red-500 mr-0 group-hover:w-4 group-hover:mr-2 transition-all duration-300"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right column - Newsletter with brutalist design */}
          <div className="md:col-span-3 md:col-start-10">
            <h3 className="text-lg font-bold mb-6 relative inline-block">
              STAY POSTED
              <div className="absolute -bottom-1 left-0 w-full h-[2px]">
                <div className="w-1/2 h-full bg-red-500"></div>
              </div>
            </h3>

            <p className="text-white/70 mb-4">Drop your email for the latest tea and exclusive drops.</p>

            <form onSubmit={handleSubmit} className="relative">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="w-full p-3 bg-transparent border border-white/30 focus:border-red-500 outline-none transition-colors pr-12"
                  required
                />
                <Button
                  type="submit"
                  className="absolute right-0 top-0 h-full aspect-square bg-transparent hover:bg-red-500 border-l border-white/30"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom section with copyright and back to top */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10">
          <p className="text-sm text-white/50 mb-4 md:mb-0">
            © {new Date().getFullYear()} MONOLITH CREW. All rights reserved.
          </p>

          <div className="flex items-center space-x-6">
            <Link href="/privacy" className="text-sm text-white/50 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-white/50 hover:text-white transition-colors">
              Terms of Service
            </Link>

            <motion.a
              href="#"
              className="w-10 h-10 border border-white/30 flex items-center justify-center hover:border-red-500 hover:text-red-500 transition-colors"
              aria-label="Back to top"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              animate={{ y: isHovered ? -3 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowUp className="w-5 h-5" />
            </motion.a>
          </div>
        </div>
      </div>

      {/* Decorative background text */}
      <FloatingElement
        yFactor={30}
        scaleFactor={0.5}
        className="absolute bottom-0 right-0 text-[200px] font-bold text-white/3 pointer-events-none select-none leading-none opacity-10 hidden md:block"
      >
        2024
      </FloatingElement>
    </footer>
  )
}
