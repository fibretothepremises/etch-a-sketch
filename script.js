// Squares //
let squares = 14;
let squareDivs = [];
// Button //
let clearBtn = document.querySelector(".clear");
let chunkyBtn = document.querySelector("#chunky");
let regularBtn = document.querySelector("#regular");
let fineBtn = document.querySelector("#fine");
let noirBtn = document.querySelector("#noir");
let blancBtn = document.querySelector("#blanc");
let varBtn = document.querySelector("#variation");
let sketchGrid = document.querySelector(".sketch-grid");
// Deafult Grid //
createGrid(squares);
// Set up a “hover” effect so that the grid divs change color when your mouse passes over them, leaving a (pixelated) trail through your grid like a pen would.
sketchGrid.addEventListener("mouseover", fillNoir); 
// add onclick function to clear button to call clearGrid function
clearBtn.addEventListener("click", clearGrid);
// add onclick function to grid size buttons to call changeGridSize function
chunkyBtn.addEventListener("click", changeGridSize);
regularBtn.addEventListener("click", changeGridSize);
fineBtn.addEventListener("click", changeGridSize);
// add onclick function to grid color buttons to call changeEvent listener
noirBtn.addEventListener("click", addNoirListener);
blancBtn.addEventListener("click", addBlancListener);
varBtn.addEventListener("click", addVarListener);
// function to add event listener and call colorme method;
function addNoirListener() {
    sketchGrid.removeEventListener("mouseover", fillBlanc);
    sketchGrid.removeEventListener("mouseover", fillVar);
    sketchGrid.addEventListener("mouseover", fillNoir); 
}
// function to add event listener and call colorme method;
function addBlancListener() {
    sketchGrid.removeEventListener("mouseover", fillNoir);
    sketchGrid.removeEventListener("mouseover", fillVar);
    sketchGrid.addEventListener("mouseover", fillBlanc); 
}
function addVarListener() {
    sketchGrid.removeEventListener("mouseover", fillNoir);
    sketchGrid.removeEventListener("mouseover", fillBlanc);
    sketchGrid.addEventListener("mouseover", fillVar); 
}
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
            squareDivs[i].style.borderRadius= '3%';
            sketchGrid.appendChild(squareDivs[i]);
            i++;
        }
    }
}
// create function that adds new class to the square divs as mouse enters
function fillNoir(e) {
    if (e.target.parentNode == sketchGrid) {
        e.target.style.backgroundColor = "black";
    }
}
// create function that changes background color of div the mouse hovers over
function fillBlanc(e) {
    // make a color palette;
    if (e.target.parentNode == sketchGrid) {
        e.target.style.backgroundColor = "white";
    }
}
function fillVar(e) {
    // make a color palette;
    colors = ["#FAF3DD", "#C8D5B9", "#8FC0A9", "#68B0AB", "#4A7C59"];
    if (e.target.parentNode == sketchGrid) {
        e.target.style.backgroundColor = colors[Math.floor(Math.random()*colors.length)];
    }
}
// create function that removes .fill from each squareDiv in squareDivs array
function clearGrid() {
    for (i=0;i<(squares**2);i++) {
        squareDivs[i].style.backgroundColor = "transparent";
    }
}
// get user input for how many squares per side
function changeGridSize(e) {
    switch (e.target.id) {
        case "chunky":
            squares = 14;
            break;
        case "regular":
            squares = 50;
            break;
        case "fine":
            squares = 100;
            break;
    }
    sketchGrid.textContent = "";
    createGrid(squares);
}
// keep the total .sketch-grid to be the same i.e. make the size of squares smaller if number of squares increase, make the squares bigger if less number of squares per side
// Create function to get user input and determine number of squares per side.


// Set a limit of squares to ~100
let squaresLimit = 200;