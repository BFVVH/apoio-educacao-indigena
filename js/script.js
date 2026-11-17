// salva pedidos de exemplo neste navegador
const formularioPedido = document.querySelector("#formulario-pedido");

if (formularioPedido) {
    formularioPedido.addEventListener("submit", function (evento) {
        evento.preventDefault();

        const dados = new FormData(formularioPedido);
        const tipo = dados.get("tipo");
        const descricao = dados.get("descricao").trim();
        const resposta = document.querySelector("#resposta-pedido");

        if (!tipo || !descricao) {
            resposta.textContent = "Preencha os dois campos para registrar o pedido.";
            return;
        }

        const protocolo = "VDE-" + Date.now().toString(36).toUpperCase();
        const pedido = { protocolo, tipo, descricao, status: "Recebido" };

        try {
            const pedidos = JSON.parse(localStorage.getItem("pedidosVozesDaEscola") || "[]");
            pedidos.push(pedido);
            localStorage.setItem("pedidosVozesDaEscola", JSON.stringify(pedidos));
            resposta.textContent = "Pedido salvo neste navegador. Seu protocolo é " + protocolo + ".";
            formularioPedido.reset();
        } catch (erro) {
            resposta.textContent = "Não foi possível salvar o pedido neste navegador.";
        }
    });
}
