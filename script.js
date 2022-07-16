const gameboard = {
    board : ['O','X','O',,'X','O',,,'X']
}

const container = document.querySelector('.board-container');

for(let i=0;i<9;i++){
    let pad = document.createElement('div');
    pad.className = 'pad'
    pad.textContent = gameboard.board[i];
    // pad.addEventListener('click', lolo)
    container.appendChild(pad)
}