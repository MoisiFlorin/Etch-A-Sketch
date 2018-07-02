function createGrid(gridSize) {
    for (let i = 0; i < (gridSize * gridSize); i++) {
        let square = document.createElement("div");
        square.className = 'square';
        container.appendChild(square);

    }
}

createGrid(16);

function colorSquare() {
    let squares = Array.from(document.querySelectorAll(".square"));
    for (i = 0; i < squares.length; i++) {
        squares[i].addEventListener('mouseover', function (e) {
            e.target.classList.add('black');
        });
    }
}

colorSquare();

document.querySelector("#reset").addEventListener('click', e => {
    let newGrid = Number(window.prompt('Enter a new grid size', 16));
    if (newGrid) {
        while (container.hasChildNodes()) {
            container.removeChild(container.lastChild);
        }
        createGrid(newGrid);
        colorSquare();
    }
});
