import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const names = [
    "Alice",
    "Bob",
    "Charlie",
    "David",
    "Eve",
    "Frank",
    "Grace",
    "Henry",
    "Henry",
    "Ivy",
    "Jack",
  ];

  return (
    <>
      <div className="slide-container element">
        {[
          [...Array(2)].map((arr) => (
            <div key={arr} className="slide-content">
              {names.map((name, index) => (
                <div key={index} className="bdr names-slide">
                  <h1 className="name">{name}</h1>
                </div>
              ))}
            </div>
          )),
        ]}
      </div>
    </>
  );
}

export default App;
