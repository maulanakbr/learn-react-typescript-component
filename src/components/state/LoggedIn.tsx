import { useState } from "react";

export const LoggedIn: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
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
      <div>User is: {isLoggedIn ? "logged in" : "logged out"} </div>
    </div>
  );
};
