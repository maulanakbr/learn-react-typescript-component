import { PersonProps } from "./Person.types";

export const Person: React.FC<PersonProps> = ({ name }: PersonProps) => {
  return (
    <div className="mb-2">
      <h3 className="text-center">
        {name.first} {name.last}
      </h3>
    </div>
  );
};
