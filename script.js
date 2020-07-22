var form = document.querySelector('.signup-form');
var email = document.getElementById("email");
var errorIcon = document.querySelector('.error-icon');
var errorMessage = document.querySelector('.error-message');

form.addEventListener("submit", function(event) {
  event.preventDefault();
  if(!email.validity.valid || email.value == "") {
    errorMessage.textContent = "Please enter valid email";
    errorIcon.classList.add("visible");
    email.classList.add("error");
  }
});
