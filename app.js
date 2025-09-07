// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//array de amigos
let amigos = [];

function agregarAmigo() {
  let barraTexto = document.querySelector("#amigo");
  if (barraTexto.value == "") {
    alert("Por favor, inserte un nombre.");
  } else {
    amigos.push(barraTexto.value);
    console.log(amigos);
    barraTexto.value = "";

    let listaHTML = document.querySelector("#listaAmigos");
    listaHTML.innerHTML = "";

    amigos.forEach((nombre) => {
      let elementoLista = document.createElement("li");
      elementoLista.textContent = nombre;
      listaHTML.append(elementoLista);
    });
  }
}
//modificar para que sorte los amigos hasta que no queden mas amigos
function sortearAmigo() {
  if (amigos.length != 0) {
    let amigo = Math.floor(Math.random() * amigos.length);
    console.log(amigo);

    document.querySelector("#listaAmigos").innerHTML = "";
    document.getElementById("resultado").innerHTML = `El amigo secreto sorteado es:${amigos[amigo]}`;
    amigos.pop()
  }
  else{
    console.log("No hay valores agregados")
  }
}
