const form = document.querySelector("form");

form.addEventListener('submit', (e) => {
  e.preventDefault();

  form.querySelectorAll('.error-label').forEach((err) => err.innerText = '')


  form.querySelectorAll('input[type=text]').forEach((input) => {
    const errorLabel = input.nextElementSibling;
    if (input.value.trim() === '') {
      errorLabel.innerText = 'This field is required';
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

})






























