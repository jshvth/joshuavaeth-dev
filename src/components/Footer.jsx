import React from "react";
import { SiGithub, SiLinkedin, SiInstagram } from "react-icons/si";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="py-24 px-10 md:px-24 bg-dark-bg border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto text-center">
        {/* Kontakt-Label - Zentriert */}
        <div className="mb-6">
          <span className="text-accent-orange font-mono text-sm uppercase tracking-[0.6em]">
            Get in touch
          </span>
        </div>

        {/* Die E-Mail - Zentriert, weniger fett, eleganter */}
        <div className="group mb-20 inline-block">
          <a
            href="mailto:joshua.vaeth@yahoo.de"
            className="text-3xl md:text-5xl lg:text-6xl font-light text-white tracking-tight hover:text-accent-orange transition-all duration-500 block"
          >
            joshua.vaeth
            <span className="text-accent-orange font-medium">@</span>yahoo.de
          </a>
          {/* Zentrierter Unterstrich-Effekt */}
          <div className="h-[1px] w-0 group-hover:w-full bg-accent-orange transition-all duration-700 mx-auto mt-4"></div>
        </div>

        {/* Unterer Teil: Socials & Copyright */}
        <div className="flex flex-col items-center pt-12 border-t border-white/10 gap-10">
          {/* Social Links - Deutlicher & Präsenter */}
          <div className="flex flex-wrap justify-center gap-10">
            <a
              href="https://github.com/jshvth"
              target="_blank"
              rel="noreferrer"
              className="text-gray-300 hover:text-accent-orange transition-all flex items-center gap-3 uppercase text-xs tracking-[0.2em] font-medium"
            >
              <SiGithub size={20} />{" "}
              <span className="hidden sm:inline">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/joshuavaeth/"
              target="_blank"
              rel="noreferrer"
              className="text-gray-300 hover:text-accent-orange transition-all flex items-center gap-3 uppercase text-xs tracking-[0.2em] font-medium"
            >
              <SiLinkedin size={20} />{" "}
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
            <a
              href="https://www.instagram.com/_joshuavth"
              target="_blank"
              rel="noreferrer"
              className="text-gray-300 hover:text-accent-orange transition-all flex items-center gap-3 uppercase text-xs tracking-[0.2em] font-medium"
            >
              <SiInstagram size={20} />{" "}
              <span className="hidden sm:inline">Instagram</span>
            </a>
          </div>

          {/* Copyright - Besser sichtbar */}
          <div className="text-gray-400 font-mono text-[11px] uppercase tracking-[0.3em] opacity-80">
            © {currentYear} — Crafted by Joshua Väth
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
