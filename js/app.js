
const btnMenu =document.getElementById("btnMenu");
const menu=document.getElementById('menu');

btnMenu.addEventListener('click', ()=>{
  
    menu.classList.toggle("hidden");
})



window.addEventListener('scroll', function() {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) { // Si el usuario se ha desplazado más de 50px
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});