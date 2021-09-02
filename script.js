

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
    active()
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

const randomColor = () => {
    let color = 'rgba(';
    for(i = 0; i < 3; i++){
        color += Math.floor(Math.random() * 255) + ',';
    }
    return color + '1)';
}

const shading = (clr) => {
    let color ='rgba(';
    clr = parseInt(clr.substr(4,clr.indexof(',') - 4));
    if(clr === 255){
        clr = 100;
    }
else if(clr > 0){
    clr -= 5;
}
for(i = 0; i < 3; i++){
    color += clr + ',';
}
return color + '1)';
}

const active = () => {
    let pixels = document.querySelectorAll('.pixel');
    pixels.forEach(pxl => {
        pxl.addEventListener('mouseover', (e) => {
            let crntClr = getComputedStyle(pxl,null).getPropertyValue('background-color');
            switch(currentMode){
                case 'black':
                    e.target.backgroundColor = 'rgba(0,0,0)';
                    break;
                    case 'colors':
                        e.target.backgroundColor = randomColor();
                        break;
                    case 'shading':
                        e.target.backgroundColor = shading(crntClr);
                        break;
            }
        })
    })
}

active();