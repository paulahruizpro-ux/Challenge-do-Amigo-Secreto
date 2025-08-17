let amigos = [];


function adicionarAmigo() {
   let  nome = document.getElementById('amigo').value;
    if (nome == '' ) {
        alert('Por favor, insira um nome.');
    } else {
        amigos.push(nome);
        atualizarLista();
    } 
    limparCampoNome();
}

function sortearAmigo() {
    if(amigos.length === 0) {
       return;
}
let indiceAleatorio = Math.floor(Math.random()*amigos.length); 
let nomeSorteado = amigos[indiceAleatorio]; 
let resultado = document.getElementById('resultado'); 
resultado.innerHTML = `O seu amigo secreto é: ${nomeSorteado}`;

let lista = document.getElementById('listaAmigos'); 
lista.style.display = 'none'; 
}



function limparCampoNome() {
    let nome = document.getElementById('amigo');
    nome.value = '';
}

function atualizarLista() {
    let ul = document.getElementById('listaAmigos'); 
    ul.innerHTML = '';
    for(let i = 0; i < amigos.length; i++ ) {
        let li = document.createElement ('li');
        li.textContent = amigos[i]; 
        ul.appendChild(li); 
    }
}
