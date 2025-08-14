import Image from 'next/image'

export default function ThreeImageGrid() {
  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Left Image - Production Process */}
          <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden">
            <Image
              src="/image1.png"
              alt="Production Process"
              fill
              className="object-cover"
            />
          </div>

          {/* Center - Dark Overlay with Content */}
          <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center">
            <div className="text-center text-white p-8">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight">
                See how we bring your brand's designs to life — from yarn to final stitch
              </h2>
              <button className="btn-secondary border-white text-white hover:bg-white hover:text-gray-900">
                View Services
              </button>
            </div>
          </div>

          {/* Right Image - Spinning/Dyeing Machines */}
          <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden">
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