"use client";

import { useRef, useEffect, useMemo } from 'react';
import gsap from 'gsap';

const GRID_SIZE = 20;
const NODE_SIZE = 4;
const SPACING = 20;
const MAX_INFLUENCE_DESKTOP = 80;

const SynapticGrid: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasSize = GRID_SIZE * SPACING;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      const nodes = gsap.utils.toArray<SVGCircleElement>('.synaptic-node');
      
      gsap.fromTo(nodes, 
        { scale: 0, opacity: 0 },
        { 
          scale: 1, 
          opacity: 0.3, 
          duration: 1.5,
          ease: "power3.out",
          stagger: {
            grid: [GRID_SIZE, GRID_SIZE],
            from: "center",
            amount: 1,
          }
        }
      );

      const isDesktop = window.matchMedia('(pointer: fine)').matches;

      if (isDesktop) {
        const handleMouseMove = (e: MouseEvent) => {
          const rect = container.getBoundingClientRect();
          const mouseX = e.clientX - rect.left;
          const mouseY = e.clientY - rect.top;
          const svgMouseX = (mouseX / rect.width) * canvasSize;
          const svgMouseY = (mouseY / rect.height) * canvasSize;

          nodes.forEach(node => {
            const nodeX = parseFloat(node.getAttribute('cx') || '0');
            const nodeY = parseFloat(node.getAttribute('cy') || '0');
            const distance = Math.sqrt(Math.pow(nodeX - svgMouseX, 2) + Math.pow(nodeY - svgMouseY, 2));

            const scale = gsap.utils.mapRange(0, MAX_INFLUENCE_DESKTOP, 2.5, 1, distance);
            const opacity = gsap.utils.mapRange(0, MAX_INFLUENCE_DESKTOP, 1, 0.3, distance);
            
            gsap.to(node, {
              scale: scale,
              opacity: opacity,
              duration: 0.4,
              ease: "power2.out",
              overwrite: 'auto',
            });
          });
        };

        const handleMouseLeave = () => {
          gsap.to(nodes, {
              scale: 1,
              opacity: 0.3,
              duration: 1,
              ease: "power3.out",
          });
        };

        container.addEventListener('mousemove', handleMouseMove);
        container.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            container.removeEventListener('mousemove', handleMouseMove);
            container.removeEventListener('mouseleave', handleMouseLeave);
        };

      } else {
        const fireRandomNode = () => {
          const randomNode = gsap.utils.random(nodes);
          
          gsap.to(randomNode, {
            scale: 3,
            opacity: 1,
            duration: 0.3,
            ease: "power2.out",
            yoyo: true,
            repeat: 1,
          });

          gsap.delayedCall(gsap.utils.random(0.1, 1.5), fireRandomNode);
        };
        
        gsap.delayedCall(2, fireRandomNode);
      }
    }, containerRef);

    return () => ctx.revert();
  }, [canvasSize]);

  const nodeElements = useMemo(() => {
    const elements = [];
    for (let i = 0; i < GRID_SIZE; i++) {
      for (let j = 0; j < GRID_SIZE; j++) {
        elements.push(
          <circle
            key={`${i}-${j}`}
            className="synaptic-node fill-current text-foreground"
            cx={SPACING / 2 + i * SPACING}
            cy={SPACING / 2 + j * SPACING}
            r={NODE_SIZE / 2}
          />
        );
      }
    }
    return elements;
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full">
      <svg
        viewBox={`0 0 ${canvasSize} ${canvasSize}`}
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-full"
      >
        {nodeElements}
      </svg>
    </div>
  );
};

export default SynapticGrid;