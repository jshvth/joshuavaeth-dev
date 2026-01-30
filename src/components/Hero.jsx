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
      <div className="absolute bottom-10 right-6 md:right-16 text-right hidden md:block">
        <div className="font-mono space-y-1">
          <p className="text-accent-orange text-lg opacity-80">&lt;span&gt;</p>

          <div className="flex flex-col items-end border-r-2 border-accent-orange/30 pr-4 mr-2">
            <p className="text-gray-400 max-w-sm text-sm md:text-base leading-relaxed italic">
              "Proficient in the latest web technologies and frameworks,
              continuously expanding my skill set to stay at the forefront of
              the industry."
            </p>
          </div>

          <p className="text-accent-orange text-lg opacity-80">&lt;/span&gt;</p>
        </div>
      </div>

      {/* E-Mail an der Seite (Vertical Text) - links unten */}
      <div className="absolute left-4 bottom-12 origin-bottom-left -rotate-90 text-gray-500 text-[10px] tracking-[0.2em] font-medium hidden lg:block uppercase">
        joshua.vaeth@yahoo.de
      </div>
    </section>
  );
};

export default Hero;
