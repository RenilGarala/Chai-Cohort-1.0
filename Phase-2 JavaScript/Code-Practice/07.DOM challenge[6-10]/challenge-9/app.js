/**
 * Write your challenge solution here
 */

const toggleBtn = document.querySelector(".toggle-btn");

toggleBtn.addEventListener("click", function () {
  let panel = document.querySelector(".panel");
  panel.classList.toggle("active");
  toggleBtn.classList.toggle("active");
  toggleBtn.textContent =
    toggleBtn.textContent === "Open Menu" ? "Close Menu" : "Open Menu";
});

const closeBtn = document.querySelector(".close-btn");

closeBtn.addEventListener("click", () => {
  let panel = document.querySelector(".panel");
  panel.classList.toggle("active");
  toggleBtn.classList.toggle("active");
  toggleBtn.textContent =
    toggleBtn.textContent === "Open Menu" ? "Close Menu" : "Open Menu";
});
