
// desktop form
const email = document.getElementById('mail');

const characters = /^[a-z0-9-]+@[a-z0-9]+\.[a-z0-9.]+$/;

document.querySelector('.form_button').addEventListener('click', (event) => {
  if (!characters.test(email.value)) {
    const error = document.querySelector('.error');

    error.style.display = 'block';

    event.preventDefault();
    if (email.value === '') {
      error.style.display = 'none';
    }
  }
});

email.addEventListener('input', () => {
  if (characters.test(email.value)) {
    const error = document.querySelector('.error');
    error.style.display = 'none';
  }
});

const emailD = document.getElementById('mailD');
const charactersD = /^[a-z0-9-]+@[a-z0-9]+\.[a-z0-9.]+$/;

document.querySelector('.form_buttonD').addEventListener('click', (event) => {
  const errorD = document.querySelector('.errorD');

  if (!charactersD.test(emailD.value)) {
    errorD.style.display = 'block';

    event.preventDefault();
    if (emailD.value === '') {
      errorD.style.display = 'none';
    }
  }
});

emailD.addEventListener('input', () => {
  if (charactersD.test(emailD.value)) {
    const errorD = document.querySelector('.errorD');
    errorD.style.display = 'none';
  }
});

