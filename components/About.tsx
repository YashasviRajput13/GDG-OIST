
import React from 'react';
import { Target, Users, Globe } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="py-24 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">About the community</h2>
        <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">What is GDG OIST Bhopal?</h3>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Google Developer Groups (GDG) are for developers who are interested in Google's developer technology.
          Our chapter at Oriental Institute of Science and Technology (OIST) Bhopal is a thriving community 
          of tech enthusiasts, designers, and innovators.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            title: 'Learn',
            desc: 'Gain knowledge through workshops, expert talks, and peer learning on the latest Google technologies.',
            icon: <Target size={32} className="text-google-red" />,
            bgColor: 'bg-red-50'
          },
          {
            title: 'Build',
            desc: 'Collaborate with like-minded developers to create real-world projects that solve actual problems.',
            icon: <Globe size={32} className="text-google-blue" />,
            bgColor: 'bg-blue-50'
          },
          {
            title: 'Connect',
            desc: 'Networking with professionals, alumni, and students to grow your professional circle and opportunities.',
            icon: <Users size={32} className="text-google-green" />,
            bgColor: 'bg-green-50'
          }
        ].map((item, idx) => (
          <div key={idx} className="p-10 rounded-[2.5rem] bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
            <div className={`w-16 h-16 rounded-2xl ${item.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
              {/* Fix: Directly rendering the icon element which already has the size prop applied to avoid cloneElement TypeScript issues */}
              {item.icon}
            </div>
            <h4 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h4>
            <p className="text-gray-600 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
