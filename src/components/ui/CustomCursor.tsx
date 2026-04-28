import React, { useEffect, useState, useCallback } from 'react';
import { motion, useSpring, useMotionValue, AnimatePresence } from 'framer-motion';

export function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [cursorType, setCursorType] = useState<'default' | 'link' | 'drag' | 'view' | 'close'>('default');
  
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  
  const springConfig = { damping: 40, stiffness: 400, mass: 0.4 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  const lightX = useSpring(mouseX, { damping: 50, stiffness: 200 });
  const lightY = useSpring(mouseY, { damping: 50, stiffness: 200 });

  const handleMouseMove = useCallback((e: MouseEvent) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  }, [mouseX, mouseY]);

  useEffect(() => {
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      const projectCard = target.closest('[data-project]');
      const dragArea = target.closest('[data-cursor="drag"]');
      const interactive = target.tagName === 'BUTTON' || 
                         target.tagName === 'A' || 
                         target.closest('button') || 
                         target.closest('a') || 
                         target.classList.contains('cursor-pointer');

      if (projectCard) {
        setCursorType('view');
        setIsHovering(true);
      } else if (dragArea) {
        setCursorType('drag');
        setIsHovering(true);
      } else if (interactive) {
        setCursorType('link');
        setIsHovering(true);
      } else {
        setCursorType('default');
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [handleMouseMove]);

  return (
    <>
      {/* Cinematic Mouse-Follow Lighting Effect */}
      <motion.div
        className="fixed inset-0 pointer-events-none z-[5] hidden md:block"
        style={{
          background: `radial-gradient(600px circle at ${lightX}px ${lightY}px, rgba(201, 162, 39, 0.04), transparent 80%)`,
        }}
      />

      {/* Main Cursor Ring */}
      <motion.div
        className="fixed top-0 left-0 flex items-center justify-center rounded-full pointer-events-none z-[9999] hidden md:flex mix-blend-difference border border-[#C9A227]/60"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
          width: isHovering ? (cursorType === 'view' ? 140 : 100) : 40,
          height: isHovering ? (cursorType === 'view' ? 140 : 100) : 40,
        }}
      >
        <AnimatePresence mode="wait">
          {cursorType === 'view' && (
            <motion.div
              key="view"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="flex flex-col items-center gap-1"
            >
              <span className="text-[9px] font-black text-[#C9A227] uppercase tracking-[0.4em] leading-none">EXPLORE</span>
              <div className="w-4 h-[1px] bg-[#C9A227]/40" />
            </motion.div>
          )}
          {cursorType === 'drag' && (
            <motion.span
              key="drag"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="text-[9px] font-black text-[#C9A227] uppercase tracking-[0.4em]"
            >
              DRAG
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Center Interactive Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-[#C9A227] rounded-full pointer-events-none z-[9999] hidden md:block"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
          scale: isHovering ? 0 : 1,
          opacity: isHovering ? 0 : 1
        }}
      />

      {/* Trailing Lens Flare Elements */}
      <motion.div
        className="fixed top-0 left-0 w-32 h-32 lens-flare pointer-events-none z-[4] hidden md:block opacity-30"
        style={{
          x: lightX,
          y: lightY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
    </>
  );
}