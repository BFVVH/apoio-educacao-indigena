// salva os pedidos no navegador
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
            resposta.textContent = "Pedido registrado. Seu protocolo é " + protocolo + ".";
            formularioPedido.reset();
        } catch (erro) {
            resposta.textContent = "Não foi possível registrar o pedido.";
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
                resposta.textContent = "Pedido não encontrado. Confira o protocolo.";
                return;
            }

            document.querySelector("#pedido-tipo").textContent = pedido.tipo;
            document.querySelector("#pedido-descricao").textContent = pedido.descricao;
            document.querySelector("#pedido-status").textContent = pedido.status;
            document.querySelector("#pedido-resposta").textContent = pedido.resposta || "Aguardando resposta.";
            resposta.textContent = "Pedido encontrado: " + pedido.protocolo + ".";
            dadosPedido.hidden = false;
        } catch (erro) {
            resposta.textContent = "Não foi possível consultar os pedidos.";
        }
    });
}

// mostra os pedidos para a equipe
const listaPedidos = document.querySelector("#lista-pedidos");

if (listaPedidos) {
    const aviso = document.querySelector("#aviso-lista-pedidos");
    const formularioEquipe = document.querySelector("#formulario-equipe");
    const seletorPedido = document.querySelector("#protocolo-equipe");
    const avisoResposta = document.querySelector("#aviso-resposta-equipe");

    function mostrarPedidos(pedidos) {
        listaPedidos.replaceChildren();
        aviso.textContent = pedidos.length === 0 ? "Nenhum pedido registrado até agora." : "";

        pedidos.forEach(function (pedido) {
            const item = document.createElement("li");
            const titulo = document.createElement("h3");
            const tipo = document.createElement("p");
            const descricao = document.createElement("p");
            const status = document.createElement("p");
            const resposta = document.createElement("p");

            titulo.textContent = pedido.protocolo;
            tipo.textContent = "Tipo: " + pedido.tipo;
            descricao.textContent = "Descrição: " + pedido.descricao;
            status.textContent = "Status: " + pedido.status;
            resposta.textContent = "Resposta: " + (pedido.resposta || "Aguardando resposta.");

            item.append(titulo, tipo, descricao, status, resposta);
            listaPedidos.append(item);
        });
    }

    try {
        const pedidos = JSON.parse(localStorage.getItem("pedidosVozesDaEscola") || "[]");
        mostrarPedidos(pedidos);
        pedidos.forEach(function (pedido) {
            const opcao = document.createElement("option");
            opcao.value = pedido.protocolo;
            opcao.textContent = pedido.protocolo;
            seletorPedido.append(opcao);
        });
    } catch (erro) {
        aviso.textContent = "Não foi possível carregar os pedidos.";
    }

    formularioEquipe.addEventListener("submit", function (evento) {
        evento.preventDefault();

        const dados = new FormData(formularioEquipe);
        const protocolo = dados.get("protocolo");
        const status = dados.get("status");
        const resposta = dados.get("resposta").trim();

        if (status !== "Em análise" && !resposta) {
            avisoResposta.textContent = "Escreva uma resposta para marcar o pedido como respondido ou concluído.";
            return;
        }

        try {
            const pedidos = JSON.parse(localStorage.getItem("pedidosVozesDaEscola") || "[]");
            const pedido = pedidos.find(function (item) {
                return item.protocolo === protocolo;
            });

            if (!pedido) {
                avisoResposta.textContent = "Pedido não encontrado.";
                return;
            }

            pedido.status = status;
            pedido.resposta = resposta;
            localStorage.setItem("pedidosVozesDaEscola", JSON.stringify(pedidos));
            mostrarPedidos(pedidos);
            avisoResposta.textContent = "Pedido " + protocolo + " atualizado.";
            formularioEquipe.reset();
        } catch (erro) {
            avisoResposta.textContent = "Não foi possível atualizar o pedido.";
        }
    });
}
