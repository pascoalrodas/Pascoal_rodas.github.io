// Função para abrir e fechar o menu
function toggleMenu() {
    const menu = document.querySelector('.menu ul'); // Seleciona a lista de navegação
    menu.classList.toggle('active'); // Ativa ou desativa a classe 'active' no menu
  }
  
  // Adiciona evento de clique no ícone do menu hambúrguer
  document.querySelector('.hamburger').addEventListener('click', toggleMenu);
  