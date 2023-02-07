import { useContext, useState } from "react";
import { ThemeContext } from "./ThemeContext";

export const Box: React.FC = () => {
  const [toggleTheme, setToggleTheme] = useState(false);
  const theme = useContext(ThemeContext);

  return (
    <div className="mb-2 flex items-center justify-center gap-2">
      {toggleTheme === false ? (
        <div
          className="flex h-[10rem] w-[15rem] max-w-lg items-center justify-center"
          style={{
            backgroundColor: theme.primary.main,
            color: theme.primary.text,
          }}
        >
          Theme
        </div>
      ) : (
        <div
          className="flex h-[10rem] w-[15rem] max-w-lg items-center justify-center"
          style={{
            backgroundColor: theme.secondary.main,
            color: theme.secondary.text,
          }}
        >
          Theme
        </div>
      )}
      <button
        className="h-[2.5rem] w-[6rem] rounded-xl bg-blue-600 p-2 text-white hover:bg-blue-400"
        onClick={() => {
          setToggleTheme(!toggleTheme);
        }}
      >
        Change
      </button>
    </div>
  );
};
