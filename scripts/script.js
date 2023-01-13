const changeActive = (index) => {
  const menus = document.querySelector(".hiddenMenu");
  const currentMenu = menus.querySelector(".list").querySelector(".active");
  const targetMenu = menus.querySelector(".list").querySelector("#" + index);
  currentMenu.classList.remove("active");
  targetMenu.classList.add("active");
  const navs = document.querySelector(".navigation");
  const currentNav = navs.querySelector(".active");
  const targetNav = navs.querySelector("#" + index);
  currentNav.classList.remove("active");
  targetNav.classList.add("active");
};

let showMenu = false;
let showSearch = false;

function goHome() {
  location.href = "/";
}

const toggleMenu = () => {
  showMenu = !showMenu;
  const hidden = document.querySelector(".hiddenMenu");
  const menu = hidden.querySelector(".list");
  if (showMenu) {
    hidden.style.display = "flex";
    setTimeout(() => {
      menu.style.transform = "translateY(0)";
    }, 10);
  } else {
    menu.style.transform = "translateY(-100%)";
    setTimeout(() => {
      hidden.style.display = "none";
    }, 250);
  }
};

function getCurrentYear() {
  setTimeout(() => {
    var today = new Date();
    var init = new Date("July 1, 2015");
    var sub = today.getFullYear() - init.getFullYear();
    var diff = today.getMonth() - init.getMonth();
    if (0 > diff) {
      sub = sub - 1;
    }
    document.getElementById("totalYears").innerHTML = sub;
  }, 300);
}
