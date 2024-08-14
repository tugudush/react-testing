import { useState } from "react";
import { kebabCaseToTitleCase } from "./helpers";
import "./App.css";

function App() {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [buttonColor, setButtonColor] = useState("medium-violet-red");
  const [previousColor, setPreviousColor] = useState(buttonColor);

  const nextColorClass =
    buttonColor === "medium-violet-red" ? "midnight-blue" : "medium-violet-red";

  const nextColorTitleCase = kebabCaseToTitleCase(nextColorClass);

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
        Change to {nextColorTitleCase}
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
