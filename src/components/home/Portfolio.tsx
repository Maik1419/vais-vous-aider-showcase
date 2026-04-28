import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: "Kinshasa Financial Center",
    type: "STRATEGIC INFRASTRUCTURE",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/763623c0-1f3d-46e9-8a05-4d055f45ff61/portfolio-project-1-7601b63d-1777370068058.webp",
    description: "A multi-billion dollar complex redefining the economic heart of Central Africa with high-precision structural steel.",
    metric: "$420M Est.",
    label: "Capital Value",
    year: "2024"
  },
  {
    title: "The Atlantic Bridge",
    type: "CIVIL ENGINEERING",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/763623c0-1f3d-46e9-8a05-4d055f45ff61/portfolio-project-2-f588e2ec-1777370068149.webp",
    description: "Engineering a long-span suspension bridge designed for 100-year durability in extreme maritime conditions.",
    metric: "2.4KM SPAN",
    label: "Technical Reach",
    year: "2023"
  },
  {
    title: "Zenith Towers",
    type: "LUXURY RESIDENTIAL",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/763623c0-1f3d-46e9-8a05-4d055f45ff61/hero-bg-61026e44-1777370068424.webp",
    description: "Integrating sustainable glass facades with a modular concrete skeleton for ultimate urban efficiency.",
    metric: "62 FLOORS",
    label: "Vertical Limit",
    year: "2025"
  }
];

export function Portfolio() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);
  const springX = useSpring(x, { damping: 40, stiffness: 300, mass: 0.6 });

  return (
    <section ref={targetRef} id="portfolio" className="relative h-[450vh] bg-[#0A0A0A]">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div style={{ x: springX }} className="flex gap-0">
          {/* Introduction Screen */}
          <div className="w-screen h-screen flex-shrink-0 flex flex-col justify-center px-6 md:px-24 bg-[#0A0A0A] relative">
            <div className="absolute inset-0 opacity-[0.02] architectural-grid" />
            <div className="max-w-6xl relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="text-[11px] font-black text-[#C9A227] uppercase tracking-[1em] mb-16 block translate-x-[0.5em]">
                  PORTFOLIO_WORKS
                </span>
                <h2 className="text-[11vw] md:text-[9vw] font-serif font-black text-white leading-[0.75] tracking-tighter mb-20 uppercase">
                  Iconic <br /> <span className="text-stroke italic text-transparent">Structures.</span>
                </h2>
                <div className="flex flex-col md:flex-row gap-16 items-start md:items-center">
                  <p className="text-xl md:text-2xl text-slate-400 font-light max-w-2xl leading-relaxed">
                    A legacy of engineering mastery, from monumental skyscrapers to complex logistical hubs across the African continent.
                  </p>
                  <div className="flex items-center gap-10">
                    <div className="w-32 h-[1px] bg-white/10" />
                    <span className="text-[9px] font-black text-white/30 uppercase tracking-[0.6em] animate-pulse">Swipe to Navigate</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Project Screens */}
          {projects.map((project, i) => (
            <div key={i} className="w-screen h-screen flex-shrink-0 flex items-center justify-center px-6 md:px-16 bg-[#0A0A0A]">
              <ProjectSlide project={project} index={i} />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Cinematic Progress Bar */}
      <div className="absolute bottom-20 left-24 right-24 h-[1px] bg-white/5">
        <motion.div 
          style={{ scaleX: scrollYProgress }} 
          className="absolute inset-0 bg-[#C9A227] origin-left shadow-[0_0_15px_#C9A227]"
        />
      </div>
    </section>
  );
}

function ProjectSlide({ project, index }: { project: any, index: number }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const imgScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.3, 1, 1.1]);
  const imgY = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);

  return (
    <div 
      ref={containerRef}
      data-project 
      className="relative w-full max-w-7xl h-[85vh] group cursor-none overflow-hidden border border-white/5 bg-[#0D1B2A]/20"
    >
      {/* High-Impact Image with Mask Reveal */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ scale: imgScale, y: imgY }}
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover grayscale brightness-[0.3] group-hover:grayscale-0 group-hover:brightness-90 transition-all duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-transparent to-transparent" />
      </motion.div>

      {/* Technical Data Overlay */}
      <div className="absolute inset-0 p-10 md:p-24 flex flex-col justify-between z-10">
        <div className="flex justify-between items-start">
          <div className="flex flex-col gap-3">
            <motion.span 
              className="text-[10px] font-black text-[#C9A227] uppercase tracking-[0.5em] mb-1"
            >
              PHASE_0{index + 1} \u2014 {project.type}
            </motion.span>
            <span className="text-[9px] font-mono text-white/40 uppercase tracking-widest">
              CORE_ENGINEERING_SYS_{project.year}
            </span>
          </div>
          
          <motion.div 
            whileHover={{ scale: 1.1, rotate: 45 }}
            className="w-16 h-16 md:w-24 md:h-24 bg-[#C9A227] text-black flex items-center justify-center rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 shadow-2xl"
          >
            <ArrowUpRight size={32} />
          </motion.div>
        </div>

        <div className="max-w-4xl">
          <motion.h3 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[8vw] md:text-[6vw] font-black text-white mb-10 uppercase tracking-tighter leading-none"
          >
            {project.title}
          </motion.h3>
          
          <div className="flex flex-col md:flex-row gap-16 items-end md:items-center">
            <motion.p 
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-slate-300 font-light max-w-xl leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-700"
            >
              {project.description}
            </motion.p>
            
            <motion.div 
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex-shrink-0 flex flex-col gap-3 p-10 bg-[#0D1B2A]/90 backdrop-blur-xl border border-[#C9A227]/30 shadow-2xl"
            >
               <span className="text-4xl md:text-5xl font-black text-white font-mono leading-none">{project.metric}</span>
               <div className="flex items-center gap-4">
                 <div className="w-6 h-[1px] bg-[#C9A227]" />
                 <span className="text-[9px] font-black text-[#C9A227] uppercase tracking-[0.4em]">{project.label}</span>
               </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Decorative Architectural Guides */}
      <div className="absolute top-12 bottom-12 left-12 w-[1px] bg-white/10" />
      <div className="absolute left-12 right-12 top-12 h-[1px] bg-white/10" />
      <div className="absolute bottom-12 left-12 right-12 h-[1px] bg-white/10" />
    </div>
  );
}