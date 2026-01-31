import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center px-6 md:px-20 py-16 bg-dark-bg"
    >
      <div className="mb-10 md:mb-12">
        <h2 className="text-base md:text-xl lg:text-2xl font-light text-gray-400 leading-relaxed max-w-3xl">
          I believe in a{" "}
          <span className="text-white font-medium">
            user centered design approach
          </span>
          , ensuring that every project is tailored to meet specific needs.
        </h2>
      </div>

      <div className="w-full h-[1px] bg-gray-800 mb-10 md:mb-12 flex items-center">
        <span className="text-gray-500 text-[9px] md:text-[10px] uppercase tracking-[0.3em] bg-dark-bg pr-4 md:pr-6">
          Profile Details
        </span>
      </div>

      <div className="flex flex-col lg:flex-row gap-10 md:gap-12 items-start">
        <div className="w-full lg:w-2/3 order-2 lg:order-1">
          <h3 className="text-3xl md:text-6xl font-bold text-white mb-6 tracking-tighter">
            Hey! I'm Joshua.
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3 md:space-y-4">
              <p className="text-accent-orange font-mono text-[9px] md:text-[10px] uppercase tracking-widest italic">
                // Professional Path
              </p>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                Frontend Developer focused on building modern, responsive web
                applications with clean UI and great performance.
              </p>
            </div>

            <div className="space-y-4 text-gray-400 text-sm md:text-base leading-relaxed">
              <p>
                Based in Marburg, Germany. Dedicated to turning ideas into
                creative solutions. I specialize in creating seamless
                experiences.
              </p>
              <p>
                My approach focuses on creating scalable, high-performing
                solutions tailored to user needs.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/3 order-1 lg:order-2">
          <div className="relative aspect-[4/5] md:aspect-[3/4] max-h-[400px] md:max-h-[450px] overflow-hidden rounded-sm grayscale hover:grayscale-0 transition-all duration-500 border border-gray-800">
            <img
              src="joshua.jpg"
              alt="Joshua Väth"
              className="w-full h-full object-cover object-top"
              onError={(e) => {
                e.target.src =
                  "https://via.placeholder.com/600x800?text=Joshua";
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
