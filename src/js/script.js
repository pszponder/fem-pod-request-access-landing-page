(function () {
  // ===================
  // SELECT DOM ELEMENTS
  // ===================

  // Select the button element
  const requestAccessBtn = document.querySelector(".inputs__submit");

  // ==============
  // EVENT HANDLERS
  // ==============
  // Create an event handler to check for a valid email address

  function handleEmail(event) {
    // Prevent the form submitting and refreshing the page
    event.preventDefault();

    // Select the input field
    const inputField = document.querySelector(".inputs__input");

    // Select the input field label (will be used to display the error message)
    const inputFieldLabel = document.querySelector("label[for='text-input']");

    // Hide the error message and reset its color
    inputFieldLabel.style.display = "none";
    inputFieldLabel.style.color = "red";

    // Extract the input from inputField
    const userInput = inputField.value;

    // Create a regex to test for a valid email
    const regex = /[a-zA-z0-9_\.]+@[a-zA-Z0-9_\.\-]+[.][a-z]{3}/i;

    // Check if field is empty
    if (!userInput) {
      inputFieldLabel.style.display = "inline";
      inputFieldLabel.innerText = "Oops! Please add your email";
    }
    // Check if the email is valid
    else if (!regex.test(userInput)) {
      inputFieldLabel.style.display = "inline";
      inputFieldLabel.innerText = "Oops! Please check your email";
    }
    // Otherwise, let the user in
    else {
      inputFieldLabel.style.display = "inline";
      inputFieldLabel.style.color = "green";
      inputFieldLabel.innerText = "You're in!";
    }
  }

  // Add the event handler to the Request Access Button
  requestAccessBtn.addEventListener("click", handleEmail);
})();
