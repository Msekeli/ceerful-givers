const enquiryForm = document.getElementById("enquiryForm");

enquiryForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const fullName = document.getElementById("fullName").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const type = document.getElementById("type").value;
  const message = document.getElementById("message").value.trim();

  if (!fullName || !email || !phone || !type || !message) {
    alert("Please complete all fields.");
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  const phonePattern = /^[0-9]{10}$/;

  if (!phonePattern.test(phone)) {
    alert("Please enter a valid 10-digit phone number.");
    return;
  }

  alert("Thank you! Your enquiry has been submitted successfully.");

  enquiryForm.reset();

  document.getElementById("enquiryModal").classList.remove("active");
});
