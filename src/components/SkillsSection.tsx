import { motion } from "framer-motion";
import { Zap } from "lucide-react";

const skills = [
  "AI Video Generation",
  "Prompt Engineering",
  "Cinematic Editing",
  "Storyboarding",
  "Visual Effects",
  "Color Grading",
  "Motion Graphics",
  "Sound Design",
];

const tools = [
  "Runway ML",
  "Pika Labs",
  "Midjourney",
  "DALL-E",
  "Stable Diffusion",
  "DaVinci Resolve",
  "Adobe Premiere Pro",
  "After Effects",
];

const SkillsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section id="skills" className="py-24 md:py-32 relative">
      <div className="container px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 text-primary mb-4">
            <Zap className="h-5 w-5" />
            <span className="text-sm uppercase tracking-widest">Skills & Tools</span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Toolkit</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-12">
          {/* Skills */}
          <div>
            <h3 className="font-display text-xl font-semibold mb-6 text-center text-muted-foreground">
              Creative Skills
            </h3>
            <motion.div
              className="flex flex-wrap justify-center gap-3"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {skills.map((skill) => (
                <motion.div
                  key={skill}
                  className="skill-badge"
                  variants={itemVariants}
                >
                  {skill}
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Divider */}
          <div className="neon-line w-1/2 mx-auto" />

          {/* Tools */}
          <div>
            <h3 className="font-display text-xl font-semibold mb-6 text-center text-muted-foreground">
              Tools & Platforms
            </h3>
            <motion.div
              className="flex flex-wrap justify-center gap-3"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {tools.map((tool) => (
                <motion.div
                  key={tool}
                  className="skill-badge"
                  variants={itemVariants}
                >
                  {tool}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
