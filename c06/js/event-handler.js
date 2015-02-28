// Declare function
function checkUsername() {
  var elMsg = document.getElementById('feedback');
  if (this.value.length < 5) {
    elMsg.textContent = 'Username must be at least 5 characters';
  } else {
    elMsg.textContent = '';
  }
}

// Get username input
var elUsername = document.getElementById('username');


// When it loses focus call checkuserName()
elUsername.onblur = checkUsername;
