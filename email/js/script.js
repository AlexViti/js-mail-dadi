const btnSend = document.getElementById('send');
let inputEmail = document.getElementById('email');

btnSend.addEventListener('click', function() {
	let emailValue = inputEmail.value;
	console.log(emailValue);
});