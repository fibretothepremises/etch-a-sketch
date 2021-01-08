let squares = 30;
let squareDivs = [];
let clearBtn = document.querySelector(".clear");
let gridSizeBtn = document.querySelector(".size");
console.log(clearBtn);
let sketchGrid = document.querySelector(".sketch-grid");
console.log(sketchGrid);
createGrid(squares);
// Set up a “hover” effect so that the grid divs change color when your mouse passes over them, leaving a (pixelated) trail through your grid like a pen would.
sketchGrid.addEventListener("mouseover", colorMe); 
// add onclick function to clear button to call clearGrid function
clearBtn.addEventListener("click", clearGrid);
// // add onclick function to gridSizeBtn to call changeGridSize function
// gridSizeBtn.addEventListener("click", changeGridSize);
// Create 16x16 grid of square divs USING JS inside .sketch-grid //
function createGrid(squares) {
    sketchGrid.style.gridTemplateColumns = `repeat(${squares}, 1fr)`;
    sketchGrid.style.gridTemplateRows = `repeat(${squares}, 1fr)`;
    // create square divs and append to sketchGrid
    // for each column
    let i = 0; // index of squareDivs
    for (x=1;x<=squares;x++) {
        // for each row
        for (y=1;y<=squares;y++) {
            squareDivs[i] = document.createElement('div');
            squareDivs[i].style.gridColumn = `${x} / (${x}+1)`;
            squareDivs[i].style.gridRow = `${y} / (${y} + 1)`;
            squareDivs[i].style.border = `1px solid black`;
            sketchGrid.appendChild(squareDivs[i]);
            i++;
        }
    }
}
// create function that adds new class to the square divs as mouse enters
function colorMe(e) {
    if (e.target.parentNode == sketchGrid) {
        e.target.classList.add("fill");
    }
}
// create function that removes .fill from each squareDiv in squareDivs array
function clearGrid() {
    for (i=0;i<(squares**2);i++) {
        squareDivs[i].classList.remove("fill");
    }
}
// // get user input for how many squares per side
// function changeGridSize() {
//     squares = +prompt("How many squares per side?","");
//     sketchGrid.innerHTML = "";
//     createGrid();
// }
// keep the total .sketch-grid to be the same i.e. make the size of squares smaller if number of squares increase, make the squares bigger if less number of squares per side
// Create function to get user input and determine number of squares per side.


// Set a limit of squares to ~100
let squaresLimit = 200;