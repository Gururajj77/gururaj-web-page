import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">Gururaj</h1>
      <h2 className="text-2xl mb-8">Full Stack Developer</h2>
      <p className="mb-6">
        Welcome to my digital playground! I'm Gururaj, a passionate Full Stack Developer with an insatiable curiosity for all things tech. 
        My journey in the world of coding began with a simple "Hello, World!" and has since evolved into a thrilling adventure of creating 
        robust, scalable, and user-centric applications.
      </p>
      <p className="mb-6">
        What drives me is the power of technology to transform ideas into reality. Whether it's crafting elegant front-end interfaces or 
        architecting complex back-end systems, I find joy in every line of code I write. I believe in the perfect blend of functionality 
        and aesthetics, always striving to deliver solutions that not only work flawlessly but also provide an exceptional user experience.
      </p>
      <p className="mb-6">
        In this ever-evolving tech landscape, I see myself as a perpetual learner. Each project is an opportunity to push my boundaries, 
        experiment with new technologies, and refine my craft. From React and Next.js on the front-end to Node.js and databases on the back-end, 
        I embrace the full stack with open arms.
      </p>
      <p className="mb-8">
        Join me on this exciting journey as we turn innovative ideas into digital realities. Let's create, innovate, and leave our mark 
        in the vast universe of technology!
      </p>
      <Button 
        variant="outline" 
        className="border-border text-foreground button-hover transition-colors duration-300"
      >
        Explore My Work
      </Button>
    </div>
  )
}

