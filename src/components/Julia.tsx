import { ReactNode } from "react";

type JuliaProps = {
  children: ReactNode;
};

export const Julia = ({ children }: JuliaProps) => {
  return <div>{children}</div>;
};
