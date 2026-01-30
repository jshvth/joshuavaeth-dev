import React from "react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-10 md:px-20 overflow-hidden bg-dark-bg">
      {/* Hintergrund-Effekt (Platzhalter für Partikel) */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        {/* Hier kommen später die Partikel-Effekte rein */}
      </div>

      <div className="z-10">
        <h1 className="text-6xl md:text-8xl font-bold leading-tight uppercase tracking-tighter">
          <span className="text-accent-orange">FRONTEND</span> <br />
          <span className="text-white">DEVELOPER</span>
        </h1>

        <p className="mt-6 text-gray-400 max-w-lg text-lg leading-relaxed">
          Hi! Ich bin Joshua. Ein Frontend Developer mit Leidenschaft für
          hochperformante, skalierbare und responsive Web-Lösungen.
        </p>

        <button className="mt-10 px-8 py-3 bg-accent-orange text-white font-bold rounded-sm hover:opacity-80 transition-all cursor-pointer">
          Download CV
        </button>
      </div>

      {/* Die "Code-Span" Anzeige unten rechts (aus dem Screenshot) */}
      <div className="absolute bottom-20 right-10 md:right-20 text-right hidden md:block">
        <p className="text-accent-orange font-mono text-xl">&lt;span&gt;</p>
        <p className="text-gray-400 max-w-xs text-base font-light mt-2 leading-snug">
          Proficient in the latest web technologies and frameworks, continuously
          expanding my skill set to stay at the forefront of the industry.
        </p>
        <p className="text-accent-orange font-mono text-xl mt-2">
          &lt;/span&gt;
        </p>
      </div>

      {/* E-Mail an der Seite (Vertical Text) - links unten */}
      <div className="absolute left-4 bottom-12 origin-bottom-left -rotate-90 text-gray-500 text-[10px] tracking-[0.2em] font-medium hidden lg:block uppercase">
        joshua.vaeth@gmail.com
      </div>
    </section>
  );
};

export default Hero;
