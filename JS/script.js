/**contactUs */
const nameInput = document.getElementById('name-input');

nameInput.addEventListener('input', function() {
  if (nameInput.value !== '') {
    nameInput.style.color = 'pink-text';
  } else {
    nameInput.style.color = 'black-text';
  }
});


document.getElementById('send-button').addEventListener('click', function() {
    // Retrieve input values
    var name = document.getElementById('name-input').value;
    var email = document.getElementById('email-input').value;
    var message = document.getElementById('message-input').value;

    alert('Message sent successfully!');
  });


