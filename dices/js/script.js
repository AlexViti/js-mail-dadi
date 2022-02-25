let btnDiceRoller = document.getElementById('dice-roller');
let aftermath = document.querySelector('.aftermath');

btnDiceRoller.addEventListener('click', function() {

	let userDice = Math.ceil(Math.random() * 6);
	let cpuDice = Math.ceil(Math.random() * 6);
	let resultStr;
	let resultColor;

	if (userDice < cpuDice) {
		resultStr = 'Hai perso';
		resultColor = 'red';
	} else if (userDice > cpuDice) {
		resultStr = 'Hai vinto';
		resultColor = 'green';
	} else {
		resultStr = 'Avete pareggiato';
		resultColor = 'blue';
	}
	
	aftermath.innerHTML = `
	<div class="user-dice">
		Il tuo dado: <span style = "font-size: 30px">&#${userDice + 9855}</span>
	</div>
	<div class="cpu-dice">
		Il dado del computer: <span style = "font-size: 30px">&#${cpuDice + 9855}</span>
	</div>
	<div class="result" style="color: ${resultColor}; font-size: 30px">${resultStr}</div>
	`
});

// 1	⚀	&#9856;	"&#" + ( 9855 + 1 ) + ";"
// 2	⚁	&#9857;	"&#" + ( 9855 + 2 ) + ";"
// 3	⚂	&#9858;	"&#" + ( 9855 + 3 ) + ";"
// 4	⚃	&#9859;	"&#" + ( 9855 + 4 ) + ";"
// 5	⚄	&#9860;	"&#" + ( 9855 + 5 ) + ";"
// 6	⚅	&#9861;	"&#" + ( 9855 + 6 ) + ";"



// LAW OF LARGE NUMBERS TEST
// let btnDiceRoller = document.getElementById('dice-roller');

// let dice1;
// let dice2;
// let dice3;
// let dice4;
// let dice5;
// let dice6;
// let somethingElse;

// btnDiceRoller.addEventListener('click', function() {

// 	dice1 = 0;
// 	dice2 = 0;
// 	dice3 = 0;
// 	dice4 = 0;
// 	dice5 = 0;
// 	dice6 = 0;
// 	somethingElse = 0;
	
// 	for (let i = 0; i < 1000000; i++) {
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
// 			default:
// 				somethingElse++;
// 		}

// 	}

// 	console.log(dice1);
// 	console.log(dice2);
// 	console.log(dice3);
// 	console.log(dice4);
// 	console.log(dice5);
// 	console.log(dice6);
// 	console.log('errors: ' + somethingElse);
// });