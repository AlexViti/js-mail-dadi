const btnSend = document.getElementById('send');
let inputEmail = document.getElementById('email');

btnSend.addEventListener('click', function() {
	let emailValue = inputEmail.value;
	console.log(emailValue);
});

let studentList = document.getElementById('classe56').innerText.toLowerCase();
studentList = studentList.split(';');
console.dir(studentList);

for (let i = 0; i < studentList.length; i++) {
	studentList[i] = studentList[i].split(',');
}

console.dir(studentList);