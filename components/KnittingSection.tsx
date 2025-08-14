import Image from 'next/image'

export default function KnittingSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image Grid */}
          <div className="grid grid-cols-2 gap-8">
            {/* Yarn Selection */}
            <div className="relative h-56 rounded-3xl overflow-hidden group shadow-2xl">
              <Image
                src="/k1.png"
                alt="Yarn Selection"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-xl font-bold mb-2 tracking-wide">Yarn Selection</h3>
                <p className="text-sm text-gray-200 font-medium">Premium yarn quality selection</p>
              </div>
            </div>

            {/* Knitting Pattern Design */}
            <div className="relative h-56 rounded-3xl overflow-hidden group shadow-2xl">
              <Image
                src="/k2.png"
                alt="Knitting Pattern Design"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-xl font-bold mb-2 tracking-wide">Knitting Pattern Design</h3>
                <p className="text-sm text-gray-200 font-medium">Creative pattern development</p>
              </div>
            </div>

            {/* Knitting */}
            <div className="relative h-56 rounded-3xl overflow-hidden group shadow-2xl">
              <Image
                src="/k3.png"
                alt="Knitting"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-xl font-bold mb-2 tracking-wide">Knitting</h3>
                <p className="text-sm text-gray-200 font-medium">Fabric formation process</p>
              </div>
            </div>

            {/* Fabric Inspection */}
            <div className="relative h-56 rounded-3xl overflow-hidden group shadow-2xl">
              <Image
                src="/k4.png"
                alt="Fabric Inspection"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-xl font-bold mb-2 tracking-wide">Fabric Inspection</h3>
                <p className="text-sm text-gray-200 font-medium">Quality control check</p>
              </div>
            </div>
          </div>

          {/* Right Column - Text Content */}
          <div className="space-y-10">
            <div className="space-y-6">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-tight tracking-tight bg-gradient-to-r from-gray-900 via-blue-600 to-gray-900 bg-clip-text text-transparent">
                Knitting
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"></div>
            </div>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed tracking-wide font-medium">
              Our advanced knitting technology transforms premium yarns into versatile fabrics with precision and consistency. We utilize cutting-edge knitting machines and innovative techniques to create a wide range of fabric textures, weights, and patterns that meet diverse design requirements.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 