type PersonProps = {
  name: {
    first: string;
    last: string;
  };
};

export const Person = ({ name }: PersonProps) => {
  return (
    <div className="mb-2">
      <h3 className="text-center">
        {name.first} {name.last}
      </h3>
    </div>
  );
};
