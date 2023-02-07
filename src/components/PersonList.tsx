import { Name } from "./Person.types";

type PersonListProps = {
  names: Name[];
};

export const PersonList: React.FC<PersonListProps> = ({
  names,
}: PersonListProps) => {
  return (
    <div className="mb-2">
      <ul>
        <h3 className="mb-2 text-center">List:</h3>
        {names.map((name) => (
          <li className="mb-2 text-center" key={name.first}>
            {name.first} {name.last}
          </li>
        ))}
      </ul>
    </div>
  );
};
