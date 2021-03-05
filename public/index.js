const burger = document.querySelector("#burger");
const menu = document.querySelector("#menu");

burger.addEventListener("click", () => {
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
  } else {
    menu.classList.add("hidden");
  }
});

const home = document.querySelector("#home");
const about = document.querySelector("#about");
const contact = document.querySelector("#contact");

const itemList = [home, about, contact];
itemList.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.stopImmediatePropagation();
    if (item.classList.contains("current")) {
      item.classList.remove(
        "current",
        "text-gray-700",
        "font-bold",
        "border-primary"
      );
    } else {
      item.classList.add(
        "current",
        "text-gray-700",
        "font-bold",
        "border-primary"
      );
    }
  });
});
