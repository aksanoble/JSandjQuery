//Get feedback element
var elMsg = document.getElementById('feedback');

//Get username element
var elUsername = document.getElementById('username');

// Declare function
function checkUsername(minLength) {
  if(elUsername.value.length < minLength) {
    elMsg.textContent = 'Username must be of ' + minLength + ' characters or more' ;
  } else {
    elMsg.textContent = '';
  }
}

//add Event Listener on blur

elUsername.addEventListener('blur', function(){checkUsername(6);}, false);

var minlen = 6;

