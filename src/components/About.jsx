import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center px-10 md:px-20 py-20 bg-dark-bg"
    >
      {/* 1. Das Statement - Dezent und elegant */}
      <div className="mb-16">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-light text-gray-400 leading-relaxed max-w-3xl">
          I believe in a{" "}
          <span className="text-white font-medium">
            user centered design approach
          </span>
          , ensuring that every project I work on is tailored to meet the
          specific needs of its users.
        </h2>
      </div>

      {/* 2. Die Trennlinie */}
      <div className="w-full h-[1px] bg-gray-800 mb-16 flex items-center">
        <span className="text-gray-500 text-[10px] uppercase tracking-[0.3em] bg-dark-bg pr-6">
          Profile Details
        </span>
      </div>

      {/* 3. Der Detail-Bereich: Text LINKS, Bild RECHTS */}
      <div className="flex flex-col lg:flex-row gap-16 items-start">
        {/* Text-Container (Links) */}
        <div className="w-full lg:w-2/3 order-2 lg:order-1">
          <h3 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter">
            Hey, i'm Joshua.
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="text-accent-orange font-mono text-sm uppercase tracking-widest italic">
                // Professional Path
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Frontend Developer focused on building modern, responsive web
                applications with clean UI and great performance.
              </p>
            </div>

            <div className="space-y-6 text-gray-400 text-base leading-relaxed">
              <p>
                Based in Germany. Dedicated to turning ideas into creative
                solutions. I specialize in creating seamless and intuitive user
                experiences.
              </p>
              <p>
                My approach focuses on creating scalable, high-performing
                solutions tailored to both user needs and business objectives.
              </p>
            </div>
          </div>
        </div>

        {/* Bild-Container (Rechts) */}
        <div className="w-full lg:w-1/3 order-1 lg:order-2">
          <div className="relative aspect-[3/4] overflow-hidden rounded-sm grayscale hover:grayscale-0 transition-all duration-500 border border-gray-800">
            <img
              src="/src/assets/joshua.jpg"
              alt="Joshua Väth"
              className="w-full h-full object-cover"
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
