import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: "04", label: "Années d'Expérience", suffix: "Expertise Terrain" },
  { value: "25", label: "Projets d'Élite", suffix: "Réalisations Clés" },
  { value: "50", label: "m² Construits (k)", suffix: "Volume d'Exécution" },
  { value: "100", label: "Satisfaction", suffix: "Standards Premium %" },
];

export function Authority() {
  return (
    <section id="authority" className="py-40 bg-[#050505] relative overflow-hidden">
      {/* Texture background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#D4AF3705_0%,_transparent_70%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-y border-white/5">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="flex flex-col items-center text-center p-20 lg:p-24 group relative border-white/5 lg:border-r last:border-r-0"
            >
              <div className="relative mb-10 overflow-hidden">
                <motion.span 
                  initial={{ y: '100%' }}
                  whileInView={{ y: 0 }}
                  transition={{ duration: 1, ease: [0.85, 0, 0.15, 1], delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="text-8xl md:text-9xl font-black text-white tracking-tighter block font-serif group-hover:text-[#D4AF37] transition-colors duration-700"
                >
                  {stat.value}
                </motion.span>
              </div>
              <span className="text-[11px] font-black uppercase tracking-[0.6em] text-[#D4AF37] mb-4">
                {stat.label}
              </span>
              <span className="text-[9px] font-black uppercase tracking-[0.3em] text-white/20 italic">
                {stat.suffix}
              </span>
              
              {/* Animated corner accents */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[#D4AF37]/0 group-hover:border-[#D4AF37]/40 transition-all duration-700" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[#D4AF37]/0 group-hover:border-[#D4AF37]/40 transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}