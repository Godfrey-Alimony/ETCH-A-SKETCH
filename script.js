

const buttons = document.querySelectorAll('buttons');
const screen = document.querySelector('.screen');

let pixel = '';
let gridsize = 50;

const drawGrid = (screenSize) => {
for(i = 0; i < screenSize ** 2; i++){
    pixel = document.createElement('div');
    pixel.classList.add('pixel');
    pixel.style.backgroundColor = 'white';
    screen.appendChild(pixel);
}
screen.style.gridTemplateColumns = `repeat($(screenSize), auto)`;
screen.style.gridTemplateRows = `repeat($(screenSize), auto)`;

}

drawGrid(gridsize);

const clear = (Request) => {
    if(Request === 'resize'){
        gridSize = prompt('please enter the new pixel density of not more than 100', 50);
        if(gridSize > 100 || gridSize === null){
            gridSize = 100;
        }
    }
    screen.innerHTML = '';
    drawGrid(gridSize);
}

let currentMode = 'black';
buttons.forEach(button => {
    button.addEventListener('click', () =>{
        if(button.id === 'resize' || button.id === 'clear'){
            clear(button.id);
        }
        else{
            currentMode = button.id;
            clear(button.id);
        }
    });
});
