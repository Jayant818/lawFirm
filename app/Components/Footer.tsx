import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">NCR Law Associate</h3>
            <p className="text-sm">
              Founded in 2012, we are the most trusted law firm in Gurgaon, combining experience with a remarkable approach to client service.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/expertise" className="hover:text-blue-400 transition-colors duration-300">
                  Our Expertise
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-blue-400 transition-colors duration-300">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-400 transition-colors duration-300">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Practice Areas</h3>
            <ul className="space-y-2">
              <li>Corporate & Commercial</li>
              <li>Litigation</li>
              <li>Property Law</li>
              <li>Labour Law</li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Contact Info</h3>
            <div className="space-y-2">
              <p className="flex items-center gap-2">
                <Phone size={16} />
                <a href="tel:9910731889" className="hover:text-blue-400 transition-colors duration-300">
                  +91 99107 31889
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:rahulyadavadv1987@gmail.com" className="hover:text-blue-400 transition-colors duration-300">
                  rahulyadavadv1987@gmail.com
                </a>
              </p>
              <p className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Gurgaon, Haryana</span>
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p>© {currentYear} NCR Law Associate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;