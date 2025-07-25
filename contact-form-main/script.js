const form = document.querySelector("form");

form.addEventListener('submit', (e) => {
  e.preventDefault();

  // form.querySelectorAll('.error-label').forEach((err) => err.innerText = '')


  form.querySelectorAll('input[type=text],textarea[name="message"]').forEach((input) => {
    const errorLabel = input.nextElementSibling;
    if (input.value.trim() === '') {
      errorLabel.innerText = 'This field is required';
    } else {
      errorLabel.innerText = '';
    }

  });

  const email = form.querySelector('input[type="email"]');
  const emailError = email.nextElementSibling;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email.value.trim() === '') {
    emailError.innerText = 'This field is required';
  } else if (!emailRegex.test(email.value.trim())) {
    emailError.innerText = 'Please enter a valid email address';
  }
  else {
    emailError.innerText = '';
  }


  const isChecked = form.querySelector('input[name="option"]:checked');
  const err = document.querySelector('.query-error')
  if (!isChecked) {
    err.innerText = 'Please select a query type'
  } else {
    err.innerText = ''
  }

const checkBox = form.querySelector('input[type=checkbox]:checked');
  const err_box = document.querySelector('.check-box-error')
if (!checkBox) {
     err_box.innerText = 'To submit this form. please consent to being contacted'
  } else {
    err_box.innerText = ''
  }


})






























