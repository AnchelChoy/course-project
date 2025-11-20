// FORM VALIDATION
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const responseFrame = document.getElementById("responseFrame");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      // Basic validation
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (!name || !email || !message) {
        alert("Please fill in all fields.");
        return;
      }

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert("Please enter a valid email address.");
        return;
      }

      // Simulate sending data
      responseFrame.style.display = "block";
      responseFrame.srcdoc = `<p>Thank you, ${name}! Your message has been received.</p>`;
      form.reset();
    });
  }
});

//SIMPLE SLIDESHOW

