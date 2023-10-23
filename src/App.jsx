import Content from "./components/Content";

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
    <div className="p-4 lg:p-12 dark:bg-dark-gray dark:text-white bg-white text-black duration-200 font-nunito">
      <div className="flex justify-between">
        <h1 className="text-lg lg:text-2xl font-bold">Where in the world?</h1>
        <div onClick={toggleTheme} className="text-base lg:text-xl">
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
      <Content />
    </div>
  );
}
