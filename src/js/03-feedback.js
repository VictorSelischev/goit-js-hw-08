import throttle from 'lodash.throttle';

const LOCALSTORAGE_FORM_STATE = 'feedback-form-state';
const save = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
};

const load = key => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
};

const form = document.querySelector('.feedback-form');
const {
  elements: { email, message },
} = form;

CheckValueLocalStorage();

form.addEventListener('input', throttle(handleSaveLocalStorageInput), 500);
form.addEventListener('submit', handleOutputDataSubmit);

// ===============================
// FUNCTION

function CheckValueLocalStorage() {
  if (localStorage.getItem(LOCALSTORAGE_FORM_STATE) === null) {
    email.value = '';
    message.value = '';
  } else {
    const formData = load(LOCALSTORAGE_FORM_STATE);
    email.value = formData.email;
    message.value = formData.message;
  }
}

function handleSaveLocalStorageInput() {
  const formDataSave = {};
  formDataSave.email = email.value;
  formDataSave.message = message.value;

  save(LOCALSTORAGE_FORM_STATE, formDataSave);
}

function handleOutputDataSubmit(event) {
  event.preventDefault();

  const outputDataServer = load(LOCALSTORAGE_FORM_STATE);
  console.log(outputDataServer);

  localStorage.removeItem(LOCALSTORAGE_FORM_STATE);
  event.currentTarget.reset();
}
