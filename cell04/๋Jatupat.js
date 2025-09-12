import { skills } from "./data/Jatupat_skill.js";
// Target the skills container
const skillsContainer = document.querySelector(".skills");

// Generate skill cards dynamically
skills.forEach(skill => {
  const skillCol = document.createElement("div");
  skillCol.className = "col-md-4 mb-4"; // 3 per row on md+

  skillCol.innerHTML = `
    <div class="card h-100 shadow-sm ps-5 pe-5">
      <div class="card-body text-center">
        <img src="${skill.icon}" alt="${skill.alt}" class="img-fluid mb-3" style="max-width:60px;">
        <h5 class="card-title">${skill.title}</h5>
        <p class="card-subtitle text-muted">${skill.level}</p>
        <p class="card-text mt-2">${skill.description}</p>
      </div>
    </div>
  `;

  skillsContainer.appendChild(skillCol);
});