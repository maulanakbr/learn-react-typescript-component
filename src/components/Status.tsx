type StatusProps = {
  status: "loading" | "success" | "error";
};

export const Status = ({ status }: StatusProps) => {
  let message: string | undefined;

  if (status === "loading") {
    message = "Loading";
  } else if (status === "success") {
    message = "Your data is fetched succesfully";
  } else if (status === "error") {
    message = "There is an error! Please come back later";
  }

  return (
    <div className="mb-2">
      <h3 className="text-center">{message}</h3>
    </div>
  );
};
