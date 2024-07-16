import Like from "./Components/like";

function App() {
  return (
    <div>
      <Like onClick={() => console.log("Clicked")} />
    </div>
  );
}

export default App;
