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
            document.querySelector('.board').classList.add("occupied");
        }
    });
};

render_board();

document.addEventListener('DOMContentLoaded', function(){
	var board = document.getElementById("board");
	var boardl= board.length;

	for(var i=0; i<18; i++){
		document.getElementById("board").childNodes[i].className='square';
		
	}
    var state = [];
    var players = ["X","O"];
    var currentTurn = 

    document.getElementsbyClass('square').addEventListener('click',function(){
    	

    })

    for (var i=0; i<18; i++) {
    	var j = document.getElementById("board").childNodes[i];
    	j.addEventListener("click",function(){
    	    	if(state.length==0){
	    		j.classList.add('X');
	    		console.log(j.innerHTML=('X'));
	    		state.push('X');
	    	}else{
	    		if (state[(state.length-1)]=='X'){
	    			j.innerHTML=('O');
	    			state.push('O');
	    		}else{
	    			j.classList.add('X');
	    			j.innerHTML=('X');
	    			state.push('X')
			}
		}
		});
    };


    
    
  
}) 