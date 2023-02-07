import { createContext } from "react";
import { theme } from "./theme";

type ThemeContextProvideProps = {
  children: React.ReactNode;
};

export const ThemeContext = createContext(theme);

export const ThemeContextProvider: React.FC<ThemeContextProvideProps> = ({
  children,
}: ThemeContextProvideProps) => {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
