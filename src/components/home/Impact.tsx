import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const stats = [
  { label: 'Projets Livrés', value: '150+', desc: 'Infrastructures critiques traversant le continent.' },
  { label: 'Budget Géré', value: '450M$', desc: 'Optimisation financière et rigueur budgétaire.' },
  { label: 'Innovation', value: '25+', desc: 'Brevets et méthodes techniques propriétaires.' },
];

export function Impact() {
  const containerRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section ref={containerRef} className="py-60 bg-[#0A0A0A] relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div 
          style={{ scale, opacity }}
          className="glass p-20 md:p-40 relative z-10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
            <div>
              <span className="text-[11px] font-black text-[#C9A227] uppercase tracking-[1em] mb-12 block">
                CONTINENTAL IMPACT
              </span>
              <h2 className="text-6xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter uppercase font-serif mb-12">
                Bâtir <br /> <span className="text-stroke italic">L'Afrique.</span>
              </h2>
              <p className="text-2xl text-slate-400 font-light leading-relaxed">
                Au-delà des structures, nous concevons le squelette d'une nation en pleine expansion. Chaque kilomètre de béton est un pas vers l'émergence.
              </p>
            </div>

            <div className="space-y-20">
              {stats.map((stat, i) => (
                <div key={i} className="group">
                  <div className="flex items-baseline gap-6 mb-4">
                    <span className="text-7xl md:text-9xl font-black text-white group-hover:text-[#C9A227] transition-colors duration-500 font-serif">
                      {stat.value}
                    </span>
                    <span className="text-[10px] font-black text-[#C9A227] uppercase tracking-[0.5em]">
                      {stat.label}
                    </span>
                  </div>
                  <p className="text-slate-500 uppercase tracking-widest text-[10px] font-bold">
                    {stat.desc}
                  </p>
                  <div className="w-full h-[1px] bg-white/5 mt-8 group-hover:bg-[#C9A227]/30 transition-colors" />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background large text */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none opacity-[0.02]">
        <h2 className="text-[30vw] font-black uppercase leading-none whitespace-nowrap translate-y-1/2">
          Infrastructures
        </h2>
      </div>
    </section>
  );
}