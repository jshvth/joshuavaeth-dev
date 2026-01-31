import React from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiPython,
  SiSqlalchemy,
  SiMysql,
  SiSqlite,
  SiReact,
  SiFlask,
  SiNodedotjs,
  SiGit,
  SiGithub,
  SiTailwindcss,
  SiPostman,
} from "react-icons/si";
import { TbApi, TbHierarchy2 } from "react-icons/tb";

const Stack = () => {
  const stackData = [
    {
      category: "Frontend",
      skills: [
        { name: "HTML", icon: <SiHtml5 className="text-[#E34F26]" /> },
        { name: "CSS3", icon: <SiCss3 className="text-[#1572B6]" /> },
        { name: "JS", icon: <SiJavascript className="text-[#F7DF1E]" /> },
        { name: "React", icon: <SiReact className="text-[#61DAFB]" /> },
        {
          name: "Tailwind",
          icon: <SiTailwindcss className="text-[#06B6D4]" />,
        },
      ],
    },
    {
      category: "Backend",
      skills: [
        { name: "Python", icon: <SiPython className="text-[#3776AB]" /> },
        { name: "Node", icon: <SiNodedotjs className="text-[#339933]" /> },
        { name: "Flask", icon: <SiFlask className="text-white" /> },
        { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" /> },
        { name: "SQLite", icon: <SiSqlite className="text-[#003B57]" /> },
        { name: "API", icon: <TbApi className="text-[#00FF00]" /> },
      ],
    },
    {
      category: "Tools",
      skills: [
        { name: "Git", icon: <SiGit className="text-[#F05032]" /> },
        { name: "GitHub", icon: <SiGithub className="text-white" /> },
        { name: "Postman", icon: <SiPostman className="text-[#FF6C37]" /> },
      ],
    },
  ];

  return (
    <section id="stack" className="py-16 px-6 md:px-24 bg-dark-bg">
      <div className="max-w-7xl mx-auto space-y-12 md:space-y-16">
        {stackData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row border-t border-white/10 pt-8 md:pt-10"
          >
            <div className="lg:w-1/4 mb-6 lg:mb-0">
              <h2 className="text-lg md:text-2xl font-light text-white tracking-[0.3em] uppercase">
                {item.category}
              </h2>
            </div>

            <div className="lg:w-3/4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-6 md:gap-x-10 gap-y-8 md:gap-y-12">
              {item.skills.map((skill, sIndex) => (
                <div
                  key={sIndex}
                  className="flex flex-col items-start gap-3 md:gap-4 group"
                >
                  <div className="text-3xl md:text-5xl transition-transform duration-300 group-hover:scale-110">
                    {skill.icon}
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-[1px] h-3 bg-accent-orange"></div>
                    <span className="text-gray-400 font-mono text-[9px] md:text-xs tracking-widest uppercase group-hover:text-white">
                      {skill.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stack;
