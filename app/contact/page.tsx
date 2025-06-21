"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, ArrowRight } from "lucide-react";

const contactLinks = [
  {
    name: "Email",
    href: "mailto:jdotgururaj@gmail.com",
    icon: Mail,
    ariaLabel: "Email Gururaj",
  },
  {
    name: "GitHub",
    href: "https://github.com/Gururajj77",
    icon: Github,
    ariaLabel: "Gururaj's GitHub Profile",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/gururaj-j-7271a019a/",
    icon: Linkedin,
    ariaLabel: "Gururaj's LinkedIn Profile",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const Contact: React.FC = () => {
  return (
    <motion.div
      className="max-w-xl mx-auto px-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1 
        className="text-4xl font-bold mb-4"
        variants={itemVariants}
      >
        Contact
      </motion.h1>
      <motion.p 
        className="text-lg text-foreground/80 mb-10"
        variants={itemVariants}
      >
        The best way to get in touch is to send me an email. I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of an ambitious vision.
      </motion.p>

      <motion.div 
        className="space-y-4"
        variants={itemVariants}
      >
        {contactLinks.map((link) => (
          <motion.a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.ariaLabel}
            className="group flex items-center justify-between w-full p-4 border border-border/40 rounded-lg transition-colors duration-300 hover:bg-muted"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-center space-x-4">
              <link.icon className="w-6 h-6 text-foreground/80" />
              <span className="text-lg font-medium">{link.name}</span>
            </div>
            <ArrowRight className="w-5 h-5 text-foreground/60 transform transition-transform duration-300 group-hover:translate-x-1" />
          </motion.a>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Contact;