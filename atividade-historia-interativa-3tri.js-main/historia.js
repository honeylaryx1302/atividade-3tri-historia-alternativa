
function escolherCaverna() {
    document.getElementById("story").textContent = 
        "Você entrou na caverna e encontrou um portal brilhante. Você pode atravessá-lo para o desconhecido ou explorá-lo cautelosamente.";
    document.querySelector(".choices").innerHTML = `
        <button onclick="atravessarPortal()">Atravessar o portal</button>
        <button onclick="explorarCaverna()">Explorar cautelosamente</button>
    `;
}

function escolherFloresta() {
    document.getElementById("story").textContent = 
        "Você entrou na floresta e encontrou uma árvore antiga com uma porta secreta. Você pode abrir a porta ou continuar explorando a floresta.";
    document.querySelector(".choices").innerHTML = `
        <button onclick="abrirPorta()">Abrir a porta</button>
        <button onclick="continuarFloresta()">Continuar explorando a floresta</button>
    `;
}

// Opções dentro da caverna
function atravessarPortal() {
    document.getElementById("story").textContent = 
        "Você atravessou o portal e foi transportado para uma cidade mágica. O que você faz agora?";
    document.querySelector(".choices").innerHTML = `
        <button onclick="explorarCidade()">Explorar a cidade</button>
        <button onclick="voltarPortal()">Voltar pelo portal</button>
    `;
}

function explorarCaverna() {
    document.getElementById("story").textContent = 
        "Você encontrou um antigo baú escondido na caverna. O que deseja fazer?";
    document.querySelector(".choices").innerHTML = `
        <button onclick="abrirBau()">Abrir o baú</button>
        <button onclick="deixarBau()">Deixar o baú e sair da caverna</button>
    `;
}

// Respostas dentro da caverna
function explorarCidade() {
    document.getElementById("story").textContent = 
        "Você descobriu uma guilda de aventureiros e decidiu se juntar a eles em novas missões. Fim da história.";
    document.querySelector(".choices").innerHTML = '<button onclick="reiniciar()">Recomeçar</button>';
}

function voltarPortal() {
    document.getElementById("story").textContent = 
        "Você voltou para a caverna e continuou sua jornada, mantendo o portal como um segredo. Fim da história.";
    document.querySelector(".choices").innerHTML = '<button onclick="reiniciar()">Recomeçar</button>';
}

function abrirBau() {
    document.getElementById("story").textContent = 
        "Dentro do baú, você encontrou um artefato lendário que lhe concede força extraordinária. Fim da história.";
    document.querySelector(".choices").innerHTML = '<button onclick="reiniciar()">Recomeçar</button>';
}

function deixarBau() {
    document.getElementById("story").textContent = 
        "Você decidiu não abrir o baú, respeitando o mistério que ele carrega. Fim da história.";
    document.querySelector(".choices").innerHTML = '<button onclick="reiniciar()">Recomeçar</button>';
}

// Opções na floresta
function abrirPorta() {
    document.getElementById("story").textContent = 
        "Você entrou pela porta da árvore e encontrou uma biblioteca mágica. Há um livro brilhante na prateleira. O que fazer?";
    document.querySelector(".choices").innerHTML = `
        <button onclick="lerLivro()">Ler o livro</button>
        <button onclick="sairBiblioteca()">Sair da biblioteca</button>
    `;
}

function continuarFloresta() {
    document.getElementById("story").textContent = 
        "Você continuou explorando e encontrou uma clareira iluminada com criaturas místicas. O que fazer?";
    document.querySelector(".choices").innerHTML = `
        <button onclick="observarCriaturas()">Observar as criaturas</button>
        <button onclick="sairFloresta()">Sair da floresta</button>
    `;
}

// Respostas na floresta
function lerLivro() {
    document.getElementById("story").textContent = 
        "Ao ler o livro, você ganhou conhecimento sobre magia antiga e se tornou um mago poderoso. Fim da história.";
    document.querySelector(".choices").innerHTML = '<button onclick="reiniciar()">Recomeçar</button>';
}

function sairBiblioteca() {
    document.getElementById("story").textContent = 
        "Você saiu da biblioteca e decidiu seguir seu caminho, levando consigo a sabedoria do local. Fim da história.";
    document.querySelector(".choices").innerHTML = '<button onclick="reiniciar()">Recomeçar</button>';
}

function observarCriaturas() {
    document.getElementById("story").textContent = 
        "As criaturas reconheceram sua presença e lhe concederam um amuleto de proteção. Fim da história.";
    document.querySelector(".choices").innerHTML = '<button onclick="reiniciar()">Recomeçar</button>';
}

function sairFloresta() {
    document.getElementById("story").textContent = 
        "Você deixou a floresta, levando consigo as lembranças das criaturas mágicas. Fim da história.";
    document.querySelector(".choices").innerHTML = '<button onclick="reiniciar()">Recomeçar</button>';
}

function reiniciar() {
    document.getElementById("story").textContent = 
             "Você se encontra em frente a uma caverna misteriosa e uma floresta encantada. Para onde deseja ir?";
    document.querySelector(".choices").innerHTML = `
        <button onclick="escolherCaverna()">Entrar na caverna</button>
        <button onclick="escolherFloresta()">Ir para a floresta</button>
    `;
}