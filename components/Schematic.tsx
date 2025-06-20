"use client";

import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { SCHEMATIC_DESIGNS } from '@/lib/schematic-designs';

const Schematic: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [designIndex, setDesignIndex] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const paths = gsap.utils.toArray<SVGPathElement>('.schematic-path');
      
      paths.forEach(path => {
        gsap.set(path, {
          strokeDasharray: path.getTotalLength(),
          strokeDashoffset: path.getTotalLength(),
          opacity: 1,
        });
      });
      
      const masterTimeline = gsap.timeline({
        onComplete: () => {
          setDesignIndex(prevIndex => {
            let newIndex;
            do {
              newIndex = Math.floor(Math.random() * SCHEMATIC_DESIGNS.length);
            } while (newIndex === prevIndex);
            return newIndex;
          });
        }
      });

      masterTimeline
        .to(paths, {
          strokeDashoffset: 0,
          duration: 1.5,
          ease: 'power2.inOut',
          stagger: 0.2,
        })
        .to(paths, {
          strokeDashoffset: (i, target) => -target.getTotalLength(),
          duration: 1,
          ease: 'power2.in',
          stagger: 0.1,
        }, '+=3');

    }, containerRef);
    
    return () => ctx.revert();
  }, [designIndex]);

  return (
    <div 
      ref={containerRef} 
      className="w-full h-full"
    >
      <svg
        viewBox="0 0 200 200"
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-full"
        fill="none"
      >
        {SCHEMATIC_DESIGNS[designIndex].map((pathData, i) => (
          <path
            key={`${designIndex}-${i}`}
            className="schematic-path stroke-current text-foreground/50"
            strokeWidth={i === 0 ? "2" : "1"}
            d={pathData}
          />
        ))}
      </svg>
    </div>
  );
};

export default Schematic;