//document.getElementById("board").classList.add("square");

//const statusDisplay = document.querySelector("#game");

//let currentPlayer = "X";
//let nextPlayer = "O";

//let gameState = ["", "", "", "", "", "", "", "", ""];
//var boxNum = 0

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


function gameplay(){
    var board = document.querySelector("#board"); 
	var boxes = board.querySelectorAll("div");
	var empty ='';
	var tracker=0; 			//Used for tracking X and O
	var boxNum=0;
	var x_O;				//Used for function in Result
	var stat = document.querySelector("#status");		//Status Board at top of Game
	var newButton = document.querySelector("button");	//Selected New Game Button
	 //var newButton = document.querySelector(".btn");	//Selected New Game Button

	boxes.forEach(element =>{
		element.setAttribute("class","square");
		element.textContent = empty;					//Shows the board pieces
		element.setAttribute("id",boxNum++);			//Gives each box a number to map.
	});

	boxes.forEach(element => {
		element.addEventListener("click",function(){
			if (element.textContent !== empty){
				stat.textContent = "We do not allow nor support Cheating.Please Select an Empty Box";
				return;
			}
			tracker+=1;
			stat.textContent = 'Move your mouse over a square and click to play an X or an O';
			if(tracker %2 == 0){
				this.textContent='O';
				this.classList.add('square','O');
			}
			else{
				this.textContent='X';

				this.classList.add('square','X');
			}
			
			gameOver();
		});
	});

	boxes.forEach(element=>{
		element.addEventListener("mouseover",function(){
			element.classList.add("hover");
		});
		element.addEventListener("mouseleave",function(){
			element.classList.remove("hover");
		});
		//MODIFIED HOVER CSS TO APPEAR AND DISAPPEAR OVER BOARD BOXES
	});

	newButton.addEventListener("click",function(){
		boxes.forEach(element=>{
			element.textContent = empty;
		});
		stat.classList.remove("class","you-won");
		stat.textContent ='Move your mouse over a square and click to play an X or an O';
	});


	function gameOver(){
		if(boxes[0].textContent==boxes[1].textContent && boxes[1].textContent==boxes[2].textContent &&boxes[0].textContent==boxes[2].textContent && boxes[2].textContent !== "")
			results(boxes[0].textContent);
		if(boxes[3].textContent==boxes[4].textContent && boxes[4].textContent==boxes[5].textContent &&boxes[3].textContent==boxes[5].textContent && boxes[5].textContent !== "")
			results(boxes[3].textContent);
		if(boxes[6].textContent==boxes[7].textContent && boxes[7].textContent==boxes[8].textContent &&boxes[6].textContent==boxes[8].textContent && boxes[8].textContent !== "")
			results(boxes[6].textContent);
		if(boxes[0].textContent==boxes[3].textContent && boxes[3].textContent==boxes[6].textContent &&boxes[0].textContent==boxes[6].textContent && boxes[6].textContent !== "")
			results(boxes[0].textContent);
		if(boxes[1].textContent==boxes[4].textContent && boxes[4].textContent==boxes[7].textContent &&boxes[1].textContent==boxes[7].textContent && boxes[7].textContent !== "")
			results(boxes[1].textContent);
		if(boxes[2].textContent==boxes[5].textContent && boxes[5].textContent==boxes[8].textContent &&boxes[2].textContent==boxes[8].textContent && boxes[8].textContent !== "")
			results(boxes[2].textContent);
		if(boxes[0].textContent==boxes[4].textContent && boxes[4].textContent==boxes[8].textContent &&boxes[0].textContent==boxes[8].textContent && boxes[8].textContent !== "")
			results(boxes[0].textContent);
		if(boxes[6].textContent==boxes[4].textContent && boxes[4].textContent==boxes[2].textContent &&boxes[6].textContent==boxes[2].textContent && boxes[2].textContent !== "")
			results(boxes[6].textContent);
	}

	var results = function(x_O){
		stat.classList.add("class", "you-won");
    	stat.textContent = `Congratulations! ${x_O} is the Winner!`;
	}




}

window.onload=gameplay;


