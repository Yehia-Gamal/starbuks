let img = document.querySelector(".starbucks");
let backgroundColor = document.querySelector(".circle");

function starBucks(coffee) {
  img.src = coffee;
  img.classList.add("starbucks");
}

function colors(color) {
  backgroundColor.style.background = color;
}

let menu = document.getElementById("menu");
let actions = document.getElementById("actions");

menu.addEventListener("click", () => {
  hundlMenu();
});

function hundlMenu() {
  menu.classList.toggle("active");
  actions.classList.toggle("active");
}