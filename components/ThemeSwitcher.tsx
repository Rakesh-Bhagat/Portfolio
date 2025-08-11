"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Avoid hydration mismatch: render nothing until mounted
  if (!mounted) return null;

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button onClick={toggleTheme}>
      {theme === "dark" ? (
        <Sun
          width={20}
          height={20}
          className="text-yellow-400 hover:text-yellow-600 cursor-pointer"
        />
      ) : (
        <Moon
          width={20}
          height={20}
          className="text-blue-400 hover:text-blue-800 cursor-pointer"
        />
      )}
    </button>
  );
};

export default ThemeSwitcher;
