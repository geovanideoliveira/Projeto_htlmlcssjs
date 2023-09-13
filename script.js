document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("login-form");
  const registerForm = document.getElementById("register-form");

  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    // Implementar lógica de verificação de login aqui
    // Se o usuário não estiver cadastrado, redirecione para o formulário de cadastro
  });

  registerForm.addEventListener("submit", function (e) {
    e.preventDefault();
    // Implementar lógica de cadastro de usuário aqui
    // Após o cadastro, redirecione para a página de login
  });
});
