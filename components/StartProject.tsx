export default function StartProject() {
  return (
    <section className="bg-blue-600 py-10 md:py-12">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-8">
          <div className="flex-1 text-white text-left">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-2 md:mb-3">
              Start your first<br className="hidden sm:block" />
              Project
            </h2>
            <p className="text-sm md:text-base lg:text-lg text-blue-100">
              Subtitle to encourage
            </p>
          </div>
          <div className="flex-shrink-0">
            <button className="bg-white/20 hover:bg-white/30 text-white px-6 py-2 rounded-md font-semibold text-sm border border-white/30 backdrop-blur-sm transition-all duration-300">
              Start a Project
            </button>
          </div>
        </div>
      </div>
    </section>
  )
} 