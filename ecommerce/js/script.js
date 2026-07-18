const imagemPrincipal = document.querySelector("#imagem-principal");
const nomeCorSelecionada = document.querySelector("#cor-selecionada");
const opcoesDeCor = document.querySelectorAll(".opcao-cor");

function selecionarCor(botaoSelecionado) {
    const novaCor = botaoSelecionado.dataset.cor;
    const novaImagem = botaoSelecionado.dataset.image;
    const novoTextoAlternativo = botaoSelecionado.dataset.alt;

    nomeCorSelecionada.textContent = novaCor;
    imagemPrincipal.src = novaImagem;
    imagemPrincipal.alt = novoTextoAlternativo;

    opcoesDeCor.forEach((botao) => {
        botao.classList.remove("selecionada");
        botao.setAttribute("aria-pressed", "false");
    });

    botaoSelecionado.classList.add("selecionada");
    botaoSelecionado.setAttribute("aria-pressed", "true");
}

opcoesDeCor.forEach((botao) => {
    botao.addEventListener("click", () => {
        selecionarCor(botao);
    });
});