'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element
      if (!target.closest('.mobile-menu-container')) {
        setIsMobileMenuOpen(false)
      }
    }

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMobileMenuOpen])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-white/98 backdrop-blur-xl shadow-2xl border-b border-gray-100' : 'bg-transparent'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between py-4 md:py-5">
          {/* Left Section: Logo + Navigation Menu */}
          <div className="flex items-center space-x-4 md:space-x-8">
            {/* Logo */}
            <div className="flex items-center space-x-2 md:space-x-3 group">
              <Image
                src="/logo.png"
                alt="Company Logo"
                width={120}
                height={40}
                className="h-8 md:h-11 w-auto transition-transform duration-300 hover:scale-105"
              />
              <div className="hidden sm:block">

              </div>
            </div>
            
            {/* Desktop Navigation Menu */}
            <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6">
              <a href="/" className={`font-medium text-xs md:text-sm uppercase tracking-wider transition-all duration-300 relative group ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}>
                <span className="relative z-10">Home</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="/services" className={`font-medium text-xs md:text-sm uppercase tracking-wider transition-all duration-300 relative group ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}>
                <span className="relative z-10">Services</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="/process" className={`font-medium text-xs md:text-sm uppercase tracking-wider transition-all duration-300 relative group ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}>
                <span className="relative z-10">Processes</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="/collections" className={`font-medium text-xs md:text-sm uppercase tracking-wider transition-all duration-300 relative group ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}>
                <span className="relative z-10">Collections</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="/our-story" className={`font-medium text-xs md:text-sm uppercase tracking-wider transition-all duration-300 relative group ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}>
                <span className="relative z-10">Our Story</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="/blog" className={`font-medium text-xs md:text-sm uppercase tracking-wider transition-all duration-300 relative group ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}>
                <span className="relative z-10">Blog</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </nav>
          </div>

          {/* Right Section: Language + Contact + Mobile Menu */}
          <div className="flex items-center space-x-3 md:space-x-6">
            {/* Language Selector - Hidden on mobile */}
            <div className="hidden md:block relative group">
              <select className="appearance-none bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl pl-10 pr-4 py-2.5 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 hover:border-gray-300 shadow-sm">
                <option value="en">🇺🇸 EN</option>
                <option value="es">🇪🇸 ES</option>
                <option value="fr">🇫🇷 FR</option>
              </select>
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
              </div>
            </div>

            {/* Contact Button - Responsive */}
            <a href="/contact" className="bg-gradient-to-r from-primary to-blue-600 text-white px-4 md:px-6 py-2 md:py-2.5 rounded-xl font-semibold text-xs md:text-sm shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 border-0 whitespace-nowrap">
              <span className="hidden sm:inline">Contact Us</span>
              <span className="sm:hidden">Contact</span>
            </a>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 md:p-2.5 rounded-lg transition-all duration-300 hover:scale-105 ${
                isScrolled ? 'bg-gray-100 hover:bg-gray-200' : 'bg-white/20 backdrop-blur-sm hover:bg-white/30'
              }`}
            >
              <div className="w-5 h-5 md:w-6 md:h-6 relative">
                <span className={`absolute h-0.5 w-full bg-current transform transition-all duration-300 ${
                  isScrolled ? 'text-gray-800' : 'text-white'
                } ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : '-translate-y-1'}`}></span>
                <span className={`absolute h-0.5 w-full bg-current transform transition-all duration-300 ${
                  isScrolled ? 'text-gray-800' : 'text-white'
                } ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`absolute h-0.5 w-full bg-current transform transition-all duration-300 ${
                  isScrolled ? 'text-gray-800' : 'text-white'
                } ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : 'translate-y-1'}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden mobile-menu-container transition-all duration-500 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 md:py-6 border-t border-gray-200/50">
            <nav className="flex flex-col space-y-3 md:space-y-4">
              <a href="/" className={`font-semibold text-sm md:text-base uppercase tracking-wider transition-all duration-300 py-2 ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}>
                Home
              </a>
              <a href="/services" className={`font-semibold text-sm md:text-base uppercase tracking-wider transition-all duration-300 py-2 ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}>
                Services
              </a>
              <a href="/process" className={`font-semibold text-sm md:text-base uppercase tracking-wider transition-all duration-300 py-2 ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}>
                Processes
              </a>
              <a href="/collections" className={`font-semibold text-sm md:text-base uppercase tracking-wider transition-all duration-300 py-2 ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}>
                Collections
              </a>
              <a href="/our-story" className={`font-semibold text-sm md:text-base uppercase tracking-wider transition-all duration-300 py-2 ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}>
                Our Story
              </a>
              <a href="/blog" className={`font-semibold text-sm md:text-base uppercase tracking-wider transition-all duration-300 py-2 ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}>
                Blog
              </a>
              
              {/* Mobile Language Selector */}
              <div className="pt-2 border-t border-gray-200/50">
                <div className="relative">
                  <select className="w-full appearance-none bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl pl-10 pr-4 py-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300">
                    <option value="en">🇺🇸 English</option>
                    <option value="es">🇪🇸 Español</option>
                    <option value="fr">🇫🇷 Français</option>
                  </select>
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                    </svg>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
} 