import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

export const User = () => {
  //   const [user, setUser] = useState<AuthUser | null>(null);
  const [user, setUser] = useState<AuthUser>({} as AuthUser);

  const handleLogin = () => {
    setUser({
      name: "Maulana Akbar",
      email: "maulana@example.com",
    });
  };

  //   const handleLogout = () => {
  //     setUser(null);
  //   };

  return (
    <div className="mb-2 flex justify-center">
      <button
        className="mr-2 h-[2.5rem] w-[4rem] rounded-xl bg-blue-600 p-2 text-white hover:bg-blue-400"
        onClick={handleLogin}
      >
        Login
      </button>
      {/* <button
        className="mr-2 h-[2.5rem] w-[4rem] rounded-xl bg-blue-600 p-2 text-white hover:bg-blue-400"
        onClick={handleLogout}
      >
        Logout
      </button> */}
      <div className="flex-col">
        <div>User name is: {user?.name} </div>
        <div>User email is: {user?.email} </div>
      </div>
    </div>
  );
};
