import ListGroup from "./Components/ListGroup";

function App() {
  let items = ["New York", "San Francisco", "Lonon", "Paris", "Tokyo"];
  return (
    <div>
      <ListGroup items={items} heading="Cities" />
    </div>
  );
}

export default App;
