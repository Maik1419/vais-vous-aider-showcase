import React from 'react';
import { Linkedin, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { Magnetic } from '../ui/Magnetic';

export function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-white pt-60 pb-16 border-t border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-24 mb-40">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-5 mb-12">
              <div className="w-14 h-14 border border-[#C9A227] flex items-center justify-center relative group overflow-hidden">
                <span className="font-black text-[#C9A227] text-xl z-10 font-serif italic">DM</span>
                <div className="absolute inset-0 bg-[#C9A227] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </div>
              <div>
                <span className="text-3xl font-black tracking-tighter uppercase font-serif block">DAVID MAIKANDI</span>
                <span className="text-[10px] font-black tracking-[0.4em] text-[#C9A227] uppercase">Engineering the Future</span>
              </div>
            </div>
            <p className="text-slate-500 max-w-md text-xl font-light leading-relaxed">
              B\u00e2tir l'excellence africaine avec une rigueur technique sans compromis. Votre partenaire strat\u00e9gique pour les infrastructures d'\u00e9lite.
            </p>
          </div>

          <div>
            <h4 className="text-[12px] font-black uppercase tracking-[0.5em] mb-12 text-white italic">Navigation</h4>
            <ul className="space-y-6">
              {['Vision', 'Expertise', 'R\u00e9alisations', 'Contact'].map(item => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-slate-400 hover:text-[#C9A227] transition-all text-[10px] font-black uppercase tracking-[0.3em]">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[12px] font-black uppercase tracking-[0.5em] mb-12 text-white italic">Direct Hub</h4>
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <Phone size={16} className="text-[#C9A227]" />
                <span className="text-white font-black text-sm tracking-widest">+243 821 000 000</span>
              </div>
              <div className="flex items-center gap-4">
                <Mail size={16} className="text-[#C9A227]" />
                <span className="text-white font-black text-sm tracking-widest">DAVID@MAIKANDI.COM</span>
              </div>
              <div className="flex items-center gap-4">
                <MapPin size={16} className="text-[#C9A227]" />
                <span className="text-white font-black text-sm tracking-widest uppercase">KINSHASA, RDC</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
          <p className="text-slate-600 text-[10px] font-black uppercase tracking-[0.6em]">
            \u00a9 2024 DAVID MAIKANDI. AN ELITE ENGINEERING EXPERIENCE.
          </p>
          <div className="flex gap-10">
            {[Linkedin, Instagram, Twitter].map((Icon, i) => (
              <Magnetic key={i} strength={0.2}>
                <a href="#" className="text-slate-600 hover:text-[#C9A227] transition-colors p-2">
                  <Icon size={20} />
                </a>
              </Magnetic>
            ))}
          </div>
        </div>
      </div>

      {/* Background large text */}
      <div className="absolute -bottom-20 -right-20 pointer-events-none opacity-[0.02]">
         <h2 className="text-[25vw] font-black uppercase italic">MAIKANDI</h2>
      </div>
    </footer>
  );
}