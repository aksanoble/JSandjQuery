//find hot items
var elements = document.getElementsByClassName('hot');

//if 3 or more
if (elements.length > 2) {
  var el = elements[2]; //select the third from the list

  el.className = 'cool';
  // change the value of its class attribute
}

