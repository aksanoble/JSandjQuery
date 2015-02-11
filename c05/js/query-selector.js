//query selector only selects first element

var el = document.querySelector('li.hot');
el.className = 'cool';

//querySelectorAll returns the matching node list

var els = document.querySelectorAll('li.hot');

//Second element class changed to cool

els[1].className = 'cool';
