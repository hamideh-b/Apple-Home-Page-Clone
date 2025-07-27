const Slider = async () => {
  let dataSlide = await fetch("https://hamideh-b.github.io/json-apple/db.json");
  let reponse = await dataSlide.json();
  let slider = reponse.slider.map((elem, index) => {
    return `
            <div class="slide h-100 position-absolute top-0 mx-auto overflow-hidden" style="transform: translateX(7.5px);" id="slide${
              index + 1
            }">
                <picture>
                <source media="(max-width: 767.8px)" srcset=${elem.srcset1}>
                <source media="(min-width:768px) and (max-width: 1067.8px)" srcset=${
                  elem.srcset2
                }>
                <source media="(min-width:1068px) and (max-width: 1444px)" srcset=${
                  elem.srcset3
                }>
                <img src=${elem.img} alt="">
                </picture>
                <div class="inner px-3 ps-md-4 ps-lg-5 position-absolute w-100 d-block text-center d-md-flex flex-wrap align-items-md-center  justify-content-md-start">
                  <div class="text-white d-md-flex justify-content-md-start align-items-md-baseline order-md-1">
                    <h4 class="m-0 h-100  text-center mx-md-2 ">${
                      elem.title
                    }</h4>
                    <p class="h-100 my-2 m-md-0" ><i class="fa fa-circle d-none d-md-inline align-middle
                    " style="font-size:8px"></i> ${elem.description}
                    </p>
                  </div>
                  <a href="" class="d-inline-block px-3 py-1 py-xl-2 btn btn-light rounded-5 order-md-0 me-md-2 position-relative z-3">${
                    elem.button
                  }</a>
                </div>
            </div>
        `;
  });
  let buttonSlider = reponse.slider.map((elem) => {
    return `
      <li class="dot px-2">
        <i class="fa fa-circle" data-slide-target=${elem.slideTarget}></i>
      </li>
    `;
  });

  let timer;
  let time;
  let slides = document.querySelector(".slider");
  let dotSlide = document.querySelector(".dot-slide");
  slides.innerHTML = slider.join("");
  dotSlide.innerHTML = buttonSlider.join("");
  let dot = [...document.querySelectorAll(".dot i")];
  let item = [...document.querySelectorAll(".slide")];
  item.forEach((elem) => {
    elem.style.left = "200%";
  });
  slides.firstElementChild.style.left = "0%";
  slides.firstElementChild.nextElementSibling.style.left = "100%";
  slides.lastElementChild.style.left = "-100%";
  const sliderStyle = () => {
    item.forEach((elem, index) => {
      if (elem.style.left == "0%") {
        elem.style.opacity = 1;
        elem.lastElementChild.classList.add("innerStyle");
        elem.parentElement.nextElementSibling.children[index].style.color =
          "#333333";
      } else {
        elem.style.opacity = 0.5;
        elem.lastElementChild.classList.remove("innerStyle");
        elem.parentElement.nextElementSibling.children[index].style.color =
          "#757575";
      }
    });
  };
  sliderStyle();
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight)
    );
  }
  function next(transition, delay) {
    item.forEach((elem) => {
      elem.style.display = "block";
      elem.style.transitionDuration = transition;
    });
    slides.lastElementChild.style.left = "-200%";
    slides.firstElementChild.style.left = "-100%";
    slides.firstElementChild.nextElementSibling.style.left = `0%`;
    slides.firstElementChild.nextElementSibling.nextElementSibling.style.left =
      "100%";
    sliderStyle();
    let firstSlide = slides.firstElementChild;
    setTimeout(() => {
      slides.lastElementChild.style.display = "none";
      slides.lastElementChild.style.left = "200%";
      slides.append(firstSlide);
    }, delay);
  }
  function addClassOnScroll() {
    time = 1000;
    if (isElementInViewport(slides)) {
      timer = setTimeout(nextSlide, time);
    }
  }
  function nextSlide() {
    next(`300ms`, 300);
    time = 5000;
    timer = setTimeout(nextSlide, time);
  }
  function previousSlide(transition) {
    item.forEach((elem) => {
      elem.style.display = "block";
      elem.style.transitionDuration = transition;
    });
    let last = slides.lastElementChild;
    slides.insertBefore(last, slides.firstElementChild);
    slides.lastElementChild.style.display = "none";
    slides.lastElementChild.style.left = "-200%";
    setTimeout(() => {
      slides.lastElementChild.style.display = "block";
    }, 5);
    setTimeout(() => {
      slides.firstElementChild.style.left = "0%";
      slides.firstElementChild.nextElementSibling.style.left = "100%";
      slides.firstElementChild.nextElementSibling.nextElementSibling.style.left =
        "200%";
      slides.lastElementChild.style.left = "-100%";
      sliderStyle();
    }, 25);
  }
  slides.addEventListener("click", (e) => {
    let left = e.target.parentElement.parentElement.style.left;
    if (left == "-100%") {
      clearTimeout(timer);
      previousSlide(`300ms`);
      timer = setTimeout(nextSlide, time);
    } else if (left == "100%") {
      clearTimeout(timer);
      nextSlide();
    }
  });
  dot.forEach((elem) => {
    elem.addEventListener("click", () => {
      let dotTarget = elem.getAttribute("data-slide-target");
      let idSlide = document.querySelector(`${dotTarget}`);
      let IdSlideNumber = parseInt(idSlide.getAttribute("id").match(/\d+/g));
      let item = [...document.querySelectorAll(".slide")];
      let currentIdSlide = item[0].getAttribute("id").match(/\d+/g);
      let currentIdSlideNumber = parseInt(currentIdSlide[0]);
      let differ = Math.abs(IdSlideNumber - currentIdSlideNumber);
      clearTimeout(timer);
      if (currentIdSlideNumber < IdSlideNumber) {
        for (let i = 0; i < differ; i++) {
          setTimeout(() => {
            next(`50ms`, `50`);
          }, 100 * i);
        }
      } else {
        for (let i = 0; i < differ; i++) {
          setTimeout(() => {
            previousSlide(`50ms`);
          }, 100 * i);
        }
      }
    });
  });
  window.addEventListener("load", () => {
    clearTimeout(timer);
    addClassOnScroll();
  });
  window.addEventListener("scroll", () => {
    clearTimeout(timer);
    addClassOnScroll();
  });
};
export default Slider;
