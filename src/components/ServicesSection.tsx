import { motion } from "framer-motion";
import { Video, Music, BookOpen, Wand2, Youtube } from "lucide-react";

const services = [
  {
    icon: Video,
    title: "AI Film Making",
    description: "Creating emotionally engaging short films using cutting-edge AI video generation technology.",
  },
  {
    icon: Music,
    title: "AI Music Videos",
    description: "Transforming music into stunning visual experiences with AI-powered cinematography.",
  },
  {
    icon: BookOpen,
    title: "Cinematic AI Stories",
    description: "Crafting compelling narratives brought to life through AI-generated visuals.",
  },
  {
    icon: Wand2,
    title: "Image-to-Video & Text-to-Video",
    description: "Converting static images and text prompts into dynamic, cinematic videos.",
  },
  {
    icon: Youtube,
    title: "YouTube Content Creation",
    description: "Producing engaging AI-powered content optimized for YouTube audiences.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 section-gradient" />
      
      <div className="container relative z-10 px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 text-primary mb-4">
            <Wand2 className="h-5 w-5" />
            <span className="text-sm uppercase tracking-widest">Services</span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            What I <span className="gradient-text">Create</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Bringing imagination to life through AI-powered visual storytelling
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="service-card group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3 text-foreground">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
