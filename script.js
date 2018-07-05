function createGrid(gridSize) {
    document.styleSheets[0].cssRules[3].style["grid-template-columns"] = "repeat(" + gridSize  + ", 1fr)"
    document.styleSheets[0].cssRules[3].style["grid-template-rows"] = "repeat(" + gridSize  + ", 1fr)"
    
    for (let i = 0; i < (gridSize * gridSize); i++) {
        let square = document.createElement("div");
        square.className = 'square';
        container.appendChild(square);

    }
}

createGrid(16);

function blackSquare() {
    let squares = Array.from(document.querySelectorAll(".square"));
    for (i = 0; i < squares.length; i++) {
        squares[i].addEventListener('mouseover', function (e) {
            e.target.classList.add('black');
        });
    }
}

blackSquare();

/*
function colorSquare() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
*/



document.querySelector("#reset").addEventListener('click', e => {
    let newGrid = Number(window.prompt('Enter a new grid size', 16));
    if (newGrid) {
        while (container.hasChildNodes()) {
            container.removeChild(container.lastChild);
        }
        createGrid(newGrid);
        blackSquare();
    }
});















