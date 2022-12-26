const header = document.querySelector("header");
const burgerButton = document.querySelector(".burger");
const mobileMenu = document.querySelector(".menu");
const menuLinks = document.querySelectorAll(".menu-link");
const about = document.querySelector(".about");
const desc = document.querySelector(".description");
const home = document.querySelector(".home");
const project = document.querySelector(".projects");
const projectContent = document.querySelector(".projects-content");
const technologySection= document.querySelector('.technologies-items')
const headeroptions = {
  root: null,
  rootMarin: "0px",
  threshold: 0.9,
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
 
    if (entry.isIntersecting) {
      const aboutImg= document.querySelector('.about-hero')
      aboutImg.classList.add('active')
      setTimeout(() => {
        desc.classList.add("active");
      }, 200);
      observer.unobserve(about);
    }
  });
}, options);




const headerObserver = new IntersectionObserver(function (entries,headerObserver){
entries.forEach(entry=>{
  if(entry.isIntersecting)
    home.classList.add('active')

    else{
      home.classList.remove('active')
    }
  })
})

headerObserver.observe(project)
observer.observe(about);



let opt = {
  childList: true,
  attributes: true,
  characterData: false,
  subtree: false,
  attributeFilter: ['attr1', 'attr2'],
  attributeOldValue: false,
  characterDataOldValue: false
};


const technologiesItem= document.querySelectorAll('.tchnologies-item')
const test = document.getElementById('test')





// function animateTechnologySection(entries){
// entries.forEach(entry=>{

//   if(entry.isIntersecting){
//     for(i=0;i<technologiesItem.length;i++){
//       technologiesItem[i].classList.add('active')
//     // technologiesItem[i].style.opacity='1';
//     technologiesItem[i].style.transitionDelay = `${i*(0.7)}s`
//     technologiesItem[i].style.transitionDuration = `${4}s`
//     }
//   }
// })
// }


const techOptions={

  root:null,
  rootMarin:"0px",
  threshold:0.1
}

const chuj= new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
 
    if (entry.isIntersecting) {
      for(i=0;i<technologiesItem.length;i++){
        technologiesItem[i].classList.add('active')
      // technologiesItem[i].style.opacity='1';
      technologiesItem[i].style.transitionDelay = `${i*(0.2)}s`
      technologiesItem[i].style.transitionDuration = `${1.6}s`
    }
    }
  });
}, techOptions);
chuj.observe(technologySection)







  
