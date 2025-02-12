document.addEventListener("DOMContentLoaded", function () {
    // 📌 Menu responsivo
    const menuBtn = document.querySelector(".menu-btn");
    const menu = document.querySelector(".menu");

    if (menuBtn && menu) {
        menuBtn.addEventListener("click", function () {
            menu.classList.toggle("active");
        });
    }

    // 🎥 Verificar carregamento do vídeo
    const video = document.querySelector(".bg-video");
    if (video) {
        video.addEventListener("error", function () {
            console.error("Erro ao carregar o vídeo de fundo.");
        });
    }

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

    // ✅ Validação de Formulário na Página de Contato
    let form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", function (event) {
            let nome = document.querySelector("input[name='nome']").value;
            let email = document.querySelector("input[name='email']").value;
            let mensagem = document.querySelector("textarea[name='mensagem']").value;

            if (nome.trim() === "" || email.trim() === "" || mensagem.trim() === "") {
                alert("Por favor, preencha todos os campos.");
                event.preventDefault();
            } else {
                alert("Mensagem enviada com sucesso!");
            }
        });
    }
});
