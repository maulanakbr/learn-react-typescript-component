import { useEffect, useRef } from "react";

export const DomRef = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className="mb-2 flex justify-center">
      <input
        className="h-[2.5rem] w-[12rem] border p-2 focus:outline-none"
        type="text"
        placeholder="Fill your input"
        ref={inputRef}
      />
    </div>
  );
};
