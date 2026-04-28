import React from 'react';
import { motion } from 'framer-motion';
import { Ruler, Layers, Construction, ClipboardCheck, Briefcase, UserCheck, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: <Layers size={40} />,
    title: "Études et Conception Technique",
    desc: "Ingénierie de précision et modélisation avancée pour garantir la viabilité et l'excellence de vos structures dès la genèse."
  },
  {
    icon: <Ruler size={40} />,
    title: "Dimensionnement Structurel",
    desc: "Calculs complexes et optimisation des matériaux pour une stabilité maximale, conforme aux normes internationales les plus strictes."
  },
  {
    icon: <Construction size={40} />,
    title: "Gestion et Supervision de Chantier",
    desc: "Pilotage stratégique des opérations terrain, assurant un contrôle qualité permanent et une exécution millimétrée."
  },
  {
    icon: <ClipboardCheck size={40} />,
    title: "Audit et Expertise BTP",
    desc: "Analyse pathologique et diagnostic structurel de haut niveau pour sécuriser et valoriser vos actifs immobiliers."
  },
  {
    icon: <Briefcase size={40} />,
    title: "Consultation Stratégique",
    desc: "Accompagnement décisionnel élite pour optimiser vos investissements et choisir les meilleures technologies constructives."
  },
  {
    icon: <UserCheck size={40} />,
    title: "Assistance Maîtrise d'Ouvrage",
    desc: "Votre partenaire de confiance pour la défense de vos intérêts techniques et financiers auprès des différents intervenants."
  }
];

export function Services() {
  return (
    <section id="services" className="py-40 bg-[#050505] relative overflow-hidden">
      {/* Abstract background elements */}
      <div className="absolute top-0 right-0 w-[50rem] h-[50rem] bg-[#0F172A] blur-[200px] -z-0 opacity-20 rounded-full -mr-40 -mt-40" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-32 gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl"
          >
            <span className="text-[12px] font-black uppercase tracking-[0.6em] text-[#D4AF37] mb-8 block">
              Services Premium
            </span>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-10 tracking-tighter leading-[0.9] font-serif uppercase">
              L'Ingénierie de <br /> <span className="text-[#D4AF37] italic">Haute Précision.</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:max-w-sm mt-8"
          >
            <p className="text-slate-400 text-xl font-light leading-relaxed border-l-2 border-[#D4AF37]/30 pl-8">
              Des solutions techniques d'élite conçues pour les projets les plus complexes, alliant rigueur européenne et agilité africaine.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-white/5">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="group p-16 bg-transparent hover:bg-[#0F172A]/20 transition-all duration-700 flex flex-col h-full border border-white/5 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-[2px] h-0 bg-[#D4AF37] group-hover:h-full transition-all duration-700" />
              
              <div className="text-[#D4AF37] mb-12 group-hover:scale-110 group-hover:-translate-y-2 transition-transform duration-700 ease-out">
                {service.icon}
              </div>
              <h3 className="text-2xl font-black text-white mb-8 group-hover:text-[#D4AF37] transition-colors uppercase tracking-tight font-serif">
                {service.title}
              </h3>
              <p className="text-slate-400 leading-relaxed font-light text-lg mb-12 group-hover:text-slate-300 transition-colors">
                {service.desc}
              </p>
              
              <motion.div 
                className="mt-auto pt-10 flex items-center gap-4 text-[11px] font-black uppercase tracking-[0.4em] text-[#D4AF37]/30 group-hover:text-[#D4AF37] transition-all cursor-pointer"
                whileHover={{ x: 10 }}
              >
                <a href="#contact" className="flex items-center gap-4">
                  Consultation Technique <ArrowRight size={16} />
                </a>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}