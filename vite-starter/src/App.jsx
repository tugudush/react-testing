import { useState } from "react";
import "./App.css";

function App() {
  const [buttonColor, setButtonColor] = useState("red");

  function clickHandler() {
    setButtonColor((prevColor) => (prevColor === "red" ? "blue" : "red"));
  }

  return (
    <>
      <button className={buttonColor} onClick={clickHandler}>
        Change to {buttonColor === "red" ? "blue" : "red"}
      </button>
    </>
  );
}

export default App;
