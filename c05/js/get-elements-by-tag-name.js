//find li elements

var elements = document.getElementsByTagName('li');

//If 1 or more are found in the node list
if (elements.length > 0) {
  el = elements[0];
  el.className = 'cool';
}
