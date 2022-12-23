const header = document.querySelector("header");
const burgerButton = document.querySelector(".burger");
const mobileMenu = document.querySelector(".menu");
const menuLinks = document.querySelectorAll(".menu-link");
const about = document.querySelector(".about");
const desc = document.querySelector(".description");
const home = document.querySelector(".home");
const project = document.querySelector(".projects");
const projectContent = document.querySelector(".projects-content");
const headeroptions = {
  root: null,
  rootMarin: "0px",
  threshold: 0.67,
};

const options = {
  root: null,
  rootMarin: "0px",
  threshold: 0.5,
};

function stickMenu() {
  const scrollPosition = window.scrollY;

  if (scrollPosition > 0) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
}

function MenuTrigger() {
  mobileMenu.classList.toggle("active");
  burgerButton.classList.toggle("active");
}

burgerButton.addEventListener("click", MenuTrigger);
window.addEventListener("scroll", stickMenu);

menuLinks.forEach((el) => {
  el.addEventListener("click", (e) => {
    const key = e.target.dataset.key;
    const section =
      document.querySelector(`.${key}`).getBoundingClientRect().top +
      window.pageYOffset -
      112;
    if (key === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: section, behavior: "smooth" });
    }
  });
});

const observer = new IntersectionObserver(function (entries, observer) {
  Array.from(entries).forEach((entry) => {
    // const aboutImage = document.querySelector(".about-hero");

    if (entry.isIntersecting) {
      const box =entry.childNodes[3].childNodes[3].classList.add('active')
      setTimeout(() => {
        desc.classList.add("active");
      }, 200);
      observer.unobserve(about);
    }
  });
}, options);

observer.observe(about);
observer.observe(desc);

const headerObserver = new IntersectionObserver(function (
  entries,
  headerObserver
) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      home.classList.add("active");
    } else if (!entry.isIntersecting) {
      home.classList.remove("active");
    }
  });
},
headeroptions);
headerObserver.observe(project);

const mutationHeaderObserver = new MutationObserver(function (entries) {
  console.log(entries);
});

mutationHeaderObserver.observe(home, { childList: true });


const box =about.childNodes[3].childNodes[3];
const result = box.children[1];