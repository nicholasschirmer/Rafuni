const carousel = () => {
  const track = document.querySelector(".carousel__track");
  const slides = Array.from(track.children);
  const nxtBtn = document.querySelector(".--right");
  const prevBtn = document.querySelector(".--left");
  const carouselNav = document.querySelector(".carousel__nav");
  const dots = Array.from(carouselNav.children);

  const slideSize = slides[0].getBoundingClientRect();
  const slideWidth = slideSize.width;

  for (let i = 0; i < slides.length; i++) {
    const element = slides[i];
    slides[i].style.left = slideWidth * i + "px";
  }

  const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = "translateX(-" + targetSlide.style.left + ")";
    currentSlide.classList.remove("current-slide");
    targetSlide.classList.add("current-slide");
  };

  const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove("current-slide");
    targetDot.classList.add("current-slide");
  };

  const slideNext = () => {
    let currentSlide = track.querySelector(".current-slide");
    let targetSlide = {};
    if (currentSlide === slides[slides.length - 1]) {
      targetSlide = slides[0];
    } else {
      targetSlide = currentSlide.nextElementSibling;
    }
    moveToSlide(track, currentSlide, targetSlide);
    let currentDot = carouselNav.querySelector(".current-slide");
    let targetDot = {};
    if (currentDot === dots[dots.length - 1]) {
      targetDot = dots[0];
    } else {
      targetDot = currentDot.nextElementSibling;
    }
    updateDots(currentDot, targetDot);
  };

  const slidePrevious = () => {
    let currentSlide = track.querySelector(".current-slide");
    let targetSlide = {};
    if (currentSlide === slides[0]) {
      targetSlide = slides[slides.length - 1];
    } else {
      targetSlide = currentSlide.previousElementSibling;
    }
    moveToSlide(track, currentSlide, targetSlide);
    let currentDot = carouselNav.querySelector(".current-slide");
    let targetDot = {};
    if (currentDot === dots[0]) {
      targetDot = dots[dots.length - 1];
    } else {
      targetDot = currentDot.previousElementSibling;
    }
    updateDots(currentDot, targetDot);
  };

  nxtBtn.addEventListener("click", (e) => {
    slideNext();
  });

  prevBtn.addEventListener("click", (e) => {
    slidePrevious();
  });

  carouselNav.addEventListener("click", (e) => {
    let targetDot = e.target.closest("button");

    if (!targetDot) return;

    let currentSlide = track.querySelector(".current-slide");
    let currentDot = carouselNav.querySelector(".current-slide");
    let targetIndex = dots.findIndex((dot) => dot === targetDot);
    let targetSlide = slides[targetIndex];

    moveToSlide(track, currentSlide, targetSlide);
    updateDots(currentDot, targetDot);
  });

  const autoPage = () => {
    setTimeout(() => {
      slideNext();
      autoPage();
    }, 10000);
  };

  autoPage();
};

carousel();
