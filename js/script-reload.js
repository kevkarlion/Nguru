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


const btnSaberMas = document.querySelector('#button__saber-mas');
const imgBtnSaberMas = document.querySelector('.container__zorrito-saber-mas');


const hiddenMore = document.querySelector('.article-saber-mas__inactive');



//Click Down
containerBtnSaberMas.addEventListener('click', ()=>{
      containerBtnSaberMas.classList.remove('container__saber-mas');
      containerBtnSaberMas.classList.add('container__saber-mas-box-vacia');

      btnSaberMas.classList.add('container__saber-mas__hidden');
      imgBtnSaberMas.classList.add('container__saber-mas__hidden');


      articleSaberMas.classList.remove('article-saber-mas__inactive');
      articleSaberMas.classList.add('article-saber-mas__down');
})


//Click  Up
hiddenMore.addEventListener('click', ()=> {
      containerBtnSaberMas.classList.remove('container__saber-mas-box-vacia');

      btnSaberMas.classList.remove('container__saber-mas__hidden');
      imgBtnSaberMas.classList.remove('container__saber-mas__hidden');


      containerBtnSaberMas.classList.add('container__saber-mas');
      articleSaberMas.classList.remove('article-saber-mas__down');
      articleSaberMas.classList.add('article-saber-mas__inactive');
})



//----------------