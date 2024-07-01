import Calculator from "./smallerProjects/Calculator";
import PokeApi from "./smallerProjects/PokeApi";
import "./smallerProjectsCards.css";

export default function SmallerProjectsCards() {
  function openCalculator() {
    const calculatorDialog = document.getElementById(
      "calculator-app"
    ) as HTMLDialogElement;
    if (calculatorDialog) {
      calculatorDialog.close();
      calculatorDialog.style.display = "flex";
      calculatorDialog.showModal();
    }
  }
  function closeCalculator() {
    const calculatorDialog = document.getElementById(
      "calculator-app"
    ) as HTMLDialogElement;
    if (calculatorDialog) {
      calculatorDialog.style.display = "none";
      calculatorDialog.close();
    }
  }

  function openNotAPokedex() {
    const calculatorDialog = document.getElementById(
      "notAPokedex-app"
    ) as HTMLDialogElement;
    if (calculatorDialog) {
      calculatorDialog.close();
      calculatorDialog.style.display = "flex";
      calculatorDialog.showModal();
    }
  }
  function closeNotAPokedex() {
    const calculatorDialog = document.getElementById(
      "notAPokedex-app"
    ) as HTMLDialogElement;
    if (calculatorDialog) {
      calculatorDialog.style.display = "none";
      calculatorDialog.close();
    }
  }

  return (
    <div className="cards">
      {/* ***********************Dialog Elements**************************** */}
      <dialog id="calculator-app" className="dialog-container" /* open */>
        <h1 onClick={() => closeCalculator()}>
          <span className="close-x">X</span> Zamknij
        </h1>
        <Calculator />
      </dialog>
      {/* *********** */}
      <dialog id="notAPokedex-app" className="dialog-container" /* open */>
        <h1 onClick={() => closeNotAPokedex()}>
          <span className="close-x">X</span> Zamknij
        </h1>
        <PokeApi />
      </dialog>
      {/* ****************************************************************** */}
      <div className="sm-project-container" onClick={openCalculator}>
        <img
          className="sm-project-icon"
          src="calculator.svg"
          alt="calculator icon"
        ></img>
        <p>Calculator</p>
        <p>Calculator</p>
      </div>

      <div className="sm-project-container red-bg" onClick={openNotAPokedex}>
        <img
          className="sm-project-icon"
          src="calculator.svg"
          alt="calculator icon"
        ></img>
        <p>Not A Pokedex</p>
        <p>Not A Pokedex</p>
      </div>

      <div className="sm-project-container green-bg">
        <img
          className="sm-project-icon"
          src="calculator.svg"
          alt="calculator icon"
        ></img>
        <p>placeholder</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
          asperiores praesentium dolorem nihil, omnis animi.
        </p>
      </div>

      <div className="sm-project-container green-bg">
        <img
          className="sm-project-icon"
          src="calculator.svg"
          alt="calculator icon"
        ></img>
        <p>placeholder</p>
        <p>placeholder</p>
      </div>

      <div className="sm-project-container green-bg">
        <img
          className="sm-project-icon"
          src="calculator.svg"
          alt="calculator icon"
        ></img>
        <p>placeholder</p>
        <p>placeholder</p>
      </div>
    </div>
  );
}
