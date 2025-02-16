document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript carregado com sucesso!");

    let menuBtn = document.querySelector(".menu-btn");
    let menu = document.querySelector(".menu");
    let menuLinks = document.querySelectorAll(".menu a");

    if (!menuBtn || !menu) {
        console.error("Erro: Elementos do menu não encontrados.");
        return;
    }

    menuBtn.addEventListener("click", function () {
        menu.classList.toggle("active");
    });

    menuLinks.forEach(link => {
        link.addEventListener("click", function () {
            menu.classList.remove("active");
        });
    });

    // 🚀 Animação suave no scroll
    const elements = document.querySelectorAll(".fade-in");

    function scrollAnimation() {
        elements.forEach((el) => {
            let position = el.getBoundingClientRect().top;
            let screenHeight = window.innerHeight / 1.3;

            if (position < screenHeight) {
                el.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", scrollAnimation);
    scrollAnimation();

    // ✅ Validação de Formulário + Limpar Campos Após Envio
    let form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            let nome = document.querySelector("input[name='nome']").value.trim();
            let email = document.querySelector("input[name='email']").value.trim();
            let mensagem = document.querySelector("textarea[name='mensagem']").value.trim();

            if (!nome || !email || !mensagem) {
                alert("Por favor, preencha todos os campos.");
            } else {
                alert("Mensagem enviada com sucesso!");
                form.reset();
            }
        });
    }

   
});
