const sketchBox = document.querySelector(".sketch-box");
const clearButton = document.querySelector(".clear");
const toggleGridButton = document.querySelector(".toggle-lines");
const slider = document.getElementById("myRange");
const sliderValueDisp = document.getElementById("value-num");
const colorPicker = document.getElementById("colorpicker");
let cellColor = "black";

function createDefaultGrid(numOfRows, numOfCells) {
  console.log("being called");
  for (r = 0; r < numOfRows; r++) {
    let row = document.createElement("div");
    sketchBox.appendChild(row).className = "grid-row";
    for (c = 0; c < numOfCells; c++) {
      let cell = document.createElement("div");
      row.appendChild(cell).className = "cell";
    }
  }
}

function drawOnGrid() {
  const cells = document.querySelectorAll(".cell");
  let drag = false;
  cells.forEach((cell) => {
    cell.addEventListener("mousedown", (e) => {
      drag = true;
      e.target.style.background = cellColor;
      console.log("mousedown");
    });
    cell.addEventListener("mouseover", (e) => {
      drag ? (e.target.style.background = cellColor) : "";
    });
    cell.addEventListener("mouseup", () => {
      console.log("mouseup");
      drag = false;
    });
  });
}

function clearBoard() {
  const cells = document.querySelectorAll(".cell");
  clearButton.addEventListener("click", () => {
    cells.forEach((cell) => {
      cell.style.background = "antiquewhite";
    });
  });
}

function updateGridCellNum() {
  slider.oninput = () => {
    sliderValueDisp.innerHTML = slider.value + " X " + slider.value;
    const cells = document.querySelectorAll(".cell");
    const rows = document.querySelectorAll(".grid-row");
    cells.forEach((cell) => {
      cell.remove();
    });
    rows.forEach((cell) => {
      cell.remove();
    });

    createDefaultGrid(slider.value, slider.value);
    drawOnGrid();
    clearBoard();
    toggleGridLines();
    changeCellColor();
  };
}

function createGrid() {
  sliderValueDisp.innerHTML = slider.value + " X " + slider.value;
  createDefaultGrid(slider.value, slider.value);
  drawOnGrid();
  clearBoard();
  toggleGridLines();
  changeCellColor();
  updateGridCellNum();
}

function toggleGridLines() {
  const cells = document.querySelectorAll(".cell");
  let toggle = false;
  toggleGridButton.addEventListener("click", () => {
    if (toggle) {
      cells.forEach((cell) => {
        cell.className = "cell";
      });
      toggle = false;
    } else {
      cells.forEach((cell) => {
        cell.className = "no-border-cell";
      });
      toggle = true;
    }
  });
}

function changeCellColor() {
  colorPicker.oninput = () => {
    cellColor = colorPicker.value;
  };
}

createGrid();
