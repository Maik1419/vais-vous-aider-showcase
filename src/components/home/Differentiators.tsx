import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Clock, Target, Award, ArrowRight } from 'lucide-react';

const diffs = [
  {
    icon: <ShieldCheck size={48} />,
    title: "Expertise Terrain Prouvée",
    desc: "Une maîtrise absolue des réalités géotechniques et structurelles du continent, garantissant la pérennité de chaque édifice."
  },
  {
    icon: <Zap size={48} />,
    title: "Rigueur Technique Absolue",
    desc: "Application intransigeante des standards internationaux (Eurocodes, ACI) pour une sécurité et une précision sans compromis."
  },
  {
    icon: <Clock size={48} />,
    title: "Respect Strict des Délais",
    desc: "Une planification stratégique et une gestion de flux proactive pour transformer vos visions en réalité dans les temps impartis."
  },
  {
    icon: <Target size={48} />,
    title: "Approche Orientée Résultat",
    desc: "Optimisation intelligente des ressources et des coûts, maximisant la valeur ajoutée technique sans sacrifier la qualité."
  },
  {
    icon: <Award size={48} />,
    title: "Leadership Technique Élite",
    desc: "Un engagement total pour l'excellence et l'innovation, positionnant vos projets au sommet des standards mondiaux."
  }
];

export function Differentiators() {
  return (
    <section id="differentiators" className="py-40 bg-[#050505] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-24 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-2/5 lg:sticky lg:top-40"
          >
            <span className="text-[12px] font-black uppercase tracking-[0.6em] text-[#D4AF37] mb-10 block">
              Engagement & Valeurs
            </span>
            <h2 className="text-5xl md:text-7xl font-black text-white mb-12 leading-[1] tracking-tighter uppercase font-serif">
              La Marque de <br /> l'Ingénierie <br /> <span className="text-[#D4AF37] italic">Haut de Gamme.</span>
            </h2>
            <p className="text-slate-400 text-xl font-light leading-relaxed mb-16 max-w-md">
              Collaborer avec David Maikandi, c'est s'assurer une tranquillité d'esprit technique et une excellence opérationnelle de classe mondiale pour vos actifs stratégiques.
            </p>
            
            <motion.div 
              className="p-12 bg-gradient-to-br from-[#0F172A]/60 to-[#050505] border border-[#D4AF37]/30 relative overflow-hidden group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#D4AF37]/10 -mr-20 -mt-20 rounded-full blur-3xl" />
              <p className="text-white font-bold text-2xl mb-6 relative z-10 italic leading-relaxed font-serif">
                "Notre mission est de bâtir l'avenir avec les standards d'excellence les plus élevés, projet après projet."
              </p>
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-10 h-[1px] bg-[#D4AF37]" />
                <p className="text-[11px] font-black uppercase tracking-[0.4em] text-[#D4AF37]">
                  David Maikandi
                </p>
              </div>
            </motion.div>
          </motion.div>

          <div className="lg:w-3/5 grid grid-cols-1 md:grid-cols-2 gap-10">
            {diffs.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className="bg-white/[0.02] p-12 border border-white/5 hover:border-[#D4AF37]/40 transition-all duration-700 group hover:-translate-y-2 relative"
              >
                <div className="absolute top-0 right-0 p-8 text-white/5 font-black text-4xl group-hover:text-[#D4AF37]/10 transition-colors">
                  0{i + 1}
                </div>
                <div className="text-[#D4AF37] mb-12 group-hover:scale-110 transition-transform duration-700 ease-out">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-black mb-6 uppercase tracking-tight text-white group-hover:text-[#D4AF37] transition-colors font-serif">
                  {item.title}
                </h3>
                <p className="text-slate-400 font-light leading-relaxed text-lg group-hover:text-slate-300 transition-colors">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}