import { CSSProperties } from "react";

type ContainerProps = {
  styles: CSSProperties;
};

export const Container = ({ styles }: ContainerProps) => {
  return (
    <div className="mb-2 flex items-center justify-center">
      <div style={styles}>Text content goes here</div>
    </div>
  );
};
