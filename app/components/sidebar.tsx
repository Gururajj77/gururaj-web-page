"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

function AnimatedDash() {
  return (
    <motion.div
      className="h-px w-full absolute bottom-0 left-0"
      style={{ backgroundColor: "hsl(var(--border))" }}
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      transition={{ duration: 0.3 }}
    />
  );
}

export default function Sidebar() {
  const pathname = usePathname();
  const links = [
    { href: "/", label: "About" },
    { href: "/skills", label: "Skills" },
    { href: "/projects", label: "Projects" },
    { href: "/experience", label: "Experience" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="w-64 p-6 hidden lg:block sticky top-0 bg-background min-h-screen border-r border-border">
        <nav className="space-y-4">
          {links.map((link) => (
            <div key={link.href} className="relative">
              <Link
                href={link.href}
                className={`block transition-colors ${
                  pathname === link.href
                    ? "text-foreground font-bold"
                    : "text-foreground/60 hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
              {pathname === link.href && <AnimatedDash />}
            </div>
          ))}
        </nav>
      </aside>

      {/* Mobile Navigation */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-background border-t border-border p-4 z-50">
        <nav className="flex justify-around items-center">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm transition-colors ${
                pathname === link.href
                  ? "text-foreground font-bold"
                  : "text-foreground/60"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
