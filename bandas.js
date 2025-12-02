//carrega bands.json
async function carregarBandas() {
    const container = document.getElementById("bandasContainer");
    try {
        const res = await fetch("bands.json");
        const bandas = await res.json();

        container.innerHTML = "";

        bandas.forEach((banda, idx) => {
            const html = `
            <div class="col-12">
              <div class="card bg-card text-card shadow-sm">
                <div class="row g-0 align-items-center">
                  <div class="col-md-4">
                    <img src="${banda.imagem}" alt="${banda.nome}"
                         class="img-fluid h-100 w-100 object-fit-cover rounded-start">
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h3 class="card-title fw-bold">${banda.nome}</h3>
                      <p class="text-muted mb-1">${banda.origem} • Formada: ${banda.formada}</p>
                      <p class="card-text">${banda.bio}</p>
                      <a href="banda.html?id=${idx}" class="stretched-link btn btn-sm btn-danger">Ver perfil</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>`;
            container.innerHTML += html;
        });

        
        const searchInput = document.getElementById("searchInput");
        const searchBtn = document.getElementById("searchBtn");

        function filtrarBandas() {
            const termo = (searchInput.value || "").toLowerCase();
            document.querySelectorAll("#bandasContainer .card").forEach(card => {
                const nome = card.querySelector(".card-title").innerText.toLowerCase();
                const bio = card.querySelector(".card-text").innerText.toLowerCase();
                card.parentElement.style.display = (nome.includes(termo) || bio.includes(termo)) ? "" : "none";
            });
        }

        if (searchInput) searchInput.addEventListener("input", filtrarBandas);
        if (searchBtn) searchBtn.addEventListener("click", (e) => { e.preventDefault(); filtrarBandas(); });

    } catch (err) {
        container.innerHTML = `<p class="text-danger">Erro ao carregar bandas.</p>`;
        console.error("Erro ao carregar bands.json:", err);
    }
}

carregarBandas();
