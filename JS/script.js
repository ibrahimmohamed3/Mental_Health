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

emailInput.addEventListener('input', function() {
  if (isValidEmail(emailInput.value)) {
    emailInput.style.backgroundColor = 'pink';
  } else {
    emailInput.style.backgroundColor = 'transparent';
  }
});

messageInput.addEventListener('input', function() {
  if (messageInput.value !== '') {
    messageInput.style.backgroundColor = 'pink';
  } else {
    messageInput.style.backgroundColor = 'transparent';
  }
});

document.addEventListener('click', function() {
    var sendButton = document.getElementById('send-button');
    var nameInput = document.getElementById('name-input');
    var emailInput = document.getElementById('email-input');
    var messageInput = document.getElementById('message-input');
  
    sendButton.addEventListener('click', function() {
      var name = nameInput.value;
      var email = emailInput.value;
      var message = messageInput.value;
  
      if (name !== '' && isValidEmail(email) && message !== '') {
        alert("Message sent successfully!");
      } else {
        alert("Please fill in all the fields correctly.");
      }
    });
  
    function isValidEmail(email) {
      // Email validation regular expression
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
  });
  
