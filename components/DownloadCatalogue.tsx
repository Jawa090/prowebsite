export default function DownloadCatalogue() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Two-tone background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-1/2 bg-gray-100"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-white"></div>
        <div className="absolute top-1/2 left-0 right-0 h-px bg-gray-200"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="flex justify-center">
          {/* Centered Blue Banner */}
          <div className="bg-blue-600 px-8 md:px-10 lg:px-12 py-8 md:py-10 max-w-5xl w-full">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              {/* Left side - Text */}
              <div className="text-white text-left">
                <div className="text-2xl md:text-2xl font-medium mb-1">Download our</div>
                <div className="text-3xl md:text-4xl font-bold mb-2">Catalogue</div>
                <div className="text-sm md:text-base text-blue-100">Subtitle to encourage</div>
              </div>

              {/* Right side - Button */}
              <div>
                <button className="bg-white/20 hover:bg-white/30 text-white px-6 py-2 rounded-md font-semibold text-sm border border-white/30 backdrop-blur-sm transition-all duration-300">
                  Download
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}