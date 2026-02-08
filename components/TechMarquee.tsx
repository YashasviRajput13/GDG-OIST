
import React from 'react';
import { TECH_LOGOS } from '../constants';

const TechMarquee: React.FC = () => {
  return (
    <div className="py-20 border-y border-white/5 bg-zinc-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-10 text-center">
        <h3 className="text-2xl font-bold">Join us in Exploring <span className="text-google-green">Open Source Libraries</span></h3>
      </div>
      
      <div className="relative flex overflow-x-hidden">
        <div className="flex animate-marquee whitespace-nowrap py-12 gap-12">
          {[...TECH_LOGOS, ...TECH_LOGOS, ...TECH_LOGOS].map((tech, idx) => (
            <div key={idx} className="flex items-center gap-4 bg-white/5 px-8 py-4 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors group cursor-default">
              <img src={tech.url} alt={tech.name} className="w-8 h-8 group-hover:scale-110 transition-transform" />
              <span className="text-lg font-bold text-gray-300">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechMarquee;
