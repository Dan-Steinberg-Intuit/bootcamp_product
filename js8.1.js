function FizzBuzz(index) {

	var fizzBuzzStr = "";

	if ((index % 3) === 0) {
		fizzBuzzStr += "fizz";
	}

	if ((index % 5) === 0) {
		fizzBuzzStr += "buzz";
	}

	return fizzBuzzStr || index;

}

for (var index = 1; index <= 100; index++) {
	console.log(FizzBuzz(index));
}