type ListProps<T> = {
  items: T[];
  onClick: (value: T) => void;
};

export const List = <T extends {}>({ items, onClick }: ListProps<T>) => {
  return (
    <div className="mb-2">
      <ul>
        <h3 className="mb-2 text-center">List of items: </h3>
        {items.map((item, index) => (
          <li
            className="mb-2 cursor-pointer text-center"
            key={index}
            onClick={() => onClick(item)}
          >
            {JSON.stringify(item)}
          </li>
        ))}
      </ul>
    </div>
  );
};
