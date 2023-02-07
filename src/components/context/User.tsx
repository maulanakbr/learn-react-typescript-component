import { useContext } from "react";
import { UserContext } from "./UserContext";

export const User: React.FC = () => {
  const userContext = useContext(UserContext);

  const handleLogin = () => {
    userContext.setUser({
      name: "Maulana",
      email: "maulana@example.com",
    });
  };

  const handleLogout = () => {
    userContext.setUser(null);
  };

  return (
    <div className="mb-2 flex justify-center">
      <button
        className="mr-2 h-[2.5rem] w-[4rem] rounded-xl bg-blue-600 p-2 text-white hover:bg-blue-400"
        onClick={handleLogin}
      >
        Login
      </button>
      <button
        className="mr-2 h-[2.5rem] w-[4rem] rounded-xl bg-blue-600 p-2 text-white hover:bg-blue-400"
        onClick={handleLogout}
      >
        Logout
      </button>
      <div className="flex-col">
        <div>User name is: {userContext.user?.name} </div>
        <div>User email is: {userContext.user?.email} </div>
      </div>
    </div>
  );
};
