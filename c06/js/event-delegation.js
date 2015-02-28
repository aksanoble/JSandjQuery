function itemDone(e) {
  var target = e.target;
  console.log(target);
  var elParent = target.parentNode;
  var elGrandparent = elParent.parentNode;
   elGrandparent.removeChild(elParent);
  e.preventDefault();
}

var el = document.getElementById('shoppingList');
el.addEventListener('click', function(e) {itemDone(e);
}, false);
