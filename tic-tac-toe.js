document.getElementById("board").classList.add("square");

const statusDisplay = document.querySelector('.game');

let currentPlayer = "X";
let nextPlayer = "O";

let gameState = ["", "", "", "", "", "", "", "", ""];

const render_board = () => {
    statusDisplay.innerHTML = "";
    gameState.forEach((e,i)) => {
        statusDisplay.innerHTML += '<div class="square" onclick="addPlayerMove(${i})">${gameState[i]}</div>';
        if (e == currentPlayer || e == nextPlayer) {
            document.querySelector('board').classList.add("occupied");
        }
    });
};

render_board();