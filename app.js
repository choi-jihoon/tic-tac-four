// Selectors

let tableRow = document.getElementsByTagName('tr');
let tableCell = document.getElementsByTagName('td');
let tableSlot = document.querySelector('.slot');
const playerTurn = document.querySelector('.player-turn');
const reset = document.querySelector('.reset');


for (let i = 0; i < tableCell.length; i++) {
    tableCell[i].addEventListener('click', (e) => {
        console.log(`${e.target.parentElement.rowIndex}, ${e.target.cellIndex}`);
    })
}

while (!player1) {
    let player1 = prompt('Player One: Enter your name. You will be red.');
}

player1Color = 'red';

while (!player2) {
    let player2 = prompt('Player Two: Enter your name. You will be yellow.');
}

player1Color = 'yellow';

let currentPlayer = 1;
