import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectGallery from './components/ProjectGallery';
import About from './components/About';
import Activities from './components/Activities';
import Events from './components/Events';
import Meetings from './components/Meetings';
import CommunitySection from './components/CommunitySection';
import TechMarquee from './components/TechMarquee';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#3c4043] selection:bg-google-blue/20 selection:text-google-blue font-sans overflow-x-hidden">
      <Navbar scrolled={scrolled} />
      
      <main>
        {/* Section 1: Hero */}
        <section id="home">
          <Hero />
        </section>
        
        {/* Section 2: Project Gallery - Immediate follow up to Hero */}
        <section id="projects">
          <ProjectGallery />
        </section>

        {/* Section 3: About */}
        <section id="about" className="bg-white">
          <About />
        </section>

        {/* Section 4: Activities */}
        <section id="activities" className="bg-gray-50/50">
          <Activities />
        </section>

        {/* Section 5: Events */}
        <section id="events" className="bg-white">
          <Events />
        </section>

        {/* Section 6: Meetings */}
        <section id="meetings">
          <Meetings />
        </section>

        {/* Section 7: Community */}
        <section id="community" className="bg-white">
          <CommunitySection />
        </section>

        {/* Section 8: Tech Marquee */}
        <TechMarquee />

        {/* Section 9: Team */}
        <section id="leadership" className="bg-white">
          <Team />
        </section>
        
        {/* Section 10: Contact */}
        <section id="contact" className="bg-zinc-950 text-white">
          <Contact />
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default App;