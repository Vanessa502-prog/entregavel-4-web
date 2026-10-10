# Entregável 4 - Arrays, DOM e Eventos

## Descrição

Este projeto foi desenvolvido para praticar os conceitos de JavaScript estudados na Semana 04. A atividade reúne métodos de arrays, manipulação do DOM e eventos em uma página HTML.

## 1. Arrays e métodos

- **forEach:** percorre os elementos de um array e executa uma ação para cada um.
- **map:** cria um novo array a partir da transformação dos elementos originais.
- **filter:** cria um novo array contendo apenas os elementos que atendem a uma condição.
- **reduce:** percorre os elementos e acumula os valores em um único resultado.

Esses métodos foram utilizados para trabalhar com nomes, preços e produtos.

## 2. Manipulação do DOM

O `querySelector` seleciona um elemento da página, enquanto o `querySelectorAll` seleciona todos os elementos que correspondem a um seletor.

O `createElement` cria novos elementos HTML, o `textContent` define seus textos e o `append` adiciona os elementos à página. O `innerHTML` foi utilizado para inserir itens na lista.

O `classList.add` adiciona uma classe CSS, e o `classList.contains` verifica se ela existe.

## 3. Eventos e Event Delegation

O `addEventListener` permite executar funções em resposta a ações do usuário, como cliques, movimentos do mouse, digitação e envio de formulários.

O `e.preventDefault()` impede o comportamento padrão de envio do formulário, evitando o recarregamento da página.

O Event Delegation consiste em adicionar um único evento ao elemento pai e identificar o elemento clicado por meio de `e.target`. Isso evita a necessidade de adicionar um evento individual a cada item e permite que elementos criados dinamicamente também respondam aos cliques.

## Como executar

1. Abra o arquivo `index.html` no navegador.
2. Pressione F12 para abrir as ferramentas do desenvolvedor.
3. Acesse a aba Console para visualizar os resultados.
4. Teste o botão, o campo de nome, os itens da lista e o formulário.
