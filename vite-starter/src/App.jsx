import { useState } from "react";
import "./App.css";

function App() {
  const [buttonColor, setButtonColor] = useState("red");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [previousColor, setPreviousColor] = useState(buttonColor);

  function handleButtonClick() {
    setButtonColor((prevColor) => (prevColor === "red" ? "blue" : "red"));
  }

  function handleCheckboxChange(event) {
    if (event.target.checked) {
      setPreviousColor(buttonColor);
      setButtonColor("gray");
    } else {
      setButtonColor(previousColor);
    }
    setIsButtonDisabled(event.target.checked);
  }

  return (
    <>
      <button
        className={buttonColor}
        onClick={handleButtonClick}
        disabled={isButtonDisabled}
      >
        Change to {buttonColor === "red" ? "blue" : "red"}
      </button>
      <br />
      <input
        type="checkbox"
        id="disable-button-checkbox"
        defaultChecked={false}
        onChange={handleCheckboxChange}
      />
      <label htmlFor="disable-button-checkbox">Disable Button</label>
    </>
  );
}

export default App;
