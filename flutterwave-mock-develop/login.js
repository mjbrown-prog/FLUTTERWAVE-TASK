let form = document.getElementById('form');
let html = document.querySelector('html');
let body = document.querySelector('body');
let password = document.querySelector('.password');
let secret = document.querySelector('.secret');
let expose = document.querySelector('.password-shown');
let input = document.querySelector('.input');
let state = false;

// Toggle Icon

function toggle() {
  if (state) {
    state = false;
    secret.style.display = 'none';
    expose.style.display = 'inline';
    input.setAttribute('type', 'text');
  } else {
    state = true;
    secret.style.display = 'inline';
    expose.style.display = 'none';
    input.setAttribute('type', 'password');
  }
}
form.addEventListener('submit', function (e) {
  e.preventDefault();
});

secret.addEventListener('click', toggle);
expose.addEventListener('click', toggle);

// 
