import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/DownloadSection'
import { notFound } from 'next/navigation'

// Blog posts data - you can move this to a separate file later
const blogPosts = [
  {
    id: 1,
    slug: "sustainability-in-manufacturing",
    title: "Sustainability in Manufacturing: How We're Innovating for a Greener Future",
    description: "Discover how we're revolutionizing the manufacturing industry through sustainable practices, innovative technologies, and eco-friendly solutions that benefit both business and the environment.",
    category: "Sustainability",
    publishDate: "Published Fri 25 Apr",
    image: "/blogbg.png",
    readTime: "5 min read",
    content: `
      <p class="mb-6 text-lg text-gray-700 leading-relaxed">
        In today's rapidly evolving manufacturing landscape, sustainability is no longer just a buzzword—it's a fundamental necessity. As industries continue to grow and evolve, the need for environmentally responsible practices has never been more urgent. At Prosource Manufacturing, we're committed to leading this transformation through innovative approaches that benefit both our business and the planet.
      </p>
      
      <h2 class="text-3xl font-bold text-gray-900 mb-6 mt-12">The Current State of Manufacturing</h2>
      <p class="mb-6 text-lg text-gray-700 leading-relaxed">
        Traditional manufacturing processes have long been associated with significant environmental impacts, including high energy consumption, water usage, and waste generation. However, the industry is undergoing a remarkable transformation as companies recognize the economic and environmental benefits of sustainable practices.
      </p>
      
      <h2 class="text-3xl font-bold text-gray-900 mb-6 mt-12">Our Sustainable Manufacturing Approach</h2>
      <p class="mb-6 text-lg text-gray-700 leading-relaxed">
        We've implemented a comprehensive sustainability strategy that encompasses every aspect of our manufacturing process:
      </p>
      
      <ul class="list-disc list-inside mb-8 space-y-3 text-lg text-gray-700">
        <li><strong>Energy Efficiency:</strong> Advanced machinery and smart systems that reduce power consumption by up to 40%</li>
        <li><strong>Water Conservation:</strong> Closed-loop water systems and advanced filtration technologies</li>
        <li><strong>Waste Reduction:</strong> Zero-waste manufacturing processes and material recycling programs</li>
        <li><strong>Green Materials:</strong> Sustainable and biodegradable materials in our production</li>
      </ul>
      
      <h2 class="text-3xl font-bold text-gray-900 mb-6 mt-12">Innovative Technologies We're Implementing</h2>
      <p class="mb-6 text-lg text-gray-700 leading-relaxed">
        Our commitment to sustainability drives us to continuously explore and adopt cutting-edge technologies:
      </p>
      
      <div class="grid md:grid-cols-2 gap-8 mb-8">
        <div class="bg-blue-50 p-6 rounded-xl">
          <h3 class="text-xl font-bold text-blue-900 mb-3">Smart Manufacturing Systems</h3>
          <p class="text-blue-800">AI-powered systems that optimize production efficiency and reduce resource waste.</p>
        </div>
        <div class="bg-green-50 p-6 rounded-xl">
          <h3 class="text-xl font-bold text-green-900 mb-3">Renewable Energy Integration</h3>
          <p class="text-green-800">Solar and wind power systems that provide clean energy for our facilities.</p>
        </div>
      </div>
      
      <h2 class="text-3xl font-bold text-gray-900 mb-6 mt-12">Environmental Impact and Results</h2>
      <p class="mb-6 text-lg text-gray-700 leading-relaxed">
        Our sustainability initiatives have delivered measurable results:
      </p>
      
      <div class="bg-gray-50 p-8 rounded-2xl mb-8">
        <div class="grid md:grid-cols-3 gap-6 text-center">
          <div>
            <div class="text-4xl font-bold text-blue-600 mb-2">40%</div>
            <div class="text-gray-600">Reduction in energy consumption</div>
          </div>
          <div>
            <div class="text-4xl font-bold text-green-600 mb-2">60%</div>
            <div class="text-gray-600">Decrease in water usage</div>
          </div>
          <div>
            <div class="text-4xl font-bold text-purple-600 mb-2">85%</div>
            <div class="text-gray-600">Waste diverted from landfills</div>
          </div>
        </div>
      </div>
      
      <h2 class="text-3xl font-bold text-gray-900 mb-6 mt-12">Looking to the Future</h2>
      <p class="mb-6 text-lg text-gray-700 leading-relaxed">
        As we look ahead, we're excited about the possibilities that emerging technologies offer for even more sustainable manufacturing. From advanced materials science to next-generation automation, we're committed to staying at the forefront of sustainable innovation.
      </p>
      
      <p class="mb-6 text-lg text-gray-700 leading-relaxed">
        Our journey toward sustainable manufacturing is ongoing, and we invite you to join us in this important mission. Together, we can create a future where manufacturing excellence and environmental responsibility go hand in hand.
      </p>
    `
  },
  {
    id: 2,
    slug: "advanced-textile-technologies",
    title: "Advanced Textile Technologies: The Future of Fabric Manufacturing",
    description: "Explore cutting-edge textile technologies that are transforming the way we produce fabrics, from smart materials to automated production processes.",
    category: "Technology",
    publishDate: "Published Thu 24 Apr",
    image: "/blogbg.png",
    readTime: "4 min read",
    content: `
      <p class="mb-6 text-lg text-gray-700 leading-relaxed">
        The textile industry is experiencing a technological revolution that's reshaping how we think about fabric production. From smart materials that respond to environmental conditions to fully automated manufacturing processes, the future of textiles is here.
      </p>
      
      <h2 class="text-3xl font-bold text-gray-900 mb-6 mt-12">Smart Materials and Responsive Fabrics</h2>
      <p class="mb-6 text-lg text-gray-700 leading-relaxed">
        Modern textiles are no longer passive materials—they're intelligent systems that can adapt to their environment and user needs. We're working with materials that can change color based on temperature, adjust breathability based on humidity, and even monitor vital signs.
      </p>
      
      <h2 class="text-3xl font-bold text-gray-900 mb-6 mt-12">Automation and Industry 4.0</h2>
      <p class="mb-6 text-lg text-gray-700 leading-relaxed">
        Our facilities are equipped with state-of-the-art automation systems that ensure precision, consistency, and efficiency in every step of the manufacturing process.
      </p>
    `
  },
  // Add more blog posts with their content here...
]

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts.find(post => post.slug === params.slug)
  
  if (!post) {
    notFound()
  }

  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <nav className="mb-8">
              <ol className="flex items-center space-x-2 text-sm text-gray-600">
                <li><a href="/blog" className="hover:text-blue-600 transition-colors">Blog</a></li>
                <li className="text-gray-400">/</li>
                <li className="text-gray-900 font-medium">{post.category}</li>
              </ol>
            </nav>
            
            {/* Category Badge */}
            <div className="mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg">
                {post.category}
              </span>
            </div>
            
            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6 tracking-wide">
              {post.title}
            </h1>
            
            {/* Meta Information */}
            <div className="flex items-center space-x-6 text-gray-600 mb-8">
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>{post.publishDate}</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{post.readTime}</span>
              </div>
            </div>
            
            {/* Description */}
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              {post.description}
            </p>
          </div>
        </div>
      </section>
      
      {/* Blog Content */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Featured Image */}
            <div className="relative h-96 rounded-3xl overflow-hidden mb-12 shadow-2xl">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
            
            {/* Blog Content */}
            <article 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            
            {/* Back to Blog Button */}
            <div className="mt-16 text-center">
              <a 
                href="/blog"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Blog
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
} 