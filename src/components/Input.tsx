import { ChangeEvent } from "react";

type InputProps = {
  value: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export const Input = ({ value }: InputProps) => {
  const handleInputChange = (event: ChangeEvent<HTMLElement>) => {
    console.log(event);
  };

  return (
    <div className="mb-2 flex justify-center">
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
