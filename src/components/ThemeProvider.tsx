import React, { useState, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

useEffect(() => {
  console.log("Theme effect triggered");
  // if (theme === "dark") {
  //   document.documentElement.classList.add("dark")
  // } else {
  //   document.documentElement.classList.remove("dark")
  // }
  // localStorage.setItem("theme", theme)
}, [theme])

  const toggleTheme = () =>
    setTheme(prev => (prev === "dark" ? "light" : "dark"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
