let btnDiceRoller = document.getElementById('dice-roller');
let body = document.querySelector('body');

btnDiceRoller.addEventListener('click', function() {
	let userDice = Math.ceil(Math.random() * 6);
	console.log(userDice);
});




// LAW OF LARGE NUMBERS TEST
// let dice1 = 0;
// let dice2 = 0;
// let dice3 = 0;
// let dice4 = 0;
// let dice5 = 0;
// let dice6 = 0;

// btnDiceRoller.addEventListener('click', function() {
	
// 	for (let i = 0; i < 100000; i++) {
// 		let userDice = Math.ceil(Math.random() * 6);
// 		switch (userDice) {
// 			case 1:
// 				dice1++;
// 				break;
// 			case 2:
// 				dice2++;
// 				break;
// 			case 3:
// 				dice3++;
// 				break;
// 			case 4:
// 				dice4++;
// 				break;
// 			case 5:
// 				dice5++;
// 				break;
// 			case 6:
// 				dice6++;
// 				break;
// 		}

// 	}

// 	console.log(dice1);
// 	console.log(dice2);
// 	console.log(dice3);
// 	console.log(dice4);
// 	console.log(dice5);
// 	console.log(dice6);
// });

