// Default Squares per side //
let squares = 14;
// Array to store squareDivs //
let squareDivs = [];
// The Grid //
let sketchGrid = document.querySelector(".sketch-grid");
// Buttons //
let clearBtn = document.querySelector(".clear");
let gridBtns = document.querySelectorAll(".grid-btn")
let noirBtn = document.querySelector("#noir");
let blancBtn = document.querySelector("#blanc");
let varBtn = document.querySelector("#variation");
let checkbox = document.querySelector("#checkbox");
// Drawing Subjects //
let templates = document.querySelector(".templates");
templates.style.display = "none";
// Deafult Grid //
createGrid(squares);
// Set up a “hover” effect so that the grid divs change color when your mouse passes over them, leaving a (pixelated) trail through your grid like a pen would.
sketchGrid.addEventListener("mouseover", fillNoir); 
// add onclick function to clear button to call clearGrid function
clearBtn.addEventListener("click", clearGrid);
// add onclick function to grid size buttons to call changeGridSize function
// 1. make nodelist into array
let gridBtnsArray = Array.from(gridBtns);
// 2. loop over array and apply addListener
gridBtnsArray.forEach(addListener);
// 3. create function addListener that adds event listener to 1st parameter that calls the changeGridSize function
function addListener(gridBtn) {
    gridBtn.addEventListener("click", changeGridSize);
}
// add onclick function to grid color buttons to call changeEvent listener
noirBtn.addEventListener("click", addNoirListener);
blancBtn.addEventListener("click", addBlancListener);
varBtn.addEventListener("click", addVarListener);
// add onclick function to checkbox and call toggleTemplates
checkbox.addEventListener("click", toggleTemplates);
// function to add event listener to sketchGrid - Noir
function addNoirListener() {
    sketchGrid.removeEventListener("mouseover", fillBlanc);
    sketchGrid.removeEventListener("mouseover", fillVar);
    sketchGrid.addEventListener("mouseover", fillNoir); 
}
// function to add event listener to sketchGrid - Blanc
function addBlancListener() {
    sketchGrid.removeEventListener("mouseover", fillNoir);
    sketchGrid.removeEventListener("mouseover", fillVar);
    sketchGrid.addEventListener("mouseover", fillBlanc); 
}
// function to add event listener to sketchGrid - Var
function addVarListener() {
    sketchGrid.removeEventListener("mouseover", fillNoir);
    sketchGrid.removeEventListener("mouseover", fillBlanc);
    sketchGrid.addEventListener("mouseover", fillVar); 
}
// create function to switch between grid sizes depending on which button was clicked
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
// create function that removes .fill from each squareDiv in squareDivs array
function clearGrid() {
    for (i=0;i<(squares**2);i++) {
        squareDivs[i].style.backgroundColor = "transparent";
    }
}
// Create squares x squares grid of squareDivs inside .sketch-grid //
function createGrid(squares) {
    sketchGrid.style.gridTemplateColumns = `repeat(${squares}, 1fr)`;
    sketchGrid.style.gridTemplateRows = `repeat(${squares}, 1fr)`;
    // create square divs and append to sketchGrid
    for (i=0;i<squares**2;i++) {
        squareDivs[i] = document.createElement('div');
            squareDivs[i].style.border = `1px solid black`;
            squareDivs[i].style.borderRadius= '3%';
            sketchGrid.appendChild(squareDivs[i]);
    }
}
// create function that changes background color of div as mouse enters element to BLACK
function fillNoir(e) {
    if (e.target.parentNode == sketchGrid) {
        e.target.style.backgroundColor = "black";
    }
}
// create function that changes background color of div as mouse enters element to WHITE
function fillBlanc(e) {
    // make a color palette;
    if (e.target.parentNode == sketchGrid) {
        e.target.style.backgroundColor = "white";
    }
}
// create function that changes background color of div as mouse enters element to RANDOM COLOR from colors array
function fillVar(e) {
    // make a color palette;
    colors = ["#FAF3DD", "#C8D5B9", "#8FC0A9", "#68B0AB", "#4A7C59"];
    if (e.target.parentNode == sketchGrid) {
        e.target.style.backgroundColor = colors[Math.floor(Math.random()*colors.length)];
    }
}
// function to hide/show template images
function toggleTemplates() {
    switch (templates.style.display) {
        case ("none"):
            templates.style.display = "block";
            break;
        case ("block"):
            templates.style.display = "none";
            break;
    }
}

