import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Stack from "./components/Stack";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Reveal from "./components/Reveal";
import CustomCursor from "./components/CustomCursor";
import ScrollProgress from "./components/ScrollProgress";

function App() {
  useEffect(() => {
    // Da wir das Script in der index.html haben, ist 'Lenis' global verfügbar
    // Wir prüfen kurz, ob es geladen wurde, um Fehler zu vermeiden
    if (window.Lenis) {
      const lenis = new window.Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      });

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);

      return () => {
        lenis.destroy();
      };
    }
  }, []);

  return (
    <main className="bg-dark-bg cursor-none">
      <ScrollProgress />
      <CustomCursor />
      <Navbar />
      <Hero />
      <Reveal>
        <About />
      </Reveal>
      <Reveal>
        <Experience />
      </Reveal>
      <Reveal>
        <Stack />
      </Reveal>
      <Reveal>
        <Footer />
      </Reveal>
    </main>
  );
}

export default App;
