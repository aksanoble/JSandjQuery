function charCount(e) {
  var textEntered = document.getElementById('message').value;
  var charDisplay = document.getElementById('charactersLeft');
  counter = (180 - textEntered.length);
  charDisplay.textContent = counter;

  lastKey = document.getElementById('lastkey');
  lastKey.textContent = 'Last Key in ASCII code: ' + e.keycode;
}

var el = document.getElementById('message');
el.addEventListener('keypress', charCount, false );
