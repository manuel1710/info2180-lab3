//document.getElementById("board").classList.add("square");

//const statusDisplay = document.querySelector("#game");

//let currentPlayer = "X";
//let nextPlayer = "O";

//let gameState = ["", "", "", "", "", "", "", "", ""];
//var boxNum = 0


function gameplay(){
    var board = document.querySelector("#board");
	var boxes = board.querySelectorAll("div");
	var empty ='';
	var tracker=0;
	var boxNum=0;
	var x_O;
	var stat = document.querySelector("#status");
	var newButton = document.querySelector("button");

	boxes.forEach(element =>{
		element.setAttribute("class","square");
		element.textContent = empty;
		element.setAttribute("id",boxNum++);
	});
}

window.onload=gameplay;


//const render_board = () => {
//    statusDisplay.innerHTML = "";
 //   gameState.forEach((e,i)) => {
 //       statusDisplay.innerHTML += '<div class="square" onclick="addPlayerMove(${i})">${gameState[i]}</div>';
//        if (e == currentPlayer || e == nextPlayer) {
//            document.querySelector("#board").classList.add("occupied");
//        }
//    });
//};

// render_board();