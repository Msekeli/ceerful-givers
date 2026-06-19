const modal = document.getElementById("enquiryModal");
const openButtons = document.querySelectorAll(".open-modal");
const closeModal = document.querySelector(".close-btn");

openButtons.forEach((button) => {
  button.addEventListener("click", () => {
    modal.classList.add("active");
  });
});

closeModal.addEventListener("click", () => {
  modal.classList.remove("active");
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.classList.remove("active");
  }
});

// GALLERY LIGHTBOX
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const teamImages = document.querySelectorAll(".team-image");
const lightboxClose = document.querySelector(".lightbox-close");

teamImages.forEach((image) => {
  image.addEventListener("click", () => {
    lightboxImage.src = image.src;
    lightboxImage.alt = image.alt;
    lightbox.classList.add("active");
  });
});

lightboxClose.addEventListener("click", () => {
  lightbox.classList.remove("active");
});

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    lightbox.classList.remove("active");
  }
});

// LEAFLET MAP
const map = L.map("map").setView([-33.8567, 18.6964], 14);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "&copy; OpenStreetMap contributors",
}).addTo(map);

L.marker([-33.8567, 18.6964])
  .addTo(map)
  .bindPopup(
    "<strong>Cheerful Givers Community Outreach</strong><br>Bloekombos, Kraaifontein",
  )
  .openPopup();
