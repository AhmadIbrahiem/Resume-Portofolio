import projects from "./projects.js";

export function displayProjects() {
  const projectsContainer = document.getElementById("projects");
  projectsContainer.innerHTML = "";

  projects.forEach((project) => {
    const projectDiv = document.createElement("div");
    projectDiv.classList.add("project");
    projectDiv.innerHTML = `
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <p><strong>Duration:</strong> ${project.duration}</p>
    `;
    projectsContainer.appendChild(projectDiv);
  });
}
