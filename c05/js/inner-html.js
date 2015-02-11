//Store the first item in a variable

var firstItem = document.getElementById('one');

//get text content from the first item

var itemContent = firstItem.innerHTML;

//update content of first item
firstItem.innerHTML = '<a href=\"http://example.com\">' + itemContent + '</a>'
