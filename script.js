const body = document.body;
const layout = document.getElementsByClassName('layout')[0];

body.appendChild(layout);

console.log("test")

for (let grid = 0; grid < 256; grid++) {
    const board = document.createElement('div');
    board.className = "base-board";
    board.textContent = "box"
    console.log("lol");
    layout.appendChild(board);
}

