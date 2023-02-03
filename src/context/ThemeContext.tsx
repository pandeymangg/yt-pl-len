import React, { createContext, useContext, useEffect } from "react";
import { isSSR } from "../utils/isSSR";
import { useThemeDetector } from "hooks/useThemeDetector";
import useLocalStorage from "hooks/useLocalStorage";
import type { TTheme } from "types/utils.types";

interface IThemeContext {
  theme: TTheme;
  setTheme: React.Dispatch<React.SetStateAction<TTheme>>;
}

export const ThemeContext = createContext<IThemeContext>({
  theme: "dark",
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
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

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
