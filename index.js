const toggleBtn = document.getElementById('theme-toggle');
const body = document.body;

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark');
  toggleBtn.textContent = body.classList.contains('dark') ? '☀️' : '🌙';
});

//sending to my email
document.getElementById('contact-form').addEventListener('submit', function (e){
  e.preventDefault();

  // clearing previous errors
  document.querySelectorAll('.error').forEach(span => span.textContent = '');

  // checking form fields
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const subject = document.getElementById('subject').value.trim();
  const message = document.getElementById('message').value.trim();

  let isValid = true;

  if (!name) {
    document.getElementById("name-error").textContent = "Name is required.";
    isValid = false;
  }

  if (!email) {
    document.getElementById("email-error").textContent = "Email is required.";
    isValid = false;
  } else if (!email.includes("@")) {
    document.getElementById("email-error").textContent = "Invalid email format.";
    isValid = false;
  }

  if (!subject) {
    document.getElementById("subject-error").textContent = "Subject is required.";
    isValid = false;
  }

  if (!message) {
    document.getElementById("message-error").textContent = "Message is required.";
    isValid = false;
  }

    // If valid, send email
  if (isValid) {
    emailjs.sendForm("service_4pu6s1a", "template_1f3jl2o", this)
      .then(function () {
        alert("Message sent successfully!");
        document.getElementById("contact-form").reset();
      }, function (error) {
        console.error("Failed to send message:", error);
    });
  }

});




