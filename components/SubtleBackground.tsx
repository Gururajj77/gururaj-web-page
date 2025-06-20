"use client";

import { useRef, useEffect } from 'react';
import gsap from 'gsap';

// Using smaller, simpler shapes for the background.
const SHARD_PATHS: string[] = [
  "M 0 -6 L 6 0 L 0 6 L -6 0 Z",
  "M 0 -5 L 5 2 L -5 2 Z",
];

// Increased count to fill the screen, but they will be subtle.
const SHARD_COUNT: number = 40;

/**
 * SubtleBackground Component
 *
 * Renders a full-screen, fixed background of gently drifting geometric shapes.
 * It's designed to be low-contrast and slow-moving to avoid distracting users.
 * The animation is responsive and adapts to window resizing.
 */
const SubtleBackground: React.FC = () => {
  const containerRef = useRef<SVGSVGElement>(null);
  // A ref to store the animation context for proper cleanup.
  const gsapContext = useRef<gsap.Context | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // This function sets up and runs the animation.
    const setupAnimation = () => {
      // Clean up any previous animations before re-initializing
      if (gsapContext.current) {
        gsapContext.current.revert();
      }

      const bounds = {
        width: window.innerWidth,
        height: window.innerHeight,
      };

      container.setAttribute('viewBox', `0 0 ${bounds.width} ${bounds.height}`);

      gsapContext.current = gsap.context(() => {
        const shards = gsap.utils.toArray<SVGPathElement>(".bg-shard");

        // Set initial positions randomly across the screen.
        shards.forEach(shard => {
            gsap.set(shard, {
                x: gsap.utils.random(0, bounds.width),
                y: gsap.utils.random(0, bounds.height),
                scale: gsap.utils.random(0.5, 1.2),
            });
        });

        // The continuous drifting animation for each shard.
        shards.forEach((shard: SVGPathElement) => {
          const drift = () => {
            gsap.to(shard, {
              x: gsap.utils.random(0, bounds.width),
              y: gsap.utils.random(0, bounds.height),
              // Make the rotation much slower.
              rotation: `+=${gsap.utils.random(-20, 20)}`,
              // Significantly increase duration for a much slower, subtle effect.
              duration: gsap.utils.random(30, 50),
              ease: "sine.inOut",
              onComplete: drift,
              onInterrupt: drift,
            });
          };
          drift();
        });
      }, container);
    };

    // Set up the animation initially.
    setupAnimation();

    // Add a resize event listener to re-calculate bounds and restart the animation.
    window.addEventListener('resize', setupAnimation);

    // Cleanup function: remove the event listener and revert GSAP animations.
    return () => {
      window.removeEventListener('resize', setupAnimation);
      if (gsapContext.current) {
        gsapContext.current.revert();
      }
    };
  }, []); // Empty dependency array ensures this runs only once on mount.

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10">
      <svg ref={containerRef} className="w-full h-full">
        <defs>
          {/* A much more transparent gradient for the background effect */}
          <radialGradient id="bgShardGradient" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%" stopColor="hsl(var(--foreground) / 0.1)" />
            <stop offset="100%" stopColor="hsl(var(--foreground) / 0.03)" />
          </radialGradient>
        </defs>

        {[...Array(SHARD_COUNT)].map((_, i) => (
          <path
            key={i}
            className="bg-shard" // Use a different class name to avoid conflicts
            d={SHARD_PATHS[i % SHARD_PATHS.length]}
            fill="url(#bgShardGradient)"
          />
        ))}
      </svg>
    </div>
  );
};

export default SubtleBackground;