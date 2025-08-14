import Image from 'next/image'

export default function ProcessHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image src="/processbg.png" alt="Process Background" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center text-white pt-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight mb-12 tracking-tight bg-gradient-to-r from-white via-blue-50 to-white bg-clip-text text-transparent">
            Our Process
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-100 mb-16 max-w-4xl mx-auto font-light leading-relaxed tracking-wide">
            From raw materials to finished garments, we follow a meticulous process that ensures quality, consistency, and excellence in every step of apparel manufacturing.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-gradient-to-r from-primary via-blue-600 to-blue-700 text-white text-lg px-10 py-5 rounded-xl font-semibold shadow-lg hover:shadow-blue-500/25 transform hover:-translate-y-1 transition-all duration-300 border-0">
              Get a Custom Quote
            </button>
            <button className="bg-gray-800/80 backdrop-blur-sm text-white text-lg px-10 py-5 rounded-xl font-semibold shadow-lg hover:bg-gray-700/80 transform hover:-translate-y-1 transition-all duration-300 border border-gray-600">
              View Services
            </button>
          </div>
        </div>
      </div>
    </section>
  )
} 