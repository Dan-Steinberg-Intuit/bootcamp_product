
var paragraphs = document.getElementsByTagName("p");
console.log(paragraphs);
var textField = paragraphs[0];
console.log(textField);

textField.innerHTML = "Hey hey, my my, rock and roll will never die.";


var headerField = document.getElementById("header1");
console.log(headerField);
headerField.setAttribute("class", "weirdText");


var embedField = document.getElementsByClassName("embed")[0];
console.log(embedField);

embedField.style.color = "green";

