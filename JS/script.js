/**contactUs */
const nameInput = document.getElementById('name-input');

nameInput.addEventListener('input', function() {
  if (nameInput.value !== '') {
    nameInput.style.color = 'black-text';
  } else {
    nameInput.style.color = 'pink-text';
  }
});
