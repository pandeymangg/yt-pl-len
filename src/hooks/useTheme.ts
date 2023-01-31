import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";
import { useThemeDetector } from "./useThemeDetector";
import { isSSR } from "../utils/isSSR";

export const useTheme = () => {
  const userSystemTheme = useThemeDetector();
  const [theme, setTheme] = useLocalStorage("theme", userSystemTheme);

  useEffect(() => {
    if (isSSR) {
      return;
    }

    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
  }, [theme]);

  return { theme, setTheme };
};
