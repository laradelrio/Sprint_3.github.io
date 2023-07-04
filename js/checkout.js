



// Validate fields entered by the user: name, phone, password, and email
function validate(event) {

	let error = 0;

	// Get the input fields
	let fName = document.getElementById("fName");
	let fEmail = document.getElementById("fEmail");
	let fAddress = document.getElementById("fAddress");
	let fLastN = document.getElementById("fLastN");
	let fPassword = document.getElementById("fPassword");
	let fPhone = document.getElementById("fPhone");

	// Get the error elements
	let errorName = document.getElementById("errorName");
	let errorEmail = document.getElementById("errorEmail");
	let errorAddress = document.getElementById("errorAddress");
	let errorLastN = document.getElementById("errorLastN");
	let errorPassword = document.getElementById("errorPassword")
	let errorPhone = document.getElementById("errorPhone");
	event.preventDefault();

	let name = fName.value;
	if (!isOnlyLetters(name)) {
		fName.classList.add("wrong-input-red");
		errorName.classList.add("do-display");
		error++;
	} else {
		fName.classList.remove("wrong-input-red");
		errorName.classList.remove("do-display");
	}

	let email = fEmail.value;
	if (!isEmail(email)) {
		fEmail.classList.add("wrong-input-red");
		errorEmail.classList.add("do-display");
		error++;
	} else {
		fEmail.classList.remove("wrong-input-red");
		errorEmail.classList.remove("do-display");
	}

	let address = fAddress.value;
	if (!isLettersAndNumbers(address)) {
		fAddress.classList.add("wrong-input-red");
		errorAddress.classList.add("do-display");
		error++;
	} else {
		fAddress.classList.remove("wrong-input-red");
		errorAddress.classList.remove("do-display");
	}

	let lastName = fLastN.value;
	if (!isOnlyLetters(lastName)) {
		fLastN.classList.add("wrong-input-red");
		errorLastN.classList.add("do-display");
		error++;
	} else {
		fLastN.classList.remove("wrong-input-red");
		errorLastN.classList.remove("do-display");
	}

	let password = fPassword.value;
	if (!isLettersAndNumbers(password)) {
		fPassword.classList.add("wrong-input-red");
		errorPassword.classList.add("do-display");
		error++;
	} else {
		fPassword.classList.remove("wrong-input-red");
		errorPassword.classList.remove("do-display");
	}

	let phone = fPhone.value;
	if (!isOnlyNumber(phone)) {
		fPhone.classList.add("wrong-input-red");
		errorPhone.classList.add("do-display");
		error++;
	} else {
		fPhone.classList.remove("wrong-input-red");
		errorPhone.classList.remove("do-display");
	}

	if (error > 0) {
		alert("Please review your infomation");
	} else {
		alert("Successful");
	}
}

//Check for ONLY the lower or uppercase letters, minimum 3
function isOnlyLetters(name) {
	return /^[A-Za-z]{3,}$/.test(name);
}

//Check for email format - need to correct
function isEmail(fEmail) {
	return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(fEmail) && fEmail.length >= 3;
}

//Check for lower case letters and numbers. Min 3, Min 1 letter, Min 1 number. Not only letters and number. 
function isLettersAndNumbers(fPassword) {
	return fPassword.length >= 3 && /[A-Za-z]/.test(fPassword) && /\d/.test(fPassword);
}

//Check for ONLY numbers, minimum 4
function isOnlyNumber(phone) {
	return /^\d{3,}$/.test(phone) && phone.length >= 3;
}



