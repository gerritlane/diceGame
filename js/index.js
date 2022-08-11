function displayNum (dieNum) {
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
	for (let i = 0; i < dieArray.length; i++) {
		for (let j = 0; j < dieArray[i].length; j++) {
			if (dieArray[i][j] === 0) {
				document.querySelector(`.die :nth-child(${i+1}) :nth-child(${j+1})`).classList.add("blank")
			}
		}
	}
	
}