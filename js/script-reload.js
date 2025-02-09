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
        // Pantallas grandes: mostrar contenido y ocultar botón
        articleSaberMas.classList.add('article-saber-mas__down');
        articleSaberMas.classList.remove('article-saber-mas__inactive');
        containerBtnSaberMas.style.display = 'none';
    } else {
        // Pantallas pequeñas: ocultar contenido y mostrar botón
        articleSaberMas.classList.remove('article-saber-mas__down');
        articleSaberMas.classList.add('article-saber-mas__inactive');
        containerBtnSaberMas.style.display = 'flex';
        btnSaberMasText.innerText = 'Saber más';
    }
}

// Detectar cambios de tamaño de pantalla
window.addEventListener('resize', ajustarSeccionSegunPantalla);

// Ejecutar al cargar la página
ajustarSeccionSegunPantalla();

// Función del botón en mobile con soporte para dispositivos táctiles y clics
const toggleContent = () => {
    if (window.innerWidth <= 1024) {
        articleSaberMas.classList.toggle('article-saber-mas__down');
        articleSaberMas.classList.toggle('article-saber-mas__inactive');

        // Cambiar el texto del botón según el estado
        btnSaberMasText.innerText = articleSaberMas.classList.contains('article-saber-mas__down') 
            ? 'Ocultar' 
            : 'Saber más';
    }
};

// Agregar eventos para dispositivos táctiles y clics
containerBtnSaberMas.addEventListener('touchstart', toggleContent);
containerBtnSaberMas.addEventListener('click', toggleContent);




//----------------