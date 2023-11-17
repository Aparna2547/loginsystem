// Get the email and password input fields
const emailInput = document.getElementById('emailInput');
const passwordInput = document.getElementById('passwordInput');
const emailError = document.getElementById('emailError');
const submitButton = document.getElementById('submitButton')

// Add event listener to password input field
passwordInput.addEventListener('focus', function() {
const email = emailInput.value;

if (!validateEmail(email)) {
    emailError.textContent = 'Please enter a valid email';
    submitButton.disabled = true;
} else {
    emailError.textContent = '';
    submitButton.disabled = false;
}
});

// Email validation function
function validateEmail(email) {
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
return emailRegex.test(email);
}