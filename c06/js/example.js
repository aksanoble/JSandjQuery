var noteName = document.getElementById('noteName');

function writeLabel(e) {
  noteName.textContent = e.target.value;
}

function recorderControls(e) {
  target = e.target;
 e.preventDefault();
  switch(target.getAttribute('data-state')) {
    case 'record':
      record(target);
      break;
    case 'stop':
      stop(target);
      break;
  }
};

function record(target) {
  target.setAttribute('data-state', 'stop');
  target.textContent = 'stop';
}
function stop(target) {
  target.setAttribute('data-state', 'record');
 target.textContent = 'record';
}

document.addEventListener('input', writeLabel, false);
document.addEventListener('click', recorderControls, false);
