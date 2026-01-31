import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center px-10 md:px-20 py-12 bg-dark-bg"
    >
      {" "}
      {/* py-20 auf py-12 reduziert für mehr Platz */}
      {/* 1. Das Statement - Text minimal kleiner */}
      <div className="mb-12">
        {" "}
        {/* mb-16 auf mb-12 */}
        <h2 className="text-lg md:text-xl lg:text-2xl font-light text-gray-400 leading-relaxed max-w-3xl">
          I believe in a{" "}
          <span className="text-white font-medium">
            user centered design approach
          </span>
          , ensuring that every project I work on is tailored to meet the
          specific needs of its users.
        </h2>
      </div>
      {/* 2. Die Trennlinie - Kompakterer Abstand */}
      <div className="w-full h-[1px] bg-gray-800 mb-12 flex items-center">
        <span className="text-gray-500 text-[10px] uppercase tracking-[0.3em] bg-dark-bg pr-6">
          Profile Details
        </span>
      </div>
      {/* 3. Der Detail-Bereich */}
      <div className="flex flex-col lg:flex-row gap-12 items-start">
        {/* Text-Container (Links) */}
        <div className="w-full lg:w-2/3 order-2 lg:order-1">
          {/* Headline "Hey..." - Etwas kleiner */}
          <h3 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tighter">
            Hey, i'm Joshua.
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="text-accent-orange font-mono text-[10px] uppercase tracking-widest italic">
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
                creative solutions. I specialize in creating seamless and
                intuitive user experiences.
              </p>
              <p>
                My approach focuses on creating scalable, high-performing
                solutions tailored to both user needs and business objectives.
              </p>
            </div>
          </div>
        </div>

        {/* Bild-Container (Rechts) - Minimal kleiner (max-h-450px statt 500px) */}
        <div className="w-full lg:w-1/3 order-1 lg:order-2">
          <div className="relative aspect-[3/4] max-h-[450px] overflow-hidden rounded-sm grayscale hover:grayscale-0 transition-all duration-500 border border-gray-800">
            <img
              src="/src/assets/joshua.jpg"
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
