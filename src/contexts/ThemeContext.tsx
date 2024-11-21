import React, { createContext, useContext, useState, useEffect } from 'react';

type AccentColor = 'blue' | 'purple' | 'green' | 'orange' | 'red';

type ThemeContextType = {
  appearance: 'light' | 'dark';
  setAppearance: (mode: 'light' | 'dark') => void;
  accent: AccentColor;
  setAccent: (color: AccentColor) => void;
};

const THEME_KEY = 'theme-preference';
const ACCENT_KEY = 'accent-preference';

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [appearance, setAppearance] = useState<'light' | 'dark'>(() => {
    const saved = localStorage.getItem(THEME_KEY);
    return (saved as 'light' | 'dark') || 'dark';
  });

  const [accent, setAccent] = useState<AccentColor>(() => {
    const saved = localStorage.getItem(ACCENT_KEY);
    return (saved as AccentColor) || 'blue';
  });

  useEffect(() => {
    localStorage.setItem(THEME_KEY, appearance);
  }, [appearance]);

  useEffect(() => {
    localStorage.setItem(ACCENT_KEY, accent);
  }, [accent]);

  return (
    <ThemeContext.Provider value={{ appearance, setAppearance, accent, setAccent }}>
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