'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO, Fashion Forward",
    text: "Working with this team has transformed our production capabilities. The quality and attention to detail is unmatched.",
    avatar: "/image1.png"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Founder, Urban Style",
    text: "They delivered our entire collection on time with exceptional quality. Our customers love the finished products.",
    avatar: "/image2.png"
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    role: "Creative Director, Elite Fashion",
    text: "The manufacturing process is transparent and efficient. They truly understand our brand vision.",
    avatar: "/image3.png"
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Owner, Premium Apparel",
    text: "Outstanding service from start to finish. They've become our trusted manufacturing partner.",
    avatar: "/image1.png"
  },
  {
    id: 5,
    name: "Lisa Wang",
    role: "Brand Manager, Style Co.",
    text: "The team's expertise in sustainable manufacturing helped us achieve our eco-friendly goals.",
    avatar: "/image2.png"
  }
]

export default function Testimonials() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const [isAutoScrolling, setIsAutoScrolling] = useState(true)

  // Auto-scroll functionality
  useEffect(() => {
    let autoScrollInterval: NodeJS.Timeout

    if (isAutoScrolling && scrollContainerRef.current) {
      autoScrollInterval = setInterval(() => {
        if (scrollContainerRef.current) {
          const container = scrollContainerRef.current
          const scrollAmount = 1 // Smooth pixel-by-pixel scroll
          
          // If we've reached the end, smoothly reset to beginning
          if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
            container.scrollTo({ left: 0, behavior: 'smooth' })
          } else {
            container.scrollBy({ left: scrollAmount, behavior: 'auto' })
          }
        }
      }, 50) // Update every 50ms for smooth movement
    }

    return () => {
      if (autoScrollInterval) {
        clearInterval(autoScrollInterval)
      }
    }
  }, [isAutoScrolling])

  // Pause auto-scroll on hover
  const handleMouseEnter = () => setIsAutoScrolling(false)
  const handleMouseLeave = () => setIsAutoScrolling(true)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const scrollAmount = 400
      
      if (direction === 'left') {
        container.scrollBy({ left: -scrollAmount, behavior: 'smooth' })
      } else {
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' })
      }
      
      // Update scroll state after a short delay
      setTimeout(() => {
        if (container) {
          setCanScrollLeft(container.scrollLeft > 0)
          setCanScrollRight(container.scrollLeft < container.scrollWidth - container.clientWidth)
        }
      }, 300)
    }
  }

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What our clients say about us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what industry leaders and fashion brands 
            have to say about their experience working with us.
          </p>
        </div>

        {/* Testimonials Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg transition-all duration-200 ${
              canScrollLeft 
                ? 'text-blue-600 hover:bg-blue-600 hover:text-white' 
                : 'text-gray-300 cursor-not-allowed'
            }`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg transition-all duration-200 ${
              canScrollRight 
                ? 'text-blue-600 hover:bg-blue-600 hover:text-white' 
                : 'text-gray-300 cursor-not-allowed'
            }`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Auto-scroll indicator */}
          <div className="absolute top-4 right-4 z-10">
            <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
              isAutoScrolling ? 'bg-green-500 animate-pulse' : 'bg-gray-400'
            }`} title={isAutoScrolling ? 'Auto-scrolling' : 'Paused'} />
          </div>

          {/* Scrollable Testimonials */}
          <div 
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth px-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* Duplicate testimonials for seamless loop */}
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div 
                key={`${testimonial.id}-${index}`}
                className="flex-shrink-0 w-80 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center mb-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 