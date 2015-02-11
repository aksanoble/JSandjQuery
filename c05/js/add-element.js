// Create new element
var newEl = document.createElement('li');

// create a new text node
var newText = document.createTextNode('dog');

//attach text node to new element
newEl.appendChild(newText);

//find position where new Element should be added

var position = document.getElementsByTagName('ul')[0];

// Insert new element into position

position.appendChild(newEl);
