"use client";

import { useRef, useEffect } from 'react';
import gsap from 'gsap';

// An array of SVG path data for our geometric "shards."
const SHARD_PATHS: string[] = [
  "M 0 -8 L 8 0 L 0 8 L -8 0 Z",
  "M 0 -12 L 10 0 L 0 12 L -10 0 Z",
  "M 0 -10 L 10 4 L -10 4 Z",
  "M 0 -9 L 9 9 L -9 9 Z",
];

// The total number of shards to render.
const SHARD_COUNT: number = 15;

/**
 * FloatingShards Component
 *
 * This component renders a collection of SVG "shards" that animate in and then
 * drift around the container in a continuous, gentle motion.
 * It's fully typed for use in a TypeScript React project.
 */
const FloatingShards: React.FC = () => {
  // A ref for the SVG container, correctly typed for an SVGSVGElement.
  const containerRef = useRef<SVGSVGElement>(null);
  
  // We use useEffect to run the animation logic after the component has mounted.
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    // Get the dimensions of the container to calculate random positions.
    const bounds = container.getBoundingClientRect();

    // GSAP Context is a best practice for React. It automatically handles cleanup.
    const ctx = gsap.context(() => {
      
      // Select all the shard elements. GSAP's toArray returns an array of elements.
      // We can cast it to the specific element type for type safety.
      const shards = gsap.utils.toArray<SVGPathElement>(".shard");
      
      // 1. Initial "Animate In" Effect
      gsap.fromTo(shards, 
        { 
          scale: 0, 
          opacity: 0,
          rotate: () => gsap.utils.random(-180, 180)
        }, 
        {
          scale: 1,
          opacity: 1,
          duration: 1.5,
          ease: "power3.out",
          stagger: 0.1,
        }
      );
      
      // 2. Continuous "Drifting" Animation for each shard
      shards.forEach((shard: SVGPathElement) => {
        // This function defines the looping animation for a single shard.
        const drift = () => {
          gsap.to(shard, {
            x: gsap.utils.random(0, bounds.width),
            y: gsap.utils.random(0, bounds.height),
            rotation: `+=${gsap.utils.random(-45, 45)}`,
            duration: gsap.utils.random(8, 12),
            ease: "sine.inOut",
            onComplete: drift,
            onInterrupt: drift,
          });
        };
        
        // Kick off the animation for the first time.
        drift();
      });

    }, containerRef); // Scope the context to our container ref
    
    // The cleanup function for our useEffect hook.
    return () => ctx.revert();

  }, []); // Empty dependency array ensures this effect runs only once.

  return (
    <div className="w-64 h-64">
      <svg 
        ref={containerRef} 
        viewBox="0 0 256 256"
        className="w-full h-full overflow-hidden"
      >
        <defs>
          <radialGradient id="shardGradient" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%" stopColor="hsl(var(--foreground) / 0.8)" />
            <stop offset="100%" stopColor="hsl(var(--foreground) / 0.5)" />
          </radialGradient>
        </defs>

        {/* Create the shards programmatically */}
        {[...Array(SHARD_COUNT)].map((_, i) => (
          <path
            key={i}
            className="shard"
            d={SHARD_PATHS[i % SHARD_PATHS.length]}
            fill="url(#shardGradient)"
            transform={`translate(${gsap.utils.random(0, 256)} ${gsap.utils.random(0, 256)})`}
          />
        ))}
      </svg>
    </div>
  );
};

export default FloatingShards;