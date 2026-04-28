import React, { useState, useEffect } from 'react';
import { motion, useScroll, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Magnetic } from '../ui/Magnetic';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.on('change', (latest) => setScrolled(latest > 80));
  }, [scrollY]);

  const navLinks = [
    { name: 'PHILOSOPHY', href: '#signature' },
    { name: 'PORTFOLIO', href: '#portfolio' },
    { name: 'SYSTEMS', href: '#expertise' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-1000 ${
        scrolled ? 'py-5 bg-[#0A0A0A]/90 backdrop-blur-2xl border-b border-white/5 shadow-2xl' : 'py-12 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-5">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-5 group cursor-pointer"
          >
            <div className="relative w-12 h-12 flex items-center justify-center">
               <div className="absolute inset-0 border border-[#C9A227]/40 group-hover:rotate-45 transition-transform duration-700" />
               <span className="font-serif italic font-black text-[#C9A227] text-2xl z-10">M</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-black text-2xl tracking-tighter uppercase font-serif leading-none">
                David <span className="text-[#C9A227] italic">Maikandi.</span>
              </span>
              <span className="text-[8px] font-black text-[#C9A227]/50 tracking-[0.4em] uppercase">Infrastructure Engineering</span>
            </div>
          </motion.div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-16">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + i * 0.1 }}
            >
              <Magnetic strength={0.15}>
                <a
                  href={link.href}
                  className="text-[10px] font-black uppercase tracking-[0.5em] text-white/40 hover:text-white transition-all relative group flex items-center gap-2"
                >
                  <span className="text-[#C9A227] opacity-0 group-hover:opacity-100 transition-opacity">_</span>
                  {link.name}
                  <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-[#C9A227] transition-all group-hover:w-full" />
                </a>
              </Magnetic>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5 }}
          >
            <Magnetic strength={0.2}>
              <a
                href="#contact"
                className="group px-10 py-5 bg-[#C9A227] text-black text-[10px] font-black uppercase tracking-[0.4em] hover:bg-white transition-all flex items-center gap-4"
              >
                <span>START_PROTOCOL</span>
                <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </Magnetic>
          </motion.div>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-[#C9A227] p-3 border border-white/5 bg-[#0D1B2A]/40"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Takeover */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] bg-[#0A0A0A] flex flex-col p-12 md:hidden"
          >
            <div className="flex justify-between items-center mb-24">
               <span className="font-serif italic font-black text-[#C9A227] text-3xl">M</span>
               <button onClick={() => setIsOpen(false)} className="p-3 border border-white/10">
                 <X size={28} className="text-white" />
               </button>
            </div>

            <div className="space-y-10">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                >
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-5xl font-black text-white uppercase tracking-tighter hover:text-[#C9A227] block border-b border-white/5 pb-6"
                  >
                    {link.name}
                  </a>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-auto flex flex-col gap-10">
               <div className="flex flex-col">
                 <span className="text-[9px] font-black text-white/20 uppercase tracking-[0.5em] block mb-4">Liaison</span>
                 <a href="mailto:contact@davidmaikandi.com" className="text-xl text-white font-light">contact@davidmaikandi.com</a>
               </div>
               <a 
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="py-8 bg-[#C9A227] text-black text-center text-xs font-black uppercase tracking-[0.6em]"
               >
                 ENGAGE NOW
               </a>
            </div>

            {/* Background Texture */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none architectural-grid -z-10" />
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}