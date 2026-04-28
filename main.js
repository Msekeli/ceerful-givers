// SCROLL STORYTELLING ANIMATION
const sections = document.querySelectorAll(".section");

if (sections.length > 0) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    {
      threshold: 0.15,
    },
  );

  sections.forEach((section) => {
    observer.observe(section);
  });
}
