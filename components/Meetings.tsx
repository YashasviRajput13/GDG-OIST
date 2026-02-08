import React from 'react';
import { Calendar, Clock, MapPin, Info, Megaphone } from 'lucide-react';

const Meetings: React.FC = () => {
  return (
    <div className="bg-[#202124] text-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Side: Meeting Info Card */}
          <div className="lg:col-span-7 bg-[#2d2e30] rounded-[2.5rem] p-8 md:p-12 border border-white/5 shadow-2xl relative overflow-hidden group">
            {/* Subtle glow effect */}
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-google-yellow/5 rounded-full blur-[100px] pointer-events-none group-hover:bg-google-yellow/10 transition-colors duration-700" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 text-gray-400 mb-8">
                <Calendar size={20} className="text-gray-400" />
                <span className="text-xs font-bold uppercase tracking-[0.2em]">When</span>
              </div>
              
              <h3 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Our Member Meetings</h3>
              <p className="text-gray-400 text-lg mb-10 font-medium">In-person festivities, fun events, and student member meet-ups!</p>
              
              <div className="flex flex-col md:flex-row md:items-center gap-8 mb-12">
                <div className="bg-[#3c4043] rounded-2xl p-6 min-w-[160px] text-center shadow-inner">
                  <div className="text-3xl font-bold text-white mb-1">Weekly</div>
                  <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Fridays at 12:55 PM</div>
                </div>
                <div className="text-gray-400 text-lg">
                  Next meeting will be on <span className="text-white font-bold bg-white/5 px-2 py-1 rounded-md">Feb 14, 2025</span>.
                </div>
              </div>

              {/* Countdown Timer */}
              <div className="grid grid-cols-4 gap-4 py-10 border-y border-white/5 mb-12">
                {[
                  { label: 'Days', value: '04' },
                  { label: 'Hours', value: '21' },
                  { label: 'Mins', value: '01' },
                  { label: 'Secs', value: '02' }
                ].map((unit, i) => (
                  <div key={i} className="text-center">
                    <div className="text-4xl md:text-5xl font-bold text-white mb-2">{unit.value}</div>
                    <div className="text-[10px] text-gray-500 uppercase font-black tracking-widest">{unit.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex items-start gap-5">
                <div className="p-4 bg-[#3c4043] rounded-2xl text-gray-300">
                  <MapPin size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-white text-xl mb-1 tracking-tight">Where</h4>
                  <p className="text-gray-400 text-lg leading-snug">Block B, Room 204 @ OIST Bhopal Campus</p>
                  <button className="text-google-blue font-bold mt-4 hover:underline flex items-center gap-2 group/btn">
                    <span className="text-xl">📍</span> Sign up for reminders!
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Stacked Announcement Cards */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            
            {/* Site Announcement Card */}
            <div className="bg-[#2d2e30] rounded-[2.5rem] p-10 border border-white/5 shadow-xl">
              <h4 className="text-xs font-black text-gray-400 uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                <Megaphone size={14} /> Site Announcement
              </h4>
              <p className="text-gray-300 italic text-xl mb-6 font-medium leading-relaxed">
                "Words for our student members! — 1 visitors too!"
              </p>
              <p className="text-gray-400 leading-relaxed text-lg">
                Greetings traveler! Feel free to look around! Also, be sure to subscribe to our social media accounts below!
              </p>
            </div>

            {/* Member Information Hub Card */}
            <div className="bg-[#2d2e30] rounded-[2.5rem] p-10 border border-white/5 shadow-xl">
              <h4 className="text-xs font-black text-gray-400 uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                <Info size={14} /> Member Information Hub
              </h4>
              <p className="text-gray-400 text-lg mb-8 font-medium">
                Good-to-know information for current and future student members!
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button className="px-6 py-4 bg-[#3c4043] rounded-2xl text-sm font-bold text-gray-200 hover:bg-[#4a4e52] transition-all hover:scale-[1.02] active:scale-95 text-center">
                  Past Meeting Archives
                </button>
                <button className="px-6 py-4 bg-[#3c4043] rounded-2xl text-sm font-bold text-gray-200 hover:bg-[#4a4e52] transition-all hover:scale-[1.02] active:scale-95 text-center">
                  View Our Software Projects
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Meetings;