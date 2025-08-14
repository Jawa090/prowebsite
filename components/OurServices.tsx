import Image from 'next/image'

const services = [
  {
    id: 1,
    title: "Project Management",
    description: "Detailed work breakdown structure for your manufacturing projects.",
    image: "/projectm.png",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/>
      </svg>
    )
  },
  {
    id: 2,
    title: "Design & Development",
    description: "Tech pack support and free mockups for your designs.",
    image: "/design1.png",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/>
        <path d="M14 2v6h6"/>
      </svg>
    )
  },
  {
    id: 3,
    title: "Mass Production & Quality Control",
    description: "High standards in manufacturing and inspections.",
    image: "/mass.png",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    )
  },
  {
    id: 4,
    title: "Fabric Sourcing",
    description: "Emphasize quality fabric sources locally in Pakistan and worldwide.",
    image: "/fabric.png",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    )
  },
  {
    id: 5,
    title: "Sampling & Pre-Production Approval",
    description: "Offer sampling services before bulk production.",
    image: "/samplng.png",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
      </svg>
    )
  },
  {
    id: 6,
    title: "Waterproofing / Lamination",
    description: "Provide durable waterproofing and lamination services.",
    image: "/water.png",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    )
  }
]

export default function OurServices() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Subtle Corporate Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-8 leading-tight tracking-tight">
            Our{' '}
            <span className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light tracking-wide">
            Delivering world-class manufacturing solutions with precision, quality, and innovation at every step of your production journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service) => (
            <div key={service.id} className="group">
              <div className="relative overflow-hidden h-96 w-full rounded-2xl shadow-2xl transform transition-all duration-500 ease-out hover:scale-[1.02] hover:shadow-3xl">
                {/* Service Image */}
                <Image 
                  src={service.image} 
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  priority
                />
                
                {/* Premium Dark Overlay with Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30 group-hover:from-black/90 group-hover:via-black/70 group-hover:to-black/50 transition-all duration-500"></div>
                
                {/* Premium Icon Overlay - Top Left with Hover Animation */}
                <div className="absolute top-6 left-6 w-16 h-16 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 rounded-2xl flex items-center justify-center text-white shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:shadow-blue-500/50 group-hover:rotate-3">
                  <div className="w-8 h-8">
                    {service.icon}
                  </div>
                </div>
                
                {/* Content Overlay - Premium Typography */}
                <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                  <h3 className="text-2xl font-black mb-4 leading-tight tracking-wide group-hover:text-blue-100 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-base leading-relaxed text-gray-200 font-medium group-hover:text-gray-100 transition-colors duration-300">
                    {service.description}
                  </p>
                </div>
                
                {/* Premium Hover Effects */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Corporate Border Glow on Hover */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-400/40 transition-all duration-500 rounded-2xl"></div>
                
                {/* Subtle Corner Accent */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 transform rotate-45 translate-x-8 -translate-y-8"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 