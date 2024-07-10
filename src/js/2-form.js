const STORAGE_KEY = 'feedback-form-state';

let formData = {};

const form = document.querySelector('.feedback-form');

form.addEventListener('input', formInput);
form.addEventListener('submit', formSubmit);

populateForm();

function formSubmit(event) {
  event.preventDefault();

  if (email.value === '' || message.value === '') {
    return alert('Please fill in all the fields!');
  }
  localStorage.removeItem(STORAGE_KEY);

  event.currentTarget.reset();
}

function formInput(event) {
  const value = event.target.value;
  const key = event.target.name;
  localStorage.setItem(STORAGE_KEY, value);

  try {
    formData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  } catch (err) {
    console.log(err);
    return;
  }
  if (formData) {
    formData[key] = value;
  } else {
    formData = {
      [key]: value,
    };
  }
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  } catch (err) {
    console.log(err);
    return;
  }
}

function populateText() {
  try {
    formData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  } catch (err) {
    console.log(err);
    return;
  }
  if (!formData) {
    return;
  }
  for (const key in formData) {
    form.elements[key].value = formData[key];
  }
}
