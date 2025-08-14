export default function DownloadSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Two-tone background */}
      <div className="absolute inset-0">
        {/* Top half - Light gray */}
        <div className="absolute top-0 left-0 right-0 h-1/2 bg-gray-100"></div>
        {/* Bottom half - White */}
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-white"></div>
        {/* Subtle transition line */}
        <div className="absolute top-1/2 left-0 right-0 h-px bg-gray-200"></div>
      </div>

      {/* Content */}
      <div className="container-custom relative z-10">
        <div className="flex justify-center">
          {/* Blue Banner */}
          <div className="bg-blue-600 px-12 py-16 rounded-none shadow-lg max-w-4xl w-full">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              {/* Left side - Text */}
              <div className="text-white text-left">
                <div className="text-2xl font-medium mb-2">
                  Download our
                </div>
                <div className="text-4xl font-bold mb-3">
                  Catalogue
                </div>
                <div className="text-lg text-blue-100">
                  Subtitle to encourage
                </div>
              </div>

              {/* Right side - Button */}
              <div>
                <button className="bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-md hover:shadow-lg transition-all duration-300">
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