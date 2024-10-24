import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Animation from "./Components/Animation";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Animation />
    </div>
  );
}

export default App;
