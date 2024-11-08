// Menu hamburguer 
let btnMenu = document.getElementById('btn-menu');
let menu = document.getElementById('menu-mobile');
let overlay = document.getElementById('overlay-menu')

// faz com q abre e feche o menu
btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', () => {
    menu.classList.remove('abrir-menu')
})


// Animaçãp de rolagem 
const sections = document.querySelectorAll('main > section'); // Seleciona todos os <section> dentro de <main>

window.addEventListener('scroll', () => {
  const screenHeight = window.innerHeight;

  sections.forEach(section => {
    const sectionPosition = section.getBoundingClientRect().top;

    // Verifica se o elemento está visível na tela
    if (sectionPosition < screenHeight * 0.8) {
      // Aplicação da  animação
      section.style.transition = 'transform 0.8s ease-out, opacity 0.8s ease-out';  
      section.style.opacity = 1;
      section.style.transform = 'translateX(0)';
    } else {
      // Reseta a posição e opacidade se o elemento não estiver visível
      section.style.transition = 'none'; 
      section.style.opacity = 0;
      section.style.transform = 'translateX(-100px)';
    }
  });
});







