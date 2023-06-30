
// Exercise 6
function validate() {
	var error = 0;
	// Get the input fields
	var fName = document.getElementById("fName");
	let fLastN = document.getElementById("fLastN");
	let fPhone = document.getElementById("fPhone");
	let fPassword = document.getElementById("fPassword");

	var fEmail = document.getElementById("fEmail");

	// Get the error elements
	var errorName = document.getElementById("errorName");
	var errorEmail = document.getElementById("errorEmail");  
	
	// Validate fields entered by the user: name, phone, password, and email
	
	//Check for ONLY the lower or uppercase letters, minimum 3
	function isOnlyLetters(input) {
		return /^[A-Za-z]{3,}$/.test(input);
	}

		if(!isOnlyLetters(fName) ){
			error++;
		}
		if(!isOnlyLetters(fLastN) ){
			error++;
		}

	//Check for ONLY numbers, minimum 4
		function isOnlyNumber(fPhone){
		return /^\d{3,0}/.test(fPhone);
	}
		
	if(!isOnlyNumber(fPhone)){
		error++;
	
	}
	//Check for lower case letters and numbers. Min 3, Min 1 letter, Min 1 number. Not only letters and number. 
	function isLettersAndNumbers(fPassword) {
		return fPassword.length >= 3 && /[A-Za-z]/.test(fPassword) && /\d/.test(fPassword);
	}
	
	  	if(!isLettersAndNumbers(fPassword)) {
			error++;
		}

	
	//Check for email format - need to correct
	function isEmail (fEmail){
		return /[a-z]/.test(fEmail) && /[@]/.test(fEmail) && /\d/.test(fEmail);
	}
	

	

	if(fName.value == ""){
		error++;
	}

	

	if(fEmail.value == ""){
		error++;
	}
	 
	if(error>0){
		alert("Error");
	}else{
		alert("OK");
	}

}

function validate(){
	if(fName==""){};
}
