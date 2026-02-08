
import React from 'react';
import { Search, Users, Rocket } from 'lucide-react';
import { PILLARS } from '../constants';

const iconMap: any = { Search, Users, Rocket };

const Pillars: React.FC = () => {
  return (
    <div className="py-24 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h3 className="text-2xl font-bold mb-2">Join us in Exploring the</h3>
        <h2 className="text-4xl md:text-5xl font-bold text-google-yellow">World of Computer Science</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {PILLARS.map((pillar, idx) => {
          const Icon = iconMap[pillar.icon];
          return (
            <div key={idx} className="group relative bg-zinc-900 rounded-[2.5rem] p-10 border border-white/5 hover:border-white/10 transition-all hover:-translate-y-2">
              <div className={`w-16 h-16 rounded-2xl ${pillar.color} flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform`}>
                <Icon size={32} color="white" />
              </div>
              <h4 className="text-2xl font-bold mb-4">{pillar.title}</h4>
              <p className="text-gray-500 leading-relaxed">{pillar.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Pillars;
