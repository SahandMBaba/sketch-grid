var container = document.querySelector("#container")
const numberOfItem = 256;
const reset = document.querySelector("#resetBtn")
const ChangeGrid = document.querySelector("#changeGrid")
const rainbowcolors = document.querySelector('#colors')
const rgbRandomizer = () => {
    const r = Math.floor(Math.random()*256)
    const g = Math.floor(Math.random()*256)
    const b = Math.floor(Math.random()*256)
  
    return `rgb(${r}, ${g}, ${b})`
  }
function createGrid(size) {
    container.innerHTML = '';

for (let i = 1; i<= size; i++) {
    const gridItem = document.createElement('div');
    gridItem.className = 'grid-item';

    container.append(gridItem);

    gridItem.addEventListener('mouseover', () => {
        if (rainbowcolors.checked) {
            gridItem.style.backgroundColor = rgbRandomizer();
        } else {
            gridItem.style.backgroundColor = "black";
        }
    });

    reset.addEventListener ('click', () => {
        gridItem.style.backgroundColor = "white";
    })
} }


createGrid(numberOfItem);


ChangeGrid.addEventListener('click', () => {
    let newSize = prompt("Enter new grid size no more than 16:");


    if (newSize > 0 & newSize < 17) {
        createGrid(newSize * newSize);
    }
    else {
        alert("please enter a valid number")
    }
})