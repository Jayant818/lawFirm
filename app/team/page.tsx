import React from 'react';
import Image from 'next/image';
import { Phone, Mail } from 'lucide-react';
import { team } from '../constant/team';

export default function TeamPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Our Team</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet our team of experienced legal professionals dedicated to providing
              exceptional legal services.
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-64">
                  <Image
                    src={member.imgUrl}
                    alt={member.name}
                    fill
                    // className
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-blue-600 mb-4">{member.post}</p>
                  <div className="space-y-2">
                    {/* <a 
                      href={`tel:${member.phone}`}
                      className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors duration-300"
                    >
                      <Phone size={16} />
                      <span>{member.phone}</span>
                    </a> */}
                    {/* <a 
                      href={`mailto:${member.email}`}
                      className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors duration-300"
                    >
                      <Mail size={16} />
                      <span>{member.email}</span>
                    </a> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}