        let referenciaIntervalo

        function lanzarMoneda() {
            // 0.- Leer el enunciado
            // 1.- Lanzar el Interval (animacion)
            // 2.- Lanzar el Timeout (parar animacion)
            // 3.- Mostrar texto de jugando...
            // 4.- Deshabilitar el botón de lanzar hasta que termina
            // 5.- Deshabilitar la opción de elegir
            const maximo = 15000
            const minimo = 10000
            const duracionTimoutMilisegundos = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo
            const tiempoAnimacionMilisegundos = 200
            animacionMoneda()
            referenciaIntervalo = setInterval(animacionMoneda, tiempoAnimacionMilisegundos)
            setTimeout(pararAnimacion, duracionTimoutMilisegundos)
            document.getElementById("salidaTexto").innerHTML = "Jugando..."
            document.getElementById("botonJugar").disabled = true
            document.getElementById("opcion").disabled = true
        }

        function animacionMoneda() {
            // 1.- Mostrar cara
            // 2.- Mostrar cruz en la siguiente iteración
            // 3.- Mostrar cara en la siguiente iteración
            // 4.- Por lo tanto, ir intercambiando entre cara o cruz
            const imagen = document.getElementById("imagen")
            const imgSeleccionada = imagen.src.includes("cara") ? "Assets/cruz.jpg" : "Assets/cara.jpg"
            imagen.src = imgSeleccionada
        }

        function pararAnimacion() {
            // 1.- Parar el Interval (animacion)
            // 2.- Calcular el resultado (aleatorio + opcion)
            clearInterval(referenciaIntervalo)
            calcularResultado()
        }

        function calcularResultado() {
            // 1.- Un aleatorio de cara o cruz
            // 2.- Comparar con eleccion del jugador
            // 3.- Mostrar el resultado
            // 4.- Habilitar botón para volver a jugar
            // 5.- Habilitar la opción
            const resultado = Math.random() < 0.5 ? "cara" : "cruz"
            const opcionJugador = document.getElementById("opcion")
            opcionJugador.disabled = false
            document.getElementById("imagen").src = "Assets/" + resultado + ".jpg"
            const salidaTexto = document.getElementById("salidaTexto")
            salidaTexto.innerHTML = resultado === opcionJugador.value ? "Has ganado !" : "Has perdido... bobo"
            document.getElementById("botonJugar").disabled = false
        }