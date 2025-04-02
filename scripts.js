document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let message = document.getElementById('message').value;

  if (name && email && message) {
    alert("Message sent! Thank you for reaching out.");
    // You can integrate an email service here to send the form data if needed.
    document.getElementById('contact-form').reset();
  } else {
    alert("Please fill in all fields.");
  }
});
