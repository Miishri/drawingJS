const body = document.querySelector("body");
const container = document.createElement("div");
container.setAttribute("style", `display: flex; flex-wrap: wrap; gap: 1px`);
container.classList.add("container");
body.append(container);

const eraseButton = document.createElement("button");

eraseButton.classList.add("erase");
eraseButton.textContent = "ERASE";
eraseButton.setAttribute("style", "margin-top: 10px");

setTimeout((eraseButton.addEventListener("click", () => {
    container.querySelectorAll(".grid").forEach((e) => {
        e.style.background = "none";
    });
})), 1000);
body.appendChild(eraseButton);

//make one grid
function makeGrid(size = 16) {
    const grid = document.createElement("div");
    grid.classList.add("grid");
    grid.setAttribute("style", `height: ${size}px; width: ${size}px; border: 0.5px solid black`);

    grid.addEventListener("mouseover", () => {
        if (grid.style.background !== "yellow") {
            grid.style.background = "yellow";
        }
    });

    container.append(grid);
}
  


