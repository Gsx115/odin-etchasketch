const grid = document.querySelector('.container');
const clear = document.querySelector('#clear-board');

function newBoard(){
    let rows = window.prompt('Please enter number of rows less than 100');
    let cols = window.prompt('Please enter number of columns less than 100');
    if (isNaN(rows) || isNaN(cols) || rows === null || cols === null || rows > 100 || cols > 100){
        alert('Please enter numbers only.  Try again.')
        newBoard();
    }
    genGrid(parseInt(rows),parseInt(cols));
}

function genGrid(x,y){
    console.log(`Rows: ${x}, Cols: ${y}`);
    for(let a = 1; a <= y; a++){
        for(let b = 1; b <= x; b++){
            let gridItem = document.createElement('div');
            gridItem.classList.add('item');
            if(b==1) gridItem.classList.add('row-start');
            grid.appendChild(gridItem);
        }
    }
}

grid.addEventListener('mouseover',(e)=>{
    if (e.target.classList.contains('item')) e.target.classList.add('hover');
});

clear.addEventListener('click',(e)=>location.reload());


    

newBoard();