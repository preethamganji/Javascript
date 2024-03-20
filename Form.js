document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  // Collect form data into a JavaScript object
  const formData = {
    name: document.getElementById("name").value,
    age: parseInt(document.getElementById("age").value),
    email: document.getElementById("email").value,
    gender: document.querySelector('input[name="gender"]:checked').value,
    interests: [...document.querySelectorAll('input[name="interests"]:checked')].map(input => input.value),
    country: document.getElementById("country").value
  };

  console.log(formData); // Display form data in the console
});
