

const container = document.querySelector('.container')
const btnBlack = document.createElement('button')
const btnGray = document.createElement('button')
const btnRGB = document.createElement('button')
const btnSize = document.createElement('button')
const buttonsContainer = document.querySelector('buttons')


function createDivs(col, rows) {
    for(let i = 0 ; i < (col * rows); i++){
        const div = document.createElement('div')
        div.style.border ='1px solid red'
        container.style.gridTemplateColumns =`repeat(${col}, 1fr)`;
        container.style.gridTemplateRows =`repeat(${rows}, 1fr)`;
        container.appendChild(div).classList.add('box')
    }
}

createDivs(16,16)


function grayColor() {
    const boxs = container.querySelectorAll('.box')
    btnGray.textContent ='Gray'
    btnGray.addEventListener('click' , () => {
        boxs.forEach(box => box.addEventListener('mouseover', () => {
            let Rnum = Math.floor(Math.random() * 255)
            box.style.background =`rgb(${Rnum},${Rnum},${Rnum})`;
        }))
    })
    buttonsContainer.appendChild(btnGray).classList.add('btn')
  }
  grayColor()


  function blackColor() {
    const boxs = container.querySelectorAll('.box')
    btnBlack.textContent ='Black'
    btnBlack.addEventListener('click' , () => {
        boxs.forEach(box => box.addEventListener('mouseover', () => {
            box.style.background ='black';
        }))
    })
    buttonsContainer.appendChild(btnBlack).classList.add('btn')
  }
  blackColor()


  function rgbColor() {
    const boxs = container.querySelectorAll('.box')
    btnRgb.textContent ='Rgb'
    btnRgb.addEventListener('click' , () => {
        boxs.forEach(box => box.addEventListener('mouseover', () => {
            let R = Math.floor(Math.random() * 255)
            let B = Math.floor(Math.random() * 255)
            let G = Math.floor(Math.random() * 255)
            box.style.background = `rgb(${R},${B},${G})`
        }))
    })
    buttonsContainer.appendChild(btnRgb).classList.add('btn')
  }
  rgbColor()


 Function reSet() {
     const boxs = container.querySelectorAll('.box')
     boxs.forEach(box => box.remove())
 }

 function reSize() {
     btnSize.textContent ='GRID SIZE'
     btnSize.addEventListener('click' , () => {
         let user = prompt('what size do you want your grid to be?')
         if(user === null || user < 1) {
             reSet()
             createDivs(16,16)
             blackColor()
             grayColor()
             rgbColor()
         }
             else{
                reSet()
                createDivs(user,user)
                blackColor()
                grayColor()
                rgbColor()
           }
         })
         buttonsContainer.appendChild(btnSize).classList.add('btn')
 }
      
 
