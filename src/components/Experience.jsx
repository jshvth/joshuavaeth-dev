import React from "react";

const Experience = () => {
  const experiences = [
    {
      title: "Master School Institute of Technology",
      role: "Software Engineering - Fullstack",
      period: "Feb 2025 - Present",
      current: true,
    },
    {
      title: "Atomos GmbH",
      role: "Technical Support Engineer",
      period: "Apr 2021 - Feb 2025",
      current: false,
    },
    {
      title: "University of West London",
      role: "Bachelor of Arts (Hons) Photography",
      period: "Feb 2020 - Feb 2021",
      current: false,
    },
  ];

  return (
    <section
      id="experience"
      className="pt-16 pb-8 px-10 md:px-24 bg-dark-bg border-t border-white/5"
    >
      {" "}
      {/* pt-16 für oben, pb-8 für unten um Stack-Vorschau zu minimieren */}
      <div className="max-w-7xl mx-auto">
        {/* Header-Bereich - Abstand zu den Punkten vergrößert */}
        <div className="mb-20 text-center">
          <span className="text-accent-orange font-mono text-xs uppercase tracking-[0.5em] mb-2 block">
            History
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase italic opacity-90 leading-none">
            Experience
          </h2>
        </div>

        {/* Experience Liste */}
        <div className="space-y-1">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group relative flex flex-col md:flex-row justify-between items-start md:items-center py-10 border-b border-white/5 hover:border-accent-orange/30 transition-all duration-500"
            >
              {/* Zeitraum */}
              <div className="mb-2 md:mb-0 md:w-1/4">
                <span
                  className={`font-mono text-sm tracking-widest ${exp.current ? "text-accent-orange" : "text-gray-500"}`}
                >
                  {exp.period}
                </span>
              </div>

              {/* Job Info */}
              <div className="md:w-2/4">
                <h3 className="text-xl md:text-3xl font-bold text-white group-hover:text-accent-orange transition-colors duration-300">
                  {exp.title}
                </h3>
                <p className="text-gray-500 font-light text-base md:text-lg mt-1 uppercase tracking-wider">
                  {exp.role}
                </p>
              </div>

              {/* Status-Punkt */}
              <div className="hidden md:flex md:w-1/4 justify-end">
                {exp.current && (
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-orange opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-accent-orange"></span>
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
