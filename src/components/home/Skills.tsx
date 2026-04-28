import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: "Revit / BIM", level: 95 },
  { name: "AutoCAD", level: 90 },
  { name: "Robot Structural Analysis", level: 85 },
  { name: "Eurocodes (0, 1, 2, 3, 8)", level: 95 },
  { name: "Project Management", level: 80 },
  { name: "Calcul de Structures Béton", level: 98 },
  { name: "Management de Chantier", level: 85 },
  { name: "Dimensionnement Métallique", level: 75 },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-slate-950 text-white overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-amber-500/5 -skew-x-12 translate-x-1/2" />
      <img 
        src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/763623c0-1f3d-46e9-8a05-4d055f45ff61/african-texture-e2f31005-1777366916695.webp" 
        alt="" 
        className="absolute top-1/2 left-0 w-96 opacity-[0.03] pointer-events-none -translate-x-1/2"
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/3"
          >
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-amber-500 mb-4 block">
              Compétences
            </span>
            <h2 className="text-4xl font-bold mb-8 leading-tight">
              Expertise Technique & <span className="text-amber-500">Maîtrise Logicielle</span>
            </h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              David Maikandi combine les standards internationaux les plus rigoureux avec l'utilisation des derniers outils technologiques pour garantir la sécurité et l'efficience de chaque ouvrage.
            </p>
            <div className="p-6 bg-slate-900 border border-white/5 rounded-sm">
              <h4 className="font-bold text-white uppercase tracking-widest text-xs mb-4">Certifications & Normes</h4>
              <ul className="space-y-3">
                <li className="text-slate-400 text-sm flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                  Conformité Eurocodes 2, 3, 8
                </li>
                <li className="text-slate-400 text-sm flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                  Management de la qualité ISO 9001
                </li>
                <li className="text-slate-400 text-sm flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                  Expertise BIM Niveau 2
                </li>
              </ul>
            </div>
          </motion.div>

          <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
            {skills.map((skill, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="flex justify-between items-end mb-3">
                  <span className="text-sm font-bold uppercase tracking-widest text-slate-300">{skill.name}</span>
                  <span className="text-xs font-bold text-amber-500">{skill.level}%</span>
                </div>
                <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full bg-amber-500"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}