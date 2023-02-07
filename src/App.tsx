import { Button } from "./components/Button";
import { Container } from "./components/Container";
import { Greet } from "./components/Greet";
import { Heading } from "./components/Heading";
import { Input } from "./components/Input";
import { Julia } from "./components/Julia";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { Status } from "./components/Status";
import { Counter } from "./components/state/Counter";
import { LoggedIn } from "./components/state/LoggedIn";
// import { User } from "./components/state/User";
import { User } from "./components/context/User";
import { ThemeContextProvider } from "./components/context/ThemeContext";
import { Box } from "./components/context/Box";
import { UserContextProvider } from "./components/context/UserContext";
import { MutableRef } from "./components/ref/MutableRef";
import { Private } from "./components/auth/Private";
import { Profile } from "./components/auth/Profile";
import { List } from "./components/generics/List";
import { RandomNumber } from "./components/restriction/RandomNumber";
import { Toast } from "./components/templateliterals/Toast";

function App() {
  const name = {
    first: "Maulana",
    last: "Akbar",
  };

  const personList = [
    { first: "Roy", last: "Adams" },
    { first: "Bruce", last: "Poch" },
    { first: "Tony", last: "Williams" },
  ];

  return (
    <div className="mx-auto my-2">
      <Greet name="Maulana Akbar" messageCount={25} isLoggedIn={false} />
      <Person name={name} />
      <PersonList names={personList} />
      <Status status="error" />
      <Heading>Acceptable</Heading>
      <Julia>
        <Heading>This is Julia</Heading>
      </Julia>
      <Greet name="Julia Alban" isLoggedIn={true} />
      <Greet name="Daniel Carabao" messageCount={12} isLoggedIn={true} />
      <Button
        handleClick={(event, id) => {
          console.log("Button clicked", event, id);
        }}
      />
      <Input
        value=""
        handleChange={(event) => {
          console.log(event);
        }}
      />
      <Container
        styles={{
          border: "1px solid black",
          width: "20rem",
          textAlign: "center",
          padding: 2,
        }}
      />
      <LoggedIn />
      {/* <User /> */}
      <Counter />
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
      <UserContextProvider>
        <User />
      </UserContextProvider>
      <MutableRef />
      <Private isLoggedIn={false} component={Profile} />
      <List
        items={["Book", "Pen", "Key"]}
        onClick={(item) => {
          console.log(item);
        }}
      />
      <List
        items={[
          { first: "Roy", last: "Adams" },
          { first: "Bruce", last: "Poch" },
          { first: "Tony", last: "Williams" },
        ]}
        onClick={(item) => {
          console.log(item);
        }}
      />
      <RandomNumber value={10} isPositive />
      <Toast position="center" />
    </div>
  );
}

export default App;
