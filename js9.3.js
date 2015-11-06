var names = ["Ted", "Roger", "Andrew", "Ben", "Craig", "Swati"];

// Create a list
var list = document.createElement("ul");
for (var index = 0; index < names.length; index++) {
	var newNode = document.createElement("li");
	newNode.appendChild(document.createTextNode(names[index]));
	newNode.setAttribute("id", "item" + (index + 1));
	list.appendChild(newNode);
}

document.body.appendChild(list);

// Now remove a name from the list
var benItem = document.getElementById("item4");
if (benItem) {
	list.removeChild(benItem);
}
