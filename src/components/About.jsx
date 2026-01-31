import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center bg-dark-bg py-12 md:py-16"
    >
      <div className="max-w-[1600px] mx-auto w-full px-6 md:px-20">
        {/* Die Trennlinie - Jetzt als oberster Einstieg */}
        <div className="w-full h-[1px] bg-gray-800 mb-10 md:mb-16 flex items-center">
          <span className="text-gray-500 text-[9px] md:text-[10px] uppercase tracking-[0.3em] bg-dark-bg pr-4 md:pr-6">
            Profile Details
          </span>
        </div>

        {/* Der Detail-Bereich - Durch das Entfernen des Statements rutscht dieser Part nach oben */}
        <div className="flex flex-col lg:flex-row gap-10 md:gap-16 items-start">
          <div className="w-full lg:w-2/3 order-2 lg:order-1">
            <h3 className="text-4xl md:text-7xl font-bold text-white mb-8 tracking-tighter">
              Hey! I'm Joshua.
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <div className="space-y-4">
                <p className="text-accent-orange font-mono text-[9px] md:text-[10px] uppercase tracking-widest italic">
                  // Professional Path
                </p>
                <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                  Frontend Developer focused on building modern, responsive web
                  applications with clean UI and great performance. I believe in
                  a{" "}
                  <span className="text-white italic">
                    user centered design approach
                  </span>
                  , ensuring that every project is tailored to meet specific
                  needs.
                </p>
              </div>

              <div className="space-y-5 text-gray-400 text-sm md:text-base leading-relaxed">
                <p>
                  Based in Marburg, Germany. Dedicated to turning ideas into
                  creative solutions. I specialize in creating seamless
                  experiences.
                </p>
                <p>
                  My approach focuses on creating scalable, high-performing
                  solutions tailored to user needs. I love combining technical
                  logic with aesthetic design.
                </p>
              </div>
            </div>
          </div>

          {/* Bild-Container */}
          <div className="w-full lg:w-1/3 order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-full aspect-[4/5] md:aspect-[3/4] max-w-[380px] overflow-hidden rounded-sm grayscale hover:grayscale-0 transition-all duration-700 border border-gray-800/50 shadow-2xl">
              <img
                src="joshua.jpg"
                alt="Joshua Väth"
                className="w-full h-full object-cover object-top"
                onError={(e) => {
                  e.target.src =
                    "https://via.placeholder.com/600x800?text=Joshua";
                }}
              />
              {/* Ein subtiler Overlay-Effekt für mehr Tiefe */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/40 to-transparent opacity-60"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
