import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const LOCALSTORAGE = 'feedback-form-state';
const email = document.querySelector('input');
const textarea = document.querySelector('.feedback-form textarea');
restoreForm();
const formData = {};
//
form.addEventListener('input', throttle(dataInputs, 1000));
function dataInputs(e) {
  formData[e.target.name] = e.target.value;
  console.log(formData);
  localStorage.setItem(LOCALSTORAGE, JSON.stringify(formData));
}
//
form.addEventListener('submit', formSubmit);
function formSubmit(e) {
  e.preventDefault();
  e.target.reset();
  console.log('form submitted');
  localStorage.removeItem(LOCALSTORAGE);
}
//
function restoreForm() {
  const dataSave = localStorage.getItem(LOCALSTORAGE);
  if (dataSave) {
    const parsData = JSON.parse(dataSave);
    textarea.value = parsData.message;
    email.value = parsData.email;
    console.log(parsData);
  }
}
