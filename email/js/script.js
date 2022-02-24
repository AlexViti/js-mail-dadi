const btnSend = document.getElementById('send');
let inputEmail = document.getElementById('email');

btnSend.addEventListener('click', function() {
	let emailValue = inputEmail.value;
	console.log(emailValue);
});

let studentList = document.getElementById('classe56').innerText.toLowerCase();
studentList = studentList.split(';');
console.dir(studentList);
let studentEmail = [];

for (let i = 0; i < studentList.length; i++) {
	studentList[i] = studentList[i].split(',');
	studentEmail.push(studentList[i][0].charAt(0) + '.' + studentList[i][1].replace(/\s/g, '') + '@boolean.careers')
}

console.dir(studentEmail);
