function setup() {
  var textInput = document.getElementById('message');
  textInput.focus();
}

window.addEventListener('DOMContentLoaded', setup, false);

window.addEventListener('beforeunload', function() {return 'You have unsaved changes.';}, false);
