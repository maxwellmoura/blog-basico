// Alternância de Tema e Ícone
const themeToggleButton = document.getElementById('theme-icon');
themeToggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    
    // Alternar entre o ícone de sol e lua
    if (document.body.classList.contains('dark-theme')) {
        themeToggleButton.classList.remove('fa-sun');
        themeToggleButton.classList.add('fa-moon');
    } else {
        themeToggleButton.classList.remove('fa-moon');
        themeToggleButton.classList.add('fa-sun');
    }
});

// Funcionalidade de Busca
const searchForm = document.getElementById('search-form');
searchForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir envio do formulário
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    const posts = document.querySelectorAll('.post');

    posts.forEach(post => {
        const postTitle = post.querySelector('.titulo a').textContent.toLowerCase();
        if (postTitle.includes(searchInput)) {
            post.style.display = 'block'; // Exibe o post correspondente
        } else {
            post.style.display = 'none'; // Oculta posts que não correspondem
        }
    });
});
