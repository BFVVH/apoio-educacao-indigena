# Vozes da Escola

Site demonstrativo de apoio à educação escolar indígena. A ideia é que cada escola organize materiais para seus estudantes e acompanhe pedidos de apoio educacional.

Esta versão não tem escolas reais cadastradas. As atividades são gerais; conteúdos ligados à língua e à cultura de uma comunidade precisariam ser preparados com sua participação e autorização.

## Páginas

- **Início:** apresenta o projeto e os caminhos principais.
- **Sobre e Escolas:** explicam a proposta e o papel das escolas.
- **Materiais:** traz duas atividades para leitura no site.
- **Pedir apoio:** registra um pedido e permite consultá-lo pelo protocolo.
- **Pedidos recebidos:** permite ver, responder e atualizar pedidos.
- **FAQ, Integrantes e Contato:** reúnem dúvidas, equipe e links úteis.

## Como abrir e testar

Abra `index.html` com o Live Server do VS Code ou outro servidor local. Para testar o fluxo:

1. Acesse **Pedir apoio**, preencha o formulário e copie o protocolo.
2. Abra **Pedidos recebidos** pelo link no fim da página de pedidos.
3. Escolha o protocolo, altere o status e escreva uma resposta.
4. Volte à consulta do pedido e use o protocolo para ver a atualização.

Os pedidos ficam no `localStorage` do navegador. Não são enviados a uma escola ou servidor, não aparecem em outro dispositivo e desaparecem se os dados do site forem apagados. A área da equipe não tem autenticação nesta versão.

## Tecnologias e arquivos

O projeto usa HTML, CSS e JavaScript, sem dependências externas. As páginas estão em `paginas/`, os estilos em `css/style.css`, as interações em `js/script.js` e as imagens e ícones em `assets/`.

