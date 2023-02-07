type ContainerProps = {
  styles: React.CSSProperties;
};

export const Container: React.FC<ContainerProps> = ({
  styles,
}: ContainerProps) => {
  return (
    <div className="mb-2 flex items-center justify-center">
      <div style={styles}>Text content goes here</div>
    </div>
  );
};
