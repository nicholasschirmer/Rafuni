const route = (event) => {
  event = event || window.event;
  event.preventDefault();
  window.history.pushState({}, "", event.target.href);
  handleLocation();
};

const routes = {
  404: "/pages/error.html",
  "/": "/pages/home.html",
  "/about-us": "/pages/aboutUs.html",
  "/services": "/pages/services.html",
  "/contact-us": "/pages/contactUs.html",
};

const changeTitle = async () => {
  const path = window.location.pathname;
  if (routes[path]) {
    switch (path) {
      case "/":
        document.title = "Home | Rafuni";
        carousel();
        break;
      case "/about-us":
        document.title = "About Us | Rafuni";
        break;
      case "/services":
        document.title = "Services | Rafuni";
        break;
      case "/contact-us":
        document.title = "Contact Us | Rafuni";
      default:
        break;
    }
  } else {
    document.title = "Error 404";
  }
};

const handleLocation = async () => {
  const path = window.location.pathname;
  const route = routes[path] || routes[404];
  const html = await fetch(route).then((data) => data.text());
  document.getElementById("page-container").innerHTML = html;
  changeTitle();
};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();
