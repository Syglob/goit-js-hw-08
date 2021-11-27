import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const LOCALSTORAGE = 'feedback-form-state';
const email = document.querySelector('[name="email"]');
const textarea = document.querySelector('[name ="message"]');
restoreForm();
//
const formData = {};
//get data from inputs
form.addEventListener('input', throttle(dataInputs, 500));
//
function dataInputs(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(
    LOCALSTORAGE,
    JSON.stringify({
      email: email.value,
      message: textarea.value,
    }),
  );
}

//resert local storage
form.addEventListener('submit', formSubmit);
function formSubmit(e) {
  e.preventDefault();
  e.target.reset();
  console.log('form submitted');
  localStorage.removeItem(LOCALSTORAGE);
}
//restore form from local storage

function restoreForm() {
  const dataSave = localStorage.getItem(LOCALSTORAGE);
  if (dataSave) {
    const parsData = JSON.parse(dataSave);
    let formData = {};
    formData = parsData;
    textarea.value = parsData.message;
    email.value = parsData.email;
    console.log(parsData);
  }
}
