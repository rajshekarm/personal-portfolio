import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext)!;

  const navLinks = ["Home", "About", "Projects", "Skills", "Contact"];

  return (

 <nav
      className={`fixed top-0 left-0 w-full z-50 shadow-md backdrop-blur-md bg-opacity-80 px-6 py-4 ${
        theme === "dark" ? "bg-black text-white" : "bg-black text-white"
      }`}
    >
<div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <h1 className="text-xl sm:text-2xl font-bold text-purple-500">R J</h1>
        
        {/* Desktop nav */}
        <ul className="hidden md:flex gap-8 text-white">
          {navLinks.map(link => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="hover:text-purple-400 transition"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
         {/* Theme toggling */}
          <div className="flex items-center gap-4">
            <ul className="hidden md:flex gap-8 text-white">
              ...
            </ul>
            <button onClick={toggleTheme} className="text-xl text-black dark:text-white">
              {theme === "dark" ? "🌙" : "☀️"}
            </button>
          </div>
        {/* Mobile hamburger */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} className="text-white text-2xl">
            {open ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-black bg-opacity-95 px-6 pb-4">
          {navLinks.map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="block py-2 text-white hover:text-purple-400"
              onClick={() => setOpen(false)}
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
