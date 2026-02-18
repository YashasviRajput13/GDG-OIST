import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Calendar, MapPin, ArrowRight, Sparkles } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { format } from "date-fns";

interface Event {
  id: string;
  title: string;
  description: string | null;
  event_date: string;
  location: string | null;
  event_type: string | null;
  is_featured: boolean | null;
  registration_link: string | null;
}

const typeColors: Record<string, string> = {
  conference: "bg-google-blue",
  workshop: "bg-google-green",
  meetup: "bg-google-yellow",
  hackathon: "bg-google-red",
};

const typeAccents: Record<string, string> = {
  conference: "text-[hsl(217,89%,61%)]",
  workshop: "text-[hsl(142,53%,43%)]",
  meetup: "text-[hsl(43,96%,50%)]",
  hackathon: "text-[hsl(7,81%,56%)]",
};

const Events = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const { data } = await supabase
        .from("events")
        .select("*")
        .order("event_date", { ascending: true })
        .limit(4);
      if (data) setEvents(data);
    };
    fetchEvents();
  }, []);

  return (
    <section id="events" className="section-padding relative overflow-hidden" ref={ref}>
      {/* Background accents */}
      <div className="absolute top-20 left-0 w-64 h-64 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-20 right-0 w-80 h-80 rounded-full bg-destructive/5 blur-3xl" />

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-16"
        >
          <div className="max-w-2xl mb-6 md:mb-0">
            <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4">
              Upcoming Events
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              What's happening next
            </h2>
          </div>
          <a
            href="#events"
            className="group text-sm font-medium text-primary flex items-center gap-2 hover:gap-3 transition-all"
          >
            View all events <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {events.map((event, i) => (
            <motion.article
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.1 }}
              whileHover={{ y: -4 }}
              className="group relative bg-card rounded-2xl border border-border p-8 hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              {/* Color bar */}
              <div
                className={`absolute top-0 left-0 w-full h-1.5 ${
                  typeColors[event.event_type || "meetup"] || "bg-primary"
                } transition-all duration-300 group-hover:h-2`}
              />

              {/* Featured badge */}
              {event.is_featured && (
                <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4">
                  <Sparkles size={12} />
                  Featured
                </div>
              )}

              {/* Type badge */}
              <span className={`inline-block text-xs font-semibold uppercase tracking-wider mb-4 ${typeAccents[event.event_type || "meetup"] || "text-muted-foreground"}`}>
                {event.event_type}
              </span>

              <h3 className="font-display text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {event.title}
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed mb-6 line-clamp-2">
                {event.description}
              </p>

              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Calendar size={14} />
                  {format(new Date(event.event_date), "MMM d, yyyy")}
                </span>
                {event.location && (
                  <span className="flex items-center gap-1.5">
                    <MapPin size={14} />
                    {event.location}
                  </span>
                )}
              </div>

              {event.registration_link && (
                <a
                  href={event.registration_link}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
                >
                  Register <ArrowRight size={14} />
                </a>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
