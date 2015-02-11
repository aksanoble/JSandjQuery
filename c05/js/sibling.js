// Starting point + find its siblings


var startItem = document.getElementById('two');
var prevItem  = startItem.previousSibling;
var nextItem = startItem.nextSibling;

//Change the class name of the siblings

prevItem.className = 'complete';
nextItem.className = 'cool';
