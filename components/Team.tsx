
import React from 'react';
import { TEAM } from '../constants';

const Team: React.FC = () => {
  return (
    <div className="py-24 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Our | <span className="text-gray-500">2024 - 2025</span></h2>
        <h3 className="text-3xl md:text-4xl font-bold text-google-green">Chapter Leadership</h3>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
        {TEAM.map((member, idx) => (
          <div key={idx} className="group relative rounded-3xl overflow-hidden aspect-[4/5] bg-zinc-900 border border-white/5">
            <img 
              src={member.image} 
              alt={member.name}
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h4 className="text-lg md:text-xl font-bold text-white mb-1">{member.name}</h4>
              <p className="text-google-blue text-xs font-bold uppercase tracking-wider">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
