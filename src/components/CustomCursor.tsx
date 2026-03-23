import React, { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  // Mouse position
  const mouseX = useRef(0);
  const mouseY = useRef(0);

  // Dot position (no lag)
  const dotX = useRef(0);
  const dotY = useRef(0);

  // Ring position (with lag)
  const ringX = useRef(0);
  const ringY = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.current = e.clientX;
      mouseY.current = e.clientY;

      // Check if hovering over interactive elements
      const target = e.target as HTMLElement;
      const isInteractive = 
        target.closest('a') || 
        target.closest('button') || 
        target.closest('[role="button"]') ||
        window.getComputedStyle(target).cursor === 'pointer';
      
      setIsHovering(!!isInteractive);
    };

    const handleMouseDown = () => {
      if (ringRef.current) {
        ringRef.current.style.transform = 'translate(-50%, -50%) scale(0.8)';
      }
      if (dotRef.current) {
        dotRef.current.style.transform = 'translate(-50%, -50%) scale(0.5)';
      }
    };

    const handleMouseUp = () => {
      if (ringRef.current) {
        ringRef.current.style.transform = 'translate(-50%, -50%) scale(1)';
      }
      if (dotRef.current) {
        dotRef.current.style.transform = 'translate(-50%, -50%) scale(1)';
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    const animate = () => {
      // Lerp for ring - increased for more responsiveness
      const lerp = 0.35;
      ringX.current += (mouseX.current - ringX.current) * lerp;
      ringY.current += (mouseY.current - ringY.current) * lerp;

      // Dot follows immediately
      dotX.current = mouseX.current;
      dotY.current = mouseY.current;

      if (dotRef.current) {
        dotRef.current.style.left = `${dotX.current}px`;
        dotRef.current.style.top = `${dotY.current}px`;
      }

      if (ringRef.current) {
        ringRef.current.style.left = `${ringX.current}px`;
        ringRef.current.style.top = `${ringY.current}px`;
      }

      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="custom-cursor-dot" />
      <div 
        ref={ringRef} 
        className={`custom-cursor-ring ${isHovering ? 'hovering' : ''}`} 
      />
    </>
  );
}
