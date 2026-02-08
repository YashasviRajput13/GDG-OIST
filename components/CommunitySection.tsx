
import React from 'react';

const CommunitySection: React.FC = () => {
  return (
    <div className="py-24 px-4 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <div className="flex-1 order-2 lg:order-1">
          <div className="relative rounded-[2.5rem] overflow-hidden border-2 border-white/10 shadow-2xl">
            <img 
              src="https://direct-copper-e0utnso5cj.edgeone.app/Screenshot%202026-02-08%20013758.png" 
              alt="Campus" 
              className="w-full h-auto"
            />
            <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-md px-4 py-2 rounded-xl text-[10px] text-white/60">
              We generated this via the easy-to-use Google Aerial View!
            </div>
          </div>
        </div>

        <div className="flex-1 order-1 lg:order-2 space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold">Our | <span className="text-google-blue">Community</span></h2>
          <h3 className="text-xl font-medium text-gray-400">at OIST Bhopal Campus</h3>
          <p className="text-gray-400 leading-relaxed text-lg">
            Since our formation in <span className="text-white font-bold">Fall of 2023</span>, we have served as a platform for over <span className="text-google-green font-bold">250 members</span> past and present. We are a club made up entirely by students, led by other fellow students, backed by a diverse network of outside community members from all branches of computer science.
          </p>
          <p className="text-gray-400 leading-relaxed">
            Regardless if you're a beginner to the field, or are already deeply-immersed into the industry with the newest software and technology stacks, our club and its growing community welcomes everyone of all experience levels—beginners included!
          </p>
          <p className="text-white font-bold italic">
            This is your place to network, to explore, to experiment, and to ultimately discover yourself!
          </p>
        </div>
      </div>
    </div>
  );
};

export default CommunitySection;
