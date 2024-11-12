async function produtospage() {
    let div_produto = document.getElementById("div_produto");

    try {
        const response = await fetch("http://localhost:3000/api/produtos");
        
        if (!response.ok) {
            throw new Error(`Erro na resposta da API: ${response.status}`);
        }

        const dados = await response.json();

        // Verifica se 'dados.produtos' é um array antes de usar .map
        if (dados && Array.isArray(dados.produtos)) {
            dados.produtos.map((produto) => {
                div_produto.innerHTML += `
                    <div class="col-lg-4 col-12 mb-3">
                        <div class="product-thumb">
                            <a href="product-detail.html#id_pro=${produto.id}%id_art=${produto.id_artesao}">
                                <img src="${produto.imagem_produto}" class="img-fluid product-image" alt="">
                            </a>
                            <div class="product-info d-flex">
                                <div>
                                    <h5 class="product-title mb-0">
                                        <a href="product-detail.html#id_pro=${produto.id}%id_art=${produto.id_artesao}" class="product-title-link">${produto.nome}</a>
                                    </h5>
                                    <p class="product-p">${produto.descricao}</p>
                                </div>
                            </div>
                        </div>
                    </div>`;
            });
        } else {
            console.error("Formato inesperado de dados:", dados);
        }
    } catch (error) {
        console.error("Erro ao carregar produtos:", error);
    }
}
