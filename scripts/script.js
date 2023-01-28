const container = document.querySelector(".container");
const body = document.querySelector("body");

function makeGrid(size = 2) { //make one square box
    const grid = document.createElement("div");
    grid.classList.add("grid");
    //listen to color
    grid.addEventListener("mouseover", () => {
        if (grid.style.background !== "blue") {
            grid.style.background = "blue";
        }
    });
    grid.setAttribute("style", `border: 1px solid black`);
    container.setAttribute("style", `grid-template-row: repeat(${size}, 1fr); grid-template-columns: repeat(${size}, 1fr);`);
    container.appendChild(grid);
}  

function putGrids(size = 2) { //make 2 x 2 by default or given size
    container.querySelectorAll("div").forEach(d => d.remove());
    
    for (let i = 0; i < size; i++) {
        makeGrid(size);
        for (let j = 1; j < size; j++) {
            makeGrid(size);
        }
    }
}

const clearButton = document.querySelector("#reset");
clearButton.addEventListener("click", () => {
    container.querySelectorAll("div").forEach(each => each.style.background = "none");
})

//JS for slider
const range = document.getElementById("range");
const value = document.getElementById("value");

range.oninput = function(){
    putGrids(this.value);
    value.innerText = `${this.value} x ${this.value}`;
}