"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

// Data for the projects, structured for easier mapping and maintenance
const projectsData = [
  {
    category: "Edzeeta Digital Platform",
    technologies: ["Next.js", "Firebase", "ShadcN UI", "Google Sheets"],
    items: [
      {
        title: "Online Test Platform",
        description:
          "Secure assessment platform with real-time evaluation and result tracking. Students can take tests online with automated scoring and immediate feedback.",
        link: "https://cit-exam.edzeeta.in",
      },
      {
        title: "Course Registration",
        description:
          "Complete registration system with admin dashboard for managing time-limited coupons. Includes individual and combo coupon generation with usage tracking.",
        link: "https://registration.edzeeta.in",
      },
      {
        title: "Platform Landing",
        description:
          "Modern landing page showcasing test platform features and benefits. Optimized for conversion with clear calls-to-action and responsive design.",
        link: "https://cit.edzeeta.in",
      },
      {
        title: "Careers Portal",
        description:
          "Dedicated careers page with dynamic job listings and integrated application form. Features direct submission handling and applicant tracking.",
        link: "https://careers.edzeeta.in",
      },
    ],
  },
];

// Animation variants for the main container to stagger the project cards
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// Animation variants for each individual project card
const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function Projects() {
  return (
    <div className="max-w-4xl mx-auto px-4 lg:px-0 pb-20 lg:pb-0">
      {/* Page Title Animation */}
      <motion.h1
        className="text-4xl font-bold mb-12"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        Projects
      </motion.h1>

      {/* Main container for all project sections */}
      <motion.div
        className="space-y-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {projectsData.map((projectCategory) => (
          <motion.div key={projectCategory.category} variants={itemVariants}>
            <div className="mb-8">
              <h2 className="text-2xl lg:text-3xl font-bold mb-4">
                {projectCategory.category}
              </h2>
              {/* Technology badges */}
              <div className="flex flex-wrap gap-2">
                {projectCategory.technologies.map((tech) => (
                  <div
                    key={tech}
                    className="px-3 py-1 text-xs font-medium border border-border rounded-full"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>

            {/* Grid layout for project cards, responsive for different screen sizes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projectCategory.items.map((project) => (
                <a
                  key={project.title}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group" // 'group' is used for the hover effect on the arrow icon
                >
                  {/* Each card has a subtle hover effect */}
                  <motion.div
                    whileHover={{
                      scale: 1.03,
                      boxShadow: "0px 8px 30px rgba(0, 0, 0, 0.12)",
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="p-6 h-full border border-border rounded-lg bg-background/50 flex flex-col"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-lg sm:text-xl font-semibold">
                        {project.title}
                      </h3>
                      {/* Arrow icon that animates on hover */}
                      <ArrowUpRight className="w-5 h-5 text-foreground/40 transition-transform duration-300 group-hover:text-foreground/80 group-hover:-translate-y-1 group-hover:translate-x-1" />
                    </div>
                    <p className="text-foreground/80 text-sm sm:text-base flex-grow">
                      {project.description}
                    </p>
                  </motion.div>
                </a>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
