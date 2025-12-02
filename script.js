// Alternância de tema
const themeToggle = document.getElementById("themeToggle");
const html = document.documentElement;

themeToggle.addEventListener("click", () => {
    const current = html.getAttribute("data-bs-theme");

    if (current === "light") {
        html.setAttribute("data-bs-theme", "dark");
        themeToggle.innerHTML = '<i class="bi bi-brightness-high"></i>';
    } else {
        html.setAttribute("data-bs-theme", "light");
        themeToggle.innerHTML = '<i class="bi bi-moon-stars"></i>';
    }
});


//Busca
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

function filtrarPosts() {
    const termo = searchInput.value.toLowerCase();

    const cards = document.querySelectorAll(".card"); // todos os posts

    cards.forEach(card => {
        const titulo = card.querySelector(".card-title").innerText.toLowerCase();
        const conteudo = card.querySelector(".card-body p:last-child").innerText.toLowerCase();

        if (titulo.includes(termo) || conteudo.includes(termo)) {
            card.parentElement.style.display = "block";  // mostra o col-md-4
        } else {
            card.parentElement.style.display = "none";   // esconde o col-md-4
        }
    });
}

searchInput.addEventListener("input", filtrarPosts);


searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    filtrarPosts();
});
