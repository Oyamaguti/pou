document.addEventListener("DOMContentLoaded", function () {
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const loginButton = document.querySelector(".btn");
    const loginForm = document.getElementById("loginForm");

    // Desativa o botão de login no início
    loginButton.disabled = true;
    loginButton.style.opacity = "0.5"; // Para indicar que está desativado

    // Função para verificar se os campos estão preenchidos
    function checkInputs() {
        if (usernameInput.value.trim() !== "" && passwordInput.value.trim() !== "") {
            loginButton.disabled = false;
            loginButton.style.opacity = "1"; // Ativar visualmente o botão
        } else {
            loginButton.disabled = true;
            loginButton.style.opacity = "0.5";
        }
    }

    // Adiciona eventos para verificar os campos ao digitar
    usernameInput.addEventListener("input", checkInputs);
    passwordInput.addEventListener("input", checkInputs);

    // Lógica de login
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita o recarregamento da página

        alert("Login realizado com sucesso!");
        window.location.href = "teladeescolha.html"; // Redireciona para outra página
    });
});
