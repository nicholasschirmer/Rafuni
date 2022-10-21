const route = (event) => {
  event = event || window.event;
  event.preventDefault();
  window.history.pushState({}, "", event.target.href);
  handleLocation();
};

const routes = {
  404: { path: "/pages/error.html", title: "Error | Rafuni" },
  "/home": { path: "/pages/home.html", title: "Home | Rafuni" },
  "/about-us": { path: "/pages/aboutUs.html", title: "About Us | Rafuni" },
  "/services": { path: "/pages/services.html", title: "Services | Rafuni" },
  "/contact-us": {
    path: "/pages/contactUs.html",
    title: "Contatc Us | Rafuni",
  },
};

const handleLocation = async () => {
  const path = window.location.pathname;
  const route = routes[path] || routes[404];
  const html = await fetch(route.path).then((data) => data.text());
  document.getElementById("page-container").innerHTML = html;
  if (path == "/") {
    carousel();
  }
  document.title = route.title;
};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();
