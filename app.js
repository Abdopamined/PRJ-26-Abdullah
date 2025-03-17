const dropdown = document.getElementsByClassName("drop-down")[0];
const categoriesBtn = document.getElementsByClassName("categories")[0];
let timeoutId = null;

categoriesBtn.addEventListener("mouseover", () => {
  clearTimeout(timeoutId);
  dropdown.classList.add("show");
});

categoriesBtn.addEventListener("mouseleave", () => {
  scheduleHideDropdown();
});

dropdown.addEventListener("mouseenter", () => {
  clearTimeout(timeoutId);
});

dropdown.addEventListener("mouseleave", () => {
  scheduleHideDropdown();
});

function scheduleHideDropdown() {
  timeoutId = setTimeout(() => {
    dropdown.classList.remove("show");
  }, 100);
}
