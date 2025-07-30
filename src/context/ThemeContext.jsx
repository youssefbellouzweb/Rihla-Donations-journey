// src/context/ThemeContext.jsx

import React, { createContext, useState, useEffect, useContext } from 'react';

// Create the context
const ThemeContext = createContext();

// Create a custom hook to use the context easily
export const useTheme = () => useContext(ThemeContext);

// Create the provider component
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    // Check localStorage for a saved theme, otherwise default to dark
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme : 'dark';
  });

  // Effect to apply the theme class to the root element
  useEffect(() => {
    const root = window.document.documentElement;
    
    root.classList.remove('light', 'dark');
    root.classList.add(theme);

    // Save the theme choice to localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const value = {
    theme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};