import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
const email = document.querySelector('email');
const btn = document.querySelector('submit');
const LOCALSTORAGE = 'feedback-form-state';
const textarea = document.querySelector('message');

form.addEventListener(
  'input',
  throttle(e => {
    localStorage.setItem(LOCALSTORAGE, JSON.stringify(e.target.value));
    console.log(e.target.value);
  }, 1000),
);
