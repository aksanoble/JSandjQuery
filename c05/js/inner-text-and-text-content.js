//Find first element
var firstItem = document.getElementById('one');

//get textcontent
var showTextContent = firstItem.textContent;

// Get value of Inner Text
var showInnerText = firstItem.innerText;

// Show the content of these two properties

var msg = '<p>textContent: ' + showTextContent + '</p>';
var msg = msg + '<p>innerText: ' + showInnerText + '</p>';

var el = document.getElementById('scriptResults');
el.innerHTML = msg;

// Update the first line
firstItem.textContent = 'ground nuts';
