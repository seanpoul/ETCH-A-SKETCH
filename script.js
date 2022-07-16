const body = document.body;
const layout = document.getElementsByClassName('layout')[0];

body.appendChild(layout);

for (let grid = 0; grid < 256; grid++) {
    const board = document.createElement('div');
    board.className = "base";
    board.style.border = "black solid 1px"
    layout.appendChild(board);
    board.addEventListener('mouseover', () => {
        board.classList.add('hover');
    })
}


