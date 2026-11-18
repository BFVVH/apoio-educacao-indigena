# Vozes do Saber

Site demonstrativo de apoio à trajetória educacional de estudantes indígenas, da educação básica ao ensino superior. A proposta reúne materiais de estudo e pedidos de apoio acompanhados por escolas, faculdades ou equipes parceiras.

**Acesse o site:** [Vozes do Saber no GitHub Pages](https://bfvvh.github.io/apoio-educacao-indigena/)

Esta versão não tem instituições reais cadastradas. As atividades são gerais; conteúdos ligados à língua e à cultura de uma comunidade precisariam ser preparados com sua participação e autorização.

## Páginas

- **Início:** apresenta o projeto e os caminhos principais.
- **Sobre e Instituições parceiras:** explicam a proposta e o papel das escolas, faculdades e equipes parceiras.
- **Materiais:** traz atividades da educação básica e uma orientação de estudo para o ensino superior.
- **Pedir apoio:** registra um pedido e permite consultá-lo pelo protocolo.
- **Pedidos recebidos:** permite ver, responder e atualizar pedidos.
- **FAQ, Integrantes e Contato:** reúnem dúvidas, equipe e links úteis.

## Como abrir e testar

Abra `index.html` com o Live Server do VS Code ou outro servidor local. Para testar o fluxo:

1. Acesse **Pedir apoio**, preencha o formulário e copie o protocolo.
2. Abra **Pedidos recebidos** pelo link no fim da página de pedidos.
3. Escolha o protocolo, altere o status e escreva uma resposta.
4. Volte à consulta do pedido e use o protocolo para ver a atualização.

Os pedidos ficam no `localStorage` do navegador. Não são enviados a uma instituição ou servidor, não aparecem em outro dispositivo e desaparecem se os dados do site forem apagados. A área da equipe não tem autenticação nesta versão.

## Tecnologias e arquivos

O projeto usa HTML, CSS e JavaScript, sem dependências externas. As páginas estão em `paginas/`, os estilos em `css/style.css`, as interações em `js/script.js` e as imagens e ícones em `assets/`.

