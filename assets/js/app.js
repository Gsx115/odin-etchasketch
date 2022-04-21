const grid = document.querySelector('.container');

function genGrid(){
    for(let y = 1; y <= 16; y++){
        for(let x = 1; x <= 16; x++){
            let gridItem = document.createElement('div');
            gridItem.classList.add('item');
            if(x==1) gridItem.classList.add('row-start');
            grid.appendChild(gridItem);
        }
    }
}

grid.addEventListener('mouseover',(e)=>e.target.classList.add('hover'));

    

genGrid();