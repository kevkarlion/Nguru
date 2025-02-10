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



//Button-SABER MAS
const containerBtnSaberMas = document.querySelector('.container__saber-mas');
const articleSaberMas = document.querySelector('#id-article-saber-mas');
const btnSaberMasText = document.querySelector('#button__saber-mas');

function ajustarSeccionSegunPantalla() {
    if (window.innerWidth > 1024) {
        articleSaberMas.classList.add('article-saber-mas__down');
        articleSaberMas.classList.remove('article-saber-mas__inactive');
        containerBtnSaberMas.style.display = 'none';
    } else {
        articleSaberMas.classList.remove('article-saber-mas__down');
        articleSaberMas.classList.add('article-saber-mas__inactive');
        containerBtnSaberMas.style.display = 'flex';
        btnSaberMasText.innerText = 'Saber más';
    }
}

window.addEventListener('resize', ajustarSeccionSegunPantalla);
ajustarSeccionSegunPantalla();

// Función para alternar el contenido
const toggleContent = (event) => {
    if (window.innerWidth <= 1024) {
        articleSaberMas.classList.toggle('article-saber-mas__down');
        articleSaberMas.classList.toggle('article-saber-mas__inactive');

        btnSaberMasText.innerText = articleSaberMas.classList.contains('article-saber-mas__down') 
            ? 'Ocultar' 
            : 'Saber más';
    }
};
containerBtnSaberMas.addEventListener('click', toggleContent);
//----------------