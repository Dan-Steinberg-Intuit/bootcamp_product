function processClick(name) {
	var newNode = document.createElement("p");
	newNode.appendChild(document.createTextNode("Button clicked: " + name + " : " + Date.now()));
	document.body.appendChild(newNode);
}


var button = document.getElementById("warpButton");

button.addEventListener("click", processClick);


