export default function WhyUs() {
  const items = [
    {
      title: 'Custom Product Development',
      description:
        'We co-create products with your team, offering design support, sampling, and agile iterations to match your vision, quality, and budgets.',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3l8 4-8 4-8-4 8-4z"/>
          <path d="M4 7v6l8 4 8-4V7"/>
          <path d="M12 11v8"/>
        </svg>
      )
    },
    {
      title: 'Worldwide Presence',
      description:
        'Global vendor network and logistics partners enable reliable sourcing and on-time shipments across multiple regions and seasons.',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9"/>
          <path d="M2.5 12h19"/>
          <path d="M12 2.5a16 16 0 010 19"/>
          <path d="M12 2.5a16 16 0 000 19"/>
        </svg>
      )
    },
    {
      title: 'Timely Deliveries',
      description:
        'Accountable production planning and buffer strategies mean your products are delivered on schedule even with shifting forecasts.',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9"/>
          <path d="M12 7v6l4 2"/>
        </svg>
      )
    },
    {
      title: 'Transparent Updates',
      description:
        'Milestone-based reporting and proactive communication so you always have a clear view of progress, quality checks, and ETAs.',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16v16H4z"/>
          <path d="M7 14l3 3 7-7"/>
        </svg>
      )
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Why Us</h2>
          <p className="mt-4 text-gray-600">
            We combine quality, efficiency, and sustainable practices to deliver apparel manufacturing that scales with your ambitions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {items.map((item) => (
            <div key={item.title} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white flex items-center justify-center mb-4 shadow-lg ring-1 ring-white/30">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

