import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const steps = [
  {
    number: "01",
    title: "Strategic Analysis",
    description: "Deep-dive into geological data, urban constraints, and economic viability to define the project foundation.",
    meta: "DATA_DRIVEN_LOGIC"
  },
  {
    number: "02",
    title: "Architectural Engineering",
    description: "Transforming vision into blueprints that balance aesthetic grandeur with structural absolute safety.",
    meta: "STRUCTURAL_VISION"
  },
  {
    number: "03",
    title: "Precision Execution",
    description: "Overseeing the deployment of advanced materials and high-performance teams on site.",
    meta: "SITE_MASTERY"
  },
  {
    number: "04",
    title: "Quality Integrity",
    description: "Multi-layer verification and long-term performance testing to ensure generational durability.",
    meta: "FINAL_ASSURANCE"
  }
];

export function Process() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const lineHeight = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="relative py-40 bg-[#0A0A0A]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-40">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[11px] font-black text-[#C9A227] uppercase tracking-[1em] mb-12 block"
          >
            Methodology
          </motion.span>
          <h2 className="text-6xl md:text-8xl font-serif font-black text-white leading-none uppercase tracking-tighter mb-12">
            The <span className="italic">Process.</span>
          </h2>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Vertical Progress Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/5 -translate-x-1/2 hidden md:block" />
          <motion.div 
            style={{ height: lineHeight }}
            className="absolute left-1/2 top-0 w-[1px] bg-[#C9A227] -translate-x-1/2 hidden md:block origin-top"
          />

          <div className="space-y-40">
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className={`relative flex flex-col md:flex-row items-center gap-12 md:gap-24 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Step Number Sphere */}
                <div className="absolute left-1/2 -translate-x-1/2 w-16 h-16 bg-[#0A0A0A] border border-[#C9A227] rounded-full flex items-center justify-center z-10 hidden md:flex">
                  <span className="text-xs font-black text-white">{step.number}</span>
                </div>

                <div className={`w-full md:w-1/2 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <span className="text-[10px] font-mono text-[#C9A227] block mb-4 tracking-widest">{step.meta}</span>
                  <h3 className="text-4xl font-black text-white mb-6 uppercase tracking-tight">{step.title}</h3>
                  <p className="text-slate-400 text-lg font-light leading-relaxed max-w-lg inline-block">
                    {step.description}
                  </p>
                </div>

                <div className="w-full md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}