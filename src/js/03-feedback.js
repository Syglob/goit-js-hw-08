import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const LOCALSTORAGE = 'feedback-form';
// const EMAIL_STORAGE = 'email';
// const email = document.querySelector('email');
const textarea = document.querySelector('textarea');

form.addEventListener('submit', formSubmit);
form.addEventListener('input', formTextarea);
textarea.addEventListener('input', formTextarea);

function formSubmit(evt) {
  evt.preventDefault();
  evt.currentTarget.reset();
  localStorage.removeItem(LOCALSTORAGE);
}

function formTextarea(evt) {
  const textarea = evt.target.value;
  localStorage.setItem(LOCALSTORAGE, textarea);
  console.log(evt.target.value);
}

function restoreForm() {
  const textareaMessage = localStorage.getItem(LOCALSTORAGE);
  if (textareaMessage) {
    textarea.value = textareaMessage;
  }
}
restoreForm();
