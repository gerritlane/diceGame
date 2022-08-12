function displayNum (dieNum, player) {
	let dieArray = [
		[0,0,0],
		[0,0,0],
		[0,0,0]
	]

	switch (dieNum) {
		case 1:
			dieArray = [
				[0,0,0],
				[0,1,0],
				[0,0,0]
			];
			break;
		case 2:
			dieArray = [
				[1,0,0],
				[0,0,0],
				[0,0,1]
			];
			break;
		case 3:
			dieArray = [
				[0,0,1],
				[0,1,0],
				[1,0,0]
			];
			break;		
		case 4:
			dieArray = [
				[1,0,1],
				[0,0,0],
				[1,0,1]
			];
			break;		
		case 5:
			dieArray = [
				[1,0,1],
				[0,1,0],
				[1,0,1]
			];
			break;
		case 6:
			dieArray = [
				[1,0,1],
				[1,0,1],
				[1,0,1]
			];
			break;
		default:
			dieArray = [
				[0,0,0],
				[0,0,0],
				[0,0,0]
			]
		}
	console.log(dieArray)

	//Reset all dice dots
	for (let i = 0; i < dieArray.length; i++) {
		for (let j = 0; j < dieArray[i].length; j++) {
			document.querySelector(`.${player}.die :nth-child(${i+1}) :nth-child(${j+1})`).classList.add("blank")
		}
	}

	// Set dice dots to match number rolled
	for (let i = 0; i < dieArray.length; i++) {
		for (let j = 0; j < dieArray[i].length; j++) {
			if (dieArray[i][j] === 1) {
				document.querySelector(`.${player}.die :nth-child(${i+1}) :nth-child(${j+1})`).classList.remove("blank")
			}
		}
	}
	
}

function chooseWinner (playerOneRoll, playerTwoRoll) {
	if (playerOneRoll === playerTwoRoll) {
		document.querySelector('.header').textContent = "🚩Tie🚩";
	}
	else if (playerOneRoll > playerTwoRoll) {
		document.querySelector('.header').textContent = "🚩Player 1 Wins!";
	}
	else {
		document.querySelector('.header').textContent = " Player 2 Wins!🚩";
	}
}

function roll () {
	let playerOneRoll = Math.floor(Math.random() * 6) + 1;
	let playerTwoRoll = Math.floor(Math.random() * 6) + 1;
	displayNum(playerOneRoll, "left");
	displayNum(playerTwoRoll, "right");
	chooseWinner(playerOneRoll, playerTwoRoll)
}

// Make roll button roll dice
document.querySelector('.roll').addEventListener("click", roll);

