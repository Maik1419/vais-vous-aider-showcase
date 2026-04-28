import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

export function Signature() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0.2, 0.4, 0.6, 0.8], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0.9, 1, 0.95]);
  const y = useTransform(scrollYProgress, [0, 1], [150, -150]);

  const springScale = useSpring(scale, { damping: 30, stiffness: 150 });

  return (
    <section ref={containerRef} className="relative h-[180vh] bg-[#0A0A0A] flex items-center justify-center py-40">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Subtle Architectural Texture Background */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div className="w-full h-full architectural-grid" />
        </div>

        <motion.div 
          style={{ opacity, scale: springScale, y }}
          className="container mx-auto px-6 text-center max-w-7xl relative z-10"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="mb-20 inline-flex items-center gap-6"
          >
            <div className="w-12 h-[1px] bg-[#C9A227]/40" />
            <span className="text-[10px] font-black text-[#C9A227] uppercase tracking-[1em] translate-x-[0.5em]">
              CORE_PHILOSOPHY
            </span>
            <div className="w-12 h-[1px] bg-[#C9A227]/40" />
          </motion.div>

          <h2 className="text-[5.5vw] md:text-[4.5vw] font-serif italic text-white leading-[1.05] tracking-tight mb-24">
            \u201cConstruire plus qu\u2019un b\u00e2timent. <br />
            <span className="text-[#C9A227] not-italic font-black uppercase tracking-tighter text-[8vw] md:text-[7vw] leading-[0.9]">
              Concevoir des fondations pour l\u2019avenir.
            </span>\u201d
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-left mt-32">
            {[
              { label: 'VISION', text: 'Integrating continental African identity into global modern infrastructure standards.' },
              { label: 'PRECISION', text: 'Every millimeter is mathematically optimized for multi-generational durability and safety.' },
              { label: 'IMPACT', text: 'Engineering that acts as a catalyst for economic growth and community cohesion.' }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="group p-10 bg-[#0D1B2A]/20 backdrop-blur-sm border-l border-white/5 hover:border-[#C9A227]/60 transition-all duration-700"
              >
                <span className="text-[10px] font-black text-[#C9A227] block mb-6 tracking-[0.4em]">PROTOCOL_{item.label}</span>
                <p className="text-slate-400 text-lg font-light leading-relaxed group-hover:text-white transition-colors">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Floating Decorative Elements */}
        <motion.div 
          style={{ rotate: 45, y: -100 }}
          animate={{ y: [0, 30, 0] }}
          transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}
          className="absolute top-1/4 -left-20 w-80 h-80 border border-white/[0.02] pointer-events-none"
        />
        <motion.div 
          style={{ rotate: -15, y: 100 }}
          animate={{ y: [0, -40, 0] }}
          transition={{ repeat: Infinity, duration: 12, ease: 'linear' }}
          className="absolute bottom-1/4 -right-20 w-96 h-96 border border-[#C9A227]/[0.02] pointer-events-none"
        />
      </div>
    </section>
  );
}