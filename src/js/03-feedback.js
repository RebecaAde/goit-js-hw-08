import throttle from 'lodash/throttle';

const key = 'feedback-form-state';

const feedbackForm = document.querySelector('.feedback-form');

feedbackForm.addEventListener('input', throttle(onInput, 500));
feedbackForm.addEventListener('submit', throttle(onFormSubmit, 500));

let inputForm = JSON.parse(localStorage.getItem(key));
const { email, message } = feedbackForm.elements;

function onInput(e) {
  e.preventDefault();
  inputForm = { email: email.value, message: message.value };
  localStorage.setItem(key, JSON.stringify(inputForm));
}

function onFormSubmit(e) {
  e.preventDefault();
  console.log({ email: email.value, message: message.value });
  if (email.value === '' || message.value === '') {
    alert('Please fill in the field');
  }
}
