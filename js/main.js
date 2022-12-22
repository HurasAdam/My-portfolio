const header = document.querySelector("header");
const burgerButton = document.querySelector(".burger");
const mobileMenu = document.querySelector(".menu");
const menuLinks = document.querySelectorAll(".menu-link");

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
if(key==='home'){
  window.scrollTo({top:0,behavior:'smooth'});
}
else{
    window.scrollTo({ top: section, behavior: "smooth" });
}
  });
});



const about= document.querySelector('.about')

const observer = new IntersectionObserver(
  function(entries, observer) {
entries.forEach(entry=>{
 

  if (entry.isIntersecting) {
    const aboutImage= document.querySelector('.about-hero')
aboutImage.classList.add('active')
    }
})

})
     

  observer.observe(about)


