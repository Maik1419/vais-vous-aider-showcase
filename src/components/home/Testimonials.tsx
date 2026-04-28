import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Marc Leroux",
    role: "Directeur de Projet, Infrastructure Pan-Africaine",
    content: "David Maikandi a fait preuve d'une rigueur exceptionnelle sur nos projets de ponts. Sa capacité à optimiser les structures complexes tout en respectant les normes de sécurité les plus strictes est impressionnante.",
    rating: 5
  },
  {
    name: "Amina Diallo",
    role: "Architecte Senior, Urban Vision Africa",
    content: "Travailler avec David est une garantie de succès technique. Il comprend parfaitement les intentions architecturales et apporte les solutions structurelles les plus élégantes et efficaces.",
    rating: 5
  },
  {
    name: "Samuel M'beki",
    role: "Promoteur Immobilier",
    content: "La gestion de chantier de David Maikandi est exemplaire. Une communication transparente, une tenue des délais rigoureuse et un souci du détail qui fait toute la différence pour un investisseur.",
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section className="py-32 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-amber-600 mb-6 block">
            Témoignages
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-slate-950 tracking-tighter uppercase">
            La Confiance de nos <span className="text-amber-600 italic">Partenaires</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-12 shadow-2xl border border-slate-100 relative group hover:-translate-y-2 transition-all duration-500"
            >
              <Quote className="absolute top-10 right-10 text-slate-100 group-hover:text-amber-500/10 transition-colors" size={64} />
              <div className="flex gap-1 mb-8">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-amber-500 text-amber-500" />
                ))}
              </div>
              <p className="text-slate-600 italic mb-10 leading-relaxed relative z-10 font-medium text-lg">
                "{t.content}"
              </p>
              <div className="border-t border-slate-50 pt-8">
                <h4 className="font-black text-slate-950 uppercase tracking-tight">{t.name}</h4>
                <p className="text-[10px] text-amber-600 font-black uppercase tracking-[0.2em] mt-2">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}