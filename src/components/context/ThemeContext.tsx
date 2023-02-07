import { ReactNode, createContext } from "react";
import { theme } from "./theme";

type ThemeContextProvideProps = {
  children: ReactNode;
};

export const ThemeContext = createContext(theme);

export const ThemeContextProvider = ({
  children,
}: ThemeContextProvideProps) => {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
