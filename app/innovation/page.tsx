import React from 'react';
import Image from 'next/image';
import { Cpu, Bot, Shield, Brain, Sparkles, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function InnovationPage() {
  const features = [
    {
      icon: <Bot className="w-12 h-12 text-blue-600" />,
      title: "AI-Powered Legal Research",
      description: "Utilizing advanced AI algorithms to conduct comprehensive legal research and analysis."
    },
    {
      icon: <Shield className="w-12 h-12 text-blue-600" />,
      title: "Smart Contract Analysis",
      description: "Automated contract review and analysis using machine learning technologies."
    },
    {
      icon: <Brain className="w-12 h-12 text-blue-600" />,
      title: "Precedents Analytics",
      description: "Using AI to analyze the landmark cases and provide data-driven legal strategies."
    },
    {
      icon: <Sparkles className="w-12 h-12 text-blue-600" />,
      title: "Automated Documentation",
      description: "AI-assisted document generation and management for improved efficiency."
    }
  ];

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[65vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/ai.webp"
            alt="AI Innovation"
            fill
            className="object-cover brightness-50"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            The Future of Legal Services
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Leveraging artificial intelligence to revolutionize legal practice and enhance client service.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">How We Use AI</h2>
          <div className="space-y-12">
            {[
              {
                title: "Legal Research Enhancement",
                description: "Our AI systems analyze thousands of legal documents, cases, and precedents in seconds to provide comprehensive research results."
              },
              {
                title: "Automated Document Analysis",
                description: "AI-powered tools review and analyze legal documents, identifying potential issues and opportunities with high accuracy."
              },
              {
                title: "Predictive Case Analysis",
                description: "Using historical data and machine learning to predict case outcomes and develop effective legal strategies."
              }
            ].map((item, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-8 items-start">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Experience the Future of Legal Services</h2>
          <p className="text-xl mb-8">Let us show you how AI can transform your legal experience.</p>
          <Link 
            href="/contact" 
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-3 rounded-md hover:bg-gray-100 transition-colors duration-300"
          >
            Contact Us <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </main>
  );
}