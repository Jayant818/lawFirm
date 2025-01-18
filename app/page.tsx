"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Briefcase, FileText, Gavel, Home, Scale, Shield, Trophy, Users } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HomePage() {
  const practiceAreas = [
    {
      icon: <Briefcase className="w-12 h-12 text-gold-600" />,
      title: "Corporate & Commercial",
      description: "Strategic legal solutions for Fortune 500 companies, investment banks, and multinational corporations.",
      services: [
        "International Business Law",
        "Complex Corporate Transactions",
        "Private Equity & Venture Capital",
        "Cross-border M&A"
      ]
    },
    {
      icon: <Scale className="w-12 h-12 text-gold-600" />,
      title: "High-Stakes Litigation",
      description: "Expert representation in complex civil litigation and high-profile criminal defense.",
      services: [
        "Commercial Litigation",
        "White-Collar Defense",
        "International Arbitration",
        "Class Action Defense"
      ]
    },
    {
      icon: <Home className="w-12 h-12 text-gold-600" />,
      title: "Luxury Real Estate",
      description: "Specialized counsel for premium real estate transactions and development projects.",
      services: [
        "High-Value Property Acquisitions",
        "Commercial Development",
        "Real Estate Investment",
        "Luxury Property Disputes"
      ]
    },
    {
      icon: <Users className="w-12 h-12 text-gold-600" />,
      title: "Executive Employment",
      description: "Discrete representation for C-suite executives and board members.",
      services: [
        "Executive Compensation",
        "Golden Parachutes",
        "Non-Compete Agreements",
        "Board Governance"
      ]
    },
    {
      icon: <Gavel className="w-12 h-12 text-gold-600" />,
      title: "International Arbitration",
      description: "Premier representation in high-stakes international disputes and arbitration.",
      services: [
        "Investment Treaty Arbitration",
        "Commercial Disputes",
        "Multi-jurisdictional Cases",
        "Enforcement Proceedings"
      ]
    },
    {
      icon: <FileText className="w-12 h-12 text-gold-600" />,
      title: "Private Client Services",
      description: "Bespoke legal solutions for ultra-high-net-worth individuals and families.",
      services: [
        "Wealth Preservation",
        "Estate Planning",
        "Family Office Services",
        "Asset Protection"
      ]
    }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero.webp"
            alt="Prestigious Law Office"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Proven Legal Expertise <br />Tailored for Your Success
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl font-bolf">
            NCR LAW ASSOCIATE - Where exceptional legal acumen meets unparalleled service for discerning clients.
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center gap-2 bg-gold-600 hover:bg-gold-700 text-white px-8 py-4 rounded-sm transition-all duration-300 text-lg font-bold"
          >
            Arrange a Consultation <ArrowRight size={20} />
          </Link>
        </motion.div>
      </section>

      {/* Expertise Section */}
      <motion.section 
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="bg-white py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center">
            <h1 className="text-4xl font-bold mb-4">Our Expertise</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
               With over a decade of experience, we provide comprehensive legal services
              across multiple practice areas to serve our diverse clientele.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Practice Areas Grid */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {practiceAreas.map((area, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-sm border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="mb-4">{area.icon}</div>
                <h3 className="text-2xl font-semibold mb-4">{area.title}</h3>
                <p className="text-gray-600 mb-6">{area.description}</p>
                <ul className="space-y-2">
                  {area.services.map((service, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <ArrowRight size={16} className="text-gold-600" />
                      <span className="text-gray-700">{service}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
    

      {/* Disclaimer Section */}
      {/* <section className="py-8 bg-slate-100 text-sm text-gray-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="mb-2">
            © {new Date().getFullYear()} NCR LAW ASSOCIATE. All rights reserved.
          </p>
          <p className="max-w-4xl mx-auto">
            DISCLAIMER: The information provided on this website does not, and is not intended to, constitute legal advice; instead, all information, content, and materials available on this site are for general informational purposes only. Information on this website may not constitute the most up-to-date legal or other information. Readers should contact their attorney to obtain advice with respect to any particular legal matter.
          </p>
        </div>
      </section> */}
    </main>
  );
}