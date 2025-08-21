// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
console.log(amigos);

// Función para mostrar los amigos en la lista del HTML
function mostrarAmigos() {
    // 1. Obtener el elemento UL
    const lista = document.getElementById("listaAmigos");
  
    // 2. Limpiar la lista para evitar duplicados
    lista.innerHTML = "";
  
    // 3. Recorrer el arreglo con un bucle for
    for (let i = 0; i < amigos.length; i++) {
      // 4. Crear un nuevo <li> y agregarlo a la lista
      const li = document.createElement("li");
      li.textContent = amigos[i];
      lista.appendChild(li);
    }
  }

// Función para agregar un nuevo amigo
function agregarAmigo() {
  const input = document.getElementById("amigo"); // 👈 tu input tiene id="amigo"
  const nombre = input.value.trim();

  if (nombre === "") {
    alert("Debes ingresar un nombre");
    return;
  }

  amigos.push(nombre);   // lo añadimos al array
  mostrarAmigos();       // actualizamos la lista en pantalla
  input.value = "";      // limpiamos el campo
}


function sortearAmigo() {
    // 1. Validar que haya amigos en la lista
    if (amigos.length === 0) {
      alert("No hay amigos disponibles para sortear");
      return;
    }

    // 2. Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  
    // 3. Obtener el nombre sorteado
    const amigoSorteado = amigos[indiceAleatorio];
  
    // 4. Mostrar el resultado en el <ul id="resultado">
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🎁 Tu amigo secreto es: <strong>${amigoSorteado}</strong></li>`;
  }
  
  // 5️⃣ Event listener para capturar Enter en el input
const input = document.getElementById("amigo");
input.addEventListener("keyup", function(event) {
  if (event.key === "Enter" || event.keyCode === 13) {
    event.preventDefault();
    agregarAmigo();
  }
});

// 6️⃣ Mostrar lista inicial (vacía)
mostrarAmigos();