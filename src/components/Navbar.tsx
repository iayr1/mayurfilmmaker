import { motion } from "framer-motion";
import { Film, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Services", href: "#services" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "glass-card backdrop-blur-xl border-b border-glass-border" : ""
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a
              href="#"
              className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary via-secondary to-accent p-0.5">
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                  <Film className="h-4 w-4 text-primary" />
                </div>
              </div>
              <span className="font-display font-semibold hidden sm:block">Mayur Chaudhari</span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <Button
              size="sm"
              className="hidden md:inline-flex btn-glow bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={() => scrollToSection("#contact")}
            >
              Let's Talk
            </Button>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2 text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        className={`fixed inset-0 z-40 md:hidden ${isMobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"}`}
        initial={false}
        animate={isMobileMenuOpen ? { opacity: 1 } : { opacity: 0 }}
      >
        <div className="absolute inset-0 bg-background/95 backdrop-blur-xl" onClick={() => setIsMobileMenuOpen(false)} />
        <motion.div
          className="absolute top-20 left-4 right-4 glass-card p-6"
          initial={false}
          animate={isMobileMenuOpen ? { y: 0, opacity: 1 } : { y: -20, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-lg text-foreground hover:text-primary transition-colors text-left py-2"
              >
                {item.label}
              </button>
            ))}
            <Button
              className="mt-4 btn-glow bg-primary hover:bg-primary/90 text-primary-foreground w-full"
              onClick={() => scrollToSection("#contact")}
            >
              Let's Talk
            </Button>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Navbar;
