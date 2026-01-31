import React, { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);
  const closeNav = () => setNav(false);

  const menuItems = [
    { id: 1, text: "Home", link: "#home" },
    { id: 2, text: "About", link: "#about" },
    { id: 3, text: "Experience", link: "#experience" },
    { id: 4, text: "Stack", link: "#stack" },
    { id: 5, text: "Contact", link: "#contact" },
  ];

  return (
    <nav className="fixed w-full h-16 md:h-20 flex justify-between items-center px-6 md:px-10 z-[100] bg-dark-bg/80 backdrop-blur-md">
      <div className="text-white font-bold tracking-widest cursor-pointer hover:text-accent-orange transition-colors">
        <a href="#home" onClick={closeNav}>
          JV
        </a>
      </div>

      <div onClick={handleNav} className="z-[110] cursor-pointer text-white">
        {nav ? <HiX size={30} /> : <HiMenuAlt3 size={30} />}
      </div>

      <div
        className={`fixed left-0 top-0 w-full h-screen bg-dark-bg/98 backdrop-blur-xl flex flex-col justify-center items-center transition-all duration-500 ease-in-out ${nav ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}
      >
        <ul className="flex flex-col items-center">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className="p-4 text-3xl md:text-5xl hover:text-accent-orange duration-300 cursor-pointer uppercase font-bold tracking-tighter"
            >
              <a onClick={closeNav} href={item.link}>
                {item.text}
              </a>
            </li>
          ))}
        </ul>

        <div className="absolute bottom-10 flex gap-8 text-gray-400">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white text-[10px] tracking-widest uppercase"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white text-[10px] tracking-widest uppercase"
          >
            GitHub
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
