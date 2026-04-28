import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Mail, Phone, ArrowRight } from 'lucide-react';
import { toast } from 'sonner';

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success('Your message has been transmitted successfully. Our engineers will review your inquiry.');
    }, 2000);
  };

  return (
    <section id="contact" className="relative py-48 bg-[#0A0A0A] overflow-hidden">
      {/* Cinematic Environmental Light */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-[#0D1B2A]/40 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gradient-to-t from-[#C9A227]/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
          {/* Strategy Side */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <span className="text-[11px] font-black text-[#C9A227] uppercase tracking-[1em] mb-16 block">
                INITIATE_PROTOCOL
              </span>
              <h2 className="text-[9vw] md:text-[7vw] font-serif font-black text-white leading-[0.8] uppercase tracking-tighter mb-20">
                Let's Build <br /> <span className="italic text-stroke text-transparent group-hover:text-white transition-colors duration-1000">The Future.</span>
              </h2>
            </motion.div>

            <div className="space-y-16">
              <ContactDetail 
                icon={<Mail className="w-6 h-6" />}
                label="Strategic Correspondence"
                value="contact@davidmaikandi.com"
                href="mailto:contact@davidmaikandi.com"
              />
              <ContactDetail 
                icon={<Phone className="w-6 h-6" />}
                label="Executive Liaison"
                value="+243 999 000 000"
                href="tel:+243999000000"
              />
              <ContactDetail 
                icon={<MapPin className="w-6 h-6" />}
                label="Global Operations Hub"
                value="Kinshasa, DRC"
                href="#"
              />
            </div>
          </div>

          {/* Transmission Side */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="p-12 md:p-16 bg-[#0D1B2A]/30 backdrop-blur-3xl border border-white/5 relative group overflow-hidden"
          >
            {/* Form Background Accent */}
            <div className="absolute -right-24 -bottom-24 w-64 h-64 bg-[#C9A227]/10 blur-[100px] pointer-events-none" />

            <form onSubmit={handleSubmit} className="relative z-10 space-y-14">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
                <EliteInput label="FULL_NAME" type="text" required />
                <EliteInput label="EMAIL_ADDRESS" type="email" required />
              </div>
              <EliteInput label="INFRASTRUCTURE_TYPE" type="text" />
              <div className="relative">
                <textarea
                  required
                  placeholder="DESCRIBE_VISION..."
                  className="w-full bg-transparent border-b border-white/10 py-6 text-white font-light focus:outline-none focus:border-[#C9A227] transition-all resize-none h-48 uppercase tracking-widest text-xs placeholder:text-white/20"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02, backgroundColor: '#F8F9FA' }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
                className="w-full py-8 bg-[#C9A227] text-black font-black uppercase tracking-[0.6em] text-[10px] transition-all flex items-center justify-center gap-8 disabled:opacity-50 group"
              >
                {isSubmitting ? (
                  <span className="animate-pulse">ESTABLISHING_CONNECTION...</span>
                ) : (
                  <>
                    <span>TRANSMIT_DATA</span>
                    <Send size={16} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function EliteInput({ label, type, required }: { label: string, type: string, required?: boolean }) {
  return (
    <div className="relative">
      <input
        type={type}
        required={required}
        placeholder={label}
        className="w-full bg-transparent border-b border-white/10 py-6 text-white font-light focus:outline-none focus:border-[#C9A227] transition-all placeholder:text-white/20 uppercase tracking-widest text-[10px]"
      />
    </div>
  );
}

function ContactDetail({ icon, label, value, href }: { icon: any, label: string, value: string, href: string }) {
  return (
    <a href={href} className="flex items-center gap-10 group">
      <div className="w-14 h-14 md:w-16 md:h-16 bg-white/5 flex items-center justify-center text-[#C9A227] group-hover:bg-[#C9A227] group-hover:text-black transition-all duration-700">
        {icon}
      </div>
      <div className="flex flex-col">
        <span className="text-[9px] font-black text-white/20 uppercase tracking-[0.4em] block mb-2">{label}</span>
        <span className="text-lg md:text-xl text-white font-light group-hover:text-[#C9A227] transition-colors">{value}</span>
      </div>
      <ArrowRight size={20} className="ml-auto text-white/5 group-hover:text-[#C9A227] transform translate-x-[-20px] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-700" />
    </a>
  );
}