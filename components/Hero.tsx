import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image: OIST Bhopal Campus */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://content.jdmagicbox.com/comp/bhopal/q5/0755px755.x755.210419145117.l1q5/catalogue/-596ccg66md.jpg?w=3840&q=75" 
          alt="OIST Bhopal Campus"
          className="w-full h-full object-cover"
        />
        {/* The overlay - deep blue/black gradient for text contrast and premium feel */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 via-transparent to-black/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center mt-12">
        {/* Main Heading remains White for impact */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 text-white drop-shadow-2xl">
          Google Developer Groups on Campus
        </h1>
        
        {/* Sub-heading updated to Google Blue as requested */}
        <h2 className="text-lg md:text-2xl lg:text-3xl font-medium google-blue tracking-wide mb-10 drop-shadow-xl">
          The OIST Bhopal Chapter
        </h2>

        <p className="text-base md:text-xl font-medium tracking-wide text-white/70 drop-shadow-sm max-w-3xl mx-auto leading-relaxed">
          Elevate Your Code — the Sky's the Limit.
        </p>
      </div>
    </section>
  );
};

export default Hero;