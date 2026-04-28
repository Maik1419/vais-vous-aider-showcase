import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Magnetic } from '../ui/Magnetic';
import { SplitText } from '../ui/SplitText';

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  const y = useTransform(scrollY, [0, 800], [0, 400]);
  const opacity = useTransform(scrollY, [0, 600], [1, 0]);
  const scale = useTransform(scrollY, [0, 800], [1, 1.2]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const gridX = useSpring(useTransform(mouseX, [0, 1920], [-40, 40]), { damping: 50, stiffness: 150 });
  const gridY = useSpring(useTransform(mouseY, [0, 1080], [-40, 40]), { damping: 50, stiffness: 150 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    }
  };

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative h-screen flex items-center justify-center overflow-hidden bg-[#0A0A0A]"
    >
      {/* Background Cinematics */}
      <div className="absolute inset-0 z-0">
        <motion.div
          style={{ y, scale }}
          className="w-full h-full relative"
        >
          <img
            src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/763623c0-1f3d-46e9-8a05-4d055f45ff61/hero-bg-61026e44-1777370068424.webp"
            alt="Futuristic Architecture"
            className="w-full h-full object-cover grayscale brightness-50 opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/80 via-transparent to-[#0A0A0A]" />
        </motion.div>

        {/* Interactive Architectural Grid */}
        <motion.div 
          style={{ x: gridX, y: gridY }}
          className="absolute inset-0 opacity-[0.1] pointer-events-none"
        >
          <div className="w-[120%] h-[120%] -translate-x-[10%] -translate-y-[10%] architectural-grid" />
        </motion.div>

        {/* Dynamic Light Overlay */}
        <motion.div
          className="absolute inset-0 z-1 pointer-events-none opacity-40"
          style={{
            background: `radial-gradient(1400px circle at ${mouseX}px ${mouseY}px, rgba(201, 162, 39, 0.08), transparent 70%)`
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div style={{ opacity }} className="flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="mb-16 flex items-center gap-8"
          >
            <div className="w-12 h-[1px] bg-[#C9A227]/40" />
            <span className="text-[10px] font-black uppercase tracking-[1em] text-[#C9A227] translate-x-[0.5em] px-4">World-Class Engineering</span>
            <div className="w-12 h-[1px] bg-[#C9A227]/40" />
          </motion.div>
          
          <h1 className="text-[13vw] md:text-[10vw] font-black text-white leading-[0.8] mb-12 tracking-tighter font-serif uppercase relative">
            <div className="overflow-hidden">
              <SplitText text="DAVID" className="block" delay={1} />
            </div>
            <div className="overflow-hidden mt-2">
              <SplitText text="MAIKANDI" className="block text-[#C9A227] italic" delay={1.2} />
            </div>
            
            {/* Vertical Accent Line */}
            <motion.div 
              initial={{ height: 0 }}
              animate={{ height: '100%' }}
              transition={{ delay: 1.5, duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -right-8 top-0 w-[2px] bg-[#C9A227]/40 hidden 2xl:block"
            />
          </h1>
          
          <div className="max-w-3xl mx-auto mb-20">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              className="text-lg md:text-xl text-slate-400 font-light leading-relaxed"
            >
              Pioneering the next era of <span className="text-white font-medium italic">African Infrastructure</span>. <br className="hidden md:block" /> 
              Where structural integrity meets visionary design at a global scale.
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2, duration: 1.2 }}
            className="flex flex-col sm:flex-row gap-8 items-center justify-center"
          >
            <Magnetic strength={0.2}>
              <a
                href="#portfolio"
                className="group relative px-12 py-7 bg-[#C9A227] text-black font-black uppercase tracking-[0.4em] text-[10px] overflow-hidden flex items-center gap-6"
              >
                <span className="relative z-10">EXPLORE WORKS</span>
                <ArrowRight size={16} className="relative z-10 group-hover:translate-x-3 transition-transform duration-500" />
                <motion.div 
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '0%' }}
                  transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
                  className="absolute inset-0 bg-white"
                />
              </a>
            </Magnetic>
            <Magnetic strength={0.2}>
              <a
                href="#contact"
                className="group relative px-12 py-7 border border-white/20 text-white font-black uppercase tracking-[0.4em] text-[10px] overflow-hidden"
              >
                <span className="relative z-10">INITIATE PROJECT</span>
                <motion.div 
                  initial={{ y: '100%' }}
                  whileHover={{ y: '0%' }}
                  transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
                  className="absolute inset-0 bg-white/5"
                />
              </a>
            </Magnetic>
          </motion.div>
        </motion.div>
      </div>

      {/* Modern Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1.5 }}
        className="absolute bottom-12 flex flex-col items-center gap-6 text-white/20"
      >
        <span className="text-[8px] uppercase tracking-[0.8em] font-black vertical-text">Scroll To Explore</span>
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={18} className="text-[#C9A227]" />
        </motion.div>
      </motion.div>

      {/* Right Coordinate Labels */}
      <div className="absolute right-12 bottom-12 hidden md:flex flex-col items-end gap-1 font-mono text-[8px] text-[#C9A227]/30 tracking-widest">
        <span>SECT: INFRA_04</span>
        <span>REF: DM_ALPHA_01</span>
      </div>
    </section>
  );
}