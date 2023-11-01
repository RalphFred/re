import { BrowserRouter, Routes, Route } from "react-router-dom";
import Content from "./components/Content";
import Country from "./components/Country";

import moon from "./assets/moon.svg";
import sun from "./assets/sun.svg";

import { useEffect, useState } from "react";

export default function App() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  const toggleTheme = () => {
    setTheme(() => (theme === "dark" ? "light" : "dark"));
  };

  const element = document.documentElement;

  useEffect(() => {
    switch (theme) {
      case "dark":
        element.classList.add("dark");
        break;
      case "light":
        element.classList.remove("dark");
        break;
      default:
        break;
    }
  }, [theme]);

  return (
    <BrowserRouter>
      <div className="font-nunito">
        <div className="p-5 lg:px-12 py-8 dark:bg-dark-blue dark:text-white bg-white text-black duration-300 flex justify-between">
          <h1 className="text-lg lg:text-2xl font-bold">Where in the world?</h1>
          <div onClick={toggleTheme} className="text-base lg:text-xl cursor-pointer">
            {theme === "light" ? (
              <div className="flex items-center">
                <img src={moon} alt="dark mode" />
                <div className="ml-1">Dark Mode</div>
              </div>
            ) : (
              <div className="flex items-center">
                <img src={sun} alt="light mode" />
                <div className="ml-1">Light Mode</div>
              </div>
            )}
          </div>
        </div>
          <Routes>
            <Route exact path="/" element={<Content />}/>
            <Route path="/name/:name" element={<Country />} />
          </Routes>
      </div>
    </BrowserRouter>
  );
}
