import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center px-10 md:px-24 overflow-hidden bg-dark-bg"
    >
      {/* Sanfte Hintergrund-Glows für Tiefe */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-accent-orange/10 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-1/4 -left-20 w-72 h-72 bg-white/5 rounded-full blur-[100px]"></div>

      <div className="z-10 relative">
        {/* Eyecatcher: Status-Indikator */}
        <div className="flex items-center gap-4 mb-8 animate-fade-in">
          <div className="w-10 h-[1px] bg-accent-orange"></div>
          <span className="text-accent-orange font-mono text-[10px] tracking-[0.4em] uppercase">
            Lets work together
          </span>
        </div>

        {/* Headline: Schlanker & Eleganter */}
        <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-medium leading-[0.9] uppercase tracking-tighter">
          <span className="text-accent-orange block transition-all duration-700 hover:tracking-widest cursor-default">
            FULLSTACK
          </span>
          <span className="text-white block opacity-90 italic font-light">
            DEVELOPER
          </span>
        </h1>

        <div className="flex flex-col md:flex-row md:items-end gap-12 mt-12">
          <p className="text-gray-400 max-w-md text-lg md:text-xl leading-relaxed font-light">
            Hi! I'm <span className="text-white font-medium">Joshua</span>.
            Full-stack developer with a particular passion for{" "}
            <span className="text-white italic">front-end development</span>{" "}
            that impresses with its{" "}
            <span className="text-white italic">design and precision.</span>{" "}
          </p>

          {/* Button mit Slide-Effekt in Orange & Download-Funktion */}
          <div className="flex flex-col gap-4">
            <a
              href="/Lebenslauf_Joshua_Vaeth.pdf" // Stelle sicher, dass die Datei so im 'public' Ordner liegt
              download="Joshua_Vaeth_CV.pdf"
              className="relative px-10 py-4 bg-transparent border border-accent-orange/40 text-white font-medium rounded-sm overflow-hidden group transition-all cursor-pointer inline-block text-center"
            >
              {/* Slide-Effekt: Jetzt in Accent-Orange */}
              <span className="absolute inset-0 bg-accent-orange translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300"></span>

              {/* Button-Text: Bleibt weiß beim Hover */}
              <span className="relative z-10 uppercase tracking-[0.2em] text-xs">
                Download CV
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Die "Span" Quote - Jetzt knalliger & präsenter */}
      <div className="absolute bottom-16 right-10 md:right-24 text-right hidden lg:block">
        <div className="font-mono">
          <p className="text-accent-orange text-sm mb-2 opacity-100 font-bold">
            &lt;span&gt;
          </p>
          <div className="border-r-2 border-accent-orange pr-6">
            <p className="text-white max-w-[320px] text-sm md:text-base leading-relaxed italic opacity-90">
              "Proficient in the latest web technologies, continuously expanding
              my skill set to stay at the forefront of the industry."
            </p>
          </div>
          <p className="text-accent-orange text-sm mt-2 opacity-100 font-bold">
            &lt;/span&gt;
          </p>
        </div>
      </div>

      {/* E-Mail an der Seite */}
      <div className="absolute left-6 bottom-24 origin-bottom-left -rotate-90 text-gray-500 text-[10px] tracking-[0.4em] font-medium hidden lg:block uppercase border-b border-white/10 pb-1 hover:text-white transition-colors">
        joshua.vaeth@yahoo.de
      </div>
    </section>
  );
};

export default Hero;
