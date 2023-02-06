type ButtonProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};

export const Button = ({ handleClick }: ButtonProps) => {
  return (
    <div className="mb-2 flex justify-center">
      <button
        className="h-[2.5rem] w-[4rem] rounded-xl bg-blue-600 p-2 text-white hover:bg-blue-400"
        onClick={(event) => handleClick(event, 1)}
      >
        Click
      </button>
    </div>
  );
};
