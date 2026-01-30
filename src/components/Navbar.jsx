import React, { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  // Funktion zum Schließen des Menüs beim Klick auf einen Link oder das Logo
  const closeNav = () => {
    setNav(false);
  };

  const menuItems = [
    { id: 1, text: "Home", link: "#home" },
    { id: 2, text: "About", link: "#about" },
    { id: 3, text: "Experience", link: "#experience" },
    { id: 4, text: "Stack", link: "#stack" },
    { id: 5, text: "Contact", link: "#contact" },
  ];

  return (
    <nav className="fixed w-full h-20 flex justify-between items-center px-10 z-[100]">
      {/* Logo: Klick führt zurück zum Home/Hero-Bereich */}
      <div className="text-white font-bold tracking-widest cursor-pointer hover:text-accent-orange transition-colors duration-300">
        <a href="#home" onClick={closeNav}>
          JV
        </a>
      </div>

      {/* Burger Icon */}
      <div onClick={handleNav} className="z-[110] cursor-pointer text-white">
        {nav ? <HiX size={35} /> : <HiMenuAlt3 size={35} />}
      </div>

      {/* Fullscreen Menu Overlay */}
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-full h-screen bg-dark-bg/95 backdrop-blur-md flex flex-col justify-center items-center duration-500 ease-in-out"
            : "fixed top-[-100%] left-0 w-full h-screen duration-500 ease-in-out"
        }
      >
        <ul className="flex flex-col items-center">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className="p-4 text-4xl hover:text-accent-orange duration-300 cursor-pointer uppercase font-bold tracking-tighter"
            >
              <a onClick={closeNav} href={item.link}>
                {item.text}
              </a>
            </li>
          ))}
        </ul>

        {/* Social Links im Menü */}
        <div className="absolute bottom-10 flex gap-8 text-gray-400">
          <a
            href="https://www.linkedin.com/in/joshuavaeth/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white cursor-pointer uppercase text-[10px] tracking-widest"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/jshvth"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white cursor-pointer uppercase text-[10px] tracking-widest"
          >
            GitHub
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
