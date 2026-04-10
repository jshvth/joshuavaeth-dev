import React from "react";
import { SiGithub } from "react-icons/si";
import { FiExternalLink } from "react-icons/fi";

const Projects = () => {
  const projects = [
    {
      title: "Manga Pulse",
      category: "AI-Native Web App",
      description: [
        "KI-gestützte Verwaltung von Manga-Kollektionen mit automatisiertem Release-Tracking.",
        "Integration von Jikan & AniList APIs für Echtzeit-Daten.",
        "Backend mit Supabase (Postgres & Auth) für Profile und Social-Features wie Follow/Search.",
        "Cron-Pipeline via Edge Functions & pg_cron scannt alle 3 Tage nach Updates.",
      ],
      tags: [
        "React",
        "Supabase",
        "PostgreSQL",
        "Edge Functions",
        "API Integration",
      ],
      github: "https://github.com/jshvth", // Link ggf. anpassen
      demo: null,
    },
    {
      title: "Plot-Weavers",
      category: "Collaborative Storytelling",
      description: [
        "Plattform für Manga-Storys mit verzweigten Narrativen und visueller Baum-Struktur.",
        "Full-Stack Entwicklung mit Flask, React und SQLAlchemy-Persistenz.",
        "Visueller Editor basierend auf React Flow und Dagre zur Darstellung von Story-Verläufen.",
        "Features: JWT-Auth, Image Uploads, Dark Mode und EN/DE Lokalisierung.",
      ],
      tags: ["Flask", "React", "SQLAlchemy", "React Flow", "Python"],
      github: "https://github.com/jshvth", // Link ggf. anpassen
      demo: null,
    },
    {
      title: "LumeaScope",
      category: "Coming Soon",
      description: [
        "Projekt befindet sich aktuell in der Konzeptionsphase.",
        "Fokus auf innovative Datenvisualisierung und User Experience.",
      ],
      tags: ["Next.js", "AI", "TypeScript"],
      github: null,
      demo: null,
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 px-6 md:px-24 bg-dark-bg border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <span className="text-accent-orange font-mono text-xs uppercase tracking-[0.5em] mb-2 block">
            Selected Work
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase italic opacity-90 leading-none">
            Projects
          </h2>
        </div>

        <div className="flex flex-col gap-32">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row gap-12 items-start ${
                project.title === "LumeaScope" ? "opacity-50" : ""
              }`}
            >
              {/* Projekt-Info */}
              <div className="lg:w-1/2 space-y-6">
                <div>
                  <span className="text-accent-orange font-mono text-[10px] uppercase tracking-[0.3em]">
                    {project.category}
                  </span>
                  <h3 className="text-4xl md:text-6xl font-bold text-white mt-2 tracking-tight group-hover:text-accent-orange transition-colors">
                    {project.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tIndex) => (
                    <span
                      key={tIndex}
                      className="text-gray-500 font-mono text-[9px] md:text-[10px] uppercase tracking-widest border border-white/10 px-3 py-1 bg-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <ul className="space-y-4 pt-4">
                  {project.description.map((point, pIndex) => (
                    <li
                      key={pIndex}
                      className="text-gray-400 flex items-start gap-4 text-sm md:text-base leading-relaxed"
                    >
                      <span className="text-accent-orange mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0"></span>
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="flex gap-8 pt-6">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-white hover:text-accent-orange transition-all flex items-center gap-2 uppercase text-[10px] tracking-[0.2em] font-bold border-b border-accent-orange/0 hover:border-accent-orange pb-1"
                    >
                      <SiGithub size={18} /> GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="text-white hover:text-accent-orange transition-all flex items-center gap-2 uppercase text-[10px] tracking-[0.2em] font-bold border-b border-accent-orange/0 hover:border-accent-orange pb-1"
                    >
                      <FiExternalLink size={18} /> Live Demo
                    </a>
                  )}
                </div>
              </div>

              {/* Visueller Platzhalter */}
              <div className="lg:w-1/2 w-full aspect-video bg-[#0a0a0a] border border-white/5 relative group overflow-hidden rounded-sm">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="flex items-center justify-center h-full">
                  <span className="text-white/10 font-black text-8xl md:text-9xl tracking-tighter uppercase italic select-none">
                    {project.title.charAt(0)}
                  </span>
                </div>
                {/* Overlay für "Coming Soon" */}
                {project.title === "LumeaScope" && (
                  <div className="absolute inset-0 flex items-center justify-center bg-dark-bg/40 backdrop-blur-[2px]">
                    <span className="text-white font-mono text-[10px] uppercase tracking-[0.5em] border border-white/20 px-4 py-2">
                      In Development
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
