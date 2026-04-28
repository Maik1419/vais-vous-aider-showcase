import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export function Vision() {
  const containerRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0.3, 0.5, 0.7], [0, 1, 0]);
  const scale = useTransform(scrollYProgress, [0.3, 0.5, 0.7], [0.8, 1, 0.8]);

  return (
    <section ref={containerRef} id="vision" className="h-[200vh] bg-[#0A0A0A] relative flex items-center justify-center">
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center px-6">
        <motion.div
          style={{ opacity, scale }}
          className="max-w-6xl text-center"
        >
          <span className="text-[11px] font-black text-[#C9A227] uppercase tracking-[1em] mb-12 block">
            SIGNATURE PHILOSOPHY
          </span>
          
          <h2 className="text-4xl md:text-7xl font-serif italic text-white leading-tight tracking-tight mb-20">
            \u201cConstruire plus qu\u2019un b\u00e2timent. <br />
            <span className="text-[#C9A227] font-black not-italic uppercase tracking-tighter">
              Concevoir des fondations pour l\u2019avenir.
            </span>\u201d
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left border-t border-white/10 pt-20">
            <div className="space-y-4">
              <span className="text-white font-black font-mono text-xl">01. MODERNITY</span>
              <p className="text-slate-500 text-sm leading-relaxed uppercase tracking-widest font-bold">Integrating global technological standards in local projects.</p>
            </div>
            <div className="space-y-4">
              <span className="text-white font-black font-mono text-xl">02. DURABILITY</span>
              <p className="text-slate-500 text-sm leading-relaxed uppercase tracking-widest font-bold">Creating structures that defy time and environmental challenges.</p>
            </div>
            <div className="space-y-4">
              <span className="text-white font-black font-mono text-xl">03. IMPACT</span>
              <p className="text-slate-500 text-sm leading-relaxed uppercase tracking-widest font-bold">Engineering the skeleton of a thriving African continent.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}