import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import logo from "../panda.jpg";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const html = document.documentElement;
    const element2 = ref.current;
    html.classList.toggle("dark", isDarkMode);
    element2.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div>
      <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <img src={logo} alt="panda" className="h-12 w-12 mr-2 animate-spin" />
          <span className="font-semibold text-xl tracking-tight">
            Pamboo Challenge
          </span>
        </div>
        <div className="flex items-center justify-center my-auto">
          <button
            type="button"
            onClick={() => toggleDarkMode()}
            className="flex items-center justify-center px-4 py-2 rounded-md text-white bg-gray-800 hover:bg-gray-700"
          >
            <FontAwesomeIcon
              icon={isDarkMode ? faSun : faMoon}
              className="fas fa-adjust mr-2"
            />
            {isDarkMode ? "Modo claro" : "Modo oscuro"}
          </button>
        </div>
      </nav>
      <h2
        ref={ref}
        className="my-16 text-3xl font-bold text-center text-gray-900 md:text-5xl lg:text-6xl "
      >
        Lista de {" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          tareas {" "}
        </span>
      </h2>
    </div>
  );
};

export default Navbar;
