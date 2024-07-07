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
let toggle = true;


const cambiarTexto = ()=> {
      if (toggle) {
            textHeroOne.style.fontSize = '2.1rem';
            textHeroOne.textContent = '"Hagamos algo extraordinario"';
      }else {
            textHeroOne.textContent = '"Todos tenemos una historia para contar, tu empresa también"';
      }     
      toggle = !toggle;
}


//Cambia la clase, 1 vez para cambiar la animacion
setTimeout(()=>{
      textHeroOne.classList.remove('text-hero-h1__p1');
      textHeroOne.classList.add('text-hero-h1-p__infinit');
      
}, 10000);


//Intervalos para cambiar el texto
setInterval(cambiarTexto, 10000);





//Button-SABER MAS

const containerBtnSaberMas = document.querySelector('.container__saber-mas');
const articleSaberMas = document.querySelector('#id-article-saber-mas');
const btnSaberMasText = document.querySelector('#button__saber-mas');

const toggleBtnSm = document.querySelector('.btnHidden');

containerBtnSaberMas.addEventListener('click', ()=>{
      articleSaberMas.classList.toggle('article-saber-mas__down');
     
      if ( articleSaberMas.classList.contains('article-saber-mas__inactive')) {
            articleSaberMas.classList.remove('article-saber-mas__inactive');
            articleSaberMas.classList.add('article-saber-mas__down');
            toggleBtnSm.classList.add('toggle-btn-sm');
      } else {
            articleSaberMas.classList.remove('article-saber-mas__down');
            toggleBtnSm.classList.remove('toggle-btn-sm');
           
            articleSaberMas.classList.add('article-saber-mas__inactive');
      }
})





//----------------