'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'

const blogPosts = [
  {
    id: 1,
    title: "Sustainable Manufacturing: The Future of Fashion",
    description: "Discover how eco-friendly practices are reshaping the apparel industry and what it means for your brand.",
    category: "Sustainability",
    publishDate: "Dec 15, 2024",
    image: "/image1.png"
  },
  {
    id: 2,
    title: "Quality Control in Apparel Production",
    description: "Learn about our comprehensive quality assurance processes that ensure every garment meets the highest standards.",
    category: "Quality",
    publishDate: "Dec 10, 2024",
    image: "/image2.png"
  },
  {
    id: 3,
    title: "Scaling Your Fashion Brand: A Complete Guide",
    description: "Essential strategies and insights for growing your fashion business from startup to industry leader.",
    category: "Business",
    publishDate: "Dec 5, 2024",
    image: "/image3.png"
  },
  {
    id: 4,
    title: "The Art of Fabric Selection",
    description: "Expert tips on choosing the right materials for your designs, from natural fibers to innovative synthetics.",
    category: "Materials",
    publishDate: "Nov 30, 2024",
    image: "/image1.png"
  },
  {
    id: 5,
    title: "Manufacturing Trends for 2025",
    description: "Stay ahead of the curve with our predictions for the upcoming year in apparel manufacturing.",
    category: "Trends",
    publishDate: "Nov 25, 2024",
    image: "/image2.png"
  },
  {
    id: 6,
    title: "Building Strong Supplier Relationships",
    description: "How to create lasting partnerships with manufacturers that drive mutual success and growth.",
    category: "Partnerships",
    publishDate: "Nov 20, 2024",
    image: "/image3.png"
  }
]

export default function BlogSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  // Update scroll state
  const updateScrollState = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      setCanScrollLeft(container.scrollLeft > 0)
      setCanScrollRight(container.scrollLeft < container.scrollWidth - container.clientWidth - 10)
    }
  }

  // Update scroll state on mount and after scrolling
  useEffect(() => {
    updateScrollState()
    const timer = setTimeout(updateScrollState, 100)
    return () => clearTimeout(timer)
  }, [])

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const scrollAmount = 400
      
      if (direction === 'left') {
        container.scrollBy({ left: -scrollAmount, behavior: 'smooth' })
      } else {
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' })
      }
      
      // Update scroll state after scrolling
      setTimeout(updateScrollState, 300)
    }
  }

  return (
    <section id="blog" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Latest Insights & Updates
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed with the latest trends, insights, and best practices in apparel manufacturing. 
            Our expert team shares valuable knowledge to help your business grow.
          </p>
        </div>

        {/* Blog Scroller Container */}
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

          {/* Scrollable Blog Posts */}
          <div 
            ref={scrollContainerRef}
            className="flex gap-8 overflow-x-auto scrollbar-hide scroll-smooth px-4 pb-6"
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none'
            }}
            onScroll={updateScrollState}
          >
            {blogPosts.map((post) => (
              <article 
                key={post.id}
                className="group cursor-pointer flex-shrink-0 w-80 bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Blog Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
                      {post.category}
                    </span>
                  </div>
                  {/* Date Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 text-gray-700 text-xs font-medium px-2 py-1 rounded-lg shadow-sm">
                      {post.publishDate}
                    </span>
                  </div>
                </div>
                
                {/* Blog Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm mb-4">
                    {post.description}
                  </p>
                  
                  {/* Read More Button */}
                  <div className="pt-4 border-t border-gray-100">
                    <button className="text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors duration-300 flex items-center gap-2 group">
                      Read More
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
            View All Articles
          </button>
        </div>
      </div>
    </section>
  )
} 