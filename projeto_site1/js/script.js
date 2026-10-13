document.addEventListener("DOMContentLoaded", function() {
    const menuResponsivo = document.getElementById("menuResponsivo");
    const navMenu = document.getElementById("nav-menu");
    
    menuResponsivo.addEventListener("click", function() {
        navMenu.classList.toggle("active");
    });//fecha o menu responsivo
    
    const navLinks = document.querySelectorAll(".nav-menu a");
    navLinks.forEach(function(Link) {
        Link.addEventListener("click", function() {
            navMenu.classList.remove("active");
        });
    });//fecha menu responsivo ao clicar em um link


});//fechamento do evento carregar página
