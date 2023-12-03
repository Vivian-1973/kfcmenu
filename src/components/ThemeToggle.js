// components/ThemeToggle.js
import React from 'react';
import { FaRegMoon, FaRegSun } from 'react-icons/fa';
import { useTheme } from 'next-themes';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className={`text-${theme === 'light' ? 'white' : 'black'} bg-${theme === 'light' ? 'black' : 'white'} py-2 px-4 rounded-md hover:bg-opacity-80 focus:outline-none`}
    >
      {theme === 'light' ? <FaRegMoon className="mr-2" /> : <FaRegSun className="mr-2" />}
    </button>
  );
};

export default ThemeToggle;
