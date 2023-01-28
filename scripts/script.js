const container = document.querySelector(".container");
const body = document.querySelector("body");

function makeGrid(size = "2") { //make one square box
    const grid = document.createElement("div");
    grid.classList.add("grid");
    grid.setAttribute("style", `border: 1px solid black`);
    container.setAttribute("style", `grid-template-row: repeat(${size}, 1fr); grid-template-columns: repeat(${size}, 1fr);`);
    container.appendChild(grid);
}   