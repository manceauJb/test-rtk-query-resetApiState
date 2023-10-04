import { useState } from "react";
import Pokemon from "./components/Pokemon";
import ResetApi from "./components/ResetApi";
import "./styles.css";

export default function App() {
  const [open, setOpen] = useState(true);

  const handleRerender = () => {
    setOpen(false);
    setTimeout(() => {
      setOpen(true);
    }, 1000);
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>

      <button onClick={handleRerender}>Rerender App</button>

      {open && <Pokemon name="bulbasaur" />}

      <ResetApi />
    </div>
  );
}
