const grid = document.querySelector('.grid');
const resetBtn = document.querySelector('.reset');
const applyGridSize = document.querySelector('.apply');
let gridDisplay = document.querySelector('.grid-display');
let gridInput = document.querySelector('input');

let gridSize = 8;

createGrid(gridSize);

function createDiv(size){
    const div = document.createElement('div');
    div.classList.add('box');
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;

    return div;
}

function createGridColumn(gridSize){
    const div = document.createElement('div');
    div.classList.add('gridColumn');
    
    
    for (let i = 0; i < gridSize; i++){
        div.appendChild (createDiv(grid.clientHeight / gridSize));
    }

    return div;
}

function createGrid(gridSize){
    for ( let i = 0; i < gridSize; i++){
        grid.appendChild (createGridColumn(gridSize));
    }
}

function reset() {
    while (grid.firstChild) {
      grid.removeChild(grid.lastChild);
    }
    createGrid(gridSize);
}

grid.addEventListener('mouseover', function (e) {
    // Add the "active" class to only divs with a "box" class
    if (e.target.matches('.box')) {
      e.target.classList.add('active');
    }
});

gridInput.addEventListener('input', function (e){
    gridSize = e.target.value;
    gridDisplay.textContent = `${gridSize}x${gridSize}`;
});

applyGridSize.addEventListener('click', function () {
    reset();
  });
  

resetBtn.addEventListener('click', reset);