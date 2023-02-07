export type ProfileProps = {
  name: string;
};

export const Profile = ({ name }: ProfileProps) => {
  return (
    <div className="mb-2 flex justify-center">
      Private Profile Component. Name is {name}
    </div>
  );
};
