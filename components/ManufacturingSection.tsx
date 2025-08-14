import Image from 'next/image'

export default function ManufacturingSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image Grid */}
          <div className="grid grid-cols-2 gap-8">
            {/* Pattern Making */}
            <div className="relative h-56 rounded-3xl overflow-hidden group shadow-2xl">
              <Image
                src="/m1.png"
                alt="Pattern Making"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-xl font-bold mb-2 tracking-wide">Pattern Making</h3>
                <p className="text-sm text-gray-200 font-medium">Design template creation</p>
              </div>
            </div>

            {/* Cutting */}
            <div className="relative h-56 rounded-3xl overflow-hidden group shadow-2xl">
              <Image
                src="/m2.png"
                alt="Cutting"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-xl font-bold mb-2 tracking-wide">Cutting</h3>
                <p className="text-sm text-gray-200 font-medium">Precise fabric cutting</p>
              </div>
            </div>

            {/* Sewing */}
            <div className="relative h-56 rounded-3xl overflow-hidden group shadow-2xl">
              <Image
                src="/m3.png"
                alt="Sewing"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-xl font-bold mb-2 tracking-wide">Sewing</h3>
                <p className="text-sm text-gray-200 font-medium">Garment assembly</p>
              </div>
            </div>

            {/* Quality Control */}
            <div className="relative h-56 rounded-3xl overflow-hidden group shadow-2xl">
              <Image
                src="/m4.png"
                alt="Quality Control"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-xl font-bold mb-2 tracking-wide">Quality Control</h3>
                <p className="text-sm text-gray-200 font-medium">Final inspection</p>
              </div>
            </div>

            {/* Packing and Dispatch */}
            <div className="relative h-56 rounded-3xl overflow-hidden group col-span-2 shadow-2xl">
              <Image
                src="/m5.png"
                alt="Packing and Dispatch"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-xl font-bold mb-2 tracking-wide">Packing and Dispatch</h3>
                <p className="text-sm text-gray-200 font-medium">Final packaging and shipping</p>
              </div>
            </div>
          </div>

          {/* Right Column - Text Content */}
          <div className="space-y-10">
            <div className="space-y-6">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-tight tracking-tight bg-gradient-to-r from-gray-900 via-blue-600 to-gray-900 bg-clip-text text-transparent">
                Manufacturing
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"></div>
            </div>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed tracking-wide font-medium">
              Our manufacturing process transforms quality fabrics into finished garments through skilled craftsmanship and advanced technology. From pattern making to final quality control, every step is meticulously executed to ensure the highest standards of fit, finish, and durability.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 