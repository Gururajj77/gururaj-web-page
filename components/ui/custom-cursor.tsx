'use client';

import { useEffect, useRef } from 'react';

// This is a custom cursor component that creates a trailing dot effect.
// It uses GSAP for smooth animations.
const CustomCursor = () => {
  // Refs for the two cursor elements: the main dot and the trailing follower.
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Ensure this code runs only on the client side.
    if (typeof window === 'undefined') {
      return;
    }

    // Dynamically import GSAP to ensure it's only loaded on the client.
    // This helps prevent server-side rendering issues and build errors.
    import('gsap').then((gsapModule) => {
      const gsap = gsapModule.gsap;

      const cursor = cursorRef.current;
      const follower = followerRef.current;

      // If the cursor elements don't exist, we can't proceed.
      if (!cursor || !follower) return;

      // Set the initial position of the cursor elements to be centered on the mouse.
      // This prevents a flicker on page load.
      gsap.set(cursor, { xPercent: -50, yPercent: -50 });
      gsap.set(follower, { xPercent: -50, yPercent: -50 });

      // This function updates the cursor's position on mouse move.
      const onMouseMove = (e: MouseEvent) => {
        // The main dot moves instantly to the mouse position.
        gsap.to(cursor, { duration: 0.1, x: e.clientX, y: e.clientY });
        // The follower has a slight delay, creating the trailing effect.
        gsap.to(follower, { duration: 0.6, x: e.clientX, y: e.clientY, ease: 'power2.out' });
      };

      // This function handles the hover effect when entering an interactive element.
      const onMouseEnterLink = () => {
        gsap.to(follower, {
          duration: 0.3,
          scale: 2.5,
          backgroundColor: 'hsl(var(--foreground), 0.2)',
          ease: 'power2.out',
        });
      };

      // This function reverts the hover effect when leaving an interactive element.
      const onMouseLeaveLink = () => {
        gsap.to(follower, {
          duration: 0.3,
          scale: 1,
          backgroundColor: 'hsl(var(--foreground), 0.1)',
          ease: 'power2.out',
        });
      };

      // Add a global event listener for mouse movement.
      window.addEventListener('mousemove', onMouseMove);

      // Find all interactive elements on the page to apply hover effects.
      const interactiveElements = document.querySelectorAll('a, button, [role="button"]');
      interactiveElements.forEach((el) => {
        el.addEventListener('mouseenter', onMouseEnterLink);
        el.addEventListener('mouseleave', onMouseLeaveLink);
      });

      // The cleanup function is crucial for React components.
      // It removes event listeners when the component unmounts to prevent memory leaks.
      return () => {
        window.removeEventListener('mousemove', onMouseMove);
        interactiveElements.forEach((el) => {
          el.removeEventListener('mouseenter', onMouseEnterLink);
          el.removeEventListener('mouseleave', onMouseLeaveLink);
        });
      };
    });
  }, []); // The empty dependency array means this effect runs only once on mount.

  return (
    <>
      {/* The small, solid dot that follows the cursor precisely. */}
      <div ref={cursorRef} className="custom-cursor__cursor"></div>
      {/* The larger, trailing circle that creates the smooth follow effect. */}
      <div ref={followerRef} className="custom-cursor__follower"></div>
    </>
  );
};

export default CustomCursor;
