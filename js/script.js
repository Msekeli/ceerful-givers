const modal = document.getElementById("enquiryModal");
const openModal = document.getElementById("openModal");
const closeModal = document.querySelector(".close-btn");

openModal.addEventListener("click", () => {
  modal.classList.add("active");
});

closeModal.addEventListener("click", () => {
  modal.classList.remove("active");
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.classList.remove("active");
  }
});
