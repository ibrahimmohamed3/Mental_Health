/**contactUs */
const nameInput = document.getElementById('name-input');
const emailInput = document.getElementById('email-input');
const messageInput = document.getElementById('message-input');

nameInput.addEventListener('input', function() {
  if (nameInput.value !== '') {
    nameInput.style.backgroundColor = 'pink';
  } else {
    nameInput.style.backgroundColor = 'transparent';
  }
});

document.getElementById('send-button').addEventListener('click', function() {
  // Retrieve input values
  var name = nameInput.value;
  var email = emailInput.value;
  var message = messageInput.value;

  alert("Message sent successfully!");
});


