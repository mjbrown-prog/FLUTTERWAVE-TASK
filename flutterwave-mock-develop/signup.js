let html = document.querySelector('html');
let form = document.getElementById('form');
let fullName = document.getElementById('fullname');
let tradingName = document.getElementById('tradingname');
let email = document.getElementById('email');
let password = document.querySelector('.password');
let secret = document.querySelector('.secret');
let expose = document.querySelector('.password-shown');
let input = document.querySelector('.input');

/*
let indicator = document.querySelector('.indicator');
let weak = document.querySelector('.weak');
let quiteWeak = document.querySelector('.quite-weak');
let fairEnough = document.querySelector('.fair-enough');
let strong = document.querySelector('.strong');
let veryStrong = document.querySelector('.very-strong');
let text = document.querySelector('.text');

const regExpWeak = /[a-z]/;
const regExpQuiteWeak = /\d+/;
const regExpFairEnough = /[0-9]\d+/;
const regExpStrong = /.[!,#,$,%,^,&,*,?,_,~,-,(,)]/;
const regExpVeryStrong = /.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/;
*/
// Toggle Icon
secret.addEventListener('click', function () {
  secret.style.display = 'none';
  expose.style.display = 'inline';
  input.setAttribute('type', 'text');
});

expose.addEventListener('click', function () {
  secret.style.display = 'inline';
  expose.style.display = 'none';
  input.setAttribute('type', 'password');
});

// /////////////////////////////////////////

// Check Inputs

function checkInputs() {
  // get the values from the input

  const fullNameValue = fullName.value.trim();
  const tradingNameValue = tradingName.value.trim();
  const emailValue = email.value.trim();
  console.log(fullNameValue);

  if (fullNameValue === '') {
    // show error
    // add error class
    setError(username, 'Username cannot be blank');
  } else {
    setSuccess(username);
  }
}

function setError(input, message) {
  const formGroup = input.parentElement;
  const small = formGroup.querySelector('small');

  // add error message inside small
  small.innerHTML = message;

  // add error class
  formGroup.className = 'form-group error';
}

form.addEventListener('submit', function (e) {
  e.preventDefault();

  checkInputs();
});
/*
let pwd = input.value;

console.log(pwd);

function trigger() {
  if (input.value != '') {
    indicator.style.display = 'block';
    indicator.style.display = 'flex';
    if (
      input.value.length <= 3 &&
      (input.value.match(regExpWeak) ||
        input.value.match(regExpQuiteWeak) ||
        input.value.match(regExpFairEnough) ||
        input.value.match(regExpStrong) ||
        input.value.match(regExpVeryStrong))
    )
      no = 1;
    if (
      input.value.length >= 6 &&
      ((input.value.match(regExpWeak) && input.value.match(regExpQuiteWeak)) ||
        (input.value.match(regExpQuiteWeak) &&
          input.value.match(regExpStrong)) ||
        (input.value.match(regExpStrong) &&
          input.value.match(regExpVeryStrong)) ||
        (input.value.match(regExpWeak) &&
          input.value.match(regExpVeryStrong)) ||
        (input.value.match(regExpWeak) && input.value.match(regExpStrong)))
    )
      no = 2;
  }
  if (
    input.value.length >= 8 &&
    ((input.value.match(regExpWeak) && input.value.match(regExpQuiteWeak)) ||
      (input.value.match(regExpQuiteWeak) && input.value.match(regExpStrong)) ||
      (input.value.match(regExpStrong) &&
        input.value.match(regExpVeryStrong)) ||
      (input.value.match(regExpWeak) && input.value.match(regExpVeryStrong)) ||
      (input.value.match(regExpQuiteWeak) && input.value.match(regExpStrong)) ||
      (input.value.match(regExpWeak) && input.value.match(regExpStrong)))
  )
    no = 3;
  if (
    input.value.length >= 10 &&
    ((input.value.match(regExpWeak) && input.value.match(regExpQuiteWeak)) ||
      (input.value.match(regExpQuiteWeak) && input.value.match(regExpStrong)) ||
      (input.value.match(regExpStrong) &&
        input.value.match(regExpVeryStrong)) ||
      (input.value.match(regExpWeak) && input.value.match(regExpVeryStrong)) ||
      (input.value.match(regExpQuiteWeak) && input.value.match(regExpStrong)) ||
      (input.value.match(regExpWeak) && input.value.match(regExpStrong)))
  )
    no = 4;
  if (
    input.value.length >= 12 &&
    input.value.match(regExpWeak) &&
    input.value.match(regExpQuiteWeak) &&
    input.value.match(regExpFairEnough) &&
    input.value.match(regExpStrong) &&
    input.value.match(regExpVeryStrong)
  )
    no = 5;

  if (no == 1) {
    weak.classList.add('active');
    text.style.display = 'block';
    text.textContent = 'Your password weak ☹️';
    text.classList.add('weak');
  }
  if (no == 2) {
    quiteWeak.classList.add('active');
    text.textContent = 'Your password is quite weak 😔';
    text.classList.add('quiteWeak');
  } else {
    quiteWeak.classList.remove('active');
    text.classList.remove('quiteWeak');
  }
  if (no == 3) {
    weak.classList.add('active');
    quiteWeak.classList.add('active');
    fairEnough.classList.add('active');
    text.textContent = 'Fair enough, but you can do better. 😌';
    text.classList.add('strong');
  } else {
    fairEnough.classList.remove('active');
    text.classList.remove('fairEnough');
  }
  if (no == 4) {
    weak.classList.add('active');
    quiteWeak.classList.add('active');
    fairEnough.classList.add('active');
    strong.classList.add('active');
    text.textContent = 'Strong. Great! 😤';
    text.classList.add('strong');
  } else {
    strong.classList.remove('active');
    text.classList.remove('strong');
  }
  if (no == 5) {
    weak.classList.add('active');
    quiteWeak.classList.add('active');
    fairEnough.classList.add('active');
    strong.classList.add('active');
    veryStrong.classList.add('active');
    text.textContent = 'Strong. Great! 😎';
    text.classList.add('veryStrong');
  } else {
    veryStrong.classList.remove('active');
    text.classList.remove('veryStrong');
  }
}

pwd.addEventListener('keydown', trigger);
*/
