

	
	
// Validate fields entered by the user: name, phone, password, and email
function validate(event) {
	
	let error= 0;
	
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
	if(!isOnlyLetters(name)){
		fName.style.border='2px solid #dc3545';
		errorName.style.display='block';
		error++
	} else {
		fName.style.border='2px solid green';
		errorName.style.display='none';
	}

	let email = fEmail.value; 	
	if (!isEmail(email)){
		fEmail.style.border='2px solid #dc3545';
		errorEmail.style.display='block';
		error++;
	} else{
		fEmail.style.border='2px solid green';
		errorEmail.style.display='none';
	}

	let address = fAddress.value;
	if(!isLettersAndNumbers(address)){
		fAddress.style.border ='2px solid #dc3545';
		errorAddress.style.display='block';
		error++;
	} else{
		fAddress.style.border='2px solid green';
		errorAddress.style.display='none';
	} 

	let lastName = fLastN.value;
	if(!isOnlyLetters(lastName)){
		fLastN.style.border='2px solid #dc3545';
		errorLastN.style.display='block';
		error++;
	} else {
		fLastN.style.border='2px solid green';
		errorLastN.style.display='none';
	}

	let password = fPassword.value;
	if(!isLettersAndNumbers(password)){
		fPassword.style.border='2px solid #dc3545';
		errorPassword.style.display='block';
		error++;
	} else {
		fPassword.style.border='2px solid green';
		errorPassword.style.display='none';
	}
	
	let phone = fPhone.value;
	if (!isOnlyNumber(phone)){
		fPhone.style.border='2px solid #dc3545';
		errorPhone.style.display='block';
		error++;
	} else{
		fPhone.style.border='2px solid green';
		errorPhone.style.display='none';
	}

		 
	if(error>0){
		alert("Please review your infomation");
	}else{
		alert("Successful");
	}


}

	//Check for ONLY the lower or uppercase letters, minimum 3
	function isOnlyLetters(name) {
		return /^[A-Za-z]{3,}$/.test(name);
	}

	//Check for email format - need to correct
	function isEmail (fEmail){
		return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(fEmail) && fEmail.length>=3;
	}
	
	//Check for lower case letters and numbers. Min 3, Min 1 letter, Min 1 number. Not only letters and number. 
	function isLettersAndNumbers(fPassword) {
		return fPassword.length >= 3 && /[A-Za-z]/.test(fPassword) && /\d/.test(fPassword);
	}
	
	//Check for ONLY numbers, minimum 4
		function isOnlyNumber(phone){
		return /^\d{3,}$/.test(phone)  && phone.length>=3;
	}
		


