import throttle from 'lodash.throttle';

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
form.addEventListener('input', handleSaveLocalStorageInput);

// ===============================
// FUNCTION

// evt.preventDefault();

function handleSaveLocalStorageInput(evt) {
  const {
    elements: { email, message },
  } = evt.currentTarget;
    
    const formData = {};

    formData.email = email.value;
    formData.message = message.value;


}
