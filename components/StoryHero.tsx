import Image from 'next/image'

export default function StoryHero() {
  return (
    <section className="relative h-[70vh] min-h-[480px] flex items-center justify-center overflow-hidden bg-neutral-900">
      {/* Background */}
      <div className="absolute inset-0 z-0 bg-center bg-cover" style={{ backgroundImage: "url('/storybg.png')" }}>
        <Image src="/storybg.png" alt="Our Story Background" fill className="object-cover" priority sizes="100vw" />
        <div className="absolute inset-0 bg-black/55" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center text-white pt-24 md:pt-28">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4">Our Story</h1>
        <p className="max-w-3xl mx-auto text-white/90 text-sm md:text-base lg:text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <div className="mt-6">
          <a href="#contact" className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white px-6 py-3 rounded-md text-sm font-semibold border border-white/30 backdrop-blur transition-colors">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 7h18"/><path d="M3 12h18"/><path d="M3 17h18"/>
            </svg>
            Get Quote
          </a>
        </div>
      </div>
    </section>
  )
}

