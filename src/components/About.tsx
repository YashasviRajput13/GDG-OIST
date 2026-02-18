import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Users, Lightbulb, Globe } from "lucide-react";

const stats = [
  { value: "500+", label: "Members", color: "bg-google-blue" },
  { value: "50+", label: "Events Hosted", color: "bg-google-red" },
  { value: "20+", label: "Workshops", color: "bg-google-yellow" },
  { value: "10+", label: "Hackathons", color: "bg-google-green" },
];

const pillars = [
  {
    icon: Code,
    title: "Hands-on Learning",
    description: "Workshops and codelabs on cutting-edge Google technologies.",
    dotColor: "bg-google-blue",
    gradient: "from-[hsl(217,89%,61%)] to-[hsl(217,89%,45%)]",
  },
  {
    icon: Users,
    title: "Community First",
    description: "A welcoming space for developers of every skill level.",
    dotColor: "bg-google-red",
    gradient: "from-[hsl(7,81%,56%)] to-[hsl(7,81%,42%)]",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Hackathons and challenges that push creative boundaries.",
    dotColor: "bg-google-yellow",
    gradient: "from-[hsl(43,96%,50%)] to-[hsl(43,96%,38%)]",
  },
  {
    icon: Globe,
    title: "Open Source",
    description: "Contributing to and learning from the global open-source ecosystem.",
    dotColor: "bg-google-green",
    gradient: "from-[hsl(142,53%,43%)] to-[hsl(142,53%,30%)]",
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-card relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-accent/5 blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-20"
        >
          <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4">
            About Us
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
            Empowering developers,{" "}
            <span className="text-gradient-google">one event at a time.</span>
          </h2>
          <p className="text-lg text-muted-foreground font-body leading-relaxed">
            GDG OIST Bhopal is a community-driven group of developers, designers,
            and tech enthusiasts passionate about Google technologies. We believe
            in learning together, building together, and growing together.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative p-8 rounded-2xl bg-background border border-border overflow-hidden group hover:shadow-xl transition-shadow duration-500"
            >
              <div className={`absolute top-0 left-0 w-full h-1 ${stat.color} transition-all duration-300 group-hover:h-1.5`} />
              <p className="font-display text-4xl md:text-5xl font-bold text-foreground mb-1">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Pillars */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 + i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group p-6 rounded-2xl hover:bg-background hover:shadow-lg transition-all duration-500 border border-transparent hover:border-border"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${pillar.gradient} flex items-center justify-center mb-6`}>
                <pillar.icon className="text-primary-foreground" size={22} strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {pillar.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
