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

createGrid(16, 16);
