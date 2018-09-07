var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var items = document.getElementsByTagName("li");
var listLength = items.length;


function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	var btn = document.createElement("button");
	btn.appendChild(document.createTextNode("Delete"));
	li.appendChild(btn);
	btn.onclick=removeParent;
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

// Add delete buttons for list items
function addDeleteButton() {
	var btn = document.createElement("button");
	btn.appendChild(document.createTextNode("Delete"));
	items[i].appendChild(btn);
	btn.onclick=removeParent;
}

for ( i=0; i<listLength;i++) {
	addDeleteButton();
}

function removeParent(event) {
	event.target.parentNode.remove();
}
// crossout or uncrossout items
function toggleClass(event) {
		event.target.classList.toggle("done");
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", toggleClass);
