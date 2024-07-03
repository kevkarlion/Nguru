let lastScrollTop = 0;
const navegation = document.querySelector('.page-header');
const scrollY =  window.scrollY;


window.addEventListener('scroll', ()=> {
      const scrollY =  window.scrollY;
      
})



//interactividad menu hamburguesa

const buttonToggleMenu = document.querySelector('.button-toggle-menu');
const toggleMenu = document.getElementById('toggle-menu');


buttonToggleMenu.addEventListener('click', function() {
      toggleMenu.classList.toggle('no-hidden')
});




//Animacion h1 Hero

const textHeroOne = document.querySelector('.selector-text-hero');
setTimeout(()=>{
      textHeroOne.classList.remove('text-hero-h1__p1');
      textHeroOne.classList.add('text-hero-h1-p__infinit');
}, 10000);