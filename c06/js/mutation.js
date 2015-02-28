var elList = document.getElementById('list');
var addLink = document.querySelector('a');
var counter = document.getElementById('counter');

function addItem(e) {
  e.preventDefault();
  newEl = document.createElement('li');
  newText = document.createTextNode('another task');
  newEl.appendChild(newText);
  elList.appendChild(newEl);
}

function updateCount() {
  numberOfItems = list.getElementsByTagName('li').length;
  counter.innerHTML = numberOfItems;
}

addLink.addEventListener('click', addItem, false);
elList.addEventListener('DOMNodeInserted', updateCount, false);
