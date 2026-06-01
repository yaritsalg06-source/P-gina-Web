if (window.location.pathname.includes("index")) {
    alert("Bienvenido gomero!!");
}
function ocultarImag() {
    let imagenes = document.getElementsByTagName('img');
    for (let i = 0; i < imagenes.length; i++) {
        imagenes[i].style.visibility = 'hidden';
    }
    alert("Imágenes ocultas");
}

function mostrarImag() {
    let imagenes = document.getElementsByTagName('img');
    for (let i = 0; i < imagenes.length; i++) {
        imagenes[i].style.visibility = 'visible';
    }
    alert("Imágenes visibles");
}

let contador = parseInt(localStorage.getItem("contador")) || 0;
actualizarContador();

function incrementar() {
    contador++;
    guardarYActualizar();
}

function decrementar() {
    contador--;
    guardarYActualizar();
}

function resetear() {
    contador = 0;
    guardarYActualizar();
}

function guardarYActualizar() {
    localStorage.setItem("contador", contador);
    actualizarContador();
}

function actualizarContador() {
    let etiqueta = document.getElementById("valorContador");
    if (!etiqueta) return;
    etiqueta.textContent = contador;
    if (contador > 0) etiqueta.style.color = "green";
    else if (contador < 0) etiqueta.style.color = "red";
    else etiqueta.style.color = "black";
}

function cambiarTexto() {
    let p = document.getElementById("mensaje");
    if (!p) return;
    p.textContent = "Valle Gran Rey es famoso por sus preciosas mantarrayas, ven a verlas!!";
    alert("A ver...");
}
function mostrarEleccion() {
    let valor = document.getElementById("restauranteInput").value;

    if (valor === "") {
        alert("Escribe un restaurante");
        return;
    }

    document.getElementById("eleccion").textContent = "Has elegido: " + valor;
    console.log("Restaurante elegido: " + valor);
}
function verInfoHotel(hotel) {
    let info = document.getElementById("infoHotel");

    if (hotel === "tecina") {
        info.innerHTML = " <b>Hotel Jardín Tecina</b><br>Tel: 922 14 58 50<br>Ubicado en San Sebastián con vistas al mar.";
    }

    if (hotel === "granrey") {
        info.innerHTML = "<b>Hotel Gran Rey</b><br>Tel: 922 80 58 59<br>Situado frente al mar en Valle Gran Rey.";
    }

    if (hotel === "bancal") {
        info.innerHTML = " <b>Bancal Hotel & Spa</b><br>Tel: 922 44 39 09<br>Hotel moderno con spa en San Sebastián.";
    }

    info.style.padding = "10px";
    info.style.background = "#eef";
    info.style.borderRadius = "10px";
}

