//Carregar posts do JSON

async function carregarPosts() {
    const container = document.getElementById("postsContainer");

    try {
        const resposta = await fetch("posts.json");
        const posts = await resposta.json();

        container.innerHTML = "";

        posts.forEach(post => {
            const card = `
                <div class="col-md-4">
                    <div class="card h-100 bg-card text-card">
                        <img src="${post.imagem}" class="card-img-top" alt="${post.titulo}">
                        <div class="card-body">
                            <h5 class="card-title fw-bold">${post.titulo}</h5>
                            <p class="text-muted small">${post.data}</p>
                            <p>${post.conteudo}</p>
                        </div>
                    </div>
                </div>
            `;
            container.innerHTML += card;
        });
    } catch (erro) {
        container.innerHTML = `<p class="text-danger">Erro ao carregar posts.</p>`;
        console.error("Erro ao carregar posts.json:", erro);
    }
}

carregarPosts();

//----------

//Tema com local storage
const themeToggle = document.getElementById("themeToggle");
const html = document.documentElement;

// Carrega o tema salvo
const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
    html.setAttribute("data-bs-theme", savedTheme);

    // Ajusta ícone do botão ao carregar
    themeToggle.innerHTML =
        savedTheme === "dark"
            ? '<i class="bi bi-brightness-high"></i>'
            : '<i class="bi bi-moon-stars"></i>';
}

// Alternância de tema
themeToggle.addEventListener("click", () => {
    const current = html.getAttribute("data-bs-theme");
    const newTheme = current === "light" ? "dark" : "light";

    html.setAttribute("data-bs-theme", newTheme);

    // Salva no localStorage
    localStorage.setItem("theme", newTheme);

    // Atualiza ícone
    themeToggle.innerHTML =
        newTheme === "dark"
            ? '<i class="bi bi-brightness-high"></i>'
            : '<i class="bi bi-moon-stars"></i>';
});




// Busca e filtro de posts
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

function filtrarPosts() {
    const termo = searchInput.value.toLowerCase();
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        const titulo = card.querySelector(".card-title").innerText.toLowerCase();
        const conteudo = card.querySelector(".card-body p:last-child").innerText.toLowerCase();

        if (titulo.includes(termo) || conteudo.includes(termo)) {
            card.parentElement.style.display = "block";
        } else {
            card.parentElement.style.display = "none";
        }
    });
}

// Eventos de busca
searchInput.addEventListener("input", filtrarPosts);
searchBtn.addEventListener("click", e => {
    e.preventDefault();
    filtrarPosts();
});
