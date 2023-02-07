type HeadingProps = {
  children: string;
};

export const Heading: React.FC<HeadingProps> = ({ children }: HeadingProps) => {
  return (
    <div className="mb-2">
      <h3 className="text-center">{children}</h3>
    </div>
  );
};
