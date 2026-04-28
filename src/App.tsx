import React, { useState, useEffect, useRef } from 'react';
import { Toaster } from 'sonner';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/home/Hero';
import { Signature } from './components/home/Signature';
import { Expertise } from './components/home/Expertise';
import { Portfolio } from './components/home/Portfolio';
import { Process } from './components/home/Process';
import { Contact } from './components/home/Contact';
import { Footer } from './components/layout/Footer';
import { CustomCursor } from './components/ui/CustomCursor';
import { Preloader } from './components/ui/Preloader';
import { motion, AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';

function App() {
  const [loading, setLoading] = useState(true);
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Initialize Lenis Smooth Scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Simulate assets loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500);

    return () => {
      clearTimeout(timer);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0A0A] noise-bg">
      <AnimatePresence mode="wait">
        {loading ? (
          <Preloader key="loader" />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <CustomCursor />
            <Toaster position="bottom-center" richColors theme="dark" closeButton />
            
            <Navbar />
            
            <main>
              <Hero />
              <Signature />
              <Portfolio />
              <Expertise />
              <Process />
              <Contact />
            </main>

            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;