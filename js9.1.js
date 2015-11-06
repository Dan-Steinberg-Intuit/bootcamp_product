function IsAPalindrome(string) {

	// Only need to search halfway through the string,
	// since the front half should be the same as the back half
	var fullLenth = string.length;
	var halfLength = Math.ceil(fullLenth/2);

	for (var index = 0; index < halfLength; index++) {
		if ( string.charAt(index) !== string.charAt(fullLenth-index-1)) {
			return false;
		}
	}

	// Everything matched, so it must be a palindrome
	return true;
}

function PalindromeCheck(string) {
	return string + " " + (IsAPalindrome(string) ? "is" : "is not") + " a palindrome.";
}


console.log(PalindromeCheck("civic"));
console.log(PalindromeCheck("abcde"));
console.log(PalindromeCheck("moon"));
console.log(PalindromeCheck("racecar"));

