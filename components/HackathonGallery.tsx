
import React from 'react';

const HackathonGallery: React.FC = () => {
  const images = [
    'https://picsum.photos/seed/h1/600/400',
    'https://picsum.photos/seed/h2/600/400',
    'https://picsum.photos/seed/h3/600/400',
    'https://picsum.photos/seed/h4/600/400',
    'https://picsum.photos/seed/h5/600/400',
    'https://picsum.photos/seed/h6/600/400',
  ];

  return (
    <div className="py-24 overflow-hidden bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-center">
          Heyo! Journey with us in <span className="text-google-red">Hackathons</span>
        </h2>
      </div>

      <div className="flex animate-marquee-fast gap-6 py-4">
        {[...images, ...images].map((src, idx) => (
          <div key={idx} className="flex-shrink-0 w-[400px] h-[280px] rounded-3xl overflow-hidden border-4 border-white/5 shadow-xl">
            <img src={src} alt="Hackathon" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HackathonGallery;
