// ABOUT SECTION
async function loadAbout() {
  const response = await fetch("data/about.json");
  const about = await response.json();

  const container = document.getElementById("about-content");

  container.innerHTML = `
    <h2>${about.title}</h2>

    ${about.paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("")}

    <h3>Our Mission</h3>

    <ul>
      ${about.mission.map((item) => `<li>${item}</li>`).join("")}
    </ul>

    <h3>Our Values</h3>

    <ul>
      ${about.values.map((item) => `<li>${item}</li>`).join("")}
    </ul>
  `;
}

// SERVICES SECTION
let allServices = [];

async function loadServices() {
  const response = await fetch("data/services.json");
  allServices = await response.json();

  displayServices(allServices);

  const searchInput = document.getElementById("search");

  searchInput.addEventListener("input", function () {
    const searchText = this.value.toLowerCase().trim();

    const filteredServices = allServices.filter((service) =>
      service.title.toLowerCase().includes(searchText),
    );

    displayServices(filteredServices);
  });
}

// DISPLAY SERVICES
function displayServices(services) {
  const container = document.getElementById("services-container");

  container.innerHTML = services
    .map(
      (service) => `
        <div class="service-card">
          <h3>${service.title}</h3>

          <p>${service.description}</p>

          ${service.description2 ? `<p>${service.description2}</p>` : ""}
        </div>
      `,
    )
    .join("");
}

// LOAD CONTENT
document.addEventListener("DOMContentLoaded", () => {
  loadAbout();
  loadServices();
});
