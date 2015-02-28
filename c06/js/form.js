var elForm = document.getElementById('formSignup');
var elSelectPackage = document.getElementById('package');
var elPackageHint = document.getElementById('packageHint');
var elTerms = document.getElementById('terms');
var elTermsHint = document.getElementById('termsHint');

function packageHint() {
  var package = this.options[this.selectedIndex].value;
  if (package == 'monthly') {
    elPackageHint.innerHTML = 'Save Rs. 500 if you pay for 1 year!';
  } else {
    elPackageHint.innerHTML = 'Wise Choice';
  }

}

function checkTerms(e) {
  if(!elTerms.checked) {
    elTermsHint.innerHTML = 'You must agree to the terms';
    e.preventDefault();

  }
}

elForm.addEventListener('submit', checkTerms, false);
elSelectPackage.addEventListener('change', packageHint, false);
