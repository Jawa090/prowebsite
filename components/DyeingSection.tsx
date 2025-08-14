import Image from 'next/image'

export default function DyeingSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-10">
            <div className="space-y-6">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-tight tracking-tight bg-gradient-to-r from-gray-900 via-blue-600 to-gray-900 bg-clip-text text-transparent">
                Dyeing
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"></div>
            </div>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed tracking-wide font-medium">
              Our dyeing process combines traditional expertise with modern technology to achieve vibrant, long-lasting colors. We use eco-friendly dyes and advanced techniques to ensure color consistency, fastness, and environmental responsibility while meeting the most demanding color specifications.
            </p>
          </div>

          {/* Right Column - Image Grid */}
          <div className="grid grid-cols-2 gap-8">
            {/* Color Selection */}
            <div className="relative h-56 rounded-3xl overflow-hidden group shadow-2xl">
              <Image
                src="/d1.png"
                alt="Color Selection"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-xl font-bold mb-2 tracking-wide">Color Selection</h3>
                <p className="text-sm text-gray-200 font-medium">Precise color matching</p>
              </div>
            </div>

            {/* Dye Preparation */}
            <div className="relative h-56 rounded-3xl overflow-hidden group shadow-2xl">
              <Image
                src="/d2.png"
                alt="Dye Preparation"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-xl font-bold mb-2 tracking-wide">Dye Preparation</h3>
                <p className="text-sm text-gray-200 font-medium">Chemical formulation</p>
              </div>
            </div>

            {/* Dyeing */}
            <div className="relative h-56 rounded-3xl overflow-hidden group shadow-2xl">
              <Image
                src="/d3.png"
                alt="Dyeing"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-xl font-bold mb-2 tracking-wide">Dyeing</h3>
                <p className="text-sm text-gray-200 font-medium">Color application process</p>
              </div>
            </div>

            {/* Finishing Treatments */}
            <div className="relative h-56 rounded-3xl overflow-hidden group shadow-2xl">
              <Image
                src="/d4.png"
                alt="Finishing Treatments"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-xl font-bold mb-2 tracking-wide">Finishing Treatments</h3>
                <p className="text-sm text-gray-200 font-medium">Final processing steps</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 