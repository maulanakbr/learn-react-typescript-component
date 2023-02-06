type PersonListProps = {
  names: {
    first: string;
    last: string;
  }[];
};

export const PersonList = ({ names }: PersonListProps) => {
  return (
    <div className="mb-2">
      <ul>
        <h3 className="text-center mb-2">List:</h3>
        {names.map((name) => (
          <li className="text-center mb-2" key={name.first}>
            {name.first} {name.last}
          </li>
        ))}
      </ul>
    </div>
  );
};
