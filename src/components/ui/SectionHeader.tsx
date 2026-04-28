import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
  chapter: string;
  title: string;
  subtitle?: string;
  light?: boolean;
  centered?: boolean;
}

export function SectionHeader({ chapter, title, subtitle, light = false, centered = false }: SectionHeaderProps) {
  return (
    <div className={`mb-32 ${centered ? 'text-center flex flex-col items-center' : ''}`}>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className={`flex items-center gap-6 mb-8 ${centered ? 'justify-center' : ''}`}
      >
        <div className={`w-12 h-[1px] ${light ? 'bg-[#D4AF37]/40' : 'bg-black/20'}`} />
        <span className="text-[11px] font-black uppercase tracking-[1em] text-[#D4AF37]">
          {chapter}
        </span>
      </motion.div>
      
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className={`text-6xl md:text-8xl lg:text-9xl font-black mb-12 leading-[0.8] tracking-tighter uppercase font-serif ${light ? 'text-white' : 'text-slate-950'}`}
      >
        {title.split(' ').map((word, i) => {
          const isAccent = word === 'Maikandi' || word === "D'Autorité." || word === 'Expertise.' || word === 'Vision' || word === 'Impact.' || word === "l'action.";
          return (
            <React.Fragment key={i}>
              {isAccent ? (
                <span className="text-[#D4AF37] italic font-light">{word} </span>
              ) : (
                <span className="inline-block">{word} </span>
              )}
            </React.Fragment>
          );
        })}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 1 }}
          className={`text-xl md:text-3xl font-light max-w-3xl leading-snug ${light ? 'text-slate-400' : 'text-slate-600'} ${centered ? 'mx-auto' : ''}`}
        >
          {subtitle}
        </motion.p>
      )}
      
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 1.5, ease: "circOut" }}
        className={`h-[1px] bg-[#D4AF37]/50 mt-16 origin-left w-40 ${centered ? 'mx-auto' : ''}`}
      />
    </div>
  );
}