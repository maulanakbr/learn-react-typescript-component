type GreetProps = {
  name: string;
  messageCount?: number;
  isLoggedIn: boolean;
};

export const Greet = ({ name, messageCount = 0, isLoggedIn }: GreetProps) => {
  return (
    <div className="mb-2">
      <h4 className="text-center">
        {isLoggedIn && messageCount > 0
          ? `Welcome ${name}! You have ${messageCount} messages`
          : isLoggedIn && messageCount === 0
          ? `Welcome ${name}! You don't have any messages`
          : "Welcome Guest"}
      </h4>
    </div>
  );
};
