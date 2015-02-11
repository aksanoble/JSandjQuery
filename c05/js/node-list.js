//Store NodeList reference
var hotItems = document.querySelectorAll('li.hot');

//if it contains items

if (hotItems.length > 0)

//loop through each item

{
  for (var i = 0; i < hotItems.length; i++) {
//change class attribute

    hotItems[i].className = 'cool';
  }
}
