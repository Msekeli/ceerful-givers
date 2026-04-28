const images = ["images/slide1.jpg", "images/slide2.jpg", "images/slide3.jpg"];

let index = 0;
const slide = document.getElementById("slide");

setInterval(() => {
  index = (index + 1) % images.length;
  slide.src = images[index];
}, 3000);
