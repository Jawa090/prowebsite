import Image from 'next/image'

export default function BlogHero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image src="/blogbg.png" alt="Blog Background" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center text-white pt-20">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-6 tracking-wide bg-gradient-to-r from-white via-blue-50 to-white bg-clip-text text-transparent">
            Sustainability in Manufacturing
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-gray-100 mb-8 max-w-3xl mx-auto font-light leading-relaxed tracking-wide">
            Discover how we're revolutionizing the manufacturing industry through sustainable practices, innovative technologies, and eco-friendly solutions that benefit both business and the environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-gradient-to-r from-primary via-blue-600 to-blue-700 text-white text-lg px-10 py-5 rounded-xl font-semibold shadow-lg hover:shadow-blue-500/25 transform hover:-translate-y-1 transition-all duration-300 border-0 flex items-center gap-3">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              Read The Post
            </button>
          </div>
        </div>
      </div>
    </section>
  )
} 