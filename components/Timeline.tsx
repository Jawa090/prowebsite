import Image from 'next/image'

type TimelineItem = {
  year: string
  title: string
  description: string
  image: string
}

const timeline: TimelineItem[] = [
  { year: '2015', title: 'A Decade of Excellence', description: 'Begun with a vision to redefine quality and scalable production.', image: '/timeline/1.png' },
  { year: '2016', title: 'First Local Brand Partnership', description: 'Secured our first local brand partnership.', image: '/timeline/2.png' },
  { year: '2017', title: 'First International Order', description: 'Delivered our first international order.', image: '/timeline/3.png' },
  { year: '2019', title: 'Global Expansion', description: 'Expanded to serve clients across multiple markets.', image: '/timeline/4.png' },
  { year: '2020', title: 'Sustainability Initiatives', description: 'Introduced sustainable practices across all lines.', image: '/timeline/5.png' },
  { year: '2022', title: '50+ Top Brands', description: 'Partnered with over 50 leading brands in 44 markets.', image: '/timeline/6.png' },
]

export default function Timeline() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">A Decade of Excellence</h2>
          <p className="mt-4 text-gray-600">Our progress over the years, built on precision, reliability, and a commitment to quality.</p>
        </div>

        <div className="relative">
          {/* Vertical line (always full height of section content) */}
          <div className="pointer-events-none absolute left-1/2 inset-y-0 -translate-x-1/2 w-[2px] bg-gray-400 z-0" />

          <div className="space-y-12">
            {timeline.map((item, index) => {
              const textOnRight = index % 2 === 0 // first item text right, image left
              const textClasses = textOnRight
                ? 'order-1 lg:order-2 lg:pl-10'
                : 'order-1 lg:order-1 lg:pr-10'
              const imageClasses = textOnRight
                ? 'order-2 lg:order-1 lg:pr-10'
                : 'order-2 lg:order-2 lg:pl-10'

              return (
                <div key={item.year} className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center py-4">
                  {/* Center markers */}
                  <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                    <span className="text-[10px] font-semibold text-gray-600 bg-white border border-gray-200 px-2 py-0.5 rounded">
                      {item.year}
                    </span>
                  </div>
                  <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-blue-600 z-10 border-4 border-white shadow" />

                  {/* Text column */}
                  <div className={textClasses}>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-semibold text-gray-500 lg:hidden">{item.year}</span>
                      <svg className="w-4 h-4 text-blue-600" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3 7 7 3-7 3-3 7-3-7-7-3 7-3 3-7z"/></svg>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                    <p className="text-gray-600 text-sm mt-1">{item.description}</p>
                  </div>

                  {/* Image column */}
                  <div className={imageClasses}>
                    <div className="relative h-52 md:h-60 lg:h-64 rounded-xl overflow-hidden shadow-md bg-gray-200">
                      <Image src={item.image} alt={item.title} fill className="object-cover" />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Closing statement with logo */}
        <div className="mt-16 md:mt-20 text-center max-w-3xl mx-auto">
          <div className="relative w-10 h-10 mx-auto mb-4">
            <Image src="/plogo.png" alt="Prosource Logo" fill className="object-contain" />
          </div>
          <p className="text-gray-700 text-sm md:text-base">
            Today, ProSource is synonymous with reliability and quality, trusted by leading enterprises for every product drop. Our expertise ensures that your vision is brought to life with precision and efficiency.
          </p>
        </div>
      </div>
    </section>
  )
}

