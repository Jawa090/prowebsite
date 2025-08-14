import Image from 'next/image'

export default function OurCollection() {
  return (
    <section id="collections" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          {/* Decorative Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mb-6 shadow-lg">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Our{' '}
            <span className="text-blue-600">
              Collection
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            Discover our comprehensive range of high-quality apparel manufacturing solutions. 
            From casual wear to luxury fashion, we deliver excellence in every stitch.
          </p>
          
          {/* Action Buttons with Icons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold text-base shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2">
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Our Catalogue
            </button>
            
            <button className="group bg-white text-gray-900 px-6 py-3 rounded-xl font-semibold text-base shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border-2 border-gray-200 hover:border-blue-300 flex items-center gap-2">
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              View Product Samples
            </button>
          </div>
        </div>

        {/* Image Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="group cursor-pointer transform hover:-translate-y-1 transition-all duration-300">
            <div className="relative h-64 rounded-2xl overflow-hidden mb-4 shadow-lg group-hover:shadow-xl">
              <Image
                src="/image1.png"
                alt="Casual Wear Collection"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Overlay with Icon */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 w-full">
                  <div className="inline-flex items-center justify-center w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full mb-2">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                Casual Wear Collection
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Premium quality casual wear including t-shirts, hoodies, and everyday essentials.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group cursor-pointer transform hover:-translate-y-1 transition-all duration-300">
            <div className="relative h-64 rounded-2xl overflow-hidden mb-4 shadow-lg group-hover:shadow-xl">
              <Image
                src="/image2.png"
                alt="Sportswear Line"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Overlay with Icon */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 w-full">
                  <div className="inline-flex items-center justify-center w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full mb-2">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                Sportswear Line
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                High-performance athletic wear designed for comfort and durability.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group cursor-pointer transform hover:-translate-y-1 transition-all duration-300">
            <div className="relative h-64 rounded-2xl overflow-hidden mb-4 shadow-lg group-hover:shadow-xl">
              <Image
                src="/image3.png"
                alt="Luxury Fashion"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Overlay with Icon */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 w-full">
                  <div className="inline-flex items-center justify-center w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full mb-2">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                Luxury Fashion
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Exquisite designer pieces crafted with premium materials and attention to detail.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 