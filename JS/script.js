/**contactUs */
const nameInput = document.getElementById('name-input');

nameInput.addEventListener('input', function() {
  if (nameInput.value !== '') {
    nameInput.style.color = 'pink';
  } else {
    nameInput.style.color = 'black';
  }
});
