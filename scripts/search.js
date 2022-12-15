const pages = [
  {
    key: "About Us",
    value: "who, skills, us, about, experience, clients",
  },
  {
    key: "Contact Us",
    value: "phone, email, where, find, location, form, contact, number,",
  },
  {
    key: "Home",
    value: "home, rafuni, info, projects",
  },
  {
    key: "Services",
    value:
      "Geohydrological Investigations, services, Geotechnical Investigation, Dolomite Stability Investigations, Waste Management, Construction, Environmental Services, jobs, work, building",
  },
];

function filterPages(string) {
  const filteredPages = pages.filter((pair) => pair.value.includes(string));
  return filteredPages;
}

function buildRessults(pages) {
  let resultList = [];
  const results = pages.forEach((i) => {
    resultList = [
      ...("<div class='card'><h2>" + i.key.toUppercase + "</h2></div>"),
    ];
  });
  document.getElementById("searchResults").innerHTML = results.join(" ");
}

function goSearch() {
  location.href = "/search";
  toggleSearch();
}
