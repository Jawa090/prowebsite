import Image from 'next/image'

export default function SpinningSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-10">
            <div className="space-y-6">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-tight tracking-tight bg-gradient-to-r from-gray-900 via-blue-600 to-gray-900 bg-clip-text text-transparent">
                Spinning
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"></div>
            </div>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed tracking-wide font-medium">
              The foundation of quality begins with our spinning process. We carefully select and process the finest natural and synthetic fibers, transforming them into premium yarns that meet the highest industry standards. Our state-of-the-art spinning facilities ensure consistent quality and strength in every thread.
            </p>
          </div>

          {/* Right Column - Image Grid */}
          <div className="grid grid-cols-2 gap-8">
            {/* Acquiring Best Quality Fibers */}
            <div className="relative h-56 rounded-3xl overflow-hidden group shadow-2xl">
              <Image
                src="/sp1.png"
                alt="Acquiring Best Quality Fibers"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-xl font-bold mb-2 tracking-wide">Acquiring Best Quality Fibers</h3>
                <p className="text-sm text-gray-200 font-medium">Premium raw materials selection</p>
              </div>
            </div>

            {/* Carding */}
            <div className="relative h-56 rounded-3xl overflow-hidden group shadow-2xl">
              <Image
                src="/sp2.png"
                alt="Carding"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-xl font-bold mb-2 tracking-wide">Carding</h3>
                <p className="text-sm text-gray-200 font-medium">Fiber alignment and preparation</p>
              </div>
            </div>

            {/* Spinning */}
            <div className="relative h-56 rounded-3xl overflow-hidden group shadow-2xl">
              <Image
                src="/sp3.png"
                alt="Spinning"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-xl font-bold mb-2 tracking-wide">Spinning</h3>
                <p className="text-sm text-gray-200 font-medium">Yarn formation process</p>
              </div>
            </div>

            {/* Winding */}
            <div className="relative h-56 rounded-3xl overflow-hidden group shadow-2xl">
              <Image
                src="/sp4.png"
                alt="Winding"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-xl font-bold mb-2 tracking-wide">Winding</h3>
                <p className="text-sm text-gray-200 font-medium">Yarn packaging and storage</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 