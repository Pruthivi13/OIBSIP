document.addEventListener("keydown", function (event) {
  const key = event.key;

  if (["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(key)) {
    appendToDisplay(key);
  } else if (["+", "-", "*", "/", "%"].includes(key)) {
    appendToDisplay(key);
  } else if (key === "Enter") {
    calculate();
  } else if (key === "Backspace") {
    backspace();
  } else if (key === "c" && event.ctrlKey) {
    clearDisplay();
  }
});
function appendToDisplay(value) {
  document.getElementById("display").value += value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function backspace() {
  let display = document.getElementById("display");
  display.value = display.value.slice(0, -1);
}

function calculate() {
  let display = document.getElementById("display");
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}
