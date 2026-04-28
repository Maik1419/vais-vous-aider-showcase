import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Award, Zap, ShieldCheck } from 'lucide-react';

export function About() {
  const specs = [
    "Maîtrise des normes BTP internationales",
    "Expertise en construction durable",
    "Leadership et gestion d'équipes",
    "Optimisation structurelle et budgétaire",
    "Audit technique et mise en conformité"
  ];

  return (
    <section id="about" className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative"
          >
            <div className="relative z-10 group">
              <img
                src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/763623c0-1f3d-46e9-8a05-4d055f45ff61/david-portrait-15efcd9c-1777366913023.webp"
                alt="Portrait David Maikandi"
                className="rounded-sm shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute -bottom-10 -right-10 w-80 h-80 bg-amber-500/10 -z-10 rounded-full blur-3xl animate-pulse" />
              <div className="absolute -top-10 -left-10 w-40 h-40 border-l-4 border-t-4 border-amber-500/30 -z-10" />
            </div>
            {/* Experience Badge */}
            <div className="absolute top-12 -left-8 bg-slate-950 p-10 shadow-2xl hidden md:block border-l-4 border-amber-500">
              <p className="text-6xl font-black text-amber-500 mb-1 leading-none tracking-tighter">04</p>
              <p className="text-[10px] font-black text-white uppercase tracking-[0.3em] leading-tight">
                Années <br /> D'Expertise <br /> Terrain
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <span className="text-xs font-black uppercase tracking-[0.4em] text-amber-600 mb-4 block">
              L'excellence technique africaine
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-950 mb-8 leading-[1.1] tracking-tighter">
              Une référence pour le <span className="text-amber-600">BTP Moderne</span> en Afrique.
            </h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed font-medium">
              Ingénieur en Construction BTP passionné par l'excellence technique, David Maikandi se positionne comme un acteur clé du développement des infrastructures sur le continent africain. Avec 4 ans d'expérience intensive, il allie rigueur académique et expertise terrain pour transformer des concepts complexes en structures pérennes.
            </p>
            <p className="text-slate-600 text-lg mb-12 leading-relaxed">
              Sa vision dépasse la simple construction ; il s'engage pour un leadership moderne et une ingénierie responsable. Chaque projet est une opportunité de bâtir non seulement des édifices, mais aussi l'avenir d'une Afrique ambitieuse et structurée.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              {specs.map((spec, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                    <CheckCircle2 size={14} />
                  </div>
                  <span className="text-slate-800 font-bold text-sm uppercase tracking-wider">{spec}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-8 items-center border-t border-slate-100 pt-10">
              <div className="flex items-center gap-3">
                <ShieldCheck className="text-amber-500" size={24} />
                <span className="text-xs font-black uppercase tracking-widest">Rigueur</span>
              </div>
              <div className="flex items-center gap-3">
                <Zap className="text-amber-500" size={24} />
                <span className="text-xs font-black uppercase tracking-widest">Innovation</span>
              </div>
              <div className="flex items-center gap-3">
                <Award className="text-amber-500" size={24} />
                <span className="text-xs font-black uppercase tracking-widest">Expertise</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}