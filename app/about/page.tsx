import React from 'react';
import Image from 'next/image';
import { CheckCircle, Users, Globe, Award } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 ">
      <section className="mb-16 text-center">
        <h1 className="text-4xl font-bold mb-4 mt-10">About NCR Law Associate</h1>
        <p className="text-lg text-gray-600">
          NCR LAW ASSOCIATE was founded in 2012 and is the most trusted law firm in Gurgaon.
          Combining professionalism with creativity, we provide exceptional legal services for
          local and international clients across a range of industries.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Our Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            'Litigation (Civil and Criminal)',
            'Corporate & Commercial',
            'Arbitration',
            'MACT',
            'Drafting',
            'Property',
            'Writs',
            'Customs',
            'Labour Law',
            'Service Matters',
            'Company Law',
            'Securitization Law',
          ].map((area, idx) => (
            <div key={idx} className="flex items-center gap-4 p-4 border rounded-lg shadow-sm">
              <CheckCircle className="text-green-600 w-6 h-6" />
              <p className="text-gray-800 font-medium">{area}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Our Achievements</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-4">
          <li>
            Appeared in matters before various Tribunals, including the National Commission
            (Consumer) and Hon’ble Supreme Court of India.
          </li>
          <li>Assisted Multi-national Corporations (MNCs) Worldwide.</li>
          <li>Extensive experience handling Arbitration cases.</li>
          <li>
            Our Founder served as Deputy District Attorney in the Prosecution Department of the
            Government of Haryana, representing the State in civil, criminal, and arbitration cases.
          </li>
        </ul>
      </section>


      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
        <div className="flex flex-col md:flex-row items-start gap-6">
          <div>
            <h3 className="text-lg font-semibold">Phone</h3>
            <p className="text-gray-600">9910731889</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Address</h3>
            <a
              href="https://maps.app.goo.gl/cUPtzkLyQFYqbX8Y9"
              target="_blank"
              className="text-blue-600 underline"
            >
              View on Google Maps
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
