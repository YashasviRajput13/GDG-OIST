
import React from 'react';
import { Smartphone, Globe, Cpu, Cloud } from 'lucide-react';
import { ACTIVITIES } from '../constants';

const iconMap: Record<string, React.FC<any>> = {
  Smartphone,
  Globe,
  Cpu,
  Cloud,
};

const Activities: React.FC = () => {
  return (
    <div className="py-24 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-google-green font-bold tracking-widest uppercase text-sm mb-4">Focus Areas</h2>
        <h3 className="text-4xl font-bold text-gray-900">What we code</h3>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {ACTIVITIES.map((activity, idx) => {
          const IconComponent = iconMap[activity.icon];
          return (
            <div key={idx} className="p-8 rounded-3xl bg-white border border-gray-100 hover:border-gray-200 transition-all shadow-sm hover:shadow-md text-center">
              <div 
                className="w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-6 shadow-sm"
                style={{ backgroundColor: `${activity.color}15`, color: activity.color }}
              >
                {IconComponent && <IconComponent size={32} />}
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{activity.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{activity.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Activities;
