/* 
Script for the app simle counter
*/

function updateDisplay(value: string): string {
  if (value === "RESET") {
    return (display.innerText = "0");
  }
  const newValue = (
    parseInt(display.innerText) +
    parseInt(value) * signOperator
  ).toString();

  return (display.innerText = newValue);
}

function setOperator() {
  if (addSubstract.value === "+") {
    signOperator = operator.add;
    // color = '' will take the color from css file
    addSubstract.onmouseover = () => {
      addSubstract.style.color = "";
    };
    addSubstract.onmouseout = () => {
      addSubstract.style.color = "";
    };
  } else if (addSubstract.value === "-") {
    signOperator = operator.substract;

    addSubstract.onmouseover = () => {
      addSubstract.style.color = "";
    };
    addSubstract.onmouseout = () => {
      addSubstract.style.color = "rgb(177, 39, 39)"
    };
  }
}

function displayColor(buttonID: string) {
  if (buttonID === "reset") {
    display.style.boxShadow = "0rem 0 1rem rgb(154, 154, 21)";
  } else {
    if (signOperator === operator.add) {
      display.style.boxShadow = "0.2rem 0.4rem 0.3rem rgb(3, 113, 56)";
    } else if (signOperator === operator.substract) {
      display.style.boxShadow = "0.2rem 0.4rem 0.3rem rgb(177, 39, 39)";
    }
  }
  setTimeout(() => {
    display.style.boxShadow = "";
  }, 1000);
}

function numberBtnColor() {
  for (let i = 0; i < allBtn.length; i++) {
    if (allBtn[i].id !== "reset" && signOperator === operator.substract) {
      // backgroundcolor = '' -> will use the .css file config
      allBtn[i].onmouseover = () => {
        {
          allBtn[i].style.backgroundColor = "rgb(177, 39, 39)";
        }
      };
      allBtn[i].onmouseout = () => {
        {
          allBtn[i].style.backgroundColor = "";
        }
      };
    } else {
      allBtn[i].onmouseover = () => {
        {
          allBtn[i].style.backgroundColor = "";
        }
      };
      allBtn[i].onmouseout = () => {
        {
          allBtn[i].style.backgroundColor = "";
        }
      };
    }
  }
}

function setValueHistory(value: string) {
  if (value !== "RESET") {
    if (signOperator === operator.add && showHistory.length === 0) {
      showHistory += " " + value;
    } else if (signOperator === operator.add) {
      showHistory += ` <span style="color: green;">+</span> ${value}`;
    } else {
      showHistory += ` <span style="color: red;">-</span> ${value}`;
    }
  } else {
    showHistory = "";
  }
  inputHistory.innerHTML = showHistory;
}

function initEventListeners() {
  for (let i = 0; i < allBtn.length; i++) {
    allBtn[i].addEventListener("click", () => {
      updateDisplay(allBtn[i].innerText);
    });
    allBtn[i].addEventListener("click", () => {
      setValueHistory(allBtn[i].innerText);
    });
    allBtn[i].addEventListener("click", () => displayColor(allBtn[i].id));
  }
  addSubstract.addEventListener("change", () => {
    setOperator();
    numberBtnColor();
  });
}

enum operator {
  add = 1,
  substract = -1,
}

let signOperator = operator.add;
let showHistory: string = "";
const allBtn = document.getElementsByTagName("button");
const display = document.getElementById("display")!;
const addSubstract = document.getElementById("operator") as HTMLInputElement;
const inputHistory = document.getElementById("history")!;

window.addEventListener("load", initEventListeners);
