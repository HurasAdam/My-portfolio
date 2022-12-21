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

const aboutImg= document.querySelector('.about-hero')


document.addEventListener('scroll',function(e){
  const scrollPosition= scrollY;
  console.log(scrollPosition)


  if(scrollPosition>1300){
 
    aboutImg.classList.add('active');
  }
  else{
    aboutImg.classList.remove('active')
  }
})


