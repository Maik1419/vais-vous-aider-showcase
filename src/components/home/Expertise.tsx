import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Target, Globe } from 'lucide-react';

const expertiseItems = [
  {
    icon: <Target className="w-8 h-8" />,
    title: "Structural Integrity",
    description: "Implementing advanced skeletal frameworks for iconic skyscrapers using high-precision steel and carbon-infused concrete.",
    stats: "0.005mm Tolerance",
    tags: ["Skyscrapers", "Bridges", "Marine Construction"]
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Techno-Sustainability",
    description: "Integrating smart-grid solutions and kinetic energy recovery systems directly into urban infrastructure foundations.",
    stats: "45% Carbon Reduction",
    tags: ["Eco-Steel", "Solar-Concrete", "Efficiency"]
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Geo-Strategic Planning",
    description: "Advanced feasibility modeling for trans-African corridors, optimizing economic flow and structural longevity.",
    stats: "25+ Megaprojects",
    tags: ["Urbanism", "Logistics", "Economics"]
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Seismic Engineering",
    description: "Extreme environment stress-testing and seismic-grade architectural engineering for volatile tectonic zones.",
    stats: "Resilience Grade 10",
    tags: ["Seismic Analysis", "Safety", "Reliability"]
  }
];

export function Expertise() {
  return (
    <section id="expertise" className="relative py-48 bg-[#0A0A0A] overflow-hidden">
      {/* Blueprint Background Aesthetic */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <img 
          src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/763623c0-1f3d-46e9-8a05-4d055f45ff61/expertise-bg-b002b621-1777370067760.webp"
          className="w-full h-full object-cover mix-blend-luminosity"
          alt="Blueprint Background"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mb-32">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-[11px] font-black text-[#C9A227] uppercase tracking-[1em] mb-12 block"
          >
            TECHNICAL_SYSTEMS
          </motion.span>
          <h2 className="text-[9vw] md:text-[7vw] font-serif font-black text-white leading-none uppercase tracking-tighter mb-16">
            Engineering <br /> <span className="italic text-[#C9A227]">Intelligence.</span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-400 font-light max-w-2xl leading-relaxed">
            A synthesis of advanced structural mathematics and visionary architectural design to engineer a sustainable future.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10">
          {expertiseItems.map((item, i) => (
            <ExpertiseCard key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ExpertiseCard({ item, index }: { item: any, index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: index * 0.1, duration: 1 }}
      className="group relative p-12 md:p-20 bg-[#0A0A0A] hover:bg-[#0D1B2A] transition-all duration-700 cursor-none"
    >
      {/* Blueprint Grid Lines Reveal on Hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none architectural-grid" />

      <div className="relative z-10">
        <div className="text-[#C9A227] mb-12 transform group-hover:scale-110 group-hover:-translate-y-2 transition-transform duration-500">
          {item.icon}
        </div>
        
        <h3 className="text-3xl md:text-4xl font-black text-white mb-8 uppercase tracking-tight">
          {item.title}
        </h3>
        
        <p className="text-slate-400 text-lg md:text-xl font-light leading-relaxed mb-12 group-hover:text-slate-200 transition-colors">
          {item.description}
        </p>

        <div className="flex flex-wrap gap-3 mb-12">
          {item.tags.map((tag: string) => (
            <span key={tag} className="text-[9px] font-black text-white/40 border border-white/10 px-5 py-2 uppercase tracking-[0.2em] group-hover:border-[#C9A227]/30 group-hover:text-white/60 transition-colors">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-6 mt-12">
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-[1px] bg-[#C9A227]"
          />
          <span className="text-sm font-mono text-[#C9A227] font-black uppercase tracking-[0.3em]">
            {item.stats}
          </span>
        </div>
      </div>

      {/* Bottom Gold Reveal Line */}
      <div className="absolute bottom-0 left-0 h-[2px] bg-[#C9A227] w-0 group-hover:w-full transition-all duration-700 ease-in-out shadow-[0_0_10px_#C9A227]" />
    </motion.div>
  );
}