var form = document.getElementsByTagName('form')[0];
var email = document.getElementById("email");
var errorIcon = document.querySelector('.error-icon');
var errorMessage = document.querySelector('.error-message');

email.addEventListener("input", function() {
  if(email.validity.valid) {
    errorMessage.textContent = "";
    errorMessage.className = "error-message";
    errorIcon.className = "error-icon";
  }
}, false);
form.addEventListener("submit", function(event) {
  if(!email.validity.valid || email.value == "") {
    errorMessage.textContent = "Please enter valid email";
    errorMessage.className = "error-message active";
    errorIcon.className = "error-icon visible";
    event.preventDefault();
  }
}, false);
