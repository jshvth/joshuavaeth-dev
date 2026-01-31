import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#050505]"
    >
      {/* 1. HINTERGRUND-GLOWS */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none z-0">
        {/* Haupt-Glow Orange: Jetzt auf top-[32%] für maximalen Abstand zur Navbar */}
        <div className="absolute top-[32%] right-[8%] w-[250px] h-[250px] md:w-[450px] md:h-[450px] bg-[#bc5939]/40 rounded-full blur-[60px] md:blur-[90px] animate-soft-glow"></div>

        {/* Weißer Kontrast-Glow wurde entfernt */}
      </div>

      {/* 2. CONTENT CONTAINER */}
      <div className="max-w-[1600px] mx-auto w-full px-6 md:px-24 z-10 relative">
        <div className="flex items-center gap-4 mb-6 md:mb-8 animate-fade-in">
          <div className="w-8 md:w-10 h-[1px] bg-accent-orange"></div>
          <span className="text-accent-orange font-mono text-[9px] md:text-[10px] tracking-[0.4em] uppercase">
            Lets work together
          </span>
        </div>

        <h1 className="text-5xl md:text-8xl lg:text-[9rem] font-medium leading-[0.95] md:leading-[0.9] uppercase tracking-tighter">
          <span className="text-accent-orange block transition-all duration-700 hover:tracking-widest cursor-default">
            FRONTEND
          </span>
          <span className="text-white block opacity-90 italic font-light">
            DEVELOPER
          </span>
        </h1>

        <div className="flex flex-col md:flex-row md:items-end gap-8 md:gap-12 mt-8 md:mt-12">
          <p className="text-gray-400 max-w-md text-base md:text-xl leading-relaxed font-light">
            Hi! I'm <span className="text-white font-medium">Joshua</span>.
            Frontend developer with a particular passion for{" "}
            <span className="text-white italic">front-end development</span>{" "}
            that impresses with its{" "}
            <span className="text-white italic">
              design and precision.
            </span>{" "}
          </p>

          <div className="flex flex-col gap-4">
            <a
              href="/Lebenslauf_Joshua_Vaeth.pdf"
              download="Joshua_Vaeth_CV.pdf"
              className="relative px-8 py-4 md:px-10 md:py-4 bg-transparent border border-accent-orange/40 text-white font-medium rounded-sm overflow-hidden group transition-all cursor-pointer inline-block text-center"
            >
              <span className="absolute inset-0 bg-accent-orange translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300"></span>
              <span className="relative z-10 uppercase tracking-[0.2em] text-[10px] md:text-xs">
                Download CV
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* 3. QUOTE */}
      <div className="absolute bottom-16 right-10 md:right-24 text-right hidden lg:block z-10">
        <div className="font-mono">
          <p className="text-accent-orange text-sm mb-2 font-bold">
            &lt;span&gt;
          </p>
          <div className="border-r-2 border-accent-orange pr-6">
            <p className="text-white max-w-[320px] text-base leading-relaxed italic opacity-90">
              "Proficient in the latest web technologies, continuously expanding
              my skill set."
            </p>
          </div>
          <p className="text-accent-orange text-sm mt-2 font-bold">
            &lt;/span&gt;
          </p>
        </div>
      </div>

      {/* 4. E-MAIL SIDEBAR (Wieder da!) */}
      <div className="absolute left-6 bottom-24 origin-bottom-left -rotate-90 text-gray-500 text-[10px] tracking-[0.4em] font-medium hidden lg:block uppercase border-b border-white/10 pb-1 hover:text-white transition-colors">
        joshua.vaeth@yahoo.de
      </div>
    </section>
  );
};

export default Hero;
