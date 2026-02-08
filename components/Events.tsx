
import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { EVENTS } from '../constants';

const Events: React.FC = () => {
  return (
    <div className="py-24 px-4 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <h2 className="text-google-red font-bold tracking-widest uppercase text-sm mb-4">Our Events</h2>
          <h3 className="text-4xl font-bold text-gray-900">Upcoming Meetups & Sessions</h3>
        </div>
        <button className="text-google-blue font-medium flex items-center gap-2 hover:gap-3 transition-all">
          View all events <ArrowRight size={20} />
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {EVENTS.map((event) => (
          <div key={event.id} className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all group">
            <div className="relative h-56 overflow-hidden">
              <img 
                src={event.image} 
                alt={event.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur shadow-md px-4 py-1 rounded-full">
                <span className="text-xs font-bold text-google-blue uppercase">{event.type}</span>
              </div>
            </div>
            <div className="p-8">
              <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
                <Calendar size={16} />
                <span>{event.date}</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {event.description}
              </p>
              <button className="w-full py-3 rounded-2xl border border-gray-100 font-medium hover:bg-gray-50 transition-colors">
                Register Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
