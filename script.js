document.addEventListener("DOMContentLoaded", function() {
  setTimeout(function() {
    var transitionScreen = document.querySelector(".transition-screen");

    transitionScreen.classList.add("hidden");

    setTimeout(function() {
      transitionScreen.remove();
    }, 1000);
    window.location.href = "index.html";
  }, 3000); // 3 segundos em milissegundos
});