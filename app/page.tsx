"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// 1. IMPORT the new typed component
import FloatingShards from "@/components/FloatingShards";

// The old AnimatedDotGrid component can now be removed from this file.

export default function Home() {
  // Animation variants for text elements with types preserved
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (delay: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay }
    })
  };

  return (
    // Main container now uses a responsive grid layout
    <div className="max-w-6xl mx-auto px-4 lg:px-8 py-16 lg:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
        
        {/* Visual Element */}
        <motion.div 
          className="flex justify-center items-center order-first lg:order-last mb-8 lg:mb-0"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        >
          <div className="relative p-8 border border-border/20 rounded-xl bg-background/30">
             
             {/* 2. REPLACE the old component with the new one */}
             <FloatingShards />

          </div>
        </motion.div>

        {/* Left Column: Text Content */}
        <div className="flex flex-col justify-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-4"
            variants={textVariants}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            Gururaj
          </motion.h1>
          <motion.h2 
            className="text-2xl md:text-3xl text-foreground/80 mb-8"
            variants={textVariants}
            initial="hidden"
            animate="visible"
            custom={0.1}
          >
            Frontend Developer, Carbon Design System
          </motion.h2>
          
          <motion.div 
            className="space-y-5 text-foreground/90 leading-relaxed"
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.15, delayChildren: 0.4 } }
            }}
          >
            <motion.p variants={textVariants}>
              My journey started in Mechanical Engineering, but a chance encounter with FreeCodeCamp sparked a passion for code. I dove into HTML, CSS, and JavaScript, and suddenly, my old programming classes made sense.
            </motion.p>
            <motion.p variants={textVariants}>
              After a full-stack bootcamp, I landed my first role at Wipro (found via Instagram!) and built my first landing page with React. The real test came with a Wells Fargo project, migrating legacy apps to modern frontends and even leading a challenging rewrite—a beautiful disaster that taught me more than any success could have.
            </motion.p>
             <motion.p variants={textVariants}>
              Now at IBM, I contribute to the Carbon Design System, supporting thousands of developers. It&apos;s been a wild ride from tutorials to a major design system, and I feel like I&apos;m just getting started.
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="mt-10"
            variants={textVariants}
            initial="hidden"
            animate="visible"
            custom={1.2}
          >
            <Link href="/projects">
              <Button
                variant="default"
                size="lg"
                className="group"
              >
                Check Out My Work
                <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}