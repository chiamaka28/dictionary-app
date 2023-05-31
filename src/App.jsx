import "./App.css";
import { useState } from "react";
import Main from "./components/Main";
import Header from "./components/Header";

function App() {
  const [text, setText] = useState("");
  return (
    <div className="my-container">
      <Header setText={setText} text={text} />
      <Main text={text} />
    </div>
  );
}

export default App;
