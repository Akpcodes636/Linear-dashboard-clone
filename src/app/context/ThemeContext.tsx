"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

type ThemeContextType = {
  isDarkMode: boolean;
  toggleTheme: (mode?: "light" | "dark") => void;
};


export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Load theme on first mount
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    
    const dark = stored ? stored === "dark" : prefersDark;
    setIsDarkMode(dark);
    document.documentElement.classList.remove("light", "dark");
    const newMode = dark ? "dark" : "light";
    document.documentElement.classList.add(newMode);
    document.documentElement.setAttribute('data-theme', newMode);
  }, []);

  const toggleTheme = (mode?: "light" | "dark") => {
    const newMode = mode || (isDarkMode ? "light" : "dark");
    const isDark = newMode === "dark";
    
    setIsDarkMode(isDark);
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(newMode);
    
    document.documentElement.setAttribute('data-theme', newMode);
    
    localStorage.setItem("theme", newMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};