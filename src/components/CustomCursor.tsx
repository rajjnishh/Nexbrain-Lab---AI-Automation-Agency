import React, { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Mouse position
  const mouseX = useRef(0);
  const mouseY = useRef(0);

  // Ring position (with lag)
  const ringX = useRef(0);
  const ringY = useRef(0);

  useEffect(() => {
    // Detect touch device
    const touchCheck = () => {
      setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };
    touchCheck();

    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      mouseX.current = e.clientX;
      mouseY.current = e.clientY;

      // Check if hovering over interactive elements
      const target = e.target as HTMLElement;
      if (!target) return;
      
      const isInteractive = 
        target.closest('a') || 
        target.closest('button') || 
        target.closest('[role="button"]') ||
        target.closest('.interactive') ||
        window.getComputedStyle(target).cursor === 'pointer';
      
      setIsHovering(!!isInteractive);
    };

    const handleMouseDown = () => {
      if (ringRef.current) ringRef.current.classList.add('clicking');
      if (dotRef.current) dotRef.current.classList.add('clicking');
    };

    const handleMouseUp = () => {
      if (ringRef.current) ringRef.current.classList.remove('clicking');
      if (dotRef.current) dotRef.current.classList.remove('clicking');
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    const animate = () => {
      // Lerp for ring - increased for more responsiveness
      const lerp = 0.2;
      ringX.current += (mouseX.current - ringX.current) * lerp;
      ringY.current += (mouseY.current - ringY.current) * lerp;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX.current}px, ${mouseY.current}px, 0) translate(-50%, -50%)`;
      }

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX.current}px, ${ringY.current}px, 0) translate(-50%, -50%)`;
      }

      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationId);
    };
  }, [isVisible]);

  if (isTouchDevice) return null;

  return (
    <>
      <div 
        ref={dotRef} 
        className={`custom-cursor-dot ${isVisible ? 'opacity-100' : 'opacity-0'}`} 
      />
      <div 
        ref={ringRef} 
        className={`custom-cursor-ring ${isHovering ? 'hovering' : ''} ${isVisible ? 'opacity-100' : 'opacity-0'}`} 
      />
    </>
  );
}
