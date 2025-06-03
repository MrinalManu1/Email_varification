Contact Form Project
This project is a simple, responsive contact form built with HTML, CSS, and JavaScript. It demonstrates client-side validation, user-friendly error handling, and the use of regular expressions for validating email addresses.
![image](https://github.com/user-attachments/assets/7fed51b9-9e1a-4994-af2e-9279d64a6a74)
![image](https://github.com/user-attachments/assets/219f6e9f-172a-419b-9404-160e8a74c704)


Features
HTML form with input fields for Name, Email, Message, and a Submit button.

CSS styling for a clean and clear user interface.

JavaScript validation on form submission:

Checks for non-empty fields.

Validates email format using regex.

Displays error messages below each input if validation fails.

Prevents form submission if any input is invalid.

Shows a success message on valid submission (no actual sending of data).

Edge case handling for empty inputs, invalid emails, and (optionally) special characters in the name.

How to Use
Clone or download the repository to your local machine.

Open index.html in your web browser.

Fill out the form and click Submit.

If there are validation errors, error messages will appear below the relevant fields.

On successful validation, a success message will be displayed.

File Structure
index.html – The main HTML file containing the form structure.

styles.css – CSS file for styling the form.

script.js – JavaScript file for form validation logic.

Validation Details
Name: Required.

Email: Required and must match a valid email format (checked using regex).

Message: Required.

Regex: Used for email validation to ensure correct format.

Customization
To restrict the Name field to only letters and spaces, you can uncomment the relevant regex validation in script.js.

You can further enhance the form by connecting it to a backend or adding more advanced validation rules.

Hints/Mini Guide
Build HTML form with input fields: Name, Email, Message, Submit.

Style form with CSS for clarity.

Add JavaScript to validate inputs on submit: non-empty, valid email format.

Show error messages below inputs if validation fails.

Prevent form submission if invalid.

Show success message on valid submission (no actual sending).

Test edge cases: empty inputs, invalid email, special characters.

Use regex for email validation.

Enjoy using and learning from this contact form project!
