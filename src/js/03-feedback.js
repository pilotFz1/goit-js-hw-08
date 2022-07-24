import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const formDataText = {};

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('.feedback-form input'),
  email: document.querySelector('#email'),
};

populateTextarea();

refs.form.addEventListener('submit', onFormSubmit);
refs.input.addEventListener('input', throttle(onTextareaInput, 500));

refs.form.addEventListener('input', e => {
  formDataText[e.target.name] = e.target.value;
  onTextareaInput();
});

function onFormSubmit(evt) {
  evt.preventDefault();

  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  console.log(formDataText);
}

function onTextareaInput() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formDataText));
}

function populateTextarea() {
  let input = localStorage.getItem(STORAGE_KEY);
  if (input) {
    input = JSON.parse(input);
    Object.entries(input).forEach(([name, value]) => {
      formDataText[name] = value;
      refs.form.elements[name].value = value;
    });
  }
}
