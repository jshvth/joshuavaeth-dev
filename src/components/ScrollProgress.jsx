import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();

  // Macht die Bewegung des Balkens geschmeidig
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      {/* Hintergrund-Linie (dezent grau), damit man sieht, wie lang der Weg noch ist */}
      <div className="fixed right-2 top-1/2 -translate-y-1/2 h-[60vh] w-[2px] bg-white/10 z-[1000] hidden md:block rounded-full" />

      {/* Der orange Fortschrittsbalken */}
      <motion.div
        className="fixed right-2 top-1/2 -translate-y-1/2 w-[2px] bg-accent-orange z-[1001] origin-top hidden md:block rounded-full"
        style={{
          scaleY,
          height: "60vh", // Der Balken ist 60% der Bildschirmhöhe hoch
        }}
      />
    </>
  );
};

export default ScrollProgress;
