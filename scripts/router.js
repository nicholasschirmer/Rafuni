const route = (event) => {
  event = event || window.event;
  event.preventDefault();
  window.history.pushState({}, "", event.target.href);
  handleLocation();
};

const routes = {
  404: { path: "/pages/error.html", title: "Error | Rafuni" },
  "/": { path: "/pages/home.html", title: "Home | Rafuni" },
  "/about-us": { path: "/pages/aboutUs.html", title: "About Us | Rafuni" },
  "/services": { path: "/pages/services.html", title: "Services | Rafuni" },
  "/contact-us": {
    path: "/pages/contactUs.html",
    title: "Contatc Us | Rafuni",
  },
  "/geo-hydro": {
    path: "/pages/services/Geohydro.html",
    title: "Our Services | Rafuni",
  },
  "/construction": {
    path: "/pages/services/Construction.html",
    title: "Our Services | Rafuni",
  },
  "/dolomite": {
    path: "/pages/services/Dolo.html",
    title: "Our Services | Rafuni",
  },
  "/environment": {
    path: "/pages/services/Env.html",
    title: "Our Services | Rafuni",
  },
  "/geo-tech": {
    path: "/pages/services/Geotech.html",
    title: "Our Services | Rafuni",
  },
  "/waste": {
    path: "/pages/services/Waste.html",
    title: "Our Services | Rafuni",
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
