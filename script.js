const imagen = document.getElementById("imagenMoneda");
const textoJuego = document.getElementById("textoJuego");
const eleccion = document.getElementById("eleccion");
const botonJugar = document.getElementById("botonJugar");

let intervalMoneda;
let tiempoTotal;

botonJugar.addEventListener("click", iniciarJuego);

function iniciarJuego() {
    if (eleccion.value === "") {
        textoJuego.textContent = "Debes elegir cara o cruz";
        return;
    }

    botonJugar.disabled = true;
    textoJuego.textContent = "Lanzando la moneda...";

    // Tiempo aleatorio entre 1000 y 2000 ms
    tiempoTotal = Math.floor(Math.random() * 1000) + 1000;

    // Alternar imágenes cada 200 ms
    intervalMoneda = setInterval(alternarMoneda, 200);

    // Finalizar el juego
    setTimeout(finalizarJuego, tiempoTotal);
}

function alternarMoneda() {
    if (imagen.src.includes("cara")) {
        imagen.src = "Assets/cara.jpg";
    } else {
        imagen.src = "Assets/cruz.jpeg";
    }
}

function finalizarJuego() {
    clearInterval(intervalMoneda);

    const resultadoFinal = Math.random() < 0.5 ? "cara" : "cruz";

    if (resultadoFinal === "cara") {
        imagen.src = "Assets/cara.jpg";
    } else {
        imagen.src = "Assets/cruz.jpeg";
    }

    if (resultadoFinal === eleccion.value) {
        textoJuego.textContent = "¡Ganaste! Salió " + resultadoFinal;
    } else {
        textoJuego.textContent = "Perdiste. Salió " + resultadoFinal;
    }

    botonJugar.disabled = false;
}
