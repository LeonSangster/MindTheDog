const form = document.getElementById('login-form');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault(); // Prevent the form from submitting

  // Get the values from the form fields
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Check if the username and password are correct
  if (username === 'example' && password === 'password') {
    alert('Login successful!');
    form.reset(); // Clear the form fields
  } else {
    alert('Invalid username or password. Please try again.');
  }
}
