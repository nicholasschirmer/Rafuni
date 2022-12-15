const pages = [
  {
    key: "About Us",
    value: "who, skills, us, about, experience, clients",
    path: "/about-us",
  },
  {
    key: "Contact Us",
    value: "phone, email, where, find, location, form, contact, number,",
    path: "/contact-us",
  },
  {
    key: "Home",
    value: "home, rafuni, info, projects",
    path: "/",
  },
  {
    key: "Services",
    value:
      "Geohydrological Investigations, services, Geotechnical Investigation, Dolomite Stability Investigations, Waste Management, Construction, Environmental Services, jobs, work, building",
    path: "/services",
  },
];

function filterPages() {
  console.log("help");
  let input = document.getElementById("searchParam").value.toLowerCase();
  const filteredPages = pages.filter((pair) => {
    let element = pair.value.toLowerCase();
    return element.includes(input);
  });
  buildRessults(filteredPages);
}

function buildRessults(pages) {
  let resultList = [];
  console.log(pages);
  const results = pages.forEach((i) => {
    resultList = resultList.concat(
      "<div class='card'><a href='" +
        i.path +
        "'><h2>" +
        i.key +
        "</h2></a></div><br />"
    );
    return resultList;
  });
  console.log(resultList);
  document.getElementById("searchResults").innerHTML = resultList.join(" ");
}

function goSearch() {
  location.href = "/search";
  toggleSearch();
}
