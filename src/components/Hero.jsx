import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-24 overflow-hidden bg-dark-bg"
    >
      {/* Sanfte Hintergrund-Glows */}
      <div className="absolute top-1/4 -right-20 w-64 h-64 md:w-96 md:h-96 bg-accent-orange/10 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-1/4 -left-20 w-48 h-48 md:w-72 md:h-72 bg-white/5 rounded-full blur-[100px]"></div>

      <div className="z-10 relative">
        {/* Eyecatcher: Status-Indikator */}
        <div className="flex items-center gap-4 mb-6 md:mb-8 animate-fade-in">
          <div className="w-8 md:w-10 h-[1px] bg-accent-orange"></div>
          <span className="text-accent-orange font-mono text-[9px] md:text-[10px] tracking-[0.4em] uppercase">
            Lets work together
          </span>
        </div>

        {/* Headline: Responsive Größen (5xl auf Mobile!) */}
        <h1 className="text-5xl md:text-8xl lg:text-[9rem] font-medium leading-[0.95] md:leading-[0.9] uppercase tracking-tighter">
          <span className="text-accent-orange block transition-all duration-700 hover:tracking-widest cursor-default">
            FULLSTACK
          </span>
          <span className="text-white block opacity-90 italic font-light">
            DEVELOPER
          </span>
        </h1>

        <div className="flex flex-col md:flex-row md:items-end gap-8 md:gap-12 mt-8 md:mt-12">
          <p className="text-gray-400 max-w-md text-base md:text-xl leading-relaxed font-light">
            Hi! I'm <span className="text-white font-medium">Joshua</span>.
            Full-stack developer with a particular passion for{" "}
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

      {/* Quote: Nur auf Desktop sichtbar (lg:block) */}
      <div className="absolute bottom-16 right-10 md:right-24 text-right hidden lg:block">
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

      {/* E-Mail: Nur auf Desktop sichtbar */}
      <div className="absolute left-6 bottom-24 origin-bottom-left -rotate-90 text-gray-500 text-[10px] tracking-[0.4em] font-medium hidden lg:block uppercase border-b border-white/10 pb-1">
        joshua.vaeth@yahoo.de
      </div>
    </section>
  );
};

export default Hero;
