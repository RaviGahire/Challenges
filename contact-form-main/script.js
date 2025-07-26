const form = document.querySelector("form");
const toast = document.querySelector('.toast');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  let isValid = true;

  // Validate text inputs and textarea
  form.querySelectorAll('input[type="text"], textarea[name="message"]').forEach((input) => {
    const errorLabel = input.nextElementSibling;
    if (input.value.trim() === '') {
      errorLabel.innerText = 'This field is required';
      isValid = false;
    } else {
      errorLabel.innerText = '';
    }
  });

  // Validate email
  const email = form.querySelector('input[type="email"]');
  const emailError = email.nextElementSibling;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email.value.trim() === '') {
    emailError.innerText = 'This field is required';
    isValid = false;
  } else if (!emailRegex.test(email.value.trim())) {
    emailError.innerText = 'Please enter a valid email address';
    isValid = false;
  } else {
    emailError.innerText = '';
  }

  // Validate radio input
  const isChecked = form.querySelector('input[name="option"]:checked');
  const err = document.querySelector('.query-error');
  if (!isChecked) {
    err.innerText = 'Please select a query type';
    isValid = false;
  } else {
    err.innerText = '';
  }

  // Validate checkbox
  const checkBox = form.querySelector('input[type=checkbox]:checked');
  const err_box = document.querySelector('.check-box-error');
  if (!checkBox) {
    err_box.innerText = 'To submit this form, please consent to being contacted';
    isValid = false;
  } else {
    err_box.innerText = '';
  }

  // Show toast if form is valid
  if (isValid) {
    toast.style.display = 'block';
    setTimeout(() => {
      toast.style.display = 'none';
    }, 4000);

    // You can reset the form here if needed:
    form.reset();
  }
});
