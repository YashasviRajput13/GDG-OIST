import React from 'react';

const PROJECT_IMAGES = [
  { url: 'https://identical-amber-lsyctmrvmc.edgeone.app/Screenshot%202026-02-08%20013625.png', alt: 'Web Development Session' },
  { url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800', alt: 'Tech Talk Presentation' },
  { url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800', alt: 'Hardware & IoT Workshop' },
  { url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800', alt: 'Collaborative Brainstorming' },
  { url: 'https://direct-copper-e0utnso5cj.edgeone.app/Screenshot%202026-02-08%20013758.png', alt: 'Annual Chapter Meetup' },
  { url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800', alt: 'Peer-to-Peer Learning' },
  { url: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800', alt: 'Project Showcasing' },
  { url: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=800', alt: 'Deep Work Hackathon' },
  { url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800', alt: 'Mobile App Coding' },
  { url: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&q=80&w=800', alt: 'Community Networking' },
];

const ProjectGallery: React.FC = () => {
  return (
    <section className="relative py-28 w-full bg-gradient-to-b from-blue-50/60 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-20 text-center animate-in fade-in slide-in-from-bottom-12 duration-1000">
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-6">
          Journey with us in <span className="google-blue">Club Projects</span>
        </h2>
        <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
          From brainstorming sessions to full-scale deployments, see how we grow and innovate together at OIST Bhopal.
        </p>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 md:px-12">
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {PROJECT_IMAGES.map((image, index) => (
            <div 
              key={index} 
              className="relative group rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 break-inside-avoid bg-white animate-in fade-in duration-1000 fill-mode-both"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="aspect-auto overflow-hidden">
                <img 
                  src={image.url} 
                  alt={image.alt} 
                  loading="lazy"
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-105"
                />
              </div>
              
              {/* Overlay with info */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-8">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-white font-bold text-xl drop-shadow-md">{image.alt}</p>
                  <p className="text-white/70 text-sm font-medium mt-1">OIST Bhopal Community</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Subtle Background Elements */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-google-blue/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-20 right-0 w-80 h-80 bg-google-yellow/10 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
};

export default ProjectGallery;