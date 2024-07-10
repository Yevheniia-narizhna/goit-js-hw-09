const STORAGE_KEY = 'feedback-msg';

const form = document.querySelector('.feedback-form');
const textarea = form.querySelector('textarea');
textarea.addEventListener('input', textInput);
form.addEventListener('submit', formSubmit);

populateText();

function textInput(event) {
  const value = event.target.value;
  localStorage.setItem(STORAGE_KEY, value);
}

function formSubmit(event) {
  event.preventDefault();
  localStorage.removeItem(STORAGE_KEY);

  event.currentTarget.reset();
}

function populateText() {
  const savedMessage = localStorage.getItem(STORAGE_KEY);
  if (savedMessage) {
    textarea.value = savedMessage;
  }
}
