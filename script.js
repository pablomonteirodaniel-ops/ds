// ==========================================
// 1. ESPERAR O DOM (HTML) CARREGAR COMPLETAMENTE
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM totalmente carregado e pronto!");

    // Inicializa as funções do site
    initMenuMobile();
    initFormValidation();
});

// ==========================================
// 2. EXEMPLO: MENU MOBILE (TOGGLE)
// ==========================================
function initMenuMobile() {
    const menuBtn = document.querySelector(".menu-button"); // Ajuste a classe conforme seu HTML
    const navLinks = document.querySelector(".nav-links");

    // Verifica se os elementos realmente existem na página para não dar erro
    if (menuBtn && navLinks) {
        menuBtn.addEventListener("click", () => {
            navLinks.classList.toggle("active"); // Alterna a classe que mostra/esconde o menu
            menuBtn.classList.toggle("toggle-icon");
        });
    }
}

// ==========================================
// 3. EXEMPLO: VALIDAÇÃO DE FORMULÁRIO DE CONTATO
// ==========================================
function initFormValidation() {
    const form = document.querySelector("#contact-form"); // Ajuste o ID conforme seu HTML

    if (form) {
        form.addEventListener("submit", (event) => {
            // Impede o envio padrão (recarregar a página) antes de validar
            event.preventDefault();

            const nameInput = document.querySelector("#name").value.trim();
            const emailInput = document.querySelector("#email").value.trim();

            // Validação simples
            if (nameInput === "" || emailInput === "") {
                alert("Por favor, pre
