import { Button } from "./components/Button";
import { Greet } from "./components/Greet";
import { Heading } from "./components/Heading";
import { Input } from "./components/Input";
import { Julia } from "./components/Julia";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { Status } from "./components/Status";

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
    <div className="max-w- mx-auto my-2">
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
    </div>
  );
}

export default App;
