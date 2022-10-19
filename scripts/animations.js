let played = false;

const toggleSearch = () => {
  console.log(played);
  if (!played) {
    played = !played;
    const searchTimeFwd = gsap.timeline({ defaults: { duration: 0.2 } });
    searchTimeFwd
      .fromTo(".navigation", { y: 0 }, { y: "-100%", ease: "power" })
      .fromTo(".navigation", { opacity: 1 }, { opacity: 0, ease: "power" }, "<")
      .fromTo(
        ".navigation",
        { display: "flex" },
        { display: "none", ease: "power" },
        "<"
      )
      .fromTo(
        ".hiddenSearch",
        { display: "none" },
        { display: "flex", ease: "power" }
      )
      .fromTo(".hiddenSearch", { y: "-100%" }, { y: 0, ease: "power" })
      .fromTo(
        ".hiddenSearch",
        { opacity: 0 },
        { opacity: 1, ease: "power" },
        "<"
      );
  } else {
    played = !played;
    const searchTimeBack = gsap.timeline({ defaults: { duration: 0.2 } });
    searchTimeBack
      .fromTo(".hiddenSearch", { y: 0 }, { y: "-100%", ease: "power" })
      .fromTo(
        ".hiddenSearch",
        { opacity: 1 },
        { opacity: 0, ease: "power" },
        "<"
      )
      .fromTo(
        ".hiddenSearch",
        { display: "flex" },
        { display: "none", ease: "power" }
      )
      .fromTo(
        ".navigation",
        { display: "none" },
        { display: "flex", ease: "power" }
      )
      .fromTo(".navigation", { y: "-100%" }, { y: 0, ease: "power" })
      .fromTo(
        ".navigation",
        { opacity: 0 },
        { opacity: 1, ease: "power" },
        "<"
      );
  }
};

const carouselSlideNext = () => {
  newSlide();
  gsap.fromTo(
    ".carousel__slide.current-slide",
    { y: "-100%" },
    { y: 0, duration: 0.8, ease: "expo.inOut" }
  );
};

const carouselSlidePrev = () => {
  newSlide();
  gsap.fromTo(
    ".carousel__slide.current-slide",
    { y: "100%" },
    { y: 0, duration: 0.8, ease: "expo.inOut" }
  );
};

const newSlide = () => {
  gsap.fromTo(
    ".carousel__info-heading p",
    { y: "100%" },
    { y: 0, duration: 0.5, delay: 0.8, ease: "power" }
  );
  gsap.fromTo(
    ".carousel__info-heading p",
    { opacity: 0 },
    { opacity: 1, duration: 0.5, delay: 0.8, ease: "power" }
  );
  gsap.fromTo(
    ".carousel__info-heading .carousel__info-accent",
    { height: 0 },
    { height: "100%", duration: 0.5, delay: 0.8, ease: "power" }
  );
  gsap.fromTo(
    ".carousel__info-blurb",
    { y: "100%" },
    { y: 0, duration: 0.5, delay: 0.8, ease: "power" }
  );
  gsap.fromTo(
    ".carousel__info-blurb",
    { opacity: 0 },
    { opacity: 1, duration: 0.5, delay: 0.8, ease: "power" }
  );
  gsap.fromTo(
    ".carousel__info nav",
    { y: "100%" },
    { y: 0, duration: 0.5, delay: 0.8, ease: "power" }
  );
  gsap.fromTo(
    ".carousel__info nav",
    { opacity: 0 },
    { opacity: 1, duration: 0.5, delay: 0.8, ease: "power" }
  );
};

// function yearsEstablished() {
//   let counts = setInterval(updated);
//   let upto = 0;
//   function updated() {
//     var count = document.getElementById("yearsEstablished");
//     count.innerHTML = Math.round(++upto / 100);
//     if (upto === 400) {
//       clearInterval(counts);
//     }
//   }
// }
// setTimeout(() => {
//   yearsEstablished();
// }, 100);
