const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

form.addEventListener('submit', formSubmit);
form.addEventListener('input', formInput);

populateForm();

function formSubmit(event) {
  const emailForm = form.elements.email.value;
  const messageForm = form.elements.message.value;

  event.preventDefault();
  if (emailForm === '' || messageForm === '') {
    return alert('Please fill in all the fields!');
  }
  console.log({
    email: emailForm,
    message: messageForm,
  });
  localStorage.removeItem(STORAGE_KEY);

  event.currentTarget.reset();
}

function formInput(event) {
  const value = event.target.value;
  const key = event.target.name;

  let formData = {};

  try {
    formData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  } catch (err) {
    console.log(err);
    return;
  }

  // якщо в ЛС існують дані (обʼєкт), то ми звертаємось вже до існуючого обʼєкту, та змінюмо/створюємо поля зі значеннями
  if (formData) {
    formData[key] = value;
  } else {
    // якщо в ЛС немає взагалі даних (обʼєкту), то ми його самостійно створюємо та записуємо туди перший ключ з значенням
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

function populateForm() {
  let formData = {};

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
