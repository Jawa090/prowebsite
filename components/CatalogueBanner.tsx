export default function CatalogueBanner() {
  return (
    <section className="relative bg-gradient-to-r from-primary via-blue-600 to-blue-700 py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="text-center text-white max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
            Download our{' '}
            <span className="bg-gradient-to-r from-yellow-300 to-yellow-100 bg-clip-text text-transparent">
              Catalogue
            </span>
          </h2>
          <p className="text-xl md:text-2xl lg:text-3xl text-blue-100 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Discover our complete collection of premium apparel manufacturing solutions and get inspired by our quality craftsmanship
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-white text-primary px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-white/25 transform hover:-translate-y-1 transition-all duration-300 border-0 flex items-center gap-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Now
            </button>
            <button className="border-2 border-white/30 text-white px-8 py-5 rounded-2xl font-semibold text-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
              View Online
            </button>
          </div>
        </div>
      </div>
    </section>
  )
} 