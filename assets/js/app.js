const grid = document.querySelector('.container');

function genGrid(){
    for(let i = 1; i <= 16; i++){
        let gridItem = document.createElement('div');
        gridItem.classList.add('item');
        grid.appendChild(gridItem);
    }
}

genGrid();