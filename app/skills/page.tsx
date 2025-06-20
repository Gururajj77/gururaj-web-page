"use client";

import { motion } from "framer-motion";

// Animation variants for the container to orchestrate children animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08, // Stagger the animation of each skill badge
    },
  },
};

// Animation variants for each skill item
const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

export default function Skills() {
  const skillCategories = [
    {
      title: "Development",
      skills: [
        "React.js & Angular",
        "TypeScript & JavaScript",
        "HTML5 & Tailwind CSS",
        "SCSS & CSS3",
        "GraphQL",
        "Nx & Lerna",
      ],
    },
    {
      title: "Testing & Tools",
      skills: [
        "Jest",
        "React Testing Library",
        "Playwright",
        "Accessibility",
        "Storybook",
        "Git & GitHub",
      ],
    },
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 lg:px-0 pb-20 lg:pb-0">
      <motion.h1
        className="text-4xl font-bold mb-12" // Increased margin bottom
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        Skills
      </motion.h1>
      <div className="space-y-12">
        {skillCategories.map((category) => (
          // Each category section will fade in as you scroll to it
          <motion.section
            key={category.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="p-6 md:p-8 dotted-border rounded-lg" // Added padding and dotted border
          >
            <h2 className="text-2xl font-bold mb-6">{category.title}</h2>
            {/* This container uses variants to stagger the animation of the badges */}
            <motion.div
              className="flex flex-wrap gap-3"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {category.skills.map((skill) => (
                <motion.div
                  key={skill}
                  variants={itemVariants}
                  className="px-4 py-2 text-sm font-medium border border-border rounded-full"
                  // Add a subtle, interactive hover effect to each skill badge
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "hsl(var(--border))",
                    color: "hsl(var(--background))",
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {skill}
                </motion.div>
              ))}
            </motion.div>
          </motion.section>
        ))}
      </div>
    </div>
  );
}
