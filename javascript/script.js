const sketchBox = document.querySelector(".sketch-box");

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

createGrid(16, 16);
draw();
//(e.target.style.background = " antiquewhite")
