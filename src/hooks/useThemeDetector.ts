import { useEffect, useState } from "react";
import { isSSR } from "../utils/isSSR";
import type { TTheme } from "../types/utils.types";

export const useThemeDetector = (): TTheme => {
  const getCurrentTheme = () => {
    if (isSSR) {
      return "dark";
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  };

  const [isDarkTheme, setIsDarkTheme] = useState(getCurrentTheme());

  const mqListener = (e: MediaQueryListEvent) => {
    setIsDarkTheme(e.matches ? "dark" : "light");
  };

  useEffect(() => {
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");

    darkThemeMq.addEventListener("change", mqListener);
    return () => darkThemeMq.removeEventListener("change", mqListener);
  }, []);

  return isDarkTheme ? "dark" : "light";
};
