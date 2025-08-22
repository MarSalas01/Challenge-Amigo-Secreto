const amigos = [];
const input = document.querySelector('#amigo');
const listaAmigos = document.querySelector('#listaAmigos');
const resultadoElement = document.querySelector('#resultado');


function agregarAmigo(){
    const nombre = input.value.trim();

    if(nombre){
        amigos.push(nombre);
        actualizarLista();
    } else {
        alert('Por Favor inserte un nombre');
    }

    input.value = '';
    input.focus();
}

function actualizarLista(){
    listaAmigos.innerHTML = '';

    for(let i = 0; i < amigos.length; i++) {
        const listElement = document.createElement('li');
        listElement.textContent = amigos[i];
        listaAmigos.appendChild(listElement);
        console.log(listElement);
    }
}

function sortearAmigo() {
    const numeroMaximoPosible = amigos.length;
    const numeroAleatorio = Math.floor(Math.random()*numeroMaximoPosible);
    const amigoSecreto = amigos[numeroAleatorio];
    console.log(numeroAleatorio);

    if(amigos.length){
        console.log(amigoSecreto);

        resultadoElement.innerHTML = `Tu amigo secreto es ${amigoSecreto}`;
    } else {
        alert('Debes agregar amigos primero');
    }
}