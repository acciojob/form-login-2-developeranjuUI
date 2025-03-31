//your JS code here. If required.
document.getElementById('loginForm').addEventListener('submit',()=>{
	let firstname = document.getElementById('firstname').value;
	let lastname = document.getElementById('lastname').value;
	let phonenumber = document.getElementById('phonenumber').value;
	let email = document.getElementById('email').value;

	let alertMessage = `First Name: ${firstname}\n Last Name: ${lastname}\n Phone Number: ${phonenumber}\n Email ID: ${email}`;
	alert(alertMessage);
	
})