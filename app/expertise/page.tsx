import React from 'react';
import { Briefcase, Scale, Home, Gavel, Users, FileText, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ExpertisePage() {
  const practiceAreas = [
    {
      icon: <Briefcase className="w-12 h-12 text-blue-600" />,
      title: "Corporate & Commercial",
      description: "Full range of legal services for businesses from small enterprises to major multinationals.",
      services: [
        "Company Law",
        "Contractual Law",
        "Business Advisory",
        "Mergers & Acquisitions"
      ]
    },
    {
      icon: <Scale className="w-12 h-12 text-blue-600" />,
      title: "Litigation",
      description: "Comprehensive litigation services in both civil and criminal matters.",
      services: [
        "Civil Litigation",
        "Criminal Defense",
        "Appeals & Revisions",
        "Writ Petitions"
      ]
    },
    {
      icon: <Home className="w-12 h-12 text-blue-600" />,
      title: "Property Law",
      description: "Expert guidance in all aspects of property and real estate law.",
      services: [
        "Property Documentation",
        "Title Verification",
        "Real Estate Disputes",
        "Property Registration"
      ]
    },
    {
      icon: <Users className="w-12 h-12 text-blue-600" />,
      title: "Labour Law",
      description: "Specialized services in employment and labor law matters.",
      services: [
        "Employment Contracts",
        "Workplace Disputes",
        "Compliance Advisory",
        "Industrial Relations"
      ]
    },
    {
      icon: <Gavel className="w-12 h-12 text-blue-600" />,
      title: "Arbitration",
      description: "Expert representation in arbitration proceedings and dispute resolution.",
      services: [
        "Commercial Arbitration",
        "International Arbitration",
        "Mediation Services",
        "Dispute Resolution"
      ]
    },
    {
      icon: <FileText className="w-12 h-12 text-blue-600" />,
      title: "Documentation",
      description: "Comprehensive legal documentation and drafting services.",
      services: [
        "Contract Drafting",
        "Legal Agreements",
        "Document Review",
        "Legal Opinions"
      ]
    }
  ];

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Our Expertise</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              With over a decade of experience, we provide comprehensive legal services
              across multiple practice areas to serve our diverse clientele.
            </p>
          </div>
        </div>
      </section>

      {/* Practice Areas Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {practiceAreas.map((area, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="mb-4">{area.icon}</div>
                <h3 className="text-2xl font-semibold mb-4">{area.title}</h3>
                <p className="text-gray-600 mb-6">{area.description}</p>
                <ul className="space-y-2">
                  {area.services.map((service, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <ArrowRight size={16} className="text-blue-600" />
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Legal Assistance?</h2>
          <p className="text-xl mb-8">Our team of expert lawyers is ready to help you with your legal needs.</p>
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