// ADDING ITEMS TO START AND END OF LIST

// Get the <ul> element
var list = document.getElementsByTagName('ul')[0];

// ADD NEW ITEM TO END OF LIST

// Create element
var newItemLast = document.createElement('li');

// Create text node
var newTextLast = document.createTextNode('milk');

// Add text node to element
newItemLast.appendChild(newTextLast);
// Add element end of list
list.appendChild(newItemLast);

// ADD NEW ITEM START OF LIST

// Create element
var newItemFirst = document.createElement('li');

// Create text node
var newTextFirst = document.createTextNode('filter');

// Add text node to element
newItemFirst.appendChild(newTextFirst);

// Add element to list
list.insertBefore(newItemFirst, list.firstChild);


// All <li> elements
var listItems = document.querySelectorAll('li');

// ADD A CLASS OF COOL TO ALL LIST ITEMS

// Loop through elements
for (var i = 0; i< listItems.length; i++) {
// Change class to cool
  listItems[i].className = 'complete';
}



// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING

// h2 element
var heading = document.querySelector('h2');

// h2 text
var headingText = heading.firstChild.nodeValue;

// No. of <li> elements
var totalItems = document.querySelectorAll('li').length;
// Update h2 using innerHTML (not textContent) because it contains markup

var newHeading = headingText + '<span>' + totalItems + '</span>'
;
heading.textContent = newHeading;
