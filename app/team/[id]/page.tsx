import React from 'react';
import Image from 'next/image';
import {  Calendar } from 'lucide-react';
import { team } from '../../constant/team';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export default async function TeamMemberProfile({ 
  params 
}: { 
  params: Promise<{ id: string }> 
}) {
  // Await the params Promise to get the id
  const { id } = await params;
  
  // Find the team member by ID (using index as ID)
  const memberId = parseInt(id);
  const member = team[memberId];

  // If member doesn't exist, show 404
  if (!member) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-20 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back button */}
        <Link 
          href="/team" 
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8"
        >
          ← Back to Team
        </Link>

        {/* Profile header */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
          <div className="md:flex">
            <div className="md:flex-shrink-0 relative h-64 md:h-auto md:w-1/3">
              <Image
                src={member.imgUrl}
                alt={member.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-8 md:p-10">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{member.name}</h1>
              <p className="text-xl text-blue-600 mb-4">{member.post}</p>
              
              <div className="space-y-3 mb-6">
                {/* <div className="flex items-center gap-3 text-gray-700">
                  <Phone size={18} />
                  <a href={`tel:${member.phone}`} className="hover:text-blue-600">
                    {member.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <Mail size={18} />
                  <a href={`mailto:${member.email}`} className="hover:text-blue-600">
                    {member.email}
                  </a>
                </div> */}
                <div className="flex items-center gap-3 text-gray-700">
                  <Calendar size={18} />
                  <span>Practicing since {member.startDate}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Biography */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Biography</h2>
          <div className="space-y-4">
            {member.description.map((paragraph, index) => (
              <p key={index} className="text-gray-700 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
