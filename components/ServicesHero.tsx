import Image from 'next/image'

export default function ServicesHero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image src="/servicebg.png" alt="Services Background" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/60 to-black/85"></div>
      </div>

      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Ccircle cx='40' cy='40' r='3'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center text-white pt-20">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-8 tracking-wide">
            Accelerate Your Product Launch with{' '}
            <span className="bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
              World-Class Services
            </span>
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-100 mb-12 max-w-4xl mx-auto font-light leading-relaxed tracking-wide">
            Working with global brands has allowed us to push our limits and offer pivotal game-changing transformative services
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-white text-gray-800 px-10 py-5 rounded-xl font-bold text-lg shadow-lg hover:shadow-white/25 transform hover:-translate-y-1 transition-all duration-300 border border-gray-200 hover:bg-gray-50">
              Start a Project
            </button>
            <button className="border-2 border-gray-300 text-white px-10 py-5 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
              About Us
            </button>
          </div>
        </div>
      </div>
    </section>
  )
} 