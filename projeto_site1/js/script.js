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

    //estrutura do código para o carrossel de imagens

    const slides = document.querySelectorAll(".carousel-slide");
    const dots = document.querySelectorAll(".dot");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    let slideAtual = 0;
    let slideIntervalo;

    function showSlide(index) {
        slides.forEach((slide) => {
            slide.classList.remove("active");
            dots.forEach((dot) => dot.classList.remove("active"));
        });
        slideAtual = (index + slides.length) % slides.length;
        slides[slideAtual].classList.add("active");
        dots[slideAtual].classList.add("active");
    }
    function nextSlide() {
        showSlide(slideAtual + 1);
    }
    function prevSlide() {
        showSlide(slideAtual - 1);
    }
    function startSlide() {
        slideIntervalo = setInterval(nextSlide, 5000);
    }
    function stopSlide() {
        clearInterval(slideIntervalo);
    }
    nextBtn.addEventListener("click", function() {
        nextSlide();
        stopSlide();
        startSlide();
    });
    prevBtn.addEventListener("click", function() {
        prevSlide();
        stopSlide();
        startSlide();
    });
    dots.forEach((dot, index) => {
        dot.addEventListener("click", function() {
            showSlide(index);
            stopSlide();
            startSlide();
        });
    });
    // Inicializa o carrossel
    showSlide(slideAtual);
    startSlide();

    //validação do formulário de contato
    const contatoForm = document.getElementById("contatoForm");
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const mensagem = document.getElementById("mensagem");


    contatoForm.addEventListener("submit", function(event) {
        event.preventDefault();

        let isValid = true;
        if (isNameValid.value.trim().length < 3) {
            isValid = false;
            showError("Por favor, preencha o campo Nome.");
        }
        if(!isEmailValid.value.trim().includes("@")) {
            isValid = false;
            showError("Por favor, preencha o campo Email.");
        }
        if (isMensagemValid.value.trim().length < 10) {
            isValid = false;
            showError("Por favor, preencha o campo Mensagem com no mínimo 10 caracteres.");
        }
        if (isValid) {
            clearError();
            alert("Formulário enviado com sucesso!");
            contatoForm.reset();
        }

        function isEmailValid(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }
        function showError(inputElement, message) {
            const formGroup = inputElement.parentElement;
            clearFieldError(inputElement);
            const erroMensagem = document.createElement("small");
            erroMensagem.className = "error-message";
            erroMensagem.innerText = message;
            formGroup.appendChild(erroMensagem);
            inputElement.classList.add("error");
        }
    });    
});//fechamento do evento carregar página