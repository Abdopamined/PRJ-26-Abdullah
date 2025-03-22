const dropdown = document.getElementsByClassName("drop-down")[0];
const categoriesBtn = document.getElementsByClassName("categories")[0];
const homePage = document.getElementsByClassName("home-page")[0];
const categoryPage = document.getElementsByClassName("category-page")[0];
const itemsBtns = document.getElementsByClassName("drop-down-item");
const filterBtns = document.getElementsByClassName("filter-button");
const searchBox = document.getElementById("searchBox");

let timeoutId = null;

categoriesBtn.addEventListener("click", () => {
  dropdown.classList.toggle("show");
  categoriesBtn.classList.toggle("show");
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

      Array.from(document.getElementsByClassName("filter-button")).forEach(
        (element) => {
          element.classList.remove("active");
        }
      );
      let currentCat = document.getElementsByClassName("filter-button")[i - 1];
      currentCat.classList.add("active");
      changePlaceHolder(i - 1);
      setTimeout(() => {
        homePage.classList.add("hidden");
        categoryPage.classList.remove("hidden");
      }, 300);
    });
  }
});

Array.from(filterBtns).forEach((btn, i) => {
  btn.addEventListener("click", () => {
    Array.from(filterBtns).forEach((btn) => btn.classList.remove("active"));
    btn.classList.add("active");
    changePlaceHolder(i);
  });
});

function changePlaceHolder(categoty) {
  switch (categoty) {
    case 0:
      searchBox.placeholder = "إبحث في الأخبار ...";
      break;
    case 1:
      searchBox.placeholder = "إبحث في التقارير وتحقيقات ...";
      break;
    case 2:
      searchBox.placeholder = "إبحث في الإنفوجرافيك ...";
      break;
    case 3:
      searchBox.placeholder = "إبحث في المشروعات والمبادرات ...";
      break;
    case 4:
      searchBox.placeholder = "إبحث في البودكاست ...";
      break;
    case 5:
      searchBox.placeholder = "إبحث في المقالات ...";
      break;

    default:
      searchBox.placeholder = "إبحث...";
      break;
  }
}
