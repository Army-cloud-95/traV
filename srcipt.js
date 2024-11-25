const passwordField = document.getElementById("password");
const toggleButton = document.getElementById("togglePassword");

toggleButton.addEventListener("click", function () {
  // Check the current type of the password field
  if (passwordField.type === "password") {
    passwordField.type = "text"; // Show the password
    toggleButton.textContent = "Hide"; // Change the button text
  } else { 
    passwordField.type = "password"; // Hide the password
    toggleButton.textContent = "Show"; // Change the button text
  }
});
document.addEventListener('DOMContentLoaded', () => {
    const otpInputs = document.querySelectorAll('.otp-box');
    const verifyButton = document.getElementById('verifyOtpButton');
  
    otpInputs.forEach((input, index) => {
      input.addEventListener('input', (e) => {
        const currentInput = e.target;
        const nextInput = otpInputs[index + 1];
        const prevInput = otpInputs[index - 1];
  
        // Move to the next box if a digit is entered
        if (currentInput.value.length === 1 && nextInput) {
          nextInput.focus();
        }
  
        // Move to the previous box on backspace
        if (e.inputType === 'deleteContentBackward' && prevInput) {
          prevInput.focus();
        }
      });
    });
  
    verifyButton.addEventListener('click', () => {
      let otp = '';
      otpInputs.forEach((input) => {
        otp += input.value;
      });
  
      if (otp.length === 6) {
        alert(`OTP entered: ${otp}`);
        // Simulate sending the OTP to the backend
        // fetch('/verify-otp', { method: 'POST', body: JSON.stringify({ otp }) });
      } else {
        alert('Please enter a 6-digit OTP.');
      }
    });
  });
  function searchDestination() {
    var destination = document.getElementById("destination-search").value;
    if (destination) {
        alert("Searching for tours or destinations in " + destination);
    } else {
        alert("Please enter a destination.");
    }
}

  