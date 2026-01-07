import { motion } from "framer-motion";
import { Film } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 relative overflow-hidden">
      {/* Animated neon line */}
      <motion.div
        className="neon-line mb-12"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
      
      <div className="container px-4">
        <motion.div
          className="flex flex-col items-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Logo */}
          <div className="flex items-center gap-2 text-foreground">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary via-secondary to-accent p-0.5">
              <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                <Film className="h-4 w-4 text-primary" />
              </div>
            </div>
            <span className="font-display font-semibold text-lg">Mayur Chaudhari</span>
          </div>
          
          {/* Copyright */}
          <p className="text-muted-foreground text-sm text-center">
            © {new Date().getFullYear()} Mayur Chaudhari — AI Video Filmmaker
          </p>
          
          {/* Tagline */}
          <p className="text-xs text-muted-foreground/60 animate-pulse-glow">
            Creating cinematic magic with AI ✨
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
