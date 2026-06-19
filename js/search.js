async function loadAbout() {
  const response = await fetch("data/about.json");
  const about = await response.json();

  const container = document.getElementById("about-content");

  container.innerHTML = `
    <h2>${about.title}</h2>

    ${about.paragraphs.map((p) => `<p>${p}</p>`).join("")}

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

loadAbout();
