import { Mail, Github, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Contact</h1>
      <p className="mb-6">Get in touch for collaborations and opportunities.</p>
      <div className="flex space-x-6">
        <a
          href="mailto:jdotgururaj@gmail.com"
          aria-label="Email"
          className="hover:text-foreground/60 transition-colors"
        >
          <Mail className="w-8 h-8" />
        </a>
        <a
          href="https://github.com/Gururajj77"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:text-foreground/60 transition-colors"
        >
          <Github className="w-8 h-8" />
        </a>
        <a
          href="https://www.linkedin.com/in/gururaj-j-7271a019a/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-foreground/60 transition-colors"
        >
          <Linkedin className="w-8 h-8" />
        </a>
      </div>
    </div>
  );
}
