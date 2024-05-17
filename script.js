//Funcoes que tratam de acoes nos botoes 


function transicao(){
    var transitionScreen = document.querySelector(".transition-screen");
    transitionScreen.classList.add("hidden");
    setTimeout(function() {
        transitionScreen.remove();
    }, 1000);
    window.location.href = "index.html";
}


document.addEventListener("DOMContentLoaded", function() {
  setTimeout(transicao , 3000); // 3s (em milisegundos)
  });

document.addEventListener("DOMContentLoaded", function() {
    
});
  
  document.getElementById('login-form').addEventListener('submit', redirectToMenu);
  //faz o menu funcionar

function controlarMenu(){
  const dropdownMenu = document.getElementById('dropdown-menu');
  dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
}


function adcionaEventoClickMenu(){
  const menuIcon = document.getElementById('menu-icon');
  menuIcon.addEventListener('click', function() {
   controlarMenu(); 
 });

function redirectToMenu(event) {
  event.preventDefault(); 
  window.location.href = 'menu.html'; //Manda pro menu
}

}
//todos os eventos de acao de click ficaram aqui
adcionaEventoClickMenu();

 

