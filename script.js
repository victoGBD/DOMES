document.addEventListener("DOMContentLoaded", function() {
  setTimeout(function() {
      var transitionScreen = document.querySelector(".transition-screen");

      transitionScreen.classList.add("hidden");

      setTimeout(function() {
          transitionScreen.remove();
      }, 1000);
      window.location.href = "index.html";
  }, 3000); // 3 segundos em milissegundos
    // Função para redirecionar para a página de menu
  });

document.addEventListener("DOMContentLoaded", function() {
    function redirectToMenu(event) {
      event.preventDefault(); // Previne o envio padrão do formulário
      window.location.href = 'menu.html'; // Redireciona para a página menu.html
  }

  // Adiciona o evento de submissão ao formulário
  document.getElementById('login-form').addEventListener('submit', redirectToMenu);
  // Adiciona funcionalidade ao ícone de menu
  const menuIcon = document.getElementById('menu-icon');
  const dropdownMenu = document.getElementById('dropdown-menu');

  menuIcon.addEventListener('click', function() {
      dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
  });
});

