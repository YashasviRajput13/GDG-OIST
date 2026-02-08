
import React from 'react';

const Community: React.FC = () => {
  return (
    <div className="py-24 px-4 max-w-7xl mx-auto">
      <div className="bg-google-blue rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden shadow-2xl">
        {/* Background Decorative Element */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 -translate-y-1/2 translate-x-1/2 rounded-full" />
        
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Join a Global Community</h2>
            <p className="text-xl text-white/80 leading-relaxed mb-10 max-w-xl">
              Become a part of the official developer community at OIST Bhopal. 
              Get access to exclusive events, mentorship, and Google resources.
            </p>
            <div className="grid grid-cols-2 gap-8 text-center md:text-left">
              <div>
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="text-white/60 uppercase text-xs font-bold tracking-widest">Members</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">40+</div>
                <div className="text-white/60 uppercase text-xs font-bold tracking-widest">Events yearly</div>
              </div>
            </div>
          </div>
          
          <div className="flex-1 flex justify-center">
             <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-[2rem] max-w-sm w-full shadow-lg">
                <img 
                  src="https://picsum.photos/seed/community/400/300" 
                  alt="Community" 
                  className="rounded-2xl mb-6 shadow-md"
                />
                <p className="text-sm font-light italic mb-6">"Being part of GDG helped me land my first tech internship. The peer support is unmatched!"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-google-yellow" />
                  <div>
                    <div className="font-bold text-sm">Deepak Singh</div>
                    <div className="text-xs text-white/60">Community Member</div>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
