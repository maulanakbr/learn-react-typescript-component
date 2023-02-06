type InputProps = {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input = ({ value }: InputProps) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLElement>) => {
    console.log(event);
  };

  return (
    <div className="flex justify-center">
      <input
        className="h-[2.5rem] w-[12rem] border p-2 focus:outline-none"
        type="text"
        placeholder="Fill your input"
        value={value}
        onChange={handleInputChange}
      />
    </div>
  );
};
