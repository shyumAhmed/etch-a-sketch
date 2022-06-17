const sketchBox = document.querySelector(".sketch-box");
const clearButton = document.querySelector(".clear");

function createGrid(numOfRows, numOfCells) {
  for (r = 0; r < numOfRows; r++) {
    let row = document.createElement("div");
    sketchBox.appendChild(row).className = "grid-row";
    for (c = 0; c < numOfCells; c++) {
      let cell = document.createElement("div");
      row.appendChild(cell).className = "cell";
    }
  }
}

function draw() {
  const cells = document.querySelectorAll(".cell");
  let drag = false;
  cells.forEach((cell) => {
    cell.addEventListener("mousedown", (e) => {
      drag = true;
      e.target.style.background = "black";
      console.log("mousedown");
    });
    cell.addEventListener("mouseover", (e) => {
      drag ? (e.target.style.background = "black") : "";
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

createGrid(50, 50);
draw();
clearBoard();
