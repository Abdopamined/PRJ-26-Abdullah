const dropdown = document.getElementsByClassName("drop-down")[0];
const categoriesBtn = document.getElementsByClassName("categories")[0];
const homePage = document.getElementsByClassName("home-page")[0];
const categoryPage = document.getElementsByClassName("category-page")[0];
const itemsBtns = document.getElementsByClassName("drop-down-item");

let timeoutId = null;

categoriesBtn.addEventListener("click", () => {
  // clearTimeout(timeoutId);
  dropdown.classList.toggle("show");
  categoriesBtn.classList.toggle("show");
  console.log(itemsBtns);
});

Array.from(itemsBtns).forEach((btn, i) => {
  if (i == 0) {
    btn.addEventListener("click", () => {
      homePage.style.opacity = "1";
      categoryPage.style.opacity = "0";
      setTimeout(() => {
        homePage.classList.remove("hidden");
        categoryPage.classList.add("hidden");
      }, 300);
    });
  } else {
    btn.addEventListener("click", () => {
      homePage.style.opacity = "0";
      categoryPage.style.opacity = "1";

      Array.from(
        document.getElementsByClassName("filter-button")
      ).forEach((element) => {
        element.classList.remove("active");
      });
      let currentCat = document.getElementsByClassName("filter-button")[i - 1];
      currentCat.classList.add("active");
      setTimeout(() => {
        homePage.classList.add("hidden");
        categoryPage.classList.remove("hidden");
      }, 300);
    });
  }
});
// categoriesBtn.addEventListener("click", () => {
//   dropdown.classList.remove("show");
//   // scheduleHideDropdown();
// });

// dropdown.addEventListener("mouseenter", () => {
//   clearTimeout(timeoutId);
// });

// dropdown.addEventListener("mouseleave", () => {
//   scheduleHideDropdown();
// });

// function scheduleHideDropdown() {
//   timeoutId = setTimeout(() => {
//     dropdown.classList.remove("show");
//   }, 100);
// }
