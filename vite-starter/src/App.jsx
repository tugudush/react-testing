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
      <br />
      <input
        type="checkbox"
        id="disable-button-checkbox"
        defaultChecked={false}
      />
      <label htmlFor="disable-button-checkbox">Disable Button</label>
    </>
  );
}

export default App;
