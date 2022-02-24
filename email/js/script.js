// EMAIL GENERATOR

let studentsList = document.getElementById('classe56').innerText.toLowerCase();
studentsList = studentsList.replace('ò', 'o');
studentsList = studentsList.split(';');
let studentEmails = [];

for (let i = 0; i < studentsList.length; i++) {
	studentsList[i] = studentsList[i].split(',');
	studentEmails.push(studentsList[i][0].charAt(0) + '.' + studentsList[i][1].replace(/\s/g, '') + '@boolean.careers')
}

//EMAIL CHECKER

const btnSend = document.getElementById('send');
let email = document.getElementById('email');

btnSend.addEventListener('click', function() {
	let emailExist = false;
	
	for (let i = 0; i < studentEmails.length && !emailExist; i++) {
		
		if (email.value == studentEmails[i]) {
			emailExist = true;
		}
	}
	
	let check = document.querySelector('.check');
	
	if (emailExist) {
		check.style = 'color: green; font-size: 20px;';
		check.innerHTML = 'La tua mail è presente a sistema!'
	} else {
		check.style = 'color: red; font-size: 20px;';
		check.innerHTML = 'La tua mail non è presente a sistema oppure hai sbagliato a digitare, ricontrolla e riprova'
	}
});
