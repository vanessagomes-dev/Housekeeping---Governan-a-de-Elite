document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript carregado com sucesso!"); // Log para testar se o script está sendo carregado

    let menuBtn = document.querySelector(".menu-btn");
    let menu = document.querySelector(".menu");
    let menuLinks = document.querySelectorAll(".menu a");

    if (!menuBtn || !menu) {
        console.error("Erro: Elementos do menu não encontrados.");
        return; // Sai da função se os elementos não existirem
    }

    console.log("Elementos do menu encontrados!"); // Confirmação no console

    menuBtn.addEventListener("click", function () {
        console.log("Botão do menu clicado!"); // Teste no console
        menu.classList.toggle("active"); // Abre e fecha o menu no clique
    });

    // Fecha o menu ao clicar em um link (para telas menores)
    menuLinks.forEach(link => {
        link.addEventListener("click", function () {
            console.log(`Clicou em: ${link.textContent}`); // Teste no console
            menu.classList.remove("active"); // Fecha ao clicar no link
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
