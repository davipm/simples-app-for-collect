const buttonSearch = document.querySelector(".main__link");
const modal = document.querySelector("#modal");
const close = document.querySelector(".modal__link");

buttonSearch.addEventListener("click", (event) => {
  event.preventDefault();
  modal.classList.remove("hide");
});

close.addEventListener("click", (event) => {
  event.preventDefault();
  modal.classList.add("hide");
});
