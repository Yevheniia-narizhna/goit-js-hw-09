const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const textarea = form.querySelector('textarea');

textarea.addEventListener('input', formInput);

function formInput(event) {
  const value = event.target.value;
  console.log(value);
  localStorage.setItem(STORAGE_KEY, value);
}
