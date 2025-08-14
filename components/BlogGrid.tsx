import Image from 'next/image'

const blogPosts = [
  {
    id: 1,
    slug: "sustainability-in-manufacturing",
    title: "Sustainability in Manufacturing: How We're Innovating for a Greener Future",
    description: "Discover how we're revolutionizing the manufacturing industry through sustainable practices, innovative technologies, and eco-friendly solutions that benefit both business and the environment.",
    category: "Sustainability",
    publishDate: "Published Fri 25 Apr",
    image: "/blogbg.png",
    readTime: "5 min read"
  },
  {
    id: 2,
    slug: "advanced-textile-technologies",
    title: "Advanced Textile Technologies: The Future of Fabric Manufacturing",
    description: "Explore cutting-edge textile technologies that are transforming the way we produce fabrics, from smart materials to automated production processes.",
    category: "Technology",
    publishDate: "Published Thu 24 Apr",
    image: "/blogbg.png",
    readTime: "4 min read"
  },
  {
    id: 3,
    slug: "quality-control-apparel-manufacturing",
    title: "Quality Control in Apparel Manufacturing: Best Practices",
    description: "Learn about the essential quality control measures that ensure every garment meets the highest standards of excellence and durability.",
    category: "Quality",
    publishDate: "Published Wed 23 Apr",
    image: "/blogbg.png",
    readTime: "6 min read"
  },
  {
    id: 4,
    slug: "supply-chain-optimization",
    title: "Supply Chain Optimization: Reducing Costs and Improving Efficiency",
    description: "Discover strategies for optimizing your manufacturing supply chain to reduce costs, improve efficiency, and enhance customer satisfaction.",
    category: "Operations",
    publishDate: "Published Tue 22 Apr",
    image: "/blogbg.png",
    readTime: "7 min read"
  },
  {
    id: 5,
    slug: "sustainable-materials-textile-production",
    title: "Sustainable Materials: Eco-Friendly Alternatives in Textile Production",
    description: "Explore innovative sustainable materials that are revolutionizing textile production while protecting our planet for future generations.",
    category: "Sustainability",
    publishDate: "Published Mon 21 Apr",
    image: "/blogbg.png",
    readTime: "5 min read"
  },
  {
    id: 6,
    slug: "digital-transformation-manufacturing",
    title: "Digital Transformation in Manufacturing: Embracing Industry 4.0",
    description: "Learn how digital technologies are transforming traditional manufacturing processes and creating new opportunities for growth and innovation.",
    category: "Digital",
    publishDate: "Published Sun 20 Apr",
    image: "/blogbg.png",
    readTime: "8 min read"
  },
  {
    id: 7,
    slug: "workforce-development-manufacturing",
    title: "Workforce Development: Training the Next Generation of Manufacturers",
    description: "Discover effective strategies for developing and training manufacturing talent to meet the evolving demands of modern industry.",
    category: "Human Resources",
    publishDate: "Published Sat 19 Apr",
    image: "/blogbg.png",
    readTime: "6 min read"
  },
  {
    id: 8,
    slug: "lean-manufacturing-principles",
    title: "Lean Manufacturing Principles: Streamlining Your Production Process",
    description: "Implement lean manufacturing principles to eliminate waste, improve efficiency, and create more value for your customers.",
    category: "Operations",
    publishDate: "Published Fri 18 Apr",
    image: "/blogbg.png",
    readTime: "7 min read"
  },
  {
    id: 9,
    slug: "innovation-textile-dyeing",
    title: "Innovation in Textile Dyeing: Eco-Friendly Color Solutions",
    description: "Explore revolutionary dyeing technologies that provide vibrant colors while minimizing environmental impact and water usage.",
    category: "Innovation",
    publishDate: "Published Thu 17 Apr",
    image: "/blogbg.png",
    readTime: "5 min read"
  },
  {
    id: 10,
    slug: "global-manufacturing-trends",
    title: "Global Manufacturing Trends: What's Shaping the Industry",
    description: "Stay ahead of the curve with insights into the latest global manufacturing trends that are reshaping the industry landscape.",
    category: "Trends",
    publishDate: "Published Wed 16 Apr",
    image: "/blogbg.png",
    readTime: "6 min read"
  },
  {
    id: 11,
    slug: "customer-centric-manufacturing",
    title: "Customer-Centric Manufacturing: Building Products That Sell",
    description: "Learn how to align your manufacturing processes with customer needs to create products that drive sales and customer loyalty.",
    category: "Strategy",
    publishDate: "Published Tue 15 Apr",
    image: "/blogbg.png",
    readTime: "5 min read"
  },
  {
    id: 12,
    slug: "future-apparel-manufacturing-2025",
    title: "The Future of Apparel Manufacturing: Predictions for 2025",
    description: "Get a glimpse into the future of apparel manufacturing with expert predictions and insights into upcoming industry developments.",
    category: "Future",
    publishDate: "Published Mon 14 Apr",
    image: "/blogbg.png",
    readTime: "8 min read"
  }
]

export default function BlogGrid() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight tracking-wide mb-6 bg-gradient-to-r from-gray-900 via-blue-600 to-gray-900 bg-clip-text text-transparent">
            Latest Posts
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium">
            Stay informed with the latest insights, trends, and innovations in apparel manufacturing and sustainable production practices.
          </p>
        </div>

        {/* Filtering and Search */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-12 gap-6">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search posts..."
                className="pl-12 pr-6 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 w-64"
              />
              <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <select className="px-6 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-white">
              <option value="recent">Most Recent</option>
              <option value="popular">Most Popular</option>
              <option value="oldest">Oldest First</option>
            </select>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 group hover:-translate-y-3 border border-gray-100">
              {/* Blog Image */}
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-to-r from-blue-600 to-blue-700 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg backdrop-blur-sm">
                    {post.category}
                  </span>
                </div>
                {/* Date Badge */}
                <div className="absolute top-4 right-4">
                  <span className="bg-white/95 text-gray-700 text-xs font-semibold px-3 py-2 rounded-lg shadow-lg backdrop-blur-sm">
                    {post.publishDate}
                  </span>
                </div>
                {/* Read Time */}
                <div className="absolute bottom-4 left-4">
                  <span className="bg-black/80 text-white text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-sm">
                    {post.readTime}
                  </span>
                </div>
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Blog Content */}
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300 leading-tight line-clamp-2">
                  <a href={`/blog/${post.slug}`} className="hover:text-blue-600 transition-colors duration-300">
                    {post.title}
                  </a>
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3 text-sm">
                  {post.description}
                </p>

                {/* Read More Button */}
                <a 
                  href={`/blog/${post.slug}`}
                  className="text-blue-600 font-bold text-sm hover:text-blue-700 transition-all duration-300 flex items-center gap-2 group"
                >
                  Read More
                  <svg className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-12 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
            Load More Posts
          </button>
        </div>
      </div>
    </section>
  )
} 