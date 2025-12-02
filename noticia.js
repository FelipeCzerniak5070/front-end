async function carregarNoticia() {
    const container = document.getElementById("conteudoNoticia");

    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    try {
        const resposta = await fetch("posts.json");
        const posts = await resposta.json();

        const post = posts[id];

        if (!post) {
            container.innerHTML = "<p class='text-danger'>Notícia não encontrada.</p>";
            return;
        }

        container.innerHTML = `
            <h1 class="fw-bold mb-3">${post.titulo}</h1>
            <p class="text-muted mb-4">${post.data}</p>
            <img src="${post.imagem}" class="img-fluid rounded mb-4">
            <p class="fs-5">${post.conteudo}</p>

            <a href="noticias.html" class="btn btn-outline-danger mt-4">← Voltar para notícias</a>
        `;
    } catch (erro) {
        container.innerHTML = "<p class='text-danger'>Erro ao carregar notícia.</p>";
    }
}

carregarNoticia();
