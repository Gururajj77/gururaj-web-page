"use client";

import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';

const SCHEMATIC_DESIGNS = [
  // Design 1: Original Cross Grid
  [
    "M 20 20 L 180 20 L 180 180 L 20 180 Z",
    "M 20 100 L 180 100",
    "M 100 20 L 100 180",
    "M 100 100 m -60 0 a 60 60 0 1 1 120 0 a 60 60 0 1 1 -120 0",
    "M 100 20 L 180 100 L 100 180 L 20 100 Z",
  ],
  // Design 2: Original X-Pattern
  [
    "M 50 50 L 150 50 L 150 150 L 50 150 Z",
    "M 60 60 L 140 140",
    "M 140 60 L 60 140",
    "M 100 50 L 100 30",
    "M 100 150 L 100 170",
    "M 50 100 L 30 100",
    "M 150 100 L 170 100",
  ],
  // Design 3: Original Concentric Circles
  [
    "M 20 80 L 180 80",
    "M 20 120 L 180 120",
    "M 100 100 m -80 0 a 80 80 0 1 1 160 0 a 80 80 0 1 1 -160 0",
    "M 100 100 m -40 0 a 40 40 0 1 1 80 0 a 40 40 0 1 1 -80 0",
  ],
  // Design 4: Isometric Cube
  [
    "M 100 40 L 160 70 L 160 130 L 100 160 L 40 130 L 40 70 Z",
    "M 100 40 L 100 100",
    "M 100 100 L 40 70",
    "M 100 100 L 160 130",
  ],
  // Design 5: Hexagonal Core
  [
    "M 100 50 L 152 80 L 152 140 L 100 170 L 48 140 L 48 80 Z",
    "M 100 50 L 100 20",
    "M 152 80 L 180 80",
    "M 152 140 L 180 140",
    "M 100 170 L 100 200",
    "M 48 140 L 20 140",
    "M 48 80 L 20 80",
  ],
  // Design 6: Circuit Traces
  [
    "M 20 60 H 80 V 40 H 100 V 80 H 140 V 60",
    "M 20 140 H 60 V 160",
    "M 180 120 H 120 V 100 H 160 V 140 H 100 V 120",
    "M 100 180 V 160 H 40",
  ],
  // Design 7: Corner Arcs
  [
    "M 20 60 A 40 40 0 0 1 60 20",
    "M 20 140 A 40 40 0 0 0 60 180",
    "M 180 60 A 40 40 0 0 0 140 20",
    "M 180 140 A 40 40 0 0 1 140 180",
    "M 100 100 L 20 20",
    "M 100 100 L 180 180",
    "M 100 100 L 20 180",
    "M 100 100 L 180 20",
  ],
  // Design 8: Fragmented Circle
  [
    "M 180 100 A 80 80 0 0 1 124.72 170.71",
    "M 100 20 A 80 80 0 0 1 35.28 49.29",
    "M 20 100 A 80 80 0 0 1 75.28 29.29",
    "M 100 180 A 80 80 0 0 1 164.72 150.71",
    "M 100 100 m -20 0 a 20 20 0 1 1 40 0 a 20 20 0 1 1 -40 0",
  ],
  // Design 9: Recursive Triangles
  [
    "M 100 20 L 190 180 L 10 180 Z",
    "M 100 20 L 145 100 L 55 100 Z",
    "M 55 100 L 100 180 L 10 180 Z",
    "M 145 100 L 190 180 L 100 180 Z",
  ],
  // Design 10: Shifting Rectangles
  [
    "M 30 30 L 130 30 L 130 100 L 30 100 Z",
    "M 70 70 L 170 70 L 170 140 L 70 140 Z",
    "M 70 30 L 130 70",
    "M 70 100 L 170 140",
  ]
];

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
      
      gsap.to(paths, {
        strokeDashoffset: 0,
        duration: 1.5,
        ease: 'power2.inOut',
        stagger: 0.2,
      });
    }, containerRef);
    
    return () => ctx.revert();
  }, [designIndex]);

  const handleRegenerate = () => {
    gsap.context(() => {
      const paths = gsap.utils.toArray<SVGPathElement>('.schematic-path');
      
      gsap.to(paths, {
        strokeDashoffset: (i, target) => -target.getTotalLength(),
        duration: 1,
        ease: 'power2.in',
        stagger: 0.1,
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
    }, containerRef);
  };

  return (
    <div 
      ref={containerRef} 
      className="w-full h-full cursor-pointer" 
      onClick={handleRegenerate}
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