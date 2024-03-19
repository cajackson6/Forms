// Cody Jackson
// WEB 115
// 02-03-24

document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('myForm');
  const input = document.getElementById('inputField');
  const error = document.createElement('span');
  error.classList.add('error');
  input.parentNode.insertBefore(error, input.nextSibling);

  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting

    const inputValue = input.value.trim();
    const alphanumericPattern = /^[a-zA-Z0-9]+$/;

    if (!alphanumericPattern.test(inputValue)) {
      error.textContent = 'Input must be alphanumeric';
    } else {
      error.textContent = ''; // Clear any previous error message
      alert('Form submitted successfully'); // Display confirmation (for testing)
      form.reset(); // Reset the form
    }
  });
});
