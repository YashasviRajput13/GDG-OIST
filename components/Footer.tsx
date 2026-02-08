
import React from 'react';
import { Twitter, Instagram, Linkedin, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="flex gap-0.5">
                <div className="w-2 h-2 rounded-full bg-google-blue" />
                <div className="w-2 h-2 rounded-full bg-google-red" />
                <div className="w-2 h-2 rounded-full bg-google-yellow" />
                <div className="w-2 h-2 rounded-full bg-google-green" />
              </div>
              <span className="font-bold text-xl tracking-tight text-gray-900">
                GDG OIST Bhopal
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              An official Google Developer Group chapter based out of Oriental Institute of Science and Technology, Bhopal.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-blue-50 hover:text-google-blue transition-all"><Twitter size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-pink-50 hover:text-pink-600 transition-all"><Instagram size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-blue-50 hover:text-blue-700 transition-all"><Linkedin size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-blue-50 hover:text-blue-800 transition-all"><Facebook size={18} /></a>
            </div>
          </div>
          
          <div>
            <h5 className="font-bold text-gray-900 mb-6">Community</h5>
            <ul className="space-y-4 text-sm text-gray-500 font-medium">
              <li><a href="#about" className="hover:text-google-blue transition-colors">About Us</a></li>
              <li><a href="#events" className="hover:text-google-blue transition-colors">Upcoming Events</a></li>
              <li><a href="#team" className="hover:text-google-blue transition-colors">Organizers</a></li>
              <li><a href="#" className="hover:text-google-blue transition-colors">Member Guidelines</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-bold text-gray-900 mb-6">Resources</h5>
            <ul className="space-y-4 text-sm text-gray-500 font-medium">
              <li><a href="https://developers.google.com" target="_blank" className="hover:text-google-blue transition-colors">Google Developers</a></li>
              <li><a href="https://cloud.google.com" target="_blank" className="hover:text-google-blue transition-colors">Google Cloud</a></li>
              <li><a href="https://material.io" target="_blank" className="hover:text-google-blue transition-colors">Material Design</a></li>
              <li><a href="#" className="hover:text-google-blue transition-colors">Codelabs</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-bold text-gray-900 mb-6">Stay Updated</h5>
            <p className="text-sm text-gray-500 mb-4">Subscribe to our newsletter for the latest tech news.</p>
            <div className="flex gap-2">
              <input type="email" placeholder="Email" className="flex-1 px-4 py-2 bg-gray-50 border-none rounded-xl text-sm focus:ring-1 focus:ring-google-blue" />
              <button className="bg-gray-900 text-white px-4 py-2 rounded-xl text-sm font-bold">Go</button>
            </div>
          </div>
        </div>
        
        <div className="pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-400 text-xs">
            © 2024 GDG OIST Bhopal. All Rights Reserved.
          </p>
          <p className="text-gray-400 text-[10px] max-w-sm text-center md:text-right italic">
            Disclaimer: GDG OIST Bhopal is an independent group; our activities and the opinions expressed here should in no way be linked to Google, the corporation.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
