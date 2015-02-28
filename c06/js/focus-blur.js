var el = document.getElementById('username');
var elMsg = document.getElementById('feedback');


function checkUsername() {
  var username = el.value;
  if (username.length < 5) {
  elMsg.className = 'warning';
   elMsg.textContent = 'Enter a longer username';
  } else {
    elMsg.textContent = '';
  }
}

function tipUsername() {
  elMsg.className = 'tip';
  elMsg.textContent = 'Username must be at least 5 characters or more';
}

el.addEventListener('focus', tipUsername, false);
el.addEventListener('blur', checkUsername, false);
