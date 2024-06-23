let lastScrollTop = 0;
const navegation = document.querySelector('.page-header');
const scrollY =  window.scrollY;


window.addEventListener('scroll', ()=> {
      const scrollY =  window.scrollY;
      console.log(scrollY);
})



//interactividad menu hamburguesa

const buttonToggleMenu = document.querySelector('.button-toggle-menu');
const toggleMenu = document.getElementById('toggle-menu');
let btnDropDownTgl = true;


buttonToggleMenu.addEventListener('click', function() {
      btnDropDownTgl = !btnDropDownTgl;
      console.log(btnDropDownTgl);

      if(btnDropDownTgl === true ) {
            //true me agrega
            toggleMenu.classList.toggle('hidden');
      }
});
