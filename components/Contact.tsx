
import React from 'react';
import { Mail, MessageSquare, Twitter, Instagram, Linkedin, Github } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="py-24 px-4 max-w-7xl mx-auto text-center">
      <div className="max-w-3xl mx-auto space-y-12">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-google-green">Join Us.</h2>
          <p className="text-xl text-gray-400">Open to all for 2024-2025.</p>
        </div>

        {/* Discord Mockup */}
        <div className="bg-[#5865F2]/10 border border-[#5865F2]/30 rounded-[2.5rem] p-12 relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-2 h-full bg-[#5865F2]" />
          <div className="flex flex-col items-center gap-6">
            <div className="w-20 h-20 bg-[#5865F2] rounded-full flex items-center justify-center text-white shadow-lg shadow-[#5865F2]/20">
              <MessageSquare size={40} fill="currentColor" />
            </div>
            <h3 className="text-3xl font-bold">Join our Community on Discord now!</h3>
            <p className="text-gray-400">Connect with 150+ active members online.</p>
            <button className="bg-[#5865F2] hover:bg-[#4752c4] text-white px-12 py-4 rounded-2xl font-bold transition-all transform hover:scale-105">
              Click to join us!
            </button>
          </div>
        </div>

        <div className="space-y-8 pt-12">
          <h4 className="text-3xl font-bold">Let's connect.</h4>
          <p className="text-gray-400">Expand your professional network with us.</p>
          
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: 'Discord', icon: MessageSquare, color: 'bg-[#5865F2]' },
              { name: 'YouTube', icon: Github, color: 'bg-google-red' },
              { name: 'LinkedIn', icon: Linkedin, color: 'bg-google-blue' },
              { name: 'Instagram', icon: Instagram, color: 'bg-pink-600' },
              { name: 'GitHub', icon: Github, color: 'bg-white text-black' },
              { name: 'Email', icon: Mail, color: 'bg-google-yellow' },
            ].map((social) => (
              <button key={social.name} className={`${social.color} px-6 py-3 rounded-xl flex items-center gap-2 font-bold hover:opacity-90 transition-opacity`}>
                <social.icon size={20} />
                {social.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
