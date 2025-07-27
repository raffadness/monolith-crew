"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ArrowUpRight } from "lucide-react"

export default function BrutalHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  // Track scroll position for header styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Determine active section based on current path
  const getActiveSection = (path: string) => {
    if (path === "/") return "home"
    if (path.includes("/projects")) return "projects"
    if (path.includes("/about")) return "about"
    if (path.includes("/contact")) return "contact"
    return ""
  }

  const activeSection = getActiveSection(pathname)

  // Close mobile menu when changing pages
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  return (
    <>
      {/* Main Header */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "py-3 bg-black/90 backdrop-blur-sm" : "py-6 bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="relative z-50">
              <div className="flex items-center">
                <div className="relative">
                  <span className="text-xl font-bold tracking-tighter">MONOLITH CREW</span>
                  <div className="absolute -bottom-1 left-0 w-full h-[2px]">
                    <div className="w-full h-full bg-red-500"></div>
                  </div>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation - Unconventional layout */}
            <nav className="hidden md:flex items-center">
              <ul className="flex">
                {[
                  { name: "THE DRIP", href: "/projects", section: "projects" },
                  { name: "VIBE CHECK", href: "/about", section: "about" },
                  { name: "LINK UP", href: "/contact", section: "contact" },
                ].map((item, index) => (
                  <li key={index} className="relative mx-2">
                    <Link
                      href={item.href}
                      className={`px-4 py-2 flex items-center group ${
                        activeSection === item.section ? "text-red-500" : "text-white"
                      }`}
                    >
                      <span className="relative overflow-hidden">
                        {/* Text with hover effect */}
                        <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">
                          {item.name}
                        </span>
                        <span className="absolute top-0 left-0 inline-block translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                          {item.name}
                        </span>
                      </span>

                      {/* Active indicator */}
                      {activeSection === item.section && (
                        <motion.div
                          layoutId="activeSection"
                          className="absolute bottom-0 left-0 w-full h-[2px] bg-red-500"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* CTA Button with unique styling */}
              <div className="ml-8">
                <Link href="/contact" className="relative inline-flex items-center px-6 py-2 overflow-hidden group">
                  <span className="absolute left-0 top-0 w-full h-full border border-white transition-all duration-300 group-hover:border-red-500"></span>
                  <span className="relative flex items-center">
                    COLLAB SZN
                    <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                </Link>
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden relative z-50 w-10 h-10 flex items-center justify-center"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              <div className="relative w-6 h-6">
                <AnimatePresence mode="wait">
                  {mobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <X className="w-6 h-6" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <Menu className="w-6 h-6" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black"
          >
            <div className="flex flex-col items-center justify-center h-full">
              <nav className="flex flex-col items-center space-y-8">
                {[
                  { name: "THE DRIP", href: "/projects", section: "projects" },
                  { name: "VIBE CHECK", href: "/about", section: "about" },
                  { name: "LINK UP", href: "/contact", section: "contact" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <Link
                      href={item.href}
                      className={`text-3xl font-bold hover:text-red-500 transition-colors relative group ${
                        activeSection === item.section ? "text-red-500" : "text-white"
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                      <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-red-500 transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mt-8 pt-8 border-t border-white/20 w-48 flex justify-center"
                >
                  <Link
                    href="/contact"
                    className="relative inline-flex items-center px-6 py-2 overflow-hidden group"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="absolute left-0 top-0 w-full h-full border border-white transition-all duration-300 group-hover:border-red-500"></span>
                    <span className="relative flex items-center">
                      COLLAB SZN
                      <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </span>
                  </Link>
                </motion.div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
