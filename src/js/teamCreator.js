import storage from './storage';

const inputTheme = document.querySelector('.js-switch-input');
const body = document.querySelector('body');

inputTheme.addEventListener('change', changeTheme);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

function changeTheme() {
  if (inputTheme.checked) {
    body.classList.remove(Theme.LIGHT);
    body.classList.add(Theme.DARK);
    storage.save('Theme', Theme.DARK);
  } else {
    body.classList.remove(Theme.DARK);
    body.classList.add(Theme.LIGHT);
    storage.save('Theme', Theme.LIGHT);
  }
}

const dynamicTheme = storage.load('Theme');

if (dynamicTheme === Theme.DARK) {
  body.classList.add(Theme.DARK);
  inputTheme.checked = true;
} else {
  body.classList.add(Theme.LIGHT);
}
