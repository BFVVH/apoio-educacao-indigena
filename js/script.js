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

// consulta o pedido salvo pelo protocolo
const formularioConsulta = document.querySelector("#formulario-consulta");

if (formularioConsulta) {
    formularioConsulta.addEventListener("submit", function (evento) {
        evento.preventDefault();

        const protocolo = new FormData(formularioConsulta).get("protocolo").trim().toUpperCase();
        const resposta = document.querySelector("#resposta-consulta");
        const dadosPedido = document.querySelector("#dados-pedido");
        dadosPedido.hidden = true;

        try {
            const pedidos = JSON.parse(localStorage.getItem("pedidosVozesDaEscola") || "[]");
            const pedido = pedidos.find(function (item) {
                return item.protocolo === protocolo;
            });

            if (!pedido) {
                resposta.textContent = "Pedido não encontrado neste navegador. Confira o protocolo.";
                return;
            }

            document.querySelector("#pedido-tipo").textContent = pedido.tipo;
            document.querySelector("#pedido-descricao").textContent = pedido.descricao;
            document.querySelector("#pedido-status").textContent = pedido.status;
            resposta.textContent = "Pedido encontrado: " + pedido.protocolo + ".";
            dadosPedido.hidden = false;
        } catch (erro) {
            resposta.textContent = "Não foi possível consultar os pedidos neste navegador.";
        }
    });
}
