import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto pb-20 lg:pb-0">
      {" "}
      {/* Added padding bottom for mobile */}
      <h1 className="text-4xl font-bold mb-4 px-4 lg:px-0">Gururaj</h1>
      <h2 className="text-2xl mb-8 px-4 lg:px-0">
        Frontend Developer at IBM Carbon Design System
      </h2>
      <div className="px-4 lg:px-0">
        {" "}
        {/* Added padding for mobile */}
        <p className="mb-6">
          Here&apos;s a fun story - I started out as a Mechanical Engineer in
          2021. While everyone was figuring out their next move, I stumbled upon
          FreeCodeCamp and dove into HTML, CSS, and JavaScript. Something just
          clicked. Those early programming classes from school (Java in 10th and
          C++ in 12th) suddenly started making a lot more sense.
        </p>
        <p className="mb-6">
          Joined a bootcamp at JSPiders for full-stack development, and three
          months later, believe it or not, landed my first tech job at Wipro
          through... Instagram! That&apos;s where I first met React, building my
          first landing page with YouTube tutorials as my guide. Then came the
          real challenge - a Wells Fargo project migrating internal WebForms
          applications to modern Angular and React frontends.
        </p>
        <p className="mb-6">
          They even threw me into leading an application rewrite (spoiler alert:
          it was a beautiful disaster). But hey, nothing teaches you more than a
          good old-fashioned failure, right? Learned tons about frontend
          architecture, time management, and what real efficiency looks like in
          the process.
        </p>
        <p className="mb-8">
          Now I&apos;m at IBM, working on their flagship Carbon Design System.
          From watching tutorial videos to maintaining a design system used by
          thousands of developers - it&apos;s been quite a ride. And the best
          part? I&apos;m just getting started.
        </p>
        <Link href="/projects">
          <Button
            variant="outline"
            className="border-border text-foreground transition-colors duration-300
              hover:bg-border hover:text-background"
          >
            Check Out My Work
          </Button>
        </Link>
      </div>
    </div>
  );
}
