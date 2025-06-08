"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"

interface NavbarProps {
  darkMode: boolean
  setDarkMode: (value: boolean) => void
}

export default function Navbar({ darkMode, setDarkMode }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = ["About", "Projects", "Skills", "Contact"]

  const handleNavClick = (e: React.MouseEvent, item: string) => {
    e.preventDefault()
    e.stopPropagation()

    // Close mobile menu if open
    setMobileMenuOpen(false)

    // Smooth scroll to section
    const element = document.getElementById(item.toLowerCase())
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  const handleDarkModeToggle = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDarkMode(!darkMode)
  }

  const handleMobileMenuToggle = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/80 dark:bg-gray-900/80 border-b-2 border-gray-300 dark:border-gray-700"
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="text-xl font-bold border-2 border-gray-900 dark:border-white px-3 py-1 bg-yellow-400 dark:bg-yellow-500 text-gray-900"
        >
          {"<M/>"}
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <motion.button
              key={item}
              onClick={(e) => handleNavClick(e, item)}
              whileHover={{ scale: 1.1 }}
              className="hover:text-yellow-500 transition-colors border-2 border-transparent hover:border-yellow-500 px-2 py-1 bg-transparent cursor-pointer"
            >
              {item}
            </motion.button>
          ))}
        </div>

        {/* Mobile Navigation and Dark Mode Toggle Container */}
        <div className="flex items-center space-x-2">
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              className="border-2 border-gray-900 dark:border-white"
              onClick={handleMobileMenuToggle}
            >
              <span className="sr-only">Open menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>

            {/* Mobile Menu Dropdown */}
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 border-4 border-gray-900 dark:border-white shadow-lg"
                style={{ zIndex: 1000 }}
              >
                <div className="py-2">
                  {navItems.map((item) => (
                    <button
                      key={item}
                      onClick={(e) => handleNavClick(e, item)}
                      className="block w-full text-left px-4 py-2 hover:bg-yellow-400 dark:hover:bg-yellow-500 hover:text-gray-900 transition-colors"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          {/* Dark Mode Toggle */}
          <Button
            onClick={handleDarkModeToggle}
            className="border-2 border-gray-900 dark:border-white hover:bg-yellow-400 dark:hover:bg-yellow-500 h-8 px-2"
          >
            {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
        </div>
      </div>
    </motion.nav>
  )
}
