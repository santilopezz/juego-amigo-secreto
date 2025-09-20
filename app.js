// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
     let inputNombre = document.querySelector('.input-wrapper input');
     let nombre= inputNombre.value;
     if(nombre == ''){
            alert('Por favor ingresa un nombre válido');
     }
     else{
        amigos.push(nombre);
        inputNombre.value = '';
     }

    actualizarLista();
}

function actualizarLista() {
let lista = document.querySelector('#listaAmigos');
let i;
lista.innerHTML = '';
for (i = 0; i < amigos.length; i++) {
    let li = document.createElement('li');
    li.textContent = amigos[i];
    lista.appendChild(li);
}
}

function sortear() {
    let amigoSecreto = document.querySelector('#resultado');
    if(amigos.length>1){
        let sorteado = parseInt(Math.random() * amigos.length);
        amigoSecreto.textContent = 'Tu amigo secreto es: ' + amigos[sorteado];
        
    }
    
}