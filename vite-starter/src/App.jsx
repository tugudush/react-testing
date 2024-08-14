import { useState } from "react";
import "./App.css";

function App() {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [buttonColor, setButtonColor] = useState("medium-violet-red");
  const [previousColor, setPreviousColor] = useState(buttonColor);

  function handleButtonClick() {
    setButtonColor((prevColor) =>
      prevColor === "medium-violet-red" ? "midnight-blue" : "medium-violet-red"
    );
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
        Change to {buttonColor === "medium-violet-red" ? "blue" : "red"}
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
