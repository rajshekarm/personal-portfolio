import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext)!;

  const navLinks = ["Home","About", "Projects", "Skills", ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 shadow-md backdrop-blur-md bg-opacity-80 px-6 py-4 ${
        theme === "dark"
          ? "bg-black/90 text-[#EAEAEA]"
          : "bg-black/90 text-[#EAEAEA]"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-2">
        {/* 🪶 Logo */}
        <h1 className="text-xl sm:text-2xl font-bold text-[#D1D5DB] hover:text-[#F3F4F6] transition-all duration-300">
          R J
        </h1>

        {/* 💻 Desktop Navigation */}
        <ul className="hidden md:flex gap-8 text-[#B0B8C1] font-medium">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="hover:text-[#E5E7EB] transition-colors duration-200"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* ☀️ / 🌙 Theme Toggle */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="text-xl text-[#B0B8C1] hover:text-[#E5E7EB] transition-colors duration-300"
          >
            {theme === "dark" ? "🌙" : "☀️"}
          </button>

          {/* 📱 Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setOpen(!open)}
              className="text-[#EAEAEA] text-2xl hover:text-[#E5E7EB] transition-colors"
            >
              {open ? "✖" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* 📱 Mobile Dropdown Menu */}
      {open && (
        <div className="md:hidden bg-[#0F1115]/95 px-6 pb-4 border-t border-[#1F2428]">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="block py-2 text-[#B0B8C1] hover:text-[#E5E7EB] transition-colors duration-200"
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
