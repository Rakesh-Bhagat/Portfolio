"use client";

import { ThemeProvider, ThemeProviderProps } from "next-themes";

export function Providers({ children }: ThemeProviderProps) {
  return (
    <ThemeProvider attribute={"class"} defaultTheme="light" enableSystem={false} disableTransitionOnChange>
      {children}{" "}
    </ThemeProvider>
  );
}
