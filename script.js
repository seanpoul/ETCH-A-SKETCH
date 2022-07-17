const body = document.body;
const layout = document.getElementsByClassName('layout')[0];
const btn = document.button;
let newGrid = 16

body.appendChild(layout);

function newGame(newGrid) {
    layout.textContent = "";
    for (let grid = 0; grid < (newGrid * newGrid); grid++) {
        const board = document.createElement('div');
        board.style.height = `calc(70vw / ${newGrid})`;
        board.style.width = `calc(100%/${newGrid})`;
        board.style.maxHeight = `calc(600px/${newGrid})`;
        board.className = "base";
        board.style.border = "black solid 1px";
        layout.appendChild(board);
        board.addEventListener('mouseover', () => {
            board.classList.add('hover');
        })
    }
}

document.querySelector('button').addEventListener('click', () => {
    newGrid = parseInt(prompt("Input new grid size (under 100)."))
    if (newGrid > 100) {
        alert("Too High!");
    }
    else if (newGrid <= 100) {
        newGame(newGrid);
    }
    else  {
        alert("Error");
    }
});

newGame(newGrid)