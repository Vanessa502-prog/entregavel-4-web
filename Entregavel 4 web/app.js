
console.log("===== BLOCO 1 - ARRAYS E MÉTODOS =====");

// 1. Array de nomes
const nomes = ["Ana", "Carlos", "Mariana"];

nomes.forEach(nome => {
    console.log(`Olá, ${nome}!`);
});

const nomesMaiusculos = nomes.map(nome => nome.toUpperCase());
console.log("Nomes em maiúsculas:", nomesMaiusculos);

// 2. Array de preços
const precos = [10, 25, 40, 5, 60];

const precosAcimaDe20 = precos.filter(preco => preco > 20);
console.log("Preços acima de 20:", precosAcimaDe20);

const somaPrecos = precos.reduce((total, preco) => total + preco, 0);
console.log("Soma dos preços:", somaPrecos);

// 3. Array de produtos
const produtos = [
    { nome: "Caderno", preco: 15 },
    { nome: "Mochila", preco: 80 },
    { nome: "Caneta", preco: 5 },
    { nome: "Estojo", preco: 25 }
];

const nomesProdutos = produtos.map(produto => produto.nome);
console.log("Nomes dos produtos:", nomesProdutos);

const produtosBaratos = produtos.filter(produto => produto.preco < 50);
console.log("Produtos com preço menor que 50:", produtosBaratos);

const totalProdutos = produtos.reduce(
    (total, produto) => total + produto.preco, 0
);
console.log("Soma dos preços dos produtos:", totalProdutos);

produtos.forEach(produto => {
    console.log(`Nome: ${produto.nome} - R$ ${produto.preco.toFixed(2)}`);
});


console.log("===== BLOCO 2 - MANIPULAÇÃO DO DOM =====");

// 1. Selecionar o título
const titulo = document.querySelector("#titulo");
titulo.textContent = "Blog da Vanessa";

// 2. Mostrar os textos dos parágrafos
const paragrafos = document.querySelectorAll(".texto");

paragrafos.forEach(paragrafo => {
    console.log(paragrafo.textContent);
});

// 3. Inserir dois itens usando innerHTML
const lista = document.querySelector("#lista");

lista.innerHTML += "<li>Primeiro item</li><li>Segundo item</li>";

// 4. Criar o terceiro item
const terceiroItem = document.createElement("li");
terceiroItem.textContent = "Terceiro item";
lista.append(terceiroItem);

// 5. Adicionar a classe destaque
terceiroItem.classList.add("destaque");
console.log(
    "Tem a classe destaque?",
    terceiroItem.classList.contains("destaque")
);

// 6. Criar a lista de tarefas
const tarefas = ["Estudar JS", "Fazer exercícios", "Revisar DOM"];

tarefas.forEach(tarefa => {
    const item = document.createElement("li");
    item.textContent = tarefa;
    lista.append(item);
});

// Aplicar feito ao primeiro item da lista
lista.querySelector("li").classList.add("feito");

// Mostrar a quantidade total de itens
console.log(
    "Quantidade de itens:",
    lista.querySelectorAll("li").length
);


console.log("===== BLOCO 3 - EVENTOS =====");

// 1. Evento de clique no botão
const botao = document.querySelector("#botao");

botao.addEventListener("click", () => {
    console.log("Clicou!");
});

// 2. Evento ao passar o mouse
botao.addEventListener("mouseover", () => {
    botao.textContent = "Pode clicar!";
});

// 3. Evento ao soltar uma tecla
const campoNome = document.querySelector("#nome");

campoNome.addEventListener("keyup", () => {
    console.log("Nome digitado:", campoNome.value);
});

// 4. Event Delegation
// Um único evento atende todos os itens da lista.
lista.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("feito");
        console.log("Item clicado:", e.target.textContent);
    }
});

// Criar um item novo para testar a delegação
const itemDinamico = document.createElement("li");
itemDinamico.textContent = "Item criado pelo JavaScript";
lista.append(itemDinamico);

// 5. Evento de envio do formulário
const formulario = document.querySelector("#formulario");
const campoTarefa = document.querySelector("#tarefa");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const textoTarefa = campoTarefa.value.trim();

    if (textoTarefa !== "") {
        const novaTarefa = document.createElement("li");
        novaTarefa.textContent = textoTarefa;
        lista.append(novaTarefa);

        campoTarefa.value = "";
    }
});
