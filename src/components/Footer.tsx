import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card relative overflow-hidden">
      {/* Decorative gradient bar */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-[hsl(217,89%,61%)] via-[hsl(7,81%,56%)] to-[hsl(142,53%,43%)]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-1">
                <span className="w-2.5 h-2.5 rounded-full bg-google-blue" />
                <span className="w-2.5 h-2.5 rounded-full bg-google-red" />
                <span className="w-2.5 h-2.5 rounded-full bg-google-yellow" />
                <span className="w-2.5 h-2.5 rounded-full bg-google-green" />
              </div>
              <span className="font-display font-bold text-foreground">
                GDG OIST Bhopal
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Building a vibrant developer community at Oriental Institute of
              Science & Technology, Bhopal.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">
              Quick Links
            </h4>
            <div className="space-y-3">
              {["About", "Events", "Team", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-sm text-muted-foreground hover:text-foreground hover:translate-x-1 transition-all duration-200"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">
              Connect
            </h4>
            <div className="space-y-3">
              <a
                href="https://gdg.community.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-muted-foreground hover:text-foreground hover:translate-x-1 transition-all duration-200"
              >
                GDG Community Portal
              </a>
              <a
                href="https://developers.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-muted-foreground hover:text-foreground hover:translate-x-1 transition-all duration-200"
              >
                Google Developers
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} GDG OIST Bhopal. Not affiliated with
            Google Inc.
          </p>
          <div className="flex gap-1 text-xs text-muted-foreground">
            Made with{" "}
            <span className="google-dot-red">♥</span>{" "}
            in Bhopal
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
