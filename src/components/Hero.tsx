import { motion } from "framer-motion";
import { ArrowDown, ChevronRight } from "lucide-react";
import heroVideo from "@/assets/hero-video.mp4";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={heroBg}
          className="w-full h-full object-cover scale-105"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        {/* Gradient overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60" />
      </div>

      {/* Animated accent lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "200%" }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear", delay: 1 }}
          className="absolute top-1/4 left-0 w-32 h-px bg-gradient-to-r from-transparent via-[hsl(var(--google-blue))] to-transparent opacity-40"
        />
        <motion.div
          initial={{ x: "200%" }}
          animate={{ x: "-100%" }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear", delay: 3 }}
          className="absolute top-3/4 left-0 w-48 h-px bg-gradient-to-r from-transparent via-[hsl(var(--google-red))] to-transparent opacity-30"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-border/50 bg-card/30 backdrop-blur-md mb-8">
            <div className="flex gap-1">
              <span className="w-2 h-2 rounded-full bg-google-blue" />
              <span className="w-2 h-2 rounded-full bg-google-red" />
              <span className="w-2 h-2 rounded-full bg-google-yellow" />
              <span className="w-2 h-2 rounded-full bg-google-green" />
            </div>
            <span className="text-xs md:text-sm font-medium tracking-widest uppercase text-foreground/80">
              Google Developer Group
            </span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="font-display text-5xl md:text-7xl lg:text-9xl font-bold leading-[0.9] tracking-tighter mb-8"
        >
          <span className="text-foreground">Build.</span>{" "}
          <span className="google-dot-blue">Learn.</span>{" "}
          <span className="google-dot-red">Grow.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-base md:text-xl text-foreground/70 max-w-2xl mx-auto mb-12 font-body leading-relaxed"
        >
          Join the most vibrant developer community at OIST Bhopal. We host
          workshops, hackathons, and tech talks powered by Google technologies.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#events"
            className="group px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 flex items-center gap-2"
          >
            Explore Events
            <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#about"
            className="px-8 py-4 rounded-full border border-border/50 text-foreground font-semibold text-sm hover:bg-card/50 backdrop-blur-sm transition-all duration-300"
          >
            Learn More
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-foreground/40 tracking-widest uppercase">Scroll</span>
          <ArrowDown className="text-foreground/40" size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
