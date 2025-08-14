import Image from 'next/image'

export default function ServicesSection() {
  return (
    <section id="services" className="w-full">
      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
          {/* Left Box - Production Process Image */}
          <div className="relative h-96 lg:h-[500px] overflow-hidden">
            <Image
              src="/image1.png"
              alt="Production Process"
              fill
              className="object-cover"
            />
          </div>
          
          {/* Middle Box - Content with Background Image and Beautiful Font/Button */}
          <div className="relative h-96 lg:h-[500px] overflow-hidden flex items-center justify-center">
            {/* Background Image */}
            <Image
              src="/image3.png"
              alt="Services Background"
              fill
              className="object-cover"
            />
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-gray-800/70 to-gray-700/80"></div>
            {/* Content */}
            <div className="relative z-10 text-center text-white p-8">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black mb-6 leading-tight tracking-tight">
                See how we bring your{' '}
                <span className="bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
                  brand's designs
                </span>{' '}
                to life — from yarn to final stitch
              </h2>
              <a href="/services" className="inline-block bg-white text-gray-900 px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 border-0">
                View Services
              </a>
            </div>
          </div>
          
          {/* Right Box - Spinning and Dyeing Machines Image */}
          <div className="relative h-96 lg:h-[500px] overflow-hidden">
            <Image
              src="/image2.png"
              alt="Spinning and Dyeing Machines"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
} 