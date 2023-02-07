import { Login } from "./Login";
import { ProfileProps } from "./Profile";

type PrivateProps = {
  isLoggedIn: boolean;
  component: React.ComponentType<ProfileProps>;
};

export const Private: React.FC<PrivateProps> = ({
  isLoggedIn,
  component: Component,
}: PrivateProps) => {
  if (isLoggedIn) {
    return <Component name="Maulana" />;
  } else {
    return <Login />;
  }
};