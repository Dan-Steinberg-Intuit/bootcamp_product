function validateForm() {
	var mainForm = document.forms["mainForm"];
	var password1 = mainForm["password"].value;
	var password2 = mainForm["passwordVerify"].value;

	// name check
	var nameRegex = /a-zA-Z\\d']+/;
	var firstName = mainForm["firstName"];
	var lastName = mainForm["firstName"];
	if (!nameRegex.test(firstName)) {
		alert("Only letters or numbers are allowed in the First Name field!");
		return false;
	}
	if (!nameRegex.test(lastName)) {
		alert("Only letters or numbers are allowed in the Last Name field!");
		return false;
	}

	// password check
	if ( !password1 || !password2 || password1 !== password2 ) {
		alert("The passwords must match!");
		return false;
	} else {
		if (password1.length < 8) {
			alert("Your password must be 8 characters of more!");
			return false;
		}
	}

	// favorite number
	var favNumber = mainForm["favNumber"].value;
	if (favNumber < 1 || favNumber > 100) {
		alert("Favorite Number must be between 1 and 100!");
		return false;
	}

	// Else everything must have passed validation!
	return true;
}