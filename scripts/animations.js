const searchPosAni = () => {
  gsap.to(".navigation", { duration: 0.5, y: "-100%", ease: "power" });
  gsap.to(".navigation", { duration: 0.5, opacity: 0, ease: "power" });
  gsap.to(".navigation", { duration: 0.5, display: "none", ease: "power" });
  gsap.to(".hiddenSearch", { display: "flex" });
  gsap.fromTo(
    ".hiddenSearch",
    { opacity: 0 },
    { opacity: 1, duration: 0.5, delay: 0.5, ease: "power" }
  );
  gsap.fromTo(
    ".hiddenSearch",
    { y: "-100%" },
    { y: 0, duration: 0.5, delay: 0.5, ease: "power" }
  );
};

const searchPosNeg = () => {};

const carouselSlideNext = () => {
  gsap.fromTo(
    ".carousel__slide.current-slide",
    { y: "-100%" },
    { y: 0, duration: 0.5, ease: "power" }
  );
};

const carouselSlidePrev = () => {
  gsap.fromTo(
    ".carousel__slide.current-slide",
    { y: "100%" },
    { y: 0, duration: 0.5, ease: "power" }
  );
};
