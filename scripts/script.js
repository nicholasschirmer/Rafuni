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
