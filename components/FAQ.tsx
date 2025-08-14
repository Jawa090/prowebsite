'use client'

import { useState } from 'react'

const faqs = [
  {
    id: 1,
    question: "What makes your uniforms different?",
    answer: "Our uniforms are made with reinforced stitching, breathable fabrics, and fade-resistant materials to last through the school year without shrinking or losing color.",
    isExpanded: true
  },
  {
    id: 2,
    question: "Do your polos shrink after washing?",
    answer: "No, our polos are pre-shrunk and made with high-quality materials that maintain their shape and size even after multiple washes.",
    isExpanded: false
  },
  {
    id: 3,
    question: "Do your uniforms meet school dress codes?",
    answer: "Yes, all our uniforms are designed to meet standard school dress code requirements and can be customized to meet specific school guidelines.",
    isExpanded: false
  },
  {
    id: 4,
    question: "How do I choose the right size?",
    answer: "We provide detailed size charts and measurement guides. You can also contact our customer service team for personalized sizing assistance.",
    isExpanded: false
  },
  {
    id: 5,
    question: "Will the colors fade after multiple washes?",
    answer: "Our uniforms use advanced dyeing techniques and fade-resistant materials to ensure colors remain vibrant even after numerous wash cycles.",
    isExpanded: false
  },
  {
    id: 6,
    question: "Lorem Ipsum?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    isExpanded: false
  },
  {
    id: 7,
    question: "Lorem Ipsum?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    isExpanded: false
  }
]

export default function FAQ() {
  const [expandedId, setExpandedId] = useState(1)

  const toggleFAQ = (id: number) => {
    setExpandedId(expandedId === id ? 0 : id)
  }

  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-800 mb-6">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq) => (
            <div key={faq.id} className="border-b border-gray-200 last:border-b-0">
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200 px-4"
              >
                <span className="text-lg font-semibold text-gray-800 pr-4">
                  {faq.question}
                </span>
                <div className="w-6 h-6 bg-gray-800 rounded flex items-center justify-center flex-shrink-0">
                  {expandedId === faq.id ? (
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                    </svg>
                  ) : (
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                    </svg>
                  )}
                </div>
              </button>
              
              {expandedId === faq.id && (
                <div className="px-4 pb-6">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 