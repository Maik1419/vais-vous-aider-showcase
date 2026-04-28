import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function Preloader() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const remaining = 100 - prev;
        const step = remaining > 20 ? (Math.random() * 2 + 0.5) : (Math.random() * 0.5 + 0.1);
        return Math.min(100, prev + step);
      });
    }, 25);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      exit={{ 
        y: '-100%',
        transition: { duration: 1.4, ease: [0.85, 0, 0.15, 1] }
      }}
      className="fixed inset-0 z-[10000] bg-[#0A0A0A] flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Dynamic Architectural Grid Background */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div className="w-full h-full architectural-grid" />
        </div>

        {/* Cinematic System Metadata Overlay */}
        <div className="absolute top-12 left-12 flex flex-col gap-2 font-mono text-[8px] text-[#C9A227]/40 uppercase tracking-[0.4em] leading-relaxed">
          <motion.div 
            animate={{ opacity: [0.3, 1, 0.3] }} 
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="flex items-center gap-3"
          >
            <div className="w-1 h-1 bg-[#C9A227] rounded-full" />
            <span>SYSTEM_INITIALIZATION: ACTIVE</span>
          </motion.div>
          <div className="flex flex-col">
            <span>LAT: 4.0511\u00b0 N</span>
            <span>LONG: 9.7679\u00b0 E</span>
            <span>CORE_SYNC: SYNCHRONIZED</span>
          </div>
        </div>

        <div className="absolute bottom-12 right-12 flex flex-col items-end gap-1 font-mono text-[8px] text-[#C9A227]/40 uppercase tracking-[0.4em]">
          <span>\u00a9 DAVID MAIKANDI</span>
          <span>EST. MMXXIV</span>
        </div>

        {/* Central Counter Reveal */}
        <div className="relative z-10 flex flex-col items-center">
          <div className="overflow-hidden mb-8">
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="flex items-center gap-4"
            >
              <div className="w-8 h-[1px] bg-[#C9A227]/30" />
              <span className="text-[#C9A227] text-[10px] font-black uppercase tracking-[0.8em] translate-x-[0.4em]">
                Crafting Infrastructure
              </span>
              <div className="w-8 h-[1px] bg-[#C9A227]/30" />
            </motion.div>
          </div>

          <div className="relative flex items-center justify-center">
            <motion.h1 
              className="text-[30vw] md:text-[22vw] font-serif font-black text-white leading-none opacity-5 select-none tracking-tighter"
            >
              {Math.floor(count).toString().padStart(3, '0')}
            </motion.h1>
            
            <div className="absolute inset-0 flex items-center justify-center">
               <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${count}%` }}
                className="h-[1px] bg-[#C9A227] relative max-w-[40vw]"
               >
                 <div className="absolute -right-1 -top-1 w-2 h-2 bg-[#C9A227] shadow-[0_0_10px_#C9A227]" />
                 <div className="absolute -right-4 top-2 text-[8px] font-mono text-[#C9A227]">{Math.floor(count)}%</div>
               </motion.div>
            </div>
          </div>
        </div>

        {/* Shutter Effect Layers for Transition */}
        <motion.div
          initial={{ y: '100%' }}
          exit={{ y: '0%' }}
          transition={{ duration: 1, ease: [0.85, 0, 0.15, 1], delay: 0.2 }}
          className="absolute inset-0 bg-[#0D1B2A] z-20"
        />
        <motion.div
          initial={{ y: '100%' }}
          exit={{ y: '0%' }}
          transition={{ duration: 1, ease: [0.85, 0, 0.15, 1], delay: 0.1 }}
          className="absolute inset-0 bg-[#C9A227] z-21"
        />
      </div>
    </motion.div>
  );
}