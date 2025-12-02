// Carrega banda
async function carregarBanda() {
    const container = document.getElementById("perfilBanda");
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    try {
        const res = await fetch("bands.json");
        const bandas = await res.json();

        const banda = bandas[id];
        if (!banda) {
            container.innerHTML = `<p class="text-danger">Banda não encontrada.</p>`;
            return;
        }

        container.innerHTML = `
            <div class="card bg-card text-card shadow-sm">
              <img src="${banda.imagem}" class="card-img-top" alt="${banda.nome}">
              <div class="card-body">
                <h1 class="fw-bold">${banda.nome}</h1>
                <p class="text-muted">${banda.origem} • Formada em ${banda.formada}</p>
                <p class="fs-5">${banda.bio}</p>
                <a href="bandas.html" class="btn btn-outline-danger mt-3">← Voltar</a>
              </div>
            </div>
        `;
    } catch (err) {
        container.innerHTML = `<p class="text-danger">Erro ao carregar o perfil da banda.</p>`;
        console.error("Erro carregar bands.json:", err);
    }
}

carregarBanda();
