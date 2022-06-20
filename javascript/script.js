const sketchBox = document.querySelector(".sketch-box");
const clearButton = document.querySelector(".clear");
const toggleGridButton = document.querySelector(".toggle-lines");
const toggleRainbowButton = document.querySelector(".toggle-rainbow");
const toggleColorButton = document.querySelector(".toggle-color");
const toggleShadowButton = document.querySelector(".toggle-shadow");
const slider = document.getElementById("myRange");
const sliderValueDisp = document.getElementById("value-num");
const colorPicker = document.getElementById("colorpicker");
let cellColor;
let isRainbow = false;
let isColor = true;
let isShadow = false;
let solidColor = "black";
let shadePercentage = 100;

function createDefaultGrid(numOfRows, numOfCells) {
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
    colorPicker.oninput = () => {
      solidColor = colorPicker.value;
      cellColor = solidColor;
    };
    cell.addEventListener("mousedown", (e) => {
      drag = true;
      updateColor(e, drag);
      e.target.style.background = cellColor;
    });
    cell.addEventListener("mouseenter", (e) => {
      drag && shadePercentage > 0
        ? (shadePercentage = shadePercentage - 10)
        : "";
      updateColor(e, drag);
      drag ? (e.target.style.background = cellColor) : "";
    });
    cell.addEventListener("mouseup", () => {
      shadePercentage = 100;
      drag = false;
    });
  });
}

function updateColor(e, drag) {
  if (isRainbow) {
    cellColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  } else if (isColor) {
    colorPicker.oninput = () => {
      solidColor = colorPicker.value;
    };
    cellColor = solidColor;
  } else if (isShadow) {
    colorPicker.oninput = () => {
      solidColor = colorPicker.value;
    };
    cellColor = solidColor;
    drag
      ? (e.target.style.filter = "brightness(" + shadePercentage + "%)")
      : "";
  }
}

function clearBoard() {
  const cells = document.querySelectorAll(".cell");
  clearButton.addEventListener("click", () => {
    cells.forEach((cell) => {
      cell.style.background = "antiquewhite";
      cell.style.filter = "brightness(100%)";
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
    configureGrid();
  };
}

function createGrid() {
  sliderValueDisp.innerHTML = slider.value + " X " + slider.value;
  configureGrid();
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
  toggleColorButton.addEventListener("click", () => {
    isColor = true;
    isRainbow = false;
    isShadow = false;
  });
}

function changeCellShading() {
  toggleShadowButton.addEventListener("click", () => {
    isRainbow = false;
    isColor = false;
    isShadow = true;
  });
}

function changeToRandomColor() {
  toggleRainbowButton.addEventListener("click", () => {
    isRainbow = true;
    isColor = false;
    isShadow = false;
  });
}

function configureGrid() {
  createDefaultGrid(slider.value, slider.value);
  drawOnGrid();
  clearBoard();
  toggleGridLines();
  changeCellColor();
  changeToRandomColor();
  changeCellShading();
}

createGrid();
