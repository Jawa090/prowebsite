'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function StoryHeader() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'backdrop-blur bg-black/40 border-b border-white/10' : 'bg-transparent'}`}>
      <div className="container-custom py-4 flex items-center justify-between">
        {/* Left - Logo */}
        <a href="/" className="flex items-center gap-3">
          <div className="relative w-8 h-8 md:w-10 md:h-10">
            <Image src="/plogo.png" alt="Prosource Logo" fill className="object-contain" />
          </div>
          <span className="sr-only">Home</span>
        </a>

        {/* Middle - Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {[
            { label: 'Home', href: '/' },
            { label: 'Services', href: '/services' },
            { label: 'Process', href: '/process' },
            { label: 'Our Story', href: '/our-story' },
            { label: 'Contact', href: '#contact' }
          ].map((item) => (
            <a key={item.label} href={item.href} className="text-white/90 hover:text-white text-sm uppercase tracking-wide">
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right - CTA */}
        <a href="#contact" className="hidden sm:inline-block bg-white/15 hover:bg-white/25 text-white px-4 py-2 rounded-md text-sm font-semibold border border-white/30 backdrop-blur transition-colors">Get Quote</a>
      </div>
    </header>
  )
}

