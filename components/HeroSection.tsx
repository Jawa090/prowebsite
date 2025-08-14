import Image from 'next/image'

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bghero.png"
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center text-white pt-20">
        <div className="max-w-4xl mx-auto mb-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight mb-8 tracking-tight">
            Your Partner for{' '}
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
              Scalable, Quality
            </span>{' '}
            Apparel Manufacturing
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-100 mb-16 max-w-3xl mx-auto font-light leading-relaxed">
            We transform your vision into reality with{' '}
            <span className="font-semibold text-white">precision, quality, and scale</span>. 
            From concept to production, we're your trusted manufacturing partner.
          </p>
          <button className="bg-gradient-to-r from-primary via-blue-600 to-blue-700 text-white text-sm px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-blue-500/25 transform hover:-translate-y-1 transition-all duration-300 border-0">
            Get a Custom Quote
          </button>
        </div>

        {/* Brand Logos Section */}
        <div className="mt-8">
          <p className="text-gray-300 text-base mb-8 uppercase tracking-widest font-semibold">
            Trusted by leading brands worldwide
          </p>
          
          {/* Animated Moving Brand Logos */}
          <div className="relative overflow-hidden">
            <div className="flex items-center justify-center space-x-16 md:space-x-20 lg:space-x-24 animate-scroll">
              {/* First set of logos */}
              <Image
                src="/brand1.png"
                alt="Nike"
                width={100}
                height={50}
                className="h-10 w-auto grayscale hover:grayscale-0 transition-all duration-500 hover:scale-110 filter brightness-0 invert opacity-80 hover:opacity-100"
              />
              <Image
                src="/brand2.png"
                alt="Kahwa"
                width={100}
                height={50}
                className="h-10 w-auto grayscale hover:grayscale-0 transition-all duration-500 hover:scale-110 filter brightness-0 invert opacity-80 hover:opacity-100"
              />
              <Image
                src="/brand3.png"
                alt="Zara"
                width={100}
                height={50}
                className="h-10 w-auto grayscale hover:grayscale-0 transition-all duration-500 hover:scale-110 filter brightness-0 invert opacity-80 hover:opacity-100"
              />
              <Image
                src="/brand4.png"
                alt="Levi's"
                width={100}
                height={50}
                className="h-10 w-auto grayscale hover:grayscale-0 transition-all duration-500 hover:scale-110 filter brightness-0 invert opacity-80 hover:opacity-100"
              />
              <Image
                src="/brand5.png"
                alt="Brand 5"
                width={100}
                height={50}
                className="h-10 w-auto grayscale hover:grayscale-0 transition-all duration-500 hover:scale-110 filter brightness-0 invert opacity-80 hover:opacity-100"
              />
              <Image
                src="/brand6.png"
                alt="Brand 6"
                width={100}
                height={50}
                className="h-10 w-auto grayscale hover:grayscale-0 transition-all duration-500 hover:scale-110 filter brightness-0 invert opacity-80 hover:opacity-100"
              />
              <Image
                src="/brand7.png"
                alt="Brand 7"
                width={100}
                height={50}
                className="h-10 w-auto grayscale hover:grayscale-0 transition-all duration-500 hover:scale-110 filter brightness-0 invert opacity-80 hover:opacity-100"
              />
              
              {/* Duplicate set for seamless loop */}
              <Image
                src="/brand1.png"
                alt="Nike"
                width={100}
                height={50}
                className="h-10 w-auto grayscale hover:grayscale-0 transition-all duration-500 hover:scale-110 filter brightness-0 invert opacity-80 hover:opacity-100"
              />
              <Image
                src="/brand2.png"
                alt="Kahwa"
                width={100}
                height={50}
                className="h-10 w-auto grayscale hover:grayscale-0 transition-all duration-500 hover:scale-110 filter brightness-0 invert opacity-80 hover:opacity-100"
              />
              <Image
                src="/brand3.png"
                alt="Zara"
                width={100}
                height={50}
                className="h-10 w-auto grayscale hover:grayscale-0 transition-all duration-500 hover:scale-110 filter brightness-0 invert opacity-80 hover:opacity-100"
              />
              <Image
                src="/brand4.png"
                alt="Levi's"
                width={100}
                height={50}
                className="h-10 w-auto grayscale hover:grayscale-0 transition-all duration-500 hover:scale-110 filter brightness-0 invert opacity-80 hover:opacity-100"
              />
              <Image
                src="/brand5.png"
                alt="Brand 5"
                width={100}
                height={50}
                className="h-10 w-auto grayscale hover:grayscale-0 transition-all duration-500 hover:scale-110 filter brightness-0 invert opacity-80 hover:opacity-100"
              />
              <Image
                src="/brand6.png"
                alt="Brand 6"
                width={100}
                height={50}
                className="h-10 w-auto grayscale hover:grayscale-0 transition-all duration-500 hover:scale-110 filter brightness-0 invert opacity-80 hover:opacity-100"
              />
              <Image
                src="/brand7.png"
                alt="Brand 7"
                width={100}
                height={50}
                className="h-10 w-auto grayscale hover:grayscale-0 transition-all duration-500 hover:scale-110 filter brightness-0 invert opacity-80 hover:opacity-100"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 