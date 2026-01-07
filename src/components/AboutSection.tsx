import { motion } from "framer-motion";
import { Sparkles, Film, Heart } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 section-gradient" />
      
      <div className="container relative z-10 px-4">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <motion.div
              className="inline-flex items-center gap-2 text-primary mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Sparkles className="h-5 w-5" />
              <span className="text-sm uppercase tracking-widest">About Me</span>
            </motion.div>
            
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
              The Story Behind the <span className="gradient-text">Vision</span>
            </h2>
          </div>
          
          <motion.div
            className="glass-card p-8 md:p-12 glow-box"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Avatar/Icon area */}
              <div className="flex-shrink-0">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary via-secondary to-accent p-1">
                  <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                    <Film className="h-12 w-12 text-primary" />
                  </div>
                </div>
              </div>
              
              <div className="text-center md:text-left">
                <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-6">
                  Hi, I'm <span className="font-display font-semibold text-primary">Mayur Chaudhari</span> — an AI Video Filmmaker passionate about blending artificial intelligence with cinematic storytelling.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  I create emotionally driven visuals, AI films, music videos, and experimental stories that push the boundaries of what's possible when creativity meets technology.
                </p>
                <div className="flex items-center justify-center md:justify-start gap-2 text-accent">
                  <Heart className="h-5 w-5 fill-current" />
                  <span className="text-sm">Creating magic, one frame at a time</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
