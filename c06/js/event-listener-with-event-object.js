function checkLength (e, minLength) {
  elMsg = e.target.nextSibling;

  if(e.target.value.length < minLength) {
  elMsg.innerHTML = 'Username must be ' + minLength + ' characters or more';
  } else {
    elMsg.innerHTML = '';
  }
}

var elUsername = document.getElementById('username');
elUsername.addEventListener('blur', function(e) {checkLength(e,5);}, false);
