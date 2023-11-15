import { useEffect, useState } from "preact/hooks";
import type { FunctionalComponent } from "preact";

const ThemeToggle: FunctionalComponent = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof localStorage !== "undefined") {
      return localStorage.getItem("theme") ?? "light";
    } else {
      // Handle the server-side rendering case or when localStorage is not available.
      return "light";
    }
  });

  const handleClick = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    if (typeof localStorage !== "undefined") {
      localStorage.setItem("theme", theme);
    }

    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <button onClick={handleClick}>{theme === "light" ? "🌙" : "🌞"}</button>
  );
};

export default ThemeToggle;
