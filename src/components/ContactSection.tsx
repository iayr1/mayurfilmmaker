import { motion } from "framer-motion";
import { Mail, Phone, Youtube, Instagram, Linkedin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const socialLinks = [
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 md:py-32 relative">
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
            <Mail className="h-5 w-5" />
            <span className="text-sm uppercase tracking-widest">Contact</span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Let's Create Something <span className="gradient-text">Magical</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's connect and bring your vision to life.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            className="glass-card p-8 md:p-12 glow-box"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-8">
              {/* Phone */}
              <motion.a
                href="tel:+918087205660"
                className="flex items-center gap-4 p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-all duration-300 group"
                whileHover={{ x: 5 }}
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                  <Phone className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground mb-1">Phone</p>
                  <p className="text-lg font-display font-medium text-foreground">+91 808 720 5660</p>
                </div>
                <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.a>

              {/* Email */}
              <motion.a
                href="mailto:mayuraimaker@gmail.com"
                className="flex items-center gap-4 p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-all duration-300 group"
                whileHover={{ x: 5 }}
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                  <Mail className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-muted-foreground mb-1">Email</p>
                  <p className="text-base sm:text-lg font-display font-medium text-foreground truncate">mayuraimaker@gmail.com</p>
                </div>
                <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
              </motion.a>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  asChild
                  size="lg"
                  className="flex-1 btn-glow bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-lg font-medium"
                >
                  <a href="mailto:mayuraimaker@gmail.com">
                    <Mail className="mr-2 h-5 w-5" />
                    Send Email
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="flex-1 border-glass-border hover:bg-glass hover:border-primary/50 py-6 text-lg font-medium transition-all duration-300"
                >
                  <a href="tel:+918087205660">
                    <Phone className="mr-2 h-5 w-5" />
                    Call Now
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex items-center justify-center gap-4 mt-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full glass-card hover:border-primary/50 transition-all duration-300 hover:scale-110"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
