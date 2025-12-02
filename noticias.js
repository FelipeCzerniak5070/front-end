async function carregarNoticias() {
    const container = document.getElementById("listaNoticias");

    try {
        const resposta = await fetch("posts.json");
        const posts = await resposta.json();

        container.innerHTML = "";

        posts.forEach((post, index) => {
            const item = `
                <div class="col-12">
                    <div class="card bg-card text-card shadow-sm">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src="${post.imagem}" class="img-fluid h-100 w-100 object-fit-cover rounded-start" alt="${post.titulo}">
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h3 class="fw-bold">${post.titulo}</h3>
                                    <p class="text-muted">${post.data}</p>
                                    <p>${post.conteudo}</p>
                                    <a href="noticia.html?id=${index}" class="btn btn-danger btn-sm">
                                        Ler matéria completa →
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`;
            
            container.innerHTML += item;
        });

    } catch (erro) {
        container.innerHTML = `<p class="text-danger">Erro ao carregar notícias.</p>`;
    }
}

carregarNoticias();
