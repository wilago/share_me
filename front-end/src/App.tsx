import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-slate-600 h-screen">
      <button className="bg-blue-600">action</button>
    </div>
  );
}

export default App;
