const grid = document.querySelector('.grid');
let gridSize = 18;

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

grid.addEventListener('mouseover', function (e) {
    // Add the "active" class to only divs with a "box" class
    if (e.target.matches('.box')) {
      e.target.classList.add('active');
    }
  });