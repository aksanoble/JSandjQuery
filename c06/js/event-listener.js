// Declare function
function checkUsername() {
  // Get feedback element
  var elMsg = document.getElementById('feedback');
// If username too short
  if (this.value.length < 5) {
    elMsg.textContent = 'Enter a username with 5 or more characters';
  } else {
    elMsg.content = '';
  }
}

// Get username input
elUsername = document.getElementById('username');

// When it loses focus call checkUsername()
elUsername.addEventListener('blur', checkUsername, false);
