document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();

  // Clear previous errors and success
  document.getElementById('nameError').textContent = '';
  document.getElementById('emailError').textContent = '';
  document.getElementById('messageError').textContent = '';
  document.getElementById('successMessage').style.display = 'none';

  // Get input values
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  let valid = true;

  // Name validation
  if (name === '') {
    document.getElementById('nameError').textContent = 'Name is required.';
    valid = false;
  }

  // Email validation
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/i;
  if (email === '') {
    document.getElementById('emailError').textContent = 'Email is required.';
    valid = false;
  } else if (!emailRegex.test(email)) {
    document.getElementById('emailError').textContent = 'Enter a valid email address.';
    valid = false;
  }

  // Message validation
  if (message === '') {
    document.getElementById('messageError').textContent = 'Message is required.';
    valid = false;
  }

  // Edge case: special characters in name (optional)
  // Uncomment below to restrict name to letters and spaces only
  // const nameRegex = /^[a-zA-Z\s]+$/;
  // if (name && !nameRegex.test(name)) {
  //   document.getElementById('nameError').textContent = 'Name can only contain letters and spaces.';
  //   valid = false;
  // }

  if (valid) {
    document.getElementById('successMessage').textContent = 'Form submitted successfully!';
    document.getElementById('successMessage').style.display = 'block';
    // Optionally clear the form
    // document.getElementById('contactForm').reset();
  }
});
