const passwordInput = document.getElementById('password');
const showPasswordIcon = document.getElementById('show-password-icon');
const hidePasswordIcon = document.getElementById('hide-password-icon');
const form = document.querySelector('form');


showPasswordIcon.addEventListener('click', function() {
  passwordInput.type = 'text';
  showPasswordIcon.style.display = 'none';
  hidePasswordIcon.style.display = 'block';
});

hidePasswordIcon.addEventListener('click', function() {
  passwordInput.type = 'password';
  hidePasswordIcon.style.display = 'none';
  showPasswordIcon.style.display = 'block';
});


// form.addEventListener('submit', (event) => {
//   event.preventDefault();
//   // Display the 404 page
//   window.location.href = '404.html';

//   // Store the email and password in local storage
//   const email = document.getElementById('username').value;
//   const password = document.getElementById('password').value;
//   localStorage.setItem('email', email);
//   localStorage.setItem('password', password);
// });