import {useEffect, useState} from "react";

type Theme = "light" | "dark" | "system";

export const useTheme = () => {
  const getInitialTheme = (): Theme => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme && ["light", "dark", "system"].includes(savedTheme)) {
      return savedTheme as Theme;
    }
    return "system";
  };

  const [theme, setTheme] = useState<Theme>(getInitialTheme());

  const setMode = (mode: Theme) => {
    localStorage.setItem("theme", mode);
    setTheme(mode);
  };

  const toggleTheme = (theme: Theme) => {
    setMode(theme);
  };

  useEffect(() => {
    let className = theme;
    if (theme === "system") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const prefersDark = mediaQuery.matches;
      className = prefersDark ? "dark" : "light";
    }

    document.body.classList.remove("light", "dark");
    document.body.classList.add(className);

    if (theme !== "system") {
      localStorage.setItem("theme", className);
    }
  }, [theme]);

  return { theme, toggleTheme };
}