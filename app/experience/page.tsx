"use client";

import { motion } from "framer-motion";

// Data for your work experience, structured for easy updates.
const experienceData = [
  {
    role: "Frontend Developer, Carbon Design System",
    company: "IBM India Pvt. Ltd.",
    date: "February 2024 - Present",
    points: [
      "Implemented Codecov in monorepo achieving 85% coverage for @carbon/react library.",
      "Shipped optimized UI components with 3,400+ implementations in 2 months.",
      "Led TypeScript migration with 80% downstream adoption and improved type safety.",
      "Grew @carbon/react community from 15 to 50+ developers with 3% faster adoption.",
      "Provided technical support to 5000+ developers through Slack engagement.",
    ],
  },
  {
    role: "Project Engineer, Cloud Migration and Modernization",
    company: "WIPRO LIMITED - Wells Fargo",
    date: "September 2021 - February 2024",
    points: [
      "Modernized 5 enterprise apps from WebForms to Angular 14-16 with a reusable component library.",
      "Built responsive Angular applications with 100% test coverage using Jasmine/Karma.",
      "Optimized CI/CD pipelines and implemented secure API integrations.",
    ],
  },
];

// Animation variants for the main timeline container to stagger item animations
const timelineVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

// Animation variants for each individual experience item
const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function Experience() {
  return (
    <div className="max-w-3xl mx-auto px-4 lg:px-0 pb-20 lg:pb-0">
      {/* Page Title Animation */}
      <motion.h1
        className="text-4xl font-bold mb-12"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        Experience
      </motion.h1>

      {/* Timeline Container */}
      <motion.div
        className="relative"
        variants={timelineVariants}
        initial="hidden"
        animate="visible"
      >
        {/* The vertical line for the timeline */}
        <div className="absolute left-4 top-2 h-full w-0.5 bg-border/30 -translate-x-1/2"></div>
        
        <div className="space-y-12">
          {experienceData.map((job, index) => (
            <motion.div
              key={index}
              className="flex gap-6 items-start"
              variants={itemVariants}
            >
              {/* The dot on the timeline */}
              <div className="mt-2.5">
                <div className="w-8 h-8 rounded-full bg-background border-2 border-border flex-shrink-0"></div>
              </div>

              {/* Job Details */}
              <div>
                <h2 className="text-xl sm:text-2xl font-bold mb-1">{job.role}</h2>
                <p className="text-base sm:text-lg text-foreground/80 mb-3">
                  {job.company}
                </p>
                <p className="text-sm text-foreground/60 mb-4">{job.date}</p>
                <ul className="list-disc list-outside space-y-2 text-sm sm:text-base text-foreground/90 pl-5">
                  {job.points.map((point, i) => (
                    <li key={i} className="leading-relaxed">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
